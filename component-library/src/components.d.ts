/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LikeComponent {
        "label": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SearchComponent {
        "value": string;
    }
}
export interface SearchComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSearchComponentElement;
}
declare global {
    interface HTMLLikeComponentElement extends Components.LikeComponent, HTMLStencilElement {
    }
    var HTMLLikeComponentElement: {
        prototype: HTMLLikeComponentElement;
        new (): HTMLLikeComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSearchComponentElement extends Components.SearchComponent, HTMLStencilElement {
    }
    var HTMLSearchComponentElement: {
        prototype: HTMLSearchComponentElement;
        new (): HTMLSearchComponentElement;
    };
    interface HTMLElementTagNameMap {
        "like-component": HTMLLikeComponentElement;
        "my-component": HTMLMyComponentElement;
        "search-component": HTMLSearchComponentElement;
    }
}
declare namespace LocalJSX {
    interface LikeComponent {
        "label"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SearchComponent {
        "onChangeInput"?: (event: SearchComponentCustomEvent<string>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "like-component": LikeComponent;
        "my-component": MyComponent;
        "search-component": SearchComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "like-component": LocalJSX.LikeComponent & JSXBase.HTMLAttributes<HTMLLikeComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "search-component": LocalJSX.SearchComponent & JSXBase.HTMLAttributes<HTMLSearchComponentElement>;
        }
    }
}
