(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[8350],{8256:function(e,t,n){"use strict";var r=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(n(7294));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return e&&e.name?e.name.split("_")[1]:""}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".rmdp-range-picker-footer {\r\n  text-align: left;\r\n  padding: 10px;\r\n}\r\n\r\n.rtl.rmdp-range-picker-footer {\r\n  direction: rtl;\r\n  text-align: right;\r\n}\r\n\r\n.rmdp-range-picker-footer h6 {\r\n  margin: 0;\r\n  white-space: nowrap;\r\n  font-size: 16px;\r\n}\r\n\r\n.right.rmdp-range-picker-footer h6,\r\n.left.rmdp-range-picker-footer h6 {\r\n  width: 100%;\r\n  flex-direction: row;\r\n  padding-top: 5px;\r\n}\r\n\r\n.rmdp-cancel {\r\n  display: inline-block;\r\n  background-color: #bdbcbc;\r\n  border-radius: 50%;\r\n  width: 17px;\r\n  height: 17px;\r\n  line-height: 19px;\r\n  text-align: center;\r\n  transform: rotate(45deg);\r\n  color: white;\r\n  cursor: pointer;\r\n  margin: auto 0;\r\n  margin-right: 7px;\r\n  font-size: 16px;\r\n  font-family: Arial !important;\r\n}\r\n\r\n.rtl .rmdp-cancel {\r\n  margin-right: unset;\r\n  margin-left: 7px;\r\n}\r\n\r\n.rmdp-range-picker-footer span {\r\n  margin-top: auto;\r\n  font-size: 16px;\r\n}\r\n"),t.Z=function(e){var t,n,a,o,i=e.state,s=e.handleChange,d=e.position,u=e.direction,m=void 0===u?["fa","ar"].includes(c(i.date.locale))?"rtl":"ltr":u,p=e.format,f=void 0===p?"rtl"===m?"DD MMMM":"MMMM DD":p,g=e.names,D=e.DatePicker,b=i.selectedDate,h=i.date.locale,E=null===(t=b[0])||void 0===t||null===(n=t.format)||void 0===n?void 0:n.call(t,f),y=null===(a=b[1])||void 0===a||null===(o=a.format)||void 0===o?void 0:o.call(a,f),k=["bottom","top"].includes(d),M={en:{selectedDates:"Selected Dates"+(k?":":""),from:"From:",to:"To:",selectDate:"Select Date",close:"Close",separator:"-"},fa:{selectedDates:"تاریخ انتخابی شما"+(k?":":""),from:"از:",to:"تا:",selectDate:"انتخاب کنید",close:"بستن",separator:"-"}},v=g||M[c(h)]||M.en;return r.default.createElement("div",{className:"rmdp-range-picker-footer ".concat(m," ").concat(d),style:{display:k?"block":"grid",gridTemplateRows:"auto 1fr"}},r.default.createElement("h6",{className:"rmdp-week-day"},v.selectedDates),r.default.createElement("div",{style:{display:k?"flex":"grid",gridTemplateRows:"1fr auto"}},r.default.createElement("div",{className:"rmdp-header-values",style:{flex:"1",display:k?"":"grid"}},r.default.createElement("div",{style:{display:"inline-block"}},r.default.createElement("i",{className:"rmdp-cancel",onClick:function(){return O(0)}},"+"),r.default.createElement("span",null,v.from," ",null!=E?E:v.selectDate)),k&&r.default.createElement("span",{style:{padding:"0px 10px"}},v.separator),r.default.createElement("div",{style:{display:"inline-block"}},r.default.createElement("i",{className:"rmdp-cancel",onClick:function(){return O(1)}},"+"),r.default.createElement("span",null,v.to," ",null!=y?y:v.selectDate))),D&&r.default.createElement("button",{className:"rmdp-button",onClick:function(){return D.closeCalendar()}},v.close)));function O(e){Array.isArray(b)&&(b.splice(e,1),s(b,l(l({},i),{},{selectedDate:b})))}}},3290:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),a=n(2308),l=n(7821),o=n(8256);function c(e){var t=e.translate,n=e.language,a=e.otherProps,c=e.localeImport,i=(0,r.useState)([new l.NT(a).setDay(15),new l.NT(a).add(1,"month").setDay(15)]),s=i[0],d=i[1],u="en"===n?".\n.\n.\n":c;return[{title:"Descriptions",description:"range_picker_footer"},{title:"Props",description:r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,t("Prop")),r.createElement("th",null,t("Type")),r.createElement("th",null,t("Default")))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"position"),r.createElement("td",null,"String"),r.createElement("td",null,'"right"')),r.createElement("tr",null,r.createElement("td",null,"disabled"),r.createElement("td",null,"Boolean"),r.createElement("td",null,"false")),r.createElement("tr",null,r.createElement("td",null,"format"),r.createElement("td",null,"String"),r.createElement("td",null,'Farsi & Arabic locale : "DD MMMM" ',r.createElement("br",null),'English & Indian locale : "MMMM DD"')),r.createElement("tr",null,r.createElement("td",null,"names"),r.createElement("td",null,"Object"),r.createElement("td",null,"English locale"," ",r.createElement("pre",{className:"language-jsx"},r.createElement("code",null,'\n{\n  selectedDates: "Selected Dates:",\n  from: "From:",\n  to: "To:",\n  selectDate: "Select Date",\n  close: "Close",\n  separator: "-",\n}')),r.createElement("br",null),"Farsi locale",r.createElement("pre",{className:"language-jsx"},r.createElement("code",null," ",'\n{\n  selectedDates: "تاریخ انتخابی شما:",\n  from: "از:",\n  to: "تا:",\n  selectDate: "انتخاب کنید",\n  close: "بستن",\n  separator: "-",\n}'))))))},{title:"Default Range Picker Footer",code:'import React, { useState } from "react";\nimport DatePicker, { DateObject } from "react-multi-date-picker";\nimport Footer from "react-multi-date-picker/plugins/range_picker_footer";\n'+u+"const [value, setValue] = useState([\n  new DateObject("+("en"===n?"":"{\n    calendar: persian,\n    locale: persian_fa\n  }")+").setDay(15),\n  new DateObject("+("en"===n?"":"{\n    calendar: persian,\n    locale: persian_fa\n}")+').add(1, "month").setDay(15),\n]);\n.\n.\n.\n<DatePicker\n  value={value}\n  onChange={setValue}\n  range\n  numberOfMonths={2}\n  plugins={[\n    <Footer position="bottom" />\n  ]}\n/>',jsx:r.createElement(l.ZP,Object.assign({value:s,onChange:d,range:!0,numberOfMonths:2,plugins:[r.createElement(o.Z,{position:"bottom"})]},a))},{title:"Custom Names",code:'import React from "react";\nimport { Calendar } from "react-multi-date-picker";\nimport Footer from "react-multi-date-picker/plugins/range_picker_footer";\n'+u+'<Calendar\n  range\n  numberOfMonths={2}\n  plugins={[\n    <Footer\n      position="bottom"\n      format="'+("en"===n?"MMM DD":"dddd DD MMMM")+'"\n      names={{\n        selectedDates: "'+("en"===n?"Flight information:":"اطلاعات پرواز")+'",\n        from: "'+("en"===n?"Departure date:":"تاریخ رفت")+'",\n        to: "'+("en"===n?"Return date:":"تاریخ برگشت")+'",\n        selectDate: "'+("en"===n?"select":"انتخاب نشده")+'",\n        close: "'+("en"===n?"Close":"بستن")+'",\n        separator: "'+("en"===n?",":"،")+'",\n      }}\n    />,\n  ]}\n/>',jsx:r.createElement(l.f,Object.assign({range:!0,numberOfMonths:2,plugins:[r.createElement(o.Z,{position:"bottom",format:"en"===n?"MMM DD":"dddd DD MMMM",names:{selectedDates:"en"===n?"Flight information:":"اطلاعات پرواز",from:"en"===n?"Departure date:":"تاریخ رفت",to:"en"===n?"Return date:":"تاریخ برگشت",selectDate:"en"===n?"select":"انتخاب نشده",close:"en"===n?"Close":"بستن",separator:"en"===n?",":"،"}})]},a))}]}function i(e){var t=e.pageContext.language||"en";return r.createElement(a.Z,{language:t,doc:c,section:"plugins"})}}}]);
//# sourceMappingURL=component---src-pages-plugins-range-picker-footer-js-88be3be0f215ba104f71.js.map