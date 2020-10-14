import { Router } from 'express';
import multer from 'multer';

const routes = Router();

import OrphanagesControllers from './controllers/OrphanagesControllers';
import uploadConfig from './config/upload';

const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post(
  '/orphanages',
  upload.array('images'),
  OrphanagesControllers.create,
);

export default routes;
