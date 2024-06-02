import { Types } from 'mongoose';
import { TUserName } from '../student/student.interface';

export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  designation: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  permanentAddress: string;
  profileImg: string;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};
