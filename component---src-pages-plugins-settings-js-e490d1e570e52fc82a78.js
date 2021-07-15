(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[9403],{729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var l=n(7294),a=n(2308),r=n(7821),i=n(955),o=n(2128);function c(e){var t,n,a,c,s=e.translate,m=e.language,u=e.otherProps,d=e.localeImport,p=(0,l.useState)(Object.assign({},u)),g=p[0],E=p[1],P=(0,l.useState)(Object.assign({multiple:!0},u)),f=P[0],Y=P[1],h=(0,l.useState)(Object.assign({value:new Date,format:"MM-DD-YYYY"},u)),b=h[0],k=h[1],M="en"===m?".\n.\n.\n":d;return[{title:"Props",description:l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,s("Prop")),l.createElement("th",null,s("Type")),l.createElement("th",null,s("Default")))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"position"),l.createElement("td",null,"String"),l.createElement("td",null,'"right"')),l.createElement("tr",null,l.createElement("td",null,"disabled"),l.createElement("td",null,"Boolean"),l.createElement("td",null,"false")),l.createElement("tr",null,l.createElement("td",null,"calendars"),l.createElement("td",null,"Array"),l.createElement("td",null,'["gregorian", "persian", "arabic", "indian"]')),l.createElement("tr",null,l.createElement("td",null,"locales"),l.createElement("td",null,"Array"),l.createElement("td",null,'["en", "fa", "ar", "hi"]')),l.createElement("tr",null,l.createElement("td",null,"modes"),l.createElement("td",null,"Array"),l.createElement("td",null,'["single", "multiple", "range"]')),l.createElement("tr",null,l.createElement("td",null,"others"),l.createElement("td",null,"Array"),l.createElement("td",null,'["onlyMonthPicker", "onlyYearPicker"]')),l.createElement("tr",null,l.createElement("td",null,"defaultActive"),l.createElement("td",null,"string"),l.createElement("td",null,'""')),l.createElement("tr",null,l.createElement("td",null,"disabledList"),l.createElement("td",null,"Array"),l.createElement("td",null,"[]")),l.createElement("tr",null,l.createElement("td",null,"defaultFormat"),l.createElement("td",null,"Object"),l.createElement("td",null,"{}")),l.createElement("tr",null,l.createElement("td",null,"names"),l.createElement("td",null,"Object"),l.createElement("td",null,l.createElement("pre",{className:"language-jsx"},l.createElement("code",null,'{\n  gregorian: "GE",\n  persian: "PE",\n  arabic: "AR",\n  indian: "IN",\n  en: "EN",\n  fa: "FA",\n  ar: "AR",\n  hi: "HI",\n  single: "SI",\n  multiple: "MU",\n  range: "RA",\n  disable: "DI",\n  onlyMonthPicker: "OM",\n  onlyYearPicker: "OY",\n}')))),l.createElement("tr",null,l.createElement("td",null,"titles"),l.createElement("td",null,"Object"),l.createElement("td",null,l.createElement("pre",{className:"language-jsx"},l.createElement("code",null,'{\n  calendar: "Calendar",\n  locale: "Locale",\n  mode: "Mode",\n  otherPickers: "Other Pickers",\n  gregorian: "Gregorian",\n  persian: "Persian",\n  arabic: "Arabic",\n  indian: "Indian",\n  en: "English",\n  fa: "Farsi",\n  ar: "Arabic",\n  hi: "Hindi",\n  single: "Single",\n  multiple: "Multiple",\n  range: "Range",\n  disable: "Disable",\n  onlyMonthPicker: "Only Month Picker",\n  onlyYearPicker: "Only Year Picker",\n}'))))))},{title:"Settings Bottom",description:l.createElement("div",null),code:'import React, { useState } from "react"\nimport DatePicker from "react-multi-date-picker"\nimport Settings from "react-multi-date-picker/plugins/settings"\nimport DatePanel from "react-multi-date-picker/plugins/date_panel"\n'+M+"const [props, setProps] = useState("+("en"===m?"{}":'{\n  calendar: "persian",\n  locale: "fa",\n  calendarPosition: "bottom-right"\n}')+')\n.\n.\n.\n<DatePicker\n  {...props}\n  onPropsChange={setProps}\n  plugins={[\n    <Settings\n      position="bottom"\n      defaultActive="mode"\n    />,\n    <DatePanel \n      disabled={!props.multiple && !props.range} \n      position={["fa", "ar"].includes(props.locale?.name?.split?.("_")?.[1]) ? "left" : "right"}\n    />\n  ]}\n/> ',jsx:l.createElement(r.ZP,Object.assign({},g,{onPropsChange:E,plugins:[l.createElement(i.Z,{position:"bottom",defaultActive:"mode"}),l.createElement(o.Z,{disabled:!g.multiple&&!g.range,position:["fa","ar"].includes(null===(t=g.locale)||void 0===t||null===(n=t.name)||void 0===n||null===(a=n.split)||void 0===a||null===(c=a.call(n,"_"))||void 0===c?void 0:c[1])?"left":"right"})]}))},{title:"Custom Settings",code:'import React, { useState } from "react"\nimport DatePicker from "react-multi-date-picker"\nimport Settings from "react-multi-date-picker/plugins/settings"\n'+M+"const [props, setProps] = useState("+("en"===m?"{ multiple: true }":'{\n  calendar: "persian",\n  locale: "fa",\n  calendarPosition: "bottom-right",\n  multiple: true\n}')+')\n.\n.\n.\n<DatePicker\n  {...props}\n  onPropsChange={setProps}\n  plugins={[\n    <Settings\n      position="left"\n      calendars={["gregorian", "persian"]}\n      locales={["en", "fa"]}\n      modes={["multiple", "range"]}\n      disabledList={["other"]}\n    />\n  ]}\n/> ',jsx:l.createElement(r.ZP,Object.assign({},f,{onPropsChange:Y,plugins:[l.createElement(i.Z,{position:"left",calendars:["gregorian","persian"],locales:["en","fa"],modes:["multiple","range"],disabledList:["other"]})]}))},{title:"Other Pickers",code:'import React, { useState } from "react"\nimport DatePicker from "react-multi-date-picker"\nimport Settings from "react-multi-date-picker/plugins/settings"\n'+M+"const initialProps = "+("en"===m?'{ \n  value: new Date(), \n  format: "MM-DD-YYYY", \n}':'{ \n  value: new Date(), \n  format: "MM-DD-YYYY", \n  calendar: "persian",\n  locale: "fa",\n  calendarPosition:"bottom-right"\n}')+"\n\nconst [props, setProps] = useState(initialProps)\n"+M+'<DatePicker\n  {...props}\n  onPropsChange={setProps}\n  plugins={[\n    <Settings\n      position="bottom"\n      disabledList={["calendar", "locale", "mode"]}\n      defaultActive="others"\n      defaultFormat={{\n        single: "MM-DD-YYYY",\n        onlyMonthPicker: "MMMM YYYY",\n        onlyYearPicker: "YYYY",\n      }}\n    />\n  ]}\n/> ',jsx:l.createElement(r.ZP,Object.assign({},b,{onPropsChange:k,plugins:[l.createElement(i.Z,{position:"bottom",disabledList:["calendar","locale","mode"],defaultActive:"others",defaultFormat:{single:"MM-DD-YYYY",onlyMonthPicker:"MMMM YYYY",onlyYearPicker:"YYYY"}})]}))}]}function s(e){var t=e.pageContext.language||"en";return l.createElement(a.Z,{language:t,doc:c,section:"plugins"})}}}]);
//# sourceMappingURL=component---src-pages-plugins-settings-js-e490d1e570e52fc82a78.js.map