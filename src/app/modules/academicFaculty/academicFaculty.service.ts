import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = (payLoad: TAcademicFaculty) => {
  const result = AcademicFaculty.create(payLoad);
  return result;
};
const getAllAcademicFacultyFromDB = () => {
  const result = AcademicFaculty.find();
  return result;
};
const getSingleAcademicFacultyFromDB = (id: string) => {
  const result = AcademicFaculty.findById(id);
  return result;
};
const updateAcademicFacultyIntoDB = (
  id: string,
  payLoad: Partial<TAcademicFaculty>,
) => {
  const result = AcademicFaculty.findOneAndUpdate({ _id: id }, payLoad, {
    new: true,
  });
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
