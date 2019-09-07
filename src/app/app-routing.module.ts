import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UserGuard } from './guards/user-guard.service';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'messages',
    component: MensajesComponent,
    canActivate: [ UserGuard ]
  },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
