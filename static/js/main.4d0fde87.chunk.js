(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{14:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_ambar_Documents_Javascript_practise_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Calculator_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_ambar_Documents_Javascript_practise_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),displayText=_useState2[0],setDisplayText=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_ambar_Documents_Javascript_practise_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),operator=_useState4[0],setOperator=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(C_Users_ambar_Documents_Javascript_practise_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),operand1=_useState6[0],setOperand1=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState8=Object(C_Users_ambar_Documents_Javascript_practise_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),operand2=_useState8[0],setOperand2=_useState8[1];console.log("displayText ",displayText);var handleClick=function handleClick(e){var value=e.target.innerText;switch(value){case"+":case"-":case"x":case"\xf7":case"%":setOperator(_utils__WEBPACK_IMPORTED_MODULE_3__.c[value]);break;case"=":var val=Number(eval("".concat(operand1," ").concat(operator," ").concat(operand2)));val=val%1===0?val:parseFloat(val.toFixed(8)),setDisplayText(Object(_utils__WEBPACK_IMPORTED_MODULE_3__.b)(val)),setOperator("");break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":if("."===value&&displayText.includes("."))return;if(""===operator){var s1="".concat(operand1).concat(value);setOperand1(s1),setDisplayText(Object(_utils__WEBPACK_IMPORTED_MODULE_3__.b)(s1))}else{var s2="".concat(operand2).concat(value);setOperand2(s2),setDisplayText(Object(_utils__WEBPACK_IMPORTED_MODULE_3__.b)(s2))}break;case"C":setOperator(""),setOperand1(""),setOperand2(""),setDisplayText("")}},getFontSize=function(e){switch(!0){case e.length<5:return"4rem";case e.length<12:return"3rem";default:return"2rem"}};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Calculator_styles__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Calculator_styles__WEBPACK_IMPORTED_MODULE_2__.b,{fontSize:getFontSize(displayText)},displayText),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Calculator_styles__WEBPACK_IMPORTED_MODULE_2__.c,null,_utils__WEBPACK_IMPORTED_MODULE_3__.a.map((function(e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Calculator_styles__WEBPACK_IMPORTED_MODULE_2__.d,{key:e.value,bgColor:e.bgColor,color:e.color,onClick:function(e){handleClick(e)}},e.value)}))))};__webpack_exports__.a=Calculator},15:function(e,t,n){e.exports=n(26)},20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),_=n(10),a=n.n(_),c=(n(20),n(21),n(1));function l(){var e=Object(c.a)(["\n  background-color: #6d6d6d;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100vh;\n  @media (max-width: 576px) {\n   background-color: black;\n  }\n"]);return l=function(){return e},e}var s=n(2).a.div(l()),u=n(14);var i=function(){return o.a.createElement(s,null,o.a.createElement(u.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return _}));var r=[{value:"C",bgColor:"#A5A5A5",color:"black",onClick:function(e){return console.log("7 pressed")}},{value:"+/-",bgColor:"#A5A5A5",color:"black",isOperator:!0,onClick:function(e){return console.log("7 pressed")}},{value:"%",bgColor:"#A5A5A5",color:"black",isOperator:!0,onClick:function(e){return console.log("7 pressed")}},{value:"\xf7",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"7",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"8",bgColor:"#333333",color:"white",onClick:function(e){return console.log("8 pressed")}},{value:"9",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"x",bgColor:"orange",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"4",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"5",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"6",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"-",bgColor:"orange",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"1",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"2",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"3",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"+",bgColor:"orange",color:"white",isOperator:!0,onClick:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t(parseInt(n[0],10)+parseInt(n[1],10))}},{value:"0",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:".",bgColor:"#333333",color:"white",onClick:function(e){return console.log("7 pressed")}},{value:"=",bgColor:"orange",color:"white",onClick:function(e){return console.log("7 pressed")}}],o={"+":"+","-":"-","\xf7":"/",x:"*","%":"%"},_=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return d}));var r=n(1),o=n(2);function _(){var e=Object(r.a)(["\n  width: ",";\n  height: 7vw;\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  font-size: 1.5rem;\n  grid-column: ",";\n  cursor: pointer;\n  &:nth-child(17) {\n    width: auto;\n    border-radius: 50px;\n    grid-column: 1/span 2;\n  }\n  @media only screen and (max-width: 576px) {\n    width: 19vw;\n    height: 19vw;\n    font-weight: 400;\n    font-size: 1.25rem;\n  }\n"]);return _=function(){return e},e}function a(){var e=Object(r.a)(["\n  display: grid;\n  justify-content: center;\n  width: 100%;\n  grid-template-columns: repeat(4, auto);\n  grid-template-rows: repeat(5, auto);\n  grid-gap: 1rem;\n"]);return a=function(){return e},e}function c(){var e=Object(r.a)(["\n  width: 100%;\n  height: 6rem;\n  color: white;\n  font-size: ",";\n  text-align: right;\n"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  width: 35vw;\n\n  @media only screen and (max-width: 576px) {\n    width: 95vw;\n  }\n"]);return l=function(){return e},e}var s=o.a.div(l()),u=o.a.label(c(),(function(e){return e.fontSize})),i=o.a.section(a()),d=o.a.div(_(),(function(e){return e.width||"7vw"}),(function(e){return e.borderRadius||"50%"}),(function(e){return e.bgColor}),(function(e){return e.color}),(function(e){return e.gridColumn}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4d0fde87.chunk.js.map