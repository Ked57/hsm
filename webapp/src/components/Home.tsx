import { createComponent } from "@vue/composition-api";
import { of } from "await-of";
import ServerStatus from "./ServerStatus";
import ActionButton from "./ActionButton";
import store from "@/store/store";
import { ACTIONS } from "@/store/action-definitions";
import router from "@/router";

export default createComponent({
  name: "Home",
  async beforeCreate() {
    const [_, err] = await of(store.dispatch(ACTIONS.LOGIN, store.state.manager));
    if (err) {
      console.error(err);
      router.push("/login");
    }
  },
  setup() {
    return () => (
      <div id="Home" class="flex flex-col justify-center items-center">
        <h1 class="text-4xl p-5 text-center gradient-text">
          Home Server Manager
        </h1>
        <ServerStatus />
        <ActionButton text="On / Off" action="" />
        <ActionButton text="Add an action" action="" />
      </div>
    );
  }
});
