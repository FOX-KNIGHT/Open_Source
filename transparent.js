const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('public/image.png')
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    const bgR = this.data[0];
    const bgG = this.data[1];
    const bgB = this.data[2];
    
    const threshold = 15; 
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let idx = (this.width * y + x) << 2;
        
        let r = this.data[idx];
        let g = this.data[idx+1];
        let b = this.data[idx+2];
        
        if (Math.abs(r - bgR) < threshold && 
            Math.abs(g - bgG) < threshold && 
            Math.abs(b - bgB) < threshold) {
          this.data[idx+3] = 0;
        }
      }
    }
    
    this.pack().pipe(fs.createWriteStream('public/image.png'));
    console.log("Made background transparent!");
  });
