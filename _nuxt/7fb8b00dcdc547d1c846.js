(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(e,t,r){var content=r(167);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("77d6318b",content,!0,{sourceMap:!1})},166:function(e,t,r){"use strict";var n=r(165);r.n(n).a},167:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"fieldset.no-colored-frames{border-color:#afafaf!important}fieldset.no-colored-frames legend{color:var(--ac-color)}",""])},168:function(e,t,r){"use strict";var n={computed:{noFrameColors:function(){return this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1}},props:{label:{type:String,default:"Section"},collapsed:{type:Boolean}},methods:{collapse:function(e){e.target.parentNode.querySelector(".collapsible").classList.toggle("hidden")}}},o=(r(166),r(12)),component=Object(o.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{class:{"no-colored-frames":e.noFrameColors},attrs:{id:e.label.toLowerCase()}},[r("legend",{on:{click:function(t){return t.preventDefault(),e.collapse(t)}}},[e._v(e._s(e.label)+" ↕")]),e._v(" "),r("div",{staticClass:"collapsible",class:{hidden:e.collapsed}},[e._t("default")],2)])},[],!1,null,null,null);t.a=component.exports},175:function(e,t,r){"use strict";var n=r(6),o=r(176)(5),l=!0;"find"in[]&&Array(1).find(function(){l=!1}),n(n.P+n.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(74)("find")},176:function(e,t,r){var n=r(29),o=r(73),l=r(30),c=r(22),d=r(177);e.exports=function(e,t){var r=1==e,v=2==e,m=3==e,h=4==e,f=6==e,_=5==e||f,y=t||d;return function(t,d,w){for(var k,P,R=l(t),x=o(R),C=n(d,w,3),T=c(x.length),S=0,A=r?y(t,T):v?y(t,0):void 0;T>S;S++)if((_||S in x)&&(P=C(k=x[S],S,R),e))if(r)A[S]=P;else if(P)switch(e){case 3:return!0;case 5:return k;case 6:return S;case 2:A.push(k)}else if(h)return!1;return f?-1:m||h?h:A}}},177:function(e,t,r){var n=r(178);e.exports=function(e,t){return new(n(e))(t)}},178:function(e,t,r){var n=r(9),o=r(101),l=r(3)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},181:function(e,t,r){"use strict";r.r(t);r(102);function n(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r(103),r(175),r(76),r(100);var section=r(168),o=[{name:"informational",statusCodeRegex:new RegExp(/[1][0-9]+/),className:"info-response"},{name:"successful",statusCodeRegex:new RegExp(/[2][0-9]+/),className:"success-response"},{name:"redirection",statusCodeRegex:new RegExp(/[3][0-9]+/),className:"redir-response"},{name:"client error",statusCodeRegex:new RegExp(/[4][0-9]+/),className:"cl-error-response"},{name:"server error",statusCodeRegex:new RegExp(/[5][0-9]+/),className:"sv-error-response"},{name:"unknown",statusCodeRegex:new RegExp(/.*/),className:"missing-data-response"}],l=function(e){return o.find(function(t){return t.statusCodeRegex.test(e)})},c={components:{"pw-section":section.a},data:function(){return{method:"GET",url:"https://reqres.in",auth:"None",path:"/api/users",httpUser:"",httpPassword:"",bearerToken:"",headers:[],params:[],bodyParams:[],rawParams:"",rawInput:!1,contentType:"application/json",response:{status:"",headers:"",body:""},history:window.localStorage.getItem("history")?JSON.parse(window.localStorage.getItem("history")):[],previewEnabled:!1}},computed:{statusCategory:function(){return l(this.response.status)},noHistoryToClear:function(){return 0===this.history.length},isValidURL:function(){var e=new RegExp("^(https?:\\/\\/)?(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"),t=new RegExp("^(https?:\\/\\/)?(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$");return e.test(this.url)||t.test(this.url)},rawRequestBody:function(){var e=this.bodyParams;if("application/json"!==this.contentType)return e.filter(function(e){return!!e.key}).map(function(e){var t=e.key,r=e.value;return"".concat(t,"=").concat(encodeURIComponent(r))}).join("&");try{var t=JSON.parse("{".concat(e.filter(function(e){return!!e.key}).map(function(e){var t=e.key,r=e.value;return'\n            "'.concat(t,'": "').concat(r,'"\n            ')}).join(),"}"));return JSON.stringify(t)}catch(e){return"invalid"}},headerString:function(){var e=this.headers.filter(function(e){return!!e.key}).map(function(e){var t=e.key,r=e.value;return"".concat(t,": ").concat(r)}).join(",\n");return""==e?"":"".concat(e)},queryString:function(){var e=this.params.filter(function(e){return!!e.key}).map(function(e){var t=e.key,r=e.value;return"".concat(t,"=").concat(encodeURIComponent(r))}).join("&");return""==e?"":"?".concat(e)},responseType:function(){return(this.response.headers["content-type"]||"").split(";")[0].toLowerCase()}},methods:{findEntryStatus:function(e){return l(e.status)},deleteHistory:function(e){this.history.splice(this.history.indexOf(e),1),window.localStorage.setItem("history",JSON.stringify(this.history))},clearHistory:function(){this.history=[],window.localStorage.setItem("history",JSON.stringify(this.history))},useHistory:function(e){var t=e.method,r=e.url,path=e.path;this.method=t,this.url=r,this.path=path,this.$refs.request.$el.scrollIntoView({behavior:"smooth"})},sendRequest:function(){var e=this;if(this.isValidURL){this.$refs.response.$el.classList.contains("hidden")&&this.$refs.response.$el.classList.toggle("hidden"),this.$refs.response.$el.scrollIntoView({behavior:"smooth"}),this.previewEnabled=!1,this.response.status="Fetching...",this.response.body="Loading...";var t=new XMLHttpRequest,r="Basic"===this.auth?this.httpUser:null,o="Basic"===this.auth?this.httpPassword:null;if(t.open(this.method,this.url+this.path+this.queryString,!0,r,o),"Bearer Token"===this.auth&&t.setRequestHeader("Authorization","Bearer "+this.bearerToken),this.headers&&this.headers.forEach(function(element){t.setRequestHeader(element.key,element.value)}),"POST"===this.method||"PUT"===this.method){var l=this.rawInput?this.rawParams:this.rawRequestBody;t.setRequestHeader("Content-Length",l.length),t.setRequestHeader("Content-Type","".concat(this.contentType,"; charset=utf-8")),t.send(l)}else t.send();t.onload=function(r){e.response.status=t.status;var o=e.response.headers=function(e){var t=e.getAllResponseHeaders().trim().split(/[\r\n]+/),r={};return t.forEach(function(line){var e=line.split(": "),header=e.shift().toLowerCase(),t=e.join(": ");r[header]=t}),r}(t);e.response.body=t.responseText,(o["content-type"]||"").startsWith("application/json")&&(e.response.body=JSON.stringify(JSON.parse(e.response.body),null,2));var l=(new Date).toLocaleTimeString();e.history=[{status:t.status,time:l,method:e.method,url:e.url,path:e.path}].concat(n(e.history)),window.localStorage.setItem("history",JSON.stringify(e.history))},t.onerror=function(r){e.response.status=t.status,e.response.body=t.statusText}}else alert("Please check the formatting of the URL")},addRequestHeader:function(){return this.headers.push({key:"",value:""}),!1},removeRequestHeader:function(e){this.headers.splice(e,1)},addRequestParam:function(){return this.params.push({key:"",value:""}),!1},removeRequestParam:function(e){this.params.splice(e,1)},addRequestBodyParam:function(){return this.bodyParams.push({key:"",value:""}),!1},removeRequestBodyParam:function(e){this.bodyParams.splice(e,1)},formatRawParams:function(e){if(13===e.which||9===e.which){var t=e.target.value,r=t.substring(0,e.target.selectionStart),n=t.substring(e.target.selectionEnd);if(13===e.which){e.preventDefault();var o=e.target.selectionStart,l=r.split("\n").slice(-1)[0].match(/([\s\t]*).*/)[1]||"";e.target.value=r+"\n"+l+n,setTimeout(function(){return e.target.selectionStart=e.target.selectionEnd=o+l.length+1},1)}else if(9===e.which){e.preventDefault();var c=e.target.selectionStart;return e.target.value=r+"  "+n,e.target.selectionStart=e.target.selectionEnd=c+2,!1}}},copyResponse:function(){document.getElementById("response-details").select(),document.execCommand("copy")},togglePreview:function(){if(this.previewEnabled=!this.previewEnabled,this.previewEnabled&&"text/html"===this.responseType){if(this.$refs.previewFrame.getAttribute("data-previewing-url")===this.url)return;var e=(new DOMParser).parseFromString(this.response.body,this.responseType);e.head.innerHTML='<base href="'.concat(this.url,'">')+e.head.innerHTML,this.$refs.previewFrame.srcdoc=e.documentElement.outerHTML,this.$refs.previewFrame.setAttribute("data-previewing-url",this.url)}}}},d=r(12),component=Object(d.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("pw-section",{ref:"request",staticClass:"blue",attrs:{label:"Request"}},[r("ul",[r("li",[r("label",{attrs:{for:"method"}},[e._v("Method")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.method,expression:"method"}],attrs:{id:"method"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.method=t.target.multiple?r:r[0]}}},[r("option",[e._v("GET")]),e._v(" "),r("option",[e._v("POST")]),e._v(" "),r("option",[e._v("PUT")]),e._v(" "),r("option",[e._v("DELETE")]),e._v(" "),r("option",[e._v("OPTIONS")])])]),e._v(" "),r("li",[r("label",{attrs:{for:"url"}},[e._v("URL")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],class:{error:!e.isValidURL},attrs:{id:"url",type:"url"},domProps:{value:e.url},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendRequest(t)},input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e._v(" "),r("li",[r("label",{attrs:{for:"path"}},[e._v("Path")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.path,expression:"path"}],attrs:{id:"path"},domProps:{value:e.path},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendRequest(t)},input:function(t){t.target.composing||(e.path=t.target.value)}}})]),e._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"action"}},[e._v(" ")]),e._v(" "),r("button",{attrs:{id:"action",name:"action",disabled:!e.isValidURL},on:{click:e.sendRequest}},[e._v("Send")])])])]),e._v(" "),"POST"===e.method||"PUT"===e.method?r("pw-section",{staticClass:"blue-dark",attrs:{label:"Request Body"}},[r("ul",[r("li",[r("label",[e._v("Content Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.contentType,expression:"contentType"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.contentType=t.target.multiple?r:r[0]}}},[r("option",[e._v("application/json")]),e._v(" "),r("option",[e._v("www-form/urlencoded")])]),e._v(" "),r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.rawInput,expression:"rawInput"}],staticStyle:{cursor:"pointer"},attrs:{type:"checkbox",id:"rawInput"},domProps:{checked:Array.isArray(e.rawInput)?e._i(e.rawInput,null)>-1:e.rawInput},on:{change:function(t){var r=e.rawInput,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.rawInput=r.concat([null])):l>-1&&(e.rawInput=r.slice(0,l).concat(r.slice(l+1)))}else e.rawInput=o}}}),e._v(" "),r("label",{staticStyle:{cursor:"pointer"},attrs:{for:"rawInput"}},[e._v("Raw Input")])])])]),e._v(" "),e.rawInput?r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.rawParams,expression:"rawParams"}],staticStyle:{"font-family":"monospace"},attrs:{rows:"16"},domProps:{value:e.rawParams},on:{keydown:e.formatRawParams,input:function(t){t.target.composing||(e.rawParams=t.target.value)}}})]):r("div",[e._l(e.bodyParams,function(param,t){return r("ol",[r("li",[r("label",{attrs:{for:"bparam"+t}},[e._v("Key "+e._s(t+1))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:param.key,expression:"param.key"}],attrs:{name:"bparam"+t},domProps:{value:param.key},on:{input:function(t){t.target.composing||e.$set(param,"key",t.target.value)}}})]),e._v(" "),r("li",[r("label",{attrs:{for:"bvalue"+t}},[e._v("Value "+e._s(t+1))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:param.value,expression:"param.value"}],attrs:{name:"bvalue"+t},domProps:{value:param.value},on:{input:function(t){t.target.composing||e.$set(param,"value",t.target.value)}}})]),e._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"request"}},[e._v(" ")]),e._v(" "),r("button",{attrs:{name:"request"},on:{click:function(r){return e.removeRequestBodyParam(t)}}},[e._v("Remove")])])])}),e._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"addrequest"}},[e._v("Action")]),e._v(" "),r("button",{attrs:{name:"addrequest"},on:{click:e.addRequestBodyParam}},[e._v("Add")])])]),e._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"request"}},[e._v("Parameter List")]),e._v(" "),r("textarea",{attrs:{name:"request",rows:"1",readonly:""}},[e._v(e._s(e.rawRequestBody||"(add at least one parameter)"))])])])],2)]):e._e(),e._v(" "),r("pw-section",{staticClass:"green",attrs:{label:"Authentication",collapsed:""}},[r("ul",[r("li",[r("label",{attrs:{for:"auth"}},[e._v("Authentication Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.auth,expression:"auth"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.auth=t.target.multiple?r:r[0]}}},[r("option",[e._v("None")]),e._v(" "),r("option",[e._v("Basic")]),e._v(" "),r("option",[e._v("Bearer Token")])])])]),e._v(" "),"Basic"===e.auth?r("ul",[r("li",[r("label",{attrs:{for:"http_basic_user"}},[e._v("User")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.httpUser,expression:"httpUser"}],domProps:{value:e.httpUser},on:{input:function(t){t.target.composing||(e.httpUser=t.target.value)}}})]),e._v(" "),r("li",[r("label",{attrs:{for:"http_basic_passwd"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.httpPassword,expression:"httpPassword"}],attrs:{type:"password"},domProps:{value:e.httpPassword},on:{input:function(t){t.target.composing||(e.httpPassword=t.target.value)}}})])]):e._e(),e._v(" "),"Bearer Token"===e.auth?r("ul",[r("li",[r("label",{attrs:{for:"bearer_token"}},[e._v("Token")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.bearerToken,expression:"bearerToken"}],domProps:{value:e.bearerToken},on:{input:function(t){t.target.composing||(e.bearerToken=t.target.value)}}})])]):e._e()]),e._v(" "),r("pw-section",{staticClass:"orange",attrs:{label:"Headers",collapsed:""}},[e._l(e.headers,function(header,t){return r("ol",[r("li",[r("label",{attrs:{for:"header"+t}},[e._v("Key "+e._s(t+1))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:header.key,expression:"header.key"}],attrs:{name:"header"+t},domProps:{value:header.key},on:{input:function(t){t.target.composing||e.$set(header,"key",t.target.value)}}})]),e._v(" "),r("li",[r("label",{attrs:{for:"value"+t}},[e._v("Value "+e._s(t+1))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:header.value,expression:"header.value"}],attrs:{name:"value"+t},domProps:{value:header.value},on:{input:function(t){t.target.composing||e.$set(header,"value",t.target.value)}}})]),e._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"header"}},[e._v(" ")]),e._v(" "),r("button",{attrs:{name:"header"},on:{click:function(r){return e.removeRequestHeader(t)}}},[e._v("Remove")])])])}),e._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"add"}},[e._v("Action")]),e._v(" "),r("button",{attrs:{name:"add"},on:{click:e.addRequestHeader}},[e._v("Add")])])]),e._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"request"}},[e._v("Header List")]),e._v(" "),r("textarea",{attrs:{name:"request",rows:"1",readonly:""}},[e._v(e._s(e.headerString||"(add at least one header)"))])])])],2),e._v(" "),r("pw-section",{staticClass:"cyan",attrs:{label:"Parameters",collapsed:""}},[e._l(e.params,function(param,t){return r("ol",[r("li",[r("label",{attrs:{for:"param"+t}},[e._v("Key "+e._s(t+1))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:param.key,expression:"param.key"}],attrs:{name:"param"+t},domProps:{value:param.key},on:{input:function(t){t.target.composing||e.$set(param,"key",t.target.value)}}})]),e._v(" "),r("li",[r("label",{attrs:{for:"value"+t}},[e._v("Value "+e._s(t+1))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:param.value,expression:"param.value"}],attrs:{name:"value"+t},domProps:{value:param.value},on:{input:function(t){t.target.composing||e.$set(param,"value",t.target.value)}}})]),e._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"param"}},[e._v(" ")]),e._v(" "),r("button",{attrs:{name:"param"},on:{click:function(r){return e.removeRequestParam(t)}}},[e._v("Remove")])])])}),e._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"add"}},[e._v("Action")]),e._v(" "),r("button",{attrs:{name:"add"},on:{click:e.addRequestParam}},[e._v("Add")])])]),e._v(" "),r("ul",[r("li",[r("label",{attrs:{for:"request"}},[e._v("Parameter List")]),e._v(" "),r("textarea",{attrs:{name:"request",rows:"1",readonly:""}},[e._v(e._s(e.queryString||"(add at least one parameter)"))])])])],2),e._v(" "),r("pw-section",{ref:"response",staticClass:"purple",attrs:{label:"Response",id:"response"}},[r("ul",[r("li",[r("label",{attrs:{for:"status"}},[e._v("status")]),e._v(" "),r("input",{class:e.statusCategory?e.statusCategory.className:"",attrs:{name:"status",type:"text",readonly:""},domProps:{value:e.response.status||"(waiting to send request)"}})])]),e._v(" "),e._l(e.response.headers,function(t,n){return r("ul",[r("li",[r("label",{attrs:{for:"value"}},[e._v(e._s(n))]),e._v(" "),r("input",{attrs:{name:"value",readonly:""},domProps:{value:t}})])])}),e._v(" "),r("ul",[r("li",[r("div",{staticClass:"flex-wrap"},[r("label",{attrs:{for:"body"}},[e._v("response")]),e._v(" "),e.response.body?r("button",{attrs:{name:"action"},on:{click:e.copyResponse}},[e._v("Copy Response")]):e._e()]),e._v(" "),r("div",{attrs:{id:"response-details-wrapper"}},[r("textarea",{attrs:{name:"body",rows:"16",id:"response-details",readonly:""}},[e._v(e._s(e.response.body||"(waiting to send request)"))]),e._v(" "),r("iframe",{ref:"previewFrame",staticClass:"covers-response",class:{hidden:!e.previewEnabled},attrs:{src:"about:blank"}})]),e._v(" "),e.response.body&&"text/html"===e.responseType?r("div",{staticClass:"align-right"},[r("button",{on:{click:function(t){return t.preventDefault(),e.togglePreview(t)}}},[e._v(e._s(e.previewEnabled?"Hide Preview":"Preview HTML"))])]):e._e()])])],2),e._v(" "),r("pw-section",{staticClass:"gray",attrs:{label:"History"}},[r("ul",[r("li",[r("button",{class:{disabled:e.noHistoryToClear},on:{click:e.clearHistory}},[e._v("Clear History")])])]),e._v(" "),e._l(e.history,function(t){return r("ul",[r("li",[r("label",{attrs:{for:"time"}},[e._v("Time")]),e._v(" "),r("input",{attrs:{name:"time",type:"text",readonly:""},domProps:{value:t.time}})]),e._v(" "),r("li",{staticClass:"method-list-item"},[r("label",{attrs:{for:"method"}},[e._v("Method")]),e._v(" "),r("input",{class:e.findEntryStatus(t).className,style:{"--status-code":t.status},attrs:{name:"method",type:"text",readonly:""},domProps:{value:t.method}}),e._v(" "),r("span",{staticClass:"entry-status-code"},[e._v(e._s(t.status))])]),e._v(" "),r("li",[r("label",{attrs:{for:"url"}},[e._v("URL")]),e._v(" "),r("input",{attrs:{name:"url",type:"text",readonly:""},domProps:{value:t.url}})]),e._v(" "),r("li",[r("label",{attrs:{for:"path"}},[e._v("Path")]),e._v(" "),r("input",{attrs:{name:"path",type:"text",readonly:""},domProps:{value:t.path}})]),e._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"delete"}},[e._v(" ")]),e._v(" "),r("button",{attrs:{name:"delete"},on:{click:function(r){return e.deleteHistory(t)}}},[e._v("Delete")])]),e._v(" "),r("li",[r("label",{staticClass:"hide-on-small-screen",attrs:{for:"use"}},[e._v(" ")]),e._v(" "),r("button",{attrs:{name:"use"},on:{click:function(r){return e.useHistory(t)}}},[e._v("Use")])])])})],2)],1)},[],!1,null,null,null);t.default=component.exports}}]);