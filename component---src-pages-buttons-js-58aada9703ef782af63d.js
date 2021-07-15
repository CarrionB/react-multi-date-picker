(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[1316],{4007:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(7294),a=t(2308),l=t(7821);function i(e){var n=e.translate,t=e.language,a=e.otherProps,i=e.localeImport;return[{title:"Disabling Navigate Buttons",description:"disable_buttons",code:i+"<Calendar \n  buttons={false} \n"+("en"===t?"/>":"  calendar={persian}\n  locale={persian_fa}\n/>")+" ",jsx:r.createElement(l.f,Object.assign({buttons:!1},a))},{title:"Custom (function)",description:"custom_buttons",code:i+'<Calendar\n  renderButton={(direction, handleClick) => (\n    <button onClick={handleClick}>\n      {direction === "right" ? ">" : "<"}\n    </button>\n  )}\n'+("en"===t?"/>":"  calendar={persian}\n  locale={persian_fa}\n/>")+" ",jsx:r.createElement(l.f,Object.assign({renderButton:function(e,n){return r.createElement("button",{onClick:n},"right"===e?">":"<")}},a))},{title:"Custom (component)",description:r.createElement("div",null,r.createElement("p",null,n("disabled_buttons")),r.createElement("p",null,n("style.css"),":"),r.createElement("div",{style:{direction:"ltr"}},r.createElement("pre",null,r.createElement("code",{className:"language-css"},".cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-default {\n  cursor: default;\n}"))),r.createElement("p",null,n("code"),":")),code:'import { Calendar } from "react-multi-date-picker";\n'+("en"===t?"":'import persian from "react-date-object/calendars/persian";\nimport persian_fa from "react-date-object/locales/persian_fa";\n')+'\nfunction CustomButton({ direction, handleClick, disabled }) {\n  return (\n    <i\n      onClick={handleClick}\n      style={{\n        padding: "0 10px",\n        fontWeight: "bold",\n        color: disabled ? "gray" : "blue"\n      }}\n      className={disabled ? "cursor-default" : "cursor-pointer"}\n    >\n      {direction === "right" ? ">" : "<"}\n    </i>\n  )\n}\n\nexport default function Example(){\n  return (\n    <Calendar\n      minDate={new Date()} \n      renderButton={<CustomButton />} \n    '+("en"===t?"/>":"  calendar={persian}\n      locale={persian_fa}\n    />")+"\n  )\n}",jsx:r.createElement(l.f,Object.assign({minDate:new Date,renderButton:r.createElement(o,null)},a))}]}function o(e){var n=e.direction,t=e.handleClick,a=e.disabled;return r.createElement("i",{onClick:t,style:{padding:"0 10px",fontWeight:"bold",color:a?"gray":"blue"},className:a?"cursor-default":"cursor-pointer","aria-hidden":"true"},"right"===n?">":"<")}function c(e){var n=e.pageContext.language||"en";return r.createElement(a.Z,{language:n,doc:i})}}}]);
//# sourceMappingURL=component---src-pages-buttons-js-58aada9703ef782af63d.js.map