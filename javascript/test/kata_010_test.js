// https://www.codewars.com/kata/537e18b6147aa838f600001b

const assert = require('assert');
const justify = require('../src/kata_010.js');

describe('kata_010', function(){
  describe('Text align justify', function() {
    let str =
      'Lorem ipsum dolor sit amet, '    +
      'consectetur adipiscing elit. '   +
      'Vestibulum sagittis dolor '      +
      'mauris, at elementum ligula '    +
      'tempor eget. In quis rhoncus '   +
      'nunc, at aliquet orci. Fusce '   +
      'at dolor sit amet felis '        +
      'suscipit tristique. Nam a '      +
      'imperdiet tellus. Nulla eu '     +
      'vestibulum urna. Vivamus '       +
      'tincidunt suscipit enim, nec '   +
      'ultrices nisi volutpat ac. '     +
      'Maecenas sit amet lacinia '      +
      'arcu, non dictum justo. Donec '  +
      'sed quam vel risus faucibus '    +
      'euismod. Suspendisse rhoncus '   +
      'rhoncus felis at fermentum. '    +
      'Donec lorem magna, ultricies a ' +
      'nunc sit amet, blandit '         +
      'fringilla nunc. In vestibulum '  +
      'velit ac felis rhoncus '         +
      'pellentesque. Mauris at tellus ' +
      'enim. Aliquam eleifend tempus '  +
      'dapibus. Pellentesque commodo, ' +
      'nisi sit amet hendrerit '        +
      'fringilla, ante odio porta '     +
      'lacus, ut elementum justo '      +
      'nulla et dolor.';

    it('#01 text align justify', function() {

      let expected =
        'Lorem  ipsum  dolor  sit amet,\n' +
        'consectetur  adipiscing  elit.\n' +
        'Vestibulum    sagittis   dolor\n' +
        'mauris,  at  elementum  ligula\n' +
        'tempor  eget.  In quis rhoncus\n' +
        'nunc,  at  aliquet orci. Fusce\n' +
        'at   dolor   sit   amet  felis\n' +
        'suscipit   tristique.   Nam  a\n' +
        'imperdiet   tellus.  Nulla  eu\n' +
        'vestibulum    urna.    Vivamus\n' +
        'tincidunt  suscipit  enim, nec\n' +
        'ultrices   nisi  volutpat  ac.\n' +
        'Maecenas   sit   amet  lacinia\n' +
        'arcu,  non dictum justo. Donec\n' +
        'sed  quam  vel  risus faucibus\n' +
        'euismod.  Suspendisse  rhoncus\n' +
        'rhoncus  felis  at  fermentum.\n' +
        'Donec lorem magna, ultricies a\n' +
        'nunc    sit    amet,   blandit\n' +
        'fringilla  nunc. In vestibulum\n' +
        'velit    ac    felis   rhoncus\n' +
        'pellentesque. Mauris at tellus\n' +
        'enim.  Aliquam eleifend tempus\n' +
        'dapibus. Pellentesque commodo,\n' +
        'nisi    sit   amet   hendrerit\n' +
        'fringilla,   ante  odio  porta\n' +
        'lacus,   ut   elementum  justo\n' +
        'nulla et dolor.';

      assert.equal(justify(str, 30), expected);
    });

    it('#02 text align justify', function() {

      let expected =
        'Lorem     ipsum\n' +
        'dolor sit amet,\n' +
        'consectetur\n' +
        'adipiscing\n' +
        'elit.\n' +
        'Vestibulum\n' +
        'sagittis  dolor\n' +
        'mauris,      at\n' +
        'elementum\n' +
        'ligula   tempor\n' +
        'eget.  In  quis\n' +
        'rhoncus   nunc,\n' +
        'at      aliquet\n' +
        'orci.  Fusce at\n' +
        'dolor  sit amet\n' +
        'felis  suscipit\n' +
        'tristique.  Nam\n' +
        'a     imperdiet\n' +
        'tellus.   Nulla\n' +
        'eu   vestibulum\n' +
        'urna.   Vivamus\n' +
        'tincidunt\n' +
        'suscipit  enim,\n' +
        'nec    ultrices\n' +
        'nisi   volutpat\n' +
        'ac.    Maecenas\n' +
        'sit        amet\n' +
        'lacinia   arcu,\n' +
        'non      dictum\n' +
        'justo.    Donec\n' +
        'sed   quam  vel\n' +
        'risus  faucibus\n' +
        'euismod.\n' +
        'Suspendisse\n' +
        'rhoncus rhoncus\n' +
        'felis        at\n' +
        'fermentum.\n' +
        'Donec     lorem\n' +
        'magna,\n' +
        'ultricies     a\n' +
        'nunc  sit amet,\n' +
        'blandit\n' +
        'fringilla nunc.\n' +
        'In   vestibulum\n' +
        'velit  ac felis\n' +
        'rhoncus\n' +
        'pellentesque.\n' +
        'Mauris       at\n' +
        'tellus    enim.\n' +
        'Aliquam\n' +
        'eleifend tempus\n' +
        'dapibus.\n' +
        'Pellentesque\n' +
        'commodo,   nisi\n' +
        'sit        amet\n' +
        'hendrerit\n' +
        'fringilla, ante\n' +
        'odio      porta\n' +
        'lacus,       ut\n' +
        'elementum justo\n' +
        'nulla et dolor.';

      assert.equal(justify(str, 15), expected);
    });

  });
});