export const MUTATIONS = {
    UPDATE_SERVER_SETTINGS: "updateServerSettings"
}

export type UpdateServerSettingsPayload = {
    address: string,
    key: string
}