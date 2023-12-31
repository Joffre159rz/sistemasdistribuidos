import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesPageRoutingModule } from './notificaciones-routing.module';

import { NotificacionesPage } from './notificaciones.page';
import { HeaderComponent } from '../components/header/header.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  entryComponents: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule {}
