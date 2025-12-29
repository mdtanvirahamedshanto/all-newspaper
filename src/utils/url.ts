export function getDomain(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

// Simple favicon provider (works on web + mobile; not perfect but good UX).
export function getFaviconUrl(url: string, size: 64 | 128 = 64) {
  const domain = getDomain(url);
  return `https://www.google.com/s2/favicons?sz=${size}&domain=${encodeURIComponent(domain)}`;
}
