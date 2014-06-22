/**
 * User: Tomasz Witkowski
 * Date: 16/10/12
 * Time: 11:12
 * https://developer.mozilla.org/en-US/docs/DOM/Storage
 * MDN Storage interface
 * interface Storage {
  readonly attribute unsigned long length;
  DOMString? key(unsigned long index);
  getter DOMString getItem(DOMString key);
  setter creator void setItem(DOMString key, DOMString value);
  deleter void removeItem(DOMString key);
  void clear();
};
 */
(function (packageName) {
    "use strict";
    var that, StorageComponent;

    StorageComponent = function () {
        that = this;
        var storageFactory,
            storagePrefix = null,
            core = null,
            cookieStorage = null,
            storageObject = null,
            defaultStorageEngine = 'cookie';

        storageFactory = {
            getStoreObject: function(data){
                switch (data.type){
                    case 'cookie':
                        return cookieStorage;
                        break;
                    case 'sessionStorage':
                        if(typeof(window.sessionStorage) !== 'undefined'){
                            return window.sessionStorage;
                        }else{
                            return cookieStorage;
                        }
                        break;
                    case 'localStorage':
                        if(typeof(window.localStorage) !== 'undefined'){
                            return window.localStorage;
                        }else{
                            return cookieStorage;
                        }
                        break;
                    default:
                        return cookieStorage;
                }
            }
        };

        //In order to keep consistant interface we create facade object
        cookieStorage = {
            getItem: function(key, options){
                return $.cookie(key, options);
            }, // Get value of the key
            setItem: function(key, data, options){
                return $.cookie(key, data, options);
            }, // Add a new key with value data
            removeItem: function(key, options){
                return $.cookie(key,null, options);
            }, // Remove the item key
            toString: function(){return 'Storage CookieWrapper Object';}
        };

        this.init = function (initObject) {
            storagePrefix = initObject.prefix || null;
            core = initObject.core||null;

            if(core === null){
                console.log('StorageComponent: Core not set!');
                throw TypeError('Core Object not defined');
            }
        };

        this.setItem = function(data){
            data.type = data.type || defaultStorageEngine;
            if(typeof(data.prefix) !== 'undefined'){
                data.key = data.prefix + data.key;
            }else{
                if(storagePrefix !== null){
                    data.key = storagePrefix + data.key;
                }
            }
            data.value = JSON.stringify(data.value);

            storageObject = storageFactory.getStoreObject(data);
            if(typeof(data.options) !== 'undefined'){
                //to enable passing options for cookie.
                storageObject.setItem(data.key, data.value, data.options);
            }else{
                storageObject.setItem(data.key, data.value);
            }
        };

        this.getItem = function(data){
            var stringified = null;
            if(typeof(data.prefix) !== 'undefined'){
                data.key = data.prefix + data.key;
            }else{
                if(storagePrefix !== null){
                    data.key = storagePrefix + data.key;
                }
            }
            storageObject = storageFactory.getStoreObject(data);
            console.log(' === CACHE - get: '+data.key);
            if(typeof(data.options) !== 'undefined'){
                stringified = storageObject.getItem(data.key, data.options);
                if(stringified === null) return null;
                return JSON.parse(stringified);
            }else{
                stringified = storageObject.getItem(data.key);
                if(stringified === null) return null;
                return JSON.parse(stringified);
            }
        };

        this.removeItem = function(data){
            if(typeof(data.prefix) !== 'undefined'){
                data.key = data.prefix + data.key;
            }else{
                if(storagePrefix !== null){
                    data.key = storagePrefix + data.key;
                }
            }
            storageObject = storageFactory.getStoreObject(data);
            if(typeof(data.options) !== 'undefined'){
                return storageObject.removeItem(data.key, data.options);
            }else{
                return storageObject.removeItem(data.key);
            }
        };

        this.storeCookie = function(data){
            data.type = 'cookie';
            this.setItem(data);
        };

        this.getCookie = function(data){
            data.type = 'cookie';
            return this.getItem(data);
        };



        return this;
    };

    packageName.StorageComponent = StorageComponent;
    packageName.StorageComponent.prototype.toString = function() {return 'StorageComponent Object';};

})(namespace('salvin'));