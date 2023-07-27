<h1 align="center">👨‍🍳 WaiterApp - O App do Garçom </h1>

![waiterapp](https://github.com/KelvenFontes/WaiterApp/assets/69438619/7665e884-6861-4d8c-9467-becd0fe769f2)



## :page_with_curl: Sobre o Projeto

WaiterApp é um aplicativo desenvolvido especialmente para garçons, permitindo que eles tenham acesso aos pedidos feitos pelos clientes em tempo real. Além disso, os garçons podem acompanhar o status desses pedidos, visualizar o valor total da conta e enviar os pedidos diretamente à cozinha.

A aplicação tem como objetivo auxiliar restaurantes no controle dos pedidos feitos pelos clientes, proporcionando a eles a facilidade de realizar pedidos por meio do aplicativo, que são automaticamente enviados para um painel de controle web em tempo real.

## :computer: Funcionalidades:

#### 🌐 Frontend:

- Listagem de mesas disponíveis
- Criação de novos pedidos
- Listagem de todos os pedidos
- Listagem de pedidos por mesa
- Cancelamento de pedidos
- Finalização de pedidos
- Atualização do status do pedido (fila de espera, em preparo, - pronto)
- Acompanhamento em tempo real dos pedidos usando Socket.IO

#### 📱 Mobile:

- Listagem das mesas disponíveis
- Listagem dos produtos disponíveis
- Listagem das categorias de produtos
- Seleção de produtos por categoria
- Cancelamento de pedidos
- Finalização de pedidos
- Adição de produtos ao carrinho de pedidos
- Remoção de produtos do carrinho
- Visualização dos detalhes do pedido realizado


## 🚀 Desenvolvido com:

💻 __Frontend:__

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

---

🏭 __Backend:__

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![mongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

📱 __Mobile:__

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)

---

## Passo a passo de para execução:

1. Clone o repositório para sua máquina local usando o comando:
```bash
git clone https://github.com/KelvenFontes/WaiterApp.git
```

## Executando o Backend:
__Para começar, siga os passos abaixo para executar a API do WaiterApp:__

1. Acesse a pasta da API:
```bash
cd waiterapp/api
```

2. Conecte-se ao banco de dados fornecendo sua CONNECTIONSTRING no arquivo .env. Se você estiver usando o MongoDB Atlas com Mongoose, utilize a seguinte conexão:
```bash
mongodb+srv://<seu-usuario>:<sua-senha>@$<seu-cluster>.mongodb.net/?retryWrites=true&w=majority
```

__Alternativa:__ Se preferir usar o MongoDB local com Docker, utilize o seguinte:
```bash
mongodb://localhost:27017
```

3. Instale as dependências necessárias para a API:
```bash
npm install
```

4. Realize o build da API:
```bash
npm run build
```

5. Agora, inicie a API (ela estará disponível em http://localhost:3001/):
```bash
npm start
```

## Executando o Frontend:
__Siga os passos abaixo para executar o Frontend do WaiterApp:__

1. Com o projeto já clonado, acesse a pasta do Frontend:
```bash
cd waiterapp/web
```

2. Instale as dependências do Frontend:
```bash
npm install
```

3. Inicie o projeto do Frontend (ele estará acessível em http://localhost:5173/):
```bash
npm run dev
```


## Executando o Mobile:
__Para executar o App Mobile do WaiterApp, siga os passos abaixo:__

1. Com o projeto já clonado, acesse a pasta do App Mobile:
```bash
cd waiterapp/mobile
```

2. Instale as dependências do App Mobile:
```bash
npm install
```

3. Inicie o projeto do App Mobile:
```bash
npm start
```

Agora você pode executar a API, o Frontend e o App Mobile do WaiterApp em sua máquina e começar a utilizar a aplicação!

Feito por Kelven Fontes :wave: [LinkedIn](https://www.linkedin.com/in/kelven-bento-fontes-4ab2b2210)!

