import { getGitHubRepo, getWebsite } from '../urls';

test('getGitHubRepo', () => {
  expect(getGitHubRepo('connect-four')).toBe('https://github.com/sebranly/connect-four');
});

test('getWebsite', () => {
  expect(getWebsite('dmz')).toBe('https://sebranly.github.io/dmz');
});
