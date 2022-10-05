<!-- eslint-disable vue/no-mutating-props -->
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
  props: ['focus'],
  data() {
    return {
      isCapsLock: false,
      isBackSpace: false,
      isShift: false,
      pressedKey:[],
      row1: [
        {
          name: "ESC",
          class: "esc row1",
          dataKey: "27",
          value:''
        },
        {
          name: "F1",
          class: "fn row1",
          dataKey: "112",
          value:''

        },
        {
          name: "F2",
          class: "fn row1",
          dataKey: "113",
          value:''
        },
        {
          name: "F3",
          class: "fn row1",
          dataKey: "114",
          value:''
        },
        {
          name: "F4",
          class: "fn row1",
          dataKey: "115",
          value:''
        },
        {
          name: "F5",
          class: "fn row1",
          dataKey: "116",
          value:''
        },
        {
          name: "F6",
          class: "fn row1",
          dataKey: "117",
          value:''
        },
        {
          name: "F7",
          class: "fn row1",
          dataKey: "118",
          value:''
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
          value:''
        },
        {
          name: "F10",
          class: "fn row1",
          dataKey: "121",
          value:''
        },
        {
          name: "F11",
          class: "fn row1",
          dataKey: "122",
          value:''
        },
        {
          name: "F12",
          class: "fn row1",
          dataKey: "123",
          value:''
        },
        {
          name: "PrtScr",
          class: "prtscr row1",
          dataKey: "44",
          value:''
        },
        {
          name: "Insert",
          class: "insert row1",
          dataKey: "45",
          value:''
        },
        {
          name: "Delete",
          class: "del row1",
          dataKey: "46",
          value:''
        },
      ],
      row2: [
        {
          name: "`",
          symbol: "~",
          class: "backtick row2",
          dataKey: "192",
          value:'`'
        },
        {
          name: "1",
          symbol: "!",
          class: "number row2",
          dataKey: "49",
          value:'1'
        },
        {
          name: "2",
          symbol: "@",
          class: "number row2",
          dataKey: "50",
          value:'2'
        },
        {
          name: "3",
          symbol: "#",
          class: "number row2",
          dataKey: "51",
          value:'3'
        },
        {
          name: "4",
          symbol: "$",
          class: "number row2",
          dataKey: "52",
          value:'4'
        },
        {
          name: "5",
          symbol: "%",
          class: "number row2",
          dataKey: "53",
          value:'5'
        },
        {
          name: "6",
          symbol: "^",
          class: "number row2",
          dataKey: "54",
          value:'6'
        },
        {
          name: "7",
          symbol: "&",
          class: "number row2",
          dataKey: "55",
          value:'7'
        },
        {
          name: "8",
          symbol: "*",
          class: "number row2",
          dataKey: "56",
          value:'8'
        },
        {
          name: "9",
          symbol: "(",
          class: "number row2",
          dataKey: "57",
          value:'9'
        },
        {
          name: "0",
          symbol: ")",
          class: "number row2",
          dataKey: "48",
          value:'0'
        },
        {
          name: "-",
          symbol: "_",
          class: "number row2",
          dataKey: "189",
          value:'-'
        },
        {
          name: "=",
          symbol: "+",
          class: "number row2",
          dataKey: "187",
          value:'='
        },
        {
          name: "Backspace",
          symbol: null,
          class: "backspace row2",
          dataKey: "8",
          value:''
        },
      ],
      row3: [
        {
          name: "Tab",
          symbol: null,
          class: "tab row3",
          dataKey: "9",
          value:''
        },
        {
          name: "Q",
          symbol: null,
          class: "apha1 row3",
          dataChar: "Q",
          value:'q'
        },
        {
          name: "W",
          symbol: null,
          class: "apha1 row3",
          dataChar: "W",
          value:'w'
        },
        {
          name: "E",
          symbol: null,
          class: "apha1 row3",
          dataChar: "E",
          value:'e'
        },
        {
          name: "R",
          symbol: null,
          class: "apha1 row3",
          dataChar: "R",
          value:'r'
        },
        {
          name: "T",
          symbol: null,
          class: "apha1 row3",
          dataChar: "T",
          value:'t'
        },
        {
          name: "Y",
          symbol: null,
          class: "apha1 row3",
          dataChar: "Y",
          value:'y'
        },
        {
          name: "U",
          symbol: null,
          class: "apha1 row3",
          dataChar: "U",
          value:'u'
        },
        {
          name: "I",
          symbol: null,
          class: "apha1 row3",
          dataChar: "I",
          value:'i'
        },
        {
          name: "O",
          symbol: null,
          class: "apha1 row3",
          dataChar: "O",
          value:'o'
        },
        {
          name: "P",
          symbol: null,
          class: "apha1 row3",
          dataChar: "P",
          value:'p'
        },
        {
          name: "[",
          symbol: "{",
          class: "cb row3",
          dataKey: "219",
          value:'['
        },
        {
          name: "]",
          symbol: "}",
          class: "cb row3",
          dataKey: "221",
          value:']'
        },
        {
          name: "\\",
          symbol: "|",
          class: "cb row3",
          dataKey: "220",
          value:'\\'
        },
      ],
      row4: [
        {
          name: "Caps Lock",
          symbol: null,
          class: "caps row4",
          dataKey: "20",
          value:''
        },
        {
          name: "A",
          class: "apha1 row4",
          dataChar: "A",
          value:'a'
        },
        {
          name: "S",
          class: "apha1 row4",
          dataChar: "S",
          value:'s'
        },
        {
          name: "D",
          class: "apha1 row4",
          dataChar: "D",
          value:'d'
        },
        {
          name: "F",
          class: "apha1 row4",
          dataChar: "F",
          value:'f'
        },
        {
          name: "G",
          class: "apha1 row4",
          dataChar: "G",
          value:'g'
        },
        {
          name: "H",
          class: "apha1 row4",
          dataChar: "H",
          value:'h'
        },
        {
          name: "J",
          class: "apha1 row4",
          dataChar: "J",
          value:'j'
        },
        {
          name: "K",
          class: "apha1 row4",
          dataChar: "K",
          value:'k'
        },
        {
          name: "L",
          class: "apha1 row4",
          dataChar: "L",
          value:'l'
        },
        {
          name: ";",
          symbol: ":",
          class: "cb row4",
          dataKey: "186",
          value:';'
        },
        {
          name: "'",
          symbol: '"',
          class: "cb row4",
          dataKey: "222",
          value:"'"
        },
        {
          name: "Enter",
          class: "enter row4",
          dataKey: "13",
          value:'\n'
        },
      ],
      row5: [
        {
          name: "Shift",
          class: "shift1 row5",
          dataKey: "16",
          value:''
        },
        {
          name: "Z",
          symbol: null,
          class: "apha1 row5",
          dataChar: "Z",
          value:'z'
        },
        {
          name: "X",
          symbol: null,
          class: "apha1 row5",
          dataChar: "X",
          value:'x'
        },
        {
          name: "C",
          symbol: null,
          class: "apha1 row5",
          dataChar: "C",
          value:'c'
        },
        {
          name: "V",
          symbol: null,
          class: "apha1 row5",
          dataChar: "V",
          value:'v'
        },
        {
          name: "B",
          symbol: null,
          class: "apha1 row5",
          dataChar: "B",
          value:'b'
        },
        {
          name: "N",
          symbol: null,
          class: "apha1 row5",
          dataChar: "N",
          value:'n'
        },
        {
          name: "M",
          symbol: null,
          class: "apha1 row5",
          dataChar: "M",
          value:'m'
        },
        {
          name: ",",
          symbol: "<",
          class: "cb row5",
          dataKey: "188",
          value:','
        },
        {
          name: ".",
          symbol: ">",
          class: "cb row5",
          dataKey: "190",
          value:'.'
        },
        {
          name: "/",
          symbol: "?",
          class: "cb row5",
          dataKey: "191",
          value:'/'
        },
        {
          name: "Shift.",
          class: "shift2 row5",
          dataKey: "16-R",
          value:''
        },
      ],
      row6: [
        {
          name: "Ctrl",
          symbol: null,
          class: "ctrl row6",
          dataKey: "17",
          value:''
        },
        {
          name: "Fn",
          symbol: null,
          class: "last row6",
          dataKey: "",
          value:''
        },
        {
          icon: "fab fa-windows",
          symbol: null,
          class: "last row6",
          dataKey: "224",
          value:''
        },
        {
          name: "Alt",
          class: "last row6",
          dataKey: "18",
          value:''
        },
        {
          name: " ",
          class: "space row6",
          dataKey: "32",
          dataChar: " ",
          value:' '
        },
        {
          name: "Alt",
          class: "last row6",
          dataKey: "18-R",
          value:''
        },
        {
          name: "Ctrl",
          class: "last row6",
          dataKey: "17-R",
          value:''
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
      if (code === 8) {
      console.log(JSON.stringify('arr' + ' ' + this.pressedKey, null,2))  

      }


      this.pressedKey =  this.isCapsLock? document.querySelector(selector).getAttribute('data-value').toUpperCase() : this.isShift ? document.querySelector(selector).getAttribute('data-sym') || document.querySelector(selector).getAttribute('data-value').toUpperCase() : document.querySelector(selector).getAttribute('data-value');  



      return {selector:document.querySelector(selector),key:code};
    },
backspace(data){
data.pop()
},

    pressKey(char) {
      console.log("pressed", char);
      var selector =
        document.querySelector('[data-char*="' + char+ '"]') ||
        document.querySelector('[data-key="' + char+ '"]');
      console.log(selector);
      if (!selector) {
        return console.warn("No key for", char);
      }
      selector.classList.add("bg-black", "relative", "top-0.5", "text-gray-400");
      if(char == '20'){
                this.isCapsLock = !this.isCapsLock;
      } 
    //   if (char === '8') {
    //   console.log(JSON.stringify('arr' + ' ' + this.pressedKey, null,2))  
    // }
      // this.backspace(this.pressedKey)
      this.pressedKey = this.isCapsLock ?  selector.getAttribute('data-value').toUpperCase() : this.isShift ? selector.getAttribute('data-sym') || selector.getAttribute('data-value').toUpperCase() : selector.getAttribute('data-value')  

      // this.pressedKey = selector.getAttribute('data-value')
              this.$emit('key',this.pressedKey)

      if (char !=='20') {
        setTimeout(() => {
        selector.classList.remove(
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
      console.log(key.selector);
      if (!key.selector) {
        return console.warn("No key for", e.keyCode);
      }
      
      if(key.key == '16'){
        this.isShift = true
      }

      key.selector.classList.add("bg-black", "relative", "top-0.5", "text-gray-400");
    });
    document.body.addEventListener("keyup", (e) => {
      var key = this.keyBind(e);
      console.log(key.selector);
      if (!key) {
        return console.warn("No key for", e.keyCode);
      }

       if(key.key == '16'){
        this.isShift = false
      }

      key.selector.classList.remove("bg-black", "relative", "top-0.5", "text-gray-400");
    });
  },
  computed: {
   
  },
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
