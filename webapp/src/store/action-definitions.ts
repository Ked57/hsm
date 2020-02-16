import { UpdateManagerSettingsPayload } from "./mutation-definitions";

export const ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
  FETCH_SERVER_STATUS: "fetchServerStatus",
  TOOGLE_MENU: "toogleMenu",
  TOOGLE_SERVER_STATE: "toogleServerState"
};

export type LoginActionPayload = UpdateManagerSettingsPayload;
