import { createComponent } from "@vue/composition-api";

export default createComponent({
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    return () => (
      <button class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16" onClick={() => console.log("yo")}>
        {props.text}
      </button>
    );
  }
});
