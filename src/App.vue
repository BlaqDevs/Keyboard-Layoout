<template>
  <div id="app" class="bg-slate-100 h-screen my-auto">
    <h2 class="text-3xl my-5">
      Focus on the text area for the keyboard to show
    </h2>




    <textarea
    @focus="showKeyboard"
      class="my-7 border-blue-4"
      name="textarea"
      v-model="textArea"
      id=""
      cols="100"
      rows="5"
    ></textarea>

    <div v-show="focus">
      <Keyboard @key="textArea += $event"/>
    </div>
  </div>
</template>

<script>
import Keyboard from "./components/Keyboard.vue";

export default {
  name: "App",
  components: {
    Keyboard,
  },
  data() {
    return {
      focus:false,
      textArea:''
    };
  },
  methods:{
    showKeyboard(){
      this.focus = true
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
