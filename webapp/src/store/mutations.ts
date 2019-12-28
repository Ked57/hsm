import { MUTATIONS, UpdateServerSettingsPayload } from './mutation-definitions';
import { State } from './state';

export const mutations = {
    [MUTATIONS.UPDATE_SERVER_SETTINGS]: (state: State, payload: UpdateServerSettingsPayload) => state.server = payload
}