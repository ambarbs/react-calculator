import React, { useState } from 'react';
import {
  CalculatorWrapper,
  DisplayLabel, Grid, Icon,
  KeyPadWrapper,
  KeyWrapperStandard, KeyWrapperStandardScientific,
} from './Calculator.styles';
import {
  evaluateExpression,
  isCharADigit, isComputable,
  keys, scientificKeys,
} from './utils';
import historyImg from '../../assets/history.svg';
import History from '../history/History';

const Calculator = () => {
  const [expressionText, setExpressionText] = useState('');
  const [mainDisplay, setMainDisplay] = useState('');
  const [items, setItems] = useState(['']);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleClick = (e) => {
    const value = e.target.innerText;
    const lastItem = items.slice(-1)[0];
    const lastChar = lastItem.slice(-1);

    switch (value) {
      case '+':
      case '-':
      case 'x':
      case '÷':
      case '%':
        if (!['+', '-', 'x', '÷'].some((sign) => lastChar === sign)) {
          setItems([...items, value]);
          setExpressionText(`${items.join(' ')} ${value}`);
        } else {
          items.pop();
          setItems([...items, value]);
          setExpressionText(`${items.join(' ')} ${value}`);
        }
        if (isComputable(items)) {
          setMainDisplay(evaluateExpression(items));
        }
        break;
      case '=': {
        const result = evaluateExpression(items);
        setMainDisplay(result);
        // setExpressionText(result);
        setItems([result]);
        setHistory([...history, { displayText: expressionText, result }]);
        break;
      }
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
        if (isCharADigit(lastChar) || lastChar === '.') {
          items.pop();
          const updatedLastItem = `${lastItem}${value}`;
          const spreadElements = [...items, updatedLastItem];
          setMainDisplay(updatedLastItem);
          setExpressionText(spreadElements.join(' '));
          setItems([...spreadElements]);
        } else {
          setMainDisplay(value);
          setExpressionText(`${items.join(' ')} ${value}`);
          setItems([...items, value]);
        }
        break;
      case '.':
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(lastItem) && !lastItem.includes('.')) {
          items.pop();
          const spreadElements = [...items, `${lastItem}.`];
          setItems(spreadElements);
          setExpressionText(spreadElements.join(' '));
        } else if (['+', '-', 'x', '÷'].some((sign) => lastChar === sign)) {
          const updatedItems = [...items, '0.'];
          setItems(updatedItems);
          setExpressionText(updatedItems.join(' '));
        }
        break;
      case 'C':
        setExpressionText('');
        setItems(['']);
        break;
      case '+/-':
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(lastItem)) {
          const updatedLastItem = (-1 * lastItem).toString();
          items.pop();
          const updatedItems = [...items, updatedLastItem];
          setItems(updatedItems);
          setExpressionText(updatedItems.join(''));
          setMainDisplay(updatedLastItem);
        }
        break;
      default:
        break;
    }
  };

  const getFontSize = (text) => {
    switch (true) {
      case text.length < 5:
        return '4rem';
      case text.length < 12:
        return '3rem';
      default:
        return '2rem';
    }
  };

  return (
    <CalculatorWrapper>
      <DisplayLabel
        fontSize="1rem"
        color="grey"
        height="2rem"
      >
        {expressionText}
      </DisplayLabel>
      <DisplayLabel
        fontSize={getFontSize(expressionText)}
      >
        {mainDisplay}
      </DisplayLabel>
      {showHistory && <History history={history} />}
      <Icon src={historyImg} alt="history" onClick={() => setShowHistory((_showHistory) => history.length && !_showHistory)} />
      <Grid>
        <KeyPadWrapper rows={6} scientific>
          {scientificKeys.map((key) => (
            <KeyWrapperStandardScientific
                            // super={!!key.super || !!key.sub}
              key={key.value}
              bgColor={key.bgColor}
              color={key.color}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {!!key.super || !!key.sub ? (
                <div>
                  {key.super && key.superPosition === 'before' && <sup>{key.super}</sup>}
                  {key.value}
                  {key.super && key.superPosition === 'after' && <sup>{key.super}</sup>}
                  {key.sub && <sub>{key.sub}</sub>}
                </div>
              ) : <div>{key.value}</div>}

            </KeyWrapperStandardScientific>
          ))}
        </KeyPadWrapper>
        <KeyPadWrapper rows={4}>
          {keys.map((key) => (
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
