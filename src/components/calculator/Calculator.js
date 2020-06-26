import React, {useState} from "react";
import {
    CalculatorWrapper,
    DisplayLabel,
    KeyPadWrapper,
    KeyWrapper,
} from "./Calculator.styles";

const keys = [
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
        value: "X",
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

const Calculator = () => {
    const [displayText, setDisplayText] = useState("");
    const [operator, setOperator] = useState('');
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    console.log("displayText ", displayText);

    const handleClick = (e) =>{}
    return (
        <CalculatorWrapper>
            <DisplayLabel>{displayText}</DisplayLabel>
            <KeyPadWrapper>
                {keys.map((key) => (
                    <KeyWrapper
                        key={key.value}
                        bgColor={key.bgColor}
                        color={key.color}
                        gridColumn={key.value === '0' ? '1 / span 2' : undefined}
                        width={key.value === '0' ? 'auto' : '7vw'}
                        onClick={(e) => {
                            debugger;
                            handleClick(e);
                            // setDisplayText(e.target.innerText)
                        }}
                    >
                        {key.value}
                    </KeyWrapper>
                ))}
            </KeyPadWrapper>
        </CalculatorWrapper>
    );
};

export default Calculator;
