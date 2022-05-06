import { defineComponent } from 'vue';
import './styles/index.scss';

export default defineComponent({
  name: 'helloworld',
  setup() {
    return () => {
      return (
        <div>
          <h3 id="hello">hello 扑街</h3>
          <a href="https://v3.cn.vuejs.org/guide/composition-api-template-refs.html#jsx-%E4%B8%AD%E7%9A%84%E7%94%A8%E6%B3%95">
            jsx用法
          </a>
        </div>
      );
    };
  },
});
