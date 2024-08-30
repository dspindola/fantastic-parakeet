import { Elysia } from "elysia";
import { Route as RootRoute } from "./routes/__root";

export const routes = new Elysia({ prefix: "/api" }).use(RootRoute.handler);
