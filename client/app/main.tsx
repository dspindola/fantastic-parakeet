import { createRoot } from 'react-dom/client';
import { Route } from './routes/__root';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(<Route.component />);
