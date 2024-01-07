function buildElement(element) {
    const el = document.createElement(element);
    return {
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
        build() {
            return el;
        }
    };
}
export default buildElement;
