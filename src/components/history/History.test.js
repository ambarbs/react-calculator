import React from 'react';
import ReactDOM from 'react-dom';
import { HistoryWrapper } from './History.styles';

it('renders Search without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HistoryWrapper />, div);
});
