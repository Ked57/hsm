import fastify from "fastify";
import cors from "fastify-cors";
import fastifyStatic from "fastify-static";
import path from "path";
import { Bearer } from "permit";
import { authorize } from "./util/authorization";
import { registerRoutes } from "./routes/register-routes";

export const main = async (port: number) => {
  const app = fastify();// { logger: { prettyPrint: true } }

  const permit = new Bearer({});

  app.addHook("preHandler", (req, res) => authorize(permit, req, res));

  app.register(cors);

  app.register(fastifyStatic, {
    root: path.join(__dirname, "webapp")
  });

  registerRoutes(app);

  const address = await app.listen(port, process.env.HOST || "localhost");

  return { app, address };
};

main(Number(process.env.PORT || "3000")).catch(err => console.error(err));
