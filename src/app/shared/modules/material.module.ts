import { NgModule } from '@angular/core';
import { MatListModule, MatNavList } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule,
         MatSidenavModule,
         MatButtonModule,
         MatProgressSpinnerModule,
         MatCardModule,
         MatIconModule,
         MatFormFieldModule,
         MatSnackBarModule,
         MatMenuModule,
         MatButtonToggle,
         MatButtonToggleModule,
         MatTableModule,
         MatPaginatorModule,
         MAT_LABEL_GLOBAL_OPTIONS,
         MatOptionModule,
         MatSelectModule,
         MatSliderModule,
         MatSlideToggleModule
         } from '@angular/material';
import { CommonModule } from '@angular/common';
@NgModule({
    imports : [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        CommonModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTableModule,
        MatPaginatorModule,
        MatOptionModule,
        MatSelectModule,
        MatSlideToggleModule
    ],
    exports : [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTableModule,
        MatPaginatorModule,
        MatOptionModule,
        MatSelectModule,
        MatSlideToggleModule
    ],
    declarations: [],
    providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'hover'}}]
})

export class MaterialModule {}

