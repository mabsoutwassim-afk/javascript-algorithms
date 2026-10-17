// src/ui/algorithmsRegistry.js

// Math
import factorial from '../algorithms/math/factorial/factorial';
import fibonacci from '../algorithms/math/fibonacci/fibonacci';
import euclideanAlgorithm from '../algorithms/math/euclidean-algorithm/euclideanAlgorithm';
import primalityTest from '../algorithms/math/primality-test/trialDivision';
import sieveOfEratosthenes from '../algorithms/math/sieve-of-eratosthenes/sieveOfEratosthenes';
import isPowerOfTwo from '../algorithms/math/is-power-of-two/isPowerOfTwo';
import pascalTriangle from '../algorithms/math/pascal-triangle/pascalTriangle';
import fastPowering from '../algorithms/math/fast-powering/fastPowering';
import euclideanDistance from '../algorithms/math/euclidean-distance/euclideanDistance';
import hornerMethod from '../algorithms/math/horner-method/hornerMethod';
import leastCommonMultiple from '../algorithms/math/least-common-multiple/leastCommonMultiple';
import integerPartition from '../algorithms/math/integer-partition/integerPartition';
import squareRoot from '../algorithms/math/square-root/squareRoot';
import { primeFactors } from '../algorithms/math/prime-factors/primeFactors';
import radianToDegree from '../algorithms/math/radian/radianToDegree';
import degreeToRadian from '../algorithms/math/radian/degreeToRadian';

// Sorting
import BubbleSort from '../algorithms/sorting/bubble-sort/BubbleSort';
import SelectionSort from '../algorithms/sorting/selection-sort/SelectionSort';
import InsertionSort from '../algorithms/sorting/insertion-sort/InsertionSort';
import QuickSort from '../algorithms/sorting/quick-sort/QuickSort';
import MergeSort from '../algorithms/sorting/merge-sort/MergeSort';
import HeapSort from '../algorithms/sorting/heap-sort/HeapSort';
import ShellSort from '../algorithms/sorting/shell-sort/ShellSort';
import CountingSort from '../algorithms/sorting/counting-sort/CountingSort';
import RadixSort from '../algorithms/sorting/radix-sort/RadixSort';
import BucketSort from '../algorithms/sorting/bucket-sort/BucketSort';

// Search
import linearSearch from '../algorithms/search/linear-search/linearSearch';
import binarySearch from '../algorithms/search/binary-search/binarySearch';
import jumpSearch from '../algorithms/search/jump-search/jumpSearch';
import interpolationSearch from '../algorithms/search/interpolation-search/interpolationSearch';

// String
import isPalindrome from '../algorithms/string/palindrome/isPalindrome';
import levenshteinDistance from '../algorithms/string/levenshtein-distance/levenshteinDistance';
import hammingDistance from '../algorithms/string/hamming-distance/hammingDistance';
import knuthMorrisPratt from '../algorithms/string/knuth-morris-pratt/knuthMorrisPratt';
import rabinKarp from '../algorithms/string/rabin-karp/rabinKarp';
import zAlgorithm from '../algorithms/string/z-algorithm/zAlgorithm';
import longestCommonSubstring from '../algorithms/string/longest-common-substring/longestCommonSubstring';

// Sets
import cartesianProduct from '../algorithms/sets/cartesian-product/cartesianProduct';
import powerSet from '../algorithms/sets/power-set/bwPowerSet';
import permutateWithoutRepetitions from '../algorithms/sets/permutations/permutateWithoutRepetitions';
import permutateWithRepetitions from '../algorithms/sets/permutations/permutateWithRepetitions';
import combineWithoutRepetitions from '../algorithms/sets/combinations/combineWithoutRepetitions';
import combineWithRepetitions from '../algorithms/sets/combinations/combineWithRepetitions';
import fisherYates from '../algorithms/sets/fisher-yates/fisherYates';
import dpMaximumSubarray from '../algorithms/sets/maximum-subarray/dpMaximumSubarray';
import longestCommonSubsequence from '../algorithms/sets/longest-common-subsequence/longestCommonSubsequence';
import dpLongestIncreasingSubsequence from '../algorithms/sets/longest-increasing-subsequence/dpLongestIncreasingSubsequence';
import shortestCommonSupersequence from '../algorithms/sets/shortest-common-supersequence/shortestCommonSupersequence';

// Cryptography
import { caesarCipherEncrypt, caesarCipherDecrypt } from '../algorithms/cryptography/caesar-cipher/caesarCipher';
import { encodeRailFenceCipher, decodeRailFenceCipher } from '../algorithms/cryptography/rail-fence-cipher/railFenceCipher';
import PolynomialHash from '../algorithms/cryptography/polynomial-hash/PolynomialHash';

// ML
import kNN from '../algorithms/ml/knn/kNN';

// Statistics
import weightedRandom from '../algorithms/statistics/weighted-random/weightedRandom';

// Stack
import validParentheses from '../algorithms/stack/valid-parentheses/validParentheses';

// Uncategorized
import nQueens from '../algorithms/uncategorized/n-queens/nQueens';
import hanoiTower from '../algorithms/uncategorized/hanoi-tower/hanoiTower';
import recursiveStaircaseMEM from '../algorithms/uncategorized/recursive-staircase/recursiveStaircaseMEM';
import rainTerraces from '../algorithms/uncategorized/rain-terraces/dpRainTerraces';
import uniquePaths from '../algorithms/uncategorized/unique-paths/uniquePaths';
import squareMatrixRotation from '../algorithms/uncategorized/square-matrix-rotation/squareMatrixRotation';

// Linked List
import LinkedList from '../data-structures/linked-list/LinkedList';
import traversal from '../algorithms/linked-list/traversal/traversal';
import reverseTraversal from '../algorithms/linked-list/reverse-traversal/reverseTraversal';

// Graph
import Graph from '../data-structures/graph/Graph';
import GraphVertex from '../data-structures/graph/GraphVertex';
import GraphEdge from '../data-structures/graph/GraphEdge';
import dijkstra from '../algorithms/graph/dijkstra/dijkstra';
import bellmanFord from '../algorithms/graph/bellman-ford/bellmanFord';
import floydWarshall from '../algorithms/graph/floyd-warshall/floydWarshall';
import graphBfs from '../algorithms/graph/breadth-first-search/breadthFirstSearch';
import graphDfs from '../algorithms/graph/depth-first-search/depthFirstSearch';
import topologicalSorting from '../algorithms/graph/topological-sorting/topologicalSort';

/**
 * Helper to parse comma-separated numbers into an array
 */
function parseNumberArray(str) {
  if (Array.isArray(str)) return str;
  if (typeof str !== 'string') return [];
  return str
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .map((item) => Number(item));
}

/**
 * Helper to parse comma-separated strings into an array
 */
function parseStringArray(str) {
  if (Array.isArray(str)) return str;
  if (typeof str !== 'string') return [];
  return str
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item !== '');
}

/**
 * Helper to build Graph instance from adjacency matrix or edges JSON/string
 * e.g. "A-B:4, B-C:2, A-C:10" or JSON
 */
function createGraphFromEdgeString(edgeStr, isDirected = false) {
  const graph = new Graph(isDirected);
  const edges = edgeStr.split(',').map((e) => e.trim()).filter(Boolean);
  edges.forEach((edgeSpec) => {
    // format: A-B:5 or A-B
    const parts = edgeSpec.split(':');
    const vertices = parts[0].split('-');
    const weight = parts[1] ? Number(parts[1]) : 0;

    if (vertices.length === 2) {
      let v1 = graph.getVertexByKey(vertices[0]);
      if (!v1) {
        v1 = new GraphVertex(vertices[0]);
        graph.addVertex(v1);
      }
      let v2 = graph.getVertexByKey(vertices[1]);
      if (!v2) {
        v2 = new GraphVertex(vertices[1]);
        graph.addVertex(v2);
      }
      graph.addEdge(new GraphEdge(v1, v2, weight));
    }
  });
  return graph;
}

/**
 * Helper runner for sorting classes
 */
function runSortClass(SortClass, inputs, logger) {
  const array = parseNumberArray(inputs.array);
  logger(`Input Array: [${array.join(', ')}]`);
  let steps = 0;
  const sorter = new SortClass({
    visitingCallback: (element) => {
      steps += 1;
      logger(`[Step ${steps}] Visiting element: ${element}`);
    },
  });
  const sorted = sorter.sort(array);
  logger(`Sorted Output: [${sorted.join(', ')}] (Total Steps: ${steps})`);
  return { sortedArray: sorted, steps };
}

export const ALGORITHM_CATEGORIES = [
  'Math',
  'Sorting',
  'Search',
  'String',
  'Sets',
  'Cryptography',
  'ML',
  'Statistics',
  'Stack',
  'Graph',
  'Linked List',
  'Uncategorized',
];

export const ALGORITHMS = [
  // --- MATH ---
  {
    id: 'factorial',
    name: 'Factorial',
    category: 'Math',
    description: 'Calculates the factorial of a given non-negative integer n (n!).',
    inputs: [
      { id: 'number', label: 'Number (n)', type: 'number', default: 5 },
    ],
    presets: [
      { label: 'n = 5', values: { number: 5 } },
      { label: 'n = 10', values: { number: 10 } },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.number);
      logger(`Calculating factorial(${n})...`);
      const res = factorial(n);
      logger(`Result: ${res}`);
      return res;
    },
  },
  {
    id: 'fibonacci',
    name: 'Fibonacci Sequence',
    category: 'Math',
    description: 'Generates an array containing the Fibonacci sequence up to n elements.',
    inputs: [
      { id: 'number', label: 'Number of terms (n)', type: 'number', default: 8 },
    ],
    presets: [
      { label: '8 terms', values: { number: 8 } },
      { label: '12 terms', values: { number: 12 } },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.number);
      logger(`Generating ${n} terms of Fibonacci sequence...`);
      const res = fibonacci(n);
      logger(`Result: [${res.join(', ')}]`);
      return res;
    },
  },
  {
    id: 'euclidean-algorithm',
    name: 'Euclidean Algorithm (GCD)',
    category: 'Math',
    description: 'Finds the Greatest Common Divisor (GCD) of two numbers.',
    inputs: [
      { id: 'a', label: 'Number A', type: 'number', default: 252 },
      { id: 'b', label: 'Number B', type: 'number', default: 105 },
    ],
    presets: [
      { label: '252 and 105', values: { a: 252, b: 105 } },
      { label: '48 and 18', values: { a: 48, b: 18 } },
    ],
    run: (inputs, logger) => {
      const a = Number(inputs.a);
      const b = Number(inputs.b);
      logger(`Calculating GCD of ${a} and ${b}...`);
      const res = euclideanAlgorithm(a, b);
      logger(`Result GCD: ${res}`);
      return res;
    },
  },
  {
    id: 'primality-test',
    name: 'Primality Test',
    category: 'Math',
    description: 'Determines whether a given integer is a prime number.',
    inputs: [
      { id: 'number', label: 'Number', type: 'number', default: 29 },
    ],
    presets: [
      { label: '29 (Prime)', values: { number: 29 } },
      { label: '35 (Not Prime)', values: { number: 35 } },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.number);
      logger(`Testing primality for ${n}...`);
      const res = primalityTest(n);
      logger(`Is ${n} Prime? ${res}`);
      return res;
    },
  },
  {
    id: 'sieve-of-eratosthenes',
    name: 'Sieve of Eratosthenes',
    category: 'Math',
    description: 'Finds all prime numbers up to a specified limit.',
    inputs: [
      { id: 'maxNumber', label: 'Maximum Number', type: 'number', default: 30 },
    ],
    presets: [
      { label: 'Primes <= 30', values: { maxNumber: 30 } },
      { label: 'Primes <= 100', values: { maxNumber: 100 } },
    ],
    run: (inputs, logger) => {
      const limit = Number(inputs.maxNumber);
      logger(`Finding all primes up to ${limit}...`);
      const res = sieveOfEratosthenes(limit);
      logger(`Primes found: [${res.join(', ')}] (Total: ${res.length})`);
      return res;
    },
  },
  {
    id: 'is-power-of-two',
    name: 'Is Power of Two',
    category: 'Math',
    description: 'Checks if a given number is a power of two using bitwise operators.',
    inputs: [
      { id: 'number', label: 'Number', type: 'number', default: 16 },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.number);
      logger(`Checking if ${n} is power of 2...`);
      const res = isPowerOfTwo(n);
      logger(`Result: ${res}`);
      return res;
    },
  },
  {
    id: 'pascal-triangle',
    name: 'Pascal Triangle',
    category: 'Math',
    description: 'Calculates the Pascal triangle up to a given line number.',
    inputs: [
      { id: 'lineNumber', label: 'Line Number (0-based)', type: 'number', default: 5 },
    ],
    run: (inputs, logger) => {
      const line = Number(inputs.lineNumber);
      logger(`Calculating Pascal Triangle line ${line}...`);
      const res = pascalTriangle(line);
      logger(`Result: [${res.join(', ')}]`);
      return res;
    },
  },
  {
    id: 'fast-powering',
    name: 'Fast Powering',
    category: 'Math',
    description: 'Calculates a^b in O(log b) time using exponentiation by squaring.',
    inputs: [
      { id: 'base', label: 'Base (a)', type: 'number', default: 2 },
      { id: 'power', label: 'Power (b)', type: 'number', default: 10 },
    ],
    run: (inputs, logger) => {
      const base = Number(inputs.base);
      const power = Number(inputs.power);
      logger(`Calculating ${base}^${power}...`);
      const res = fastPowering(base, power);
      logger(`Result: ${res}`);
      return res;
    },
  },
  {
    id: 'euclidean-distance',
    name: 'Euclidean Distance',
    category: 'Math',
    description: 'Calculates the distance between two points in multi-dimensional space.',
    inputs: [
      { id: 'p1', label: 'Point A (comma-separated)', type: 'text', default: '0, 0' },
      { id: 'p2', label: 'Point B (comma-separated)', type: 'text', default: '3, 4' },
    ],
    run: (inputs, logger) => {
      const p1 = parseNumberArray(inputs.p1);
      const p2 = parseNumberArray(inputs.p2);
      logger(`Calculating Euclidean distance between [${p1}] and [${p2}]...`);
      const res = euclideanDistance([p1], [p2]);
      logger(`Distance: ${res}`);
      return res;
    },
  },
  {
    id: 'horner-method',
    name: 'Horner Method',
    category: 'Math',
    description: 'Polynomial evaluation using Horner algorithm.',
    inputs: [
      { id: 'coefficients', label: 'Coefficients (comma-separated, highest degree first)', type: 'text', default: '2, -6, 2, -1' },
      { id: 'x', label: 'Value x', type: 'number', default: 3 },
    ],
    run: (inputs, logger) => {
      const coeffs = parseNumberArray(inputs.coefficients);
      const x = Number(inputs.x);
      logger(`Evaluating polynomial with coeffs [${coeffs}] at x=${x}...`);
      const res = hornerMethod(coeffs, x);
      logger(`Result: ${res}`);
      return res;
    },
  },
  {
    id: 'least-common-multiple',
    name: 'Least Common Multiple (LCM)',
    category: 'Math',
    description: 'Finds the least common multiple of two integers.',
    inputs: [
      { id: 'a', label: 'Number A', type: 'number', default: 4 },
      { id: 'b', label: 'Number B', type: 'number', default: 6 },
    ],
    run: (inputs, logger) => {
      const a = Number(inputs.a);
      const b = Number(inputs.b);
      logger(`Calculating LCM of ${a} and ${b}...`);
      const res = leastCommonMultiple(a, b);
      logger(`Result LCM: ${res}`);
      return res;
    },
  },
  {
    id: 'integer-partition',
    name: 'Integer Partition',
    category: 'Math',
    description: 'Counts the number of ways to write n as a sum of positive integers.',
    inputs: [
      { id: 'number', label: 'Integer n', type: 'number', default: 5 },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.number);
      logger(`Calculating integer partitions for ${n}...`);
      const res = integerPartition(n);
      logger(`Number of partitions: ${res}`);
      return res;
    },
  },
  {
    id: 'square-root',
    name: 'Square Root (Newton Method)',
    category: 'Math',
    description: 'Calculates the square root of a number using Newton-Raphson method.',
    inputs: [
      { id: 'number', label: 'Number', type: 'number', default: 25 },
      { id: 'tolerance', label: 'Tolerance', type: 'number', default: 1 },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.number);
      const tol = Number(inputs.tolerance);
      logger(`Calculating sqrt(${n}) with tolerance ${tol}...`);
      const res = squareRoot(n, tol);
      logger(`Result: ${res}`);
      return res;
    },
  },
  {
    id: 'prime-factors',
    name: 'Prime Factors',
    category: 'Math',
    description: 'Finds all prime factors of a number.',
    inputs: [
      { id: 'number', label: 'Number', type: 'number', default: 84 },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.number);
      logger(`Finding prime factors of ${n}...`);
      const res = primeFactors(n);
      logger(`Prime factors: [${res.join(', ')}]`);
      return res;
    },
  },
  {
    id: 'radian-degree',
    name: 'Radian <-> Degree Conversion',
    category: 'Math',
    description: 'Converts between Radians and Degrees.',
    inputs: [
      { id: 'degrees', label: 'Degrees', type: 'number', default: 180 },
    ],
    run: (inputs, logger) => {
      const deg = Number(inputs.degrees);
      const rad = degreeToRadian(deg);
      const backDeg = radianToDegree(rad);
      logger(`${deg}° = ${rad} radians`);
      logger(`${rad} rad = ${backDeg}°`);
      return { radians: rad, degrees: backDeg };
    },
  },

  // --- SORTING ---
  {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    category: 'Sorting',
    description: 'Repeatedly steps through list, compares adjacent elements and swaps them if in wrong order.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '5, 2, 8, 1, 9, 3' },
    ],
    presets: [
      { label: 'Unsorted 1', values: { array: '5, 2, 8, 1, 9, 3' } },
      { label: 'Reverse Sorted', values: { array: '9, 8, 7, 6, 5, 4' } },
    ],
    run: (inputs, logger) => runSortClass(BubbleSort, inputs, logger),
  },
  {
    id: 'selection-sort',
    name: 'Selection Sort',
    category: 'Sorting',
    description: 'Divides list into two parts and repeatedly selects minimum element from unsorted part.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '3, 1, 4, 1, 5, 9, 2, 6' },
    ],
    run: (inputs, logger) => runSortClass(SelectionSort, inputs, logger),
  },
  {
    id: 'insertion-sort',
    name: 'Insertion Sort',
    category: 'Sorting',
    description: 'Builds final sorted array one item at a time by inserting elements into correct spot.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '12, 11, 13, 5, 6' },
    ],
    run: (inputs, logger) => runSortClass(InsertionSort, inputs, logger),
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    category: 'Sorting',
    description: 'Divide-and-conquer algorithm that selects a pivot and partitions array around pivot.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '10, 7, 8, 9, 1, 5' },
    ],
    run: (inputs, logger) => runSortClass(QuickSort, inputs, logger),
  },
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    category: 'Sorting',
    description: 'Divide-and-conquer algorithm that divides input into two halves, sorts them and merges them.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '38, 27, 43, 3, 9, 82, 10' },
    ],
    run: (inputs, logger) => runSortClass(MergeSort, inputs, logger),
  },
  {
    id: 'heap-sort',
    name: 'Heap Sort',
    category: 'Sorting',
    description: 'Comparison-based sorting algorithm based on Binary Heap data structure.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '4, 10, 3, 5, 1' },
    ],
    run: (inputs, logger) => runSortClass(HeapSort, inputs, logger),
  },
  {
    id: 'shell-sort',
    name: 'Shell Sort',
    category: 'Sorting',
    description: 'Generalization of insertion sort that allows exchanges of items that are far apart.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '12, 34, 54, 2, 3' },
    ],
    run: (inputs, logger) => runSortClass(ShellSort, inputs, logger),
  },
  {
    id: 'counting-sort',
    name: 'Counting Sort',
    category: 'Sorting',
    description: 'Non-comparison integer sorting algorithm counting number of objects with distinct keys.',
    inputs: [
      { id: 'array', label: 'Integers (comma-separated)', type: 'text', default: '4, 2, 2, 8, 3, 3, 1' },
    ],
    run: (inputs, logger) => runSortClass(CountingSort, inputs, logger),
  },
  {
    id: 'radix-sort',
    name: 'Radix Sort',
    category: 'Sorting',
    description: 'Non-comparative integer sorting algorithm sorting numbers digit by digit.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '170, 45, 75, 90, 802, 24, 2, 66' },
    ],
    run: (inputs, logger) => runSortClass(RadixSort, inputs, logger),
  },
  {
    id: 'bucket-sort',
    name: 'Bucket Sort',
    category: 'Sorting',
    description: 'Distributes elements into buckets and sorts individual buckets.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '29, 25, 3, 49, 9, 37, 21, 43' },
    ],
    run: (inputs, logger) => runSortClass(BucketSort, inputs, logger),
  },

  // --- SEARCH ---
  {
    id: 'linear-search',
    name: 'Linear Search',
    category: 'Search',
    description: 'Sequentially checks each element of the list until a match is found.',
    inputs: [
      { id: 'array', label: 'Array (comma-separated)', type: 'text', default: '1, 5, 8, 12, 19, 23' },
      { id: 'target', label: 'Target Value', type: 'number', default: 12 },
    ],
    run: (inputs, logger) => {
      const arr = parseNumberArray(inputs.array);
      const target = Number(inputs.target);
      logger(`Performing Linear Search for ${target} in [${arr.join(', ')}]...`);
      const indices = linearSearch(arr, target);
      logger(`Found at index/indices: ${JSON.stringify(indices)}`);
      return indices;
    },
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    category: 'Search',
    description: 'Finds position of a target value within a sorted array using divide-and-conquer.',
    inputs: [
      { id: 'array', label: 'Sorted Array (comma-separated)', type: 'text', default: '2, 5, 8, 12, 16, 23, 38, 56, 72, 91' },
      { id: 'target', label: 'Target Value', type: 'number', default: 23 },
    ],
    run: (inputs, logger) => {
      const arr = parseNumberArray(inputs.array);
      const target = Number(inputs.target);
      logger(`Performing Binary Search for ${target} in sorted array...`);
      const index = binarySearch(arr, target);
      logger(index !== -1 ? `Element ${target} found at index ${index}` : `Element ${target} not found (-1)`);
      return index;
    },
  },
  {
    id: 'jump-search',
    name: 'Jump Search',
    category: 'Search',
    description: 'Searches sorted array by jumping ahead by fixed steps then performing linear search.',
    inputs: [
      { id: 'array', label: 'Sorted Array (comma-separated)', type: 'text', default: '0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89' },
      { id: 'target', label: 'Target Value', type: 'number', default: 55 },
    ],
    run: (inputs, logger) => {
      const arr = parseNumberArray(inputs.array);
      const target = Number(inputs.target);
      logger(`Performing Jump Search for ${target}...`);
      const index = jumpSearch(arr, target);
      logger(index !== -1 ? `Element found at index ${index}` : `Element not found (-1)`);
      return index;
    },
  },
  {
    id: 'interpolation-search',
    name: 'Interpolation Search',
    category: 'Search',
    description: 'An improved binary search for uniformly distributed sorted data.',
    inputs: [
      { id: 'array', label: 'Sorted Array (comma-separated)', type: 'text', default: '10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47' },
      { id: 'target', label: 'Target Value', type: 'number', default: 18 },
    ],
    run: (inputs, logger) => {
      const arr = parseNumberArray(inputs.array);
      const target = Number(inputs.target);
      logger(`Performing Interpolation Search for ${target}...`);
      const index = interpolationSearch(arr, target);
      logger(index !== -1 ? `Element found at index ${index}` : `Element not found (-1)`);
      return index;
    },
  },

  // --- STRING ---
  {
    id: 'is-palindrome',
    name: 'Palindrome Check',
    category: 'String',
    description: 'Checks if a string reads the same backward as forward.',
    inputs: [
      { id: 'text', label: 'String', type: 'text', default: 'racecar' },
    ],
    presets: [
      { label: 'racecar', values: { text: 'racecar' } },
      { label: 'hello', values: { text: 'hello' } },
    ],
    run: (inputs, logger) => {
      const str = String(inputs.text);
      logger(`Checking if "${str}" is palindrome...`);
      const res = isPalindrome(str);
      logger(`Is Palindrome? ${res}`);
      return res;
    },
  },
  {
    id: 'levenshtein-distance',
    name: 'Levenshtein Distance',
    category: 'String',
    description: 'Measures difference between two sequence strings (edit distance).',
    inputs: [
      { id: 'a', label: 'String A', type: 'text', default: 'kitten' },
      { id: 'b', label: 'String B', type: 'text', default: 'sitting' },
    ],
    run: (inputs, logger) => {
      const a = String(inputs.a);
      const b = String(inputs.b);
      logger(`Calculating Levenshtein Distance between "${a}" and "${b}"...`);
      const res = levenshteinDistance(a, b);
      logger(`Edit Distance: ${res}`);
      return res;
    },
  },
  {
    id: 'hamming-distance',
    name: 'Hamming Distance',
    category: 'String',
    description: 'Number of positions at which corresponding symbols are different in equal length strings.',
    inputs: [
      { id: 'a', label: 'String A', type: 'text', default: 'karolin' },
      { id: 'b', label: 'String B', type: 'text', default: 'kathrin' },
    ],
    run: (inputs, logger) => {
      const a = String(inputs.a);
      const b = String(inputs.b);
      logger(`Calculating Hamming Distance between "${a}" and "${b}"...`);
      const res = hammingDistance(a, b);
      logger(`Distance: ${res}`);
      return res;
    },
  },
  {
    id: 'knuth-morris-pratt',
    name: 'Knuth-Morris-Pratt (KMP)',
    category: 'String',
    description: 'Sub-string pattern matching algorithm using prefix function.',
    inputs: [
      { id: 'text', label: 'Text String', type: 'text', default: 'abcxabcabxa' },
      { id: 'word', label: 'Pattern Word', type: 'text', default: 'abcab' },
    ],
    run: (inputs, logger) => {
      const text = String(inputs.text);
      const word = String(inputs.word);
      logger(`Running KMP algorithm for word "${word}" in text "${text}"...`);
      const pos = knuthMorrisPratt(text, word);
      logger(`Pattern match position: ${pos}`);
      return pos;
    },
  },
  {
    id: 'rabin-karp',
    name: 'Rabin-Karp Algorithm',
    category: 'String',
    description: 'String searching algorithm using rolling hashes.',
    inputs: [
      { id: 'text', label: 'Text String', type: 'text', default: 'abcxabcabxa' },
      { id: 'word', label: 'Pattern Word', type: 'text', default: 'abcab' },
    ],
    run: (inputs, logger) => {
      const text = String(inputs.text);
      const word = String(inputs.word);
      logger(`Running Rabin-Karp for word "${word}" in text "${text}"...`);
      const pos = rabinKarp(text, word);
      logger(`Pattern match position: ${pos}`);
      return pos;
    },
  },
  {
    id: 'z-algorithm',
    name: 'Z Algorithm',
    category: 'String',
    description: 'Finds occurrences of pattern in text in linear time using Z-array.',
    inputs: [
      { id: 'text', label: 'Text String', type: 'text', default: 'ababa' },
      { id: 'word', label: 'Pattern Word', type: 'text', default: 'aba' },
    ],
    run: (inputs, logger) => {
      const text = String(inputs.text);
      const word = String(inputs.word);
      logger(`Running Z-algorithm searching for "${word}" in "${text}"...`);
      const res = zAlgorithm(text, word);
      logger(`Positions found: [${res.join(', ')}]`);
      return res;
    },
  },
  {
    id: 'longest-common-substring',
    name: 'Longest Common Substring',
    category: 'String',
    description: 'Finds the longest string that is a substring of two strings.',
    inputs: [
      { id: 'a', label: 'String A', type: 'text', default: 'ABCCAF' },
      { id: 'b', label: 'String B', type: 'text', default: 'BCCAF' },
    ],
    run: (inputs, logger) => {
      const a = String(inputs.a);
      const b = String(inputs.b);
      logger(`Finding Longest Common Substring of "${a}" and "${b}"...`);
      const res = longestCommonSubstring(a, b);
      logger(`Result: "${res}"`);
      return res;
    },
  },

  // --- SETS ---
  {
    id: 'cartesian-product',
    name: 'Cartesian Product',
    category: 'Sets',
    description: 'Calculates Cartesian product of two sets.',
    inputs: [
      { id: 'setA', label: 'Set A (comma-separated)', type: 'text', default: '1, 2' },
      { id: 'setB', label: 'Set B (comma-separated)', type: 'text', default: 'a, b' },
    ],
    run: (inputs, logger) => {
      const setA = parseStringArray(inputs.setA);
      const setB = parseStringArray(inputs.setB);
      logger(`Computing Cartesian Product of [${setA}] x [${setB}]...`);
      const res = cartesianProduct(setA, setB);
      logger(`Result: ${JSON.stringify(res)}`);
      return res;
    },
  },
  {
    id: 'power-set',
    name: 'Power Set',
    category: 'Sets',
    description: 'Generates all subsets of a given set.',
    inputs: [
      { id: 'originalSet', label: 'Set Elements (comma-separated)', type: 'text', default: '1, 2, 3' },
    ],
    run: (inputs, logger) => {
      const set = parseStringArray(inputs.originalSet);
      logger(`Generating Power Set for [${set.join(', ')}]...`);
      const res = powerSet(set);
      logger(`Power Set count: ${res.length}`);
      logger(`Subsets: ${JSON.stringify(res)}`);
      return res;
    },
  },
  {
    id: 'permutations',
    name: 'Permutations (Without Repetitions)',
    category: 'Sets',
    description: 'Generates all permutations of a given set of elements without repetitions.',
    inputs: [
      { id: 'set', label: 'Elements (comma-separated)', type: 'text', default: 'A, B, C' },
    ],
    run: (inputs, logger) => {
      const items = parseStringArray(inputs.set);
      logger(`Generating Permutations for [${items.join(', ')}]...`);
      const res = permutateWithoutRepetitions(items);
      logger(`Total Permutations: ${res.length}`);
      logger(`Permutations: ${JSON.stringify(res)}`);
      return res;
    },
  },
  {
    id: 'combinations',
    name: 'Combinations (Without Repetitions)',
    category: 'Sets',
    description: 'Generates all combinations of size k from n elements without repetitions.',
    inputs: [
      { id: 'set', label: 'Elements (comma-separated)', type: 'text', default: '1, 2, 3, 4' },
      { id: 'k', label: 'Combination length (k)', type: 'number', default: 2 },
    ],
    run: (inputs, logger) => {
      const items = parseStringArray(inputs.set);
      const k = Number(inputs.k);
      logger(`Generating combinations of length ${k} from [${items.join(', ')}]...`);
      const res = combineWithoutRepetitions(items, k);
      logger(`Total Combinations: ${res.length}`);
      logger(`Combinations: ${JSON.stringify(res)}`);
      return res;
    },
  },
  {
    id: 'fisher-yates',
    name: 'Fisher-Yates Shuffle',
    category: 'Sets',
    description: 'Randomly shuffles an array in-place in linear O(n) time.',
    inputs: [
      { id: 'array', label: 'Array (comma-separated)', type: 'text', default: '1, 2, 3, 4, 5, 6, 7, 8, 9' },
    ],
    run: (inputs, logger) => {
      const arr = parseStringArray(inputs.array);
      logger(`Original Array: [${arr.join(', ')}]`);
      const shuffled = fisherYates([...arr]);
      logger(`Shuffled Array: [${shuffled.join(', ')}]`);
      return shuffled;
    },
  },
  {
    id: 'maximum-subarray',
    name: 'Maximum Subarray (Kadane/DP)',
    category: 'Sets',
    description: 'Finds contiguous subarray with maximum sum.',
    inputs: [
      { id: 'array', label: 'Array of numbers', type: 'text', default: '-2, 1, -3, 4, -1, 2, 1, -5, 4' },
    ],
    run: (inputs, logger) => {
      const arr = parseNumberArray(inputs.array);
      logger(`Finding Maximum Subarray for [${arr.join(', ')}]...`);
      const res = dpMaximumSubarray(arr);
      logger(`Max Subarray Sum: ${res}`);
      return res;
    },
  },
  {
    id: 'longest-common-subsequence',
    name: 'Longest Common Subsequence (LCS)',
    category: 'Sets',
    description: 'Finds the longest subsequence common to two sequences.',
    inputs: [
      { id: 'a', label: 'Sequence A', type: 'text', default: 'ABCDGH' },
      { id: 'b', label: 'Sequence B', type: 'text', default: 'AEDFHR' },
    ],
    run: (inputs, logger) => {
      const a = parseStringArray(inputs.a);
      const b = parseStringArray(inputs.b);
      logger(`Finding LCS of [${a}] and [${b}]...`);
      const res = longestCommonSubsequence(a, b);
      logger(`LCS Result: [${res.join(', ')}]`);
      return res;
    },
  },
  {
    id: 'longest-increasing-subsequence',
    name: 'Longest Increasing Subsequence',
    category: 'Sets',
    description: 'Finds length of longest increasing subsequence in array.',
    inputs: [
      { id: 'array', label: 'Numbers (comma-separated)', type: 'text', default: '10, 22, 9, 33, 21, 50, 41, 60, 80' },
    ],
    run: (inputs, logger) => {
      const arr = parseNumberArray(inputs.array);
      logger(`Finding LIS length for [${arr.join(', ')}]...`);
      const res = dpLongestIncreasingSubsequence(arr);
      logger(`LIS Length: ${res}`);
      return res;
    },
  },

  // --- CRYPTOGRAPHY ---
  {
    id: 'caesar-cipher',
    name: 'Caesar Cipher',
    category: 'Cryptography',
    description: 'Substitution cipher shifting characters by a fixed offset.',
    inputs: [
      { id: 'text', label: 'Text', type: 'text', default: 'Hello World!' },
      { id: 'shift', label: 'Shift Offset', type: 'number', default: 3 },
    ],
    run: (inputs, logger) => {
      const text = String(inputs.text);
      const shift = Number(inputs.shift);
      logger(`Encrypting "${text}" with shift=${shift}...`);
      const encrypted = caesarCipherEncrypt(text, shift);
      logger(`Encrypted: "${encrypted}"`);
      const decrypted = caesarCipherDecrypt(encrypted, shift);
      logger(`Decrypted back: "${decrypted}"`);
      return { encrypted, decrypted };
    },
  },
  {
    id: 'rail-fence-cipher',
    name: 'Rail Fence Cipher',
    category: 'Cryptography',
    description: 'Transposition cipher writing message in zigzag on rails.',
    inputs: [
      { id: 'text', label: 'Text', type: 'text', default: 'WE ARE DISCOVERED FLEE AT ONCE' },
      { id: 'rails', label: 'Number of Rails', type: 'number', default: 3 },
    ],
    run: (inputs, logger) => {
      const text = String(inputs.text);
      const rails = Number(inputs.rails);
      logger(`Encoding "${text}" with ${rails} rails...`);
      const encoded = encodeRailFenceCipher(text, rails);
      logger(`Encoded: "${encoded}"`);
      const decoded = decodeRailFenceCipher(encoded, rails);
      logger(`Decoded back: "${decoded}"`);
      return { encoded, decoded };
    },
  },
  {
    id: 'polynomial-hash',
    name: 'Polynomial Rolling Hash',
    category: 'Cryptography',
    description: 'Calculates rolling hash of a string using polynomial rolling hash algorithm.',
    inputs: [
      { id: 'text', label: 'String', type: 'text', default: 'algorithm' },
    ],
    run: (inputs, logger) => {
      const text = String(inputs.text);
      logger(`Calculating polynomial hash for "${text}"...`);
      const hasher = new PolynomialHash();
      const hash = hasher.hash(text);
      logger(`Hash value: ${hash}`);
      return hash;
    },
  },

  // --- ML ---
  {
    id: 'k-nn',
    name: 'k-Nearest Neighbors (k-NN)',
    category: 'ML',
    description: 'Classifies data point based on majority vote of its k-nearest neighbors.',
    inputs: [
      { id: 'data', label: 'Data Points JSON', type: 'text', default: '[ [1, 2], [2, 3], [3, 1], [6, 5], [7, 7] ]' },
      { id: 'labels', label: 'Labels (comma-separated)', type: 'text', default: 'A, A, A, B, B' },
      { id: 'toClassify', label: 'Target Point (x, y)', type: 'text', default: '2, 2' },
      { id: 'k', label: 'k value', type: 'number', default: 3 },
    ],
    run: (inputs, logger) => {
      const dataPoints = JSON.parse(inputs.data);
      const labels = parseStringArray(inputs.labels);
      const toClassify = parseNumberArray(inputs.toClassify);
      const k = Number(inputs.k);
      logger(`Classifying point [${toClassify}] with k=${k}...`);
      const label = kNN(dataPoints, labels, toClassify, k);
      logger(`Assigned Label: ${label}`);
      return label;
    },
  },

  // --- STATISTICS ---
  {
    id: 'weighted-random',
    name: 'Weighted Random Selection',
    category: 'Statistics',
    description: 'Randomly selects item from list based on assigned weights.',
    inputs: [
      { id: 'items', label: 'Items (comma-separated)', type: 'text', default: 'Apple, Banana, Cherry' },
      { id: 'weights', label: 'Weights (comma-separated)', type: 'text', default: '10, 80, 10' },
    ],
    run: (inputs, logger) => {
      const items = parseStringArray(inputs.items);
      const weights = parseNumberArray(inputs.weights);
      logger(`Selecting item randomly based on weights [${weights}]...`);
      const item = weightedRandom(items, weights);
      logger(`Selected item: "${item}"`);
      return item;
    },
  },

  // --- STACK ---
  {
    id: 'valid-parentheses',
    name: 'Valid Parentheses',
    category: 'Stack',
    description: 'Determines if input string has valid matching open and close parentheses.',
    inputs: [
      { id: 'expression', label: 'Expression String', type: 'text', default: '{[()]}' },
    ],
    presets: [
      { label: '{[()]} (Valid)', values: { expression: '{[()]}' } },
      { label: '{[(])} (Invalid)', values: { expression: '{[(])}' } },
    ],
    run: (inputs, logger) => {
      const expr = String(inputs.expression);
      logger(`Checking validity of expression "${expr}"...`);
      const res = validParentheses(expr);
      logger(`Is Valid? ${res}`);
      return res;
    },
  },

  // --- GRAPH ---
  {
    id: 'dijkstra',
    name: 'Dijkstra Shortest Path',
    category: 'Graph',
    description: 'Finds shortest paths from start vertex to all other vertices in non-negative weighted graph.',
    inputs: [
      { id: 'edges', label: 'Edges (Format: A-B:4, B-C:2, A-C:10)', type: 'text', default: 'A-B:4, B-C:2, A-C:10, C-D:1, B-D:5' },
      { id: 'startVertex', label: 'Start Vertex', type: 'text', default: 'A' },
    ],
    run: (inputs, logger) => {
      const graph = createGraphFromEdgeString(inputs.edges, false);
      const startV = graph.getVertexByKey(inputs.startVertex.trim());
      if (!startV) throw new Error(`Start vertex "${inputs.startVertex}" not found in graph.`);
      logger(`Running Dijkstra from start vertex "${startV.getKey()}"...`);
      const { distances } = dijkstra(graph, startV);
      logger(`Shortest Distances: ${JSON.stringify(distances)}`);
      return distances;
    },
  },
  {
    id: 'graph-bfs',
    name: 'Graph Breadth-First Search (BFS)',
    category: 'Graph',
    description: 'Traverses graph level by level starting from specified node.',
    inputs: [
      { id: 'edges', label: 'Edges (A-B, B-C, A-C, C-D)', type: 'text', default: 'A-B, B-C, A-C, C-D, D-E' },
      { id: 'startVertex', label: 'Start Vertex', type: 'text', default: 'A' },
    ],
    run: (inputs, logger) => {
      const graph = createGraphFromEdgeString(inputs.edges, false);
      const startV = graph.getVertexByKey(inputs.startVertex.trim());
      const visited = [];
      const callbacks = {
        enterVertex: ({ currentVertex }) => {
          visited.push(currentVertex.getKey());
          logger(`Visited vertex: ${currentVertex.getKey()}`);
        },
      };
      logger(`Starting Graph BFS from "${inputs.startVertex}"...`);
      graphBfs(graph, startV, callbacks);
      logger(`BFS Order: [${visited.join(' -> ')}]`);
      return visited;
    },
  },
  {
    id: 'topological-sorting',
    name: 'Topological Sort',
    category: 'Graph',
    description: 'Linear ordering of vertices in a Directed Acyclic Graph (DAG).',
    inputs: [
      { id: 'edges', label: 'Directed Edges (A-B, B-C, A-C)', type: 'text', default: 'A-B, B-C, A-C, B-D' },
    ],
    run: (inputs, logger) => {
      const graph = createGraphFromEdgeString(inputs.edges, true);
      logger(`Running Topological Sort on DAG...`);
      const sortedStack = topologicalSorting(graph);
      const sortedKeys = [];
      while (!sortedStack.isEmpty()) {
        sortedKeys.push(sortedStack.pop().getKey());
      }
      logger(`Topological Order: [${sortedKeys.join(' -> ')}]`);
      return sortedKeys;
    },
  },

  // --- LINKED LIST ---
  {
    id: 'linked-list-traversal',
    name: 'Linked List Traversal',
    category: 'Linked List',
    description: 'Traverses a singly linked list and logs every node value.',
    inputs: [
      { id: 'nodes', label: 'Node Values (comma-separated)', type: 'text', default: '10, 20, 30, 40, 50' },
    ],
    run: (inputs, logger) => {
      const values = parseStringArray(inputs.nodes);
      const linkedList = new LinkedList();
      values.forEach((v) => linkedList.append(v));

      const visited = [];
      const callback = (value) => {
        visited.push(value);
        logger(`Traversed node: ${value}`);
      };

      logger(`Traversing Linked List...`);
      traversal(linkedList, callback);
      logger(`Traversal complete: [${visited.join(' -> ')}]`);
      return visited;
    },
  },

  // --- UNCATEGORIZED ---
  {
    id: 'n-queens',
    name: 'N-Queens Problem',
    category: 'Uncategorized',
    description: 'Places n non-attacking queens on an n x n chessboard.',
    inputs: [
      { id: 'n', label: 'Board Size (n)', type: 'number', default: 4 },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.n);
      logger(`Solving N-Queens for n=${n}...`);
      const solutions = nQueens(n);
      logger(`Total Solutions Found: ${solutions.length}`);
      return solutions;
    },
  },
  {
    id: 'hanoi-tower',
    name: 'Tower of Hanoi',
    category: 'Uncategorized',
    description: 'Mathematical puzzle solving disk movements between 3 rods.',
    inputs: [
      { id: 'disks', label: 'Number of Disks', type: 'number', default: 3 },
    ],
    run: (inputs, logger) => {
      const disks = Number(inputs.disks);
      logger(`Solving Tower of Hanoi for ${disks} disks...`);
      const moves = [];
      hanoiTower({
        numberOfDisks: disks,
        moveCallback: (disk, from, to) => {
          moves.push(`Move disk ${disk} from ${from} to ${to}`);
        },
      });
      moves.forEach((m, idx) => logger(`[Step ${idx + 1}] ${m}`));
      return moves;
    },
  },
  {
    id: 'recursive-staircase',
    name: 'Recursive Staircase',
    category: 'Uncategorized',
    description: 'Calculates ways to reach top of n stairs taking 1 or 2 steps.',
    inputs: [
      { id: 'stairs', label: 'Number of Stairs (n)', type: 'number', default: 5 },
    ],
    run: (inputs, logger) => {
      const n = Number(inputs.stairs);
      logger(`Calculating staircase ways for ${n} steps...`);
      const res = recursiveStaircaseMEM(n);
      logger(`Number of ways: ${res}`);
      return res;
    },
  },
  {
    id: 'rain-terraces',
    name: 'Rain Terraces (Trapping Rain Water)',
    category: 'Uncategorized',
    description: 'Calculates total water trapped after raining given terrace heights.',
    inputs: [
      { id: 'terraces', label: 'Heights (comma-separated)', type: 'text', default: '3, 0, 0, 2, 0, 4' },
    ],
    run: (inputs, logger) => {
      const terraces = parseNumberArray(inputs.terraces);
      logger(`Calculating trapped rain water for heights [${terraces.join(', ')}]...`);
      const water = rainTerraces(terraces);
      logger(`Trapped Water Volume: ${water}`);
      return water;
    },
  },
  {
    id: 'unique-paths',
    name: 'Unique Paths Grid',
    category: 'Uncategorized',
    description: 'Finds number of unique paths from top-left to bottom-right in m x n grid.',
    inputs: [
      { id: 'width', label: 'Grid Width (m)', type: 'number', default: 3 },
      { id: 'height', label: 'Grid Height (n)', type: 'number', default: 3 },
    ],
    run: (inputs, logger) => {
      const width = Number(inputs.width);
      const height = Number(inputs.height);
      logger(`Calculating unique paths for ${width} x ${height} grid...`);
      const res = uniquePaths(width, height);
      logger(`Unique Paths Count: ${res}`);
      return res;
    },
  },
  {
    id: 'square-matrix-rotation',
    name: 'Square Matrix Rotation',
    category: 'Uncategorized',
    description: 'Rotates an n x n matrix in place by 90 degrees clockwise.',
    inputs: [
      { id: 'matrix', label: 'Matrix JSON', type: 'text', default: '[[1, 2, 3], [4, 5, 6], [7, 8, 9]]' },
    ],
    run: (inputs, logger) => {
      const matrix = JSON.parse(inputs.matrix);
      logger(`Original Matrix: ${JSON.stringify(matrix)}`);
      const rotated = squareMatrixRotation(matrix);
      logger(`Rotated Matrix: ${JSON.stringify(rotated)}`);
      return rotated;
    },
  },
];
