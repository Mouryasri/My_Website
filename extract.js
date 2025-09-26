const yauzl = require('yauzl');
const fs = require('fs');
const path = require('path');

const zipPath = 'project-bolt-sb1-vbkpszub (1).zip';

yauzl.open(zipPath, {lazyEntries: true}, (err, zipfile) => {
  if (err) {
    console.error('Error opening zip file:', err);
    return;
  }
  
  zipfile.readEntry();
  zipfile.on('entry', (entry) => {
    if (/\/$/.test(entry.fileName)) {
      // Directory entry
      const dirPath = entry.fileName;
      fs.mkdirSync(dirPath, {recursive: true});
      zipfile.readEntry();
    } else {
      // File entry
      zipfile.openReadStream(entry, (err, readStream) => {
        if (err) {
          console.error('Error reading entry:', err);
          return;
        }
        
        const filePath = entry.fileName;
        const dirPath = path.dirname(filePath);
        
        // Create directory if it doesn't exist
        fs.mkdirSync(dirPath, {recursive: true});
        
        const writeStream = fs.createWriteStream(filePath);
        readStream.pipe(writeStream);
        
        writeStream.on('close', () => {
          console.log('Extracted:', filePath);
          zipfile.readEntry();
        });
      });
    }
  });
  
  zipfile.on('end', () => {
    console.log('Extraction complete!');
  });
});