import { createComponent } from "@vue/composition-api";

export default createComponent({
  name: "ServerStatus",
  props: {},
  setup(props) {
    return () => (
      <div class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl">
        <h1 class="text-2xl">Server status</h1>
        <ul class="list-none">
          <li>
            Ping: <span class="text-green-600">OK</span> 31ms
          </li>
          <li>
            CPU: 30%
          </li>
          <li>
            RAM: 22%
          </li>
        </ul>
      </div>
    );
  }
});
