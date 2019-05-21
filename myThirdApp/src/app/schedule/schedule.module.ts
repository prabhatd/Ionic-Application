import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Schedule1Page } from './schedule.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Schedule1Page }])
  ],
  declarations: [Schedule1Page]
})
/* export class SchedulePageModule {}
 */
export class SchedulePageModule{}