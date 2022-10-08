<template>
  <div id="app" class="bg-slate-100 h-screen my-auto">
    <h2 class="text-3xl my-5">
      Focus on the text area for the keyboard to show
    </h2>
    <textarea
    ref="textArea"
    @focus="showKeyboard"
      class="my-7 border-blue-4"
      name="textarea"
      v-model="textArea"
      id=""
      cols="100"
      rows="5"
    ></textarea>

    <div class="" v-show="focus" >
      <key-board @hideKeyboard='focus = $event' :focus= focus @key="$handleInput">
      </key-board>
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
    //  handleInput(event){
    //   if(event === 'back-space'){
    //     let element = this.$refs.textArea
    //   const textarea = element;
    //   const sentence = textarea.value
    //   const len = sentence.length
    //   let pos = textarea.selectionStart
    //   if (pos === undefined) {
    //     pos = 0
    //     console.log("out")
    //   }

    //   const before = sentence.substr(0, pos)
    //   const after = sentence.substr(pos, len)

    //   this.textArea = before.substr(0,before.length - 1)  + after
    //   }else{
    //   console.log(event,'pressed')
    //                 this.textArea += event
    //   }
    //             },
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
