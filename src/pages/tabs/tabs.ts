import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
import { RedditsPage } from '../reddits/reddits';
import { ResumePage } from '../resume/resume';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RedditsPage;
  tab2Root: any = AboutPage;
  tab3Root: any = SettingsPage;
  tab4Root: any = ResumePage;

  constructor() {

  }
}
