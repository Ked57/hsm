import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from "http";

export const requestHome = async (
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
) => res.send({ hello: "world" });
