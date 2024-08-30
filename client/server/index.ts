import { Elysia } from 'elysia';
import { vite } from 'elysia-vite-server';
import { render } from '@/app/root';

new Elysia()
	.use(
		vite({
			static: {
				assets: process.cwd(),
				alwaysStatic: false,
				noCache: true,
			},
		}),
	)
	.onRequest(render)
	.listen(
		{
			port: process.env.PORT,
		},
		({ url }) => {
			console.log('%s', url);
		},
	);
