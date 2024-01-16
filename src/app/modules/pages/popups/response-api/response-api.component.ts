import { Component } from '@angular/core';
import { CommonComponentsModule } from '../../../../shared/modules/common-components.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-response-api',
  standalone: true,
  imports: [CommonComponentsModule],
  templateUrl: './response-api.component.html',
  styleUrl: './response-api.component.scss',
})
export class ResponseApiComponent {
  constructor(
    private _matDialogRef: MatDialogRef<ResponseApiComponent>,
  ){}

  close(){
    this._matDialogRef.close(true)
  }
}
