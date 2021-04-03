<template>
  <div>
    <span>shouye1</span>
  </div>
</template>

<script>
import { Cell, CellGroup} from "vant";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name] :CellGroup,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
