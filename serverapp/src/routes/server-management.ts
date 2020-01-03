import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from "http";
import { getServers, getServer, state } from "../functionalities/store/store";
import { mutations, mutationTypes } from "../functionalities/store/mutations";
import { parseBody } from "../util/body-parsing";

type RequestServer = {
  name: string;
};

type RequestAddServer = {
  name: string;
  address: string;
};

type RequestUpdateServer = {
  name: string;
  address: string;
};

type RequestDeleteServer = {
  name: string;
};

const isRequestServer = (payload: any): payload is RequestServer =>
  payload && payload.name && typeof payload.name === "string";

const isRequestAddServer = (payload: any): payload is RequestAddServer =>
  payload &&
  payload.name &&
  typeof payload.name === "string" &&
  payload.address &&
  typeof payload.address === "string";

const isRequestUpdateServer = (payload: any): payload is RequestUpdateServer =>
  payload &&
  payload.name &&
  typeof payload.name === "string" &&
  payload.address &&
  typeof payload.address === "string";

const isRequestDeleteServer = (payload: any): payload is RequestDeleteServer =>
  payload && payload.name && typeof payload.name === "string";

export const requestServerList = (
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
) => {
  res.send(getServers());
};

export const requestServer = (
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
) => {
  const payload = parseBody(req.body);
  if (!isRequestServer(payload)) {
    res.code(400).send({ error: "Missing parameter 'name'" });
    return;
  }
  const server = getServer(payload.name);
  if (!server) {
    res.code(404).send({ error: "The server you asked was not found" });
    return;
  }
  res.send(server);
};

export const requestAddServer = (
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
) => {
  const payload = parseBody(req.body);
  if (!isRequestAddServer(payload)) {
    res.code(400).send({ error: "Incorrect parameters" });
    return;
  }
  mutations[mutationTypes.ADD_SERVER](state, payload);
  res.send(200);
};

export const requestUpdateServer = (
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
) => {
  const payload = parseBody(req.body);
  if (!isRequestUpdateServer(payload)) {
    res.code(400).send({ error: "Incorrect parameters" });
    return;
  }
  mutations[mutationTypes.UPDATE_SERVER](state, payload);
  res.send(200);
};

export const requestDeleteServer = (
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
) => {
  const payload = parseBody(req.body);
  if (!isRequestDeleteServer(payload)) {
    res.code(400).send({ error: "Incorrect parameters" });
    return;
  }
  mutations[mutationTypes.DELETE_SERVER](state, payload as any); // idk why typescript doesn't like this otherwise
  res.send(200);
};
