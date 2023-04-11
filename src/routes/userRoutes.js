import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir em um sistema real
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuários

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos -> GET
store/create -> cria um novo -> POST
delete -> apaga um -> DELETE
show -> mostra um -> GET
update -> atualiza um -> PATCH ou PUT
*/
