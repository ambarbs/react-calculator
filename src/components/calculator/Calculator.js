import React, {useState} from "react";
import {
    CalculatorWrapper,
    DisplayLabel, Grid,
    KeyPadWrapper,
    KeyWrapperStandard, KeyWrapperStandardScientific,
} from "./Calculator.styles";
import {keys, numberWithCommas, operatorMap, scientificKeys} from "./utils";


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
                val = val % 1 === 0 ? val : parseFloat(val.toFixed(8));
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
                if (value === '.' && displayText.includes('.')) return;
                if (operator === '') {
                    let s1 = `${operand1}${value}`;
                    setOperand1(s1);
                    setDisplayText(numberWithCommas(s1));
                } else {
                    let s2 = `${operand2}${value}`;
                    setOperand2(s2);
                    setDisplayText(numberWithCommas(s2));
                }
                break;
            case 'C':
                setOperator('');
                setOperand1('');
                setOperand2('');
                setDisplayText('');
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
            <Grid>
                <KeyPadWrapper rows={6} scientific>
                    {scientificKeys.map(key => (
                        <KeyWrapperStandardScientific
                            // super={!!key.super || !!key.sub}
                            key={key.value}
                            bgColor={key.bgColor}
                            color={key.color}
                            onClick={(e) => {
                                handleClick(e);
                            }}
                        >
                            {!!key.super || !!key.sub ? <div>
                                {key.super && key.superPosition === 'before' &&<sup>{key.super}</sup>}
                                {key.value}
                                {key.super && key.superPosition === 'after' &&<sup>{key.super}</sup>}
                                {key.sub && <sub>{key.sub}</sub>}
                            </div>:<div>{key.value}</div>}

                        </KeyWrapperStandardScientific>
                    ))}
                </KeyPadWrapper>
                <KeyPadWrapper rows={4}>
                    {keys.map(key => (
                        <KeyWrapperStandard
                            key={key.value}
                            bgColor={key.bgColor}
                            color={key.color}
                            onClick={(e) => {
                                handleClick(e);
                            }}
                        >
                            {key.value}
                        </KeyWrapperStandard>
                    ))}
                </KeyPadWrapper>

            </Grid>
        </CalculatorWrapper>
    );
};

export default Calculator;
