import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsPageRoutingModule } from './songs-routing.module';

import { SongsPage } from './songs.page';
import { ControlComponent } from '../components/control/control.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsPageRoutingModule
  ],
  declarations: [SongsPage, ControlComponent]
})
export class SongsPageModule { }
