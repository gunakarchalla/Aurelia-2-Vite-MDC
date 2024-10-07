import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';
import {SVGAnalyzer} from '@aurelia/runtime-html';
import { AllConfiguration } from '@aurelia-mdc-web/all';

Aurelia
  .register(RouterConfiguration)
  .register(SVGAnalyzer)
  .register(AllConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
