# CRUD de Cadastro de Produtos com Angular e JSON-Server

Este projeto é um CRUD (Create, Read, Update, Delete) básico para cadastro de produtos, desenvolvido com Angular e utilizando o JSON-Server como API fake para simular um backend.

## Tecnologias Utilizadas
- Angular
- JSON-Server

## Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Instalação e Execução
### 1. Clonar o repositório
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências do Angular
```sh
npm install
```

### 3. Iniciar o JSON-Server
O JSON-Server simula uma API REST utilizando um arquivo JSON. Primeiro, instale o JSON-Server globalmente caso ainda não tenha:
```sh
npm install -g json-server
```
Depois, inicie o servidor fake com o seguinte comando:
```sh
json-server --watch db.json --port 3000
```
Isso criará uma API REST acessível em `http://localhost:3000/produtos`.

### 4. Rodar o projeto Angular
```sh
ng serve
```
Acesse `http://localhost:4200/` no navegador para visualizar a aplicação.

## Funcionalidades
✅ Listagem de produtos
✅ Cadastro de novos produtos
✅ Edição de produtos existentes
✅ Exclusão de produtos

## API Fake (`db.json`)
O arquivo `db.json` contém os dados dos produtos cadastrados:
```json
{
  "produtos": [
    {
      "id": 1,
      "nome": "Notebook Dell",
      "preco": 4500,
      "descricao": "Notebook i7 com 16GB RAM"
    },
    {
      "id": 2,
      "nome": "Mouse Gamer",
      "preco": 150,
      "descricao": "Mouse RGB com 6 botões programáveis"
    }
  ]
}
```

