import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToolbarComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agendamento';



}
