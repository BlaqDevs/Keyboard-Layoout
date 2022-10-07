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

    <div class="" v-show="focus" >
      <key-board  @key="handleInput">
      </key-board>
    </div>
    <div v-show="focus">
      <button class="text-white h-10 shadow-md rounded-full shadow-black w-10 border border-solid border-slate-300 bg-black" @click="focus = !focus"><i class="fa fa-close"></i></button>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
 
  data() {
    return {
      focus:false,
      textArea:''
    };
  },
  methods:{
     handleInput(event){
                    this.textArea += event
                },
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
