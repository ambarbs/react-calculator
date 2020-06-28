import PropTypes from 'prop-types';
import React from 'react';
import { KeyPadWrapper, KeyWrapperScientific } from './KeyPad.styles';

const ScientificKeyPad = ({ keymap = [], onClickHandler }) => (
  <KeyPadWrapper rows={6} scientific>
    {keymap.map((key) => (
      <KeyWrapperScientific
        key={key.value}
        bgColor={key.bgColor}
        color={key.color}
        onClick={(e) => {
          onClickHandler(e);
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

      </KeyWrapperScientific>
    ))}
  </KeyPadWrapper>
);

ScientificKeyPad.propTypes = {
  keymap: PropTypes.arrayOf(Object).isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default ScientificKeyPad;
