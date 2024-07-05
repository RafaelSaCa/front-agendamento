import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-erro',
  standalone: true,
  imports: [MatDialogModule, MatDialogActions, MatButtonModule],
  templateUrl: './dialog-erro.component.html',
  styleUrl: './dialog-erro.component.scss'
})
export class DialogErroComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
