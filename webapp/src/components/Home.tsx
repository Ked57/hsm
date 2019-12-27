import { createComponent } from "@vue/composition-api";
import ServerStatus from './ServerStatus';
import ActionButton from './ActionButton';


export default createComponent({
  name: "Home",
  setup() {
    return () => (
      <div id="Home" class="flex flex-col justify-center items-center">
        <h1 class="text-4xl p-5 text-center gradient-text">Home Server Manager</h1>
        <ServerStatus />
        <ActionButton text="On / Off" action="" />
        <ActionButton text="Add an action" action="" />
      </div>
    );
  }
});
