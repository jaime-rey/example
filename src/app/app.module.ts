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

import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { DiscountService } from './discount.service';
import { PaDiscountPipe } from './discount.pipe';

import { PaDiscountAmountDirective } from './discountAmount.directive';

import { SimpleDataSource } from './datasource.model';
import { Model } from './repository.model';
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
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountPipe,
    PaDiscountAmountDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [DiscountService, SimpleDataSource, Model],
  bootstrap: [ProductComponent],
})
export class AppModule {}
