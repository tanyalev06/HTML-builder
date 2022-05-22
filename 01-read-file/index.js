
const fs = require('fs');
const path = require('path');
path.basename('D:\RSSchool2022\HTML-builder\text.txt');

let stream = new fs.ReadStream(path.join(__dirname, 'text.txt'));

stream.on('data', (data) =>
      console.log(data.toString())
    );