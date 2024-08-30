import Elysia from "elysia";

export const Route = {
	handler: new Elysia().get("/", () => "hi"),
};
