(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[5087],{99:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ne}});var r=t(7294),a=t(316);function o(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var i=t(2327),l=t.n(i),s=t(1446),u=(t(4944),t(7329));function c(e){return Array.isArray(e)}function d(e){var n=e.state.date,t=n.calendar,a=n.locale,o=e.customWeekDays,i=e.weekStartDayIndex,l=e.displayWeekNumbers,d=e.weekNumber,f=(0,r.useMemo)((function(){var e=o;return c(e)&&e.length>=7?(e.length=7,e=e.map((function(e){return c(e)&e.length>1?e=e[1]:c(e)&&(e=e[0]),e}))):e=new s.default({year:1,calendar:t,locale:a}).weekDays.map((function(e){return e.shortName})),e}),[t,a,o]);return f=(0,u.Z)(f).slice(i).concat((0,u.Z)(f).splice(0,i)),r.createElement("div",{className:"rmdp-week"},l&&r.createElement("div",{className:"rmdp-week-day"},d),f.map((function(e,n){return r.createElement("div",{key:n,className:"rmdp-week-day"},e)})))}function f(e,n,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!1),!e||!n)return!1;if(e.year===n.year){if(r)return!0;if(e.monthIndex===n.monthIndex)return!!t||e.day===n.day}}function m(e,n){return void 0===n&&(n="YYYY/MM/DD"),e.format(n)}function p(e,n,t){var r=t.multiple,a=t.range,o=t.selectedDate,i=t.onlyMonthPicker,l=t.onlyYearPicker,d=t.format,p=t.focused,h=t.weekPicker;e.setFormat(d);var v=new s.default(e);return[o=r&&a?function(){var e=!0;c(o)||(o=[[o]]);var n=o.find((function(e){return 1===e.length})),t=i?"YYYY/MM":"YYYY/MM/DD",r=o;if(n){var a=n[0];r=r.filter((function(e){if(1===e.length)return!0;var n=e[0],r=e[1],o=[a,v].sort((function(e,n){return e-n})),i=[n,r,o[0],o[1]].map((function(e){return m(e,t)})),l=i[0],s=i[1],u=i[2],c=i[3];return!(u<=l&&c>=s||u>=l&&c>=s&&u<=s||u<=l&&c<=s&&c>=l)}))}else r=r.filter((function(e){if(!c(e))return!0;if(0===e.length)return!1;var n=[e[0],e[1],v].map((function(e){return m(e,t)})),r=n[0],a=n[1],o=n[2];return!(o>=r&&o<=a)}));r=r.map((function(n){var t;return c(n)?1===n.length?(e=!1,t=n.concat(v)):t=n:(e=!1,t=[n,v]),t.sort((function(e,n){return e-n}))})),e&&(r=[].concat((0,u.Z)(r),[[v]]));return r}():r?function(){var t=o.filter((function(n){return!f(e,n,i,l)}));t.length===o.length?t.push(v):v=t.find((function(e){return f(e,p)}));n&&t.sort((function(e,n){return e-n}));return t}():a?function(){if(h)return[new s.default(v).toFirstOfWeek(),new s.default(v).toLastOfWeek()];if(2===o.length||0===o.length)return[v];if(1===o.length)return[o[0],v].sort((function(e,n){return e-n}))}():v,v]}function h(e,n,t,r){var a=[],o=t?"YYYY/MM":"YYYY/MM/DD",i=m(e,o);function l(n){var r=n[0],l=n[1];if(1===n.length)f(e,r,t)&&a.push("rmdp-range");else if(2===n.length){var s=[r,l].map((function(e){return m(e,o)})),u=s[0],c=s[1];i>=u&&i<=c&&a.push("rmdp-range"),i===u&&a.push("start"),i===c&&a.push("end")}}return r?(c(n)?n:[[n]]).forEach(l):l(n),a.join(" ")}function v(e,n,t,r,a){void 0===a&&(a="day");var o=[];if(r&&1===(null==n?void 0:n.length)&&t){var i="day"===a?"YYYY/MM/DD":"YYYY/MM",l=t.format(i),s=n[0].format(i),u=e.format(i);(u>s&&u<=l||u<s&&u>=l)&&(o.push("rmdp-range-hover"),u===l&&o.push(l>s?"end":"start"))}return o}function y(e){var n=e.state,t=e.onChange,a=e.showOtherDays,o=void 0!==a&&a,i=e.mapDays,l=e.onlyShowInRangeDates,u=e.customWeekDays,c=e.sort,m=e.numberOfMonths,y=e.isRTL,g=e.weekStartDayIndex,b=e.handleFocusedDate,k=e.hideWeekDays,D=e.fullYear,w=e.monthAndYears[0],O=e.displayWeekNumbers,E=e.weekNumber,N=void 0===E?"":E,C=e.rangeHover,Y=e.highlightToday,M=(0,r.useRef)({}),P=n.today,S=n.minDate,x=n.maxDate,I=n.range,j=n.multiple,R=n.date,L=n.selectedDate,T=n.onlyMonthPicker,F=n.onlyYearPicker,A=!T&&!F,_=(0,r.useState)(),V=_[0],W=_[1];M.current.date=R;var B=(0,r.useMemo)((function(){return A?function(e,n,t,r){if(!e)return[];for(var a=[],o=0;o<t;o++){var i=(e=new s.default(e).toFirstOfMonth()).monthIndex,l=[];e.toFirstOfWeek().add(r,"day"),e.monthIndex===i&&e.day>1&&e.subtract(7,"days");for(var u=0;u<6;u++){for(var c=[],d=0;d<7;d++)c.push({date:new s.default(e),day:e.format("D"),current:e.monthIndex===i}),e.day+=1;if(l.push(c),u>2&&e.monthIndex!==i&&!n)break}a.push(l)}return a}(M.current.date,o,m,g):[]}),[R.monthIndex,R.year,R.calendar,R.locale,A,o,m,g]);return A&&r.createElement("div",{className:"rmdp-day-picker "+(D?"rmdp-full-year":""),style:{display:D?"grid":"flex"},onMouseLeave:function(){return C&&W()}},B.map((function(e,a){var E;return r.createElement("div",{key:a,style:(E={},E[y?"marginLeft":"marginRight"]=a+(D?0:1)<m?"10px":"",E)},D&&r.createElement("div",{className:"rmdp-month-name"},w[a]),!k&&r.createElement(d,{state:n,customWeekDays:u,weekStartDayIndex:g,displayWeekNumbers:O,weekNumber:N}),e.map((function(e,u){return r.createElement("div",{key:u,className:"rmdp-week"},O&&r.createElement("div",{className:"rmdp-day rmdp-disabled"},r.createElement("span",null,e[0].date.format("WW"))),e.map((function(e,u){var d=function(e){if(!e.current&&!o)return{};var t={};return i.forEach((function(r){var a,o=r({date:e.date,today:P,currentMonth:n.date.month,selectedDate:n.selectedDate,isSameDate:f});(null===(a=o)||void 0===a?void 0:a.constructor)!==Object&&(o={}),(o.disabled||o.hidden)&&(e.disabled=!0),o.hidden&&(e.hidden=!0),t=Object.assign({},t,o)})),delete t.disabled,delete t.hidden,t}(e={date:e.date,day:e.day,current:e.current}),y=H(e)&&!e.disabled,g=y?"sd":"",k=d.children;y&&(g=g+" "+(d.className||"")),delete d.className,delete d.children;var D=function(e,n){var t=["rmdp-day"],r=e.date,a=e.hidden,o=e.current;if(!H(e)||a)t.push("rmdp-day-hidden");else{(S&&r<S||x&&r>x||e.disabled)&&(t.push("rmdp-disabled"),e.disabled||(e.disabled=!0)),o||t.push("rmdp-deactive");var i=n>1&&o||1===n;e.disabled&&l||(f(r,P)&&Y&&t.push("rmdp-today"),s=r,[].concat(L).some((function(e){return f(e,s)}))&&i&&!I&&t.push("rmdp-selected")),I&&!e.disabled&&i&&(t.push(h(r,L,void 0,j)),j||(t=t.concat(v(r,L,V,C))))}var s;return t.join(" ")}(e,m);return(e.hidden||e.disabled)&&(g=g.replace("sd","")),r.createElement("div",{key:u,className:D,onMouseEnter:function(){return C&&W(e.date)},onClick:function(){H(e)&&!e.disabled&&function(e,r,a){var o,i,l,u=e.date,d=e.current,f=n.selectedDate,m=n.focused,h=n.date,v=h,y=v.hour,g=v.minute,k=v.second;u.set({hour:(null===(o=f)||void 0===o?void 0:o.hour)||y,minute:(null===(i=f)||void 0===i?void 0:i.minute)||g,second:(null===(l=f)||void 0===l?void 0:l.second)||k}),1!==a||d?a>1&&!d&&(0===r&&u<h&&(h=new s.default(h).toFirstOfMonth()),r>0&&u.monthIndex>h.monthIndex+r&&r+1===a&&(h=new s.default(h).toFirstOfMonth().add(1,"month"))):h=new s.default(h).toFirstOfMonth();var D=p(u,c,n);f=D[0],m=D[1],t(f,Object.assign({},n,{date:h,focused:m,selectedDate:f})),b(m,u)}(e,a,m)}},r.createElement("span",Object.assign({className:g},d),H(e)&&!e.hidden?null!=k?k:e.day:""))})))})))})));function H(e){return!!e.current||o}}function g(e){var n=e.direction,t=e.onClick,a=e.disabled;return r.createElement("span",{className:"rmdp-arrow-container "+n+" "+(a?"disabled":""),onClick:t},r.createElement("i",{className:"rmdp-arrow"}))}function b(e){var n=e.state,t=e.setState,a=e.disableYearPicker,o=e.disableMonthPicker,i=e.buttons,l=e.renderButton,s=e.handleMonthChange,u=e.disabled,c=e.hideMonth,d=e.hideYear,f=e.isRTL,m=e.fullYear,p=e.monthAndYears,h=p[0],v=p[1],y=e.monthYearSeparator,b=e.formatMonth,k=e.formatYear,D=e.headerOrder,w={},O=n.date,E=n.onlyMonthPicker,N=n.onlyYearPicker,C=n.mustShowYearPicker,Y=n.minDate,M=n.maxDate,P=n.year,S=n.today,x=Y&&O.year<=Y.year&&Y.monthIndex>O.monthIndex-1,I=M&&O.year>=M.year&&M.monthIndex<O.monthIndex+1,j=S.year+7;if(j-=12*Math.floor((j-P)/12),(c||m)&&d&&!i)return null;if((E||m)&&(Y&&Y.year>=O.year&&(x=!0),M&&M.year<=O.year&&(I=!0)),C||N){var R=j-11;x=Y&&Y.year>R,I=M&&M.year<j}return u&&(x=!0,I=!0),r.createElement("div",{className:"rmdp-header"},r.createElement("div",{style:{position:"relative",display:"flex",alignItems:"center"}},Array.from(new Set(D)).map((function(e,n){return r.createElement(r.Fragment,{key:n},function(e){switch(e){case"LEFT_BUTTON":return i&&T("left");case"RIGHT_BUTTON":return i&&T("right");case"MONTH_YEAR":case"YEAR_MONTH":if(m)return r.createElement("div",{className:"rmdp-header-values",style:w},!d&&O.format("YYYY"));var n=e.split("_").filter((function(e){return"MONTH"===e&&!c||"YEAR"===e&&!d}));return h.map((function(e,t){return r.createElement("div",{key:t,className:"rmdp-header-values",style:w},n.length>0&&n.map((function(n,i){return r.createElement(r.Fragment,{key:i},function(e,n,t){return"MONTH"===e?!c&&r.createElement(r.Fragment,null,r.createElement("span",{style:{cursor:u||o||E?"default":"pointer"},onClick:function(){return!o&&A("mustShowMonthPicker")}},function(e,n){return"function"==typeof b?b(e,n):e}(n,v[t]))):!d&&r.createElement("span",{style:{cursor:u||a||N?"default":"pointer"},onClick:function(){return!a&&A("mustShowYearPicker")}},function(e,n){return"function"==typeof b?k(e,n):e}(v[t],n))}(n,e,t))})).reduce((function(e,n){return[e,L(),n]})))}))}}(e))}))));function L(){return y?r.createElement("span",null,y):f?"،":","}function T(e){var n=function(){return F("right"===e?1:-1)},t="left"===e&&x||"right"===e&&I;return l instanceof Function?l(e,n,t):(0,r.isValidElement)(l)?(0,r.cloneElement)(l,{direction:e,handleClick:n,disabled:t}):r.createElement(g,{direction:"rmdp-"+e,onClick:n,disabled:t})}function F(e){u||e<0&&x||e>0&&I||(m?O.year+=e:C||N?(P+=12*e,e<0&&Y&&P<Y.year&&(P=Y.year),e>0&&M&&P>M.year&&(P=M.year)):(O.toFirstOfMonth(),E?O.year+=e:(O.month+=e,s(O))),t(Object.assign({},n,{date:O,year:P})))}function A(e){if(!u){var r={mustShowMonthPicker:!1,mustShowYearPicker:!1};r[e]=!n[e],t(Object.assign({},n,r))}}}function k(e){return c(e)||(e=[]),JSON.stringify(e)}function D(e){var n=e.state,t=e.onChange,a=e.customMonths,o=e.sort,i=e.handleMonthChange,l=e.handleFocusedDate,u=e.rangeHover,d=e.highlightToday,m=n.date,y=n.today,g=n.minDate,b=n.maxDate,D=n.calendar,w=n.locale,O=n.onlyMonthPicker,E=n.onlyYearPicker,N=n.range,C=n.onlyShowInRangeDates,Y=(n.mustShowMonthPicker||O)&&!E,M=(0,r.useState)(),P=M[0],S=M[1];a=a&&k(a);var x=(0,r.useMemo)((function(){var e=a&&JSON.parse(a),t=[],r=0,o=new s.default({calendar:D,locale:w,format:n.date._format,year:n.date.year,month:1,day:1});c(e)&&e.length>=12?(e.length=12,e=e.map((function(e){return c(e)?e[0]:e}))):e=o.locale.months.map((function(e){return e[0]}));for(var i=0;i<4;i++){for(var l=[],u=0;u<3;u++)l.push({date:new s.default(o),name:e[r]}),r++,o.add(1,"month");t.push(l)}return t}),[D,w,a,n.date.year,n.date._format]);return r.createElement("div",{className:(O?"only ":"")+"rmdp-month-picker",style:{display:Y?"block":"none"},onMouseLeave:function(){return u&&S()}},x.map((function(e,n){return r.createElement("div",{key:n,className:"rmdp-ym"},e.map((function(e,n){var t=e.date,a=e.name;return r.createElement("div",{key:n,className:j(t),onClick:function(){return I(t)},onMouseEnter:function(){return u&&S(t)}},r.createElement("span",{className:O?"sd":""},a))})))})));function I(e){var r=n.selectedDate,a=n.focused,s=e.year,u=e.monthIndex;if(!(g&&s<=g.year&&u<g.monthIndex||b&&s>=b.year&&u>b.monthIndex)){if(m.setMonth(u+1),O){var c=p(e,o,n);r=c[0],a=c[1]}else i(m);t(O?r:void 0,Object.assign({},n,{date:m,focused:a,selectedDate:r,mustShowMonthPicker:!1})),O&&l(a,e)}}function j(e){var t=["rmdp-day"],r=e.year,a=e.monthIndex,o=n.selectedDate,i=n.multiple;if((g&&(r<g.year||r===g.year&&a<g.monthIndex)||b&&(r>b.year||r===b.year&&a>b.monthIndex))&&t.push("rmdp-disabled"),!t.includes("rmdp-disabled")||!C)return f(y,e,!0)&&d&&t.push("rmdp-today"),O?N?(t.push(h(e,o,!0,i)),i||(t=t.concat(v(e,o,P,u,"month")))):[].concat(o).some((function(n){return f(n,e,!0)}))&&t.push("rmdp-selected"):m.monthIndex===a&&t.push("rmdp-selected"),t.join(" ")}}function w(e,n){return e.replace(/[0-9]/g,(function(e){return n[e]}))}function O(e){var n=e.state,t=e.onChange,a=e.sort,o=e.handleFocusedDate,i=e.onYearChange,l=e.rangeHover,u=e.highlightToday,d=n.date,f=n.today,m=n.minDate,h=n.maxDate,v=n.onlyYearPicker,y=n.range,g=n.onlyShowInRangeDates,b=n.year,k=n.mustShowYearPicker||v,D=d.digits,O=(0,r.useState)(),E=O[0],N=O[1],C=f.year-4;C-=12*Math.ceil((C-b)/12);var Y=(0,r.useMemo)((function(){for(var e=[],n=C,t=0;t<4;t++){for(var r=[],a=0;a<3;a++)r.push(n),n++;e.push(r)}return e}),[C]);return r.createElement("div",{className:(v?"only ":"")+"rmdp-year-picker",style:{display:k?"block":"none"}},Y.map((function(e,u){return r.createElement("div",{key:u,className:"rmdp-ym",onMouseLeave:function(){return l&&N()}},e.map((function(e,u){return r.createElement("div",{key:u,className:M(e),onClick:function(){return function(e){if(P(e))return;var r=new s.default(n.date).setYear(e),l=n.selectedDate,u=n.focused;if(v){var c=p(r,a,n);l=c[0],u=c[1]}else m&&r.monthIndex<m.monthIndex?r=r.setMonth(m.monthIndex+1):h&&r.monthIndex>h.monthIndex&&(r=r.setMonth(h.monthIndex+1)),null==i||i(r);t(v?l:void 0,Object.assign({},n,{date:r,focused:u,selectedDate:l,mustShowYearPicker:!1})),v&&o(u,r)}(e)},onMouseEnter:function(){return l&&N(e)}},r.createElement("span",{className:v?"sd":""},w(e.toString(),D)))})))})));function M(e){var t=["rmdp-day"],r=n.date,a=n.selectedDate,o=n.multiple;if(P(e)&&t.push("rmdp-disabled"),!t.includes("rmdp-disabled")||!g){if(f.year===e&&u&&t.push("rmdp-today"),v)if(y){var i=function(n){var r=n[0],a=n[1];if(1===n.length){if(e===r.year&&t.push("rmdp-range"),l){var o=n[0].year;(e>o&&e<=E||e<o&&e>=E)&&(t.push("rmdp-range-hover"),e===E&&t.push(E>o?"end":"start"))}}else 2===n.length&&(e>=r.year&&e<=a.year&&t.push("rmdp-range"),e===r.year&&t.push("start"),e===a.year&&t.push("end"))};o?(c(a)?a:[[a]]).forEach((function(e){return i(e)})):i(a)}else[].concat(a).some((function(n){return n&&n.year===e}))&&t.push("rmdp-selected");else e===r.year&&t.push("rmdp-selected");return t.join(" ")}}function P(e){return m&&e<m.year||h&&e>h.year}}function E(e,n,t){return t||(e?"MM/YYYY":n?"YYYY":"YYYY/MM/DD")}function N(e,n){return e instanceof s.default?e.setCalendar(n):e=new s.default({date:e,calendar:n}),e}function C(e){"_self"in r.createElement("div")&&console.warn(e.join("\n"))}var Y=new s.default,M=Y.calendar,P=Y.locale;function S(e,n){return e&&e.constructor!==Object&&(C(x("calendar")),e=void 0),n&&n.constructor!==Object&&(C(x("locale")),n=void 0),[e||M,n||P]}function x(e){return[e+" must be an object","https://shahabyazdi.github.io/react-multi-date-picker/calendars/"]}function I(e){return e&&e.name?e.name.split("_")[1]:""}function j(e){return["fa","ar"].includes(I(e))}var R=["value","calendar","locale","format","onlyMonthPicker","onlyYearPicker","range","multiple","className","role","weekDays","months","children","onChange","showOtherDays","minDate","maxDate","mapDays","disableMonthPicker","disableYearPicker","formattingIgnoreList","onReady","onlyShowInRangeDates","zIndex","plugins","sort","numberOfMonths","currentDate","digits","buttons","renderButton","weekStartDayIndex","disableDayPicker","onPropsChange","onMonthChange","onYearChange","onFocusedDateChange","readOnly","disabled","hideMonth","hideYear","hideWeekDays","shadow","fullYear","displayWeekNumbers","weekNumber","weekPicker","rangeHover","monthYearSeparator","formatMonth","formatYear","highlightToday","headerOrder","style"],L=["datePickerProps","DatePicker"],T=["DatePicker","datePickerProps"];function F(e,n){var t,a=e.value,i=e.calendar,l=e.locale,u=e.format,d=e.onlyMonthPicker,f=e.onlyYearPicker,m=e.range,p=void 0!==m&&m,h=e.multiple,v=void 0!==h&&h,g=e.className,N=e.role,C=e.weekDays,Y=e.months,M=e.children,P=e.onChange,x=e.showOtherDays,I=e.minDate,T=e.maxDate,F=e.mapDays,A=e.disableMonthPicker,B=e.disableYearPicker,H=e.formattingIgnoreList,U=e.onReady,z=e.onlyShowInRangeDates,J=void 0===z||z,K=e.zIndex,q=void 0===K?100:K,Z=e.plugins,$=void 0===Z?[]:Z,G=e.sort,Q=e.numberOfMonths,X=void 0===Q?1:Q,ee=e.currentDate,ne=e.digits,te=e.buttons,re=void 0===te||te,ae=e.renderButton,oe=e.weekStartDayIndex,ie=void 0===oe?0:oe,le=e.disableDayPicker,se=e.onPropsChange,ue=e.onMonthChange,ce=e.onYearChange,de=e.onFocusedDateChange,fe=e.readOnly,me=e.disabled,pe=e.hideMonth,he=e.hideYear,ve=e.hideWeekDays,ye=e.shadow,ge=void 0===ye||ye,be=e.fullYear,ke=e.displayWeekNumbers,De=e.weekNumber,we=e.weekPicker,Oe=e.rangeHover,Ee=e.monthYearSeparator,Ne=e.formatMonth,Ce=e.formatYear,Ye=e.highlightToday,Me=void 0===Ye||Ye,Pe=e.headerOrder,Se=void 0===Pe?["LEFT_BUTTON","MONTH_YEAR","RIGHT_BUTTON"]:Pe,xe=e.style,Ie=void 0===xe?{}:xe,je=o(e,R);!ee||ee instanceof s.default||(console.warn("currentDate must be instance of DateObject"),ee=void 0),("number"!=typeof ie||ie<0||ie>6)&&(ie=0),("number"!=typeof X||X<1||d||f)&&(X=1),!(v||p||c(a))||p||v||(v=!0),we&&(p=!0,v=!1),be&&(X=12,d=!1,f=!1),f&&!pe&&(pe=!0);var Re=S(i,l);i=Re[0],l=Re[1],u=E(d,f,u),H=k(H),F=[].concat(F).filter(Boolean),$=[].concat.apply([],$);var Le=(0,r.useState)({}),Te=Le[0],Fe=Le[1],Ae={},_e=(0,r.useRef)({mustCallOnReady:!0,currentDate:ee});(0,r.useEffect)((function(){Fe((function(e){var n=_e.current.currentDate,t=e.date,r=e.selectedDate,o=e.initialValue,m=e.focused,h=e.mustSortDates;function y(e){if(e)return e.calendar.name!==i.name&&e.setCalendar(i),e.locale.name!==l.name&&e.setLocale(l),e._format!==u&&e.setFormat(u),e.digits=ne,e.ignoreList=JSON.parse(H),e}function g(e){return new s.default(n||e)}if(a)if(c(r=V(a,i,l,u)))t||(t=g(r.flat()[0]));else if(t&&1!==X){var b=new s.default(t).toFirstOfMonth(),k=new s.default(t).add(X-1,"months").toLastOfMonth();(r<b||r>k)&&(t=new s.default(r))}else t=g(r);else t||(t=g({calendar:i,locale:l,format:u})),o&&(r=void 0);if([].concat(r).flat().forEach(y),y(t),v||p||c(a)){if(r||(r=[]),c(r)||(r=v&&p?[[r]]:[r]),p&&!v&&r.length>2){var D=r[r.length-1];r=[r[0],D],m=D}v&&!p&&G&&!h?(h=!0,r.sort((function(e,n){return e-n}))):p&&!v&&r.sort((function(e,n){return e-n}))}else c(r)&&(r=r.flat()[r.length-1]);return be&&t.toFirstOfYear(),delete _e.current.currentDate,Object.assign({},e,{date:t,selectedDate:r,multiple:v,range:p,onlyMonthPicker:d,onlyYearPicker:f,initialValue:e.initialValue||a,value:a,focused:m,calendar:i,locale:l,format:u,mustSortDates:h,year:t.year,today:y(e.today)||new s.default({calendar:i}),weekPicker:we})}))}),[a,i,l,u,d,f,p,v,G,X,ne,H,be,we]),(0,r.useEffect)((function(){(I||T)&&Fe((function(e){var n=e.calendar,t=e.locale,r=e.format,o=_(V(a,n,t,r),I,T,n),i=o[0],l=o[1],s=o[2];return Object.assign({},e,{inRangeDates:J?i:e.selectedDate,minDate:l,maxDate:s})}))}),[I,T,J,a]),Te.today&&!_e.current.isReady&&(_e.current.isReady=!0),(0,r.useEffect)((function(){_e.current.isReady&&_e.current.mustCallOnReady&&U instanceof Function&&(_e.current.mustCallOnReady=!1,U())}),[_e.current.isReady,U]);var Ve="rmdp-top-class "+Xe(["top","bottom"]),We={top:[],bottom:[],left:[],right:[]},Be=j(null===(t=Te.date)||void 0===t?void 0:t.locale),He={state:Te,setState:Fe,onChange:Ze,sort:G,handleFocusedDate:Ge,isRTL:Be,fullYear:be,monthAndYears:tn(),rangeHover:Oe,highlightToday:Me},Ue=arguments[0],ze=Ue.datePickerProps,Je=Ue.DatePicker,Ke=o(Ue,L);return qe(),Te.today?r.createElement("div",Object.assign({ref:nn,role:N||"dialog",className:"rmdp-wrapper rmdp-"+(ge?"shadow":"border")+" "+(g||""),style:Object.assign({zIndex:q},Ie)},W(je)),We.top,r.createElement("div",{style:{display:"flex"},className:Ve},We.left,!le&&r.createElement("div",{className:"rmdp-calendar "+(Be?"rmdp-rtl":"")+" "+Xe(["left","right"])},r.createElement(b,Object.assign({},He,{disableYearPicker:B,disableMonthPicker:A,buttons:re,renderButton:ae,handleMonthChange:Qe,disabled:me,hideMonth:pe,hideYear:he,monthYearSeparator:Ee,formatMonth:Ne,formatYear:Ce,headerOrder:Se})),r.createElement("div",{style:{position:"relative"}},r.createElement(y,Object.assign({},He,{showOtherDays:x,mapDays:F,onlyShowInRangeDates:J,customWeekDays:C,numberOfMonths:X,weekStartDayIndex:ie,hideWeekDays:ve,displayWeekNumbers:ke,weekNumber:De})),!be&&r.createElement(r.Fragment,null,!A&&r.createElement(D,Object.assign({},He,{customMonths:Y,handleMonthChange:Qe})),!B&&r.createElement(O,Object.assign({},He,{onYearChange:ce}))))),We.right),We.bottom,M):null;function qe(){if(_e.current.isReady&&c($)){var e={state:Te,setState:Fe,registerListener:en,calendarProps:Ke,datePickerProps:ze,handleChange:Ze,Calendar:_e.current.Calendar,DatePicker:Je,handlePropsChange:$e,handleFocusedDate:function(e){return Ge(e)}},n=function(e){return le?"bottom":e.props.position||"right"};$.forEach((function(t,a){if("string"!=typeof t.type){var o={},i=n(t);if(We[i]&&!t.props.disabled){for(var l=0;l<$.length;l++)if("string"!=typeof $[l].type&&!$[l].props.disabled){if(4===Object.keys(o).length)break;var s=n($[l]);["top","bottom"].includes(i)?(s===i&&l>a&&(o.bottom=!0),s===i&&l<a&&(o.top=!0)):(Ve.includes("border-top")&&(o.top=!0),Ve.includes("border-bottom")&&(o.bottom=!0),s===i&&l>a&&(o.right=!0),s===i&&l<a&&(o.left=!0))}We[i].push((0,r.cloneElement)(t,Object.assign({key:a,position:i,nodes:o},e)))}}else"mapDays"===t.type&&F.push(t.fn(e))}))}}function Ze(e,n){if(!me){if(e||null===e){if(fe)return;Ae.change&&Ae.change.forEach((function(n){return n(e)}))}if(e||null===e){var t=null==P?void 0:P(e);n&&!1!==t&&Fe(n)}else n&&Fe(n);$e({value:e})}}function $e(e){var n;if(void 0===e&&(e={}),!fe&&!me){var t=Object.assign({},Ke,ze,e,{value:null!==(n=e.value)&&void 0!==n?n:Te.selectedDate});delete t.onPropsChange,null==se||se(t)}}function Ge(e,n){fe||me||null==de||de(e,n)}function Qe(e){null==ue||ue(e)}function Xe(e){return le||!c($)?"":Array.from(new Set($.map((function(n){if(!n.props)return"";var t=n.props.position||"right";return e.includes(t)&&!n.props.disabled?"rmdp-border-"+t:""})))).join(" ")}function en(e,n){Ae[e]||(Ae[e]=[]),Ae[e].push(n)}function nn(e){if(e&&(e.date=Te.date,e.set=function(e,n){me||Fe(Object.assign({},Te,{date:new s.default(Te.date.set(e,n))}))}),_e.current.Calendar=e,n instanceof Function)return n(e);n&&(n.current=e)}function tn(){var e=Te.date;if(!e)return[];for(var n=[],t=[],r=e.digits,a=0;a<X;a++){var o=void 0,i=e.year,l=e.monthIndex+a;if(l>11&&(l-=12,i++),c(Y)&&Y.length>=12){var s=Y[l];o=c(s)?s[0]:s}else o=e.months[l].name;i=w(i.toString(),r),n.push(o),t.push(i)}return[n,t]}}var A=(0,r.forwardRef)(F);function _(e,n,t,r){return n&&(n=N(n,r).set({hour:0,minute:0,second:0,millisecond:0})),t&&(t=N(t,r).set({hour:23,minute:59,second:59,millisecond:999})),c(e)&&(e=e.filter((function(e){return!(n&&e<n)&&!(t&&e>t)}))),[e,n,t]}function V(e,n,t,r){var a=[].concat(e).map((function(e){return c(e)?e.map(o).filter(i):o(e)})).filter(i);return c(e)?a:a.flat()[0];function o(e){return e?e instanceof s.default?e:new s.default({date:e,calendar:n,locale:t,format:r}):{}}function i(e){return c(e)||e.isValid}}function W(e){e.DatePicker,e.datePickerProps;return o(e,T)}var B=["value","calendar","locale","format","onlyMonthPicker","onlyYearPicker","onChange","range","multiple","name","id","title","placeholder","required","style","className","inputClass","disabled","render","weekDays","months","children","inputMode","scrollSensitive","hideOnScroll","minDate","maxDate","formattingIgnoreList","containerClassName","calendarPosition","editable","onOpen","onClose","arrowClassName","zIndex","arrow","fixMainPosition","onPositionChange","onPropsChange","digits","readOnly","shadow","onFocusedDateChange","type","weekPicker","mobileLabels","onOpenPickNewDate","mobileButtons","dateSeparator","multipleRangeSeparator"],H=["label"];function U(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function J(e,n){var t=e.value,a=e.calendar,i=e.locale,u=e.format,d=e.onlyMonthPicker,f=e.onlyYearPicker,m=e.onChange,p=e.range,h=void 0!==p&&p,v=e.multiple,y=void 0!==v&&v,g=e.name,b=e.id,D=e.title,O=e.placeholder,N=e.required,C=e.style,Y=void 0===C?{}:C,M=e.className,P=void 0===M?"":M,x=e.inputClass,R=e.disabled,L=e.render,T=e.weekDays,F=e.months,_=e.children,V=e.inputMode,W=e.scrollSensitive,z=void 0===W||W,J=e.hideOnScroll,Z=e.minDate,$=e.maxDate,G=e.formattingIgnoreList,Q=e.containerClassName,X=void 0===Q?"":Q,ee=e.calendarPosition,ne=void 0===ee?"bottom-left":ee,te=e.editable,re=void 0===te||te,ae=e.onOpen,oe=e.onClose,ie=e.arrowClassName,le=void 0===ie?"":ie,se=e.zIndex,ue=void 0===se?100:se,ce=e.arrow,de=void 0===ce||ce,fe=e.fixMainPosition,me=e.onPositionChange,pe=e.onPropsChange,he=e.digits,ve=e.readOnly,ye=e.shadow,ge=void 0===ye||ye,be=e.onFocusedDateChange,ke=e.type,De=e.weekPicker,we=e.mobileLabels,Oe=e.onOpenPickNewDate,Ee=void 0===Oe||Oe,Ne=e.mobileButtons,Ce=void 0===Ne?[]:Ne,Ye=e.dateSeparator,Me=e.multipleRangeSeparator,Pe=void 0===Me?",":Me,Se=o(e,B),xe=(0,r.useState)(),Ie=xe[0],je=xe[1],Re=(0,r.useState)(),Le=Re[0],Te=Re[1],Fe=(0,r.useState)(""),Ae=Fe[0],_e=Fe[1],Ve=(0,r.useState)(!1),We=Ve[0],Be=Ve[1],He=(0,r.useState)(!1),Ue=He[0],ze=He[1],Je=(0,r.useRef)(),Ke=(0,r.useRef)(),qe=(0,r.useRef)(),Ze=(0,r.useRef)({}),$e=Ye||(h||De?" ~ ":", "),Ge=arguments[0],Qe=on(),Xe=(0,r.useCallback)((function(){if(!1!==(null==oe?void 0:oe())){var e=q(Ke);if(e&&e.blur(),Ze.current.mobile){var n=qe.current.parentNode.parentNode;n.classList.remove("rmdp-calendar-container-mobile"),n.style.position="absolute",n.style.visibility="hidden"}Be(!1),ze(!1)}}),[oe]),en=[{type:"button",className:"rmdp-button rmdp-action-button",onClick:function(){Te(void 0),Xe()},label:sn("CANCEL")},{type:"button",className:"rmdp-button rmdp-action-button",onClick:function(){Le&&(dn(Le,!0),Te(void 0)),Xe()},label:sn("OK")}];Qe&&!Ze.current.mobile&&(Ze.current=Object.assign({},Ze.current,{mobile:!0})),!Qe&&Ze.current.mobile&&(Ze.current=Object.assign({},Ze.current,{mobile:!1})),G=k(G),u=E(d,f,u);var nn=S(a,i);return a=nn[0],i=nn[1],(0,r.useEffect)((function(){function e(e){if(We&&!Ze.current.mobile){var n=[];if([Ke.current,qe.current].forEach((function(t){!t||t.contains(e.target)||e.target.classList.contains("b-deselect")||n.push(t)})),2===n.length)return Xe();qe.current&&qe.current.contains(e.target)&&(Je.current.removeTransition(),Je.current.refreshPosition())}}function n(){J&&We&&Xe()}return document.addEventListener("click",e,!1),document.addEventListener("scroll",n,!0),function(){document.removeEventListener("click",e,!1),document.removeEventListener("scroll",n,!0)}}),[Xe,n,We,J]),(0,r.useEffect)((function(){var e=t,n=Ze.current,r=n.date,o=n.initialValue,l=function(){return e[e.length-1]};function d(e){if(e)return e instanceof s.default||(e=new s.default({date:e,calendar:a,locale:i,format:u})),e.calendar!==a&&e.setCalendar(a),e.set({weekDays:T,months:F,digits:he,locale:i,format:u,ignoreList:JSON.parse(G)}),e}t||o||!r?o&&!t&&(o=void 0):e=r;var f="";if(h||y||c(e)){var m=function(e){return e=e.map(d).filter((function(e){return void 0!==e})),h&&e.length>2&&(e=[e[0],l()]),[e,K(e,$e)]};if(c(e)||(e=h&&y?e?[[e]]:[]:[e]),y&&h)e=e.map((function(n,t){var r=m(c(n)?n:[n]),a=r[0],o=r[1];return f+=o+(t<e.length-1?" "+Pe+" ":""),a}));else{var p=m(e);e=p[0],f=p[1]}f=f.toString().replace(/\s,\s$/,"")}else c(e)&&(e=l()),(e=d(e))&&(f=e.format());document.activeElement!==q(Ke)&&_e(f),Ze.current=Object.assign({},Ze.current,{date:e,separator:$e,initialValue:o||t}),Ze.current.mobile&&Je.current.isOpen?Te(e):je(e)}),[t,a,i,u,h,y,$e,d,f,T,F,he,G]),(0,r.useEffect)((function(){var e=Ze.current.selection;if(e){var n=q(Ke);n&&(n.setSelectionRange(e,e),Ze.current.selection=void 0,Je.current.refreshPosition())}}),[Ae]),(y||h||c(Ie)||!re)&&(V="none"),r.createElement(l(),Object.assign({ref:tn,element:rn(),popper:We&&an(),active:!Qe&&Ue,position:ne,arrow:!Qe&&de,fixMainPosition:!z||fe,zIndex:ue,onChange:!Qe&&me,containerClassName:"rmdp-container "+X,arrowClassName:["rmdp-ep-arrow","rmdp-ep-"+(ge?"shadow":"border"),P,le].join(" ")},Se));function tn(e){if(e&&(e.openCalendar=function(){return setTimeout((function(){return un()}),10)},e.closeCalendar=Xe,e.isOpen=We&&Ue),Je.current=e,n instanceof Function)return n(e);n&&(n.current=e)}function rn(){return L?r.createElement("div",{ref:Ke},(0,r.isValidElement)(L)?(0,r.cloneElement)(L,{value:Ae,openCalendar:un,onFocus:un,handleValueChange:fn,onChange:fn,locale:i,separator:$e}):L instanceof Function?L(Ae,un,fn,i,$e):null):r.createElement("input",{ref:Ke,type:ke||"text",name:g,id:b,title:D,required:N,onFocus:un,className:x||"rmdp-input",placeholder:O,value:Ae,onChange:fn,style:Y,autoComplete:"off",disabled:!!R,inputMode:V||(Qe?"none":void 0),readOnly:ve})}function an(){return r.createElement(A,Object.assign({ref:qe,value:Le||Ie,onChange:dn,range:h,multiple:y,calendar:a,locale:i,format:u,onlyMonthPicker:d,onlyYearPicker:f,className:P+(Qe?" rmdp-mobile":""),weekDays:T,months:F,digits:he,minDate:Z,maxDate:$,formattingIgnoreList:JSON.parse(G),onPropsChange:pe,shadow:ge,onReady:mn,DatePicker:Je.current,datePickerProps:Ge,onFocusedDateChange:pn,weekPicker:De},Se),_,Qe&&ln())}function on(){return"string"==typeof P&&P.includes("rmdp-mobile")}function ln(){var e=[].concat.apply([],Ge.plugins||[]).some((function(e){var n=e.props;return!(void 0===n?{}:n).disabled}));return c(Ce)&&r.createElement("div",{className:"rmdp-action-buttons "+(j(i)?"rmdp-rtl":"")+" "+(e?"rmdp-border-top":"")},Ce.concat(en).map((function(e,n){var t=e.label,a=o(e,H);return r.createElement("button",Object.assign({key:n},a),t)})))}function sn(e){var n,t=i||(new s.default).locale;if("string"!=typeof t.name)return e;return(null==we?void 0:we[e])||(null===(n={en:{OK:"OK",CANCEL:"CANCEL"},fa:{OK:"تأیید",CANCEL:"لغو"},ar:{OK:"تأكيد",CANCEL:"الغاء"},hi:{OK:"पुष्टि",CANCEL:"रद्द करें"}}[I(t)])||void 0===n?void 0:n[e])||e}function un(){if(!R&&!ve&&!1!==(null==ae?void 0:ae())){if(cn()){var e=new s.default({calendar:a,locale:i,format:u,months:F,weekDays:T,digits:he,ignoreList:JSON.parse(G)});(!Z||e>Z)&&(!$||e<$)&&(dn(e),null==pe||pe(Object.assign({},Ge,{value:e})),Ze.current.date=e)}var n=q(Ke);Qe&&n&&n.blur(),n||!We?Be(!0):Xe()}}function cn(){return Ee&&!t&&!Ze.current.date&&!h&&!y&&!Qe}function dn(e,n,t){if(Qe&&!n)return Te(e);var r="";if(e&&(r=y&&h&&c(e)?e.map((function(e){return K(e,$e)})).join(" "+Pe+" "):K(e,$e)),!1===(null==m?void 0:m(e,{validatedValue:r,input:Ke.current,isTyping:!!t})))return _e(Ae),!1;je(e),_e(t||r.toString().replace(/\s,\s$/,"")),Ze.current=Object.assign({},Ze.current,{date:e})}function fn(e){if(re){Ze.current.selection=e.target.selectionStart;var n=e.target.value,t={calendar:a,locale:i,format:u,ignoreList:JSON.parse(G)};if(he=c(he)?he:i.digits,!n)return _e(""),dn(null);if(he){for(var r,o=U(he);!(r=o()).done;){var l=r.value;n=n.replace(new RegExp(l,"g"),he.indexOf(l))}var d;d=c(Ie)?y&&h?(n||"").split(Pe).filter(Boolean).map(m):m(n):f(n),dn(c(Ie)||d.isValid?d:null,void 0,w(n,he))}}function f(e){return/(?=.*Y)(?=.*M)(?=.*D)/.test(u)?new s.default(Object.assign({},t,{date:e})):new s.default(t).parse(e)}function m(e){return(e||"").split($e).filter(Boolean).map((function(e){return f(e.trim())}))}}function mn(){if(ze(!0),Qe){var e=qe.current.parentNode.parentNode;e.className="rmdp-calendar-container-mobile",e.style.position="fixed",e.style.transform="",setTimeout((function(){e.style.visibility="visible"}),50)}}function pn(e,n){c(Ze.current.date)||!n||Qe||Xe(),null==be||be(e,n)}}function K(e,n){var t=[].concat(e).map((function(e){return null!=e&&e.isValid?e.format():""}));return t.toString=function(){return this.filter(Boolean).join(n)},t}function q(e){if(e.current)return"INPUT"===e.current.tagName?e.current:e.current.querySelector("input")}var Z=(0,r.forwardRef)(J),$=t(8650);function G(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var X=t.n($)().digits;function ee(e){var n=e.translate,t=e.language,a=e.otherProps,o=e.localeImport,i="en"===t?"":"{ calendar: persian, locale: persian_fa}",l=[[new s.default(a).setDay(1).format(),new s.default(a).setDay(5).format()],[new s.default(a).setDay(7).format(),new s.default(a).setDay(8).format()]],u=[[new s.default(a).setDay(12).format(),new s.default(a).setDay(13).format()],[new s.default(a).setDay(27).format(),new s.default(a).setDay(27).format()]],c=[].concat(l,u);var d=(0,r.useState)(c),f=d[0],m=d[1],p=(0,r.useState)(),h=p[0],v=p[1];return[{title:"Validating Input Value",description:"validating_single_date",code:("fa"===t?'import DatePicker from "react-multi-date-picker";\nimport persian from "react-date-object/ccalendars/persian";\nimport persian_fa from "react-date-object/locales/persian_fa";\n\nconst digits = persian_fa.digits;':"import DatePicker from 'react-multi-date-picker'")+"\n.\n.\n.\nconst [value, setValue] = useState();\n\n<DatePicker\n  value={value}\n  onChange={(date, { input, isTyping }) => {\n    if (!isTyping) return setValue(date); // user selects the date from the calendar and no needs for validation.\n\n    "+("fa"===t?'let value = input.value;\n\n    for (let digit of digits) {\n      value = value.replace(\n        new RegExp(digit, "g"),\n        digits.indexOf(digit)\n      );\n    }\n\n    const strings = value.split("/");':'const strings = input.value.split("/");')+'\n    const numbers = strings.map(Number);\n    const [year, month, day] = numbers;\n\n    if (input.value && numbers.some((number) => isNaN(number))) {\n      return false; //in case user enter something other than digits\n    }\n\n    if (month > 12 || month < 0) return false; //month < 0 in case user want to type 01\n    if (day < 0 || (date && day > date.day)) return false;\n    if (strings.some((val) => val.startsWith("00"))) return false;\n\n    setValue(date);\n  }}\n'+("fa"===t?'    calendar="persian"\n    locale="persian_fa"\n    calendarPosition="bottom-right"\n/>':"/>")+"\n    ",jsx:r.createElement(Z,Object.assign({value:h,onChange:function(e,n){var r=n.input;if(!n.isTyping)return v(e);var a=r.value;if("fa"===t)for(var o,i=G(X);!(o=i()).done;){var l=o.value;a=a.replace(new RegExp(l,"g"),X.indexOf(l))}var s=a.split("/"),u=s.map(Number),c=(u[0],u[1]),d=u[2];return(!r.value||!u.some((function(e){return isNaN(e)})))&&(!(c>12||c<0)&&(!(d<0||e&&d>e.day)&&(!s.some((function(e){return e.startsWith("00")}))&&void v(e))))}},a))},{title:"Validating Range of Dates",description:"validation_multiple_range",code:'import React, { useState } from "react";\nimport { Calendar, DateObject } from "react-multi-date-picker";\n'+o+"\nconst reserved = [\n  [new DateObject("+i+").setDay(1).format(), new DateObject("+i+").setDay(5).format()],\n  [new DateObject("+i+").setDay(7).format(), new DateObject("+i+").setDay(8).format()],\n];\n\nconst inService = [\n  [new DateObject("+i+").setDay(12).format(), new DateObject("+i+").setDay(13).format()],\n  [new DateObject("+i+").setDay(27).format(), new DateObject("+i+").setDay(27).format()],\n];\n\nconst initialValue = [...reserved, ...inService];\n\nfunction isReserved(strDate) {\n  return reserved.some(([start, end]) => strDate >= start && strDate <= end);\n}\n\nfunction isInService(strDate) {\n  return inService.some(([start, end]) => strDate >= start && strDate <= end);\n}\n\nexport default function Example() {\n  const [values, setValues] = useState(initialValue);\n\n  return (\n    <div>\n      <h5>"+n("Room reservation")+"</h5>\n      <p>"+n("Please select the date range you want to book")+'</p>\n\n      <div style={{ margin: "10px " }}>\n        <div className="un-availble">\n          <div className="reserved" />\n          <p>'+n("Already reserved")+'</p>\n        </div>\n        <div className="un-availble">\n          <div className="in-service" />\n          <p>'+n("In service")+'</p>\n        </div>\n      </div>\n\n      <Calendar\n        multiple\n        range\n        value={values}\n        onChange={(ranges) => {\n          const isClickedOutsideUnAvailbleDates = initialValue.every(\n            ([start, end]) => ranges.some((range) => range[0]?.format?.() === start && range[1]?.format?.() === end)\n          );\n          \n          if (!isClickedOutsideUnAvailbleDates) return false;\n          \n          setValues(ranges);\n        }}\n        mapDays={({ date }) => {\n          let className;\n          const strDate = date.format();\n        \n          if (isReserved(strDate)) className = "reserved";\n          if (isInService(strDate)) className = "in-service";\n          if (className) return { className };\n        }}\n      />\n    </div>\n  )\n',jsx:r.createElement("div",null,r.createElement("h5",null,n("Room reservation")),r.createElement("p",null,n("Please select the date range you want to book")),r.createElement("div",{style:{margin:"10px "}},r.createElement("div",{className:"un-availble"},r.createElement("div",{className:"reserved"}),r.createElement("p",null,n("Already reserved"))),r.createElement("div",{className:"un-availble"},r.createElement("div",{className:"in-service"}),r.createElement("p",null,n("In service")))),r.createElement(A,Object.assign({multiple:!0,range:!0,value:f,onChange:function(e){if(!c.every((function(n){var t=n[0],r=n[1];return e.some((function(e){var n,a,o,i;return(null===(n=e[0])||void 0===n||null===(a=n.format)||void 0===a?void 0:a.call(n))===t&&(null===(o=e[1])||void 0===o||null===(i=o.format)||void 0===i?void 0:i.call(o))===r}))})))return!1;m(e)},mapDays:function(e){var n,t=e.date.format();if(function(e){return l.some((function(n){var t=n[0],r=n[1];return e>=t&&e<=r}))}(t)&&(n="reserved"),function(e){return u.some((function(n){var t=n[0],r=n[1];return e>=t&&e<=r}))}(t)&&(n="in-service"),n)return{className:n}}},a)),r.createElement("p",null,n("style.css")," :"),r.createElement("div",{style:{direction:"ltr"}},r.createElement("pre",null,r.createElement("code",{className:"language-css"},".rmdp-range:has(.reserved) {\n  background-color: #8fb4f9;\n}\n\n.rmdp-range:has(.in-service) {\n  background-color: #cc0303;\n}\n\ndiv.reserved {\n  background-color: #8fb4f9;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n\ndiv.in-service {\n  background-color: #cc0303;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n\n.un-availble {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n}\n\n.un-availble p {\n  margin: 0;\n}"))))}]}function ne(e){var n=e.pageContext.language||"en";return r.createElement(a.Z,{language:n,doc:ee})}}}]);
//# sourceMappingURL=component---src-pages-validation-js-1a9c8538710e6809ad0b.js.map