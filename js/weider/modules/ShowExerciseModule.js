/**
 * User: Tomasz Witkowski
 * Date: 13/10/13
 * Time: 20:36
 */
appCore.register('ShowExercise', function(sandbox){
    "use strict";
    var sb = sandbox,
        domRoot = null,
        currentExcercise = 1,

        init = function(){
            sb.addEventListener('RepeatStart', handleRepeatStart);
            sb.addEventListener('RepeatEnd', handleRepeatEnd);
            sb.addEventListener('TimerReset', handleNextSeries);
            sb.addEventListener('NextExercise', handleNextExercise);
            sb.addEventListener('SeriesStart', handleNextSeries);
            domRoot = jQuery('.excerciseImg', '#timerRoot');
            initView();
        },
        handleNextSeries = function(){
            domRoot.removeClass('e'+currentExcercise);
            domRoot.addClass('e0');
            currentExcercise = 1;
        },
        handleNextExercise = function(){
            console.log('+++handleExercise');
            domRoot.removeClass('e'+currentExcercise);
            currentExcercise = (currentExcercise+1===7)?1:currentExcercise+1;
        },
        handleRepeatStart = function(){
            console.log('+++handleStart');
            domRoot.addClass('e'+currentExcercise);
        },
        handleRepeatEnd = function(){
            console.log('+++handleEnd');
            domRoot.removeClass('e'+currentExcercise);
//            domRoot.addClass('e0');
        },
        initView = function(){

        },

        destroy = function(){

        };

    return {
        init:init,
        destroy:destroy
    };
});