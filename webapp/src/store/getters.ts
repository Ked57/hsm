import { State } from "./state";

export const getters = {
  managerAddress: (state: State) => state.manager.address
};
