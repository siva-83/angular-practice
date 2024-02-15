import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigtextPipe } from './bigtext.pipe';


@NgModule({
  declarations: [
    BigtextPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[BigtextPipe]
})
export class SharedModule { }
