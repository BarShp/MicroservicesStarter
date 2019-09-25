import express from 'express';
import { getMicroservices, startMicroservices } from '../controllers/microservices-controller';

const router = express.Router();

router.get('/microservices', getMicroservices);
router.post('/start', startMicroservices);

export default router;