#!/bin/bash

echo "*** Raw test to see whether read/write file is ok.
*** Very very simple: if you see no diff output, the test passes."

cd test/templates/

../../bin/compile-tpl simple.tpl > simple.tmp.js

diff -Npur simple.tmp.js simple.compiled.js

rm -v simple.tmp.js
