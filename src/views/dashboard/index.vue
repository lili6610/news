<template>
<wrap>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  </wrap>
</template>

<script>
import wrap from '@/components/common/wrap'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the news management system!'
    }
  },
  components:{
    wrap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
