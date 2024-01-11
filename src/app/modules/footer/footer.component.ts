import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../shared/modules/common-components.module';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonComponentsModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
