import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemster } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
  const result = await AcademicSemster.create(payLoad);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
