// Frontend env
export const NEXT_URL =
	process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';

// Backend env
export function getStrapiURL(path = '' || ``) {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
	}${path}`;
}

// Pages
export const PER_PAGE = 4;
