//Netflix & Spotify

//Importação de clients via CSV (Excel)

import { Readable, Writable, Transform } from 'node:stream'

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

class MultiplyByTenStream extends Writable {

  // O Metodo _write é obrigatorio para escrita de streams
  // O chunk é o buffer
  // O encoding é o tipo de encoding
  // O callback é uma função que deve ser chamada quando o processamento for concluido
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * -1);
    callback();
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString() * 10);
    callback(null, Buffer.from(String(transformed)));
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());