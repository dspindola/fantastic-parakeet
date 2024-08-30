import { use } from 'react';
import { rpc } from '../api';

export const Route = {
	component: () => {
		const { data } = use(rpc.api.index.get());
		return <>{data}</>;
	},
};
