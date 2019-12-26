import { createComponent } from '@vue/composition-api';
import './App.css';
import "./assets/tailwind.module.css";

export default createComponent({
  name: 'App',
  setup() {
    return () => (
      <div id="app">
        <router-view />
      </div>
    );
  },
});
