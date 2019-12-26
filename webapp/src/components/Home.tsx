import { createComponent } from "@vue/composition-api";
import HelloWorld from './HelloWorld';


export default createComponent({
  name: "Home",
  setup() {
    return () => (
      <div id="Home">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript PWA" />
      </div>
    );
  }
});
