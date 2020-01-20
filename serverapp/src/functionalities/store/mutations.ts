import { State } from "./store";

export type AddServerPayload = { address: string; name: string };
export type DeleteServerPayload = { name: string };
export type UpdateServerPayload = { address: string; name: string };
export type Mutation<T> = (state: State, payload: T) => [State, Error?];

export const mutationTypes = {
  ADD_SERVER: "addServer",
  UPDATE_SERVER: "updateServer",
  DELETE_SERVER: "deleteServer"
};

const addServer: Mutation<AddServerPayload> = (state, payload) => {
  if (!state.servers[payload.name]) {
    state.servers[payload.name] = { address: payload.address };
    return [state, undefined];
  }
  return [state, new Error("This server already exists")];
};

const deleteServer: Mutation<DeleteServerPayload> = (state, payload) => {
  if (!state.servers[payload.name]) {
    return [state, new Error("This server doesn't exists")];
  }
  delete state.servers[payload.name];
  return [state, undefined];
};

const updateServer: Mutation<UpdateServerPayload> = (state, payload) => {
  if (state.servers[payload.name]) {
    state.servers[payload.name].address = payload.address;
    return [state, undefined];
  }
  return [state, new Error("This server doesn't exist")];
};

export const mutations = {
  [mutationTypes.ADD_SERVER]: addServer,
  [mutationTypes.DELETE_SERVER]: deleteServer,
  [mutationTypes.UPDATE_SERVER]: updateServer
};
