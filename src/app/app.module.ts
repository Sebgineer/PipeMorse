import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorsePipePipe } from './pipe/morse-pipe.pipe';
import { MorseComponent } from './component/morse/morse.component';
import { FormsModule } from '@angular/forms';
import { MD5PipePipe } from './pipe/md5-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MorsePipePipe,
    MorseComponent,
    MD5PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
