<template>
  <div class="container font-sans text-sm text-center mx-auto bg-stone-100">
    <div
      class="
        inline-block
        h-12
        m-0.5
        leading-6
        rows
        relative
        bg-black
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
      :class="btn.class"
      v-for="btn in row1"
      :key="btn.name"
    >
      {{ btn.name }}
    </div>
    <div
      class="
        inline-block
        h-12
        m-0.5
        rows
        relative
        bg-black
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
      :class="btn.class"
      v-for="btn in row2"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>
    <div
      class="
        inline-block
        h-12
        m-0.5
        rows
        relative
        bg-black
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
      :class="btn.class"
      v-for="btn in row3"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>
    <div
      class="
        inline-block
        h-12
        m-0.5
        rows
        relative
        bg-black
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
      :class="btn.class"
      v-for="btn in row4"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>
    <div
      class="
        inline-block
        h-12
        m-0.5
        rows
        relative
        bg-black
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
      :class="btn.class"
      v-for="btn in row5"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>
    <div
      class="
        inline-block
        h-14
        m-0.5
        rows
        relative
        bg-black
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
      :class="btn.class"
      v-for="btn in row6"
      :key="btn.name"
    >
      {{ btn.symbol }}
      <p>{{ btn.name }}</p>
    </div>
    <div
      class="
        arrow
        inline-block
        h-14
        m-0.5
        rows
        relative
        bg-black
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
    >
      <div class="arr-btn-div">
        <div class="arrbtn w-full"></div>
        <div class="arrbtn bg-black arr-left mt-2 text-white w-full">
          &larr;
        </div>
      </div>
      <div class="arr-btn-div arrmid">
        <div class="arrbtn bg-black arr-up text-white w-full">&uarr;</div>
        <div class="arrbtn bg-black arr-down mt-2 text-white w-full">
          &darr;
        </div>
      </div>
      <div class="arr-btn-div">
        <div class="arrbtn w-full"></div>
        <div class="arrbtn bg-black mx-auto arr-right mt-2 text-white w-full">
          &rarr;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Keyboard",
  props: {
    msg: String,
  },
  data() {
    return {
      row1: [
        {
          name: "ESC",
          class: "esc row1",
        },
        {
          name: "F1",
          class: "fn row1",
        },
        {
          name: "F2",
          class: "fn row1",
        },
        {
          name: "F3",
          class: "fn row1",
        },
        {
          name: "F4",
          class: "fn row1",
        },
        {
          name: "F5",
          class: "fn row1",
        },
        {
          name: "F6",
          class: "fn row1",
        },
        {
          name: "F7",
          class: "fn row1",
        },
        {
          name: "F8",
          class: "fn row1",
        },
        {
          name: "F9",
          class: "fn row1",
        },
        {
          name: "F10",
          class: "fn row1",
        },
        {
          name: "F11",
          class: "fn row1",
        },
        {
          name: "F12",
          class: "fn row1",
        },
        {
          name: "PrtScr",
          class: "prtscr row1",
        },
        {
          name: "Insert",
          class: "insert row1",
        },
        {
          name: "Delete",
          class: "del row1",
        },
      ],
      row2: [
        {
          name: "`",
          symbol: "~",
          class: "backtick row2",
        },
        {
          name: "1",
          symbol: "!",
          class: "number row2",
        },
        {
          name: "2",
          symbol: "@",
          class: "number row2",
        },
        {
          name: "3",
          symbol: "#",
          class: "number row2",
        },
        {
          name: "4",
          symbol: "$",
          class: "number row2",
        },
        {
          name: "5",
          symbol: "%",
          class: "number row2",
        },
        {
          name: "6",
          symbol: "^",
          class: "number row2",
        },
        {
          name: "7",
          symbol: "&",
          class: "number row2",
        },
        {
          name: "8",
          symbol: "*",
          class: "number row2",
        },
        {
          name: "9",
          symbol: "(",
          class: "number row2",
        },
        {
          name: "0",
          symbol: ")",
          class: "number row2",
        },
        {
          name: "-",
          symbol: "_",
          class: "number row2",
        },
        {
          name: "=",
          symbol: "+",
          class: "number row2",
        },
        {
          name: "Backspace",
          // symbol: "",
          class: "backspace row2",
        },
      ],
      row3: [
        {
          name: "Tab",
          symbol: "",
          class: "tab row3",
        },
        {
          name: "Q",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "W",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "E",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "R",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "T",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "Y",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "U",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "I",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "O",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "P",
          symbol: "",
          class: "apha1 row3",
        },
        {
          name: "[",
          symbol: "{",
          class: "cb row3",
        },
        {
          name: "]",
          symbol: "}",
          class: "cb row3",
        },
        {
          name: "\\",
          symbol: "|",
          class: "cb row3",
        },
      ],
      row4: [
        {
          name: "Caps Lock",
          symbol: "",
          class: "caps row4",
        },
        {
          name: "A",
          class: "apha1 row4",
        },
        {
          name: "S",
          class: "apha1 row4",
        },
        {
          name: "D",
          class: "apha1 row4",
        },
        {
          name: "F",
          class: "apha1 row4",
        },
        {
          name: "G",
          class: "apha1 row4",
        },
        {
          name: "H",
          class: "apha1 row4",
        },
        {
          name: "J",
          class: "apha1 row4",
        },
        {
          name: "K",
          class: "apha1 row4",
        },
        {
          name: "L",
          class: "apha1 row4",
        },
        {
          name: ";",
          symbol: ":",
          class: "cb row4",
        },
        {
          name: "'",
          symbol: '"',
          class: "cb row4",
        },
        {
          name: "Enter",
          class: "enter row4",
        },
      ],
      row5: [
        {
          name: "Shift",
          class: "shift1 row5",
        },
        {
          name: "Z",
          symbol: "",
          class: "apha1 row5",
        },
        {
          name: "X",
          symbol: "",
          class: "apha1 row5",
        },
        {
          name: "C",
          symbol: "",
          class: "apha1 row5",
        },
        {
          name: "V",
          symbol: "",
          class: "apha1 row5",
        },
        {
          name: "B",
          symbol: "",
          class: "apha1 row5",
        },
        {
          name: "N",
          symbol: "",
          class: "apha1 row5",
        },
        {
          name: "M",
          symbol: "",
          class: "apha1 row5",
        },
        {
          name: ",",
          symbol: "<",
          class: "cb row5",
        },
        {
          name: ".",
          symbol: ">",
          class: "cb row5",
        },
        {
          name: "/",
          symbol: "?",
          class: "cb row5",
        },
        {
          name: "Shift",
          class: "shift2 row5",
        },
      ],
      row6: [
        {
          name: "Ctrl",
          symbol: "",
          class: "ctrl row6",
        },
        {
          name: "Fn",
          symbol: "",
          class: "last row6",
        },
        {
          name: "icon",
          symbol: "",
          class: "last row6",
        },
        {
          name: "Alt",
          class: "last row6",
        },
        {
          name: "",
          class: "space row6",
        },
        {
          name: "Alt",
          class: "last row6",
        },
        {
          name: "Ctrl",
          class: "last row6",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.left {
  float: left;
}

.row1 {
  /* width: 5.31%; */

  /* margin-bottom: 10px; */
}
.row2 {
  /* width: 6%; */
  /* margin-left: 0; */

  /* margin-bottom: 10px; */
}
.row3 {
  /* width: 6%; */
  /* margin-left: 0; */

  /* margin-bottom: 10px; */
}
.row4 {
  /* width: 6%; */
  /* margin-left: 0; */

  /* margin-bottom: 10px; */
}
.row5 {
  /* width: 6%; */
  /* margin-left: 0; */

  /* margin-bottom: 10px; */
}
.row6 {
  /* width: 6%; */
  /* margin-left: 0; */

  /* margin-bottom: 10px; */
}
.arrow {
  /* width: 21.5%; */
  /* float: right; */
  /* margin-left: ; */

  /* margin-bottom: 10px; */
}
.arr-btn-div {
  /* width: 29%; */
  /* height: 55px; */
  /* float: left; */
}
.arrmid {
  /* margin: 0 6%; */
  /* float: left; */
}
.arrbtn {
  /* height: 25px; */
}
.arr-left {
  /* margin-left: 8%; */
}
.arr-right {
  /* margin-left: ; */
}
.arr-up {
}
.arr-down {
}
.fn {
  /* float: left; */
  /* margin-left: 1%; */
}
.esc {
  /* float: left; */
  /* margin-left: 1%; */
}

.del {
  /* float: left; */
  /* margin-left: 1%; */
}
.insert {
  /* float: left; */
  /* margin-left: 1%; */
}
.prtscr {
  /* float: left; */
  /* margin-left: 1%; */
}
.backtick {
  /* float: left; */
  /* margin-left: 1%; */
}
.number {
  /* float: left; */
  /* margin-left: 1%; */
}
.backspace {
  /* float: left; */
  /* margin-left: 1%; */
  /* width: 9%; */
  /* padding-top: 10px; */
}
.tab {
  /* float: left; */
  /* width: 9%; */
  /* padding-top: 10px; */
}
.cb {
  /* float: left; */
  /* margin-left: 1%; */
  /* width: 6%; */
}
.apha1 {
  /* float: left; */
  /* margin-left: 1%; */
  /* width: 6%; */
  /* padding-top: 11px; */
}
.last {
  /* float: left; */
  /* margin-left: 1%; */
  /* width: 6%; */
  /* padding-top: 14px; */
}
.ctrl {
  /* float: left; */
  /* width: 7.5%; */
  /* padding-top: 11px; */
}
.caps {
  /* float: left; */
  /* width: 11%; */
  /* padding-top: 11px; */
}
.enter {
  /* float: left; */
  /* width: 11%; */
  /* margin-left: 1%; */
  /* padding-top: 11px; */
}
.shift1 {
  /* float: left; */
  /* width: 14.5%; */
  /* padding-top: 11px; */
}
.shift2 {
  /* float: left; */
  /* width: 14.5%; */
  /* margin-left: 1%; */
  /* padding-top: 11px; */
}
.space {
  /* float: left; */
  /* width: 34%; */
  /* margin-left: 1%; */
  /* padding-top: 11px; */
}

.main {
  margin: 2% 0.5%;
}
</style>
