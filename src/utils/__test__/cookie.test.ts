import { sanitizePageCookie, sanitizeTabCookie } from '../cookie';
import { Tag } from '../../types';

test('sanitizePageCookie', () => {
  expect(sanitizePageCookie(null)).toBe(1);
  expect(sanitizePageCookie('')).toBe(1);
  expect(sanitizePageCookie(0)).toBe(1);
  expect(sanitizePageCookie('0')).toBe(1);
  expect(sanitizePageCookie([])).toBe(1);
  expect(sanitizePageCookie(undefined)).toBe(1);
  expect(sanitizePageCookie({})).toBe(1);

  expect(sanitizePageCookie([null])).toBe(1);
  expect(sanitizePageCookie([''])).toBe(1);
  expect(sanitizePageCookie([0])).toBe(1);
  expect(sanitizePageCookie(['0'])).toBe(1);
  expect(sanitizePageCookie([[]])).toBe(1);
  expect(sanitizePageCookie([undefined])).toBe(1);
  expect(sanitizePageCookie([{}])).toBe(1);

  expect(sanitizePageCookie(-1)).toBe(1);
  expect(sanitizePageCookie('-1')).toBe(1);

  expect(sanitizePageCookie(1)).toBe(1);
  expect(sanitizePageCookie(2)).toBe(2);
  expect(sanitizePageCookie(3)).toBe(3);
  expect(sanitizePageCookie(4)).toBe(4);
  expect(sanitizePageCookie(5)).toBe(5);
  expect(sanitizePageCookie(6)).toBe(6);
  expect(sanitizePageCookie(7)).toBe(7);
  expect(sanitizePageCookie(8)).toBe(8);

  expect(sanitizePageCookie('1')).toBe(1);
  expect(sanitizePageCookie('2')).toBe(2);
  expect(sanitizePageCookie('3')).toBe(3);
  expect(sanitizePageCookie('4')).toBe(4);
  expect(sanitizePageCookie('5')).toBe(5);
  expect(sanitizePageCookie('6')).toBe(6);
  expect(sanitizePageCookie('7')).toBe(7);
  expect(sanitizePageCookie('8')).toBe(8);
});

test('sanitizeTabCookie', () => {
  expect(sanitizeTabCookie(null)).toBe(Tag.All);
  expect(sanitizeTabCookie('')).toBe(Tag.All);
  expect(sanitizeTabCookie(0)).toBe(Tag.All);
  expect(sanitizeTabCookie('0')).toBe(Tag.All);
  expect(sanitizeTabCookie([])).toBe(Tag.All);
  expect(sanitizeTabCookie(undefined)).toBe(Tag.All);
  expect(sanitizeTabCookie({})).toBe(Tag.All);

  expect(sanitizeTabCookie([null])).toBe(Tag.All);
  expect(sanitizeTabCookie([''])).toBe(Tag.All);
  expect(sanitizeTabCookie([0])).toBe(Tag.All);
  expect(sanitizeTabCookie(['0'])).toBe(Tag.All);
  expect(sanitizeTabCookie([[]])).toBe(Tag.All);
  expect(sanitizeTabCookie([undefined])).toBe(Tag.All);
  expect(sanitizeTabCookie([{}])).toBe(Tag.All);

  expect(sanitizeTabCookie(Tag.React)).toBe(Tag.All);

  expect(sanitizeTabCookie(Tag.All)).toBe(Tag.All);
  expect(sanitizeTabCookie(Tag.CLI)).toBe(Tag.CLI);
  expect(sanitizeTabCookie(Tag.GUI)).toBe(Tag.GUI);
  expect(sanitizeTabCookie(Tag.Website)).toBe(Tag.Website);
});
