/**
 * Created with JetBrains PhpStorm.
 * Date: 05/09/12
 * Time: 13:15
 * To change this template use File | Settings | File Templates.
 */
if (typeof console == "undefined" || typeof console.log == "undefined") {var console = { log: function() {} };}
function namespace(namespaceString) {
    var parts = namespaceString.split('.'),
        parent = window,
        currentPart = '';

    for(var i = 0, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }

    return parent;
}
function addslashes(str) {
    str=str.replace(/\\/g,'\\\\');
    str=str.replace(/\'/g,'\\\'');
    str=str.replace(/\"/g,'\\"');
    str=str.replace(/\0/g,'\\0');
    return str;
}
function stripslashes(str) {
    str=str.replace(/\\'/g,'\'');
    str=str.replace(/\\"/g,'"');
    str=str.replace(/\\0/g,'\0');
    str=str.replace(/\\\\/g,'\\');
    return str;
}
if(typeof(Array.indexOf) !== 'function'){
Array.prototype.indexOf = function(obj, offset) {
    for (var i = (offset || 0), j = this.length; i < j; i+=1) {
        if (this[i] === obj) { return i; }
    }
    return -1;
};
}

function fcombine() {
    var args = Array.prototype.slice.call(arguments); //IE can't iterate function arguments.
    return function() {
        for (var arg in args) {
            if (typeof(args[arg]) === 'function') {
                args[arg].apply(this, arguments);
            }
        }
    };
}
