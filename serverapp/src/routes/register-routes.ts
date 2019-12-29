import { FastifyInstance } from "fastify";
import { requestHome } from "./home";
import { requestServerStatus } from "./server-status";

export const registerRoutes = (app: FastifyInstance): void => {
  app.post("/api", {}, requestHome);
  app.post("/api/ping", requestServerStatus);
};
