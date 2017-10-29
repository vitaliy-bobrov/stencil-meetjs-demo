import {
  Component,
  State,
  Listen } from '@stencil/core';

import { MenuItem } from '../menu-list-item/menu-list-item.interface';

export interface DemoList extends MenuItem {
  label: string;
  value: number;
}

@Component({
  tag: 'menu-list-demo',
  styleUrl: 'menu-list-demo.scss'
})
export class MenuListItem {
  @State() optionsList: DemoList[] = [];

  get selectedItem(): string | null {
    const selected = this.optionsList
      .filter(item => item.selected)
      .pop();

    return selected ? selected.label : null;
  }

  constructor() {
    this.initItems = this.initItems.bind(this);
  }

  @Listen('listChange')
  onSelectionChange(event: CustomEvent) {
    this.optionsList = this.optionsList.map(option => {
      return {
         ...option,
        selected: option.value === event.detail ? !option.selected : false
      };
    });
  }

  initItems() {
    this.optionsList = [
      {
        label: 'React',
        selected: false,
        value: 1
      },
      {
        label: 'Vue',
        selected: false,
        value: 2
      },
      {
        label: 'Angular',
        selected: false,
        value: 3
      }
    ];
  }

  render() {
    return (
      <div class="wrapper">
        { this.optionsList && this.optionsList.length ?
          <menu-list selection={ this.selectedItem }>
            { this.optionsList.map(option =>
              <menu-list-item option={option}>
                <strong>{ option.label }</strong>
              </menu-list-item>)}
          </menu-list> :
          <section>
            <p>No items to show</p>
            <button onClick={this.initItems}>Initialize</button>
          </section> }
      </div>
    );
  }
}
