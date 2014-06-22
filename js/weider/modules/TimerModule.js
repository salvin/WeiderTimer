/**
 * User: Tomasz Witkowski
 * Date: 06/02/13
 * Time: 22:44
 */
appCore.register('Timer', function(sandbox){
    "use strict";
    var that,
        sb = sandbox,
        values = {done:{},togo:{},exerciseTimer:5, seriesInterval:4,repeatInterval:0},
        controls = {},
        labels = {togo:{}, done:{}},
        displayCtrl = {},
        soundCtrl = {},
        playSound = true,
        timer = null,
        schedule = null,
        settings = {},
        interval = {},
        domRoot = null,
        soundPlaying = false,
        t = 6,
        time = 5,

        updateSchedule = function(){
//            schedule = {series: 1, repeats:1};
            schedule = sb.weider.getDaySchedule();
            values.done.series = 0;
            values.done.repeats = 0;
            values.togo.series = schedule.series;
            values.togo.repeats = schedule.repeat;
            values.togo.exercise = t;
            values.done.exercise = 0;
            values.exerciseTimer = time;
            updateView();
        },

        init = function(initObject) {
            sb.addEventListener('WeekdaysChange', updateSchedule);
            sb.addEventListener('DayChange', updateSchedule);
            domRoot = jQuery('#timerRoot');
            controls.start = jQuery('#ctrlStart', '.timerControls');
            controls.pause = jQuery('#ctrlPause', '.timerControls');
            controls.reset = jQuery('#ctrlReset', '.timerControls');
            labels.togo.series = jQuery('#seriesToGo', domRoot);
            labels.togo.repeats = jQuery('#repeatsToGo', domRoot);
            labels.togo.exercise = jQuery('#exerciseToGo', domRoot);
            labels.done.series = jQuery('#currentSeries', domRoot);
            labels.done.exercise = jQuery('#currentExercise', domRoot);
            labels.done.repeats = jQuery('#currentRepeat', domRoot);
            labels.main = jQuery('#mainTimer', domRoot);
            controls.display = {};
            controls.display.elapsed = jQuery('#timeElapsed');
            controls.display.left = jQuery('#timeLeft');

            controls.sound = {};
            controls.sound.yes = jQuery('#soundYes');
            controls.sound.no = jQuery('#soundNo');

            settings = sb.weider.getSettings();
            console.log("settings");

            interval = {repeat: 0, exercise: 2, series: 4};
            if (typeof(settings.interval) !== 'undefined') {
                interval.repeat = settings.interval.repeat || interval.repeat;
                interval.exercise = settings.interval.exercise || interval.exercise;
                interval.series = settings.interval.series || interval.series;
            }

            updateSchedule();

            controls.start.click(function(){
                controls.start.addClass('disabled');
                controls.pause.removeClass('disabled');
                controls.reset.addClass('disabled');
                sb.track.event('WeiderTimer','Play','Play',0, true);
                timerAction();
            });
            controls.pause.click(function(){
                controls.start.removeClass('disabled');
                controls.pause.addClass('disabled');
                controls.reset.removeClass('disabled');
                sb.track.event('WeiderTimer','Pause','Pause',0, true);
                stopTimer();
            });
            controls.reset.click(function(){
                controls.start.removeClass('disabled');
                controls.pause.addClass('disabled');
                controls.reset.removeClass('disabled');
                sb.dispatchEvent('TimerReset');
                sb.track.event('WeiderTimer','Reset','Reset',0, true);
                updateSchedule();
            });

            controls.display.elapsed.click(function(){
                controls.display.left.removeClass('btn-primary');
                controls.display.elapsed.addClass('btn-primary');
                sb.track.event('WeiderSettings','TimeDisplay','Elapsed',0, true);
                sb.weider.updateTimeDisplay('elapsed');
            });
            controls.display.left.click(function(){
                controls.display.elapsed.removeClass('btn-primary');
                controls.display.left.addClass('btn-primary');
                sb.track.event('WeiderSettings','TimeDisplay','Left',0, true);
                sb.weider.updateTimeDisplay('left');
            });

            controls.sound.yes.click(function(){
//                alert('controls.sound.yes.click');
                controls.sound.no.removeClass('btn-primary');
                controls.sound.yes.addClass('btn-primary');
                playSound = true;
                sb.track.event('WeiderSettings','PlaySounds','Yes',0, true);
                sb.weider.playSounds(playSound);
            });
            controls.sound.no.click(function(){
                controls.sound.yes.removeClass('btn-primary');
                controls.sound.no.addClass('btn-primary');
                sb.track.event('WeiderSettings','PlaySounds','No',0, true);
                playSound = false;
                sb.weider.playSounds(playSound);
            });


            initView();
        },

        timerAction = function() {
            // starts countdown
            var v = 0;
            if (values.exerciseTimer === 0) {
                //play sound
                //reset
                values.exerciseTimer = time;
                if(playSound){
                    sb.weider.playSound();
                }
                v = interval.repeat;
                soundPlaying = true;
                //--------------------
                values.done.repeats += 1;
                values.togo.repeats -= 1;
                sb.dispatchEvent('RepeatEnd');
                if(values.togo.repeats === 0){
                    v = interval.exercise;
                   //next excercise
                    // ---------------- reset
                    values.done.repeats = 1;
                    values.togo.repeats = schedule.repeat;
                    sb.dispatchEvent('NextExercise')
                    //--------------------------------
                    values.done.exercise += 1;
                    values.togo.exercise -= 1;
                    if(values.togo.exercise === 0){
                        sb.dispatchEvent('SeriesStart');
                        v = interval.series;
                        //next series
                        //reset
                        values.done.exercise = 1;
                        values.togo.exercise = 6;
                        //-----------------
                        values.done.series += 1;
                        values.togo.series -= 1;

                        if(values.togo.series === 0){
                            //All series done.
                            sb.track.event('Weider','SessionCompleted','',0, true);
                            stopTimer();
                            return;
                        }
                    }
                }
            } else {
                if(values.exerciseTimer === time){
                    sb.dispatchEvent('RepeatStart');
                }
                values.exerciseTimer--;
                v = 0;
                if(soundPlaying){
                    sb.weider.stopSound();
                }

                /*values.done.repeats += 1;
                values.togo.repeats -= 1;*/


                /*values.done.series = 0;
                values.togo.series = schedule.series;*/

            }
            updateView();
            startTimer(timerAction, 1000+v*1000);
        },

        startTimer = function(action,delay){
            stopTimer();
            timer = setTimeout(action,delay);
        },
        stopTimer = function(){
            if(timer !== null){
                clearTimeout(timer);
            }
        },

        updateView = function(){
            labels.togo.series.html(values.togo.series);
            labels.togo.repeats.html(values.togo.repeats);
            labels.togo.exercise.html(values.togo.exercise);
            labels.done.series.html(values.done.series);
            labels.done.exercise.html(values.done.exercise);
            labels.done.repeats.html(values.done.repeats);
            labels.main.html(values.exerciseTimer);

        },
        updateSettings = function(){
            var cacheObj = {};
            cacheObj.interval = interval;
            sb.weider.updateSettings(cacheObj);
        },

        updateInverval = function(name, val){
            switch (name){
                case "sessionInterval":
                    interval.series = val;
                    break;
                case "exerciseInterval":
                    interval.exercise = val;
                    break;

                case "repeatInterval":
                    interval.repeat = val;
                    break;
            }
            sb.track.event('WeiderSettings','IntervalChange',name,0, true);
            updateSettings();
        },

        initStepper = function(stepperId, initval){
            var minus = jQuery('#'+stepperId+'-minus'),
                plus = jQuery('#'+stepperId+'-plus'),
                val = jQuery('#'+stepperId),
                name = stepperId;
            if(typeof(initval) !== 'undefined'){
                val.val(parseInt(initval));
            }

            minus.click(function(){
                var newval = parseInt(val.val())-1;
                val.val(newval);
                updateInverval(name, newval);
            });
            plus.click(function(){
                var newval = parseInt(val.val())+1;
                val.val(newval);
                updateInverval(name, newval);
            });
            val.change(function(){
//                console.log('stepper value change for '+name);
                updateInverval(name, val.val());
            });
        },

        initView = function(){
            initStepper('repeatInterval',interval.repeat);
            initStepper('exerciseInterval',interval.exercise);
            initStepper('sessionInterval',interval.series);

            if(typeof(settings.display) !== 'undefined'){
                if(settings.display === "left"){
                    controls.display.left.click();
                }else{
                    controls.display.elapsed.click();
                }
            }

            if(typeof(settings.display) !== 'undefined'){
                if(settings.display === "left"){
                    controls.display.left.click();
                }else{
                    controls.display.elapsed.click();
                }
            }
        },

        destroy = function(){

        };

    return {
        init:init,
        destroy:destroy
    };
});