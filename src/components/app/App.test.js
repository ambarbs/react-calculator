import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../calculator/Calculator';

it('renders Search without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});
