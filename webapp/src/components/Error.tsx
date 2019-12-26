import { createComponent } from "@vue/composition-api";


export default createComponent({
  name: "Error",
  setup() {
    return () => (
      <div id="Error">
          Error, something bad happened
      </div>
    );
  }
});
