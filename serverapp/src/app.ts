import fastify from "fastify";
import cors from "fastify-cors";
import fastifyStatic from "fastify-static";
import path from "path";
import { Bearer } from "permit";
import { authorize } from "./util/authorization";
import { registerRoutes } from "./routes/register-routes";
import { getServerStatus } from "./functionalities/server-status";

export const main = async () => {
  const app = fastify({ logger: { prettyPrint: true } });

  const permit = new Bearer({});

  app.addHook("preHandler", (req, res) => authorize(permit, req, res));

  app.register(cors, { origin: "*" });

  app.register(fastifyStatic, {
    root: path.join(__dirname, "webapp")
  });

  registerRoutes(app);

  const address = await app.listen(
    Number(process.env.PORT || "3000"),
    process.env.HOST || "localhost"
  );

  return { app, address };
};

main().catch(err => console.error(err));
