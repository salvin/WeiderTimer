/**
 * User: Tomasz Witkowski
 * Date: 24/09/12
 * Time: 21:53
 */
(function (packageName) {
    "use strict";
    var that, Sandbox, core;
    Sandbox = function (c) {
        that = this;
        core = c;

        this.addEventListener = function(evt, handler){
            core.addEventListener(evt, handler);
        };
        this.dispatchEvent = function(evt, data){
            core.dispatchEvent(evt, data);

        };


        this.isUIReady = function(){
            //todo: temp solution  - this should we contolled by core itself.
            return core.UserManager.isUIReady();
        };

        this.log = function(){
            core.log.apply(null,arguments);
        };

        this.storage = {
            getItem:function(data){
                return core.Storage.getItem(data);
            },
            getCookie:function(data){
                return core.Storage.getCookie(data);
            },
            setItem:function(data){
                return core.Storage.setItem(data);
            },
            removeItem:function(data){
                return core.Storage.removeItem(data);
            }
        };

        this.weider = {
            changeWeekdays: function(newCount){
                console.log('dispatch inner');
                core.dispatchEvent('innerWeekdaysChange', {newCount: newCount});
            },
            changeDay: function(newCount){
                core.dispatchEvent('innerDayChange', {newDay: newCount});
            },
            getSchedule: function(){
                return core.Schedule.getSchedule();
            },
            getDaySchedule: function(){
                return core.Schedule.getDaySchedule();
            },
            initSound:function(){
                core.Sound.init({core:core, buzz:buzz});
            },
            playSound:function(){
                core.Sound.play();
            },
            stopSound:function(){
                core.Sound.stop();
            },
            updateSettings: function(obj){
                core.Settings.updateSettings(obj);
            },
            getSettings: function(){
                return core.Settings.getSettings();
            },
            updateTimeDisplay: function(type){
                core.Settings.updateSettings({display: type});
                core.dispatchEvent('UpdateTimeDisplay', {display: type});
            },
            playSounds: function(val){
                if(val && !core.Sound.initialized()){
                    core.Sound.init({core:core, buzz:buzz});
                }
                core.Settings.updateSettings({playSounds: val});
            }

        };

        this.track = {
            event:function(){
                core.Tracker.trackEvent.apply(this,arguments);
            }
        };



        return this;
    };
    Sandbox.prototype.toString = function(){return 'Sandbox Object';};
    packageName.Sandbox = Sandbox;
}(namespace('salvin')));