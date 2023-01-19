//Netflix & Spotify

//Importação de clients via CSV (Excel)

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {

  index = 1;

  // O Metodo _read é obrigatorio para leitura de streams
  // Buffers não aceita numeros
  _read() {

    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf);
      }
    }, 1000);
  }
}

new OneToHundredStream().pipe(process.stdout);