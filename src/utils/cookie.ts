import { Tag } from '../types';

const sanitizePageCookie = (cookieValue: any) => {
  if (!cookieValue) return 1;
  if (!['number', 'string'].includes(typeof cookieValue)) return 1;

  const cookieNumberValue = Number(cookieValue);

  if (isNaN(cookieNumberValue)) return 1;
  if (cookieNumberValue < 1) return 1;

  return cookieNumberValue;
};

const sanitizeTabCookie = (cookieValue: any) => {
  if (!cookieValue) return Tag.All;
  if (typeof cookieValue !== 'string') return Tag.All;
  if (![Tag.All, Tag.CLI, Tag.GUI, Tag.Website].includes(cookieValue as Tag)) return Tag.All;

  return cookieValue as Tag;
};

export { sanitizePageCookie, sanitizeTabCookie };
