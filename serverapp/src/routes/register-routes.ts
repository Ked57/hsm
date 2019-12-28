import { FastifyInstance } from "fastify";
import { requestHome } from "./home";

export const registerRoutes = (app: FastifyInstance): void => {
  app.post("/api", {}, (req, res) => requestHome(req, res));
};
