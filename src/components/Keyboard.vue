<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="mx-auto flex justify-center">
  <div
    ref="container"
    class="
      container
      font-sans
      w-9/12
      text-center text-sm
      md:text-xs
      h-96
      mx-auto
      bg-stone-100
    "
  >
  <!-- First keyboard row -->
    <div
      :class="btn.class"
      :data-value="btn.value"
      :data-key="btn.dataKey"
      @click="pressKey(btn.dataChar || btn.dataKey)"
      :data-name="btn.name"
      :data-sym="btn.symbol"
      class="
        active:bg-black
        active:relative
        active:top-0.5
        active:text-gray-400
        active:shadow-black
        inline-block
        h-8
        leading-6
        rows
        relative
        bg-neutral-800
        text-center text-white
        float-left
        rounded-md
        p-1
        w-14
        box-border
        cursor-pointer
        border border-solid border-slate-300
        shadow-md shadow-black
      "
      v-for="btn in row1"
      :key="btn.name"
    >
      {{ btn.name }}
    </div>


     <!-- Secon keyboard row -->

    <div
      :class="btn.class"
      :data-value="btn.value"
      :data-key="btn.dataKey"
      @click="pressKey(btn.dataChar || btn.dataKey)"
      :data-name="btn.name"
      :data-sym="btn.symbol"
      class="
        inline-block
        active:bg-black active:relative active:top-0.5 active:text-gray-400
        h-12
        rows
        relative
        bg-neutral-800
        text-center text-white
        float-left
        rounded-md
        p-1
        w-14
        box-border
        cursor-pointer
        border border-solid border-slate-300
        shadow-md shadow-black
      "
      v-for="btn in row2"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>

     <!-- Third keyboard row -->

    <div
      :data-key="btn.dataKey"
      :data-char="btn.dataChar"
      :class="btn.class"
      :data-value="btn.value"
      :data-name="btn.name"
      :data-sym="btn.symbol"
      @click="pressKey(btn.dataChar || btn.dataKey)"
      class="
        inline-block
        active:bg-black active:relative active:top-0.5
        shadow-black
        active:text-gray-400
        h-12
        rows
        relative
        bg-neutral-800
        text-center text-white
        float-left
        rounded-md
        p-1
        w-14
        box-border
        cursor-pointer
        border border-solid border-slate-300
        shadow-md
      "
      v-for="btn in row3"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>

     <!-- Fourth keyboard row -->

    <div
      :class="btn.class"
      :data-value="btn.value"
      :data-key="btn.dataKey"
      :data-char="btn.dataChar"
      :data-name="btn.name"
      :data-sym="btn.symbol"
      @click="pressKey(btn.dataChar || btn.dataKey)"
      class="
        inline-block
        active:bg-black active:relative active:top-0.5 active:text-gray-400
        h-12
        rows
        relative
        shadow-black
        bg-neutral-800
        text-center text-white
        float-left
        rounded-md
        p-1
        w-14
        box-border
        cursor-pointer
        border border-solid border-slate-300
        shadow-md
      "
      v-for="btn in row4"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>

     <!-- Fifth keyboard row -->

    <div
      :data-key="btn.dataKey"
      :data-char="btn.dataChar"
      :class="btn.class"
      :data-value="btn.value"
      :data-name="btn.name"
      :data-sym="btn.symbol"
      @click="pressKey(btn.dataChar || btn.dataKey)"
      class="
        inline-block
        active:bg-black active:relative active:top-0.5 active:text-gray-400
        h-12
        rows
        shadow-black
        relative
        bg-neutral-800
        text-center text-white
        float-left
        rounded-md
        p-1
        w-14
        box-border
        cursor-pointer
        border border-solid border-slate-300
        shadow-md
      "
      v-for="btn in row5"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>

     <!-- Sixth keyboard row -->

    <div
      :data-key="btn.dataKey"
      :data-char="btn.dataChar"
      @click="pressKey(btn.dataChar || btn.dataKey)"
      :data-name="btn.name"
      :data-sym="btn.symbol"
      :class="btn.class"
      :data-value="btn.value"
      class="
        inline-block
        active:bg-black active:relative active:top-0.5 active:text-gray-400
        h-12
        rows
        relative
        bg-neutral-800
        text-center text-white
        float-left
        shadow-black
        rounded-md
        p-1
        w-14
        box-border
        cursor-pointer
        border border-solid border-slate-300
        shadow-md
      "
      v-for="btn in row6"
      :key="btn.dataKey"
    >
      <i :class="btn.icon"></i>
      <p>{{ btn.name }}</p>
    </div>
     <!-- Arrow Session row -->

    <div class="arrow text-center inline-block row6">
      <div class="arr-btn-div">
        <div class="arrbtn w-full"></div>
        <div
          data-key="37"
          @click="pressKey(37)"
          class="
            arrbtn
            bg-neutral-800
            arr-left
            active:bg-black active:relative active:top-0.5 active:text-gray-400
            text-white
            w-full
            inline-block
            rows
            relative
            shadow-black
            text-center
            float-left
            rounded-md
            p-1
            box-border
            cursor-pointer
            border border-solid border-slate-300
            shadow-md
          "
        >
          &larr;
        </div>
      </div>
      <div class="arr-btn-div arrmid">
        <div
          data-key="38"
          @click="pressKey(38)"
          class="
            arrbtn
            bg-neutral-800
            arr-up
            active:bg-black active:relative active:top-0.5 active:text-gray-400
            text-white
            inline-block
            h-12
            rows
            relative
            text-center
            float-left
            rounded-md
            p-1
            w-full
            box-border
            cursor-pointer
            border border-solid border-slate-300
            shadow-md
          "
        >
          &uarr;
        </div>
        <div
          data-key="40"
          @click="pressKey(40)"
          class="
            arrbtn
            shadow-black
            bg-neutral-800
            arr-down
            active:bg-black active:relative active:top-0.5 active:text-gray-400
            text-white
            w-full
            inline-block
            h-12
            rows
            relative
            text-center
            float-left
            rounded-md
            p-1
            box-border
            cursor-pointer
            border border-solid border-slate-300
            shadow-md
          "
        >
          &darr;
        </div>
      </div>
      <div class="arr-btn-div">
        <div class="arrbtn w-full"></div>
        <div
          data-key="39"
          @click="pressKey(39)"
          class="
            arrbtn
            bg-neutral-800
            active:bg-black active:relative active:top-0.5 active:text-gray-400
            shadow-black
            mx-auto
            arr-right
            text-white
            w-full
            inline-block
            h-12
            rows
            relative
            text-center
            float-left
            rounded-md
            p-1
            box-border
            cursor-pointer
            border border-solid border-slate-300
            shadow-md
          "
        >
          &rarr;
        </div>
      </div>
    </div>
    
    
  </div>
</div>


  
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Keyboard",
beforeCreate() {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', 'https://cdn.tailwindcss.com')
                document.head.appendChild(recaptchaScript)
                let recaptchaLink = document.createElement('link')
                recaptchaScript.setAttribute('link', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css')
                document.head.appendChild(recaptchaLink)
            },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  font-size: 14px;
  font-family: sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 100%;
}
.rows > div[data-pressed] {
  background: #2a2a2a;
  color: #aaa;
  position: relative;
  top: 0.2em;
  box-shadow: 0 0 0 0.05em black;
}
.row1 {
  width: 5.31%;

  margin-bottom: 10px;
}
.row2 {
  width: 6%;
  margin-left: 0;

  margin-bottom: 10px;
}
.row3 {
  width: 6%;
  margin-left: 0;

  margin-bottom: 10px;
}
.row4 {
  width: 6%;
  margin-left: 0;

  margin-bottom: 10px;
}
.row5 {
  width: 6%;
  margin-left: 0;

  margin-bottom: 10px;
}
.row6 {
  width: 6%;
  margin-left: 0;

  margin-bottom: 10px;
}
.arrow {
  width: 21.5%;
  float: right;

  margin-bottom: 10px;
}
.arr-btn-div {
  width: 29%;
  height: 55px;
  float: left;
}
.arrmid {
  margin: 0 6%;
  float: left;
}
.arrbtn {
  height: 25px;
}
.arr-left {
  margin-left: 8%;
}
.arr-right {
}
.arr-up {
}
.arr-down {
}
.fn {
  float: left;
  margin-left: 1%;
}
.esc {
  float: left;
  /* margin-left: 1%; */
}

.del {
  float: left;
  margin-left: 1%;
}
.insert {
  float: left;
  margin-left: 1%;
}
.prtscr {
  float: left;
  margin-left: 1%;
}
.backtick {
  float: left;
  /* margin-left: 1%; */
}
.number {
  float: left;
  margin-left: 1%;
}
.backspace {
  float: left;
  margin-left: 1%;
  width: 9%;
  padding-top: 10px;
}
.tab {
  float: left;
  width: 9%;
  padding-top: 10px;
}
.cb {
  float: left;
  margin-left: 1%;
  width: 6%;
}
.apha1 {
  float: left;
  margin-left: 1%;
  width: 6%;
  padding-top: 11px;
}
.last {
  float: left;
  margin-left: 1%;
  width: 6%;
  padding-top: 14px;
}
.ctrl {
  float: left;
  width: 7.5%;
  padding-top: 11px;
}
.caps {
  float: left;
  width: 11%;
  padding-top: 11px;
}
.enter {
  float: left;
  width: 11%;
  margin-left: 1%;
  padding-top: 11px;
}
.shift1 {
  float: left;
  width: 14.5%;
  padding-top: 11px;
}
.shift2 {
  float: left;
  width: 14.5%;
  margin-left: 1%;
  padding-top: 11px;
}
.space {
  float: left;
  width: 34%;
  margin-left: 1%;
  padding-top: 11px;
}

.main {
  margin: 2% 0.5%;
}
</style>
