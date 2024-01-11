import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { CommonComponentsModule } from './shared/modules/common-components.module';
import { FooterComponent } from './modules/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CommonComponentsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LT-angular-base-template';
  textEnv = environment.texServiceEnvironment

  constructor(
    private router: Router
  ){
    // console.log(this.textEnv);
  }

  navHeader( nav: string){
    this.router.navigate(['landing/'+ nav]);
  }
  
  
}
