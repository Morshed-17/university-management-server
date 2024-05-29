import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = (payload: TAcademicFaculty) => {
  const result = AcademicFaculty.create(payload);
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
  payload: Partial<TAcademicFaculty>,
) => {
  const result = AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
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
