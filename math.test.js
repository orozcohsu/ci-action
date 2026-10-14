import { test, expect } from 'vitest';
import { add } from './math.js';

// 定義一個測試案例
test('驗證 add 函數是否能正確計算 2 + 3 = 5', () => {
  // 1. 準備與執行：調用 add 函數並輸入參數 2 和 3
  const result = add(2, 3);

  // 2. 斷言/驗證：預期結果要是 5
  expect(result).toBe(5);
});
