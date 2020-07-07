export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const isCharADigit = (char) => char && char >= 0 && char <= 9;

/**
 *
 * @param str
 * @param find
 * @param replace
 * @returns {void | string | *}
 */
export const replaceAll = (str, find, replace) => str.replace(new RegExp(find, 'g'), replace);

/**
 *
 * @param items
 */
export const evaluateExpression = (items = ['']) => {
  // Current result, updated as we compute.
  let result = null;
  // The last pending binary operation.
  let currentOp = null;
  // Did calculation result in error?
  let error = false;
  items.forEach((item) => {
    if (error) {
      // Error state propagates on all further operations.
      return;
    }
    if (item === '') {
      return;
    }
    if (['+', '-', 'x', '÷', '%'].includes(item)) {
      if (result == null) {
        result = 0;
      }
      currentOp = item;
      if (item === '%') {
        // '%' is evaluated immediately on the current number.
        result /= 100;
      }
      return;
    }
    // At this moment, item is a number.
    const itemNum = Number(item);
    if (currentOp == null) {
      // Since there is no op queued, this is the first number we've seen.
      result = itemNum;
      return;
    }
    // We need to evaluate ('result' currentOp 'item').
    // console.log('currentOp = ', currentOp);
    switch (currentOp) {
      case '+': {
        result += itemNum;
        break;
      }
      case '-': {
        result -= itemNum;
        break;
      }
      case 'x': {
        result *= itemNum;
        break;
      }
      case '÷': {
        if (itemNum === 0) {
          error = true;
        } else {
          result /= itemNum;
        }
        break;
      }
      default: {
        // console.error('Unknown operation ', currentOp);
        error = true;
      }
    }
    currentOp = null;
  });
  if (error) {
    return 'Err';
  }
  return (Math.round(result * 10000000) / 10000000).toString();
};

/**
 *
 * @param char
 * @returns {boolean}
 */
export const isOperator = (char) => ['+', '-', 'x', '÷', '%'].some((operator) => operator === char);

/**
 *
 * @param items
 */
export const isComputable = (items = []) => {
  let operatorCount = 0;
  let isOperable = false;
  for (let i = 0; i < items.length; i += 1) {
    if (isOperator(items[i])) {
      operatorCount += 1;
      if (operatorCount >= 1) {
        isOperable = true;
        break;
      }
    }
  }
  return isOperable;
};

/**
 *
 * @param text
 * @returns {string}
 */
export const getFontSize = (text) => {
  switch (true) {
    case text.length < 5:
      return '4rem';
    case text.length < 12:
      return '3rem';
    default:
      return '2rem';
  }
};
