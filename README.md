# frontend_challenge
O frontend_challenge foi um desafio realizado para um processo seletivo.

## Começando o projeto
Para rodar o projeto precisará ter instalado na máquina o Nodejs que pode ser baixado diretamente no site nodejs.org e precisará o gerenciador de pacotes npm do node que é instalado junto com o node.
A versão do Node que está instalada na minha máquina é v10.16.0 e a versão do npm é 6.9.0.

O editor de texto que foi utilizado é o VSCode.

Temos que ter instalado na máquina o módulo do node responsável por criar uma aplicação React. No terminal integrado do VSCode digita-se:
npm i -g create-react-app

Para consumir os dados em forma de API REST foi usada uma dependencia chamada json-server que pode ser instalada da seguinte forma:
npm i --save json-server@0.13.0 -E

O json-server foi configurado para utilizar a porta 3001, já que a aplicação react por padrão vai utilizar a porta 3000.

Para rodar o backend da aplicação, basta startar via o terminal do VSCode digitando e apertando enter: 
npm start

À partir de agora se abrir o browser e digitar: http://localhost:3001/users abrirá no browser os registros que tem arquivados em db.json

Para rodar o frontend precisa-se de algumas dependencias que estão no package.json na pasta frontend dentro do projeto. As dependencias são: 
Axios na versão 0.18.0,
Bootstrap na versão: 4.1.1,
Font-awesome na versão: 4.7.0,
React-router na versão: 4.2.0,
React-router-dom na versão: 4.2.2,
React na versão: 16.4.0,
React-dom na versão: 16.4.0,
React-scripts na versão: 1.1.4

Para instalar essas dependencias basta entrar na pasta frontend dentro do projeto e no terminal do VSCode digitar: npm i

Terminado de instalar todas as dependencias para rodar a aplicação frontend do projeto basta digitar no terminal: npm start

Assim abrirá a aplicação na porta 3000 e o projeto será renderizado no browser.






