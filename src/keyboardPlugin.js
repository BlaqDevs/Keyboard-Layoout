import keyboard from './components/Keyboard.vue'


export default {
    install(Vue) {
        Vue.component('key-board', keyboard)

        Vue.mixin({

            data() {
                return {
                    isCapsLock: false,
                    isBackSpace: false,
                    isShift: false,
                    pressedKey: null,
                    text:[],
                    row1: [
                        {
                            name: "ESC",
                            class: "esc row1",
                            dataKey: "27",
                            value: ''
                        },
                        {
                            name: "F1",
                            class: "fn row1",
                            dataKey: "112",
                            value: ''

                        },
                        {
                            name: "F2",
                            class: "fn row1",
                            dataKey: "113",
                            value: ''
                        },
                        {
                            name: "F3",
                            class: "fn row1",
                            dataKey: "114",
                            value: ''
                        },
                        {
                            name: "F4",
                            class: "fn row1",
                            dataKey: "115",
                            value: ''
                        },
                        {
                            name: "F5",
                            class: "fn row1",
                            dataKey: "116",
                            value: ''
                        },
                        {
                            name: "F6",
                            class: "fn row1",
                            dataKey: "117",
                            value: ''
                        },
                        {
                            name: "F7",
                            class: "fn row1",
                            dataKey: "118",
                            value: ''
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
                            value: ''
                        },
                        {
                            name: "F10",
                            class: "fn row1",
                            dataKey: "121",
                            value: ''
                        },
                        {
                            name: "F11",
                            class: "fn row1",
                            dataKey: "122",
                            value: ''
                        },
                        {
                            name: "F12",
                            class: "fn row1",
                            dataKey: "123",
                            value: ''
                        },
                        {
                            name: "PrtScr",
                            class: "prtscr row1",
                            dataKey: "44",
                            value: ''
                        },
                        {
                            name: "Insert",
                            class: "insert row1",
                            dataKey: "45",
                            value: ''
                        },
                        {
                            name: "Delete",
                            class: "del row1",
                            dataKey: "46",
                            value: ''
                        },
                    ],
                    row2: [
                        {
                            name: "`",
                            symbol: "~",
                            class: "backtick row2",
                            dataKey: "192",
                            value: '`'
                        },
                        {
                            name: "1",
                            symbol: "!",
                            class: "number row2",
                            dataKey: "49",
                            value: '1'
                        },
                        {
                            name: "2",
                            symbol: "@",
                            class: "number row2",
                            dataKey: "50",
                            value: '2'
                        },
                        {
                            name: "3",
                            symbol: "#",
                            class: "number row2",
                            dataKey: "51",
                            value: '3'
                        },
                        {
                            name: "4",
                            symbol: "$",
                            class: "number row2",
                            dataKey: "52",
                            value: '4'
                        },
                        {
                            name: "5",
                            symbol: "%",
                            class: "number row2",
                            dataKey: "53",
                            value: '5'
                        },
                        {
                            name: "6",
                            symbol: "^",
                            class: "number row2",
                            dataKey: "54",
                            value: '6'
                        },
                        {
                            name: "7",
                            symbol: "&",
                            class: "number row2",
                            dataKey: "55",
                            value: '7'
                        },
                        {
                            name: "8",
                            symbol: "*",
                            class: "number row2",
                            dataKey: "56",
                            value: '8'
                        },
                        {
                            name: "9",
                            symbol: "(",
                            class: "number row2",
                            dataKey: "57",
                            value: '9'
                        },
                        {
                            name: "0",
                            symbol: ")",
                            class: "number row2",
                            dataKey: "48",
                            value: '0'
                        },
                        {
                            name: "-",
                            symbol: "_",
                            class: "number row2",
                            dataKey: "189",
                            value: '-'
                        },
                        {
                            name: "=",
                            symbol: "+",
                            class: "number row2",
                            dataKey: "187",
                            value: '='
                        },
                        {
                            name: "Backspace",
                            symbol: null,
                            class: "backspace row2",
                            dataKey: "8",
                            value: 'back-space'
                        },
                    ],
                    row3: [
                        {
                            name: "Tab",
                            symbol: null,
                            class: "tab row3",
                            dataKey: "9",
                            value: ''
                        },
                        {
                            name: "Q",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "Q",
                            value: 'q'
                        },
                        {
                            name: "W",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "W",
                            value: 'w'
                        },
                        {
                            name: "E",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "E",
                            value: 'e'
                        },
                        {
                            name: "R",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "R",
                            value: 'r'
                        },
                        {
                            name: "T",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "T",
                            value: 't'
                        },
                        {
                            name: "Y",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "Y",
                            value: 'y'
                        },
                        {
                            name: "U",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "U",
                            value: 'u'
                        },
                        {
                            name: "I",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "I",
                            value: 'i'
                        },
                        {
                            name: "O",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "O",
                            value: 'o'
                        },
                        {
                            name: "P",
                            symbol: null,
                            class: "apha1 row3",
                            dataChar: "P",
                            value: 'p'
                        },
                        {
                            name: "[",
                            symbol: "{",
                            class: "cb row3",
                            dataKey: "219",
                            value: '['
                        },
                        {
                            name: "]",
                            symbol: "}",
                            class: "cb row3",
                            dataKey: "221",
                            value: ']'
                        },
                        {
                            name: "\\",
                            symbol: "|",
                            class: "cb row3",
                            dataKey: "220",
                            value: '\\'
                        },
                    ],
                    row4: [
                        {
                            name: "Caps Lock",
                            symbol: null,
                            class: "caps row4",
                            dataKey: "20",
                            value: ''
                        },
                        {
                            name: "A",
                            class: "apha1 row4",
                            dataChar: "A",
                            value: 'a'
                        },
                        {
                            name: "S",
                            class: "apha1 row4",
                            dataChar: "S",
                            value: 's'
                        },
                        {
                            name: "D",
                            class: "apha1 row4",
                            dataChar: "D",
                            value: 'd'
                        },
                        {
                            name: "F",
                            class: "apha1 row4",
                            dataChar: "F",
                            value: 'f'
                        },
                        {
                            name: "G",
                            class: "apha1 row4",
                            dataChar: "G",
                            value: 'g'
                        },
                        {
                            name: "H",
                            class: "apha1 row4",
                            dataChar: "H",
                            value: 'h'
                        },
                        {
                            name: "J",
                            class: "apha1 row4",
                            dataChar: "J",
                            value: 'j'
                        },
                        {
                            name: "K",
                            class: "apha1 row4",
                            dataChar: "K",
                            value: 'k'
                        },
                        {
                            name: "L",
                            class: "apha1 row4",
                            dataChar: "L",
                            value: 'l'
                        },
                        {
                            name: ";",
                            symbol: ":",
                            class: "cb row4",
                            dataKey: "186",
                            value: ';'
                        },
                        {
                            name: "'",
                            symbol: '"',
                            class: "cb row4",
                            dataKey: "222",
                            value: "'"
                        },
                        {
                            name: "Enter",
                            class: "enter row4",
                            dataKey: "13",
                            value: '\n'
                        },
                    ],
                    row5: [
                        {
                            name: "Shift",
                            class: "shift1 row5",
                            dataKey: "16",
                            value: ''
                        },
                        {
                            name: "Z",
                            symbol: null,
                            class: "apha1 row5",
                            dataChar: "Z",
                            value: 'z'
                        },
                        {
                            name: "X",
                            symbol: null,
                            class: "apha1 row5",
                            dataChar: "X",
                            value: 'x'
                        },
                        {
                            name: "C",
                            symbol: null,
                            class: "apha1 row5",
                            dataChar: "C",
                            value: 'c'
                        },
                        {
                            name: "V",
                            symbol: null,
                            class: "apha1 row5",
                            dataChar: "V",
                            value: 'v'
                        },
                        {
                            name: "B",
                            symbol: null,
                            class: "apha1 row5",
                            dataChar: "B",
                            value: 'b'
                        },
                        {
                            name: "N",
                            symbol: null,
                            class: "apha1 row5",
                            dataChar: "N",
                            value: 'n'
                        },
                        {
                            name: "M",
                            symbol: null,
                            class: "apha1 row5",
                            dataChar: "M",
                            value: 'm'
                        },
                        {
                            name: ",",
                            symbol: "<",
                            class: "cb row5",
                            dataKey: "188",
                            value: ','
                        },
                        {
                            name: ".",
                            symbol: ">",
                            class: "cb row5",
                            dataKey: "190",
                            value: '.'
                        },
                        {
                            name: "/",
                            symbol: "?",
                            class: "cb row5",
                            dataKey: "191",
                            value: '/'
                        },
                        {
                            name: "Shift.",
                            class: "shift2 row5",
                            dataKey: "16-R",
                            value: ''
                        },
                    ],
                    row6: [
                        {
                            name: "Ctrl",
                            symbol: null,
                            class: "ctrl row6",
                            dataKey: "17",
                            value: ''
                        },
                        {
                            name: "Fn",
                            symbol: null,
                            class: "last row6",
                            dataKey: "",
                            value: ''
                        },
                        {
                            icon: "fab fa-windows",
                            symbol: null,
                            class: "last row6",
                            dataKey: "224",
                            value: ''
                        },
                        {
                            name: "Alt",
                            class: "last row6",
                            dataKey: "18",
                            value: ''
                        },
                        {
                            name: " ",
                            class: "space row6",
                            dataKey: "32",
                            dataChar: " ",
                            value: ' '
                        },
                        {
                            name: "Alt",
                            class: "last row6",
                            dataKey: "18-R",
                            value: ''
                        },
                        {
                            name: "Ctrl",
                            class: "last row6",
                            dataKey: "17-R",
                            value: ''
                        },
                    ],
                };
            },
            methods: {
               
                showKeyboard() {
                    this.focus = true
                },
                resizeHandler() {
                    let size = this.$refs.container.clientWidth / 90;
                    this.$refs.container.style.fontSize = size + "px";
                },
                keyDown(e) {
                    var key = this.keyBind(e);
                    console.log(key.selector);
                    if (!key.selector) {
                        return console.warn("No key for", e.keyCode);
                    }

                    if (key.key == '16') {
                        this.isShift = true
                    }

                    key.selector.classList.add("bg-black", "relative", "top-0.5", "text-gray-400");

                },
                keyUp(e) {
                    var key = this.keyBind(e)
                    console.log(key.selector)
                    if (!key) {
                        return console.warn("No key for", e.keyCode);
                    }

                    if (key.key == '16') {
                        this.isShift = false
                    }

                    key.selector.classList.remove("bg-black", "relative", "top-0.5", "text-gray-400");
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
                        console.log(JSON.stringify('arr' + ' ' + this.pressedKey, null, 2))

                    }


                    let getKeyValue = document.querySelector(selector).getAttribute('data-value')
                    let getKeySym = document.querySelector(selector).getAttribute('data-sym')

                    this.pressedKey = this.isCapsLock ? getKeyValue.toUpperCase() : this.isShift ? getKeySym || getKeyValue.toUpperCase() : getKeyValue;



                    return { selector: document.querySelector(selector), key: code };
                },
                backspace(data) {
                    data.pop()
                },

                pressKey(char) {
                    console.log("pressed", char);
                    var selector =
                        document.querySelector('[data-char*="' + char + '"]') ||
                        document.querySelector('[data-key="' + char + '"]');
                    console.log(selector);
                    if (!selector) {
                        return console.warn("No key for", char);
                    }
                    selector.classList.add("bg-black", "relative", "top-0.5", "text-gray-400");
                    if (char == '20') {
                        this.isCapsLock = !this.isCapsLock;
                    }

                    this.pressedKey = this.isCapsLock ? selector.getAttribute('data-value').toUpperCase() : this.isShift ? selector.getAttribute('data-sym') || selector.getAttribute('data-value').toUpperCase() : selector.getAttribute('data-value')

                    // this.pressedKey = selector.getAttribute('data-value')
                    // text.push(this.pressedKey)
                    this.$emit('key', this.pressedKey)

                    if (char !== '20') {
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
                document.body.addEventListener("keydown", this.keyDown);
                document.body.addEventListener("keyup", this.keyUp);
            },
           
            created() {
                window.addEventListener("resize", this.resizeHandler);
            },

            destroyed() {
                window.removeEventListener("resize", this.resizeHandler);
            },
        })
    }
}
