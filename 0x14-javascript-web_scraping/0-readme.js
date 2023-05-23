#!/usr/bin/env node

import fs from 'fs';

fs.readFile(process.argv[2], 'utf8', function (error, content) {
  console.log(error || content);
});

