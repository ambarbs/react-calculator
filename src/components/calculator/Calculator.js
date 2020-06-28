import React, { useState, useRef } from 'react';
import {
  CalculatorWrapper,
  DisplayLabel, Grid, Icon,
} from './Calculator.styles';
import {
  evaluateExpression, getFontSize,
  isCharADigit, isComputable, isOperator, numberWithCommas,
} from './utils';
import historyImg from '../../assets/history.svg';
import History from '../history/History';
import ScientificKeyPad from './keypads/ScientificKeyPad';
import StandardKeyPad from './keypads/StandardKeyPad';
import { scientificKeys, standardKeys } from './constants';

const Calculator = () => {
  const [expressionText, setExpressionText] = useState('');
  const [mainDisplay, setMainDisplay] = useState('');
  const [items, setItems] = useState(['']);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const historyButtonRef = useRef();

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
          setMainDisplay(numberWithCommas(evaluateExpression(items)));
        }
        break;
      case '=': {
        const result = evaluateExpression(items);
        setMainDisplay(numberWithCommas(result));
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
          setMainDisplay(numberWithCommas(updatedLastItem));
          setExpressionText(spreadElements.join(' '));
          setItems([...spreadElements]);
        } else {
          setMainDisplay(numberWithCommas(value));
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
        setExpressionText('0');
        setItems(['0']);
        setMainDisplay('0');
        break;
      case '+/-':
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(lastItem)) {
          const updatedLastItem = (-1 * lastItem).toString();
          items.pop();
          const updatedItems = [...items, updatedLastItem];
          setItems(updatedItems);
          setExpressionText(updatedItems.join(' '));
          setMainDisplay(numberWithCommas(updatedLastItem));
        }
        break;
      default:
        break;
    }
  };

  return (
    <CalculatorWrapper
      onClick={(event) => {
        if (historyButtonRef.current && !historyButtonRef.current.contains(event.target)) {
          setShowHistory(false);
        }
      }}
    >
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
      <Icon
        ref={historyButtonRef}
        src={historyImg}
        alt="history"
        onClick={() => setShowHistory((_showHistory) => history.length && !_showHistory)}
      />
      <Grid>
        <ScientificKeyPad keymap={scientificKeys} onClickHandler={() => {}} />
        <StandardKeyPad keymap={standardKeys} onClickHandler={handleClick} />
      </Grid>
    </CalculatorWrapper>
  );
};

export default Calculator;
