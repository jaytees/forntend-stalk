if (self.CavalryLogger) { CavalryLogger.start_js(["xT45d"]); }

__d("ChatSidebarSheetReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("CssBackgroundImageReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("FBPaymentsDialogContainerReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MNCommerceDialogContainerReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MNCommerceReportConversationDialogReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MessengerBannerReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MessengerDeleteAllDialogBootloaderReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MessengerErrorBoundaryReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MessengerInfoPanelEmojiReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MessengerMenuReact.bs",[],(function(a,b,c,d,e,f){"use strict";a={};b={};c={};f.Menu=a;f.MenuItem=b;f.MenuSeparator=c}),null);
__d("MessengerP2PDialogContainerReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MessengerPopoverMenuReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MessengerRTCCallButtonReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MessengerThreadListGridWrapperReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("MontageThreadViewContainerReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("PagesPlatformDialogContainerReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("WorkGalahadChatsThreadlistHeaderReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("WorkGalahadNavHeaderPressableActionReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("WorkchatNotificationsJewelBootloaderReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("WorkchatThreadListInviteRowReact.bs",[],(function(a,b,c,d,e,f){}),null);
__d("WorkGalahadNavListContext.react",["React"],(function(a,b,c,d,e,f){e.exports=b("React").createContext({focused:!1,hovered:!1})}),null);
__d("WorkGalahadNavHeaderPressableAction.react",["React","WIGPressable.react","WIGText.react","WIGTooltip.react","WorkGalahadNavListContext.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useContext,h={action:{textAlign:"igocvxxm",textTransform:"qh3kmfdh"},actionTransition:{opacity:"fchkd3bi",transitionProperty:"dm2j5ryo",transitionDuration:"rs2dquaj",transitionTimingFunction:"d32d5syc",":focus":{opacity:"el9k2h2j"},":hover":{opacity:"kh39u4sc"}},actionTransitionVisible:{opacity:"pt8wzkwh"}};function a(a){__p&&__p();var c=a.href;c=c===void 0?void 0:c;var d=a.onClick,e=a.showOnHover,f=a.linkRef,i=a.tooltip;a=a.title;var j=g(b("WorkGalahadNavListContext.react")),k=j.focused;j=j.hovered;c=c!=null?{url:c.toString()}:void 0;c=b("React").jsx(b("WIGPressable.react"),{display:"block",linkProps:c,onPress:d,overlayDisabled:!0,xstyle:[h.action,e===!0&&h.actionTransition,(k||j)&&h.actionTransitionVisible],ref:f,children:b("React").jsx(b("WIGText.react"),{type:"body4",color:"highlight",children:a})});i!=null&&(c=b("React").jsx(b("WIGTooltip.react"),{tooltip:i,children:c}));return c}e.exports=a}),null);