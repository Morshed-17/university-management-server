import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = (payLoad: TAcademicDepartment) => {
  const result = AcademicDepartment.create(payLoad);
  return result;
};
const getAllAcademicDepartmentsFromDB = () => {
  const result = AcademicDepartment.find().populate('academicFaculty');
  return result;
};
const getSingleAcademicDepartmentFromDB = (id: string) => {
  const result = AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};
const updateAcademicDepartmentIntoDB = (
  id: string,
  payLoad: Partial<TAcademicDepartment>,
) => {
  const result = AcademicDepartment.findOneAndUpdate({ _id: id }, payLoad, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
