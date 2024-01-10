function buildElement(element) {
    const el = document.createElement(element);
    return {
        appendOn(target) {
            target.appendChild(el);
            return this;
        },
        addClass(...classList) {
            el.classList.add(...classList);
            return this;
        },
        setText(text) {
            el.textContent = text;
            return this;
        },
        setBuiltInAttribute(name, value) {
            el.setAttribute(name, value);
            return this;
        },
        setCustomAttribute(name, value) {
            const attr = document.createAttribute(name);
            attr.value = value;
            el.setAttributeNode(attr);
            return this;
        },
        setStyle(style) {
            if (!style) {
                return this;
            }
            for (const prop in style) {
                if (Object.prototype.hasOwnProperty.call(style, prop)) {
                    el.style[prop] = style[prop];
                }
            }
            return this;
        },
        build() {
            return el;
        }
    };
}
export default buildElement;
