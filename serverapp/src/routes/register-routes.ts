import { FastifyInstance } from "fastify";
import { requestHome } from "./home";
import { requestServerStatus } from "./server-status";
import {
  requestServerList,
  requestServer,
  requestAddServer,
  requestUpdateServer,
  requestDeleteServer
} from "./server-management";

export const registerRoutes = (app: FastifyInstance): void => {
  app.post("/api", {}, requestHome);
  app.post("/api/ping", requestServerStatus);
  app.post("/api/server/list", requestServerList);
  app.post("/api/server/add", requestAddServer);
  app.post("/api/server/update", requestUpdateServer);
  app.post("/api/server/delete", requestDeleteServer);
  app.post("/api/server", requestServer);
};
