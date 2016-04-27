import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {
  TAB_DIRECTIVES,
  Ng2BootstrapConfig,
  Ng2BootstrapTheme
} from '../../ng2-bootstrap';
import {ProgressbarDemoComponent} from './progressbar/progressbar-demo';

let name = 'Progressbar';
let src = 'https://github.com/valor-software/ng2-bootstrap/blob/master/components/progressbar/';

// webpack html imports
let doc = require('../../components/progressbar/readme.md');
let titleDoc = require('../../components/progressbar/title.md');

let ts = require('!!prismjs?lang=typescript!./progressbar/progressbar-demo.ts');
let templates:any = {
  [Ng2BootstrapTheme.BS3]: require('!!prismjs?lang=markup!./progressbar/progressbar-demo.html'),
  [Ng2BootstrapTheme.BS4]: require('!!prismjs?lang=markup!./progressbar/progressbar-demo-bs4.html')
};
let html = templates[Ng2BootstrapConfig.theme];

@Component({
  selector: 'progressbar-section',
  directives: [ProgressbarDemoComponent, TAB_DIRECTIVES, CORE_DIRECTIVES],
  template: `
  <section id="${name.toLowerCase()}">
    <h1>${name}<small>(<a href="${src}">src</a>)</small></h1>

    <hr>

    <div class="description">${titleDoc}</div>
    
    <br/>
    
    <div class="example">
      <h2>Example</h2>
      <div class="card card-block panel panel-default panel-body">
        <progressbar-demo></progressbar-demo>
      </div>
    </div>

    <br/>

    <div class="markup">
      <tabset>
        <tab heading="Markup">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-html"><code class="language-html" ngNonBindable>${html}</code></pre>
          </div>
        </tab>
        <tab heading="TypeScript">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-typescript"><code class="language-typescript" ngNonBindable>${ts}</code></pre>
          </div>
        </tab>
      </tabset>
    </div>

    <br/>

    <div class="api">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `
})
export class ProgressbarSectionComponent {
}
