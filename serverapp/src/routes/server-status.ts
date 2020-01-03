import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from "http";
import { getServerStatus } from "../functionalities/server-status";
import { parseBody } from "../util/body-parsing";

export const requestServerStatus = async (
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
) => {
  const address = parseBody(req.body)?.address;
  if (!address) {
    res.code(400).send({ error: "Missing parameter 'address'" });
    return;
  }
  const [available, pingData, err] = await getServerStatus(address);
  if (err) {
    console.error(err);
    res.send({ available, error: err });
    return;
  }
  res.send({
    available,
    ping: pingData.avg
  });
};
