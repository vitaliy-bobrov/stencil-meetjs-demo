import {
  Component,
  Prop,
  Event,
  EventEmitter,
  Listen } from '@stencil/core';

import { MenuItem } from '../menu-list-item/menu-list-item.interface';

@Component({
  tag: 'menu-list'
})
export class MenuList {
  @Event() listChange: EventEmitter;

  @Prop() selection: string;

  @Listen('itemToggle')
  onItemToggle(event: CustomEvent) {
    this.listChange.emit((event.detail as MenuItem).value);
  }

  render() {
    return (
      <ul class="menu-list">
        {
          this.selection ?
          <p>Selected: { this.selection }</p> :
          <p>Select item</p>
        }
        <slot/>
      </ul>

    );
  }
}
