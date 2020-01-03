import { createComponent } from "@vue/composition-api";
import store from "@/store/store";
import { ACTIONS } from "@/store/action-definitions";

const fetchServerStatus = () =>
  setInterval(() => store.dispatch(ACTIONS.FETCH_SERVER_STATUS), 5000);

export default createComponent({
  name: "ServerStatus",
  props: {},
  beforeMount() {
    fetchServerStatus();
  },
  setup(props) {
    return () => (
      <div class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl">
        <h1 class="text-2xl">Server status</h1>
        <ul class="list-none">
          <li>
            State:{" "}
            {store.state.servers["mine"].status.isUp ? (
              <span class="text-green-600 bold">UP</span>
            ) : (
              <span class="text-red-600 bold">DOWN</span>
            )}{" "}
          </li>
          <li>Ping: {Math.round(store.state.servers["mine"].status.ping)} ms</li>
        </ul>
      </div>
    );
  }
});
