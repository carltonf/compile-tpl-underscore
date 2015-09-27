#!/bin/bash

echo "*** Raw test to see whether read/write file is ok.
*** Very very simple: if you see no diff output, the test passes."

TPL=test/templates/simple.tpl
TPL_TMP=test/templates/simple.tmp.js
TPL_EXPECTED=test/templates/simple.compiled.js

./bin/compile-tpl ${TPL} > ${TPL_TMP}

diff -Npur ${TPL_EXPECTED} ${TPL_TMP}

rm -v ${TPL_TMP}
