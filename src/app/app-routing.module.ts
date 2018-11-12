import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'; 
import { AnuncioComponent } from './anuncio/anuncio.component'

const routes: Routes = [

	{ path: 'anuncio', component: AnuncioComponent }
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes), HttpClientModule ],
  exports: [ RouterModule ],
  declarations: [ ]
})

export class AppRoutingModule { }
