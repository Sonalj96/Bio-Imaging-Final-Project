if (self.CavalryLogger) { CavalryLogger.start_js(["HqWtw"]); }

__d("MessengerThreadSharedMediaHelper",["AsyncRequest","LogHistory","MessageSharedMediaIDStore.bs","MessengerThreadSharedMediaAfterWebGraphQLQuery","MessengerThreadSharedMediaBeforeWebGraphQLQuery","MessengerThreadSharedMediaFindWebGraphQLQuery","performanceAbsoluteNow","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("LogHistory").getInstance("shared_media_helper"),i=0;a={search:function(a,c,d){var e=b("MessageSharedMediaIDStore.bs").getMessageIDForAttachmentID(c),f=i++,j=(g||(g=b("performanceAbsoluteNow")))(),k=new(b("AsyncRequest"))(b("MessengerThreadSharedMediaFindWebGraphQLQuery").getLegacyURI({id:a,photoID:c,messageID:e}));h.debug("search request "+f,JSON.stringify({id:a,photoID:c,messageID:e,timestamp:j}));b("promiseDone")(k.setAllowCrossPageTransition(!0).exec().then(function(a){return a.getPayload()}),function(i){var k=(g||(g=b("performanceAbsoluteNow")))();h.debug("search response "+f,JSON.stringify({id:a,photoID:c,messageID:e,timestamp:k,duration:k-j}));d(i)});return k},loadMorePrevious:function(a,c,d,e){a=new(b("AsyncRequest"))(b("MessengerThreadSharedMediaAfterWebGraphQLQuery").getLegacyURI({id:a,after:c,first:d}));b("promiseDone")(a.setAllowCrossPageTransition(!0).exec().then(function(a){return a.getPayload()}),function(a){return e(a)});return a},loadMoreLatest:function(a,c,d,e){a=new(b("AsyncRequest"))(b("MessengerThreadSharedMediaBeforeWebGraphQLQuery").getLegacyURI({id:a,before:c,last:d}));b("promiseDone")(a.setAllowCrossPageTransition(!0).exec().then(function(a){return a.getPayload()}),function(a){return e(a)});return a}};e.exports=a}),null);