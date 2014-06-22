/**
 * User: Tomasz Witkowski
 * Date: 05/02/13
 * Time: 17:31
 */
appCore.register('Weekdays', function(sandbox){
    "use strict";
    var that,
        sb = sandbox,
        daysaweek = 7,
        btn6 = null,
        btn7 = null,
        settings = {},

        init = function(initObject){
            btn6 = jQuery('#days6');
            btn7 = jQuery('#days7');
            btn6.click(function(){
                if(daysaweek !== 6){
                    btn7.removeClass('btn-primary');
                    btn6.addClass('btn-primary');
                    daysaweek = 6;
                    sb.weider.changeWeekdays(daysaweek);
                }
            });
            btn7.click(function(){
                if(daysaweek !== 7){
                    btn6.removeClass('btn-primary');
                    btn7.addClass('btn-primary');
                    daysaweek = 7;
                    sb.weider.changeWeekdays(daysaweek);
                }
            });
            settings = sb.weider.getSettings();
            if(settings !== null && typeof(settings.daysaweek) !== 'undefined'){
                if(settings.daysaweek === 6){
                    btn6.click();
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