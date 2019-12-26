import { Bearer } from "permit";
import fastify = require("fastify");
import { ServerResponse } from "http";

export const authorize = async (
  permit: Bearer,
  request: fastify.FastifyRequest,
  reply: fastify.FastifyReply<ServerResponse>
) => {
  const token = permit.check(request.raw);

  if (process.env.SECURITY_KEY && !token) {
    permit.fail(reply.res);
    throw new Error("Authentication required!");
  }

  if (process.env.SECURITY_KEY && token !== process.env.SECURITY_KEY) {
    permit.fail(reply.res);
    throw new Error("Authentication invalid!");
  }
};
