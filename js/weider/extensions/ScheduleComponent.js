/**
 * User: Tomasz Witkowski
 * Date: 06/02/13
 * Time: 14:28
 */
(function (packageName) {
    "use strict";
    var that, Schedule;

    Schedule = function () {
        that = this;
            var core = null,
                sevenday = {
                    "1": { series: 1, repeat: 6},
                    "2": { series: 2, repeat: 6},
                    "3": { series: 2, repeat: 6},
                    "4": { series: 3, repeat: 6},
                    "5": { series: 3, repeat: 6},
                    "6": { series: 3, repeat: 6},
                    "7": { series: 3, repeat: 8},
                    "8": { series: 3, repeat: 8},
                    "9": { series: 3, repeat: 8},
                    "10": { series: 3, repeat: 8},
                    "11": { series: 3, repeat: 10},
                    "12": { series: 3, repeat: 10},
                    "13": { series: 3, repeat: 10},
                    "14": { series: 3, repeat: 10},
                    "15": { series: 3, repeat: 12},
                    "16": { series: 3, repeat: 12},
                    "17": { series: 3, repeat: 12},
                    "18": { series: 3, repeat: 12},
                    "19": { series: 3, repeat: 14},
                    "20": { series: 3, repeat: 14},
                    "21": { series: 3, repeat: 14},
                    "22": { series: 3, repeat: 14},
                    "23": { series: 3, repeat: 16},
                    "24": { series: 3, repeat: 16},
                    "25": { series: 3, repeat: 16},
                    "26": { series: 3, repeat: 16},
                    "27": { series: 3, repeat: 18},
                    "28": { series: 3, repeat: 18},
                    "29": { series: 3, repeat: 18},
                    "30": { series: 3, repeat: 18},
                    "31": { series: 3, repeat: 20},
                    "32": { series: 3, repeat: 20},
                    "33": { series: 3, repeat: 20},
                    "34": { series: 3, repeat: 20},
                    "35": { series: 3, repeat: 22},
                    "36": { series: 3, repeat: 22},
                    "37": { series: 3, repeat: 22},
                    "38": { series: 3, repeat: 22},
                    "39": { series: 3, repeat: 24},
                    "40": { series: 3, repeat: 24},
                    "41": { series: 3, repeat: 24},
                    "42": { series: 3, repeat: 24}
                },
                sixday = {
                    "1":  { series: 1, repeat: 6},
                    "2":  { series: 2, repeat: 6},
                    "3":  { series: 2, repeat: 6},
                    "4":  { series: 3, repeat: 6},
                    "5":  { series: 3, repeat: 6},
                    "6":  { series: 3, repeat: 6},
                    "7":  { series: 0, repeat: 0},
                    "8":  { series: 3, repeat: 8},
                    "9":  { series: 3, repeat: 8},
                    "10":  { series: 3, repeat: 8},
                    "11":  { series: 3, repeat: 8},
                    "12":  { series: 3, repeat: 10},
                    "13":  { series: 3, repeat: 10},
                    "14":  { series: 0, repeat: 0},
                    "15":  { series: 3, repeat: 10},
                    "16":  { series: 3, repeat: 10},
                    "17":  { series: 3, repeat: 12},
                    "18":  { series: 3, repeat: 12},
                    "19":  { series: 3, repeat: 12},
                    "20":  { series: 3, repeat: 12},
                    "21":  { series: 0, repeat: 0},
                    "22":  { series: 3, repeat: 14},
                    "23":  { series: 3, repeat: 14},
                    "24":  { series: 3, repeat: 14},
                    "25":  { series: 3, repeat: 14},
                    "26":  { series: 3, repeat: 16},
                    "27":  { series: 3, repeat: 16},
                    "28":  { series: 0, repeat: 0},
                    "29":  { series: 3, repeat: 16},
                    "30":  { series: 3, repeat: 16},
                    "31":  { series: 3, repeat: 18},
                    "32":  { series: 3, repeat: 18},
                    "33":  { series: 3, repeat: 18},
                    "34":  { series: 3, repeat: 18},
                    "35":  { series: 0, repeat: 0},
                    "36":  { series: 3, repeat: 20},
                    "37":  { series: 3, repeat: 20},
                    "38":  { series: 3, repeat: 20},
                    "39":  { series: 3, repeat: 20},
                    "40":  { series: 3, repeat: 22},
                    "41":  { series: 3, repeat: 22},
                    "42":  { series: 0, repeat: 0},
                    "43":  { series: 3, repeat: 22},
                    "44":  { series: 3, repeat: 22},
                    "45":  { series: 3, repeat: 24},
                    "46":  { series: 3, repeat: 24},
                    "47":  { series: 3, repeat: 24},
                    "48":  { series: 3, repeat: 24}
                },
            weekdays = 7,
            currentDay = 1,
            currentSchedule = sevenday,

            handleWeekdaysChange = function(e,d){
                console.log(d.newCount);
                if(d.newCount !== weekdays){
                    if(d.newCount === 6){
                        currentSchedule = sixday;
                    }else{
                        currentSchedule = sevenday;
                    }
                    weekdays = d.newCount;
                    console.log('handleWeekdaysChange');
                    updateSettings({newCount:d.newCount});
                    console.log('preWeekdaysChange');
                    core.dispatchEvent('WeekdaysChange', {newCount:d.newCount});
                }

            },
            handleDayChange = function(e,d){
               currentDay = d.newDay;
               updateSettings({newDay:d.newDay});
               core.dispatchEvent('DayChange', {newDay:d.newDay});
            },
            updateSettings = function(obj){
                core.Settings.updateSettings(obj);
            };
        this.init = function (initObject) {
            core = initObject.core;
            if(core === null){
                throw new TypeError('Schedule:Core is not defined');
            }
            core.addEventListener('innerWeekdaysChange', handleWeekdaysChange);
            core.addEventListener('innerDayChange', handleDayChange);
        };

        this.getSchedule = function(){
            return currentSchedule;
        };
        this.getDaySchedule = function(){
            return currentSchedule[currentDay];
        };
        return this;
    };
    packageName.Schedule = Schedule;
    packageName.Schedule.prototype.toString = function() {return 'Schedule Object';};

})(namespace('salvin.weider'));