import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToolbarComponent,HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agendamento';



}
