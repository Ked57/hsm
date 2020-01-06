export type State = {
  servers: { [name: string]: Server };
};

export type Server = {
  address: string;
};

export const state: State = { servers: {} };

export const getServer = (name: string): Server | undefined =>
  state.servers[name];

export const getServers = (): { [name: string]: Server } => state.servers;
