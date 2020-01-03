export const MUTATIONS = {
  UPDATE_MANAGER_SETTINGS: "updateManagerSettings",
  UPDATE_SERVER_STATUS: "updateServerStatus"
};

export type UpdateManagerSettingsPayload = {
  address: string;
  key: string;
};

export type UpdateServerStatusPayload = {
  available: boolean;
  ping?: number;
};
