# GoStack-Gympoint
Aplicação para academia desenvolvida para avaliação e certificação do curso GoStack Bootcamp da Rocketseat.

Back-end desenvolvido utilizando Node.js, com banco de dados Postgres para armazenar os dados dos usuários, planos e matrículas, MongoDb para armazenar os checkins e pedidos de ajuda e Redis + BeQueue para gerenciar a fila de emails de confirmação de matrícula e pedidos de ajuda.

Front-end Web desenvolvido utilizando React JS, Hooks, Arquitetura flux (Redux e Sagas)

Mobile ANDROID desenvolvido utilizando React Native, Hooks, Arquitetura flux (Redux e Sagas)

Obs: Apenas para ANDROID!


## Como configurar e executar

### Back-end

É necessário ter previamente configurado e rodando:
- Postgres:
  - Criar uma database
- MongoDb
- Redis

Definir as variáveis de ambiente conforme instruções abaixo


1. `git clone https://github.com/alanfoandrade/GoStack-Gympoint.git`

1. navegar até a pasta backend

1. Definir as variáveis de ambiente do arquivo .env
  - Postgres:
    - DB_HOST: endereço do postgres
    - DB_USER: usuário do postgres
    - DB_PASS: senha do postgres
    - DB_NAME: nome dado para a database criada anteriormente
  - MongoDb:
    - MONGO_URL: endereço do mongoDb

1. `yarn install`

1. `yarn sequelize db:migrate`

1. `yarn sequelize db:seed:all`

1. `yarn start`

O servidor deverá iniciar na porta 3333 pré configurada no arquivo .env

### Front-end

1. `git clone https://github.com/alanfoandrade/GoStack-Gympoint.git`

1. navegar até a pasta frontend

1. `yarn install`

1. `yarn start`

A página deverá abrir no seu browser no endereço http://localhost:3000/

Um usuário administrador será gerado, utilize as seguintes informações para logar, 
login: `admin@gympoint.com`
senha: `123456`

### Mobile ANDROID

Tendo o emulador já configurado e rodando, ou dispositivo físico configurado

1. `git clone https://github.com/alanfoandrade/GoStack-Gympoint.git`

1. navegar até a pasta mobile 

1. `yarn install`

1. `yarn android`

Após a instalação o aplicativo deverá ser iniciado no dispositivo, emulado ou físico
