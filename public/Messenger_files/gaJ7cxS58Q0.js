if (self.CavalryLogger) { CavalryLogger.start_js(["RXfMb"]); }

__d("FluxDebugUtils",["areEqual","flattenArray","getByPath"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a,c){return(g||(g=b("areEqual")))(a,c.slice(0,a.length))}function i(a){return Object.prototype.toString.call(a)==="[object Object]"}function j(a){return Object.keys(a).sort()}function k(a,b){return j(a).filter(function(a){return!(a in b)})}function l(a,b){return j(b).filter(function(b){return!(b in a)})}function m(a,b){return j(a).filter(function(a){return a in b})}function n(a,c){__p&&__p();if(!i(a)||!i(c))return[];var d=l(a,c).map(function(a){var b;return{path:[],op:"add",value:(b={},b[a]=c[a],b)}}),e=k(a,c).map(function(a){return{path:[a],op:"delete"}}),f=[].concat(b("flattenArray")(m(a,c).map(function(d){if((g||(g=b("areEqual")))(a[d],c[d]))return[];return!i(a[d])||!i(c[d])?{path:[d],op:"update",oldValue:a[d],newValue:c[d]}:n(a[d],c[d]).map(function(a){return babelHelpers["extends"]({},a,{path:[d].concat(a.path)})})})));return[].concat(d,e,f)}var o={diff:n,diffStoreMutation:function(a){return a.prevState&&a.prevState.toJS?n(a.prevState.toJS(),a.currState.toJS()):n(a.prevState,a.currState)},diffStoreMutationInstance:function(a){return o.diffStoreMutation(a.mutation)},isOperationTouchingPath:function(a,c){if((g||(g=b("areEqual")))(a.path,c))return!0;if(h(a.path,c)){c=c.slice(a.path.length);a=a.value||a.newValue;return!!b("getByPath")(a,c)}return!1},getStoreStateFromStoreConfig:function(a){return a.store&&a.stateGetter?a.stateGetter():a.getState()},getStoreInstanceFromStoreConfig:function(a){return a.store||a},applyPlugins:function(a,b,c){b.forEach(function(d){return a[d.name]=function(){for(var a=arguments.length,e=new Array(a),f=0;f<a;f++)e[f]=arguments[f];var g=d.run.apply(d,[c()].concat(e));o.applyPlugins(g,b,function(){return g});return g}})}};e.exports=o}),null);
__d("deepCompare",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b){__p&&__p();if(a===b)return!0;if(!(a instanceof Object)||!(b instanceof Object))return!1;if(a.constructor!==b.constructor)return!1;if(Array.isArray(a)&&Array.isArray(b)){if(a.length!==b.length)return!1;var c={},d=0;for(var e=0,f=a.length;e<f;e++){var h=d;for(var i=0,j=b.length;i<j&&h===d;i++){if(c[i])continue;g(a[e],b[i])&&(c[i]=!0,d++)}}return d===a.length}else{h=a;i=b;for(var k in h){if(!Object.prototype.hasOwnProperty.call(h,k))continue;if(!Object.prototype.hasOwnProperty.call(i,k))return!1;if(h[k]===i[k])continue;if(typeof h[k]!=="object")return!1;if(!g(h[k],i[k]))return!1}for(k in i)if(Object.prototype.hasOwnProperty.call(i,k)&&!Object.prototype.hasOwnProperty.call(h,k))return!1}return!0}e.exports=g}),null);
__d("ChromeExtensionInstallError",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b,c,d){var e;e=a.call(this,b)||this;e.message=b;e.$ChromeExtensionInstallError3=b;e.$ChromeExtensionInstallError1=d;e.$ChromeExtensionInstallError2=c;e.name=e.constructor.name;return e}var c=b.prototype;c.toString=function(){return this.name+": "+[this.message,this.$ChromeExtensionInstallError2,this.$ChromeExtensionInstallError1].join("-")};c.getTypedMessage=function(){return this.$ChromeExtensionInstallError3};c.getInstallType=function(){return this.$ChromeExtensionInstallError2};return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);
__d("RTCChromeExtensionListener",["DateConsts","EventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("DateConsts").MS_PER_SEC;var g=a;c=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b){__p&&__p();var c;c=a.call(this)||this;c.$RTCChromeExtensionListener1=!1;c.$RTCChromeExtensionListener2=null;c.$RTCChromeExtensionListener5=function(a){var b=a;if(a.type==="notificationButtonClicked"){var d=a.buttonIndex;a=a.notificationId;d!==0&&d!==1&&(b={type:"notificationClicked",notificationId:a})}c.emit(b.type,b)};c.$RTCChromeExtensionListener6=function(a){a.onMessage.removeListener(c.$RTCChromeExtensionListener5),c.$RTCChromeExtensionListener2=null,c.emit("portDisconnected"),c.$RTCChromeExtensionListener1===!1&&c.$RTCChromeExtensionListener7(g)};c.$RTCChromeExtensionListener3=b;return c}var c=b.prototype;c.$RTCChromeExtensionListener4=function(){if(this.$RTCChromeExtensionListener2==null)try{var a=window.chrome.runtime.connect(this.$RTCChromeExtensionListener3,{name:"notifications"});a.onMessage.addListener(this.$RTCChromeExtensionListener5);a.onDisconnect.addListener(this.$RTCChromeExtensionListener6);this.$RTCChromeExtensionListener2=a;this.emit("portConnected")}catch(a){this.emit("portConnectionError",a)}};c.$RTCChromeExtensionListener7=function(a){var b=this;a===void 0&&(a=10);window.setTimeout(function(){b.$RTCChromeExtensionListener4()},a)};c.connect=function(){this.$RTCChromeExtensionListener7()};c.disconnect=function(){this.$RTCChromeExtensionListener2!=null&&(this.$RTCChromeExtensionListener1=!0,this.$RTCChromeExtensionListener2.disconnect(),this.$RTCChromeExtensionListener2=null)};return b}(b("EventEmitter"));e.exports=c}),null);
__d("RTCChromeScreenSharingExtension",["Promise","RTCChromeExtensionListener","URI","isWorkplaceDotComURI","uuid"],(function(a,b,c,d,e,f){__p&&__p();var g;function a(){return b("isWorkplaceDotComURI")((g||(g=b("URI"))).getRequestURI())}var h="hmobhiioligjpeieihehfjlkmmkjemfl",i="ncfpggehkhmjpdjpefomjchjafhmbnai";h=a()===!0?h:i;function j(a,c){return new(b("Promise"))(function(b,d){window.chrome.runtime.sendMessage(c,a,function(a){if(a!=null)typeof a==="object"&&a.type==="error"?d(new Error(a.message)):b(a);else{a=window.chrome.runtime.lastError.message;d(new Error(a))}})})}function c(a){return new(b("RTCChromeExtensionListener"))(a)}function d(a,b){b===void 0&&(b=["screen","window","tab"]);return j({type:"getStreamID",sources:b},a)}function f(a,b){return j({type:"cancel",requestID:a},b)}function k(){return b("uuid")()}e.exports={EXTENSION_ID:h,connectToNotifications:c,generateNotificationID:k,getMediaSourceFromExtension:d,useWorkplaceExtension:a,sendExtensionRequest:j,stopExtensionScreenSharing:f}}),null);
__d("ScreenSharingExtensionInstallationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ScreenSharingExtensionInstallationLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ScreenSharingExtensionInstallationLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ScreenSharingExtensionInstallationLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setExtensionID=function(a){this.$1.extension_id=a;return this};c.setFailReason=function(a){this.$1.fail_reason=a;return this};c.setInstallEvent=function(a){this.$1.install_event=a;return this};c.setSourceApp=function(a){this.$1.source_app=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setType=function(a){this.$1.type=a;return this};c.setURIPath=function(a){this.$1.uri_path=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={extension_id:!0,fail_reason:!0,install_event:!0,source_app:!0,time:!0,type:!0,uri_path:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("CollabRTCChromeScreenSharingExtension",["invariant","Promise","regeneratorRuntime","ChromeExtensionInstallError","DateConsts","RTCChromeScreenSharingExtension","ScreenSharingExtensionInstallationTypedLogger","URI","isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;a=b("DateConsts").MS_PER_MIN;var i=(c=b("RTCChromeScreenSharingExtension")).EXTENSION_ID,j=c.generateNotificationID,k=c.getMediaSourceFromExtension,l=c.sendExtensionRequest,m=c.stopExtensionScreenSharing;d=c.useWorkplaceExtension;var n="DIALOG_USER_CANCEL",o="EXTENSION_NOT_FOUND",p="MESSAGESENDER_TAB_UNDEFINED",q="REQUEST_ID_UNDEFINED",r="UNEXPECTED_ERROR";f="data-fb-only-screensharing-extension-available";c="data-wp-screensharing-extension-available";var s=d()===!0?c:f,t=250,u=2*a,v=2;d=function(){__p&&__p();function a(){this.DIALOG_USER_CANCEL=n,this.EXTENSION_NOT_FOUND=o,this.MESSAGESENDER_TAB_UNDEFINED=p,this.REQUEST_ID_UNDEFINED=q,this.UNEXPECTED_ERROR=r,this.$2=i}var c=a.prototype;c.isInstalled=function(){var a=document;a=a.documentElement;return a!=null&&a.hasAttribute(s)?!0:!1};c.throwIfNotInstalled=function(){if(this.isInstalled()!==!0)throw new Error(o)};c.$3=function(a,c){__p&&__p();var d=this,e=(c=a)!=null?(c=c.chrome)!=null?c.webstore:c:c;if(e==null)return b("Promise").reject(new(b("ChromeExtensionInstallError"))("CHROME_WEBSTORE_UNDEFINED","inline"));var f=window.document.documentElement;w(this.getExtensionURL(),window.document);a!==window&&w(this.getExtensionURL(),a.document);return new(b("Promise"))(function(a,c){e.install(d.getExtensionURL(),function(){f!=null&&f.setAttribute(d.getPresenseAttr(),"true"),a()},function(a,d){c(new(b("ChromeExtensionInstallError"))("EXTENSION_INSTALL_FAILED","inline",d))})}).then(function(){d.$4(v);return"inline"})};c.$5=function(a){__p&&__p();var c=this;if(this.isInstalled())return b("Promise").resolve("store");w(this.getExtensionURL(),window.document);window.open(this.getExtensionURL(),"_blank");return this.$4(u/t).then(function(){var a=window.document.documentElement;a.setAttribute(c.getPresenseAttr(),"true");return"store"})["catch"](function(){throw new(b("ChromeExtensionInstallError"))("EXTENSION_STORE_INSTALL_TIMEOUT","store")})};c.getPresenseAttr=function(){return s};c.isInlineInstallCapableDomain=function(){return b("isFacebookURI")((h||(h=b("URI"))).getRequestURI())};c.install=function(a){var c=this;if(this.isInstalled())return b("Promise").resolve();new(b("ScreenSharingExtensionInstallationTypedLogger"))().setInstallEvent("started").setExtensionID(this.$2).setSourceApp(a).log();return this.$6(a).then(function(d){new(b("ScreenSharingExtensionInstallationTypedLogger"))().setInstallEvent("installed").setExtensionID(c.$2).setType(d).setSourceApp(a).setURIPath((h||(h=b("URI"))).getRequestURI().getPath()).log()})["catch"](function(d){new(b("ScreenSharingExtensionInstallationTypedLogger"))().setInstallEvent("failed").setExtensionID(c.$2).setFailReason(d.getTypedMessage()).setType(d.getInstallType()).setSourceApp(a).setURIPath((h||(h=b("URI"))).getRequestURI().getPath()).log();throw d})};c.$6=function(a){var b;if(!this.isInlineInstallCapableDomain())return this.$5(a);b=(b=window)!=null?(b=b.chrome)!=null?b.webstore:b:b;if(b==null)return this.$5(a);return window.opener?this.$5(a):this.$3(window,a)};c.getSourceID=function(a){__p&&__p();var c;return b("regeneratorRuntime").async(function(d){__p&&__p();while(1)switch(d.prev=d.next){case 0:if(this.isInstalled()){d.next=2;break}throw new Error(o);case 2:d.next=4;return b("regeneratorRuntime").awrap(k(this.$2,a));case 4:c=d.sent;d.t0=c.type;d.next=d.t0==="streamID"?8:d.t0==="canceledGetStreamID"?10:11;break;case 8:this.$1=c.requestID;return d.abrupt("return",c.streamID);case 10:throw new Error(n);case 11:throw new Error(r);case 12:case"end":return d.stop()}},null,this)};c.getExtensionID=function(){return this.$2};c.getExtensionURL=function(){return"https://chrome.google.com/webstore/detail/"+this.$2};c.stop=function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(m(this.$1,this.$2));case 2:this.$1=null;case 3:case"end":return a.stop()}},null,this)};c.$4=function(a){var b=this;return l({type:"ping"},this.$2)["catch"](function(c){if(a<1)throw c;return x(t).then(function(){return b.$4(a-1)})})};c.isMinimumVersionNumber=function(a,c,d){__p&&__p();var e,f,g,h,i,j;return b("regeneratorRuntime").async(function(k){__p&&__p();while(1)switch(k.prev=k.next){case 0:this.throwIfNotInstalled();k.next=3;return b("regeneratorRuntime").awrap(l({type:"ping"},this.$2));case 3:e=k.sent;f=e.version;g=f.split(".").map(function(a){return parseInt(a,10)}),h=g[0],i=g[1],j=g[2];if(!(h>=a)){k.next=10;break}if(!(i>c)){k.next=9;break}return k.abrupt("return",!0);case 9:return k.abrupt("return",i===c&&j>=d);case 10:return k.abrupt("return",!1);case 11:case"end":return k.stop()}},null,this)};c.focusTabAndWindow=function(){__p&&__p();var a;return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:this.throwIfNotInstalled();c.next=3;return b("regeneratorRuntime").awrap(l({type:"focusTabAndWindow"},this.$2));case 3:a=c.sent;return c.abrupt("return",{tab:a.tab,window:a.window});case 5:case"end":return c.stop()}},null,this)};c.getLastFocusedWindow=function(a){__p&&__p();var c;return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:this.throwIfNotInstalled();d.next=3;return b("regeneratorRuntime").awrap(l({type:"getLastFocusedWindow",getInfo:a},this.$2));case 3:c=d.sent;return d.abrupt("return",c.window);case 5:case"end":return d.stop()}},null,this)};c.getTabForSender=function(){__p&&__p();var a;return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:this.throwIfNotInstalled();c.next=3;return b("regeneratorRuntime").awrap(l({type:"getTabForSender"},this.$2));case 3:a=c.sent;return c.abrupt("return",a.tab);case 5:case"end":return c.stop()}},null,this)};c.getTabAndWindowForSender=function(){__p&&__p();var a;return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:this.throwIfNotInstalled();c.next=3;return b("regeneratorRuntime").awrap(l({type:"getTabAndWindowForSender"},this.$2));case 3:a=c.sent;return c.abrupt("return",{tab:a.tab,window:a.window});case 5:case"end":return c.stop()}},null,this)};c.getWindow=function(a,c){__p&&__p();var d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:this.throwIfNotInstalled();e.next=3;return b("regeneratorRuntime").awrap(l({type:"getWindow",windowId:a,getInfo:c},this.$2));case 3:d=e.sent;return e.abrupt("return",d.window);case 5:case"end":return e.stop()}},null,this)};c.updateTab=function(a,c){__p&&__p();var d,e;return b("regeneratorRuntime").async(function(f){__p&&__p();while(1)switch(f.prev=f.next){case 0:this.throwIfNotInstalled();d={type:"updateTab",updateProperties:a};c!==void 0&&(d.tabId=c);f.next=5;return b("regeneratorRuntime").awrap(l(d,this.$2));case 5:e=f.sent;return f.abrupt("return",e.tab);case 7:case"end":return f.stop()}},null,this)};c.updateWindow=function(a,c){__p&&__p();var d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:this.throwIfNotInstalled();e.next=3;return b("regeneratorRuntime").awrap(l({type:"updateWindow",windowId:a,updateInfo:c},this.$2));case 3:d=e.sent;return e.abrupt("return",d.window);case 5:case"end":return e.stop()}},null,this)};c.clearNotification=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:e.next=2;return b("regeneratorRuntime").awrap(this.isNotificationPermissionGranted());case 2:c=e.sent;if(!(c===!1)){e.next=5;break}throw new Error("Chrome extension notifications permission not granted");case 5:e.next=7;return b("regeneratorRuntime").awrap(l({type:"clearNotification",notificationId:a},this.$2));case 7:d=e.sent;return e.abrupt("return",d.wasCleared);case 9:case"end":return e.stop()}},null,this)};c.createNotification=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:e.next=2;return b("regeneratorRuntime").awrap(this.isNotificationPermissionGranted());case 2:c=e.sent;if(!(c===!1)){e.next=5;break}throw new Error("Chrome extension notifications permission not granted");case 5:e.next=7;return b("regeneratorRuntime").awrap(l({type:"createNotification",notificationId:j(),options:a},this.$2));case 7:d=e.sent;return e.abrupt("return",d.notificationId);case 9:case"end":return e.stop()}},null,this)};c.getAllNotifications=function(){__p&&__p();var a,c;return b("regeneratorRuntime").async(function(d){__p&&__p();while(1)switch(d.prev=d.next){case 0:d.next=2;return b("regeneratorRuntime").awrap(this.isNotificationPermissionGranted());case 2:a=d.sent;if(!(a===!1)){d.next=5;break}throw new Error("Chrome extension notifications permission not granted");case 5:d.next=7;return b("regeneratorRuntime").awrap(l({type:"getAllNotifications"},this.$2));case 7:c=d.sent;return d.abrupt("return",Object.keys(c.notifications));case 9:case"end":return d.stop()}},null,this)};c.getNotificationsPermissionLevel=function(){__p&&__p();var a;return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:this.throwIfNotInstalled();c.next=3;return b("regeneratorRuntime").awrap(l({type:"getNotificationsPermissionLevel"},this.$2));case 3:a=c.sent;return c.abrupt("return",a.level);case 5:case"end":return c.stop()}},null,this)};c.updateNotification=function(a,c){__p&&__p();var d,e;return b("regeneratorRuntime").async(function(f){__p&&__p();while(1)switch(f.prev=f.next){case 0:f.next=2;return b("regeneratorRuntime").awrap(this.isNotificationPermissionGranted());case 2:d=f.sent;if(!(d===!1)){f.next=5;break}throw new Error("Chrome extension notifications permission not granted");case 5:f.next=7;return b("regeneratorRuntime").awrap(l({type:"updateNotification",notificationId:a,options:c},this.$2));case 7:e=f.sent;return f.abrupt("return",e.wasUpdated);case 9:case"end":return f.stop()}},null,this)};c.isNotificationPermissionGranted=function(){__p&&__p();var a;return b("regeneratorRuntime").async(function(c){__p&&__p();while(1)switch(c.prev=c.next){case 0:a="denied";c.prev=1;c.next=4;return b("regeneratorRuntime").awrap(this.getNotificationsPermissionLevel());case 4:a=c.sent;c.next=10;break;case 7:c.prev=7,c.t0=c["catch"](1),a="denied";case 10:c.t1=a;c.next=c.t1==="granted"?13:c.t1==="denied"?14:15;break;case 13:return c.abrupt("return",!0);case 14:return c.abrupt("return",!1);case 15:throw new Error("Received an unexpected permission level: "+a);case 16:case"end":return c.stop()}},null,this,[[1,7]])};return a}();function w(a,b){var c="chrome-webstore-item";if(!b.querySelector('link[href="'+a+'"][rel="'+c+'"]')){var d=b.createElement("link");d.setAttribute("href",a);d.setAttribute("rel",c);b.head!=null||g(0,6240);b.head.appendChild(d)}}function x(a){return new(b("Promise"))(function(b){return window.setTimeout(b,a)})}e.exports=new d()}),null);
__d("CollabRTCChromeScreenSharing",["CollabRTCChromeScreenSharingExtension"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={focusTabAndWindow:function(){return b("CollabRTCChromeScreenSharingExtension").focusTabAndWindow()},getLastFocusedWindow:function(a){return b("CollabRTCChromeScreenSharingExtension").getLastFocusedWindow(a)},getTabForSender:function(){return b("CollabRTCChromeScreenSharingExtension").getTabForSender()},getTabAndWindowForSender:function(){return b("CollabRTCChromeScreenSharingExtension").getTabAndWindowForSender()},getWindow:function(a,c){return b("CollabRTCChromeScreenSharingExtension").getWindow(a,c)},getSourceID:function(a,c){return b("CollabRTCChromeScreenSharingExtension").install(c).then(function(){return b("CollabRTCChromeScreenSharingExtension").getSourceID(a)})},stop:function(){return b("CollabRTCChromeScreenSharingExtension").stop()},updateTab:function(a,c){return b("CollabRTCChromeScreenSharingExtension").updateTab(a,c)},updateWindow:function(a,c){return b("CollabRTCChromeScreenSharingExtension").updateWindow(a,c)}};e.exports=a}),null);
__d("RTCChromeScreenSharingUtils",["CurrentUser"],(function(a,b,c,d,e,f){"use strict";function a(){return b("CurrentUser").isWorkUser()?"workplace":"rtc_call"}e.exports={getMediaRequestSourceAppId:a}}),null);
__d("CometOnBlueHeroTracingBootstrap",["performanceNow","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=[],i=null;function a(){var a=b("uuid")(),c=(g||(g=b("performanceNow")))();if(i)return i(a,c);h.push({interactionID:a,startTime:c});return a}function c(a){if(i)return;i=a;h.forEach(function(b){var c=b.interactionID;b=b.startTime;return a(c,b)})}e.exports={inject:c,startInteraction:a}}),null);
__d("InnerPane.react",["cx","DOMDimensions","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getSize=function(a){var c=b("ReactDOM").findDOMNode(this),d=b("ReactDOM").findDOMNode(this.refs.content);d=b("DOMDimensions").getElementDimensions(d)[a];d+=b("DOMDimensions").measureElementBox(c,a,!0,!0,!0);return d};d.render=function(){var a=this.props,c=a.top,d=a.left,e=a.width;a=a.height;c={top:c,left:d,width:e,height:a};d=b("joinClasses")(this.props.className,"pane");return b("React").jsx("div",babelHelpers["extends"]({},this.props,{style:c,className:d,children:b("React").jsx("div",{className:"paneScroll _4l3f",children:b("React").jsx("div",{className:"paneContent",ref:"content",children:this.props.children})})}))};return c}(b("React").Component);e.exports=a}),null);
__d("PaneGeometryMixin.react",["React","prop-types"],(function(a,b,c,d,e,f){c={propTypes:{top:(a=b("prop-types")).number,left:a.number,width:a.number,height:a.number,minwidth:a.number,minheight:a.number},getStyle:function(){return{top:this.props.top,left:this.props.left,width:this.props.width,height:this.props.height}}};e.exports=c}),null);
__d("SplitPane.react",["cx","invariant","DOMDimensions","Event","PaneGeometryMixin.react","React","ReactDOM","clearImmediate","createReactClass_DEPRECATED","getElementPosition","getViewportDimensions","joinClasses","prop-types","setImmediate","shallowEqual"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("createReactClass_DEPRECATED")({displayName:"Item",mixins:[b("PaneGeometryMixin.react")],shouldComponentUpdate:function(a){return!b("shallowEqual")(a,this.props)},render:function(){return b("React").jsx("div",babelHelpers["extends"]({},this.props,{style:this.getStyle(),children:this.props.children}))}});a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={separatorWidth:0,dragging:!1},d.$1=function(a,b){return d.state.orientation==="vertical"?a:{width:a[b.width],height:a[b.height],top:a[b.top],left:a[b.left]}},d.$2=function(a,b,c){var e={},f={},g={};if(a[c.width]){var h=a[c.width];f=d.$1({left:0,top:0,width:Math.max(Math.floor((h-b)*d.state.proportion),0),height:a[c.height]},c);e=d.$1({left:f[c.width],top:0,height:a[c.height]},c);g=d.$1({left:b+e[c.left],top:0,width:Math.max(h-f[c.width]-b,0),height:a[c.height]},c)}return{separator:e,firstPane:f,secondPane:g}},d.grip=b("React").jsx("div",{className:"grip"}),d.collapse=function(){d.refs.firstPane.props.collapsible?d.setState({proportion:0}):d.refs.secondPane.props.collapsible&&d.setState({proportion:1})},d.getDimensions=function(){return{height:d.state.height,width:d.state.width}},d.getSize=function(a){return a==="width"&&d.state.orientation==="vertical"||a==="height"&&d.state.orientation==="horizontal"?0:Math.max(d.refs.firstPane.getSize(a),d.refs.secondPane.getSize(a))},d.$4=function(a){if(a.altKey){d.$5();return}document.body.style.MozUserSelect="none";var b=d.$3();d.setState({dragging:!0,dragStart:a[b.clientX],dragProportion:d.state.proportion})},d.$6=function(a){__p&&__p();if(!d.state.dragging)return;var b=d.$3(),c=d.state[b.width];a=(a[b.clientX]-d.state.dragStart)/c;var e=d.state.separatorWidth;c=c-e;e=d.refs.firstPane.props[b.minwidth]||0;b=d.refs.secondPane.props[b.minwidth]||0;a=d.state.dragProportion+a;a=Math.max(a,e/c);a=Math.min(a,1-b/c);a=Math.max(0,Math.min(a,1));d.state.proportion!=a&&(d.props.onProportionChanged&&d.props.onProportionChanged(a),d.setState({proportion:a}))},d.$7=function(a){if(!d.state.dragging)return;document.body.style.MozUserSelect="";d.setState({dragging:!1});d.props.onDragEnd&&d.props.onDragEnd(d.state.proportion)},d.$8=function(a){d.state.dragging&&a.kill()},d.$3=function(){if(d.state.orientation==="vertical")return{top:"top",bottom:"bottom",left:"left",right:"right",width:"width",height:"height",clientX:"clientX",maxwidth:"maxwidth",maxheight:"maxheight",minwidth:"minwidth",minheight:"minheight",x:"x",y:"y"};else return{top:"left",bottom:"right",left:"top",right:"bottom",width:"height",height:"width",clientX:"clientY",maxwidth:"maxheight",maxheight:"maxwidth",minwidth:"minheight",minheight:"minwidth",x:"y",y:"x"}},d.$11=function(){__p&&__p();var a=b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)),c=a.parentNode,e=b("ReactDOM").findDOMNode(d.refs.separator);c=b("DOMDimensions").getElementDimensions(c);var f=b("getElementPosition")(a),g=b("getViewportDimensions").withoutScrollbars(),h=d.$3();e=b("DOMDimensions").getElementDimensions(e);e[h.width]!==d.state.separatorWidth&&d.setState({separatorWidth:e[h.width]});e={height:d.props.heightPolicy,width:d.props.widthPolicy};d.props.height!==void 0&&(e.height="fixed");d.props.width!==void 0&&(e.width="fixed");e[h.width]==="grow"&&(e[h.width]="auto");var i={};e[h.width]==="auto"?i[h.width]=c[h.width]:e[h.width]==="fixed"?i[h.width]=d.props[h.width]:e[h.width]==="full"&&(i[h.width]=g[h.width]-f[h.x]-d.$12(h.right,a));d.props[h.maxwidth]!==void 0&&i[h.width]>d.props[h.maxwidth]&&(i[h.width]=d.props[h.maxwidth]);if(e[h.height]==="auto")i[h.height]=c[h.height];else if(e[h.height]==="fixed")i[h.height]=d.props[h.height];else if(e[h.height]==="full")i[h.height]=g[h.height]-f[h.y]-d.$12(h.bottom,a);else if(e[h.height]==="grow"){c=d.refs.firstPane.getSize(h.height);g=d.refs.secondPane.getSize(h.height);i[h.height]=Math.max(c,g)}d.props[h.maxheight]!==void 0&&i[h.height]>d.props[h.maxheight]&&(i[h.height]=d.props[h.maxheight]);(d.state.width!==i.width||d.state.height!==i.height)&&(d.setState(i),d.props.onResize&&d.props.onResize())},d.$12=function(a,c){d.nestedBox===void 0&&(d.nestedBox={});if(d.nestedBox[a]!==void 0)return d.nestedBox[a];var e=0;do e+=b("DOMDimensions").measureElementBox(c,a,1,1,1);while(c!==document.body&&(c=c.parentNode));d.nestedBox[a]=e;return e},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=[];b("React").Children.forEach(this.props.children,function(b){b&&a.push(b)});a.length===2||h(0,4885);var c=this.$2(this.state,this.state.separatorWidth,this.$3()),d=b("joinClasses")("splitPane"+(this.props.bossPane?" splitPaneBoss":"")+(this.state.orientation==="vertical"?" vertical":"")+(this.state.orientation==="horizontal"?" horizontal":"")+(this.props.nostyling?"":" default")+(this.state.dragging?" dragging":""),this.props.className),e=b("React").jsx(i,babelHelpers["extends"]({ref:"separator",className:"separator"},c.separator,{onMouseDown:this.$4,onMouseOver:this.props.onMouseOverSeparator,onMouseLeave:this.props.onMouseLeaveSeparator,children:this.grip})),f=b("React").cloneElement(a[0],babelHelpers["extends"]({},c.firstPane,{ref:"firstPane",bossPane:!1}));c=b("React").cloneElement(a[1],babelHelpers["extends"]({},c.secondPane,{ref:"secondPane",bossPane:!1}));return b("React").jsxs(i,babelHelpers["extends"]({ref:"container"},this.props,{width:this.state.width,height:this.state.height,className:d,children:[e,b("React").jsx("div",{className:"guide",ref:"guide"}),b("React").jsx("div",{className:"voile",ref:"voile"}),f,c]}))};d.$5=function(){if(this.props.flippable){var a=this.state.orientation==="vertical"?"horizontal":"vertical";this.props.onOrientation&&this.props.onOrientation(a);this.setState({orientation:a})}};d.UNSAFE_componentWillMount=function(){document.addEventListener("mousemove",this.$6),document.addEventListener("mouseup",this.$7),document.addEventListener("selectstart",this.$8),this.setState({height:this.props.height,width:this.props.width,orientation:this.props.orientation,proportion:this.props.proportion})};d.componentWillUnmount=function(){document.removeEventListener("mousemove",this.$6),document.removeEventListener("mouseup",this.$7),document.removeEventListener("selectstart",this.$8),this.$9!=null&&(this.$9.remove(),delete this.$9),this.$10!=null&&b("clearImmediate")(this.$10)};d.componentDidMount=function(){this.$11(),(this.props.heightPolicy==="full"||this.props.widthPolicy==="full"||this.props.alwaysUpdateOnWindowResize)&&(this.$9=b("Event").listen(window,"resize",this.$11))};d.UNSAFE_componentWillReceiveProps=function(a){a.proportion!==this.props.proportion&&this.setState({proportion:a.proportion}),a.orientation!==this.props.orientation&&this.setState({orientation:a.orientation}),this.$10!=null&&b("clearImmediate")(this.$10),this.$10=b("setImmediate")(this.$11)};return c}(b("React").Component);a.propTypes={widthPolicy:(c=b("prop-types")).oneOf(["auto","full","fixed","grow"]),heightPolicy:c.oneOf(["auto","full","fixed","grow"]),orientation:c.oneOf(["vertical","horizontal"]),nostyling:c.bool,flippable:c.bool,maxwidth:c.number,maxheight:c.number,width:c.number,height:c.number,proportion:c.number,onProportionChanged:c.func,onDragEnd:c.func,bossPane:c.bool,onResize:c.func,onOrientation:c.func,alwaysUpdateOnWindowResize:c.bool,onMouseOverSeparator:c.func,onMouseLeaveSeparator:c.func};a.defaultProps={widthPolicy:"auto",heightPolicy:"grow",orientation:"vertical",nostyling:!1,flippable:!1,proportion:.5,bossPane:!0};e.exports=a}),null);
__d("createBUITypeStyle",["FDSSystemFonts","SUITypeStyle"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=b("FDSSystemFonts").FONT_FAMILY,d=b("FDSSystemFonts").LETTER_SPACING;return b("SUITypeStyle")(babelHelpers["extends"]({},a,{fontFamily:c,letterSpacing:d}))}e.exports=a}),null);
__d("SUIHelpMessageUniform.business",["ix","React","SUIGlyphIcon.react","asset"],(function(a,b,c,d,e,f,g){"use strict";a={icon:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:g("481013")})};e.exports=a}),null);
__d("SUITooltipUniform.business",["cssVar","createBUITypeStyle"],(function(a,b,c,d,e,f,g){"use strict";a={backgroundColor:"#1C1E21",color:"#FFFFFF",showArrow:!0,typeStyle:b("createBUITypeStyle")({color:"#FFFFFF",fontSize:"12px",fontWeight:"bold"})};e.exports=a}),null);
__d("getSUIDropdownButtonUniform.fds",["ix","cssVar","FDSPrivateThemeUtils","React","SUIGlyphIcon.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a=b("FDSPrivateThemeUtils").isGeo(a);return{use:{"default":{chevron:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:a?g("786072"):g("481883"),srcDisabled:g("482773"),style:{marginRight:"-2px"}}),disabled:{background:"#EBEDF0",borderColor:"#DADDE1",color:"#BEC3C9"}},confirm:{chevron:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:g("483254"),srcDisabled:g("483254"),style:{marginRight:"-2px"}}),disabled:{background:"#B0D5FF",borderColor:"#B0D5FF",color:"#FFFFFF"}},special:{chevron:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:g("483254"),srcDisabled:g("483254"),style:{marginRight:"-2px"}}),disabled:{background:"#86DF81",borderColor:"#86DF81",color:"#FFFFFF"}},flat:{chevron:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:a?g("786072"):g("481883"),srcDisabled:g("482773"),style:{marginRight:"-2px"}}),disabled:{background:"transparent",borderColor:"transparent",color:"#BEC3C9"}},flatWhite:{chevron:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:g("483254"),srcDisabled:g("481883"),style:{marginRight:"-2px"}}),disabled:{background:"transparent",borderColor:"transparent",color:"rgba(255, 255, 255, 0.4)"}}},padding:"12px"}}e.exports=a}),null);
__d("FDSDropdownButton.react",["FDSButton.react","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","React","SUIBorderUtils","SUIButtonContext","autoFlipStyleProps","getSUIButtonUniform.fds","getSUIDropdownButtonUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useMemo,h=b("makeSUIThemeGetter")({SUIButton:b("getSUIButtonUniform.fds"),SUISelectorButton:b("getSUIDropdownButtonUniform.fds")}),i={isFixedWidthPadded:!0};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a,c=this.context,d=h(c);c=b("FDSPrivateThemeUtils").isGeo(c);a=(a=d.SUISelectorButton.use[o(this.props.use)])!=null?a:d.SUISelectorButton.use["default"];var e=this.props.labelIsHidden&&this.props.icon==null;c=b("React").jsx(k,{isGeo:c,isOnlyIcon:e,size:this.props.size,theme:d,width:this.props.width,children:a.chevron});return b("React").jsx(b("SUIButtonContext").Provider,{value:i,children:b("React").jsx(b("FDSButton.react"),{"aria-haspopup":!0,"aria-pressed":null,borderedSides:this.props.borderedSides,"data-testid":this.props["data-testid"],icon:this.props.icon,iconAfter:c,id:this.props.id,isDepressed:this.props.isDepressed,isDisabled:this.props.isDisabled,label:this.props.label,labelIsHidden:this.props.labelIsHidden,margin:this.props.margin,maxWidth:this.props.maxWidth,onBlur:this.props.onBlur,onClick:this.props.onClick,onFocus:this.props.onFocus,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,onMouseDown:this.props.onMouseDown,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,onMouseUp:this.props.onMouseUp,rel:this.props.rel,roundedCorners:this.props.roundedCorners,size:this.props.size,textAlign:this.props.textAlign,tooltip:this.props.tooltip,tooltipDelay:this.props.tooltipDelay,tooltipPosition:this.props.tooltipPosition,type:this.props.type,use:this.props.use,width:this.props.width})})};return c}(b("React").PureComponent);a.contextType=b("FDSPrivateThemeContext.react");a.defaultProps={borderedSides:b("SUIBorderUtils").ALL_SIDES,isDisabled:!1,labelIsHidden:!1,roundedCorners:b("SUIBorderUtils").ALL_CORNERS,size:"medium",type:"button",use:"default"};var j={display:"flex",justifyContent:"flex-end",flexGrow:1};function k(a){__p&&__p();var c=a.children,d=a.isGeo,e=a.isOnlyIcon,f=a.size,h=a.style,i=a.theme,k=a.width;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","isGeo","isOnlyIcon","size","style","theme","width"]);i=i.SUIButton.padding[n(f)];var o=i.button,p=i.onlyIcon;f=g(function(){__p&&__p();if(c==null)return null;var a=c.props!=null&&typeof c.props==="object"&&c.props.style!=null&&typeof c.props.style==="object"?c.props.style:{};a=b("autoFlipStyleProps")({marginRight:m(a,"marginRight"),marginLeft:m(a,"marginLeft")});var f=l(h==null?void 0:h.marginRight,a==null?void 0:a.marginRight);a=l(h==null?void 0:h.marginLeft,a==null?void 0:a.marginLeft);var g=parseInt(o,10)-parseInt(p,10),i={};f!=null&&(i.marginRight=f);a!=null&&(i.marginLeft=a);d&&e&&(i.marginRight=-g,i.marginLeft=-g);return babelHelpers["extends"]({},h,i)},[c,h,o,p,d,e]);if(c==null)return null;i=b("React").cloneElement(c,babelHelpers["extends"]({},a,{style:f}));return k==null||k==="auto"?i:b("React").jsx("span",{style:j,children:i})}function l(a,b){if(a==null&&b==null)return null;a=a!=null?parseInt(a,10):0;b=b!=null?parseInt(b,10):0;return a+b+"px"}function m(a,b){return a[b]!=null&&(typeof a[b]==="string"||typeof a[b]==="number")?a[b]:null}function n(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}function o(a){return a==="primary"?"confirm":a}e.exports=b("makeFDSStandardComponent")("FDSDropdownButton",a)}),null);
__d("getSUIDropdownSelectorOptionGroupUniform.fds",["ix","cssVar","FDSPrivateTypeStyles","React","SUIGlyphIcon.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("FDSPrivateTypeStyles").createTypeStyleGetter;function a(a){a=i(a);return{activeBackgroundColor:"#DADDE1",activeColor:"#1C1E21",collapsedIcon:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:g("496752")}),color:"#1C1E21",expandedIcon:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:g("504839")}),highlightedBackgroundColor:"#F5F6F7",highlightedColor:"#1C1E21",typeStyle:a({color:"#1C1E21",fontSize:"12px",fontWeight:"bold"})}}e.exports=a}),null);
__d("SUIDropdownSelectorOptionGroupUniform.fds",["FDSPrivateThemeAtomsClassic","getSUIDropdownSelectorOptionGroupUniform.fds"],(function(a,b,c,d,e,f){"use strict";e.exports=b("getSUIDropdownSelectorOptionGroupUniform.fds")(b("FDSPrivateThemeAtomsClassic"))}),null);
__d("SUISelectorOptionGroup.react",["cx","Focus","KeyStatus","React","RTLKeys","SUIComponent","SUITheme","VirtualCursorStatus","emptyFunction","joinClasses","nullthrows","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("KeyStatus").isKeyDown,i=b("VirtualCursorStatus").isVirtualCursorTriggered;a={canSelectMultiple:!1,isCollapsible:!0,isExpandedInitially:!1,setupFocusRef:b("emptyFunction")};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$SUISelectorOptionGroup5=function(){__p&&__p();for(var a=d.$SUISelectorOptionGroup2,c=Array.isArray(a),e=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(c){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;f=f[1];var g=f.ref;f=f.selected;if(f){b("Focus").set(g);return}}f=b("nullthrows")(d.$SUISelectorOptionGroup2.get(0)).ref;b("Focus").set(f)};d.$SUISelectorOptionGroup6=function(){d.setState({isActive:!1,showFocusRing:!1})};d.$SUISelectorOptionGroup7=function(){(h()||i())&&d.setState({showFocusRing:!0})};d.$SUISelectorOptionGroup8=function(){d.setState(function(a){return{isExpanded:!a.isExpanded}},function(){d.state.isExpanded&&d.$SUISelectorOptionGroup5()})};d.$SUISelectorOptionGroup9=function(a){d.props.onKeyDown&&d.props.onKeyDown(a);switch(a.keyCode){case b("RTLKeys").RETURN:case b("RTLKeys").SPACE:case b("RTLKeys").getRight():a.preventDefault();d.setState({isExpanded:!0},d.$SUISelectorOptionGroup5);break}};d.$SUISelectorOptionGroup10=function(){d.setState({isActive:!0})};d.$SUISelectorOptionGroup11=function(){d.setState({isHovering:!0})};d.$SUISelectorOptionGroup12=function(){d.setState({isHovering:!1})};d.$SUISelectorOptionGroup13=function(){d.setState({isActive:!1})};d.$SUISelectorOptionGroup16=function(a,b,c){d.$SUISelectorOptionGroup2.set(a,{ref:b,selected:c}),d.props.isCollapsible||d.props.setupFocusRef(b,a,c)};d.$SUISelectorOptionGroup17=function(a){d.$SUISelectorOptionGroup1=a,d.props.setupFocusRef(a,0,d.props.selected)};d.state={isActive:!1,isExpanded:d.$SUISelectorOptionGroup3()||c.isExpandedInitially,isHovering:!1,showFocusRing:!1};d.$SUISelectorOptionGroup2=new Map();return d}var d=c.prototype;d.$SUISelectorOptionGroup3=function(){return b("React").Children.toArray(this.props.children).some(function(a){return a.props.selected})};d.$SUISelectorOptionGroup4=function(){var a=this;this.setState({isExpanded:!1},function(){b("Focus").set(a.$SUISelectorOptionGroup1)})};d.$SUISelectorOptionGroup14=function(a){__p&&__p();var c=this;return!this.props.isCollapsible&&this.props.onSubItemSelect?this.props.onSubItemSelect(a):function(d){__p&&__p();switch(d.keyCode){case b("RTLKeys").UP:d.preventDefault();c.$SUISelectorOptionGroup15(a-1);break;case b("RTLKeys").DOWN:d.preventDefault();c.$SUISelectorOptionGroup15(a+1);break;case b("RTLKeys").ESC:case b("RTLKeys").getLeft():d.preventDefault();c.$SUISelectorOptionGroup4();break}}};d.$SUISelectorOptionGroup15=function(a){var c=0;a>=this.$SUISelectorOptionGroup2.size?c=0:a<0&&(c=this.$SUISelectorOptionGroup2.size-1);a=b("nullthrows")(this.$SUISelectorOptionGroup2.get(c)).ref;b("Focus").set(a)};d.render=function(){__p&&__p();var a=this,c=b("React").Children.map(this.props.children,function(c,d){__p&&__p();return c?b("React").cloneElement(c,{canSelectMultiple:a.props.canSelectMultiple,hasSelectedValue:!0,onKeyDown:a.$SUISelectorOptionGroup14(d),onSelect:function(){if(a.props.onSelect!=null){var b;(b=a.props).onSelect.apply(b,arguments)}if(c.props.onSelect!=null){var d;(d=c.props).onSelect.apply(d,arguments)}},setupFocusRef:function(b){a.$SUISelectorOptionGroup16(d,b,!!c.props.selected)},theme:a.props.theme}):null}),d=b("SUITheme").get(this).SUISelectorOptionGroup,e=this.state,f=e.isActive,g=e.isHovering;e=e.showFocusRing;var h;f?h=d.activeBackgroundColor:(g||e)&&(h=d.highlightedBackgroundColor);f?f=d.activeColor:g||e?f=d.highlightedColor:f=d.color;g=null;e=!0;this.props.isCollapsible&&(g=this.state.isExpanded?d.expandedIcon:d.collapsedIcon,e=this.state.isExpanded);var i=this.props.isCollapsible?{"aria-haspopup":!0,onBlur:this.$SUISelectorOptionGroup6,onClick:this.$SUISelectorOptionGroup8,onFocus:this.$SUISelectorOptionGroup7,onKeyDown:this.$SUISelectorOptionGroup9,onMouseDown:this.$SUISelectorOptionGroup10,onMouseEnter:this.$SUISelectorOptionGroup11,onMouseLeave:this.$SUISelectorOptionGroup12,onMouseUp:this.$SUISelectorOptionGroup13,ref:this.$SUISelectorOptionGroup17,role:"menuitem"}:null;return b("React").jsxs("li",{className:this.props.className,"data-testid":this.props["data-testid"],children:[b("React").jsxs("a",babelHelpers["extends"]({},i,{className:"_3vsz"+(this.state.showFocusRing?"":" _2eyk")+(this.props.isCollapsible?" _4ck5":""),"data-testid":"SUISelectorOption/container",href:"#",style:babelHelpers["extends"]({},d.typeStyle,{backgroundColor:h,color:f}),tabIndex:-1,children:[b("React").jsx("span",{className:"_4ki-",children:this.props.label}),g!=null&&b("React").cloneElement(g,{"aria-hidden":!0,className:b("joinClasses")("_3vsv",g.props.className)})]})),b("React").jsx("ul",{role:"menu",children:e?c:null})]})};return c}(b("SUIComponent"));c.propTypes={canSelectMultiple:(d=b("prop-types")).bool,className:d.string,isCollapsible:d.bool.isRequired,label:d.oneOfType([d.node,d.string]).isRequired,onKeyDown:d.func,onSelect:d.func,onSubItemSelect:d.func,selected:d.bool,setupFocusRef:d.func,theme:d.instanceOf(b("SUITheme"))};c.defaultProps=a;e.exports=c}),null);
__d("FDSDropdownSelectorOptionGroup.react",["React","SUIDropdownSelectorOptionGroupUniform.fds","SUISelectorOptionGroup.react","emptyFunction","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorOptionGroup",{SUISelectorOptionGroup:b("SUIDropdownSelectorOptionGroupUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("SUISelectorOptionGroup.react"),{canSelectMultiple:this.props.canSelectMultiple,"data-testid":this.props["data-testid"],isCollapsible:this.props.isCollapsible,isExpandedInitially:this.props.isExpandedInitially,label:this.props.label,onKeyDown:this.props.onKeyDown,onSelect:this.props.onSelect,onSubItemSelect:this.props.onSubItemSelect,selected:this.props.selected,setupFocusRef:this.props.setupFocusRef,theme:g,children:this.props.children})};return c}(b("React").PureComponent);a.defaultProps={canSelectMultiple:!1,isCollapsible:!0,isExpandedInitially:!1,setupFocusRef:b("emptyFunction")};e.exports=b("makeFDSStandardComponent")("FDSDropdownSelectorOptionGroup",a)}),null);
__d("ReactSelectorUtils",["React","deepCompare"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={processMenuItems:function(a,c,d){__p&&__p();d===void 0&&(d=!1);var e;d=b("React").Children.map(a,function(a){if(a){var d=b("deepCompare")(a.props.value,c);a=b("React").cloneElement(a,{selected:d});d&&(e=a);return a}});return{items:d,selectedItem:e}},processMultiMenuItems:function(a,c,d){__p&&__p();d===void 0&&(d=!1);var e=[];d=a;c&&(d=b("React").Children.map(a,function(a){if(a){var d=c.some(function(b){return b===a.props.value});a=b("React").cloneElement(a,{selected:d});d&&e.push(a);return a}}));return{items:d,selectedItems:e}}};e.exports=a}),null);
__d("LayerFitHeightToScreen",["DOMVector","Event","Style","SubscriptionsHandler","Vector","debounce"],(function(a,b,c,d,e,f){__p&&__p();var g=12;a=function(){"use strict";__p&&__p();function a(a){__p&&__p();var c=this;this.$3=function(){__p&&__p();var a=c.$1.getContent();for(var d=0;d<2;d++)a&&(a=a.children[0]);if(!a)return;d=b("Vector").getElementPosition(a).y;var e=b("Vector").getViewportDimensions().y,f=b("DOMVector").getScrollPosition().y;e=e-(d-f)-g;b("Style").apply(a,{maxHeight:e+"px",overflowX:"hidden",overflowY:"auto"});c.$1.inform("resize",{height:e})};this.$1=a;this.$2=null}var c=a.prototype;c.enable=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("Event").listen(window,"resize",b("debounce")(this.$3)),this.$1.subscribe("show",this.$3),this.$1.subscribe("reposition",this.$3))};c.disable=function(){this.$2&&(this.$2.release(),this.$2=null)};return a}();e.exports=a}),null);
__d("SUIFocusUtil",["Focus","VirtualCursorStatus"],(function(a,b,c,d,e,f){"use strict";a={setFocus:function(a){b("VirtualCursorStatus"),b("Focus").set(a)}};e.exports=a}),null);
__d("SUIPropTypes",[],(function(a,b,c,d,e,f){"use strict";a={dropdownWidth:function(a,b,c){b=a.dropdownWidth;return b!=="auto"&&b!=="sameAsSelector"&&typeof b!=="number"?new Error("Invalid prop `dropdownWidth` of type `"+typeof b+"` supplied to `"+c+'`, expected "auto", "sameAsSelector", or any number.'):void 0},width:function(a,b,c){b=a.width;return b!=="auto"&&b!=="100%"&&typeof b!=="number"?new Error("Invalid prop `width` of type `"+typeof b+"` supplied to `"+c+'`, expected "auto", "100%", or any number.'):void 0}};e.exports=a}),null);
__d("SUISelectorButton.react",["cx","Locale","React","SUIButton.react","SUIComponent","SUIErrorComponentUtil","SUITheme","joinClasses","prop-types","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=babelHelpers["extends"]({},b("SUIButton.react").defaultProps,b("SUIErrorComponentUtil").defaultProps,{hasHoverState:!1,isMenuShown:!1,suppressed:!1,textAlign:"left"});c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$SUISelectorButton1=b("uniqueID")(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$SUISelectorButton2=function(a){a=a.margins;if(!a)return{};a=a.label;if(!a)return{};else if(b("Locale").isRTL())return{marginLeft:a.right,marginRight:a.left};else return{marginLeft:a.left,marginRight:a.right}};d.$SUISelectorButton3=function(){var a=b("SUITheme").get(this).SUISelectorButton,c=this.props.uniformOverride;return c!=null?babelHelpers["extends"]({},a,c):a};d.render=function(){__p&&__p();var a=b("SUITheme").get(this),c=b("SUIErrorComponentUtil").hasError(this.props),d=this.props,e=d.id,f=d.isMenuShown,g=d.labelledBy,h=d.style,i=d.styleWhenMenuShown,j=d.suppressLabelOverflowTooltip,k=d.uniformOverrideButton;d=babelHelpers.objectWithoutPropertiesLoose(d,["id","isMenuShown","labelledBy","style","styleWhenMenuShown","suppressLabelOverflowTooltip","uniformOverrideButton"]);var l=d.suppressed;delete d.uniformOverride;delete d.suppressed;k&&(d.uniformOverride=k);l&&!f&&(d.suppressed=l);k=this.$SUISelectorButton3();l=((l=k.use)!=null?l[this.props.use]:l)||k.use["default"];var m;h=babelHelpers["extends"]({paddingLeft:k.paddingLeft!=null?k.paddingLeft:k.padding,paddingRight:k.paddingRight!=null?k.paddingRight:k.padding},this.props.disabled&&l!=null&&l.disabled?{backgroundColor:l.disabled.background,borderColor:l.disabled.borderColor,color:l.disabled.color}:{},h);f&&i!=null&&(h=babelHelpers["extends"]({},h,i));if(c){m=b("SUIErrorComponentUtil").getErrorIcon(this.props,a,"_483q");f=b("Locale").isRTL()?"paddingLeft":"paddingRight";h=babelHelpers["extends"]({},h,(i={borderColor:b("SUIErrorComponentUtil").getErrorBorderColor(this.props,a)},i[f]=0,i))}a=l!=null&&l.chevron!=null?b("React").cloneElement(l.chevron,{"aria-hidden":!0,className:"_483r monochrome",disabled:this.props.disabled}):null;f=this.$SUISelectorButton2(k);i=Boolean(this.props.tooltip)||j?null:{"data-hover":"tooltip","data-tooltip-display":"overflow"};l=b("React").jsxs("div",{className:"_1e",children:[this.props.labelIsHidden?b("React").jsx("span",{className:"accessible_elem",children:this.props.label}):b("React").jsx("div",babelHelpers["extends"]({},i,{className:"_1f",style:f,children:this.props.label})),a,m]});k=g!=null&&e==null?this.$SUISelectorButton1:e;j=g!=null&&k!=null?g+" "+k:void 0;return b("React").jsx(b("SUIButton.react"),babelHelpers["extends"]({},d,b("SUIErrorComponentUtil").getErrorTooltipProps(this.props),{"aria-haspopup":!0,"aria-labelledby":j,"aria-pressed":null,className_DEPRECATED:b("joinClasses")(this.props.className_DEPRECATED,"_483s"+(c?" _483t":"")+(this.props.disabled?" _56jv":"")),id:k,isLabelFullWidth:!0,label:l,labelIsHidden:!1,style:h,suppressLabelOverflowTooltip:!0,use:this.props.use}))};return c}(b("SUIComponent"));c.propTypes=babelHelpers["extends"]({},b("SUIButton.react").propTypes,b("SUIErrorComponentUtil").propTypes,{isMenuShown:b("prop-types").bool.isRequired,styleWhenMenuShown:b("prop-types").object});c.defaultProps=a;e.exports=c}),null);
__d("WheelEventContain.react",["DOMEventListener","React"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$2=function(a){a&&!d.$1?d.$1=b("DOMEventListener").add(a,"wheel",d.$3,{passive:!0}):!a&&d.$1&&(d.$1.remove(),d.$1=null)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").jsx("div",babelHelpers["extends"]({},this.props,{ref:this.$2}))};d.$3=function(a){a.stopPropagation()};return c}(b("React").Component);e.exports=a}),null);
__d("SUIAbstractMenu.react",["cx","AccessibleLayer","AlignmentEnum","ContextualLayer.react","ContextualLayerAlignmentEnum","ContextualLayerAutoFlip","ContextualLayerHideOnScrollOut","ContextualLayerPositionEnum","ContextualLayerUpdateOnScroll","LayerFitHeightToScreen","LayerHideOnBlur","LayerHideOnEscape","LayerTabIsolation","React","ReactDOM","RTLKeys","ScrollableArea.react","Style","SUIComponent","SUIErrorComponentUtil","SUIFocusUtil","SUIPropTypes","SUISelectorButton.react","SUITheme","WheelEventContain.react","getActiveElement","prop-types","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=400,i={AccessibleLayer:b("AccessibleLayer"),LayerFitHeightToScreen:b("LayerFitHeightToScreen"),LayerHideOnEscape:b("LayerHideOnEscape"),LayerTabIsolation:b("LayerTabIsolation"),ContextualLayerAutoFlip:b("ContextualLayerAutoFlip"),ContextualLayerHideOnScrollOut:b("ContextualLayerHideOnScrollOut"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")};a=babelHelpers["extends"]({},b("SUIErrorComponentUtil").defaultProps,{buttonTextAlign:"left",buttonUse:"default",contextualLayerBehaviors:{},disabled:!1,display:"block",dropdownWidth:"auto",labelIsHidden:!1,maxHeight:250,menuAlignment:"left",menuPosition:"below",shouldHideOnBlur:!0,shouldHideOnMouseLeave:!1,shouldOpenAutomatically:!1,suppressed:!1,width:"auto"});c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$SUIAbstractMenu6=b("uniqueID")(),d.state={isMenuShown:!1,prevShouldOpenAutomatically:!1},d.hideMenu=function(){if(d.state.isMenuShown){var a=d.$SUIAbstractMenu9();d.setState({isMenuShown:!1},function(){a&&d.focusInput(),d.props.onClose&&d.props.onClose()})}},d.$SUIAbstractMenu10=function(a){switch(a.keyCode){case b("RTLKeys").DOWN:case b("RTLKeys").UP:case b("RTLKeys").SPACE:case b("RTLKeys").RETURN:a.preventDefault();d.showMenu();break}},d.$SUIAbstractMenu11=function(a){switch(a.keyCode){case b("RTLKeys").TAB:d.hideMenu();break}},d.$SUIAbstractMenu12=function(a){a?d.showMenu():d.hideMenu()},d.$SUIAbstractMenu13=function(){d.$SUIAbstractMenu7&&window.clearTimeout(d.$SUIAbstractMenu7),d.props.onMouseEntersMenu&&d.props.onMouseEntersMenu()},d.$SUIAbstractMenu14=function(){d.props.shouldHideOnMouseLeave&&(d.$SUIAbstractMenu7=window.setTimeout(d.hideMenu,h)),d.props.onMouseLeavesMenu&&d.props.onMouseLeavesMenu()},d.$SUIAbstractMenu15=function(a){!d.state.isMenuShown?d.showMenu():d.hideMenu(),d.props.onButtonClick&&d.props.onButtonClick(a)},d.$SUIAbstractMenu16=function(a){d.$SUIAbstractMenu1=a},d.$SUIAbstractMenu17=function(a){d.$SUIAbstractMenu2=a?b("ReactDOM").findDOMNode(a):null},d.$SUIAbstractMenu18=function(a){d.$SUIAbstractMenu3=a?b("ReactDOM").findDOMNode(a):null},d.$SUIAbstractMenu19=function(a){d.$SUIAbstractMenu5=a},d.$SUIAbstractMenu20=function(a){d.$SUIAbstractMenu4=a},d.$SUIAbstractMenu21=function(){return d.$SUIAbstractMenu2},d.$SUIAbstractMenu23=function(a){d.setState({layerCalculatedMaxHeight:a.height})},c)||babelHelpers.assertThisInitialized(d)}c.getDerivedStateFromProps=function(a,b){a=a.shouldOpenAutomatically===!0;b=b.prevShouldOpenAutomatically;return a!==b?{prevShouldOpenAutomatically:a,isMenuShown:a}:null};var d=c.prototype;d.componentDidMount=function(){!this.props.disabled&&this.props.shouldOpenAutomatically&&this.$SUIAbstractMenu8()};d.componentDidUpdate=function(){var a=this.$SUIAbstractMenu1,c=this.$SUIAbstractMenu3;if(this.state.isMenuShown&&a&&c){a=b("Style").get(a,"width");var d=this.props.dropdownWidth;c.style.minWidth=a;c.style.width=d==="sameAsSelector"?a:typeof d==="number"?d+"px":d;this.$SUIAbstractMenu5&&this.$SUIAbstractMenu5.layer&&this.$SUIAbstractMenu5.layer.updatePosition()}};d.focusInput=function(){this.$SUIAbstractMenu2&&b("SUIFocusUtil").setFocus(this.$SUIAbstractMenu2)};d.showMenu=function(){var a=this;!this.props.disabled&&!this.state.isMenuShown&&this.setState({isMenuShown:!0},function(){a.$SUIAbstractMenu8()})};d.$SUIAbstractMenu8=function(){if(this.props.maxHeight&&this.$SUIAbstractMenu4){var a=this.$SUIAbstractMenu4.getArea();a&&a.resize&&a.resize()}this.props.onOpen&&this.props.onOpen()};d.$SUIAbstractMenu9=function(){var a=b("getActiveElement")(),c=this.$SUIAbstractMenu1&&b("ReactDOM").findDOMNode(this.$SUIAbstractMenu1);if(c&&c.contains(a))return!0;c=this.$SUIAbstractMenu5&&b("ReactDOM").findDOMNode(this.$SUIAbstractMenu5);return c&&c.contains(a)?!0:!1};d.$SUIAbstractMenu22=function(){var a=this.state.layerCalculatedMaxHeight,b=this.props.maxHeight;a=a!=null?Math.min(b,a-2):b;return a};d.render=function(){var a=this.props.labelledBy&&this.props.id==null?this.$SUIAbstractMenu6:this.props.id,c=this.props.labelledBy&&a!=null?this.props.labelledBy+" "+a:void 0;c=babelHelpers["extends"]({"aria-labelledby":c,"aria-controls":this.props.menuID,"data-testid":"SUIAbstractMenu/button",disabled:this.props.disabled,errorMessage:this.props.errorMessage,errorTooltipPosition:this.props.errorTooltipPosition,id:a,label:this.props.label,labelIsHidden:this.props.labelIsHidden,margin:this.props.margin,maxWidth:this.props.maxWidth,name:this.props.name,suppressed:this.props.suppressed,theme:this.props.theme,tooltip:this.props.tooltip,use:this.props.buttonUse,warningMessage:this.props.warningMessage,width:this.props.width,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave},this.props.button&&this.props.button.props,{isDepressed:this.state.isMenuShown,isMenuShown:this.state.isMenuShown,onClick:this.$SUIAbstractMenu15,onKeyDown:this.$SUIAbstractMenu10,ref:this.$SUIAbstractMenu17});a=this.props.button?b("React").cloneElement(this.props.button,c):b("React").jsx(b("SUISelectorButton.react"),babelHelpers["extends"]({},c,{borderedSides:this.props.buttonBorderedSides,"data-testid":"SUIAbstractMenu/button",height:this.props.buttonHeight,roundedCorners:this.props.buttonRoundedCorners,textAlign:this.props.buttonTextAlign}));c=babelHelpers["extends"]({},this.props.style,{display:this.props.display,width:this.props.width});this.props.maxWidth!=null&&(c.maxWidth=this.props.maxWidth);return b("React").jsxs("div",{className:this.props.className_DEPRECATED,"data-testid":this.props["data-testid"],ref:this.$SUIAbstractMenu16,style:c,children:[a,this.state.isMenuShown?b("React").jsx(b("ContextualLayer.react"),{alignment:this.props.menuAlignment,behaviors:babelHelpers["extends"]({},i,this.props.shouldHideOnBlur?{LayerHideOnBlur:b("LayerHideOnBlur")}:{},this.props.contextualLayerBehaviors),contextRef:this.$SUIAbstractMenu21,offsetY:this.props.offsetY,onResize:this.$SUIAbstractMenu23,onToggle:this.$SUIAbstractMenu12,position:this.props.menuPosition,ref:this.$SUIAbstractMenu19,shouldSetARIAProperties:!1,shown:!0,children:b("React").jsx(b("WheelEventContain.react"),{className:"_z4i","data-testid":this.props["data-menu-testid"],onKeyDown:this.$SUIAbstractMenu11,onMouseEnter:this.$SUIAbstractMenu13,onMouseLeave:this.$SUIAbstractMenu14,ref:this.$SUIAbstractMenu18,style:this.props.menuContainerStyle,children:b("React").jsx(b("ScrollableArea.react"),{fade:!0,maxHeight:this.$SUIAbstractMenu22(),ref:this.$SUIAbstractMenu20,children:this.props.menu})})}):null]})};return c}(b("SUIComponent"));c.propTypes=babelHelpers["extends"]({},b("SUIErrorComponentUtil").propTypes,{button:(d=b("prop-types")).element,buttonBorderedSides:d.arrayOf(d.oneOf(["top","right","bottom","left"])),buttonHeight:d.oneOf(["normal","tall","short"]),buttonRoundedCorners:d.arrayOf(d.oneOf(["topLeft","topRight","bottomRight","bottomLeft"])),buttonTextAlign:b("AlignmentEnum").propType.isRequired,buttonUse:b("SUISelectorButton.react").propTypes.use,contextualLayerBehaviors:d.object.isRequired,disabled:d.bool.isRequired,dropdownWidth:b("SUIPropTypes").dropdownWidth,margin:d.string,maxHeight:d.number.isRequired,maxWidth:d.oneOfType([d.string,d.number]),menuAlignment:b("ContextualLayerAlignmentEnum").propType.isRequired,menuPosition:b("ContextualLayerPositionEnum").propType.isRequired,shouldHideOnMouseLeave:d.bool.isRequired,shouldOpenAutomatically:d.bool.isRequired,style:d.object,suppressed:d.bool.isRequired,theme:d.instanceOf(b("SUITheme")),width:b("SUIPropTypes").width});c.defaultProps=a;e.exports=c}),null);
__d("SUISelectorSeparator.react",["cx","React","SUIComponent","SUITheme","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("SUITheme").get(this).SUISelectorSeparator;return b("React").jsx("li",{className:b("joinClasses")("_2drl",this.props.className),style:{backgroundColor:a.color,marginBottom:a.margin.bottom,marginLeft:a.margin.left,marginRight:a.margin.right,marginTop:a.margin.top}})};return c}(b("SUIComponent"));a.propTypes={theme:b("prop-types").instanceOf(b("SUITheme"))};e.exports=a}),null);
__d("flatMapArray",[],(function(a,b,c,d,e,f){__p&&__p();var g=Array.prototype.push;function a(a,b){var c=[];for(var d=0;d<a.length;d++){var e=b.call(a,a[d],d);if(Array.isArray(e))g.apply(c,e);else if(e!=null)throw new TypeError('flatMapArray: Callback must return an array or null, received "'+e.toString()+'" instead')}return c}e.exports=a}),null);
__d("SUISelector.react",["cx","fbt","AlignmentEnum","React","ReactSelectorUtils","RTLKeys","SUIAbstractMenu.react","SUIErrorComponentUtil","SUIFocusUtil","SUIPropTypes","SUISelectorOptionGroup.react","SUISelectorSeparator.react","SUITheme","first","firstx","flatMapArray","lastx","prop-types","uniqueID","withSUITheme"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=babelHelpers["extends"]({},b("SUIErrorComponentUtil").defaultProps,{buttonTextAlign:"left",canCollapseGroups:!0,canSelectMultiple:!1,contextualLayerBehaviors:{},disabled:!1,dropdownWidth:"auto",isSuppressed:!1,maxHeight:250,menuAlignment:"left",menuPosition:"below",optionGroupComponentType:b("SUISelectorOptionGroup.react"),separatorComponentType:b("SUISelectorSeparator.react"),shouldHideOnBlur:!0,shouldHideOnMouseLeave:!1,width:"auto"});c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$3=b("uniqueID")();d.showMenu=function(){d.$2&&d.$2.showMenu()};d.hideMenu=function(){d.$2&&d.$2.hideMenu()};d.$7=function(a,c){c===void 0&&(c="next");var e=d.$1.keys(),f=b("firstx")(e);e=b("lastx")(e);a>e?a=f:a<f&&(a=e);f=d.$1.get(a);f?b("SUIFocusUtil").setFocus(f.ref):c==="next"?d.$7(a+1):c==="prev"&&d.$7(a-1)};d.$10=function(a,b){var c=d.$5(),e;if(d.props.canSelectMultiple){c=c||[];var f=c.indexOf(a);f>-1?(e=c.slice(0),e.splice(f,1)):e=c.concat(a)}else e=a;d.props.onChange&&d.props.onChange(e,b);d.$4&&!d.props.canSelectMultiple&&d.hideMenu()};d.$11=function(a,b,c){d.$1.set(a,{ref:b,selected:c})};d.$12=function(a){d.$2=a};d.$13=function(){__p&&__p();if(!d.props.value){var a=b("first")(d.$1.values());a&&b("SUIFocusUtil").setFocus(a.ref)}else for(var a=d.$1,c=Array.isArray(a),e=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(c){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;f=f[1];var g=f.ref;f=f.selected;if(f){b("SUIFocusUtil").setFocus(g);break}}d.props.onOpen&&d.props.onOpen()};d.$1=new Map();return d}var d=c.prototype;d.componentDidMount=function(){this.$4=!0};d.componentWillUnmount=function(){this.$4=!1};d.focusInput=function(){this.$2&&this.$2.focusInput()};d.$5=function(){return this.props.value!==void 0?this.props.value:this.props.canSelectMultiple?[]:void 0};d.$6=function(a){__p&&__p();if(this.props.label)return this.props.label;if(!a.selectedItems.length)return this.props.placeholder!==void 0?this.props.placeholder:h._("No options selected");if(a.selectedItems.length===1){var c=a.selectedItems[0];c=c.props.children;return Array.isArray(c)?c.every(function(a){return typeof a==="string"})?c.join(""):b("React").jsx("span",{children:c}):c}else{return(c=this.props.multiSelectLabel)!=null?c:h._({"*":"{number} options selected","_1":"1 option selected"},[h._plural(a.selectedItems.length,"number")])}};d.$8=function(){__p&&__p();var a=this,c=this.props,d=i(this,!1,c.separatorComponentType,c.optionGroupComponentType),e=i(this,!0,c.separatorComponentType,c.optionGroupComponentType),f=this.$5(),g,h;if(c.canSelectMultiple){var j=b("ReactSelectorUtils").processMultiMenuItems(d,f);e=e.map(function(a){return a.type===c.optionGroupComponentType?b("React").cloneElement(a,{children:b("ReactSelectorUtils").processMultiMenuItems(i(a,!0,c.separatorComponentType,c.optionGroupComponentType),f,!0).items}):a});var k=b("ReactSelectorUtils").processMultiMenuItems(e,f,!0);g=k.items;h=j.selectedItems}else{k=f!==void 0?b("ReactSelectorUtils").processMenuItems(d,f,f===null):{items:d,selectedItems:[]};e=e.map(function(a){return a.type===c.optionGroupComponentType?b("React").cloneElement(a,{children:b("ReactSelectorUtils").processMenuItems(i(a,!0,c.separatorComponentType,c.optionGroupComponentType),f,!0).items}):a});j=f!==void 0?b("ReactSelectorUtils").processMenuItems(e,f,!0):{items:e,selectedItems:[]};g=j.items;h=k.selectedItem?[k.selectedItem]:[]}var l=0;g=g.map(function(c,d){__p&&__p();var e=l;d=b("React").cloneElement(c,{"data-testid":c.props["data-testid"]||"SUISelector/menuItem",onKeyDown:a.$9(d),onSelect:function(){var b;a.$10.apply(a,arguments);c.props.onSelect&&(b=c.props).onSelect.apply(b,arguments)},onSubItemSelect:function(b){b===void 0&&(b=0);return function(c){var d=e+b;a.$9(d)(c)}},role:a.props.canSelectMultiple?"menuitemcheckbox":"menuitemradio",setupFocusRef:function(b,d,f){d===void 0&&(d=0);f===void 0&&(f=!1);d=e+d;f=a.props.canCollapseGroups?!!c.props.selected:f;a.$11(d,b,f)},canSelectMultiple:a.props.canSelectMultiple,hasSelectedValue:!!h.length,isCollapsible:a.props.canCollapseGroups,theme:a.props.theme});!a.props.canCollapseGroups?l+=b("React").Children.count(d.props.children):l++;return d});var m=0;d=b("React").Children.map(this.props.children,function(c){if(c===null)return null;if(c.type===a.props.separatorComponentType)return b("React").cloneElement(c,{theme:a.props.theme});c=g[m];m+=1;return c});return{items:d,selectedItems:h}};d.$9=function(a){__p&&__p();var c=this;return function(d){__p&&__p();switch(d.keyCode){case b("RTLKeys").UP:d.preventDefault();c.$7(a-1,"prev");break;case b("RTLKeys").DOWN:d.preventDefault();c.$7(a+1,"next");break;case b("RTLKeys").ESC:d.preventDefault();c.hideMenu();break}}};d.render=function(){var a,c=b("SUITheme").get(this).SUISelector,d=this.$8();a=(a=c.menuBorderRadius)!=null?a:"2px";a={backgroundColor:c.backgroundColor,border:"solid 1px",borderColor:c.borderColor,borderRadius:a,boxShadow:c.boxShadow};return b("React").jsx(b("SUIAbstractMenu.react"),{button:this.props.button,buttonBorderedSides:this.props.buttonBorderedSides,buttonHeight:this.props.buttonHeight,buttonRoundedCorners:this.props.buttonRoundedCorners,buttonTextAlign:this.props.buttonTextAlign,className_DEPRECATED:this.props.className_DEPRECATED,contextualLayerBehaviors:this.props.contextualLayerBehaviors,"data-menu-testid":this.props["data-menu-testid"],"data-testid":this.props["data-testid"],disabled:this.props.disabled,display:"inline-block",dropdownWidth:this.props.dropdownWidth,errorMessage:this.props.errorMessage,errorTooltipPosition:this.props.errorTooltipPosition,id:this.props.id,label:this.$6(d),labelledBy:this.props.labelledBy,margin:this.props.margin,maxHeight:this.props.maxHeight,maxWidth:this.props.maxWidth,menu:b("React").jsx("ul",{className:"_7yu"+(this.props.dropdownTruncate?" _8yn-":""),"data-testid":"SUISelector/menu",id:this.$3,role:"menu",children:d.items}),menuAlignment:this.props.menuAlignment,menuContainerStyle:a,menuID:this.$3,menuPosition:this.props.menuPosition,name:this.props.name,onButtonClick:this.props.onSelectorButtonClick,onClose:this.props.onClose,onMouseEntersMenu:this.props.onMouseEntersMenu,onMouseLeavesMenu:this.props.onMouseLeavesMenu,onOpen:this.$13,ref:this.$12,shouldHideOnBlur:this.props.shouldHideOnBlur,shouldHideOnMouseLeave:this.props.shouldHideOnMouseLeave,shouldOpenAutomatically:this.props.shouldOpenAutomatically,style:this.props.style,suppressed:this.props.isSuppressed,theme:this.props.theme,tooltip:this.props.tooltip,warningMessage:this.props.warningMessage,width:this.props.width})};return c}(b("React").Component);c.propTypes=babelHelpers["extends"]({},b("SUIErrorComponentUtil").propTypes,{button:(d=b("prop-types")).element,buttonBorderedSides:d.arrayOf(d.oneOf(["top","right","bottom","left"])),buttonHeight:d.oneOf(["normal","tall","short"]),buttonRoundedCorners:d.arrayOf(d.oneOf(["topLeft","topRight","bottomRight","bottomLeft"])),buttonTextAlign:b("AlignmentEnum").propType.isRequired,canCollapseGroups:d.bool.isRequired,canSelectMultiple:d.bool.isRequired,contextualLayerBehaviors:d.object.isRequired,disabled:d.bool.isRequired,dropdownWidth:b("SUIPropTypes").dropdownWidth,isSuppressed:d.bool.isRequired,margin:d.string,maxHeight:d.number.isRequired,menuAlignment:b("SUIAbstractMenu.react").propTypes.menuAlignment,menuPosition:b("SUIAbstractMenu.react").propTypes.menuPosition,multiSelectLabel:d.node,onChange:d.func.isRequired,optionGroupComponentType:d.any.isRequired,placeholder:d.node,separatorComponentType:d.any.isRequired,shouldHideOnMouseLeave:d.bool.isRequired,style:d.object,theme:d.instanceOf(b("SUITheme")),value:d.any,width:b("SUIPropTypes").width});c.defaultProps=a;function i(a,c,d,e){a=a.props!=null&&typeof a.props==="object"?a.props:{};return b("flatMapArray")(b("React").Children.toArray(a.children),function(a){if(a.type===d)return[];else if(a.type===e)return c?[a]:[a].concat(i(a,c,d,e));else return[a]})}e.exports=b("withSUITheme")(c)}),null);
__d("getSUIDropdownSelectorUniform.fds",["cssVar"],(function(a,b,c,d,e,f,g){"use strict";function a(){return{backgroundColor:"#FFFFFF",borderColor:"#DADDE1",boxShadow:"0 0 4px 0 rgba(0, 0, 0, 0.2)"}}e.exports=a}),null);
__d("FDSDropdownSelector.react",["FDSDropdownButton.react","FDSDropdownSelectorOptionGroup.react","FDSPrivateThemeContext.react","React","SUIErrorComponentUtil","SUISelector.react","SUISelectorButton.react","getSUIButtonUniform.fds","getSUIDropdownButtonUniform.fds","getSUIDropdownSelectorUniform.fds","getSUIErrorUniform.fds","makeFDSStandardComponent","makeSUIThemeGetter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIThemeGetter")({SUISelector:b("getSUIDropdownSelectorUniform.fds"),SUIButton:b("getSUIButtonUniform.fds"),SUIError:b("getSUIErrorUniform.fds"),SUISelectorButton:b("getSUIDropdownButtonUniform.fds")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=g(this.context);return b("React").jsx(b("SUISelector.react"),{button:this.props.button?b("React").cloneElement(this.props.button,{icon:this.props.buttonIcon,isDisabled:this.props.isDisabled,size:this.props.buttonSize,use:this.props.buttonUse}):b("React").jsx(b("SUISelectorButton.react"),{borderedSides:this.props.buttonBorderedSides,disabled:this.props.isDisabled,height:h(this.props.buttonSize),icon:this.props.buttonIcon,roundedCorners:this.props.buttonRoundedCorners,textAlign:this.props.buttonTextAlign,use:this.props.buttonUse}),canCollapseGroups:this.props.canCollapseGroups,canSelectMultiple:!1,contextualLayerBehaviors:(this.props.children,this.props.contextualLayerBehaviors),"data-menu-testid":this.props["data-menu-testid"],"data-testid":this.props["data-testid"],disabled:this.props.isDisabled,dropdownTruncate:this.props.dropdownTruncate,dropdownWidth:this.props.dropdownWidth,errorMessage:this.props.errorMessage,errorTooltipPosition:this.props.errorTooltipPosition,id:this.props.id,isSuppressed:this.props.isSuppressed,label:this.props.label,labelledBy:this.props.labelledBy,margin:this.props.margin,maxHeight:this.props.maxHeight,maxWidth:this.props.maxWidth,menuAlignment:this.props.menuAlignment,menuPosition:this.props.menuPosition,name:this.props.name,onChange:this.props.onChange,onClose:this.props.onClose,onMouseEntersMenu:this.props.onMouseEntersMenu,onMouseLeavesMenu:this.props.onMouseLeavesMenu,onOpen:this.props.onOpen,onSelectorButtonClick:this.props.onSelectorButtonClick,optionGroupComponentType:b("FDSDropdownSelectorOptionGroup.react"),placeholder:this.props.placeholder,shouldHideOnBlur:this.props.shouldHideOnBlur,shouldHideOnMouseLeave:this.props.shouldHideOnMouseLeave,shouldOpenAutomatically:this.props.shouldOpenAutomatically,style:this.props.style,theme:a,tooltip:this.props.tooltip,value:this.props.value,warningMessage:this.props.warningMessage,width:this.props.width,children:this.props.children})};return c}(b("React").PureComponent);a.defaultProps=babelHelpers["extends"]({},b("SUIErrorComponentUtil").defaultProps,{buttonSize:"medium",buttonTextAlign:"left",buttonUse:"default",canCollapseGroups:!0,contextualLayerBehaviors:{},isDisabled:!1,dropdownWidth:"auto",isSuppressed:!1,maxHeight:250,menuAlignment:"left",menuPosition:"below",shouldHideOnMouseLeave:!1,shouldHideOnBlur:!0,width:"auto"});a.contextType=b("FDSPrivateThemeContext.react");function h(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}e.exports=b("makeFDSStandardComponent")("FDSDropdownSelector",a)}),null);
__d("getSUIDropdownSelectorOptionUniform.fds",["ix","cssVar","FDSPrivateTypeStyles","React","SUIGlyphIcon.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("FDSPrivateTypeStyles").createTypeStyleGetter;function a(a){a=i(a);return{activeBackgroundColor:"#DADDE1",activeColor:"#1C1E21",color:"#1C1E21",descriptionColor:"#606770",descriptionSelectedColor:"#606770",disabledBackgroundColor:"#F5F6F7",disabledColor:"#606770",highlightedBackgroundColor:"#F5F6F7",highlightedColor:"#1C1E21",iconMargin:{left:"0",right:"8px"},padding:{bottom:"6px",left:"32px",right:"24px",top:"6px"},paddingWhenNoValue:{bottom:"6px",left:"12px",right:"24px",top:"6px"},selectedBackgroundColor:"#ECF3FF",selectedColor:"#1C1E21",selectedIcon:b("React").jsx(b("SUIGlyphIcon.react"),{srcDefault:g("495838"),style:{position:"relative",top:-1}}),selectedIconMarginRight:"8px",selectedTypeStyle:a({color:"#1C1E21",fontSize:"12px",fontWeight:"bold"}),typeStyle:a({color:"#1C1E21",fontSize:"12px",fontWeight:"normal"})}}e.exports=a}),null);
__d("SUIDropdownSelectorOptionUniform.fds",["FDSPrivateThemeAtomsClassic","getSUIDropdownSelectorOptionUniform.fds"],(function(a,b,c,d,e,f){"use strict";e.exports=b("getSUIDropdownSelectorOptionUniform.fds")(b("FDSPrivateThemeAtomsClassic"))}),null);
__d("SUIHelpMessage.react",["cx","PositionEnum","React","SUIComponent","SUITheme","SUITooltip.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={position:"above"};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isShown:!1},c.$SUIHelpMessage1=function(a){c.setState({isShown:a},c.$SUIHelpMessage2)},c.$SUIHelpMessage2=function(){c.props.onToggle&&c.props.onToggle(c.state.isShown)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=b("SUITheme").get(this).SUIHelpMessage;a=b("React").cloneElement(a.icon,{hover:this.state.isShown});return b("React").jsx(b("SUITooltip.react"),{className:b("joinClasses")(this.props.className,this.props.margin,"_lx9"+(this.props.margin?"":" _3-99")),onToggle:this.$SUIHelpMessage1,position:this.props.position,style:this.props.style,theme:this.props.theme,tooltip:this.props.value,tooltipWidth:this.props.tooltipWidth,children:a})};return c}(b("SUIComponent"));c.propTypes={className:(d=b("prop-types")).string,margin:d.string,position:b("PositionEnum").propType,style:d.object,theme:d.instanceOf(b("SUITheme")),value:d.node.isRequired,tooltipWidth:d.oneOfType([d.oneOf(["auto"]),d.number])};c.defaultProps=a;e.exports=c}),null);
__d("SUISelectorOption.react",["cx","KeyStatus","Locale","React","RTLKeys","SUIComponent","SUIHelpMessage.react","SUITheme","VirtualCursorStatus","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("KeyStatus").isKeyDown,i=b("Locale").isRTL,j=b("VirtualCursorStatus").isVirtualCursorTriggered;a={canSelectMultiple:!1,disabled:!1,hasSelectedValue:!1,role:"menuitem",selected:!1,tooltipPosition:"above"};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c;c=a.call(this)||this;c.$SUISelectorOption2=function(a){c.$SUISelectorOption1(a)};c.$SUISelectorOption3=function(){c.setState({isActive:!1,showFocusRing:!1})};c.$SUISelectorOption4=function(){(h()||j())&&c.setState({showFocusRing:!0})};c.$SUISelectorOption5=function(a){c.props.onKeyDown&&c.props.onKeyDown(a);switch(a.keyCode){case b("RTLKeys").RETURN:case b("RTLKeys").SPACE:c.$SUISelectorOption1(a);break}};c.$SUISelectorOption6=function(){if(c.props.disabled)return;c.setState({isActive:!0})};c.$SUISelectorOption7=function(a){if(c.props.disabled)return;c.props.onMouseEnter&&c.props.onMouseEnter(a);c.setState({isHovering:!0})};c.$SUISelectorOption8=function(a){if(c.props.disabled)return;c.props.onMouseLeave&&c.props.onMouseLeave(a);c.setState({isHovering:!1})};c.state={isActive:!1,isHovering:!1,showFocusRing:!1};return c}var d=c.prototype;d.$SUISelectorOption1=function(a){a.preventDefault(),!this.props.disabled&&this.props.onSelect&&this.props.onSelect(this.props.value,a)};d.render=function(){__p&&__p();var a=b("SUITheme").get(this).SUISelectorOption,c=babelHelpers["extends"]({},a,this.props.uniformOverride),d=(this.props.hasSelectedValue||this.props.canSelectMultiple)&&!(this.props.selected&&c.selectedIcon)?c.padding:c.paddingWhenNoValue,e=this.props.selected?a.selectedTypeStyle:a.typeStyle,f={backgroundColor:this.props.disabled&&c.disabledBackgroundColor||this.props.selected&&c.selectedBackgroundColor||this.state.isActive&&c.activeBackgroundColor||(this.state.isHovering||this.state.showFocusRing)&&c.highlightedBackgroundColor};e=babelHelpers["extends"]({},e,{color:this.props.disabled&&c.disabledColor||this.props.selected&&c.selectedColor||this.state.isActive&&c.activeColor||(this.state.isHovering||this.state.showFocusRing)&&c.highlightedColor||c.color,paddingBottom:d.bottom,paddingLeft:i()?d.right:d.left,paddingRight:i()?d.left:d.right,paddingTop:d.top});d=babelHelpers["extends"]({},a.typeStyle,{color:this.props.selected&&c.descriptionSelectedColor||c.descriptionColor});a=this.props.icon;if(a){var g=c.iconMargin;g=g===void 0?{left:"0",right:"2px"}:g;a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"_2kn3"),style:{marginLeft:i()?g.right:g.left,marginRight:i()?g.left:g.right}})}var h;Boolean(this.props.tooltip)&&(h=b("React").jsx(b("SUIHelpMessage.react"),{className:"_2kn7",position:this.props.tooltipPosition,value:this.props.tooltip}));return b("React").jsx("li",{className:b("joinClasses")(this.props.disabled?"_2kn8":"",this.props.className_DEPRECATED),"data-testid":this.props["data-testid"],onMouseEnter:this.$SUISelectorOption7,onMouseLeave:this.$SUISelectorOption8,style:f,children:b("React").jsxs("div",{"aria-checked":this.props.selected,"aria-disabled":this.props.disabled,className:"_2wpb"+(this.state.showFocusRing?"":" _3v8w"),"data-testid":"SUISelectorOption/container",onBlur:this.$SUISelectorOption3,onClick:this.$SUISelectorOption2,onFocus:this.$SUISelectorOption4,onKeyDown:this.$SUISelectorOption5,onMouseDown:this.$SUISelectorOption6,ref:this.props.setupFocusRef,role:this.props.role,style:e,tabIndex:-1,children:[this.props.selected&&Boolean(c.selectedIcon)?b("React").cloneElement(c.selectedIcon,{"aria-hidden":this.props.selected,hover:this.state.isHovering,style:babelHelpers["extends"]({},c.selectedIcon.props.style,{marginLeft:(i()?c.selectedIconMarginRight:c.selectedIconMarginLeft)||0,marginRight:(i()?c.selectedIconMarginLeft:c.selectedIconMarginRight)||0,flexShrink:0})}):null,a,b("React").jsxs("div",{className:"_3leq",children:[this.props.children,Boolean(this.props.description)?b("React").jsx("div",{className:"_2kna",style:d,children:this.props.description}):null]}),h]})})};return c}(b("SUIComponent"));c.propTypes={value:function(a){return a.value===void 0?new Error('Required property "value" was not specified in SUISelectorOption.'):null},canSelectMultiple:(d=b("prop-types")).bool,disabled:d.bool.isRequired,icon:d.element,onKeyDown:d.func,onMouseEnter:d.func,onMouseLeave:d.func,role:d.string.isRequired,selected:d.bool,theme:d.instanceOf(b("SUITheme")),tooltip:d.node,uniformOverride:d.object};c.defaultProps=a;e.exports=c}),null);
__d("FDSDropdownSelectorOption.react",["React","SUIDropdownSelectorOptionUniform.fds","SUIHelpMessageUniform.business","SUISelectorOption.react","SUITooltipUniform.business","makeFDSStandardComponent","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorOption",{SUISelectorOption:b("SUIDropdownSelectorOptionUniform.fds"),SUIHelpMessage:b("SUIHelpMessageUniform.business"),SUITooltip:b("SUITooltipUniform.business")});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("SUISelectorOption.react"),{canSelectMultiple:this.props.canSelectMultiple,"data-testid":this.props["data-testid"],description:this.props.description,disabled:this.props.isDisabled,hasSelectedValue:this.props.hasSelectedValue,icon:this.props.icon,onKeyDown:this.props.onKeyDown,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave,onSelect:this.props.onSelect,role:this.props.role,selected:this.props.selected,setupFocusRef:this.props.setupFocusRef,theme:g,tooltip:this.props.tooltip,tooltipPosition:this.props.tooltipPosition,value:this.props.value,children:this.props.children})};return c}(b("React").PureComponent);a.defaultProps={canSelectMultiple:!1,isDisabled:!1,hasSelectedValue:!1,role:"menuitem",selected:!1,tooltipPosition:"above"};e.exports=b("makeFDSStandardComponent")("FDSDropdownSelectorOption",a)}),null);
__d("ZenonPhoneIcon.react",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").jsx("svg",{className:a.className,viewBox:"0 0 48 48",children:b("React").jsx("path",{d:"M32.3 33.3c-4.2 3.5-12.6-4.7-12.8-4.9C19.4 28.3 10.9 20 14.5 15.9C17.2 12.8 17.9 14 18.3 14.3c.3 .3 2.9 4 3 4.7C21.5 19.7 20 21.5 20 22.1c.1 .6 1.8 2.5 2.6 3.3c.7 .7 2.7 2.4 3.3 2.5c.6 .1 2.4-1.4 3.1-1.3c.8 .1 4.5 2.7 4.8 3C34.2 29.9 35.4 30.7 32.3 33.3"})})}e.exports=a}),null);
__d("ZenonM3RedialFooterButton.react",["fbt","React","ZenonFooterLabeledButton.react","ZenonLoggingHooks","ZenonPhoneIcon.react","ZenonThemeContext","stylex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("React").useContext,j=b("ZenonLoggingHooks").useClickLogging,k=b("ZenonLoggingHooks").useImpressionLogging;function a(a){var c=a.disabled,d=a.label;a=a.onClick;k("redial");a=j(a,"redial");d=(d=d)!=null?d:g._("Redial");var e=i(b("ZenonThemeContext"));return b("React").jsx(b("ZenonFooterLabeledButton.react"),{"data-testid":"rediallButton",themeClassNames:(h||(h=b("stylex"))).dedupe({"height-1":"lptv2sst","width-1":"mirs599h","margin-top-1":"eojxk3nf","margin-end-1":"p42dirnl","margin-bottom-1":"hpjrawbn","margin-start-1":"m088clv2"},e==="light"?{"background-color-1":"b55zogmu","border-top-color-0.4":"h9bf5znu","border-end-color-0.4":"k6nmzn78","border-bottom-color-0.4":"pzngizxp","border-start-color-0.4":"hi6abz6u","color-1":"n2lt2jnd","background-color-10":"lqx1c39f","border-top-color-9.4":"btp3y9py","border-end-color-9.4":"c873y8w0","border-bottom-color-9.4":"cdlalhei","border-start-color-9.4":"iu9o5v6e","color-10":"a2or3y03"}:null,e==="dark"?{"background-color-1":"ktez4zds","border-top-color-0.4":"ek9wyhim","border-end-color-0.4":"gnr7189n","border-bottom-color-0.4":"k0wp8trf","border-start-color-0.4":"nxe5nuwb","color-1":"j985830a","background-color-10":"fnj91817","color-10":"l90dqtvq"}:null),disabled:c,label:d,labelColor:h.dedupe(e==="light"?{"color-1":"c89si7am"}:{},e==="dark"?{"color-1":"dyco0h0g"}:null),onClick:a,children:b("React").jsx(b("ZenonPhoneIcon.react"),{className:"hz965sd9 nkafkkgu ehi1kzmu qukc8cf6 i0i9u5yc pr0mtg1e svuzmm7t g0javuny"})})}e.exports=a}),null);
__d("RtcExpressionWWWTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:RtcExpressionWWWLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:RtcExpressionWWWLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:RtcExpressionWWWLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAuthFlag=function(a){this.$1.auth_flag=a;return this};c.setBundleID=function(a){this.$1.bundle_id=a;return this};c.setCallID=function(a){this.$1.call_id=a;return this};c.setConferenceName=function(a){this.$1.conference_name=a;return this};c.setOsBuildNumber=function(a){this.$1.os_build_number=a;return this};c.setPeerID=function(a){this.$1.peer_id=a;return this};c.setRadioType=function(a){this.$1.radio_type=a;return this};c.setRawClientTime=function(a){this.$1.raw_client_time=a;return this};c.setRtcExpressionAction=function(a){this.$1.rtc_expression_action=a;return this};c.setRtcExpressionDuration=function(a){this.$1.rtc_expression_duration=a;return this};c.setRtcExpressionID=function(a){this.$1.rtc_expression_id=a;return this};c.setRtcExpressionIntent=function(a){this.$1.rtc_expression_intent=a;return this};c.setRtcExpressionName=function(a){this.$1.rtc_expression_name=a;return this};c.setRtcExpressionParticipantCount=function(a){this.$1.rtc_expression_participant_count=a;return this};c.setRtcExpressionType=function(a){this.$1.rtc_expression_type=a;return this};c.setSamplingFrequency=function(a){this.$1.sampling_frequency=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={auth_flag:!0,bundle_id:!0,call_id:!0,conference_name:!0,os_build_number:!0,peer_id:!0,radio_type:!0,raw_client_time:!0,rtc_expression_action:!0,rtc_expression_duration:!0,rtc_expression_id:!0,rtc_expression_intent:!0,rtc_expression_name:!0,rtc_expression_participant_count:!0,rtc_expression_type:!0,sampling_frequency:!0,time:!0,weight:!0};e.exports=a}),null);
__d("MessengerBannerOverlay.react",["cx","React","ReactCSSTransitionGroup"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=6e3,i={enter:"_3fa9",enterActive:"_3faa",leave:"_3fab",leaveActive:"_3fad"};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={hide:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidUpdate=function(a){var b=this;a.children!=this.props.children&&this.setState({hide:!1});this.props.useTimeout&&!this.state.hide&&setTimeout(function(){b.setState({hide:!0})},h)};d.$1=function(){return!this.state.hide&&this.props.display&&this.props.children?b("React").jsx("div",{className:"_qxg",children:b("React").jsx("h2",{className:"_qxh",children:this.props.children})}):null};d.render=function(){return b("React").jsx(b("ReactCSSTransitionGroup"),{component:"div",transitionName:i,transitionEnterTimeout:600,transitionLeaveTimeout:600,children:this.$1()})};return c}(b("React").Component);a.BANNER_TIMEOUT=h;e.exports=a}),null);
__d("unmountComponentOnTransition",["Arbiter","BanzaiODS","PageEvents","ReactDOM","emptyFunction","requestIdleCallbackAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=null;function i(a){g.unshift(a),j()}function j(){if(h!==null)return;h=b("requestIdleCallbackAcrossTransitions")(function(a){h=null;while(g.length>0&&a.timeRemaining()>0)b("ReactDOM").unmountComponentAtNode(g.pop());g.length>0&&j()})}function k(a,c){b("BanzaiODS").bumpEntityKey(2966,"core.www.react_component_register_unmount",a+"."+c)}function a(a,c){__p&&__p();function d(){a!=null&&Object.prototype.hasOwnProperty.call(a,"setState")&&(a.setState=b("emptyFunction"),a.shouldComponentUpdate=b("emptyFunction").thatReturnsFalse),i(c)}var e=!1;e?k("contextual_component","not_found_fallback"):k("arbiter","default");var f=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(a,b){a=b.canvasID;if(a!=="content"&&a!=="content_container")return;d();f.unsubscribe()})}e.exports=a}),null);
__d("unmountConcurrentComponentOnTransition",["Arbiter","PageEvents"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(b,e){b=e.canvasID;if(b!=="content"&&b!=="content_container")return;a.unmount(c);d.unsubscribe()})}e.exports=a}),null);
__d("RTWebFluxDebugger",["FluxDebugUtils","WebStorage"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=(g||b("WebStorage")).getLocalStorage(),i=!!(h&&h.getItem("__fluxDebug")==="1"),j=new Map(),k;function a(a,b){Object.keys(b).forEach(function(a){j.set(a,b[a])}),k&&s(),k={dispatcher:a,originalDispatch:a.dispatch,patchedDispatch:null},i&&r()}function l(a){return a&&typeof a.toJS==="function"?a.toJS():a}function c(){__p&&__p();var a={};for(var b=j.entries(),c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];a[f]=l(e.getState())}return a}function m(a,b,c){__p&&__p();var d=Date.now(),e=Array.from(j.entries()).map(function(a){var b=a[0];a=a[1];return{name:b,stateBefore:a.getState(),stateAfter:null}});b.call(a,c);if(!i)return;b=Date.now()-d;e=e.map(function(a,b){b=j.get(a.name);return b!=null?babelHelpers["extends"]({},a,{stateAfter:b.getState()}):null}).filter(Boolean);a=c.type;d=babelHelpers.objectWithoutPropertiesLoose(c,["type"]);console.groupCollapsed("Flux:",a);try{n(e)}finally{console.groupEnd()}}function n(a){a.filter(function(a){return a.stateBefore!==a.stateAfter}).forEach(function(a){p(a.name,function(){var c=l(a.stateBefore),d=l(a.stateAfter);c&&d&&b("FluxDebugUtils").diff(c,d).forEach(o)})})}function o(a){var b=a.path.join(".");switch(a.op){case"add":break;case"update":break;case"delete":break}}function p(a,b){q(a,function(){console.group(a),b()})}function q(a,b){try{b()}finally{console.groupEnd()}}function r(){if(!k)return;k.patchedDispatch&&s();k.patchedDispatch=k.dispatcher.dispatch=m.bind(null,k.dispatcher,k.dispatcher.dispatch)}function s(){if(!k||!k.patchedDispatch)return;k.dispatcher.dispatch=k.originalDispatch;k.patchedDispatch=null}window.__fluxDebugOn=function(){i=!0,h&&h.setItem("__fluxDebug","1"),r()};window.__fluxDebugOff=function(){i=!1,h&&h.setItem("__fluxDebug","0"),s()};window.__fluxDump=function(){__p&&__p();var a=function(){__p&&__p();if(c){if(d>=b.length)return"break";e=b[d++]}else{d=b.next();if(d.done)return"break";e=d.value}var a=e,f=a[0];a=a[1];p(f,function(){return!1})};for(var b=j,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e,f=a();if(f==="break")break}};window.__fluxDumpState=c;e.exports={attach:a,fluxDumpState:c}}),null);
/**
 * Released under the MIT license. Copyright (c) 2013 Eirik Albrigtsen.
 *
 * @nolint
 * @preserve-header
 * @preserve-whitespace
 */
__d("sdp-transform-grammar",[],(function $module_sdp_transform_grammar(global,require,requireDynamic,requireLazy,module,exports){

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{ //c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{ //b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          'rtpmap:%d %s/%s/%s':
          o.rate ?
          'rtpmap:%d %s/%s':
          'rtpmap:%d %s';
      }
    },
    { //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    { //a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          'rtcp:%d %s IP%d %s':
          'rtcp:%d';
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%d trr-int %d'
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          'rtcp-fb:%s %s %s':
          'rtcp-fb:%s %s';
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'uri', 'config'],
      format: function (o) {
        return 'extmap:%d' + (o.direction ? '/%s' : '%v') + ' %s' + (o.config ? ' %s' : '');
      }
    },
    { //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          'crypto:%d %s %s %s':
          'crypto:%d %s %s';
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: 'msid:%s'
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: 'ptime:%d'
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: 'maxptime:%d'
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    { //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
      format: function (o) {
        var str = 'candidate:%s %d %s %d %s %d typ %s';

        str += (o.raddr != null) ? ' raddr %s rport %d' : '%v%v';

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? ' tcptype %s' : '%v';

        if (o.generation != null) {
          str += ' generation %d';
        }

        str += (o['network-id'] != null) ? ' network-id %d' : '%v';
        str += (o['network-cost'] != null) ? ' network-cost %d' : '%v';
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: 'ssrcs',
      reg: /^ssrc:(\d*) ([\w_]*)(?::(.*))?/,
      names: ['id', 'attribute', 'value'],
      format: function (o) {
        var str = 'ssrc:%d';
        if (o.attribute != null) {
          str += ' %s';
          if (o.value != null) {
            str += ':%s';
          }
        }
        return str;
      }
    },
    { //a=ssrc-group:FEC 1 2
      //a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { //a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null) ?
          'sctpmap:%s %s %s' :
          'sctpmap:%s %s';
      }
    },
    { //a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    { //a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    { //a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      //a=imageattr:* send [x=800,y=640] recv *
      //a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        //a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        //send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        //recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      //a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        //a=simulcast:
        '^simulcast:' +
        //send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        //space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        //end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //Old simulcast draft 03 (implemented by Firefox)
      //  https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      //a=simulcast: recv pt=97;98 send pt=97
      //a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      //a=framerate:25
      //a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ['value']
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = '%s';
    }
  });
});

/*  */}),null);
/**
 * Released under the MIT license. Copyright (c) 2013 Eirik Albrigtsen.
 *
 * @nolint
 * @preserve-header
 * @preserve-whitespace
 */
__d("sdp-transform-parser",["sdp-transform-grammar"],(function $module_sdp_transform_parser(global,require,requireDynamic,requireLazy,module,exports){

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = require('sdp-transform-grammar');
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  }
  return acc;
};

exports.parseParams = function (str) {
  return str.split(/\;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length-1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid, paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};

/*  */}),null);
/**
 * Released under the MIT license. Copyright (c) 2013 Eirik Albrigtsen.
 *
 * @nolint
 * @preserve-header
 * @preserve-whitespace
 */
__d("sdp-transform-writer",["sdp-transform-grammar"],(function $module_sdp_transform_writer(global,require,requireDynamic,requireLazy,module,exports){

var grammar = require('sdp-transform-grammar');

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
    case '%%':
      return '%';
    case '%s':
      return String(arg);
    case '%d':
      return Number(arg);
    case '%v':
      return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};

/*  */}),null);
/**
 * Released under the MIT license. Copyright (c) 2013 Eirik Albrigtsen.
 *
 * @nolint
 * @preserve-header
 * @preserve-whitespace
 */
__d("sdp-transform",["sdp-transform-parser","sdp-transform-writer"],(function $module_sdp_transform(global,require,requireDynamic,requireLazy,module,exports){

var parser = require('sdp-transform-parser');
var writer = require('sdp-transform-writer');

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parseParams = parser.parseParams;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;

/*  */}),null);
/**
 * Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @nolint
 * @preserve-header
 * @preserve-whitespace
 */
__d("sdp-interop-transform",["sdp-transform"],(function $module_sdp_interop_transform(global,require,requireDynamic,requireLazy,module,exports){

const transform = require('sdp-transform');

exports.write = function(session, opts) {

  if (typeof session !== 'undefined' &&
      typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // expand sources to ssrcs
      if (typeof mLine.sources !== 'undefined' &&
        Object.keys(mLine.sources).length !== 0) {
          mLine.ssrcs = [];
          Object.keys(mLine.sources).forEach(function (ssrc) {
            const source = mLine.sources[ssrc];
            Object.keys(source).forEach(function (attribute) {
              mLine.ssrcs.push({
                id: ssrc,
                attribute: attribute,
                value: source[attribute]
              });
            });
          });
          delete mLine.sources;
        }

      // join ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                Array.isArray(ssrcGroup.ssrcs)) {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.join(' ');
            }
          });
        }
    });
  }

  // join group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids !== 'undefined' && Array.isArray(g.mids)) {
        g.mids = g.mids.join(' ');
      }
    });
  }

  return transform.write(session, opts);
};

exports.parse = function(sdp) {
  const session = transform.parse(sdp);

  if (typeof session !== 'undefined' && typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // group sources attributes by ssrc
      if (typeof mLine.ssrcs !== 'undefined' && Array.isArray(mLine.ssrcs)) {
        mLine.sources = {};
        mLine.ssrcs.forEach(function (ssrc) {
          if (!mLine.sources[ssrc.id])
          mLine.sources[ssrc.id] = {};
        mLine.sources[ssrc.id][ssrc.attribute] = ssrc.value;
        });

        delete mLine.ssrcs;
      }

      // split ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs === 'string') {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.split(' ');
            }
          });
        }
    });
  }
  // split group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids === 'string') {
        g.mids = g.mids.split(' ');
      }
    });
  }

  return session;
};

/*  */}),null);
__d("RTCCallActionTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CALL:"CALL",CALL_SUCCESS:"CALL_SUCCESS",CALL_ERROR:"CALL_ERROR",INCOMING_CALL_SUCCESS:"INCOMING_CALL_SUCCESS",INIT:"INIT",RESET:"RESET",RESET_FOR_REDIAL:"RESET_FOR_REDIAL",CALL_COLLISION:"CALL_COLLISION",WAIT_FOR_USER_INPUT:"WAIT_FOR_USER_INPUT",SET_CALL_SUMMARY:"SET_CALL_SUMMARY",SET_MW_CALL_TYPE:"SET_MW_CALL_TYPE",SET_LAYOUT:"SET_LAYOUT",SET_LINKHASH:"SET_LINKHASH",SET_DOMINANT_SPEAKER:"SET_DOMINANT_SPEAKER",SET_PINNED_SPEAKER:"SET_PINNED_SPEAKER",SET_USE_DOMINANT_SPEAKE_VIEW:"SET_USE_DOMINANT_SPEAKE_VIEW",SET_GRID_VIEW:"SET_GRID_VIEW",SET_STRIP_VIEW:"SET_STRIP_VIEW",INIT_THREAD:"INIT_THREAD",ON_PARTICIPANT_LEFT:"ON_PARTICIPANT_LEFT",ON_PARTICIPANTS_ADDED:"ON_PARTICIPANTS_ADDED",ADD_PARTICIPANTS_TO_RING:"ADD_PARTICIPANTS_TO_RING",JOIN:"JOIN",JOIN_SUCCESS:"JOIN_SUCCESS",JOIN_ERROR:"JOIN_ERROR",HANGUP:"HANGUP",HANGUP_SUCCESS:"HANGUP_SUCCESS",HANGUP_ERROR:"HANGUP_ERROR",ON_CONFERENCE_STATE:"ON_CONFERENCE_STATE",DISMISS:"DISMISS",END_CALL:"END_CALL",ON_JOIN_REQUEST_SENT:"ON_JOIN_REQUEST_SENT",ON_JOIN_RESPONSE:"ON_JOIN_RESPONSE",ON_RECEIVED_JOIN_RESPONSE:"ON_RECEIVED_JOIN_RESPONSE",ON_PROCESSED_JOIN_RESPONSE:"ON_PROCESSED_JOIN_RESPONSE",ON_SERVER_MEDIA_UPDATE_SUCCESS:"ON_SERVER_MEDIA_UPDATE_SUCCESS",ON_CLIENT_MEDIA_UPDATE_RESPONSE:"ON_CLIENT_MEDIA_UPDATE_RESPONSE",SET_LOCAL_CLIENT_VERSION:"SET_LOCAL_CLIENT_VERSION",INIT_LOCAL_USER:"INIT_LOCAL_USER",INIT_REMOTE_USERS:"INIT_REMOTE_USERS",UPDATE_REMOTE_USERS:"UPDATE_REMOTE_USERS",ADD_REMOTE_STREAM:"ADD_REMOTE_STREAM",REMOVE_REMOTE_STREAM:"REMOVE_REMOTE_STREAM",REMOVE_ALL_REMOTE_STREAMS:"REMOVE_ALL_REMOTE_STREAMS",ADD_REMOTE_TRACK:"ADD_REMOTE_TRACK",REMOVE_REMOTE_TRACK:"REMOVE_REMOTE_TRACK",AUDIO_MUTED:"AUDIO_MUTED",AUDIO_UNMUTED:"AUDIO_UNMUTED",VIDEO_MUTED:"VIDEO_MUTED",VIDEO_UNMUTED:"VIDEO_UNMUTED",REMOTE_AUDIO_MUTED:"REMOTE_AUDIO_MUTED",REMOTE_AUDIO_UNMUTED:"REMOTE_AUDIO_UNMUTED",REMOTE_VIDEO_MUTED:"REMOTE_VIDEO_MUTED",REMOTE_VIDEO_UNMUTED:"REMOTE_VIDEO_UNMUTED",SELF_VIEW_COLLAPSED:"SELF_VIEW_COLLAPSED",SELF_VIEW_UNCOLLAPSED:"SELF_VIEW_UNCOLLAPSED",ADD_LOCAL_STREAM:"ADD_LOCAL_STREAM",REMOVE_LOCAL_STREAM:"REMOVE_LOCAL_STREAM",REPLACE_LOCAL_STREAM:"REPLACE_LOCAL_STREAM",REMOVE_ALL_LOCAL_STREAMS:"REMOVE_ALL_LOCAL_STREAMS",STOP_LOCAL_STREAM:"STOP_LOCAL_STREAM",ADD_LOCAL_SCREEN_STREAM:"ADD_LOCAL_SCREEN_STREAM",REMOVE_LOCAL_SCREEN_STREAM:"REMOVE_LOCAL_SCREEN_STREAM",REMOVE_ALL_LOCAL_SCREEN_STREAMS:"REMOVE_ALL_LOCAL_SCREEN_STREAMS",REPLACE_LOCAL_SCREEN_STREAM:"REPLACE_LOCAL_SCREEN_STREAM",ADD_REMOTE_SCREEN_STREAM:"ADD_REMOTE_SCREEN_STREAM",REMOVE_REMOTE_SCREEN_STREAM:"REMOVE_REMOTE_SCREEN_STREAM",TOGGLE_REMOTE_STREAM:"TOGGLE_REMOTE_STREAM",SUBMIT_RATING:"SUBMIT_RATING",SUBMIT_FEEDBACK:"SUBMIT_FEEDBACK",SUBMIT_FEEDBACK_OPTIONS:"SUBMIT_FEEDBACK_OPTIONS",SUBMIT_SURVEY_CHOICE:"SUBMIT_SURVEY_CHOICE",RATING_SHOWN:"RATING_SHOWN",FEEDBACK_SHOWN:"FEEDBACK_SHOWN",SET_CONFERENCE_STATE:"SET_CONFERENCE_STATE",SET_END_CALL_REASON:"SET_END_CALL_REASON",FLOOR_STATUS:"FLOOR_STATUS"})}),null);
__d("RTCCoExperienceActionTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TOGGLE_CHAT_WINDOW:"TOGGLE_CHAT_WINDOW",SET_FILTER:"SET_FILTER"})}),null);
__d("ReactXHPContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("ReactRenderer",["invariant","CometOnBlueHeroTracingBootstrap","React","ReactDOM","ReactXHPContext","$","gkx","nullthrows","unmountComponentOnTransition","unmountConcurrentComponentOnTransition"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=8;function i(a,c,d){a=b("ReactDOM").render(a,c,d);b("unmountComponentOnTransition")(a,c);return a}function j(a,c,d){c=b("ReactDOM").createRoot(c);a=c.render(a,d);b("unmountConcurrentComponentOnTransition")(c);return a}function k(a,c,d){c=b("ReactDOM").createRoot(c);return c.render(a,d)}function l(a,c,d,e){a=b("React").createElement(a,c);return i(a,d,e)}function m(a,c,d,e){a=b("React").createElement(a,c);return n(a,d,e)}function n(a,c,d){return b("ReactDOM").render(a,c,d)}function a(a,c,d,e){return l(a,c,b("$")(d),e)}function c(a,c,d,e){return m(a,c,b("$")(d),e)}function o(a,c,d,e,f,g,h,l){__p&&__p();h=f?f.getContextProvider():null;var m=null;b("gkx")("1223330")&&(m=b("CometOnBlueHeroTracingBootstrap").startInteraction());m=b("React").jsx(b("ReactXHPContext").Provider,{value:{interactionID:m,bigPipeContext:g},children:a});h&&(m=b("React").jsx(h,{value:f,children:a}));g=l===!0?d?k:j:d?n:i;if(e){h=b("nullthrows")(c.parentNode,"Error: container doesn't have a parent");return g(m,h)}f=document.createComment(" react-mount-point-unstable ");p(c,f);return g(m,f)}function d(a){var c=a.concurrent_UNSTABLE,d=a.constructor,e=a.props,f=a.dummyElem,g=a.acrossTransitions,h=a.clobberSiblings,i=a.preloader,j=a.bigPipeContext;a=a.lid;return o(b("React").createElement(d,e),f,g,h,i,j,a,c)}function p(a,c){a.tagName==="NOSCRIPT"||g(0,3540);var d=b("nullthrows")(a.parentNode,"Error: container doesn't have a parent"),e=a.previousSibling;if(e&&e.nodeType===h&&e.nodeValue===" end-react-placeholder "){do d.removeChild(e),e=b("nullthrows")(a.previousSibling,"Error: malformed placeholder");while(!(e.nodeType===h&&e.nodeValue===" begin-react-placeholder "));d.removeChild(e)}d.replaceChild(c,a)}e.exports={renderComponent:i,constructAndRenderComponent:l,constructAndRenderComponentByID:a,constructAndRenderComponentAcrossTransitions:m,constructAndRenderComponentByIDAcrossTransitions:c,constructAndRenderComponentIntoComment_DO_NOT_USE:d,constructAndRenderElementIntoComment_DO_NOT_USE:o,constructAndRenderComponent_DEPRECATED:m,constructAndRenderComponentByID_DEPRECATED:c}}),null);
__d("XFacebookMessengerInboxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messages/t/{?thread_key}/",{thread_key:{type:"String"},mid:{type:"String"},ref:{type:"String"},ds:{type:"Int"},sender:{type:"Bool",defaultValue:!1},hide_header:{type:"Bool",defaultValue:!1},last_message_timestamp:{type:"Int"},first_message_timestamp:{type:"Int"}})}),null);