// Bump when the social artwork renderer changes so shared previews avoid stale CDN images.
export const socialImageVersion = 'v2';
export const defaultSocialSlug = `social-${socialImageVersion}`;
export const defaultSocialPath = `/media/${defaultSocialSlug}.png`;
export const articleSocialSlug = (id: string) => `${id}-${socialImageVersion}`;
export const articleSocialPath = (id: string) => `/media/artikel/${articleSocialSlug(id)}.png`;
