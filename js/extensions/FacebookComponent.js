(function (packageName) {
    "use strict";
    var that, FacebookComponent;

    /*This component relies in FB all.js being loaded prior to runing init action of this object */
    FacebookComponent = function () {
        var fb = null,
            appId = null,
            appSecret = null,
            passEventToCore,
            evtHandlers = {
                handleAuthLogin: null,
                handleAuthResponseChange: null,
                handleAuthStatusChange: null,
                handleAuthLogout: null,
                handleAuthPrompt: null,
                handleXfbmlRender: null,
                handleEdgeCreate: null,
                handleEdgeRemove: null,
                handleCommentCreate: null,
                handleCommentRemove: null,
                handleMessageSend: null
            },
            appCore,
            //settings
            forceStatusCheckOnInit = false,

            authStatus = 'unknown' // default value.

            ;
        that = this;

        evtHandlers.handleAuthLogin = function(d){passEventToCore('auth.login',d)};
        evtHandlers.handleAuthResponseChange = function(d){passEventToCore('auth.authResponseChange',d)};
        evtHandlers.handleAuthStatusChange = function(d){passEventToCore('auth.statusChange',d)};
        evtHandlers.handleAuthLogout = function(d){passEventToCore('auth.logout',d)};
        evtHandlers.handleAuthPrompt = function(d){passEventToCore('auth.prompt',d)};
        evtHandlers.handleXfbmlRender = function(d){passEventToCore('xfbml.render',d)};
        evtHandlers.handleEdgeCreate = function(d){passEventToCore('edge.create',d)};
        evtHandlers.handleEdgeRemove = function(d){passEventToCore('edge.remove',d)};
        evtHandlers.handleCommentCreate = function(d){passEventToCore('comment.create',d)};
        evtHandlers.handleCommentRemove = function(d){passEventToCore('comment.remove',d)};
        evtHandlers.handleMessageSend = function(d){passEventToCore('message.send',d)};

        passEventToCore = function(evtType, evtData){
            //do we want to send duplicated events?
            var dispatchThisEvent = true;
            evtData = (typeof(evtData) !== 'undefined')? evtData: null;
            if(evtData !== null){
                switch(evtType){
                    case 'auth.authResponseChange':
                        if(authStatus !== evtData.status){
                            authStatus = evtData.status;
                        }else{
                            dispatchThisEvent = false;
                        }
                        break;

                    case 'auth.logout':
                        if(authStatus !== evtData.status){
                            authStatus = evtData.status;
                        }else{
                            dispatchThisEvent = false;
                        }
                        break;

                    case 'auth.statusChange':
                        if(authStatus !== evtData.status){
                            authStatus = evtData.status;
                        }else{
                            dispatchThisEvent = false;
                        }
                        break;
                }
            }
            if(dispatchThisEvent){
                appCore.dispatchEvent('fb.'+evtType, {data:evtData});
            }
        };

        this.init = function (initObject) {
            fb = initObject.fbObject||null;
            appCore = initObject.core||null;
            if(fb === null){
                throw new Error('FB lib not available');
            }

            if(appCore === null){
                throw new Error('appCore not present');
            }
            fb.Event.subscribe('auth.login', evtHandlers.handleAuthLogin);
            fb.Event.subscribe('auth.authResponseChange', evtHandlers.handleAuthResponseChange);
            fb.Event.subscribe('auth.statusChange', evtHandlers.handleAuthStatusChange);
            fb.Event.subscribe('auth.logout', evtHandlers.handleAuthLogout);
            fb.Event.subscribe('auth.prompt', evtHandlers.handleAuthPrompt);
            fb.Event.subscribe('xfbml.render', evtHandlers.handleXfbmlRender);
            fb.Event.subscribe('edge.create', evtHandlers.handleEdgeCreate);
            fb.Event.subscribe('edge.remove', evtHandlers.handleEdgeRemove);
            fb.Event.subscribe('comment.create', evtHandlers.handleCommentCreate);
            fb.Event.subscribe('comment.remove', evtHandlers.handleCommentRemove);
            fb.Event.subscribe('message.send', evtHandlers.handleMessageSend);
        };
        /* FB api core methods*/
        this.initApp = function(appInfo){
            console.log('FacebookComponent initApp');
            if(forceStatusCheckOnInit){
                appInfo.status = true; //adding this to force status check upon
            }
            fb.init(appInfo);
        };
        //adding wrappers to FB api functions.
        this.api = function(){
            fb.api.apply(null, arguments);
        };
        this.ui = function(){
            fb.ui.apply(null, arguments);
        };
        /* FB api auth methods*/
        this.getAuthResponse = function(){
            fb.getAuthResponse.apply(null, arguments);
        };
        this.getLoginStatus = function(){
            fb.getLoginStatus.apply(null, arguments);
        };

        this.login = function(){
            fb.login.apply(null, arguments);
        };

        this.logout = function(){
            fb.logout.apply(null, arguments);
        };
        /* FB api Event Handling methods*/
        this.Event = this.Event||{};
        this.Event.subscribe = function(){
            fb.Event.subscribe.apply(null, arguments);
        };

        this.Event.unsubscribe = function(){
            fb.Event.unsubscribe.apply(null, arguments);
        };
        /* FB api XFBML methods*/
        this.XFBML = this.XFBML ||{};
        this.XFBML.parse = function(){
            fb.apply(null, arguments);
        };


        /* FB api Canvas Methods*/
        this.Canvas = this.Canvas ||{};
        this.Canvas.Prefetcher = this.Canvas.Prefetcher ||{};

        this.Canvas.Prefetcher.addStaticResource = function(){
            fb.Canvas.Prefetcher.addStaticResource.apply(null, arguments);
        };


        this.Canvas.Prefetcher.setCollectionMode = function(){
            fb.Canvas.Prefetcher.setCollectionMode.apply(null, arguments);
        };


        this.Canvas.getPageInfo = function(){
            fb.Canvas.getPageInfo.apply(null, arguments);
        };


        this.Canvas.hideFlashElement = function(){
            fb.Canvas.hideFlashElement.apply(null, arguments);
        };


        this.Canvas.scrollTo = function(){
            fb.Canvas.scrollTo.apply(null, arguments);
        };


        this.Canvas.setAutoGrow = function(){
            fb.Canvas.setAutoGrow.apply(null, arguments);
        };


        this.Canvas.setDoneLoading = function(){
            fb.Canvas.setDoneLoading.apply(null, arguments);
        };


        this.Canvas.setSize = function(){
            fb.Canvas.setSize.apply(null, arguments);
        };


        this.Canvas.setUrlHandler = function(){
            fb.Canvas.setUrlHandler.apply(null, arguments);
        };


        this.Canvas.showFlashElement = function(){
            fb.Canvas.showFlashElement.apply(null, arguments);
        };


        this.Canvas.startTimer = function(){
            fb.Canvas.startTimer.apply(null, arguments);
        };


        this.Canvas.stopTimer = function(){
            fb.Canvas.stopTimer.apply(null, arguments);
        };





        return this;
    };

    packageName.FacebookComponent = FacebookComponent;
    packageName.FacebookComponent.prototype.toString = function() {return 'FacebookComponent Object';};

})(namespace('salvin.extensions'));