(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[6561],{2853:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(7294),a=t(2308),o=t(3552),u=t(3254);function l(e){var n=e.language,t="en"===n?{}:{calendar:"persian",locale:"fa",calendarPosition:"bottom-right"},a={title:"Types",jsx:r.createElement("ul",null,r.createElement("li",null,"input (default)"),r.createElement("li",null,"input-icon"),r.createElement("li",null,"button"),r.createElement("li",null,"icon"),r.createElement("li",null,"custom"))},o={title:"Input",code:'<DatePicker \n  type="input"\n/>',jsx:r.createElement(u.ZP,Object.assign({type:"input"},t))},l={title:"Input-Icon",code:'<DatePicker \n  type="input-icon" \n/>',jsx:r.createElement(u.ZP,Object.assign({type:"input-icon"},t))};return[a,o,{title:"Button",code:'<DatePicker \n  type="button"\n/>',jsx:r.createElement(u.ZP,Object.assign({type:"button"},t))},l,{title:"Icon",code:'<DatePicker \n  type="icon" \n/>',jsx:r.createElement(u.ZP,Object.assign({type:"icon"},t))},{title:"Custom (function)",code:'<DatePicker\n  value="2020/10/19"\n  type="custom"\n  render={(stringDate, openCalendar) => {\n    return (\n      <button onClick={openCalendar}>\n        {stringDate}\n      </button>\n    )\n  }}\n/>',jsx:r.createElement(u.ZP,Object.assign({value:"2020/10/19",type:"custom",render:function(e,n){return r.createElement("button",{onClick:n},e)}},t))},{title:"Custom (component)",code:'import React from "react"\n.\n.\n.\nclass CustomComponent extends React.Component {\n  render() {\n    return (\n      <button onClick={this.props.openCalendar}>\n        {this.props.stringDate}\n      </button >\n    )\n  }\n}\n.\n.\n.\n<DatePicker\n  value="2020/10/19"\n  type="custom"\n  render={<CustomComponent />}\n/>',jsx:r.createElement(u.ZP,Object.assign({value:"2020/10/19",type:"custom",render:r.createElement(i,null)},t))},{title:"Custom (input)",description:"custom_input",code:'import React from "react"\n\nfunction CustomInput({ openCalendar, stringDate, handleValueChange }) {\n  return (\n    <input\n      onFocus={openCalendar}\n      value={stringDate}\n      onChange={handleValueChange}\n    />\n  )\n}\n\n<DatePicker\n  type="custom"\n  render={<CustomInput />}\n/>',jsx:r.createElement(u.ZP,Object.assign({type:"custom",render:r.createElement(s,null)},t))},{title:"Multiple & Range",description:"multiple_range"},{title:"Custom (multiple mode)",code:'import React from "react"\n\nfunction CustomMultipleInput({openCalendar, stringDates}) {\n  return (\n    <input\n      onFocus={openCalendar}\n      value={stringDates.join(", ")}\n      readOnly\n    />\n  )\n}\n\n<DatePicker\n  multiple\n  type="custom"\n  render={<CustomMultipleInput />}\n/>',jsx:r.createElement(u.ZP,Object.assign({multiple:!0,type:"custom",render:r.createElement(c,null)},t))},{title:"Custom (range mode)",code:'import React from "react"\n\nfunction CustomRangeInput({openCalendar, stringDates}) {\n  let from = stringDates[0] || ""\n  let to = stringDates[1] || ""\n  let value = from && to ? '+("en"===n?'"from " + from + ", to " + to':'"از " + from + "، تا " + to"')+' : from\n  \n  return (\n    <input\n      onFocus={openCalendar}\n      value={value}\n      readOnly\n    />\n  )\n}\n\n<DatePicker\n  range\n  eachDaysInRange\n  type="custom"\n  render={<CustomRangeInput />}\n/>',jsx:r.createElement(u.ZP,Object.assign({range:!0,eachDaysInRange:!0,type:"custom",render:r.createElement(p,null)},t))}];function p(e){var t=e.openCalendar,a=e.stringDates,o=a[0]||"",u=a[1]||"",l=o&&u?"en"===n?"from "+o+", to "+u:"از "+o+"، تا "+u:o;return r.createElement("input",{onFocus:t,value:l,readOnly:!0})}}function c(e){var n=e.openCalendar,t=e.stringDates;return r.createElement("input",{onFocus:n,value:t.join(", "),readOnly:!0})}var i=function(e){function n(){return e.apply(this,arguments)||this}return(0,o.Z)(n,e),n.prototype.render=function(){return r.createElement("button",{onClick:this.props.openCalendar},this.props.stringDate)},n}(r.Component);function s(e){var n=e.openCalendar,t=e.stringDate,a=e.handleValueChange;return r.createElement("input",{onFocus:n,value:t,onChange:a})}function p(e){var n=e.pageContext.language||"en";return r.createElement(a.Z,{language:n,doc:l})}}}]);
//# sourceMappingURL=component---src-pages-v-2-x-types-js-7e21ef05a7725bbf4a26.js.map