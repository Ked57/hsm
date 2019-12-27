import { createComponent } from "@vue/composition-api";

export default createComponent({
  name: "Error",
  setup() {
    return () => (
      <div id="Error">
        <h1 class="text-4xl p-5 text-center gradient-text">
          Error
        </h1>
        <h2 class="text-2xl p-5 text-center gradient-text">Something bad happened</h2>
      </div>
    );
  }
});
