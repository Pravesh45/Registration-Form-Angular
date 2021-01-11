import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalComponent} from './personal/personal.component';
import { AcademicComponent} from './academic/academic.component';
import { WorkComponent } from './work/work.component';
import { UploadComponent } from './upload/upload.component';
import {ConfirmComponent} from './confirm/confirm.component'

const routes: Routes = [
  {path:'',redirectTo:'/personalData',pathMatch:'full'},
  {path:'personalData',component:PersonalComponent},
  {path:'academicData',component:AcademicComponent},
  {path:'workData',component:WorkComponent},
  {path:'upload',component:UploadComponent},
  {path:'confirm',component:ConfirmComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules=[PersonalComponent,AcademicComponent,WorkComponent,UploadComponent,PageNotFoundComponent,ConfirmComponent]