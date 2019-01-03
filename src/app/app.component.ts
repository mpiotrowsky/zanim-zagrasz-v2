import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zanim-zagrasz';

  constructor(
    public translate: TranslateService) {
    translate.setDefaultLang('pl');
    translate.use('pl');
  }

}
