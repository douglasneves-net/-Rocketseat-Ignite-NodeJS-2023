# Inicio
- O node.js tem um arquitetura por debaixo dos panos non-blockio, ou seja, input e output não bloqueantes.
```javascript
npm init -y //Cria o projeto node.js
```
- Temos o commonJS que é um padrão de import do node.js, hoje é recomendado usar o ESModules, para isso em package.json adicione o 'type': 'module'
```javascript
CommonJS => require
ESModules => import/export
```
- https://httpie.io/docs/cli/installation permite fazer requisições http no terminal.
- Utilizamos o node --watch src/server.js para ficar observando mudanças nos arquivos.
- Stateful - Guarda em memoria, Stateless guarda no banco de dados / arquivo de texto e etc.
- Cabeçalhos tanto da requisição/respostas são metadados, ou seja, informações adicionais.

### Entendendo Streams no Node
- O conceito de Streams é o que torna o node.js uma tecnologia eficiente para resolver problemas de forma simples. Esse conceito é baseado no fato de que podemos trabalhar com dados mesmo que eles não tenham sido totalmente carregados, assim como quando assistimos a um vídeo ou ouvimos uma música enquanto o arquivo está sendo baixado. Um exemplo prático é a importação de clientes via CSV, que sem o uso de Streams faria com que o node.js lesse o arquivo inteiro antes de começar a processá-lo, o que seria muito ineficiente em arquivos grandes. Com o uso de Streams, é possível processar os dados conforme eles vão sendo carregados, tornando o processo mais eficiente.

#### Readable Streams / Writable Streams
- Existem dois tipos de Streams principais: Readable Streams e Writable Streams. O primeiro é usado quando recebemos dados do usuário para o servidor, enquanto o segundo é usado quando enviamos dados do servidor para o cliente.

### Importante
- No Node, todas as portas de entrada e saída são automaticamente tratadas como streams. Isso permite, por exemplo, que uma requisição HTTP seja mantida aberta e receba dados aos poucos. Além da porta HTTP, o Node também possui outras portas de entrada e saída, como a do console. Um exemplo de uso de stream é process.stdin.pipe(process.stdout), que recebe dados do terminal do Node e os envia para a saída padrão. É importante lembrar que, ao trabalhar com streams, apenas variáveis do tipo buffer são permitidas, não sendo permitido o uso de variáveis primitivas ou de outros formatos.
- Além das Readable Streams e Writable Streams, o Node também possui o conceito de Transform Streams, que permite transformar os dados de um stream em outro.
- Para trabalhar com streams no Node, existem três funções principais: a primeira é responsável por gerar ou obter os dados que serão enviados, ou seja, uma Readable Stream; a segunda é a Transform Stream, que realiza a transformação dos dados; e a terceira é a Writable Stream, responsável pela saída dos dados.
- Além desses três tipos de streams, o Node também possui o Duplex Stream, que pode ser usado tanto para leitura quanto para escrita, assim como um arquivo físico em nosso sistema operacional.


