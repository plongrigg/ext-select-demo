import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { SelectedItem, SelectItems } from '@fgrid-ngx/mat-ext-select';
import { SearchData } from '@fgrid-ngx/mat-searchbox';
import { searchData, selectItemsSvg, selectItemsEmoji } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo for Extended Select';

  public selectedCountry?: SelectedItem;

  public iconType: 'svg' | 'emoji' = 'emoji';

  public formGroup = new FormGroup({ countries: new FormControl('GB') });

  constructor() {
    // set initial selected values
    const initialSelection = Array.from(selectItemsSvg.values()).filter(selectItem => selectItem.selected)[0];
    this.selectedCountry = initialSelection ? { value: initialSelection.value || '', display: initialSelection.display } : undefined;

    this.formGroup.valueChanges.subscribe(v => console.log(v));
  }

  /** responds to selection */
  public itemSelected(selectedItem?: SelectedItem): void {
    this.selectedCountry = selectedItem || undefined;
    console.log(selectedItem, selectItemsSvg.get(selectedItem?.value || ''));
  }

  /** items to display in the drop-down component */
  public get selectItems(): SelectItems { return this.iconType === 'emoji' ? selectItemsEmoji : selectItemsSvg; }

  /**
   * In this case the search data is supplied rather than allowing the component to derive it from
   * the selection data, as we want the population to be searched as a numeric (for range searches), while it is presended as text in
   * the select data
   */
  public get searchData(): SearchData { return searchData; }

  /** switch icon type to demo svg vs emojis */
  public switchIconType(change: MatButtonToggleChange): void {
    this.iconType = change.value;

    // prompts change to selected item to redraw icon
    if (this.selectedCountry) {
      this.selectedCountry = { ...this.selectedCountry };
    }

    // prompts change in form
    setTimeout(() => {
      this.formGroup.setValue({ countries: '' });
      this.formGroup.setValue({ countries: this.selectedCountry?.value });
    });
  }



}
