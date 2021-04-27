import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectedItem, SelectItems } from '@fgrid-ngx/mat-ext-select';
import { SearchData } from '@fgrid-ngx/mat-searchbox';
import { baseImageLocation, countryPops, searchData, selectItems } from './app.data';
import { catchError, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo for Extended Select';

  public selectedCountry = '';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerImages();

    // set initial selected values
    const initialSelection = Array.from(selectItems.values()).filter(selectItem => selectItem.selected)[0];
    this.selectedCountry = initialSelection ? initialSelection.display : '';
  }

  /** responds to selection */
  public itemSelected(selectedItem?: SelectedItem): void {
    if (!selectedItem?.value) { this.selectedCountry = ''; return; }
    this.selectedCountry = selectedItem.display;
    console.log(selectedItem, selectItems.get(selectedItem.value));
  }

  /** items to display in the drop-down component */
  public get selectItems(): SelectItems { return selectItems; }

  /**
   * In this case the search data is supplied rather than allowing the component to derive it from
   * the selection data, as we want the population to be searched as a numeric (for range searches), while it is presended as text in
   * the select data
   */
  public get searchData(): SearchData { return searchData; }

  /**
   * Add images for flags to registry and preload
   */
  private registerImages(): void {
    const noflag = this.sanitizer.bypassSecurityTrustResourceUrl(`${baseImageLocation}/noflag.svg`);
    countryPops
      .forEach(cp => {
        // register svg
        const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cp.imageUrl);
        this.iconRegistry.addSvgIcon(cp.code, safeUrl);

        // preload images - this step is not necessary if there are only a few images,  but makes the startup
        // a little faster for multiple images
        this.iconRegistry.getSvgIconFromUrl(safeUrl).pipe(take(1), catchError(e => {
          this.iconRegistry.addSvgIcon(cp.code, noflag);
          return of();
        })).subscribe();
      });
  }
}
