const express = require('express');
const app = express();
const port = 3000;



app.get('/soma', (req, res) => {
  res.send('Bem-vindo ao meu backend!');
});

app.get('/soma1', (req, res) => {
  const numero = parseInt(req.params.numero);
  const resultado = somatorio(numero);
  res.send(`O somatório é: ${resultado}`);
});


function somatorio(numero) {
  let somatorio = 0;
}
  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }

  return somatorio;
}

app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
