import { Types } from 'mongoose';

export type TAcademicDepartment = {
  name: string;
  AcademicFaculty: Types.ObjectId;
};
