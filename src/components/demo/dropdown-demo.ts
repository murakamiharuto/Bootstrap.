/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, bootstrap, coreDirectives} from 'angular2/angular2';

import {dropdown} from 'src/components/dropdown/index';

@Component({
  selector: 'dropdown-demo'
})
@View({
  template: `
    <hr/>
    <h2>Dropdown</h2>
    <div>
        <!-- Simple dropdown -->
        <span dropdown (on-toggle)="toggled($event)">
          <a href id="simple-dropdown" dropdown-toggle>
            Click me for a dropdown, yo!
          </a>
          <ul class="dropdown-menu" aria-labelledby="simple-dropdown">
            <li *ng-for="#choice of items">
              <a href="#">{{choice}}</a>
            </li>
          </ul>
        </span>

        <!-- Single button -->
        <div class="btn-group" dropdown [is-open]="status.isopen">
          <button id="single-button" type="button" class="btn btn-primary" dropdown-toggle [disabled]="disabled">
            Button dropdown <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="single-button">
            <li role="menuitem"><a href="#">Action</a></li>
            <li role="menuitem"><a href="#">Another action</a></li>
            <li role="menuitem"><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li role="menuitem"><a href="#">Separated link</a></li>
          </ul>
        </div>

        <!-- Split button -->
        <div class="btn-group" dropdown>
          <button id="split-button" type="button" class="btn btn-danger">Action</button>
          <button type="button" class="btn btn-danger" dropdown-toggle>
            <span class="caret"></span>
            <span class="sr-only">Split button!</span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="split-button">
            <li role="menuitem"><a href="#">Action</a></li>
            <li role="menuitem"><a href="#">Another action</a></li>
            <li role="menuitem"><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li role="menuitem"><a href="#">Separated link</a></li>
          </ul>
        </div>

        <!-- Single button using append-to-body -->
        <!--<div class="btn-group" dropdown dropdown-append-to-body>
          <button id="btn-append-to-body" type="button" class="btn btn-primary" dropdown-toggle>
            Dropdown on Body <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="btn-append-to-body">
            <li role="menuitem"><a href="#">Action</a></li>
            <li role="menuitem"><a href="#">Another action</a></li>
            <li role="menuitem"><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li role="menuitem"><a href="#">Separated link</a></li>
          </ul>
        </div>-->

        <!-- Single button using template-url -->
       <!-- <div class="btn-group" dropdown>
          <button id="button-template-url" type="button" class="btn btn-primary" dropdown-toggle [disabled]="disabled">
            Dropdown using template <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" template-url="dropdown.html" aria-labelledby="button-template-url">
          </ul>
        </div> -->

        <hr />
        <p>
            <button type="button" class="btn btn-default btn-sm" (click)="toggleDropdown($event)">Toggle button dropdown</button>
            <button type="button" class="btn btn-warning btn-sm" (click)="disabled = !disabled">Enable/Disable</button>
        </p>

        <hr>
        <!-- Single button with keyboard nav -->
        <div class="btn-group" dropdown keyboard-nav>
            <button id="simple-btn-keyboard-nav" type="button" class="btn btn-primary" dropdown-toggle>
                Dropdown with keyboard navigation <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="simple-btn-keyboard-nav">
                <li role="menuitem"><a href="#">Action</a></li>
                <li role="menuitem"><a href="#">Another action</a></li>
                <li role="menuitem"><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li role="menuitem"><a href="#">Separated link</a></li>
            </ul>
        </div>

        <script type="text/ng-template" id="dropdown.html">
            <ul class="dropdown-menu" role="menu" aria-labelledby="button-template-url">
              <li role="menuitem"><a href="#">Action in Template</a></li>
              <li role="menuitem"><a href="#">Another action in Template</a></li>
              <li role="menuitem"><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li role="menuitem"><a href="#">Separated link in Template</a></li>
            </ul>
        </script>
    </div>
  `,
  directives: [dropdown, coreDirectives]
})
export class DropdownDemo {
  disabled = false;
  items: Array<string> = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
  status = {isopen: false};
  toggled(open:any) {
    console.log('Dropdown is now: ', open);
  }
  toggleDropdown ($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
