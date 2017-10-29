import { Component, Prop, Event, EventEmitter } from '@stencil/core';

import { MenuItem } from './menu-list-item.interface';

@Component({
  tag: 'menu-list-item',
  styleUrl: 'menu-list-item.scss'
})
export class MenuListItem {
  @Prop() option: Partial<MenuItem>;

  @Event() itemToggle: EventEmitter;

  constructor() {
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick() {
    this.itemToggle.emit(this.option);
  }

  render() {
    return (
      <li class="item" onClick={this.onItemClick}>
        { this.option.selected ? '✅' : '❌' }
        <slot/>
      </li>
    );
  }
}
