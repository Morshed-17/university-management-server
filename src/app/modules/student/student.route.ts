import { Router } from 'express';
import { StudentControllers } from './student.controller';

const router = Router();

// will call controller func

router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);
router.patch('/:studentId', StudentControllers.updateStudent);
router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
