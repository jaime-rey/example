import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './component';
import { FormsModule } from '@angular/forms';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaStructureDirective } from './structure.directive';

import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';

import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { ToggleViewComponent } from './toggleView/toggle-view.component';
import { AddTaxPipe } from './add-tax.pipe';

import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';

registerLocaleData(localeFr);
@NgModule({
  declarations: [
    ProductComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    ToggleViewComponent,
    AddTaxPipe,
    PaCategoryFilterPipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],

  bootstrap: [ProductComponent],
})
export class AppModule {}
