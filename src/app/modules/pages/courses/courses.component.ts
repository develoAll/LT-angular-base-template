import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../../shared/modules/common-components.module';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonComponentsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

}
