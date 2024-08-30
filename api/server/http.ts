import { routes } from "@/app/entry-routes";
import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";

export const http = (options: {
	port: number | string;
}) =>
	new Elysia()
		.use(cors())
		.use(routes)
		.listen(
			{
				port: options.port,
				development: true,
			},
			({ url }) => {
				console.log("%s", url);
			},
		);
