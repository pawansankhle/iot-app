import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
    imports: [ CommonModule ],
    providers: [ LoaderService ]
})
export class LoaderModule {}
