import express from 'express';

import {createDono } from '../controllers/users';

const router = express.Router();

router.post('/', createDono);

export default router;