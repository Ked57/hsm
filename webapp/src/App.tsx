import { createComponent } from '@vue/composition-api';
import './App.css';

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
