import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';

import { AcademicSemsterValidation } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = Router();

// will call controller func

router.post(
  '/create-academic-semester',
  
  validateRequest(
    AcademicSemsterValidation.createAcademicSemsterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
