import { Router } from 'express';
import { UserControllers } from './user.controller';

import { studentValidations } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = Router();

// will call controller func
router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',

  UserControllers.createFaculty,
);

export const UserRoutes = router;
