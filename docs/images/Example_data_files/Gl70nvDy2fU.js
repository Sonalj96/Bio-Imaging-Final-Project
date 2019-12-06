if (self.CavalryLogger) { CavalryLogger.start_js(["h4taK"]); }

__d("VideoBroadcastStatus",[],(function(a,b,c,d,e,f){e.exports={PREVIEW:"PREVIEW",LIVE:"LIVE",LIVE_STOPPED:"LIVE_STOPPED",VOD_READY:"VOD_READY",SEAL_STARTED:"SEAL_STARTED",SCHEDULED_PREVIEW:"SCHEDULED_PREVIEW",SCHEDULED_LIVE:"SCHEDULED_LIVE",SCHEDULED_EXPIRED:"SCHEDULED_EXPIRED",SCHEDULED_CANCELED:"SCHEDULED_CANCELED",PRE_LIVE:"PRE_LIVE",SEAL_FAILED:"SEAL_FAILED"}}),null);
__d("AjaxError",[],(function(a,b,c,d,e,f){a={ERROR:"ar:error",TIMEOUT:"ar:timeout",PROXY_ERROR:"ar:proxy error",TRANSPORT_ERROR:"ar:transport error",SERVER_ERROR:"ar:http error",PARSE_ERROR:"ar:parse error",SERVICE_UNAVAILABLE:"ar:noservice"};e.exports=a}),null);
__d("AjaxRequest",["AjaxError","ErrorUtils","Keys","PHPQuerySerializer","TimeSlice","URI","UserAgent_DEPRECATED","ZeroRewrites","clearTimeout","killswitch","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j=window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest(),k=[];function a(){var a=k;k=[];a.forEach(function(a){return a.abort()})}function l(a){a.onJSON=a.onError=a.onSuccess=null,b("clearTimeout")(a._timer),a.xhr&&a.xhr.readyState<4&&(a.xhr.abort(),a.xhr=null),k=k.filter(function(b){return b&&b!=a&&b.xhr&&b.xhr.readyState<4})}c=function(){"use strict";__p&&__p();function a(a,c,d){this.timeout=6e4,this.streamMode=!0,this.prelude=/^for \(;;\);/,this.status=null,this.$1=-1,this.$2=null,this.$3=0,this.$4=null,this.json=null,this.errorType=null,this.errorText=null,this.onJSON=null,this.onSuccess=null,this.onError=null,c instanceof(g||(g=b("URI")))||(c=new(g||(g=b("URI")))(c)),this.xhr=b("ZeroRewrites").getTransportBuilderForURI(c)(),d&&a=="GET"&&c.setQueryData(d),this.method=a,this.uri=c,this.xhr.open(a,b("killswitch")("ASYNC_REQUEST_STRINGIFY_URI_BEFORE_PASSING_TO_OPEN_METHOD")?c:c.toString())}a.supportsCORS=function(){return j};var c=a.prototype;c.send=function(a){__p&&__p();var c=this,d=b("TimeSlice").getReusableContinuation("AjaxRequest xhr.onreadystatechange");this.xhr.onreadystatechange=function(){return c.$5(d)};var e=this.timeout;e&&(this.$2=b("setTimeoutAcrossTransitions")(function(){c.errorType=b("AjaxError").TIMEOUT,c.errorText="timeout",c.$4=Date.now()-c.$3,c.onError&&c.onError(c),l(c)},e));k.push(this);this.method=="POST"&&this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");this.$3=Date.now();this.xhr.send(a?(h||(h=b("PHPQuerySerializer"))).serialize(a):"")};c.abort=function(){l(this)};c.toString=function(){var a="[AjaxRequest readyState="+this.xhr.readyState;this.errorType&&(a+=" errorType="+this.errorType,this.errorText&&(a+=" ("+this.errorText+")"));return a+"]"};c.toJSON=function(){var a={};this.json&&(a.json=this.json);this.status&&(a.status=this.status);this.errorType&&(a.errorType=this.errorType,a.uri=this.uri);this.errorText&&(a.errorText=this.errorText);this.$4&&(a.time=this.$4);return a};c.onJSONSafe=function(){this.onJSON&&this.onJSON(this)};c.onSuccessSafe=function(){this.onSuccess&&this.onSuccess(this)};c.onErrorSafe=function(){this.onError&&this.onError(this)};c.$6=function(){__p&&__p();var a;try{this.status=this.xhr.status,a=this.xhr.statusText}catch(a){this.xhr.readyState>=4&&(this.errorType=b("AjaxError").TRANSPORT_ERROR,this.errorText=a.message);return}var c=this.status;if(c==null){this.errorType=b("AjaxError").ERROR;this.errorText="null status code";return}if(c===0&&!/^(file|ftp)/.test(this.uri.toString()))this.errorType=b("AjaxError").TRANSPORT_ERROR;else if(c>=100&&c<200)this.errorType=b("AjaxError").PROXY_ERROR;else if(c>=200&&c<300)return;else if(c>=300&&c<400)this.errorType=b("AjaxError").PROXY_ERROR;else if(c>=400&&c<500)this.errorType=b("AjaxError").SERVER_ERROR;else if(c===503)this.errorType=b("AjaxError").SERVICE_UNAVAILABLE;else if(c>500&&c<600)this.errorType=b("AjaxError").PROXY_ERROR;else if(c==1223)return;else c>=12001&&c<=12156?this.errorType=b("AjaxError").TRANSPORT_ERROR:(a="unrecognized status code: "+c,this.errorType=b("AjaxError").ERROR);this.errorText||(this.errorText=a)};c.$7=function(){__p&&__p();var a,c=this.xhr.readyState;try{a=this.xhr.responseText||""}catch(a){c>=4&&(this.errorType=b("AjaxError").ERROR,this.errorText="responseText not available - "+a.message);return}while(this.xhr){var d=this.$1+1,e=this.streamMode?a.indexOf("\n",d):a.length;e<0&&c==4&&(e=a.length);if(e<=this.$1)break;var f=a;this.streamMode&&(f=a.substr(d,e-d).replace(/^\s*|\s*$/g,""));if(d===0&&this.prelude){var g=this.prelude;g.test(f)&&(f=f.replace(g,""))}this.$1=e;if(f){try{this.json=JSON.parse(f)}catch(c){g=a.match(/(<body[\S\s]+?<\/body>)/i);e=g!=null&&g.length>0?g[0]:null;g={message:c.message,"char":d,excerpt:(d===0&&e||f).substr(512)};this.errorType=b("AjaxError").PARSE_ERROR;this.errorText="parse error - "+JSON.stringify(g);return}(i||(i=b("ErrorUtils"))).applyWithGuard(this.onJSONSafe,this)}}};c.$5=function(a){var b=this,c=this.xhr&&this.xhr.readyState||0;this.status==null&&c>=2&&this.$6();!this.errorType&&this.status!=null&&((c===3&&this.streamMode||c===4)&&a(function(){return b.$7()}));(this.errorType||c===4)&&(this.$4=Date.now()-this.$3,a.last(function(){b.errorType?b.onErrorSafe():b.onSuccessSafe(),l(b)}))};return a}();window.addEventListener&&b("UserAgent_DEPRECATED").firefox()&&window.addEventListener("keydown",function(a){a.keyCode===b("Keys").ESC&&a.prevent()},!1);window.attachEvent&&window.attachEvent("onunload",a);e.exports=c}),null);
__d("InstantGamesPresenceProperties",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1=!1}var b=a.prototype;b.addInstantGamePresence=function(){this.$1=!0};b.removeInstantGamePresence=function(){this.$1=!1};b.isActiveGamePresence=function(){return this.$1};return a}();b=new a();e.exports=b}),null);
__d("PresenceProperties",["ChannelConstants","InstantGamesPresenceProperties","WorkplaceChatHelper"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";function a(){this.$1=b("ChannelConstants").CAPABILITY_VOIP_INTEROP}var c=a.prototype;c.getProperties=function(){b("WorkplaceChatHelper").isDesktopChatApp()&&(this.$1|=b("ChannelConstants").CAPABILITY_ACTIVE_ON_DESKTOP_APP);b("InstantGamesPresenceProperties").isActiveGamePresence()?this.$1|=b("ChannelConstants").CAPABILITY_PLAYING_INSTANT_GAME:this.$1&=~b("ChannelConstants").CAPABILITY_PLAYING_INSTANT_GAME;return this.$1};return a}();c=new a();e.exports=c}),null);
__d("FBClipboardLink.react",["cx","fbt","Clipboard","DOMContainer.react","Event","KeyEventController","React","ReactDOM","SubscriptionsHandler","Tooltip.react","isKeyActivation","joinClasses","stylex"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=b("React").createRef(),d.state={copied:!1,supported:b("Clipboard").isSupported()},d.$2=null,d.$3=null,d.$5=function(a){a.clipboardData&&(a.clipboardData.setData("text/html",d.$8()),a.clipboardData.setData("text",d.$9()),a.preventDefault())},d.$7=function(){if(!d.state.supported)return"Unsupported in this browser";return d.state.copied?d.props.tooltipSuccess:d.props.tooltip},d.$4=function(){d.$3&&(window.clearTimeout(d.$3),d.$3=null)},d.$10=function(){d.$3=window.setTimeout(d.$11,d.props.tooltipSuccessDuration)},d.$6=function(a){var c=b("ReactDOM").findDOMNode(d.$1.current);c=b("Clipboard").copy(d.$8(),c);d.$4();d.setState({copied:!0,supported:c});d.$10();d.props.onComplete&&d.props.onComplete(c);d.props.stopPropagation&&a.stopPropagation();d.props.preventDefaultOnClick&&a.preventDefault()},d.$11=function(){d.$4(),d.setState({copied:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentWillUnmount=function(){this.$4(),this.$2&&this.$2.release()};d.componentDidMount=function(){if(this.props.type==="html"){var a=b("ReactDOM").findDOMNode(this);this.$2=this.$2||new(b("SubscriptionsHandler"))();this.$2.addSubscriptions(b("Event").listen(a,"copy",this.$5))}this.props.hotkey&&(this.$2=this.$2||new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("KeyEventController").registerKey(this.props.hotkey,this.$6)))};d.render=function(){var a=this,c=b("joinClasses")(this.props.className,"_xd6"),d=this.props.children||this.props.label;!d&&this.props.childrenDONOTUSE&&(d=b("React").jsx(b("DOMContainer.react"),{children:this.props.childrenDONOTUSE}));return b("React").jsx(b("Tooltip.react"),babelHelpers["extends"]({},this.props,{tabIndex:"0",className:c,tooltip:this.$7(),"data-pitloot-persistonclick":!0,onClick:this.$6,onKeyPress:function(c){return b("isKeyActivation")(c)&&a.$6()},position:this.props.position,alignH:this.props.alignment,role:"button",children:b("React").jsx("div",{ref:this.$1,className:b("joinClasses")("_2lj1",(i||(i=b("stylex")))(this.props.innerXStyle)),children:d})}))};d.$8=function(){if(this.props.getValue)return this.props.getValue();else return this.props.value};d.$9=function(){return this.props.plainTextValue!=null?this.props.plainTextValue:this.$8()};return c}(b("React").PureComponent);a.defaultProps={tooltip:h._("Copy Text to Clipboard"),tooltipSuccess:h._("Text Copied to Clipboard"),tooltipSuccessDuration:1e3,type:"string"};e.exports=a}),null);
__d("FBProfilePhotoShadow.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);d=b("React").Children.only(d);return b("React").jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(c,"_38vo"),children:b("React").cloneElement(d,{className:b("joinClasses")(d.props.className,"_44ma")})}))};return c}(b("React").Component);e.exports=a}),null);
__d("SystemEvents",["ArbiterMixin","Cookie","ErrorPubSub","ExecutionEnvironment","SystemEventsInitialData","TimeSlice","UserActivity","UserAgent_DEPRECATED","clearTimeout","gkx","mixin","setIntervalAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=1e3;c=function(c){__p&&__p();babelHelpers.inheritsLoose(d,c);function d(){__p&&__p();var d;d=c.call(this)||this;d.$SystemEvents12=function(){var a=d.$SystemEvents7();d.$SystemEvents2!=a&&(d.$SystemEvents2=a,d.inform(d.USER,a));d.$SystemEvents13()};d.USER="SystemEvents/USER";d.ONLINE="SystemEvents/ONLINE";d.TIME_TRAVEL="SystemEvents/TIME_TRAVEL";d.$SystemEvents1=b("SystemEventsInitialData").ORIGINAL_USER_ID;d.$SystemEvents2=d.$SystemEvents1;d.$SystemEvents3=a.navigator!=null?a.navigator.onLine:!1;d.$SystemEvents4=Date.now();b("ExecutionEnvironment").canUseDOM&&d.$SystemEvents6();return d}var e=d.prototype;e.isPageOwner=function(a){return(a||this.$SystemEvents7())==this.$SystemEvents1};e.isOnline=function(){return!!(b("UserAgent_DEPRECATED").chrome()||this.$SystemEvents3)};e.checkTimeTravel=function(){var a=Date.now(),b=a-this.$SystemEvents4;this.$SystemEvents4=a;(b<0||b>1e4)&&this.inform(this.TIME_TRAVEL,b)};e.$SystemEvents6=function(){this.$SystemEvents8(),this.$SystemEvents9(),this.$SystemEvents10(),this.$SystemEvents11()};e.$SystemEvents8=function(){var a=this,c=b("TimeSlice").guard(function(){a.$SystemEvents3||(a.$SystemEvents3=!0,a.inform(a.ONLINE,a.$SystemEvents3))},"SystemEvents onOnline"),d=b("TimeSlice").guard(function(){a.$SystemEvents3&&(a.$SystemEvents3=!1,a.inform(a.ONLINE,a.$SystemEvents3))},"SystemEvents onOffline");b("UserAgent_DEPRECATED").ie()?b("UserAgent_DEPRECATED").ie()>=11?(window.addEventListener("online",c,!1),window.addEventListener("offline",d,!1)):b("UserAgent_DEPRECATED").ie()>=8?window.attachEvent("onload",function(){document.body.ononline=c,document.body.onoffline=d}):b("setIntervalAcrossTransitions")(function(){(navigator.onLine?c:d)()},h):window.addEventListener&&(window.addEventListener("online",c,!1),window.addEventListener("offline",d,!1))};e.$SystemEvents13=function(){b("clearTimeout")(this.$SystemEvents5),this.$SystemEvents5=b("setTimeoutAcrossTransitions")(this.$SystemEvents12,h)};e.$SystemEvents9=function(){var a=this;if(self!==top&&b("gkx")("678677"))return;b("UserActivity").subscribe(function(){a.$SystemEvents13()});this.$SystemEvents13()};e.$SystemEvents10=function(){b("setIntervalAcrossTransitions")(this.checkTimeTravel.bind(this),h)};e.$SystemEvents11=function(){b("setIntervalAcrossTransitions")(function(){window.onerror!=(g||(g=b("ErrorPubSub"))).onerror&&(window.onerror=(g||(g=b("ErrorPubSub"))).onerror)},h)};e.$SystemEvents7=function(){return b("Cookie").get("c_user")||"0"};return d}(b("mixin")(b("ArbiterMixin")));e.exports=new c()}),3);
__d("formatDurationSeconds",["fbt","padNumber"],(function(a,b,c,d,e,f,g){function a(a){var c=Math.floor(a/3600),d=Math.floor(a/60%60);a=Math.floor(a%60);if(c)return g._("{hours}:{minutes}:{seconds}",[g._param("hours",c),g._param("minutes",b("padNumber")(d,2)),g._param("seconds",b("padNumber")(a,2))]);else return g._("{minutes}:{seconds}",[g._param("minutes",d),g._param("seconds",b("padNumber")(a,2))])}e.exports=a}),null);
__d("ProfileTile.react",["Image.react","ImageBlock.react","Link.react","React","URI","XUIText.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=24;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.size||h;a=this.props.imageProps&&this.props.imageProps.src||"https://graph.facebook.com/"+(this.props.id||"")+"/picture?width="+a+"&height="+a;var c=this.props.imageProps&&this.props.imageProps.href||"/"+(this.props.id||""),d=null;this.props.shouldShowProfileCardOnHover&&(d=new(g||(g=b("URI")))("/ajax/hovercard/user.php").setQueryData({id:this.props.id}));var e=this.props.desc?b("React").jsx(b("XUIText.react"),babelHelpers["extends"]({display:"block"},this.props.descProps,{children:this.props.desc})):null,f=b("React").jsx("span",babelHelpers["extends"]({},this.props.titleProps,{children:this.props.name}));this.props.shouldNameLinkToProfile&&(f=b("React").jsx(b("Link.react"),babelHelpers["extends"]({"data-hovercard":d},this.props.titleProps,{href:this.props.titleProps&&this.props.titleProps.href||"/"+(this.props.id||""),children:this.props.name})));d=this.props.image||(this.props.size&&this.props.imageProps&&!this.props.imageProps.height&&this.props.imageProps&&!this.props.imageProps.width?b("React").jsx(b("Image.react"),babelHelpers["extends"]({height:this.props.size,src:a,width:this.props.size},this.props.imageProps)):b("React").jsx(b("Image.react"),babelHelpers["extends"]({src:a},this.props.imageProps)));a=this.props.shouldImageLinkToProfile?b("React").jsx(b("Link.react"),{href:c,children:d}):d;return b("React").jsxs(b("ImageBlock.react"),babelHelpers["extends"]({},this.props.tileProps,{children:[a,b("React").jsxs("div",{children:[f,e]})]}))};return c}(b("React").Component);a.defaultProps={shouldShowProfileCardOnHover:!0,shouldNameLinkToProfile:!0};e.exports=a}),null);
__d("VideoWithClickPlayPause",["logVideosClickTracking"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=this.$1.getVideoNode(),this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}var c=a.prototype;c.$3=function(){var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");if(this.$1.isState("playing")){if(this.$1.getOption("VideoWithLiveBroadcast","isLive")||a&&a.getOption("VideoWithLiveBroadcast","isLive")||this.$4()||this.$5())return;this.$1.pause("user_initiated")}else b("logVideosClickTracking")(this.$2),this.$1.play("user_initiated")};c.$4=function(){var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");a=a&&a.getOption("VideoWithInstreamVideo","controller");return a&&!a.getConfig().canPauseAdBreak};c.$5=function(){return this.$1.getOption("VideoWithInstreamVideo","disableClickToPause")};return a}();e.exports=a}),null);
__d("VideoWithLoopingPlayback",["setImmediate"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this;c===void 0&&(c=-1);this.$5=!1;this.$7=function(){var a=d.$1.getOption("FeedAutoplay","isVisibleForAutoplay"),c=d.$1.getOption("WatchAndScroll","isActive"),e=d.$1.getIsInChannel(),f=d.$1.getSource()==="tahoe";!d.$5&&(a||a===void 0)&&!c&&!e&&!f&&(!d.$4||d.$3<d.$4)&&(b("setImmediate")(function(){return d.$1.play("loop_initiated")}),d.$3++,d.$4&&d.$3===d.$4-1&&d.$1.setOption("Looping","isLooping",!1))};this.$1=a;this.$2=!0;this.$3=1;this.$4=c>-1?c:null;this.$6=this.$1.addListener("finishPlayback",this.$7);this.$1.registerOption("Looping","isLooping",function(){return d.$2},function(a){return d.$8(a)});this.$1.registerOption("Looping","disabled",function(){return d.$5},function(a){return d.$5=a})}var c=a.prototype;c.destroy=function(){this.$6!=null&&(this.$6.remove(),this.$6=null),this.$1.hasOption("Looping","isLooping")&&this.$1.unregisterOption("Looping","isLooping"),this.$1.hasOption("Looping","disabled")&&this.$1.unregisterOption("Looping","disabled")};c.isLooping=function(){return this.$2};c.getLoopCount=function(){return this.$3};c.getMaxLoopCount=function(){return this.$4};c.setMaxLoopCount=function(a){this.$4=a>-1?a:null};c.$8=function(a){this.$2=a};return a}();e.exports=a}),null);
__d("FBOverlayBase.react",["React"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").Children.only(this.props.children)};return c}(b("React").Component);e.exports=a}),null);
__d("FBOverlayContainer.react",["cx","invariant","FBOverlayBase.react","FBOverlayElement.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_23n-"),children:this.props.children}))};return c}(b("React").Component);a.propTypes={children:function(a,c){__p&&__p();a=a[c];var d=0;b("React").Children.forEach(a,function(a){if(a===null||a===void 0)return;switch(a.type){case b("FBOverlayBase.react"):d++;break;case b("FBOverlayElement.react"):break;default:h(0,435)}});d===1||h(0,436)}};e.exports=a}),null);
__d("FluxMixinLegacyInstrumentation",["FluxContainerInstrumentation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.constructor.displayName||a.constructor.name||"FluxMixinLegacy(unknown)"}var h={_callCalculateState:function(){var a=b("FluxContainerInstrumentation").onCalculateStateStart(g(this)),c=this._FluxMixinLegacyInstrumentationCalculateStateCaller.apply(this,arguments);a&&a();return c},UNSAFE_componentWillMount:function(){this.constructor._FluxMixinLegacyInstrumentationOnInitCalled||(b("FluxContainerInstrumentation").onInit(this.constructor),this.constructor._FluxMixinLegacyInstrumentationOnInitCalled=!0)},_FluxMixinLegacyInstrumentationEmittedChangeStores:null,_getCurrentDispatchForInstrumentation:function(){return b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch()},_onInitialStateForInstrumentation:function(){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.initialState(this,g(this))},_onReceivePropsForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.receiveProps(this,g(this),a)},_addStoreEmitForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(this._FluxMixinLegacyInstrumentationEmittedChangeStores=this._FluxMixinLegacyInstrumentationEmittedChangeStores||[],b("FluxContainerInstrumentation").addStoreDependencies(this._FluxMixinLegacyInstrumentationEmittedChangeStores,a))},_collectStoreEmitsForInstrumentation:function(){var a=this._FluxMixinLegacyInstrumentationEmittedChangeStores;this._FluxMixinLegacyInstrumentationEmittedChangeStores=null;return a},_logStoreEmitsForInstrumentation:function(a,c){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.storeEmitChange(this,g(this),a||[],c)},componentDidUpdate:function(a,c){b("FluxContainerInstrumentation").onDidUpdate(this,g(this),a,this.props,c,this.state)}};function a(a){b("FluxContainerInstrumentation").hasInstrumentation()&&(a.mixins=a.mixins||[],a.mixins.push(h),a._FluxMixinLegacyInstrumentationCalculateStateCaller=a._callCalculateState,delete a._callCalculateState);return a}e.exports={addInstrumentation:a}}),null);
__d("PureStoreBasedStateMixin",["invariant","FluxMixinLegacyInstrumentation","StoreBasedStateMixinHelper","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("FluxMixinLegacyInstrumentation").addInstrumentation({_callCalculateState:function(){return this.constructor.calculateState()},getInitialState:function(){this._onInitialStateForInstrumentation&&this._onInitialStateForInstrumentation();return this._callCalculateState()},UNSAFE_componentWillMount:function(){__p&&__p();var a=this;this.constructor.calculateState||g(0,2396);this._recalculateStateID=null;var d=function(){if(a.isMounted()){var b=a._collectStoreEmitsForInstrumentation?a._collectStoreEmitsForInstrumentation():null,c=a._callCalculateState();a.setState(a._logStoreEmitsForInstrumentation!=null?function(){b!=null&&a._logStoreEmitsForInstrumentation&&a._logStoreEmitsForInstrumentation(b);return c}:c)}a._recalculateStateID=null};this._mixin=new(b("StoreBasedStateMixinHelper"))(c);this._mixin.subscribeCallback(function(){a._recalculateStateID===null&&(a._recalculateStateID=b("setImmediate")(d))},this._addStoreEmitForInstrumentation)},componentWillUnmount:function(){this._mixin.release(),this._mixin=null}})};e.exports=a}),null);
__d("FBPaymentsDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!1})}),null);
__d("FBPaymentsDialogActions",["FBPaymentsDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";var g={types:b("keyMirror")({SHOW_DIALOG:null,HIDE_DIALOG:null}),showDialog:function(a,c){b("FBPaymentsDispatcher").dispatch({type:g.types.SHOW_DIALOG,data:{dialogClass:a,dialogProps:c}})},hideDialog:function(){b("FBPaymentsDispatcher").dispatch({type:g.types.HIDE_DIALOG,data:{}})}};e.exports=g}),null);