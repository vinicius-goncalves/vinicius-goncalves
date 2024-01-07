interface ElementBuilder<T extends keyof HTMLElementTagNameMap> {
    setText(text: string): ElementBuilder<T>;
    setBuiltInAttribute<K extends keyof HTMLElementTagNameMap[T]>(name: K, value: string): ElementBuilder<T>;
    setCustomAttribute(name: string, value: string): ElementBuilder<T>;
    build(): HTMLElement;
}

function buildElement<T extends keyof HTMLElementTagNameMap>(element: T): ElementBuilder<T> {

    const el = document.createElement(element);

    return {

        setText(text: string): ElementBuilder<T> {

            el.textContent = text;
            return this;

        },

        setBuiltInAttribute<K extends keyof HTMLElementTagNameMap[T]> (name: K & string, value: string): ElementBuilder<T> {

            el.setAttribute(name, value);
            return this;

        },

        setCustomAttribute(name: string, value: string): ElementBuilder<T> {

            const attr = document.createAttribute(name)
            attr.value = value;
            el.setAttributeNode(attr);

            return this
        },

        build(): HTMLElement {
            return el;
        }
    }
}

export default buildElement;