import { Component } from '@angular/core';
import { DEMOS } from './demos';

// webpack html imports
let titleDoc = require('html!markdown!./docs/title.md');

@Component({
  selector: 'dropdown-section',
  template: `
<demo-section [name]="name" [src]="src">
  <p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included dropdown directives.</p>
  
  <h2>Contents</h2>
  <ul>
    <li><a pageScroll href="#usage">Usage</a></li>
    <li><a pageScroll href="#examples">Examples</a>
      <ul>
        <li><a pageScroll href="#single-button">Single button dropdowns</a></li>
        <li><a pageScroll href="#split-button">Split button dropdowns</a></li>
        <li><a pageScroll href="#container-body">Append to body</a></li>
        <li><a pageScroll href="#keyboard">Single button with keyboard nav</a></li>
        <li><a pageScroll href="#dropup">Dropup variation</a></li>
        <li><a pageScroll href="#config">Configuring defaults</a></li>
      </ul>
    </li>
    <li><a pageScroll href="#api-reference">API Reference</a>
      <ul>
        <li><a pageScroll href="#dropdown-directive">DropdownDirective</a></li>
        <li><a pageScroll href="#dropdown-toggle-directive">DropdownToggleDirective</a></li>
        <li><a pageScroll href="#dropdown-config">DropdownConfig</a></li>
      </ul>
    </li>
  </ul>
       
  <h2 id="usage">Usage</h2>

  <p [innerHtml]="titleDoc"></p>

  <h2 id="examples">Examples</h2>
  <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>dropdown</code>. 
  Dropdowns can be triggered from <code> &lt;a&gt;</code> or <code> &lt;button&gt;</code> elements to better fit your potential needs.</p>
  <!-- basic -->
  <h2 id="single-button">Single button dropdowns</h2>
      
  <p>Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. 
  Here’s how you can put them to work with either  <code> &lt;button&gt; </code> elements:</p>
  
  <ng-sample-box [ts]="demos.basic.component" [html]="demos.basic.html">
    <demo-dropdown-basic></demo-dropdown-basic>
  </ng-sample-box>
  
  <p>And with <code> &lt;a&gt;</code> elements:</p>
 
  <ng-sample-box [ts]="demos.link.component" [html]="demos.link.html">
    <demo-dropdown-basic-link></demo-dropdown-basic-link>
  </ng-sample-box>
  
  <h2 id="split-button">Split button dropdowns</h2>
  <p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns,
   but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.</p>
  
  <ng-sample-box [ts]="demos.splitBtn.component" [html]="demos.splitBtn.html">
    <demo-dropdown-split></demo-dropdown-split>
  </ng-sample-box>
  
   <h2 id="container-body">Append to body</h2>
   
   <ng-sample-box [ts]="demos.container.component" [html]="demos.container.html">
    <demo-dropdown-container></demo-dropdown-container>
  </ng-sample-box>
  
  <h2 id="keyboard">Single button with keyboard nav</h2>
   <ng-sample-box [ts]="demos.keyboard.component" [html]="demos.keyboard.html">
    <demo-dropdown-keyboard></demo-dropdown-keyboard>
  </ng-sample-box>
    
  <h2 id="dropup">Dropup variation</h2>
  <p>Trigger dropdown menus above elements by adding <code>.dropup</code> to the parent element.</p>
   <ng-sample-box [ts]="demos.dropup.component" [html]="demos.dropup.html">
    <demo-dropup></demo-dropup>
  </ng-sample-box>
  
  <h2 id="config">Configuring defaults</h2>
  <p>It is possible to override default alert config partially or completely.</p>
  <ng-sample-box [ts]="demos.config.component" [html]="demos.config.html">
    <demo-dropdown-config></demo-dropdown-config>
  </ng-sample-box>
  
  <h2 id="api-reference">API Reference</h2>
  <ng-api-doc id="dropdown-directive" directive="DropdownDirective"></ng-api-doc>
  <ng-api-doc id="dropdown-toggle-directive" directive="DropdownToggleDirective"></ng-api-doc>
  <ng-api-doc-config id="dropdown-config" type="DropdownConfig"></ng-api-doc-config>
</demo-section>`
})
export class DropdownSectionComponent {
  public name: string = 'Dropdowns';
  public src: string = 'https://github.com/valor-software/ng2-bootstrap/tree/development/src/dropdown';
  public demos: any = DEMOS;
  public titleDoc: string = titleDoc;
}
