/**
 * User: Tomasz Witkowski
 * Date: 20/09/12
 * Time: 14:40
 */


(function (packageName) {
    "use strict";
    var that,
    Events = null,
    Core = function () {
        that = this;
        var abstractSandboxFactory,
            createInstance,
            modules=[],
            debugMode = true,
            domReady = false
            ;
        //attaching core extensions
        if(typeof(salvin.extensions.Events) !== 'undefined'){
            Events = salvin.extensions.Events;
            Events.eventify(this);
        }
        jQuery(document).ready(function(){
           domReady = true;
           that.dispatchEvent('DomReady');
        });

        this.isDomReady = function(){
            return domReady;
        };


        this.init = function (initObject) {

        };

        abstractSandboxFactory = (function(){
            var sandboxes = [],
                sandboxId = null;

            return{
                //---
                getSandbox: function (moduleId, newFunctions ) {
                    sandboxId = moduleId;
                    if(sandboxes.indexOf(moduleId) === -1){
                        sandboxId = 'defaultSandbox';
                        if(sandboxes.length ===0){
                            sandboxes['defaultSandbox'] = salvin.Sandbox;
                        }
                    }
                    var Sandbox = sandboxes[sandboxId];
                    if(Sandbox) {
                        return new Sandbox(that,newFunctions);
                    }else{
                        return null;
                    }
                },
                registerSandbox: function ( sandboxType, SandboxClass ) {
                    sandboxes[sandboxType] = SandboxClass;
                    return abstractSandboxFactory;
                }
                //---
            };

        }());


        createInstance = function(moduleId, sandbox){
            var module = modules[moduleId],
                moduleInstance = null,
                prop,
                method;
            //todo Add the rest of params to apply.
            moduleInstance = module.creator.apply(null,[sandbox]);
            //todo: check this code!!!
            if(!debugMode){
                for(prop in moduleInstance){
                    method = moduleInstance[prop];
                    if(typeof(prop) === 'function'){
                        moduleInstance[prop] = function(prop, method){
                            return function (prop, method){
                                try{
                                    return method.apply(this, arguments);
                                }catch (exc){
                                    //log exception
                                    console.log(prop+' - '+exc.message);
                                }
                            };
                        }(prop, method);
                    }
                }
            }
            return moduleInstance;
        };

        this.register = function(moduleId, Creator){
            modules[moduleId] = {
                creator: Creator,
                instance: null,
                args: Array.prototype.slice.call(arguments, 2)
            };
            this.log(modules);
        };

        this.startAll = function(){
            var moduleId;
            for(moduleId in modules){
                if(modules.hasOwnProperty(moduleId)){
                    this.start(moduleId);
                }
            }
        };

        this.start = function(moduleId){
            if(moduleId !== 'undefined'){
                if(typeof(modules[moduleId]) === 'undefined'){
                    throw new Error('salvinCore: Module not found');
                }
                if(modules[moduleId].instance === null){
                    //todo how to assign sandbox to multiple instances.
                    modules[moduleId].instance = createInstance(moduleId, abstractSandboxFactory.getSandbox(moduleId,modules[moduleId].args));
                    modules[moduleId].instance.init();
                }
            }else{
                this.startAll();
            }

        };
        this.listModules = function(){
            var mod = null;
            console.log('Loaded modules:');
            for(mod in modules){
                console.log(mod);
            }
        };

        this.stop = function(moduleId){
            if(moduleId !== 'undefined'){
                if(modules[moduleId].instance === null){
                    //todo how to assign sandbox to multiple instances.
                    modules[moduleId].instance.destroy();
                    modules[moduleId].instance = null;
                }
            }else{
                this.stopAll();
            }
        };

        this.stopAll = function(){
            var moduleId;
            for(moduleId in modules){
                if(modules.hasOwnProperty(moduleId)){
                    this.start(moduleId);
                }
            }
        };
        this.log = function(){
            if(debugMode){
                //TODO check in different browsers.
                //console.log.apply(console,arguments);
            }
        };

        this.toString = function () {
            return 'salvinCore Object';
        };
        return this;
    };
    packageName.Core = Core;
})(namespace('salvin'));
//temporary code
(function(){
    "use strict";
    var appCore = new salvin.Core();
    appCore.init();
    try{
        appCore.Storage = new salvin.StorageComponent();
        appCore.Storage.init({
            core:appCore,
            prefix:'weidersix.com.'
        });
    }catch (e){
        console.log(e);
    }

    var handleAllEvents = function(e,d){
        "use strict";
        if(e.orginEventType === 'UserStatusChange'){
            console.log('==== appCore EVENT dispatch: '+e.orginEventType + ' new status: '+ d.status);
        }else{
            console.log('==== appCore EVENT dispatch: '+e.orginEventType);
        }
    };
    appCore.addEventListener('allEvents', handleAllEvents);
    try{
        appCore.FB = new salvin.extensions.FacebookComponent();
        appCore.FB.init({
            core: appCore,
            fbObject: FB
        });
    }catch(e){
        console.log(e);
    }

    appCore.Tracker = new salvin.extensions.Tracker();
    appCore.Tracker.init({
        core: appCore
    });


    window.appCore = appCore;
    console.log('appCore ready');
})();

