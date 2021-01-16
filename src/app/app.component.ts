import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ToggleThemeService} from './core/services/toggle-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Youtube API | By Matias Kupfer';
  @HostBinding('class') className = 'darkMode';

  constructor(private overlay: OverlayContainer, private toggleTheme: ToggleThemeService) {
  }

  ngOnInit(): void {
    this.toggleTheme.darkMode.subscribe((darkMode: boolean) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }
}
