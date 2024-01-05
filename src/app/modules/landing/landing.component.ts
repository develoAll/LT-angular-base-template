import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonComponentsModule } from '../../shared/modules/common-components.module';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, CommonComponentsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
