import PropTypes from 'prop-types';
import React from 'react';
import { KeyPadWrapper, KeyWrapperStandard } from './KeyPad.styles';

const StandardKeyPad = ({ keymap = [], onClickHandler }) => (
  <KeyPadWrapper rows={4}>
    {keymap.map((key) => (
      <KeyWrapperStandard
        key={key.value}
        bgColor={key.bgColor}
        color={key.color}
        onClick={(e) => {
          onClickHandler(e);
        }}
      >
        {key.value}
      </KeyWrapperStandard>
    ))}
  </KeyPadWrapper>
);

export default StandardKeyPad;

StandardKeyPad.propTypes = {
  keymap: PropTypes.arrayOf(Object).isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
