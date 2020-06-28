export const keys = [
  {
    value: 'C',
    bgColor: '#A5A5A5',
    color: 'black',
  },
  {
    value: '+/-',
    bgColor: '#A5A5A5',
    color: 'black',
  },
  {
    value: '%',
    bgColor: '#A5A5A5',
    color: 'black',
  },
  {
    value: '÷',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '7',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '8',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '9',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: 'x',
    bgColor: 'orange',
    color: 'white',
  },
  {
    value: '4',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '5',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '6',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '-',
    bgColor: 'orange',
    color: 'white',
  },
  {
    value: '1',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '2',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '3',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '+',
    bgColor: 'orange',
    color: 'white',
  },
  {
    value: '0',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '.',
    bgColor: '#333333',
    color: 'white',
  },
  {
    value: '=',
    bgColor: 'orange',
    color: 'white',
  },
];

export const scientificKeys = [
  { value: '(', bgColor: '#212121', color: 'lightgrey' },
  { value: ')', bgColor: '#212121', color: 'lightgrey' },
  { value: 'mc', bgColor: '#212121', color: 'lightgrey' },
  { value: 'm+', bgColor: '#212121', color: 'lightgrey' },
  { value: 'm-', bgColor: '#212121', color: 'lightgrey' },
  { value: 'mr', bgColor: '#212121', color: 'lightgrey' },
  {
    value: '2', sub: 'nd', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: 'x', super: '2', superPosition: 'after', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: 'x', super: '3', superPosition: 'after', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: 'x', super: 'y', superPosition: 'after', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: 'e', super: 'x', superPosition: 'after', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: '10', super: 'x', superPosition: 'after', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: '/', super: '1', superPosition: 'before', sub: 'x', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: '\u221A', super: '2', superPosition: 'before', sub: 'x', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: '\u221A', super: '3', superPosition: 'before', sub: 'x', bgColor: '#212121', color: 'lightgrey',
  },
  {
    value: '\u221A', super: 'y', superPosition: 'before', sub: 'x', bgColor: '#212121', color: 'lightgrey',
  },
  { value: 'ln', bgColor: '#212121', color: 'lightgrey' },
  {
    value: 'log', sub: '10', bgColor: '#212121', color: 'lightgrey',
  },
  { value: 'x!', bgColor: '#212121', color: 'lightgrey' },
  { value: 'sin', bgColor: '#212121', color: 'lightgrey' },
  { value: 'cos', bgColor: '#212121', color: 'lightgrey' },
  { value: 'tan', bgColor: '#212121', color: 'lightgrey' },
  { value: 'e', bgColor: '#212121', color: 'lightgrey' },
  { value: 'EE', bgColor: '#212121', color: 'lightgrey' },
  { value: 'Rad', bgColor: '#212121', color: 'lightgrey' },
  { value: 'sinh', bgColor: '#212121', color: 'lightgrey' },
  { value: 'cosh', bgColor: '#212121', color: 'lightgrey' },
  { value: 'tanh', bgColor: '#212121', color: 'lightgrey' },
  { value: '\u03C0', bgColor: '#212121', color: 'lightgrey' },
  { value: 'Rand', bgColor: '#212121', color: 'lightgrey' },
];
export const operatorMap = {
  '+': '+',
  '-': '-',
  '÷': '/',
  x: '*',
  '%': '%',
};

export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const isCharADigit = (char) => char && char >= 0 && char <= 10;

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
 * @param items
 */
export const isComputable = (items = []) => {
  const operators = ['+', '-', 'x', '÷', '%'];
  let operatorCount = 0;
  let isOperable = false;
  for (let i = 0; i < items.length; i += 1) {
    if (operators.some((operator) => operator === items[i])) {
      operatorCount += 1;
      if (operatorCount >= 1) {
        isOperable = true;
        break;
      }
    }
  }
  return isOperable;
};

export const isOperator = (caar) => ['+', '-', 'x', '÷', '%'].some((operator) => operator === caar);
