/**
 * User: Tomasz Witkowski
 * Date: 12/02/13
 * Time: 13:29
 */
(function (packageName) {
    "use strict";
    var that, Settings;

    Settings = function () {
        that = this;
        var core = null,
            cacheObj = {},
            saveChanges = function(){
                core.Storage.setItem({key:'weiderSettings', type:'localStorage', value: cacheObj});
            }
        ;
        this.init = function (initObject) {
            core = initObject.core;
            if(core === null){
                throw new TypeError('Settings:Core is not defined');
            }
            cacheObj = core.Storage.getItem({key:'weiderSettings', type:'localStorage'});
            if(cacheObj === null){
                cacheObj = null;
            }
        };

        this.testYesterday = function(){
            var newdate = new Date(2013,1,15);
            cacheObj.updated = newdate.getTime();
            saveChanges();
        };

        this.getSettings = function(){
            return cacheObj;
        };
        this.updateSettings = function(obj){
            if(cacheObj === null){
                cacheObj = {};
            }
            if(typeof(obj.interval) !== 'undefined'){
                cacheObj.interval = obj.interval;
            }
            if(typeof(obj.newCount) !== 'undefined'){
                cacheObj.daysaweek = parseInt(obj.newCount);
            }
            if(typeof(obj.display) !== 'undefined'){
                cacheObj.display = obj.display;
            }
            if(typeof(obj.playSounds) !== 'undefined'){
                cacheObj.playSounds = obj.playSounds;
            }
            if(typeof(obj.newDay) !== 'undefined'){
                cacheObj.dayOfTraining = parseInt(obj.newDay);
                var t = new Date();
                cacheObj.updated = t.getTime();
            }
            saveChanges();
        };
        return this;
    };
    packageName.Settings = Settings;
    packageName.Settings.prototype.toString = function() {return 'Settings Object';};

})(namespace('salvin.weider'));