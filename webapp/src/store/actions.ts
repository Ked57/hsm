import { of } from "await-of";
import { ACTIONS } from "./action-definitions";
import { State } from "./state";
import { ActionContext, Store, ActionTree } from "vuex";
import {
  MUTATIONS,
  UpdateManagerSettingsPayload
} from "./mutation-definitions";
import { fetcher } from "./fetcher";

export const actions: ActionTree<State, State> = {
  [ACTIONS.LOGIN]: async (
    context: ActionContext<State, State>,
    payload: UpdateManagerSettingsPayload
  ) => {
    const [_, err] = await of(
      fetcher(payload.address, "/api", payload.key, {})
    );
    if (err) {
      throw err;
    }
    context.commit(MUTATIONS.UPDATE_MANAGER_SETTINGS, payload);
  },
  [ACTIONS.FETCH_SERVER_STATUS]: async (
    context: ActionContext<State, State>
  ) => {
    const [res, err] = await of(
      fetcher(
        context.state.manager.address,
        "/api/ping",
        context.state.manager.key,
        { address: context.state.servers["mine"].address }
      )
    );
    if (err) {
      console.error(err);
    }
    context.commit(MUTATIONS.UPDATE_SERVER_STATUS, res);
  }
};
