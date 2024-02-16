interface ElementBuilder<T extends keyof HTMLElementTagNameMap> {
    appendOn(target: HTMLElement): ElementBuilder<T>;
    addClass(...classList: string[]): ElementBuilder<T>;
    setText(text: string): ElementBuilder<T>;
    setBuiltInAttribute<K extends keyof HTMLElementTagNameMap[T]>(name: K, value: string): ElementBuilder<T>;
    setCustomAttribute(name: string, value: string): ElementBuilder<T>;
    setStyle(style: Partial<CSSStyleDeclaration>): ElementBuilder<T>;
    build(): HTMLElement;
}

function buildElement<T extends keyof HTMLElementTagNameMap>(element: T): ElementBuilder<T> {

    const el = document.createElement(element);

    return {

        appendOn(target: HTMLElement): ElementBuilder<T> {

            target.appendChild(el);
            return this;

        },

        addClass(...classList: string[]): ElementBuilder<T> {
            el.classList.add(...classList);
            return this;
        },

        setText(text: string): ElementBuilder<T> {

            el.textContent = text;
            return this;

        },

        setBuiltInAttribute<K extends keyof HTMLElementTagNameMap[T]>(name: K & string, value: string): ElementBuilder<T> {

            el.setAttribute(name, value);
            return this;

        },

        setCustomAttribute(name: string, value: string): ElementBuilder<T> {

            const attr = document.createAttribute(name)
            attr.value = value;
            el.setAttributeNode(attr);

            return this
        },

        setStyle(style: Partial<CSSStyleDeclaration>): ElementBuilder<T> {

            if(!style) {
                return this;
            }

            for(const prop in style) {
                if(Object.prototype.hasOwnProperty.call(style, prop)) {
                    el.style[prop] = style[prop] as string;
                }
            }

            return this;
        },

        build(): HTMLElement {
            return el;
        }
    }
}

export default buildElement;