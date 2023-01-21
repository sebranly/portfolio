import { ImageExtension, ImageFolder } from '../../types';
import { getGitHubRepo, getImageLink, getWebsite } from '../urls';

test('getGitHubRepo', () => {
  expect(getGitHubRepo('connect-four')).toBe('https://github.com/sebranly/connect-four');
});

test('getImageLink', () => {
  const link = getImageLink(ImageFolder.ConnectFour, 1, ImageExtension.PNG);
  expect(link).toBe(
    `https://raw.githubusercontent.com/sebranly/portfolio/main/public/img/projects_wrong/ConnectFour/img1.png`
  );
});

test('getWebsite', () => {
  expect(getWebsite('dmz')).toBe('https://sebranly.github.io/dmz');
});
