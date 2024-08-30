import { routes } from "@/app/entry-routes";
import { Elysia } from "elysia";

export const http = (options: {
	port: number | string;
}) =>
	new Elysia().use(routes).listen(
		{
			port: options.port,
			development: true,
		},
		({ url }) => {
			console.log("%s", url);
		},
	);
