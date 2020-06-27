export const keys = [
  {
    value: "C",
    bgColor: "#A5A5A5",
    color: "black",
  },
  {
    value: "+/-",
    bgColor: "#A5A5A5",
    color: "black",
  },
  {
    value: "%",
    bgColor: "#A5A5A5",
    color: "black",
  },
  {
    value: "÷",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "7",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "8",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "9",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "x",
    bgColor: "orange",
    color: "white",
  },
  {
    value: "4",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "5",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "6",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "-",
    bgColor: "orange",
    color: "white",
  },
  {
    value: "1",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "2",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "3",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "+",
    bgColor: "orange",
    color: "white",
  },
  {
    value: "0",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: ".",
    bgColor: "#333333",
    color: "white",
  },
  {
    value: "=",
    bgColor: "orange",
    color: "white",
  },
];

export const scientificKeys = [
  { value: "(", bgColor: "#A5A5A5", color: "black" },
  { value: ")", bgColor: "#A5A5A5", color: "black" },
  { value: "mc", bgColor: "#A5A5A5", color: "black" },
  { value: "m+", bgColor: "#A5A5A5", color: "black" },
  { value: "m-", bgColor: "#A5A5A5", color: "black" },
  { value: "mr", bgColor: "#A5A5A5", color: "black" },
  { value: "2", sub: 'nd', bgColor: "#A5A5A5", color: "black" },
  { value: "x", super: '2', superPosition: 'after',  bgColor: "#A5A5A5", color: "black" },
  { value: "x", super: '3',  superPosition: 'after', bgColor: "#A5A5A5", color: "black" },
  { value: "x", super: 'y',  superPosition: 'after', bgColor: "#A5A5A5", color: "black" },
  { value: "e", super: 'x',  superPosition: 'after', bgColor: "#A5A5A5", color: "black" },
  { value: "10", super: 'x',  superPosition: 'after', bgColor: "#A5A5A5", color: "black" },
  { value: "/", super: '1',  superPosition: 'before', sub:'x', bgColor: "#A5A5A5", color: "black" },
  { value: "\u221A", super: '2',  superPosition: 'before', sub:'x', bgColor: "#A5A5A5", color: "black" },
  { value: "\u221A", super: '3',  superPosition: 'before', sub:'x', bgColor: "#A5A5A5", color: "black" },
  { value: "\u221A", super: 'y', superPosition: 'before', sub:'x',bgColor: "#A5A5A5", color: "black" },
  { value: "ln", bgColor: "#A5A5A5", color: "black" },
  { value: "log", sub: '10', bgColor: "#A5A5A5", color: "black" },
  { value: "x!", bgColor: "#A5A5A5", color: "black" },
  { value: "sin", bgColor: "#A5A5A5", color: "black" },
  { value: "cos", bgColor: "#A5A5A5", color: "black" },
  { value: "tan", bgColor: "#A5A5A5", color: "black" },
  { value: "e", bgColor: "#A5A5A5", color: "black" },
  { value: "EE", bgColor: "#A5A5A5", color: "black" },
  { value: "Rad", bgColor: "#A5A5A5", color: "black" },
  { value: "sinh", bgColor: "#A5A5A5", color: "black" },
  { value: "cosh", bgColor: "#A5A5A5", color: "black" },
  { value: "tanh", bgColor: "#A5A5A5", color: "black" },
  { value: "\u03C0", bgColor: "#A5A5A5", color: "black" },
  { value: "Rand", bgColor: "#A5A5A5", color: "black" },
];
export const operatorMap = {
  "+": "+",
  "-": "-",
  "÷": "/",
  x: "*",
  "%": "%",
};

export const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
