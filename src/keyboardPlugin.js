import keyboard from './components/Keyboard.vue'

export default{
    install(Vue){
        Vue.prototype.$name = 'Blaq'
        Vue.prototype.$resizeHandler=()=> {
                let size = this.$refs.container.clientWidth / 90;
                this.$refs.container.style.fontSize = size + "px";
            }
        Vue.prototype$keyBind=(e)=> {
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


            this.pressedKey = this.isCapsLock ? document.querySelector(selector).getAttribute('data-value').toUpperCase() : this.isShift ? document.querySelector(selector).getAttribute('data-sym') || document.querySelector(selector).getAttribute('data-value').toUpperCase() : document.querySelector(selector).getAttribute('data-value');



            return { selector: document.querySelector(selector), key: code };
        },
            Vue.prototype.$pressKey=(char) =>{
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
            //   if (char === '8') {
            //   console.log(JSON.stringify('arr' + ' ' + this.pressedKey, null,2))  
            // }
            // this.backspace(this.pressedKey)
            this.pressedKey = this.isCapsLock ? selector.getAttribute('data-value').toUpperCase() : this.isShift ? selector.getAttribute('data-sym') || selector.getAttribute('data-value').toUpperCase() : selector.getAttribute('data-value')

            // this.pressedKey = selector.getAttribute('data-value')
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
        Vue.component('key-board', keyboard)
    }
}
