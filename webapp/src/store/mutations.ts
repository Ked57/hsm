import {
  MUTATIONS,
  UpdateManagerSettingsPayload,
  UpdateServerStatusPayload,
  UpdateMenuDisplay
} from "./mutation-definitions";
import { State } from "./state";

export const mutations = {
  [MUTATIONS.UPDATE_MANAGER_SETTINGS]: (
    state: State,
    payload: UpdateManagerSettingsPayload
  ) => (state.manager = payload),
  [MUTATIONS.UPDATE_SERVER_STATUS]: (
    state: State,
    payload: UpdateServerStatusPayload
  ) => {
    const serverToUpdate = state.servers["mine"];
    state.servers = {
      ...state.servers,
      ["mine"]: {
        ...serverToUpdate,
        status: { isUp: payload.available, ping: payload.ping || 0 }
      }
    };
  },
  [MUTATIONS.UPDATE_MENU_DISPLAY]: (state: State, payload: UpdateMenuDisplay) => {
    state.showMenu = payload.show;
  }
};
