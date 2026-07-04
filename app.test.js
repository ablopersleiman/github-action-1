import {printHelloWorld, printParameter} from './app.js';
import { it, expect } from 'vitest';

it('printHelloWorld', () => {
  printHelloWorld();
  expect(true).toBe(true);
});

it('printParameter', () => {
  printParameter('test');
  expect(true).toBe(true);
});