(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[9985],{4724:function(e,r,n){"use strict";var t=n(7294),d=n(1446);function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(t),i=l(d);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var n,t,d=function(e,r){if(null==e)return{};var n,t,d={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(d[n]=e[n]);return d}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}function m(e){return Array.isArray(e)}var u=["state","setState","position","registerListener","calendarProps","datePickerProps","handleChange","nodes","Calendar","DatePicker","handlePropsChange","handleFocusedDate"];!function(e,r){void 0===r&&(r={});var n=r.insertAt;if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===n&&t.firstChild?t.insertBefore(d,t.firstChild):t.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".rmdp-header-plugin {\r\n  background-color: #0074d9;\r\n  display: grid;\r\n  color: white;\r\n}\r\n\r\n.rmdp-header-plugin div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.rmdp-header-plugin .rmdp-hp-dd {\r\n  font-size: 50px;\r\n  font-weight: 500;\r\n}\r\n\r\n.rmdp-header-plugin.small.top .rmdp-hp-dd,\r\n.rmdp-header-plugin.small.bottom .rmdp-hp-dd {\r\n  font-size: 28px;\r\n}\r\n\r\n.rmdp-header-plugin.top {\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.rmdp-header-plugin.bottom {\r\n  border-radius: 0 0 5px 5px;\r\n}\r\n\r\n.rmdp-header-plugin.left {\r\n  border-radius: 5px 0 0 5px;\r\n}\r\n\r\n.rmdp-header-plugin.right {\r\n  border-radius: 0 5px 5px 0;\r\n}\r\n\r\n.rmdp-header-plugin.top.big,\r\n.rmdp-header-plugin.bottom.big {\r\n  height: 200px;\r\n}\r\n\r\n.rmdp-header-plugin.left.big,\r\n.rmdp-header-plugin.right.big {\r\n  width: 225px;\r\n}\r\n\r\n.rmdp-header-plugin.top.medium,\r\n.rmdp-header-plugin.bottom.medium {\r\n  height: 150px;\r\n}\r\n\r\n.rmdp-header-plugin.left.medium,\r\n.rmdp-header-plugin.right.medium {\r\n  width: 150px;\r\n}\r\n\r\n.rmdp-header-plugin.top.small,\r\n.rmdp-header-plugin.bottom.small {\r\n  height: 90px;\r\n}\r\n\r\n.rmdp-header-plugin.left.small,\r\n.rmdp-header-plugin.right.small {\r\n  width: 110px;\r\n}\r\n\r\n.green .rmdp-header-plugin {\r\n  background-color: #3d9970;\r\n}\r\n\r\n.purple .rmdp-header-plugin {\r\n  background-color: #9c27b0;\r\n}\r\n\r\n.red .rmdp-header-plugin {\r\n  background-color: #ea0034;\r\n}\r\n\r\n.teal .rmdp-header-plugin {\r\n  background-color: #009688;\r\n}\r\n\r\n.yellow .rmdp-header-plugin {\r\n  background-color: #f7da37;\r\n}\r\n\r\n.rmdp-header-plugin.no-border-top-left-radius {\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.rmdp-header-plugin.no-border-bottom-left-radius {\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.rmdp-header-plugin.no-border-top-right-radius {\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.rmdp-header-plugin.no-border-bottom-right-radius {\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.rmdp-header-plugin.no-border-radius {\r\n  border-radius: 0;\r\n}\r\n\r\n@media (max-width: 400px), (max-height: 400px) {\r\n  .rmdp-header-plugin.top.big,\r\n  .rmdp-header-plugin.bottom.big {\r\n    height: 100px;\r\n  }\r\n\r\n  .rmdp-header-plugin.left.big,\r\n  .rmdp-header-plugin.right.big {\r\n    width: 125px;\r\n  }\r\n\r\n  .rmdp-header-plugin.top.medium,\r\n  .rmdp-header-plugin.bottom.medium {\r\n    height: 75px;\r\n  }\r\n\r\n  .rmdp-header-plugin.left.medium,\r\n  .rmdp-header-plugin.right.medium {\r\n    width: 75px;\r\n  }\r\n\r\n  .rmdp-header-plugin.top.small,\r\n  .rmdp-header-plugin.bottom.small {\r\n    height: 55px;\r\n  }\r\n\r\n  .rmdp-header-plugin.left.small,\r\n  .rmdp-header-plugin.right.small {\r\n    width: 55px;\r\n  }\r\n\r\n  .rmdp-header-plugin.big.top .rmdp-hp-dd,\r\n  .rmdp-header-plugin.big.bottom .rmdp-hp-dd,\r\n  .rmdp-header-plugin.small.left .rmdp-hp-dd,\r\n  .rmdp-header-plugin.small.right .rmdp-hp-dd {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .rmdp-header-plugin.medium.top .rmdp-hp-dd,\r\n  .rmdp-header-plugin.medium.bottom .rmdp-hp-dd {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .rmdp-header-plugin.medium.top .rmdp-hp-dddd,\r\n  .rmdp-header-plugin.medium.bottom .rmdp-hp-dddd,\r\n  .rmdp-header-plugin.medium.top .rmdp-hp-my,\r\n  .rmdp-header-plugin.medium.bottom .rmdp-hp-my {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .rmdp-header-plugin.small.top .rmdp-hp-dd,\r\n  .rmdp-header-plugin.small.bottom .rmdp-hp-dd {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .rmdp-header-plugin.small .rmdp-hp-dddd,\r\n  .rmdp-header-plugin.small .rmdp-hp-my {\r\n    font-size: 12px;\r\n  }\r\n}\r\n");var c=["state","position","size","nodes","calendar","locale","className"];r.Z=function(e){var r,n,t=e.state,d=e.position,l=e.size,s=void 0===l?"big":l,h=e.nodes,g=e.calendar,f=void 0===g?t.calendar:g,b=e.locale,k=void 0===b?t.locale:b,E=e.className,x=void 0===E?"":E,P=o(e,c);r=!t.selectedDate||t.multiple||t.range||m(t.selectedDate)?m(t.selectedDate)?t.focused||(n=t.selectedDate)[n.length-1]:new i.default:t.selectedDate,r=new i.default(r).set({calendar:f,locale:k});var y=["rmdp-header-plugin",d,s];return h[d]?y.push("no-border-radius"):["left","right"].includes(d)&&(h.top&&y.push("no-border-top-".concat(d,"-radius")),h.bottom&&y.push("no-border-bottom-".concat(d,"-radius"))),a.default.createElement("div",p({className:"".concat(y.join(" ")," ").concat(x)},function(e){return e.state,e.setState,e.position,e.registerListener,e.calendarProps,e.datePickerProps,e.handleChange,e.nodes,e.Calendar,e.DatePicker,e.handlePropsChange,e.handleFocusedDate,o(e,u)}(P)),a.default.createElement("div",{className:"rmdp-hp-dddd"},r.format("dddd")),a.default.createElement("div",{className:"rmdp-hp-dd"},r.format("DD")),a.default.createElement("div",{className:"rmdp-hp-my"},r.format("MMM YYYY")))}},8706:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var t=n(7294),d=n(2308),l=n(7821),a=n(4724),i=n(6777);function p(e){var r=e.translate,n=e.language,d=e.otherProps,p=e.localeImport,o="en"===n?".\n.\n.\n":p;return[{title:"Props",description:t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,r("Prop")),t.createElement("th",null,r("Type")),t.createElement("th",null,r("Default")))),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("td",null,"position"),t.createElement("td",null,"String"),t.createElement("td",null,'"right"')),t.createElement("tr",null,t.createElement("td",null,"disabled"),t.createElement("td",null,"Boolean"),t.createElement("td",null,"false")),t.createElement("tr",null,t.createElement("td",null,"size"),t.createElement("td",null,"String"),t.createElement("td",null,'"big"')),t.createElement("tr",null,t.createElement("td",null,"calendar"),t.createElement("td",null,"Object"),t.createElement("td",null,"Default DatePicker Calendar")),t.createElement("tr",null,t.createElement("td",null,"locale"),t.createElement("td",null,"Object"),t.createElement("td",null,"Default DatePicker Locale"))))},{title:"Sizes",jsx:t.createElement("ul",null,t.createElement("li",null,"big"),t.createElement("li",null,"medium"),t.createElement("li",null,"small"))},{title:"Header Right",code:'import DatePicker from "react-multi-date-picker"\nimport DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"\n'+o+"<DatePicker\n  plugins={[\n    <DatePickerHeader />\n  ]}\n/>",jsx:t.createElement(l.ZP,Object.assign({plugins:[t.createElement(a.Z,null)]},d))},{title:"Header Left",code:'import DatePicker from "react-multi-date-picker"\nimport DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"\n'+o+'<DatePicker\n  plugins={[\n    <DatePickerHeader position="left" />\n  ]}\n/>',jsx:t.createElement(l.ZP,Object.assign({plugins:[t.createElement(a.Z,{position:"left"})]},d))},{title:"English Calendar with Indian Header",code:'import DatePicker from "react-multi-date-picker"\nimport DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"\nimport gregorian_hi from "react-date-object/locales/gregorian_hi" //(gregorian calendar, hindi locale)\n'+o+'<DatePicker\n  plugins={[\n    <DatePickerHeader \n      locale={gregorian_hi}\n      size="medium" \n    />,\n  ]}\n  calendarPosition="'+("en"===n?"bottom-left":"bottom-right")+'"\n/> ',jsx:t.createElement(l.ZP,{plugins:[t.createElement(a.Z,{locale:i.Z,size:"medium"})],calendarPosition:"en"===n?"bottom-left":"bottom-right"})},{title:"Styling Header",code:'import DatePicker from "react-multi-date-picker"\nimport DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header"\n'+o+'<DatePicker\n  plugins={[\n    <DatePickerHeader \n      position="top" \n      size="small" \n      style={{ backgroundColor: "steelblue" }} \n    />\n  ]}\n/>',jsx:t.createElement(l.ZP,Object.assign({plugins:[t.createElement(a.Z,{position:"top",size:"small",style:{backgroundColor:"steelblue"}})]},d))}]}function o(e){var r=e.pageContext.language||"en";return t.createElement(d.Z,{language:r,doc:p,section:"plugins"})}}}]);
//# sourceMappingURL=component---src-pages-plugins-header-js-91b1541046cefbaa9dd1.js.map