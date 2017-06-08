#!/usr/bin/env node
'use strict';
const path = require('path');
const fs = require('fs');
const YAML = require('yamljs');
const ext = '.yml';

let directory = path.join(process.cwd(), '_data');

let fileName = process.argv[2];
let layout = process.argv[3];

let filePath = path.join(directory, fileName);
if (!fileName) {
  console.log('The file name is required. Example: file.yml.');
} else if (path.extname(fileName) !== ext) {
  console.log('Only allow YML extension.');
} else if (!fs.existsSync(filePath)) {
  console.log(`Te file ${filePath} don't exists.`);
} else {

  let parent = path.basename(filePath, ext);

  let yamlObject = YAML.load(filePath);

  yamlObject.forEach((item) => {

    let obj = {
      title: item.name,
      layout: layout,
      slug: item.slug,
      parent: parent,
      permalink: `/${parent}/${item.slug}/`
    }

    let yamlString = YAML.stringify(obj, 4);
    console.log(yamlString);

    let outputFileName = `${parent}-${item.slug}.html`;
    let outputFilePath = path.join(process.cwd(), outputFileName);

    // create html file with output
    var fd = fs.openSync(outputFilePath, 'w');
    fs.writeSync(fd, '---\n');
    fs.writeSync(fd, yamlString);
    fs.writeSync(fd, '---');
    fs.closeSync(fd);

  });

}
