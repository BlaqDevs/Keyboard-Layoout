<template>
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
    <div
      :class="btn.class"
      :data-key="btn.dataKey"
      @click="pressKey(btn.dataChar || btn.dataKey)"

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
    <div
      :class="btn.class"
      :data-key="btn.dataKey"
      @click="pressKey(btn.dataChar || btn.dataKey)"

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
    <div
      :data-key="btn.dataKey"
      :data-char="btn.dataChar"
      :class="btn.class"
     
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
    <div
      :class="btn.class"
      :data-key="btn.dataKey"
      :data-char="btn.dataChar"
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
    <div
      :data-key="btn.dataKey"
      :data-char="btn.dataChar"
      :class="btn.class"
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
    <div
      :data-key="btn.dataKey"
      :data-char="btn.dataChar"
            @click="pressKey(btn.dataChar || btn.dataKey)"

      :class="btn.class"
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
      isCapsLock: false,
      row1: [
        {
          name: "ESC",
          class: "esc row1",
          dataKey: "27",
        },
        {
          name: "F1",
          class: "fn row1",
          dataKey: "112",
        },
        {
          name: "F2",
          class: "fn row1",
          dataKey: "113",
        },
        {
          name: "F3",
          class: "fn row1",
          dataKey: "114",
        },
        {
          name: "F4",
          class: "fn row1",
          dataKey: "115",
        },
        {
          name: "F5",
          class: "fn row1",
          dataKey: "116",
        },
        {
          name: "F6",
          class: "fn row1",
          dataKey: "117",
        },
        {
          name: "F7",
          class: "fn row1",
          dataKey: "118",
        },
        {
          name: "F8",
          class: "fn row1",
          dataKey: "119",
        },
        {
          name: "F9",
          class: "fn row1",
          dataKey: "120",
        },
        {
          name: "F10",
          class: "fn row1",
          dataKey: "121",
        },
        {
          name: "F11",
          class: "fn row1",
          dataKey: "122",
        },
        {
          name: "F12",
          class: "fn row1",
          dataKey: "123",
        },
        {
          name: "PrtScr",
          class: "prtscr row1",
          dataKey: "44",
        },
        {
          name: "Insert",
          class: "insert row1",
          dataKey: "45",
        },
        {
          name: "Delete",
          class: "del row1",
          dataKey: "46",
        },
      ],
      row2: [
        {
          name: "`",
          symbol: "~",
          class: "backtick row2",
          dataKey: "192",
        },
        {
          name: "1",
          symbol: "!",
          class: "number row2",
          dataKey: "49",
        },
        {
          name: "2",
          symbol: "@",
          class: "number row2",
          dataKey: "50",
        },
        {
          name: "3",
          symbol: "#",
          class: "number row2",
          dataKey: "51",
        },
        {
          name: "4",
          symbol: "$",
          class: "number row2",
          dataKey: "52",
        },
        {
          name: "5",
          symbol: "%",
          class: "number row2",
          dataKey: "53",
        },
        {
          name: "6",
          symbol: "^",
          class: "number row2",
          dataKey: "54",
        },
        {
          name: "7",
          symbol: "&",
          class: "number row2",
          dataKey: "55",
        },
        {
          name: "8",
          symbol: "*",
          class: "number row2",
          dataKey: "56",
        },
        {
          name: "9",
          symbol: "(",
          class: "number row2",
          dataKey: "57",
        },
        {
          name: "0",
          symbol: ")",
          class: "number row2",
          dataKey: "48",
        },
        {
          name: "-",
          symbol: "_",
          class: "number row2",
          dataKey: "189",
        },
        {
          name: "=",
          symbol: "+",
          class: "number row2",
          dataKey: "187",
        },
        {
          name: "Backspace",
          // symbol: "",
          class: "backspace row2",
          dataKey: "8",
        },
      ],
      row3: [
        {
          name: "Tab",
          symbol: "",
          class: "tab row3",
          dataKey: "9",
        },
        {
          name: "Q",
          symbol: "",
          class: "apha1 row3",
          dataChar: "Q",
        },
        {
          name: "W",
          symbol: "",
          class: "apha1 row3",
          dataChar: "W",
        },
        {
          name: "E",
          symbol: "",
          class: "apha1 row3",
          dataChar: "E",
        },
        {
          name: "R",
          symbol: "",
          class: "apha1 row3",
          dataChar: "R",
        },
        {
          name: "T",
          symbol: "",
          class: "apha1 row3",
          dataChar: "T",
        },
        {
          name: "Y",
          symbol: "",
          class: "apha1 row3",
          dataChar: "Y",
        },
        {
          name: "U",
          symbol: "",
          class: "apha1 row3",
          dataChar: "U",
        },
        {
          name: "I",
          symbol: "",
          class: "apha1 row3",
          dataChar: "I",
        },
        {
          name: "O",
          symbol: "",
          class: "apha1 row3",
          dataChar: "O",
        },
        {
          name: "P",
          symbol: "",
          class: "apha1 row3",
          dataChar: "P",
        },
        {
          name: "[",
          symbol: "{",
          class: "cb row3",
          dataKey: "219",
        },
        {
          name: "]",
          symbol: "}",
          class: "cb row3",
          dataKey: "221",
        },
        {
          name: "\\",
          symbol: "|",
          class: "cb row3",
          dataKey: "220",
        },
      ],
      row4: [
        {
          name: "Caps Lock",
          symbol: "",
          class: "caps row4",
          dataKey: "20",
        },
        {
          name: "A",
          class: "apha1 row4",
          dataChar: "A",
        },
        {
          name: "S",
          class: "apha1 row4",
          dataChar: "S",
        },
        {
          name: "D",
          class: "apha1 row4",
          dataChar: "D",
        },
        {
          name: "F",
          class: "apha1 row4",
          dataChar: "F",
        },
        {
          name: "G",
          class: "apha1 row4",
          dataChar: "G",
        },
        {
          name: "H",
          class: "apha1 row4",
          dataChar: "H",
        },
        {
          name: "J",
          class: "apha1 row4",
          dataChar: "J",
        },
        {
          name: "K",
          class: "apha1 row4",
          dataChar: "K",
        },
        {
          name: "L",
          class: "apha1 row4",
          dataChar: "L",
        },
        {
          name: ";",
          symbol: ":",
          class: "cb row4",
          dataKey: "186",
        },
        {
          name: "'",
          symbol: '"',
          class: "cb row4",
          dataKey: "222",
        },
        {
          name: "Enter",
          class: "enter row4",
          dataKey: "13",
        },
      ],
      row5: [
        {
          name: "Shift",
          class: "shift1 row5",
          dataKey: "16",
        },
        {
          name: "Z",
          symbol: "",
          class: "apha1 row5",
          dataChar: "Z",
        },
        {
          name: "X",
          symbol: "",
          class: "apha1 row5",
          dataChar: "X",
        },
        {
          name: "C",
          symbol: "",
          class: "apha1 row5",
          dataChar: "C",
        },
        {
          name: "V",
          symbol: "",
          class: "apha1 row5",
          dataChar: "V",
        },
        {
          name: "B",
          symbol: "",
          class: "apha1 row5",
          dataChar: "B",
        },
        {
          name: "N",
          symbol: "",
          class: "apha1 row5",
          dataChar: "N",
        },
        {
          name: "M",
          symbol: "",
          class: "apha1 row5",
          dataChar: "M",
        },
        {
          name: ",",
          symbol: "<",
          class: "cb row5",
          dataKey: "188",
        },
        {
          name: ".",
          symbol: ">",
          class: "cb row5",
          dataKey: "190",
        },
        {
          name: "/",
          symbol: "?",
          class: "cb row5",
          dataKey: "191",
        },
        {
          name: "Shift.",
          class: "shift2 row5",
          dataKey: "16-R",
        },
      ],
      row6: [
        {
          name: "Ctrl",
          symbol: "",
          class: "ctrl row6",
          dataKey: "17",
        },
        {
          name: "Fn",
          symbol: "",
          class: "last row6",
          dataKey: "",
        },
        {
          icon: "fab fa-windows",
          symbol: "",
          class: "last row6",
          dataKey: "224",
        },
        {
          name: "Alt",
          class: "last row6",
          dataKey: "18",
        },
        {
          name: " ",
          class: "space row6",
          dataKey: "32",
          dataChar: " ",
        },
        {
          name: "Alt",
          class: "last row6",
          dataKey: "18-R",
        },
        {
          name: "Ctrl",
          class: "last row6",
          dataKey: "17-R",
        },
      ],
    };
  },
  methods: {
    resizeHandler() {
      let size = this.$refs.container.clientWidth / 90;
      this.$refs.container.style.fontSize = size + "px";
    },
    keyBind(e) {
      var location = e.location;
      var selector, code;
      if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        selector = ['[data-key="' + e.keyCode + '-R"]'];
      } else {
        code = e.keyCode || e.which;
        selector = [
          '[data-key="' + code + '"]',
          '[data-char*="' +
            encodeURIComponent(String.fromCharCode(code)) +
            '"]',
        ].join(",");
      }

      if (code === 20) {
        this.isCapsLock = !this.isCapsLock;
      }

      return document.querySelector(selector);
    },
    pressKey(char) {
      console.log("pressed", char);
      var key =
        document.querySelector('[data-char*="' + char+ '"]') ||
        document.querySelector('[data-key="' + char+ '"]');
      console.log(key);
      if (!key) {
        return console.warn("No key for", char);
      }
      key.classList.add("bg-black", "relative", "top-0.5", "text-gray-400");
      if(char == '20'){
                this.isCapsLock = !this.isCapsLock;

      }
      if (char !=='20') {
        setTimeout(() => {
        key.classList.remove(
          "bg-black",
          "relative",
          "top-0.5",
          "text-gray-400"
        );

      }, 200);
      }
    },
  },
  watch: {
    isCapsLock(state) {
      if (!state) {
        document
          .querySelector('[data-key="20"]')
          .classList.remove("bg-black", "relative", "top-0.5", "text-gray-400");
      }
    },
  },
  mounted() {
    document.body.addEventListener("keydown", (e) => {
      var key = this.keyBind(e);
      console.log(key);
      if (!key) {
        return console.warn("No key for", e.keyCode);
      }

      key.classList.add("bg-black", "relative", "top-0.5", "text-gray-400");
    });
    document.body.addEventListener("keyup", (e) => {
      var key = this.keyBind(e);
      console.log(key);
      if (!key) {
        return console.warn("No key for", e.keyCode);
      }

      key.classList.remove("bg-black", "relative", "top-0.5", "text-gray-400");
    });
  },
  computed: {},
  created() {
    window.addEventListener("resize", this.resizeHandler);
  },

  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
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
