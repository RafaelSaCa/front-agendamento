import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit  {

  textoHeader: string = '';

  constructor(private router: Router){}

  ngOnInit(): void {
   this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        const rotaAtual = this.router.routerState.snapshot.root;
        this.textoHeader = this.getTitle(rotaAtual);
      });
  }

  getTitle(route : any): string {
    let textoHeader = route.data?.textoHeader || '';
    if (route.firstChild) {
      textoHeader = this.getTitle(route.firstChild) || textoHeader;
    }
    return textoHeader;;
  }

}



