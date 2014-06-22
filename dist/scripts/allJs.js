/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()},e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")},e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=n,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},to:function(t){var n=this.$element.find(".item.active"),r=n.parent().children(),i=r.index(n),s=this;if(t>r.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){s.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",e(r[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0]});if(i.hasClass("active"))return;if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}},e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e(document).on("click.carousel.data-api","[data-slide]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data());i.carousel(s),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning)return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning)return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=typeof n=="object"&&n;i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;return n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=e(n),r.length||(r=t.parent()),r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||(s.toggleClass("open"),n.focus()),!1},keydown:function(t){var n,r,s,o,u,a;if(!/(38|40|27)/.test(t.keyCode))return;n=e(this),t.preventDefault(),t.stopPropagation();if(n.is(".disabled, :disabled"))return;o=i(n),u=o.hasClass("open");if(!u||u&&t.keyCode==27)return n.click();r=e("[role=menu] li:not(.divider) a",o);if(!r.length)return;a=r.index(r.filter(":focus")),t.keyCode==38&&a>0&&a--,t.keyCode==40&&a<r.length-1&&a++,~a||(a=0),r.eq(a).focus()}},e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e(document).on("click.dropdown.data-api touchstart.dropdown.data-api",r).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(e){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,e.proxy(this.removeBackdrop,this)):this.removeBackdrop()):t&&t()}},e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):this.options.trigger!="manual"&&(i=this.options.trigger=="hover"?"mouseenter":"focus",s=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this))),this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,t,this.$element.data()),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);if(!n.options.delay||!n.options.delay.show)return n.show();clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var e,t,n,r,i,s,o;if(this.hasContent()&&this.enabled){e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,t=/in/.test(s),e.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),n=this.getPosition(t),r=e[0].offsetWidth,i=e[0].offsetHeight;switch(t?s.split(" ")[1]:s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}e.offset(o).addClass(s).addClass("in")}},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function r(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip();return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?r():n.detach(),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(t){return e.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);n[n.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content > *")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var t=e(this),n=t.data("target")||t.attr("href"),r=/^#\w/.test(n)&&e(n);return r&&r.length&&[[r.position().top,n]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}},e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}},e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=e(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:t.top+t.height,left:t.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=!~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},blur:function(e){var t=this;setTimeout(function(){t.hide()},150)},click:function(e){e.stopPropagation(),e.preventDefault(),this.select()},mouseenter:function(t){this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")}},e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;t.preventDefault(),n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))},e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
// ----------------------------------------------------------------------------
// Buzz, a Javascript HTML5 Audio library
// v 1.0.6
// Licensed under the MIT license.
// http://buzz.jaysalvat.com/
// ----------------------------------------------------------------------------
// Copyright (C) 2013 Jay Salvat
// http://jaysalvat.com/
// ----------------------------------------------------------------------------
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files ( the "Software" ), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ----------------------------------------------------------------------------

var buzz = {
    defaults: {
        autoplay: false,
        duration: 5000,
        formats: [],
        loop: false,
        placeholder: '--',
        preload: 'metadata',
        volume: 80
    },
    types: {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'm4a': 'audio/x-m4a'
    },
    sounds: [],
    el: document.createElement( 'audio' ),

    sound: function( src, options ) {
        options = options || {};

        var pid = 0,
            events = [],
            eventsOnce = {},
            supported = buzz.isSupported();

        // publics
        this.load = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.load();
            return this;
        };

        this.play = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.play();
            return this;
        };

        this.togglePlay = function() {
            if ( !supported ) {
              return this;
            }

            if ( this.sound.paused ) {
                this.sound.play();
            } else {
                this.sound.pause();
            }
            return this;
        };

        this.pause = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.pause();
            return this;
        };

        this.isPaused = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.paused;
        };

        this.stop = function() {
            if ( !supported  ) {
              return this;
            }

            this.setTime( 0 );
            this.sound.pause();
            return this;
        };

        this.isEnded = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.ended;
        };

        this.loop = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.loop = 'loop';
            this.bind( 'ended.buzzloop', function() {
                this.currentTime = 0;
                this.play();
            });
            return this;
        };

        this.unloop = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.removeAttribute( 'loop' );
            this.unbind( 'ended.buzzloop' );
            return this;
        };

        this.mute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = true;
            return this;
        };

        this.unmute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = false;
            return this;
        };

        this.toggleMute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = !this.sound.muted;
            return this;
        };

        this.isMuted = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.muted;
        };

        this.setVolume = function( volume ) {
            if ( !supported ) {
              return this;
            }

            if ( volume < 0 ) {
              volume = 0;
            }
            if ( volume > 100 ) {
              volume = 100;
            }
          
            this.volume = volume;
            this.sound.volume = volume / 100;
            return this;
        };
      
        this.getVolume = function() {
            if ( !supported ) {
              return this;
            }

            return this.volume;
        };

        this.increaseVolume = function( value ) {
            return this.setVolume( this.volume + ( value || 1 ) );
        };

        this.decreaseVolume = function( value ) {
            return this.setVolume( this.volume - ( value || 1 ) );
        };

        this.setTime = function( time ) {
            if ( !supported ) {
              return this;
            }

            this.whenReady( function() {
                this.sound.currentTime = time;
            });
            return this;
        };

        this.getTime = function() {
            if ( !supported ) {
              return null;
            }

            var time = Math.round( this.sound.currentTime * 100 ) / 100;
            return isNaN( time ) ? buzz.defaults.placeholder : time;
        };

        this.setPercent = function( percent ) {
            if ( !supported ) {
              return this;
            }

            return this.setTime( buzz.fromPercent( percent, this.sound.duration ) );
        };

        this.getPercent = function() {
            if ( !supported ) {
              return null;
            }

			var percent = Math.round( buzz.toPercent( this.sound.currentTime, this.sound.duration ) );
            return isNaN( percent ) ? buzz.defaults.placeholder : percent;
        };

        this.setSpeed = function( duration ) {
			if ( !supported ) {
              return this;
            }

            this.sound.playbackRate = duration;
        };

        this.getSpeed = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.playbackRate;
        };

        this.getDuration = function() {
            if ( !supported ) {
              return null;
            }

            var duration = Math.round( this.sound.duration * 100 ) / 100;
            return isNaN( duration ) ? buzz.defaults.placeholder : duration;
        };

        this.getPlayed = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.played );
        };

        this.getBuffered = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.buffered );
        };

        this.getSeekable = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.seekable );
        };

        this.getErrorCode = function() {
            if ( supported && this.sound.error ) {
                return this.sound.error.code;
            }
            return 0;
        };

        this.getErrorMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getErrorCode() ) {
                case 1:
                    return 'MEDIA_ERR_ABORTED';
                case 2:
                    return 'MEDIA_ERR_NETWORK';
                case 3:
                    return 'MEDIA_ERR_DECODE';
                case 4:
                    return 'MEDIA_ERR_SRC_NOT_SUPPORTED';
                default:
                    return null;
            }
        };

        this.getStateCode = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.readyState;
        };

        this.getStateMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getStateCode() ) {
                case 0:
                    return 'HAVE_NOTHING';
                case 1:
                    return 'HAVE_METADATA';
                case 2:
                    return 'HAVE_CURRENT_DATA';
                case 3:
                    return 'HAVE_FUTURE_DATA';
                case 4:
                    return 'HAVE_ENOUGH_DATA';
                default:
                    return null;
            }
        };

        this.getNetworkStateCode = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.networkState;
        };

        this.getNetworkStateMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getNetworkStateCode() ) {
                case 0:
                    return 'NETWORK_EMPTY';
                case 1:
                    return 'NETWORK_IDLE';
                case 2:
                    return 'NETWORK_LOADING';
                case 3:
                    return 'NETWORK_NO_SOURCE';
                default:
                    return null;
            }
        };

        this.set = function( key, value ) {
            if ( !supported ) {
              return this;
            }

            this.sound[ key ] = value;
            return this;
        };

        this.get = function( key ) {
            if ( !supported ) {
              return null;
            }

            return key ? this.sound[ key ] : this.sound;
        };

        this.bind = function( types, func ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            var that = this,
				efunc = function( e ) { func.call( that, e ); };

            for( var t = 0; t < types.length; t++ ) {
                var type = types[ t ],
                    idx = type;
                    type = idx.split( '.' )[ 0 ];

                    events.push( { idx: idx, func: efunc } );
                    this.sound.addEventListener( type, efunc, true );
            }
            return this;
        };

        this.unbind = function( types ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            for( var t = 0; t < types.length; t++ ) {
                var idx = types[ t ],
                    type = idx.split( '.' )[ 0 ];

                for( var i = 0; i < events.length; i++ ) {
                    var namespace = events[ i ].idx.split( '.' );
                    if ( events[ i ].idx == idx || ( namespace[ 1 ] && namespace[ 1 ] == idx.replace( '.', '' ) ) ) {
                        this.sound.removeEventListener( type, events[ i ].func, true );
                        // remove event
                        events.splice(i, 1);
                    }
                }
            }
            return this;
        };

        this.bindOnce = function( type, func ) {
            if ( !supported ) {
              return this;
            }

            var that = this;

            eventsOnce[ pid++ ] = false;
            this.bind( type + '.' + pid, function() {
               if ( !eventsOnce[ pid ] ) {
                   eventsOnce[ pid ] = true;
                   func.call( that );
               }
               that.unbind( type + '.' + pid );
            });
        };

        this.trigger = function( types ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            for( var t = 0; t < types.length; t++ ) {
                var idx = types[ t ];

                for( var i = 0; i < events.length; i++ ) {
                    var eventType = events[ i ].idx.split( '.' );
                    if ( events[ i ].idx == idx || ( eventType[ 0 ] && eventType[ 0 ] == idx.replace( '.', '' ) ) ) {
                        var evt = document.createEvent('HTMLEvents');
                        evt.initEvent( eventType[ 0 ], false, true );
                        this.sound.dispatchEvent( evt );
                    }
                }
            }
            return this;
        };

        this.fadeTo = function( to, duration, callback ) {
			if ( !supported ) {
              return this;
            }

            if ( duration instanceof Function ) {
                callback = duration;
                duration = buzz.defaults.duration;
            } else {
                duration = duration || buzz.defaults.duration;
            }

            var from = this.volume,
				delay = duration / Math.abs( from - to ),
                that = this;
            this.play();

            function doFade() {
                setTimeout( function() {
                    if ( from < to && that.volume < to ) {
                        that.setVolume( that.volume += 1 );
                        doFade();
                    } else if ( from > to && that.volume > to ) {
                        that.setVolume( that.volume -= 1 );
                        doFade();
                    } else if ( callback instanceof Function ) {
                        callback.apply( that );
                    }
                }, delay );
            }
            this.whenReady( function() {
                doFade();
            });

            return this;
        };

        this.fadeIn = function( duration, callback ) {
            if ( !supported ) {
              return this;
            }

            return this.setVolume(0).fadeTo( 100, duration, callback );
        };

        this.fadeOut = function( duration, callback ) {
			if ( !supported ) {
              return this;
            }

            return this.fadeTo( 0, duration, callback );
        };

        this.fadeWith = function( sound, duration ) {
            if ( !supported ) {
              return this;
            }

            this.fadeOut( duration, function() {
                this.stop();
            });

            sound.play().fadeIn( duration );

            return this;
        };

        this.whenReady = function( func ) {
            if ( !supported ) {
              return null;
            }

            var that = this;
            if ( this.sound.readyState === 0 ) {
                this.bind( 'canplay.buzzwhenready', function() {
                    func.call( that );
                });
            } else {
                func.call( that );
            }
        };

        // privates
        function timerangeToArray( timeRange ) {
            var array = [],
                length = timeRange.length - 1;

            for( var i = 0; i <= length; i++ ) {
                array.push({
                    start: timeRange.start( length ),
                    end: timeRange.end( length )
                });
            }
            return array;
        }

        function getExt( filename ) {
            return filename.split('.').pop();
        }
        
        function addSource( sound, src ) {
            var source = document.createElement( 'source' );
            source.src = src;
            if ( buzz.types[ getExt( src ) ] ) {
                source.type = buzz.types[ getExt( src ) ];
            }
            sound.appendChild( source );
        }

        // init
        if ( supported && src ) {
          
            for(var i in buzz.defaults ) {
              if(buzz.defaults.hasOwnProperty(i)) {
                options[ i ] = options[ i ] || buzz.defaults[ i ];
              }
            }

            this.sound = document.createElement( 'audio' );

            if ( src instanceof Array ) {
                for( var j in src ) {
                  if(src.hasOwnProperty(j)) {
                    addSource( this.sound, src[ j ] );
                  }
                }
            } else if ( options.formats.length ) {
                for( var k in options.formats ) {
                  if(options.formats.hasOwnProperty(k)) {
                    addSource( this.sound, src + '.' + options.formats[ k ] );
                  }
                }
            } else {
                addSource( this.sound, src );
            }

            if ( options.loop ) {
                this.loop();
            }

            if ( options.autoplay ) {
                this.sound.autoplay = 'autoplay';
            }

            if ( options.preload === true ) {
                this.sound.preload = 'auto';
            } else if ( options.preload === false ) {
                this.sound.preload = 'none';
            } else {
                this.sound.preload = options.preload;
            }

            this.setVolume( options.volume );

            buzz.sounds.push( this );
        }
    },

    group: function( sounds ) {
        sounds = argsToArray( sounds, arguments );

        // publics
        this.getSounds = function() {
            return sounds;
        };

        this.add = function( soundArray ) {
            soundArray = argsToArray( soundArray, arguments );
            for( var a = 0; a < soundArray.length; a++ ) {
                sounds.push( soundArray[ a ] );
            }
        };

        this.remove = function( soundArray ) {
            soundArray = argsToArray( soundArray, arguments );
            for( var a = 0; a < soundArray.length; a++ ) {
                for( var i = 0; i < sounds.length; i++ ) {
                    if ( sounds[ i ] == soundArray[ a ] ) {
                        sounds.splice(i, 1);
                        break;
                    }
                }
            }
        };

        this.load = function() {
            fn( 'load' );
            return this;
        };

        this.play = function() {
            fn( 'play' );
            return this;
        };

        this.togglePlay = function( ) {
            fn( 'togglePlay' );
            return this;
        };

        this.pause = function( time ) {
            fn( 'pause', time );
            return this;
        };

        this.stop = function() {
            fn( 'stop' );
            return this;
        };

        this.mute = function() {
            fn( 'mute' );
            return this;
        };

        this.unmute = function() {
            fn( 'unmute' );
            return this;
        };

        this.toggleMute = function() {
            fn( 'toggleMute' );
            return this;
        };

        this.setVolume = function( volume ) {
            fn( 'setVolume', volume );
            return this;
        };

        this.increaseVolume = function( value ) {
            fn( 'increaseVolume', value );
            return this;
        };

        this.decreaseVolume = function( value ) {
            fn( 'decreaseVolume', value );
            return this;
        };

        this.loop = function() {
            fn( 'loop' );
            return this;
        };

        this.unloop = function() {
            fn( 'unloop' );
            return this;
        };

        this.setTime = function( time ) {
            fn( 'setTime', time );
            return this;
        };

        this.set = function( key, value ) {
            fn( 'set', key, value );
            return this;
        };

        this.bind = function( type, func ) {
            fn( 'bind', type, func );
            return this;
        };

        this.unbind = function( type ) {
            fn( 'unbind', type );
            return this;
        };

        this.bindOnce = function( type, func ) {
            fn( 'bindOnce', type, func );
            return this;
        };

        this.trigger = function( type ) {
            fn( 'trigger', type );
            return this;
        };

        this.fade = function( from, to, duration, callback ) {
            fn( 'fade', from, to, duration, callback );
            return this;
        };

        this.fadeIn = function( duration, callback ) {
            fn( 'fadeIn', duration, callback );
            return this;
        };

        this.fadeOut = function( duration, callback ) {
            fn( 'fadeOut', duration, callback );
            return this;
        };

        // privates
        function fn() {
            var args = argsToArray( null, arguments ),
                func = args.shift();

            for( var i = 0; i < sounds.length; i++ ) {
                sounds[ i ][ func ].apply( sounds[ i ], args );
            }
        }

        function argsToArray( array, args ) {
            return ( array instanceof Array ) ? array : Array.prototype.slice.call( args );
        }
    },

    all: function() {
      return new buzz.group( buzz.sounds );
    },

    isSupported: function() {
        return !!buzz.el.canPlayType;
    },

    isOGGSupported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/ogg; codecs="vorbis"' );
    },

    isWAVSupported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/wav; codecs="1"' );
    },

    isMP3Supported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/mpeg;' );
    },

    isAACSupported: function() {
        return !!buzz.el.canPlayType && ( buzz.el.canPlayType( 'audio/x-m4a;' ) || buzz.el.canPlayType( 'audio/aac;' ) );
    },

    toTimer: function( time, withHours ) {
        var h, m, s;
        h = Math.floor( time / 3600 );
        h = isNaN( h ) ? '--' : ( h >= 10 ) ? h : '0' + h;
        m = withHours ? Math.floor( time / 60 % 60 ) : Math.floor( time / 60 );
        m = isNaN( m ) ? '--' : ( m >= 10 ) ? m : '0' + m;
        s = Math.floor( time % 60 );
        s = isNaN( s ) ? '--' : ( s >= 10 ) ? s : '0' + s;
        return withHours ? h + ':' + m + ':' + s : m + ':' + s;
    },

    fromTimer: function( time ) {
        var splits = time.toString().split( ':' );
        if ( splits && splits.length == 3 ) {
            time = ( parseInt( splits[ 0 ], 10 ) * 3600 ) + ( parseInt(splits[ 1 ], 10 ) * 60 ) + parseInt( splits[ 2 ], 10 );
        }
        if ( splits && splits.length == 2 ) {
            time = ( parseInt( splits[ 0 ], 10 ) * 60 ) + parseInt( splits[ 1 ], 10 );
        }
        return time;
    },

    toPercent: function( value, total, decimal ) {
		var r = Math.pow( 10, decimal || 0 );

		return Math.round( ( ( value * 100 ) / total ) * r ) / r;
    },

    fromPercent: function( percent, total, decimal ) {
		var r = Math.pow( 10, decimal || 0 );

        return  Math.round( ( ( total / 100 ) * percent ) * r ) / r;
    }
};

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

/**
 * User: Tomasz Witkowski
 * Date: 20/09/12
 * Time: 15:21
 */
(function (packageName) {
    "use strict";
    var EVENTS = {}, eventify, t, l;
    eventify = EVENTS.eventify = function (target1, targetN) {
        for (t = 0; t < arguments.length; t++) {
            var target = arguments[t];
            if (!target.__listeners) {
                if (!target.events) {target.events = {};}
                target.__listeners = {};
                target.dispatchEvent = function (eventType, eventData) {
                    if (this.events[eventType]) {this.events[eventType].dispatch(this, eventData);}
                    if (typeof(this.events['allEvents'])  !== 'undefined'){
                        if(typeof(eventData) === 'undefined'){
                            eventData = {};
                        }
                        this.events['allEvents'].orginEventType = eventType;
                        this.events['allEvents'].dispatch(this, eventData);
                    }
                };
                target.addEventListener = function (eventType, callback, bubbles) {
                    return new EVENTS.Listener(this, eventType, callback, bubbles);
                };
                target.removeEventListener = function (eventType, callback) {
                    var listeners = this.__listeners[eventType];
                    for (var l = 0; listeners && l < listeners.length; l++)
                        if (listeners[l] === callback || listeners[l].callback === callback) listeners.splice(l, 1);
                };
            }
        }
    };
    var Event = EVENTS.Event = function (type) {
        this.type = type;
        this.history = [];
        this.orginEventType = type;
    };
    Event.prototype = {
        bubbleTo: null,
        currentTarget: null,
        dispatch: function (target, eventData, currentTarget) {
            this.target = target;
            this.currentTarget = currentTarget || target;
            var timeStamp = new Date();
            this.timeStamp = timeStamp;
            this._stopProp = false;
            if (!currentTarget) {
                var histObj = {
                    eventData: eventData,
                    timeStamp: timeStamp
                };
            } else {
                var histObj = currentTarget.events[this.type].history[currentTarget.events[this.type].history.length - 1];
            }
            histObj.target = target;
            histObj.currentTarget = currentTarget || target;
            this.history.push(histObj);
            var listeners = target.__listeners[this.type],
                result;

            for (l = 0; listeners && l < listeners.length; l++) {
                var listener = listeners[l];
                if (eventData) {result = listener.callback.call(target, this, eventData);}
                else {result = listener.callback.call(target, this);}
                if (typeof (result) !== "undefined" && result !== null) {this.result = result;}
                if (this._stopImmProp) {break;}
            }
            if (this.bubbleTo !== null && !this._stopProp) this.bubbleTo.events[this.type].dispatch(this.bubbleTo, eventData, this.currentTarget);
        },
        result: true,
        _stopImmProp: false,
        stopImmediatePropagation: function () {
            this._stopImmProp = true
        },
        _stopProp: false,
        stopPropagation: function () {
            this._stopProp = true
        },
        target: null,
        type: null,
        history: null,
        toString: function(){
                return 'EventObject';
        }
    };
    var Listener = EVENTS.Listener = function (target, eventType, callback, bubbles) {
        this.target = target;
        this.callback = callback;
        this.bubbles = (bubbles !== null) ? bubbles : true;
        if (!target.events[eventType]) target.events[eventType] = this.event = new EVENTS.Event(eventType);
        this.event = target.events[eventType];
        if (!target.__listeners[eventType]) target.__listeners[eventType] = [];
        target.__listeners[eventType].push(this);
    };
    Listener.prototype = {
        bubbles: true,
        callback: function (evt, data) {},
        remove: function () {
            var idx = Array.indexOf(this.target.__listeners[this.event.type], this);
            this.target.__listeners[this.event.type].splice(idx, 1);
            delete this;
        },
        event: null,
        target: null
    };
    packageName.Events = EVENTS;
})(namespace('salvin.extensions'));

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
/**
 * User: Tomasz Witkowski
 * Date: 14/03/13
 * Time: 15:42
 */
(function (packageName) {
    "use strict";
    var that, GATracker;

    GATracker = function () {
        that = this;
        var core = null,
            ga = null,
            gaReady = false,
            gaTimer = null,
            startTimer = function(){
                gaTimer = setInterval(timerAction,1000);
            },
            timerAction = function(){
                if(typeof(_gaq) !== 'undefined'){
                    ga = _gaq;
                    gaReady = true;
                    stopTimer();
                }
            },
            stopTimer = function(){
                clearInterval(gaTimer);
            }
        ;
        this.init = function (initObject) {
            core = initObject.core;
            ga = _gaq;
            if(core === null){
                throw new TypeError('GATracker:Core is not defined');
            }
            if(ga === null || typeof(ga) === 'undefined'){
                console.log('GA not ready yet. Starting timer.');
                startTimer();
            }else{
                gaReady = true;
            }
        };
        this.trackEvent = function(category, action, opt_label, opt_value, opt_noninteraction){
            if(!gaReady){ console.log('GA not ready yet.'); return;}
            opt_value = (typeof opt_value !== 'undefined')?opt_value:0;
            opt_noninteraction = (typeof opt_noninteraction !== 'undefined')?opt_noninteraction:true;
            opt_label = (typeof opt_label !== 'undefined')?opt_label:'';
            _gaq.push(['_trackEvent', category, action, opt_label, opt_value, opt_noninteraction]);
        };

        return this;
    };
    packageName.Tracker = GATracker;
    packageName.Tracker.prototype.toString = function() {return 'Tracker Object';};

})(namespace('salvin.extensions'));
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
/**
 * User: Tomasz Witkowski
 * Date: 07/02/13
 * Time: 14:44
 */
(function (packageName) {
    "use strict";
    var that, Sound;

    Sound = function () {
        that = this;
        var core = null,
            buzz = null,
            soundsSupported = false,
            soundReady = false,
            format = null,
            initialized = false,
            timerSound = null,
            events = ['abort','canplay','canplaythrough','dataunavailable','durationchange','emptied','empty','ended','error','loadeddata','loadedmetadata','loadstart','pause','play','playing','progress','ratechange','seeked','seeking','suspend','timeupdate','volumechange','waiting'];
        ;
        this.init = function (initObject) {
            initialized = true;
            core = initObject.core;
            buzz = initObject.buzz;
            if(core === null){
                throw new TypeError('Sound:Core is not defined');
            }
            if(buzz === null){
                throw new TypeError('Sound:Buzz is not defined');
            }
            if(buzz.isSupported()){
                if(buzz.isOGGSupported()){
                    //because this file is smaller
                    format = 'ogg';
                }else if(buzz.isAACSupported()){
                    format = 'aac';
                }else if(buzz.isMP3Supported()){
                    format = 'mp3';
                }
            }
//            alert('formtat'+format);
            if(format !== null){
                if(core.isDomReady()){
                    loadSound();
                }else{
                    core.addEventListener('DomReady', loadSound);
                }
            }
        };
        var loadSound = function(){
//            timerSound = new buzz.sound("http://dev.squashinlondon.com/sounds/alarm_beeps."+format,{
            timerSound = new buzz.sound("./sounds/alarm_beeps."+format,{
                preload: false,
                autoplay: false,
                loop: false
            });
            timerSound.load();
//            alert('after load');
            timerSound.bind('error', function(){
                alert("Error: " + this.getErrorMessage());
            });
            for(var i= 0, len = events.length;i<len;i+=1){
                var name = events[i];
                console.log('Bindind event: '+name);

                (function(){
                    var thisEventName = name;
                    timerSound.bind(name,function(){
                        core.dispatchEvent('CoreSound-'+thisEventName);
                    });
                }())
            }
            timerSound.bindOnce("canplaythrough", function(e) {
//                alert("canplaythrough");
                soundReady = true;
                timerSound.setVolume(30);
//                timerSound.setSpeed(4);

            });
        };

        this.soundsSupported = function(){
            return soundsSupported;
        };
        this.canPlay = function(){
            return soundReady;
        };
        this.initialized = function(){
            return initialized;
        };

        this.play = function(){
            if(soundReady){
                timerSound.play();
            }
        };
        this.stop = function(){
            if(soundReady){
                timerSound.stop();
            }
        };
        return this;
    };
    packageName.Sound = Sound;
    packageName.Sound.prototype.toString = function() {return 'Sound Object';};

})(namespace('salvin.weider'));
/**
 * User: Tomasz Witkowski
 * Date: 06/02/13
 * Time: 14:21
 */
appCore.register('DayPicker', function(sandbox){
    "use strict";
    var that,
        sb = sandbox,
        domElem = null,
        weekdays = 7,
        schedule = null,
        currentDay = 1,
        dayOfTraining = 1,
        sevenDaysOptions = null,
        settings = null,

        handleWeekdaysChange = function(e,d){
            if(d.newCount !== weekdays){
                weekdays = d.newCount;
                sb.track.event('WeiderSettings','DaysAWeekChange',weekdays,0, true);
                if(weekdays === 7){
                    sevenDaysOptions.each(function(){
                        jQuery(this).prop("disabled", true).addClass('addline');
                    });
                }else{
                    sevenDaysOptions.each(function(){
                        jQuery(this).prop("disabled", false).removeClass('addline');
                    });
                }
            }
            schedule = sb.weider.getSchedule();
            if(typeof(schedule[currentDay])=== 'undefined'){
                setDomElemVal(dayOfTraining);
            }
        },
        setDomElemVal = function(newVal){
            $("option", domElem).filter(function() {
                return $(this).text() == newVal;
            }).attr('selected', true);
            domElem.val(newVal);
        },
        handleDomElemChange = function(e){
            sb.track.event('WeiderSettings','DayChange','Manual',0, true);
//            console.log(domElem.val());
            setCurrentDay(domElem.val());
        },
        setCurrentDay = function(newDay){
            currentDay = newDay;// class="sixDaySchedule"
            sb.weider.changeDay(newDay);
        },
        init = function(initObject){
            sb.addEventListener('WeekdaysChange', handleWeekdaysChange);
            domElem = jQuery('#currentDay');
            sevenDaysOptions = jQuery('.sixDaySchedule');
            domElem.change(handleDomElemChange);
            settings = sb.weider.getSettings();
            var t = new Date();
            dayOfTraining = 1;
            if(settings !== null && typeof(settings.updated) !== 'undefined'){
                var lastVisit = new Date(settings.updated);
                if(t.getDate()=== lastVisit.getDate()){
                    //dont have to change anything
                    dayOfTraining = settings.dayOfTraining;
                }else{
                    var toAdd = parseInt((t.getTime()-lastVisit.getTime())/(24*3600*1000));
                    dayOfTraining = settings.dayOfTraining + toAdd;
                    schedule = sb.weider.getSchedule();
                    if(typeof(schedule[dayOfTraining]) === 'undefined'){
                        dayOfTraining = 1;
                    }
                    sb.track.event('WeiderSettings','DayChange','Auto',0, true);
                }
            }else{
//                store first record
            }
            setDomElemVal(dayOfTraining);
            setCurrentDay(domElem.val());
        },

        destroy = function(){

        };

    return {
        init:init,
        destroy:destroy
    };
});
/**
 * User: Tomasz Witkowski
 * Date: 13/10/13
 * Time: 20:36
 */
appCore.register('ShowExercise', function(sandbox){
    "use strict";
    var sb = sandbox,
        domRoot = null,
        currentExcercise = 1,

        init = function(){
            sb.addEventListener('RepeatStart', handleRepeatStart);
            sb.addEventListener('RepeatEnd', handleRepeatEnd);
            sb.addEventListener('TimerReset', handleNextSeries);
            sb.addEventListener('NextExercise', handleNextExercise);
            sb.addEventListener('SeriesStart', handleNextSeries);
            domRoot = jQuery('.excerciseImg', '#timerRoot');
            initView();
        },
        handleNextSeries = function(){
            domRoot.removeClass('e'+currentExcercise);
            domRoot.addClass('e0');
            currentExcercise = 1;
        },
        handleNextExercise = function(){
            console.log('+++handleExercise');
            domRoot.removeClass('e'+currentExcercise);
            currentExcercise = (currentExcercise+1===7)?1:currentExcercise+1;
        },
        handleRepeatStart = function(){
            console.log('+++handleStart');
            domRoot.addClass('e'+currentExcercise);
        },
        handleRepeatEnd = function(){
            console.log('+++handleEnd');
            domRoot.removeClass('e'+currentExcercise);
//            domRoot.addClass('e0');
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
/**
 * User: Tomasz Witkowski
 * Date: 06/02/13
 * Time: 22:44
 */
appCore.register('Timer', function(sandbox){
    "use strict";
    var that,
        sb = sandbox,
        values = {done:{},togo:{},exerciseTimer:5, seriesInterval:4,repeatInterval:0},
        controls = {},
        labels = {togo:{}, done:{}},
        displayCtrl = {},
        soundCtrl = {},
        playSound = true,
        timer = null,
        schedule = null,
        settings = {},
        interval = {},
        domRoot = null,
        soundPlaying = false,
        t = 6,
        time = 5,

        updateSchedule = function(){
//            schedule = {series: 1, repeats:1};
            schedule = sb.weider.getDaySchedule();
            values.done.series = 0;
            values.done.repeats = 0;
            values.togo.series = schedule.series;
            values.togo.repeats = schedule.repeat;
            values.togo.exercise = t;
            values.done.exercise = 0;
            values.exerciseTimer = time;
            updateView();
        },

        init = function(initObject) {
            sb.addEventListener('WeekdaysChange', updateSchedule);
            sb.addEventListener('DayChange', updateSchedule);
            domRoot = jQuery('#timerRoot');
            controls.start = jQuery('#ctrlStart', '.timerControls');
            controls.pause = jQuery('#ctrlPause', '.timerControls');
            controls.reset = jQuery('#ctrlReset', '.timerControls');
            labels.togo.series = jQuery('#seriesToGo', domRoot);
            labels.togo.repeats = jQuery('#repeatsToGo', domRoot);
            labels.togo.exercise = jQuery('#exerciseToGo', domRoot);
            labels.done.series = jQuery('#currentSeries', domRoot);
            labels.done.exercise = jQuery('#currentExercise', domRoot);
            labels.done.repeats = jQuery('#currentRepeat', domRoot);
            labels.main = jQuery('#mainTimer', domRoot);
            controls.display = {};
            controls.display.elapsed = jQuery('#timeElapsed');
            controls.display.left = jQuery('#timeLeft');

            controls.sound = {};
            controls.sound.yes = jQuery('#soundYes');
            controls.sound.no = jQuery('#soundNo');

            settings = sb.weider.getSettings();
            console.log("settings");

            interval = {repeat: 0, exercise: 2, series: 4};
            if (typeof(settings.interval) !== 'undefined') {
                interval.repeat = settings.interval.repeat || interval.repeat;
                interval.exercise = settings.interval.exercise || interval.exercise;
                interval.series = settings.interval.series || interval.series;
            }

            updateSchedule();

            controls.start.click(function(){
                controls.start.addClass('disabled');
                controls.pause.removeClass('disabled');
                controls.reset.addClass('disabled');
                sb.track.event('WeiderTimer','Play','Play',0, true);
                timerAction();
            });
            controls.pause.click(function(){
                controls.start.removeClass('disabled');
                controls.pause.addClass('disabled');
                controls.reset.removeClass('disabled');
                sb.track.event('WeiderTimer','Pause','Pause',0, true);
                stopTimer();
            });
            controls.reset.click(function(){
                controls.start.removeClass('disabled');
                controls.pause.addClass('disabled');
                controls.reset.removeClass('disabled');
                sb.dispatchEvent('TimerReset');
                sb.track.event('WeiderTimer','Reset','Reset',0, true);
                updateSchedule();
            });

            controls.display.elapsed.click(function(){
                controls.display.left.removeClass('btn-primary');
                controls.display.elapsed.addClass('btn-primary');
                sb.track.event('WeiderSettings','TimeDisplay','Elapsed',0, true);
                sb.weider.updateTimeDisplay('elapsed');
            });
            controls.display.left.click(function(){
                controls.display.elapsed.removeClass('btn-primary');
                controls.display.left.addClass('btn-primary');
                sb.track.event('WeiderSettings','TimeDisplay','Left',0, true);
                sb.weider.updateTimeDisplay('left');
            });

            controls.sound.yes.click(function(){
//                alert('controls.sound.yes.click');
                controls.sound.no.removeClass('btn-primary');
                controls.sound.yes.addClass('btn-primary');
                playSound = true;
                sb.track.event('WeiderSettings','PlaySounds','Yes',0, true);
                sb.weider.playSounds(playSound);
            });
            controls.sound.no.click(function(){
                controls.sound.yes.removeClass('btn-primary');
                controls.sound.no.addClass('btn-primary');
                sb.track.event('WeiderSettings','PlaySounds','No',0, true);
                playSound = false;
                sb.weider.playSounds(playSound);
            });


            initView();
        },

        timerAction = function() {
            // starts countdown
            var v = 0;
            if (values.exerciseTimer === 0) {
                //play sound
                //reset
                values.exerciseTimer = time;
                if(playSound){
                    sb.weider.playSound();
                }
                v = interval.repeat;
                soundPlaying = true;
                //--------------------
                values.done.repeats += 1;
                values.togo.repeats -= 1;
                sb.dispatchEvent('RepeatEnd');
                if(values.togo.repeats === 0){
                    v = interval.exercise;
                   //next excercise
                    // ---------------- reset
                    values.done.repeats = 1;
                    values.togo.repeats = schedule.repeat;
                    sb.dispatchEvent('NextExercise')
                    //--------------------------------
                    values.done.exercise += 1;
                    values.togo.exercise -= 1;
                    if(values.togo.exercise === 0){
                        sb.dispatchEvent('SeriesStart');
                        v = interval.series;
                        //next series
                        //reset
                        values.done.exercise = 1;
                        values.togo.exercise = 6;
                        //-----------------
                        values.done.series += 1;
                        values.togo.series -= 1;

                        if(values.togo.series === 0){
                            //All series done.
                            sb.track.event('Weider','SessionCompleted','',0, true);
                            stopTimer();
                            return;
                        }
                    }
                }
            } else {
                if(values.exerciseTimer === time){
                    sb.dispatchEvent('RepeatStart');
                }
                values.exerciseTimer--;
                v = 0;
                if(soundPlaying){
                    sb.weider.stopSound();
                }

                /*values.done.repeats += 1;
                values.togo.repeats -= 1;*/


                /*values.done.series = 0;
                values.togo.series = schedule.series;*/

            }
            updateView();
            startTimer(timerAction, 1000+v*1000);
        },

        startTimer = function(action,delay){
            stopTimer();
            timer = setTimeout(action,delay);
        },
        stopTimer = function(){
            if(timer !== null){
                clearTimeout(timer);
            }
        },

        updateView = function(){
            labels.togo.series.html(values.togo.series);
            labels.togo.repeats.html(values.togo.repeats);
            labels.togo.exercise.html(values.togo.exercise);
            labels.done.series.html(values.done.series);
            labels.done.exercise.html(values.done.exercise);
            labels.done.repeats.html(values.done.repeats);
            labels.main.html(values.exerciseTimer);

        },
        updateSettings = function(){
            var cacheObj = {};
            cacheObj.interval = interval;
            sb.weider.updateSettings(cacheObj);
        },

        updateInverval = function(name, val){
            switch (name){
                case "sessionInterval":
                    interval.series = val;
                    break;
                case "exerciseInterval":
                    interval.exercise = val;
                    break;

                case "repeatInterval":
                    interval.repeat = val;
                    break;
            }
            sb.track.event('WeiderSettings','IntervalChange',name,0, true);
            updateSettings();
        },

        initStepper = function(stepperId, initval){
            var minus = jQuery('#'+stepperId+'-minus'),
                plus = jQuery('#'+stepperId+'-plus'),
                val = jQuery('#'+stepperId),
                name = stepperId;
            if(typeof(initval) !== 'undefined'){
                val.val(parseInt(initval));
            }

            minus.click(function(){
                var newval = parseInt(val.val())-1;
                val.val(newval);
                updateInverval(name, newval);
            });
            plus.click(function(){
                var newval = parseInt(val.val())+1;
                val.val(newval);
                updateInverval(name, newval);
            });
            val.change(function(){
//                console.log('stepper value change for '+name);
                updateInverval(name, val.val());
            });
        },

        initView = function(){
            initStepper('repeatInterval',interval.repeat);
            initStepper('exerciseInterval',interval.exercise);
            initStepper('sessionInterval',interval.series);

            if(typeof(settings.display) !== 'undefined'){
                if(settings.display === "left"){
                    controls.display.left.click();
                }else{
                    controls.display.elapsed.click();
                }
            }

            if(typeof(settings.display) !== 'undefined'){
                if(settings.display === "left"){
                    controls.display.left.click();
                }else{
                    controls.display.elapsed.click();
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
/**
 * User: Tomasz Witkowski
 * Date: 08/10/12
 * Time: 14:42
 */


(function(){
    "use strict";
    var startDomExtensions = function(){
        window.isMobile = function() {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            return check; }

        appCore.Schedule = new salvin.weider.Schedule();
        appCore.Schedule.init({core:appCore});
//        alert('sound init');
        appCore.Sound = new salvin.weider.Sound();
//        appCore.Sound.init({core:appCore, buzz:buzz});




    };

    appCore.FB.init({core:appCore, fbObject:FB});
        try{
            appCore.FB.initApp({
            appId: app_id,
            cookie: true,
            xfbml: true
        });
        } catch(e){
            console.log(' === Facebook init ERROR');
        }

    appCore.Settings = new salvin.weider.Settings();
    appCore.Settings.init({core:appCore});


        if(appCore.isDomReady()){
            startDomExtensions();
        }else{
            appCore.addEventListener('DomReady',startDomExtensions);
        }

})();

(function(){
var startModules = function(){
    appCore.start('Weekdays');
    appCore.start('DayPicker');
    appCore.start('Summary');
    appCore.start('TimeDisplay');
    appCore.start('Timer');
    appCore.start('ShowExercise');
    if(!isMobile()){
        jQuery('#soundYes').click();
        jQuery('#mobileUserInfo').hide();
    }
};
if(appCore.isDomReady()){
    startModules();
}else{
    appCore.addEventListener('DomReady',startModules);
}
}());