// src/hooks.server.ts
/**@type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	// before the server handles the request,
	// you can do stuff here

	const theme = event.cookies.get('siteTheme');

	// the server handles the request
	// and generates a response
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
	});
	return response;
};
