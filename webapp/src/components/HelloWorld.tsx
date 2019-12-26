
import { createComponent } from '@vue/composition-api';

export default createComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    return () => (
      <div class="text-black-500">
       {props.msg}
      </div>
    );
  },
});
