/**
 * User: Tomasz Witkowski
 * Date: 14/02/13
 * Time: 17:11
 */
appCore.register('TimeDisplay', function(sandbox){
    "use strict";
    var that,
        sb = sandbox,
        currentMode = 'left',
        settings = null,
        domElements = {},
        updateDisplay = function(){
            if(currentMode === 'left'){
                domElements.left.removeClass('hidden');
                domElements.elapsed.addClass('hidden');
            }else{
                domElements.left.addClass('hidden');
                domElements.elapsed.removeClass('hidden');
            }
        },
        handleUpdateTimeDisplay = function(e,d){
            if(currentMode !== d.display){
                currentMode = d.display;
                updateDisplay();
            }
        },


        init = function(initObject){
            sb.addEventListener('UpdateTimeDisplay', handleUpdateTimeDisplay);
            domElements.left = jQuery('.displayMode.togo');
            domElements.elapsed = jQuery('.displayMode.elapsed');

            settings = sb.weider.getSettings();
            if(settings !== null && typeof(settings.display) !== 'undefined'){
                currentMode = settings.display;
                updateDisplay();
            }
            initView();
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