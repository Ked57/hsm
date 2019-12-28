import { of } from "await-of";
import { ACTIONS } from "./action-definitions";
import { State } from "./state";
import { ActionContext, Store, ActionTree } from "vuex";
import { MUTATIONS, UpdateServerSettingsPayload } from "./mutation-definitions";
import { fetcher } from "./fetcher";

export const actions: ActionTree<State, State> = {
  [ACTIONS.LOGIN]: async (
    context: ActionContext<State, State>,
    payload: UpdateServerSettingsPayload
  ) => {
    const [_, err] = await of(
      fetcher(payload.address, "/api", payload.key, {})
    );
    if (err) {
      throw err;
    }
    context.commit(MUTATIONS.UPDATE_SERVER_SETTINGS, payload);
  }
};
