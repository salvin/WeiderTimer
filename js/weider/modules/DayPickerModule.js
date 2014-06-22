/**
 * User: Tomasz Witkowski
 * Date: 06/02/13
 * Time: 14:21
 */
appCore.register('DayPicker', function(sandbox){
    "use strict";
    var that,
        sb = sandbox,
        domElem = null,
        weekdays = 7,
        schedule = null,
        currentDay = 1,
        dayOfTraining = 1,
        sevenDaysOptions = null,
        settings = null,

        handleWeekdaysChange = function(e,d){
            if(d.newCount !== weekdays){
                weekdays = d.newCount;
                sb.track.event('WeiderSettings','DaysAWeekChange',weekdays,0, true);
                if(weekdays === 7){
                    sevenDaysOptions.each(function(){
                        jQuery(this).prop("disabled", true).addClass('addline');
                    });
                }else{
                    sevenDaysOptions.each(function(){
                        jQuery(this).prop("disabled", false).removeClass('addline');
                    });
                }
            }
            schedule = sb.weider.getSchedule();
            if(typeof(schedule[currentDay])=== 'undefined'){
                setDomElemVal(dayOfTraining);
            }
        },
        setDomElemVal = function(newVal){
            $("option", domElem).filter(function() {
                return $(this).text() == newVal;
            }).attr('selected', true);
            domElem.val(newVal);
        },
        handleDomElemChange = function(e){
            sb.track.event('WeiderSettings','DayChange','Manual',0, true);
//            console.log(domElem.val());
            setCurrentDay(domElem.val());
        },
        setCurrentDay = function(newDay){
            currentDay = newDay;// class="sixDaySchedule"
            sb.weider.changeDay(newDay);
        },
        init = function(initObject){
            sb.addEventListener('WeekdaysChange', handleWeekdaysChange);
            domElem = jQuery('#currentDay');
            sevenDaysOptions = jQuery('.sixDaySchedule');
            domElem.change(handleDomElemChange);
            settings = sb.weider.getSettings();
            var t = new Date();
            dayOfTraining = 1;
            if(settings !== null && typeof(settings.updated) !== 'undefined'){
                var lastVisit = new Date(settings.updated);
                if(t.getDate()=== lastVisit.getDate()){
                    //dont have to change anything
                    dayOfTraining = settings.dayOfTraining;
                }else{
                    var toAdd = parseInt((t.getTime()-lastVisit.getTime())/(24*3600*1000));
                    dayOfTraining = settings.dayOfTraining + toAdd;
                    schedule = sb.weider.getSchedule();
                    if(typeof(schedule[dayOfTraining]) === 'undefined'){
                        dayOfTraining = 1;
                    }
                    sb.track.event('WeiderSettings','DayChange','Auto',0, true);
                }
            }else{
//                store first record
            }
            setDomElemVal(dayOfTraining);
            setCurrentDay(domElem.val());
        },

        destroy = function(){

        };

    return {
        init:init,
        destroy:destroy
    };
});