import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
