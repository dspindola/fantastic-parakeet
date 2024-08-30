import type { http } from "../server/http";
import { treaty } from "@elysiajs/eden";

type Api = ReturnType<typeof http>;

export const createClient = (domain: string) => treaty<Api>(domain);
