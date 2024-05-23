import { Router } from 'express';
import { UserControllers } from './user.controller';

const router = Router();

// will call controller func
router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;
