import { academicSemesterNameCodeMaper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemster } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
  // semester name --> semester code

  if (academicSemesterNameCodeMaper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemster.create(payLoad);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
