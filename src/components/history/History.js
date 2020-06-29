import PropTypes from 'prop-types';
import React from 'react';
import { HistoryItem, HistoryWrapper } from './History.styles';

const History = ({ history }) => (
  <HistoryWrapper>
    {history.map((h) => (
      <>
        <HistoryItem paddingRight="1rem">
          {`${h.displayText} =`}
        </HistoryItem>
        <HistoryItem color="black">{h.result}</HistoryItem>
      </>
    ))}
  </HistoryWrapper>
);

export default History;

History.propTypes = {
  history: PropTypes.arrayOf(Object),
};

History.defaultProps = {
  history: [{ displayText: '', result: '' }],
};
