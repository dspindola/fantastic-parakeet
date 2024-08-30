import { createRoot } from 'react-dom/client';
import { Route } from './routes/__root';
import { Suspense } from 'react';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
	<Suspense fallback={'loading'}>
		<Route.component />
	</Suspense>,
);
