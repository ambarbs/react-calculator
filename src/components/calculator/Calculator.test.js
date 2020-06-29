import React from 'react';
import ReactDOM from 'react-dom';
import { CalculatorWrapper } from './Calculator.styles';

it('renders Search without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorWrapper />, div);
});
