# API de produtos criada utilizando o [Nest](https://nestjs.com/)

## Descrição

A entidade Produtos contém tudo o que é necessário para gerenciar os produtos.

## Estrutura

| Campo   | Tipo   | Descrição                       |
| ------- | ------ | ------------------------------- |
| id      | Number | Identificador único             |
| codigo  | String | Código de referência do produto |
| nome    | String | Nome do produto                 |
| preco   | Number | Preço de venda do produto       |

## Comandos SQL

Conectando no MySQL
```bash
$ sudo mysql -u root -p
```

```sql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

```

Criando o banco de dados
```sql
mysql> create database alura_produtos;
Query OK, 1 row affected (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| alura_produtos     |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```

## Consumido

### Obter todos os produtos

```bash
$ curl -i -H "Accept: application/json" http://localhost:3000/api/v1/produtos
```

### Obter um produto específico

```bash
$ curl -i -H "Accept: application/json" http://localhost:3000/api/v1/produtos/1
```

### Incluir um produto

```bash
$ curl -i -H "Content-Type: application/json" \
--request POST \
--data '{"codigo":"LV006","nome":"Livro Angular 8 e Firebase","preco":59.9}' \
http://localhost:3000/api/v1/produtos
```

### Alterar um produto
```bash
$ curl -i -X PUT -H "Content-Type: application/json" -d '{"codigo":"LV006","nome":"Livro Angular 8 e Firebase (by Goolge)","preco":39.9}' http://localhost:3000/api/v1/produtos/5
```

### Excluir um produto

```bash
$ curl -i -X DELETE http://localhost:3000/api/v1/produtos/3

```

## Instalação

```bash
$ npm install
```

## Executando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Entre em contato

- Autor - [Rodolfo Ghiggi](https://rodolfoghi.github.io/)
- Twitter - [@GhiggiRodolfo](https://twitter.com/GhiggiRodolfo)

## Licença

  [MIT licensed](LICENSE).