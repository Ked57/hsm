import { UpdateManagerSettingsPayload } from "./mutation-definitions";

export const ACTIONS = {
  LOGIN: "login",
  FETCH_SERVER_STATUS: "fetchServerStatus"
};

export type LoginActionPayload = UpdateManagerSettingsPayload;
