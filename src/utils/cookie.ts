import { Tag } from '../types';

const sanitizePageCookie = (cookieValue: any) => {
  const defaultValue = 2;

  if (!cookieValue) return defaultValue;
  if (!['number', 'string'].includes(typeof cookieValue)) return defaultValue;

  const cookieNumberValue = Number(cookieValue);

  if (isNaN(cookieNumberValue)) return defaultValue;
  if (cookieNumberValue < 1) return defaultValue;

  return cookieNumberValue;
};

const sanitizeTabCookie = (cookieValue: any) => {
  // Note: if this value changes, page default value might need to be changed
  const defaultValue = Tag.Website;

  if (!cookieValue) return defaultValue;
  if (typeof cookieValue !== 'string') return defaultValue;
  if (![Tag.All, Tag.CLI, Tag.GUI, Tag.Website].includes(cookieValue as Tag)) return defaultValue;

  return cookieValue as Tag;
};

export { sanitizePageCookie, sanitizeTabCookie };
