import { catchError, take } from 'rxjs/operators';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectedItem, SelectItems } from '@fgrid-ngx/mat-ext-select';
import { SearchData } from '@fgrid-ngx/mat-searchbox';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { countryPops, searchData, selectItems } from './app.data';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo for Extended Select';

  public selectedCountry = '';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private preloader: SvgIconRegistryService) {
    this.registerImages();
    this.preloadImages();

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
   * In this case the search data is supplied rather than allowing the component to derived it from
   * the selection data, as we want the population to be searched as a numeric (for range searches), while it is presended as text in
   * the select data
   */
  public get searchData(): SearchData { return searchData; }

  // add images to icon regsitry
  private registerImages(): void {
    countryPops
      .forEach(cp => this.iconRegistry.addSvgIcon(cp.code, this.sanitizer.bypassSecurityTrustResourceUrl(cp.imageUrl)));
  }

  // preload images - this step is not necessary if there are only a few images,  but makes the startup
  // a little faster for multiple images
  private preloadImages(): void {
    // preload
    const obs = countryPops.map(cp => this.preloader.loadSvg(cp.imageUrl).pipe(
      take(1),
      catchError(e => {
        //  add empty icon
        this.iconRegistry.addSvgIcon(cp.code, this.sanitizer.bypassSecurityTrustResourceUrl('assets/noflag.svg'));
        return of('');
      })));
    forkJoin(obs).subscribe(() => console.log('preload complete'));
  }
}
