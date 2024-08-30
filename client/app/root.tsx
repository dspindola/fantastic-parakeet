import { renderToStaticMarkup } from 'react-dom/server';

export default function Root() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>{import.meta.env.VITE_APP_TITLE}</title>
				<link rel='shortcut icon' href='/favicon.svg' type='image/svg+xml' />
			</head>
			<body>
				<div id='root' />
				<script type='module' src='app/main.tsx' />
			</body>
		</html>
	);
}

export const render = ({ request }: { request: Request }) => {
	const pathname = new URL(request.url).pathname;

	if (pathname === '/') {
		return new Response(renderToStaticMarkup(<Root />), {
			headers: {
				'Content-Type': 'text/html',
			},
		});
	}
};
