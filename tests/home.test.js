const fs = require('fs');
const path = require('path');
const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('Homepage not built: ' + indexPath + ' missing');
  process.exit(1);
}
console.log('Homepage exists');
const contents = fs.readFileSync(indexPath, 'utf8');
console.log(contents);
