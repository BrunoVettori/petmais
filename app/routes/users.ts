import express from 'express';

import {CreateDono} from '../controllers/users';

const router = express.Router();

router.post('/', CreateDono);

export default router;