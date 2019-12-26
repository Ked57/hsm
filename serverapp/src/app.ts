import fastify from "fastify";
import cors from "fastify-cors";
import { Bearer } from "permit";
import { authorize } from "./util/authorization";

export const main = async () => {
  const app = fastify({ logger: { prettyPrint: true } });

  const permit = new Bearer({});

  app.addHook("preHandler", (req, res) => authorize(permit, req, res));

  app.register(cors, { origin: "*" });

  const address = await app.listen(
    Number(process.env.PORT || "3000"),
    process.env.HOST || "localhost"
  );

  return { app, address };
};

main().catch(err => console.error(err));
