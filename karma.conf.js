// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'), 
      require('karma-htmlfile-reporter'),     
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    files: [
      'https://maps.googleapis.com/maps/api/js?sensor=false',
      {  pattern: './src/test.ts', watched: false,  }
    ],
    preprocessors: {
      './src/test.ts': ['angular-cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
  // reporters: config.angularCli && config.angularCli.codeCoverage
   //          ? ['progress', 'karma-remap-istanbul']
   //         : ['progress'],
     reporters: config.angularCli && config.angularCli.codeCoverage
            ? ['progress', 'html']
           : ['progress', 'html'],
 
 
    htmlReporter: {
      outputFile: 'tests/units.html',
            
      // Optional 
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],    
    singleRun: false
  });
};
