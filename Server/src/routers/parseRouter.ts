import {Router} from 'express';
import parseUserInput from '../controllers/parseController';
const router = Router();

router.post('/', parseUserInput);

export default router;