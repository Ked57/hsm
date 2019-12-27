import { createComponent } from "@vue/composition-api";

export default createComponent({
  name: "Login",
  setup() {
    return () => (
      <div id="Login" class="flex flex-col justify-center items-center">
        <h1 class="text-4xl p-5 text-center gradient-text">Login</h1>
        <span class="text-xl p-5 gradient-text">URL / IP</span>
        <input id="address-input" class="rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16 bg-gray-400"></input>
        <span class="text-xl p-5 gradient-text">Security Code</span>
        <input id="security-input" type="password" class="rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16 bg-gray-400"></input>
        <button
          class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16"
          onClick={() => console.log("login")}
        >Login</button>
      </div>
    );
  }
});
