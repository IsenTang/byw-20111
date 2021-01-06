const path = require('path');

path.basename('/foo/bar/baz/asdf/banyuan.html');

path.dirname('/foo/bar/baz/asdf/banyuan.html');

path.extname('/foo/bar/baz/asdf/banyuan.html');

// let arr = [1,2,3];

// console.log(arr.join(''));

path.join('/foo', 'bar', 'baz/asdf', 'banyuan');
path.join('/foo', 'bar', 'baz/asdf', 'banyuan', '..');

let value =  path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');

console.log(value);