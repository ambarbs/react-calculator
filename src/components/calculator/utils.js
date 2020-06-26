export const keys = [
    {
        value: "C",
        bgColor: "#A5A5A5",
        color: "black",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "+/-",
        bgColor: "#A5A5A5",
        color: "black",
        isOperator: true,
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "%",
        bgColor: "#A5A5A5",
        color: "black",
        isOperator: true,
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "÷",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "7",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "8",
        bgColor: "#333333",
        color: "white",

        onClick: (e) => console.log("8 pressed"),
    },
    {
        value: "9",
        bgColor: "#333333",
        color: "white",

        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "x",
        bgColor: "orange",
        color: "white",

        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "4",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "5",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "6",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "-",
        bgColor: "orange",
        color: "white",

        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "1",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "2",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "3",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "+",
        bgColor: "orange",
        color: "white",
        isOperator: true,
        onClick: (e, setDisplayText, operands = []) => {
            setDisplayText(parseInt(operands[0], 10) + parseInt(operands[1], 10))

        },
    },
    {
        value: "0",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: ".",
        bgColor: "#333333",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
    {
        value: "=",
        bgColor: "orange",
        color: "white",
        onClick: (e) => console.log("7 pressed"),
    },
];

export const operatorMap = {
    '+': '+',
    '-': '-',
    '÷': '/',
    'x': '*',
    '%': '%',
}

export const numberWithCommas = x =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
