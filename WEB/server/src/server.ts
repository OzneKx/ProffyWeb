import express from 'express';
import cors from 'cors';
import routes from './route';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar ou listar uma informação
// POST: Criar uma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente 

// Corpo (Request Body): Dados para a criação ou a atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.listen(3333);

