/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { MenuListItem as MenuListDemo } from './components/menu-list-demo/menu-list-demo';

interface HTMLMenuListDemoElement extends MenuListDemo, HTMLElement {
}
declare var HTMLMenuListDemoElement: {
  prototype: HTMLMenuListDemoElement;
  new (): HTMLMenuListDemoElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "menu-list-demo": HTMLMenuListDemoElement;
  }
  interface ElementTagNameMap {
      "menu-list-demo": HTMLMenuListDemoElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "menu-list-demo": JSXElements.MenuListDemoAttributes;
      }
  }
  namespace JSXElements {
      export interface MenuListDemoAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

import { MenuListItem as MenuListItem } from './components/menu-list-item/menu-list-item';

interface HTMLMenuListItemElement extends MenuListItem, HTMLElement {
}
declare var HTMLMenuListItemElement: {
  prototype: HTMLMenuListItemElement;
  new (): HTMLMenuListItemElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "menu-list-item": HTMLMenuListItemElement;
  }
  interface ElementTagNameMap {
      "menu-list-item": HTMLMenuListItemElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "menu-list-item": JSXElements.MenuListItemAttributes;
      }
  }
  namespace JSXElements {
      export interface MenuListItemAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          option?: any
      }
  }
}

import { MenuList as MenuList } from './components/menu-list/menu-list';

interface HTMLMenuListElement extends MenuList, HTMLElement {
}
declare var HTMLMenuListElement: {
  prototype: HTMLMenuListElement;
  new (): HTMLMenuListElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "menu-list": HTMLMenuListElement;
  }
  interface ElementTagNameMap {
      "menu-list": HTMLMenuListElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "menu-list": JSXElements.MenuListAttributes;
      }
  }
  namespace JSXElements {
      export interface MenuListAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          selection?: string
      }
  }
}

