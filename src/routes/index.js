import { Router } from 'express';
import { authenticationRouter } from './authentication';
import { errorHandler } from './errorHandler';

export const router = Router();

router.use('/auth', authenticationRouter);

router.use(errorHandler);
