import { Router } from 'express';

const routes = Router();

// Exemplo de rota, será movida para o Controller depois
routes.get('/teste', (_req, res) => {
    return res.json({ mensagem: 'Rota de teste configurada!' });
});

export default routes;