import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // constructor(private router:Router, @Inject(PLATFORM_ID) private platformId: Object){
  //   if(isPlatformBrowser(platformId))
  //   {
  //     let theme = localStorage.getItem('hs_theme');
  //     if (theme) {
  //       document.documentElement.classList.toggle('dark', theme === 'dark');
  //     } 
  //     else 
  //     {
  //       document.documentElement.classList.toggle(
  //         'dark',
  //         window.matchMedia('(prefers-color-scheme: dark)').matches
  //       );
  //     }
  //   }
  // }

  // ngOnInit() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe((event: NavigationEnd) => {
  //   console.log('Navigation ended successfully:', event.urlAfterRedirects);
  // });
  // }
}