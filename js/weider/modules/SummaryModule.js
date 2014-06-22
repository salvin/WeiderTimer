/**
 * User: Tomasz Witkowski
 * Date: 06/02/13
 * Time: 17:29
 */
appCore.register('Summary', function(sandbox){
    "use strict";
    var that,
        sb = sandbox,
        sessionInfo = {series:0, repeat:0},
        seriesElem = null,
        repeatsElem = null,
        durationElem = null,

        init = function(initObject){
            sb.addEventListener('WeekdaysChange', updateView);
            sb.addEventListener('DayChange', updateView);
            var root = jQuery('.sessionSummary');
            seriesElem = jQuery('#ser',root);
            repeatsElem = jQuery('#rep',root);
            durationElem = jQuery('#dur',root);
            updateView();
        },
        updateView = function(){
            sessionInfo = sb.weider.getDaySchedule();
            seriesElem.html(sessionInfo.series);
            repeatsElem.html(sessionInfo.repeat);
            var duration = (sessionInfo.repeat * 6) * 6 * sessionInfo.series;
            var txt = Math.floor(duration/60) + 'min '+ (duration%60) +'sec';
            durationElem.html(txt);
        },

        destroy = function(){

        };

    return {
        init:init,
        destroy:destroy
    };
});