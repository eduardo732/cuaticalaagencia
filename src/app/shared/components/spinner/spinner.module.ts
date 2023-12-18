import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './spinner.interceptor';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
})
export class SpinnerModule { }
