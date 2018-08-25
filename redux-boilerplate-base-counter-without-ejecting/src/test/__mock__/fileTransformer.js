// writing the pre-processor for jest - the source file mapper
const path = require('path');

module.exports = {
    process(src, filename, config, options) {
        return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ':' ;

    }
}

/* 1> The path.basename() method returns the filename part of a file path.

var path = require('path');
//Extract the filename:
var filename = path.basename('/Users/Refsnes/demo_path.js');

console.log(filename);  // => demo_path.js

So, in the above preprocessor the return statement returns a string with the filename part of the file path.

2> Another example of pre-processing code for typescript

const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(
        src,
        tsConfig.compilerOptions,
        path,
        []
      );
    }
    return src;
  },
};

*/