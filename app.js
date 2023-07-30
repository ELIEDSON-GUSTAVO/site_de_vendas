const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Array para armazenar as informações de pagamento (simulando um banco de dados)
const payments = [];

// Rota para receber os dados de pagamento do formulário
app.post('/submit-payment', (req, res) => {
  const { nome, email, endereco, cidade, estado, cep, valor } = req.body;
    const novoPagamento = { nome, email, endereco, cidade, estado, cep, valor };
      payments.push(novoPagamento);
        res.send({ message: 'Pagamento realizado com sucesso!' });
        });

        app.listen(port, () => {
          console.log(`Servidor rodando em http://localhost:${port}`);
          });
          