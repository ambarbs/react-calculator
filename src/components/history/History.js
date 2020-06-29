import PropTypes from 'prop-types';
import React from 'react';
import { HistoryItem, HistoryWrapper } from './History.styles';
import { numberWithCommas } from '../calculator/utils';

const History = ({ history }) => (
  <HistoryWrapper>
    {history.map((h) => (
      <>
        <HistoryItem paddingRight="1rem" fontSize="1.25rem">
          {`${h.displayText} =`}
        </HistoryItem>
        <HistoryItem color="black">{numberWithCommas(h.result)}</HistoryItem>
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
