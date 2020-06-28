import { evaluateExpression, isComputable } from './utils';
import '@testing-library/jest-dom/extend-expect';

describe('util', () => {
  describe('evaluateExpression', () => {
    it('should test + works', () => {
      expect(evaluateExpression(['12.3', '+', '34'])).toEqual('46.3');
    });
    it('should test - works', () => {
      expect(evaluateExpression(['12', '-', '34'])).toEqual('-22');
    });
    it('should test x works', () => {
      expect(evaluateExpression(['12.3', 'x', '3'])).toEqual('36.9');
    });
    it('should test / works', () => {
      expect(evaluateExpression(['12', '÷', '-5'])).toEqual('-2.4');
    });
    it('should test first element in operation queue empty string', () => {
      expect(evaluateExpression(['', '12', '+', '34'])).toEqual('46');
    });
    it('should replace consecutive operations with last', () => {
      expect(evaluateExpression(['', '12', 'x', '+', '34'])).toEqual('46');
    });
    it('should work with more than one op', () => {
      // Note: Standard calculators do not use operator precedence.
      // So "1 + 2 * 3" is actually evaluated as (1 + 2) * 3.
      expect(evaluateExpression(['', '1', '+', '2', 'x', '3'])).toEqual('9');
    });
    it('should work leftover operation', () => {
      expect(evaluateExpression(['', '1', '+', '2', 'x'])).toEqual('3');
    });
    it('should divide by zero!', () => {
      expect(evaluateExpression(['', '1', '÷', '0'])).toEqual('Err');
    });
    it('should propagate error on further operations', () => {
      expect(evaluateExpression(['', '1', '÷', '0', '+', '2'])).toEqual('Err');
    });
    it('should work with %', () => {
      expect(evaluateExpression(['40', 'x', '5', '%'])).toEqual('2');
    });
    it('should work with % followed by operations', () => {
      expect(evaluateExpression(['40', 'x', '5', '%', '+', '1'])).toEqual('3');
    });
  });

  describe('isComputable', () => {
    it('should return false when less than 1 operator is present in `items`', () => {
      expect(isComputable(['-1'])).toEqual(false);
    });
    it('should return true when at least 1 operator is present in `items`', () => {
      expect(isComputable(['-1', '-'])).toEqual(true);
    });
  });
});
