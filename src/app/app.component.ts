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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, preloader: SvgIconRegistryService) {
    // add into registry
    countryPops.forEach(cp => iconRegistry.addSvgIcon(cp.code, sanitizer.bypassSecurityTrustResourceUrl(cp.imageUrl)));

    // preload
    const obs = countryPops.map(cp => preloader.loadSvg(cp.imageUrl).pipe(
      take(1),
      catchError(e => {
        iconRegistry.addSvgIcon(cp.code, sanitizer.bypassSecurityTrustResourceUrl('assets/noflag.svg'));
        return of('');
      })));
    forkJoin(obs).subscribe(() => console.log('preload complete'));
  }

  public get selectItems(): SelectItems { return selectItems; }

  public get searchData(): SearchData { return searchData; }

  public itemSelected(selectedItem?: SelectedItem): void {
    if (!selectedItem?.value) { return; }
    console.log(selectedItem, selectItems.get(selectedItem.value));
  }
}
