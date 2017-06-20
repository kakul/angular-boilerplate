Error.stackTraceLimit = Infinity

import 'core-js/es6'
 import 'core-js/es7/reflect'

 import 'zone.js/dist/zone'
 import 'zone.js/dist/long-stack-trace-zone'
 import 'zone.js/dist/proxy'
 import 'zone.js/dist/sync-test'
 import 'zone.js/dist/jasmine-patch'
 import 'zone.js/dist/async-test'
 import 'zone.js/dist/fake-async-test'

var appContext = require.context('../src', true, /\.spec\.ts$/)

appContext.keys().forEach(appContext)

var testing =  require('@angular/core/testing')
var browser =  require('@angular/platform-browser-dynamic/testing'

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting())