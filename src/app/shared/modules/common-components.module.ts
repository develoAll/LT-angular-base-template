import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

const modules = [

];

const mat_modules = [
  MatIconModule,
  MatDividerModule,
  MatButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    mat_modules
  ]
})
export class CommonComponentsModule { }
