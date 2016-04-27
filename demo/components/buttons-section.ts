import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {TAB_DIRECTIVES} from '../../ng2-bootstrap';
import {ButtonsDemoComponent} from './buttons/buttons-demo';

let name = 'Buttons';
let src = 'https://github.com/valor-software/ng2-bootstrap/blob/master/components/buttons/';

// webpack html imports
let doc = require('../../components/buttons/readme.md');
let titleDoc = require('../../components/buttons/title.md');

let ts = require('!!prismjs?lang=typescript!./buttons/buttons-demo.ts');
let html = require('!!prismjs?lang=markup!./buttons/buttons-demo.html');

@Component({
  selector: 'buttons-section',
  directives: [ButtonsDemoComponent, TAB_DIRECTIVES, CORE_DIRECTIVES],
  template: `
  <section id="${name.toLowerCase()}">
    <h1>${name}<small>(<a href="${src}">src</a>)</small></h1>

    <hr>

    <div class="description">${titleDoc}</div>
    
    <br/>
    
    <div class="example">
      <h2>Example</h2>
      <div class="card card-block panel panel-default panel-body">
        <buttons-demo></buttons-demo>
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
export class ButtonsSectionComponent {
}
