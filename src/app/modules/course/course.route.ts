import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CouseValidations } from './course.validation';
import { CourseControllers } from './course.controller';

const router = Router();

// will call controller func
router.post(
  '/create-course',
  validateRequest(CouseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);
router.get('/:id', CourseControllers.getSingleCourse);
router.get('/', CourseControllers.getAllCourses);
router.delete('/:id', CourseControllers.deleteCourse);
// router.patch(
//   '/:facultyId',
//   validateRequest(
//     AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
//   ),
//   CourseControllers.updatecademicFaculty,
// );

export const CourseRoutes = router;
