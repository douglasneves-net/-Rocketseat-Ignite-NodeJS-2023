//Netflix & Spotify

//Importação de clients via CSV (Excel)

import { Readable, Writable, Transform } from 'node:stream'

//Aqui esta criando os dados buffer para ter um exemplo.
class OneToHundredStream extends Readable {

  index = 1;

  // O Metodo _read é obrigatorio para leitura de streams
  // Buffers não aceita numeros
  _read() {

    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);//Fornece informações para quem estiver cosumindo esse stream, neste caso null signfica que não tem mais dados para ser enviados.
      } else {
        const buf = Buffer.from(String(i)) //Cria variavel do tipo buffer e adiciona o i.
        this.push(buf); //Envia o stream.
      }
    }, 1000);
  }
}

//new OneToHundredStream().pipe(process.stdout);

//Esta enviando para o cliente.
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

//Serve para transforma um dado em outro.
class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString() * 10);
    callback(null, Buffer.from(String(transformed))); //Primeiro parametro é erro, segundo parametro é o buffer transformado, ou seja, o dado transformado.
  }
}

//Observe que atraves do OneToHundredStream, estamos recebendo as informações que precisam ser enviadas para o cliente no caso um contador de 1 a 100,depois temos um pipe com InverseNumberStream que usa o metodo _transform, o que esse metodo faz é transforma os dados da nossa stream, no caso, multiplica por 10 e por ultimo temos o  MultiplyByTenStream que envia os dados para o clientem, observe que temos 3 funções da mesma stream.
new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());