import { State } from "./state";

export const getters = {
  serverAddress: (state: State) => state.server.address
};
