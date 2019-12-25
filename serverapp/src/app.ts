import fastify from "fastify";

export const main = async () => {
  const app = fastify({ logger: { prettyPrint: true } });
  const address = await app.listen(
    Number(process.env.PORT || "3000"),
    process.env.HOST || "localhost"
  );

  return { app, address };
};

main().catch(err => console.error(err));
