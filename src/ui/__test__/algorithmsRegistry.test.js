import { ALGORITHM_CATEGORIES, ALGORITHMS } from '../algorithmsRegistry';

describe('algorithmsRegistry', () => {
  it('should export non-empty ALGORITHM_CATEGORIES array', () => {
    expect(Array.isArray(ALGORITHM_CATEGORIES)).toBe(true);
    expect(ALGORITHM_CATEGORIES.length).toBeGreaterThan(0);
    expect(ALGORITHM_CATEGORIES).toContain('Math');
    expect(ALGORITHM_CATEGORIES).toContain('Sorting');
    expect(ALGORITHM_CATEGORIES).toContain('Search');
    expect(ALGORITHM_CATEGORIES).toContain('String');
  });

  it('should export valid ALGORITHMS list with required fields', () => {
    expect(Array.isArray(ALGORITHMS)).toBe(true);
    expect(ALGORITHMS.length).toBeGreaterThan(0);

    ALGORITHMS.forEach((algo) => {
      expect(algo.id).toBeDefined();
      expect(algo.name).toBeDefined();
      expect(algo.category).toBeDefined();
      expect(algo.description).toBeDefined();
      expect(Array.isArray(algo.inputs)).toBe(true);
      expect(typeof algo.run).toBe('function');
    });
  });

  it('should run Math algorithm factorial correctly', () => {
    const algo = ALGORITHMS.find((a) => a.id === 'factorial');
    expect(algo).toBeDefined();

    const logs = [];
    const logger = (msg) => logs.push(msg);

    const result = algo.run({ number: 5 }, logger);
    expect(result).toBe(120);
    expect(logs.length).toBeGreaterThan(0);
  });

  it('should run Sorting algorithm Bubble Sort correctly', () => {
    const algo = ALGORITHMS.find((a) => a.id === 'bubble-sort');
    expect(algo).toBeDefined();

    const logs = [];
    const logger = (msg) => logs.push(msg);

    const result = algo.run({ array: '5, 2, 8, 1' }, logger);
    expect(result.sortedArray).toEqual([1, 2, 5, 8]);
    expect(logs.length).toBeGreaterThan(0);
  });

  it('should run Search algorithm Binary Search correctly', () => {
    const algo = ALGORITHMS.find((a) => a.id === 'binary-search');
    expect(algo).toBeDefined();

    const logs = [];
    const logger = (msg) => logs.push(msg);

    const result = algo.run({ array: '1, 3, 5, 7, 9', target: 7 }, logger);
    expect(result).toBe(3);
  });

  it('should run String algorithm Palindrome Check correctly', () => {
    const algo = ALGORITHMS.find((a) => a.id === 'is-palindrome');
    expect(algo).toBeDefined();

    const logs = [];
    const logger = (msg) => logs.push(msg);

    expect(algo.run({ text: 'racecar' }, logger)).toBe(true);
    expect(algo.run({ text: 'hello' }, logger)).toBe(false);
  });

  it('should run Cryptography algorithm Caesar Cipher correctly', () => {
    const algo = ALGORITHMS.find((a) => a.id === 'caesar-cipher');
    expect(algo).toBeDefined();

    const logs = [];
    const logger = (msg) => logs.push(msg);

    const result = algo.run({ text: 'abc', shift: 3 }, logger);
    expect(result.encrypted).toBe('def');
    expect(result.decrypted).toBe('abc');
  });

  it('should run Stack algorithm Valid Parentheses correctly', () => {
    const algo = ALGORITHMS.find((a) => a.id === 'valid-parentheses');
    expect(algo).toBeDefined();

    const logs = [];
    const logger = (msg) => logs.push(msg);

    expect(algo.run({ expression: '{[()]}' }, logger)).toBe(true);
    expect(algo.run({ expression: '{[(]}' }, logger)).toBe(false);
  });

  it('should run Graph algorithm Dijkstra correctly', () => {
    const algo = ALGORITHMS.find((a) => a.id === 'dijkstra');
    expect(algo).toBeDefined();

    const logs = [];
    const logger = (msg) => logs.push(msg);

    const result = algo.run({ edges: 'A-B:4, B-C:2, A-C:10', startVertex: 'A' }, logger);
    expect(result.A).toBe(0);
    expect(result.B).toBe(4);
    expect(result.C).toBe(6);
  });
});
