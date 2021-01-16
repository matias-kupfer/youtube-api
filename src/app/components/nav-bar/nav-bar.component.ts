import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {LoaderService} from '../../core/services/loader.service';
import {FormControl} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ToggleThemeService} from '../../core/services/toggle-theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() title: any;
  public showLoader = false;

  toggleControl = new FormControl(true);
  @HostBinding('class') className = '';

  constructor(private loaderService: LoaderService, private toggleService: ToggleThemeService) { }

  ngOnInit(): void {
    this.loaderService.loaderState.subscribe(state => this.showLoader = state);
    this.toggleControl.valueChanges.subscribe((toggleState) => {
      this.toggleService.toggle(toggleState);
    });
  }

}
