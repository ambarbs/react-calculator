import React, {useState} from "react";
import {
    CalculatorWrapper,
    DisplayLabel,
    KeyPadWrapper,
    KeyWrapper,
} from "./Calculator.styles";
import {keys, numberWithCommas, operatorMap} from "./utils";



const Calculator = () => {
    const [displayText, setDisplayText] = useState("");
    const [operator, setOperator] = useState('');
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    console.log("displayText ", displayText);

    const handleClick = (e) => {
        const value = e.target.innerText;
        switch (value) {
            case '+':
            case '-':
            case 'x':
            case '÷':
            case '%':
                setOperator(operatorMap[value]);
                break;
            case '=':
                // eslint-disable-next-line no-eval
                let val = Number(eval(`${operand1} ${operator} ${operand2}`));
                val =val % 1 === 0? val : parseFloat(val.toFixed(8));
                setDisplayText(numberWithCommas(val));
                setOperator('');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                if(value === '.' && displayText.includes('.')) return;
                if(operator === ''){
                    let s1 = `${operand1}${value}`;
                    setOperand1(s1);
                    setDisplayText(numberWithCommas(s1));
                } else {
                    let s2 = `${operand2}${value}`;
                    setOperand2(s2);
                    setDisplayText(numberWithCommas(s2));
                }
                break;
            case 'c':
                setOperator('');
                setOperand1('');
                setOperand2('');
                break;
            default:
                break;
        }
    }

    const getFontSize = (text) => {
        switch (true) {
            case text.length < 5:
                return '4rem';
            case text.length < 12:
                return '3rem';
            default:
                return '2rem';
        }
    }

    return (
        <CalculatorWrapper>
            <DisplayLabel
                fontSize={getFontSize(displayText)}
            >{displayText}</DisplayLabel>
            <KeyPadWrapper>
                {keys.map((key) => (
                    <KeyWrapper
                        key={key.value}
                        bgColor={key.bgColor}
                        color={key.color}
                        gridColumn={key.value === '0' ? '1 / span 2' : undefined}
                        width={key.value === '0' ? 'auto' : '7vw'}
                        borderRadius={key.value === '0' ? '50px' : '50%'}
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
