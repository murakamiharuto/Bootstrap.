import '../demo/src/polyfills.ts';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = Function.prototype;

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing')
])
// First, initialize the Angular testing environment.
  .then(([testing, testingBrowser]:any[]) => {
    testing.getTestBed().initTestEnvironment(
      testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting()
    );
  })
  // Then we find all the tests.
  .then(() => [
    require.context('../src/spec', true, /\.spec\.ts/),
    require.context('../demo/src', true, /\.spec\.ts/)
  ])
  // And load the modules.
  .then((contexts: any) => [].concat.apply([], contexts.map((context: any) => context.keys().map(context))))
  // Finally, start Karma to run the tests.
  .then(() => System.import('./matchers.js'))
  .then(__karma__.start, __karma__.error);
