import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../acamdemicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';

import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //   if password is not given, use default password
  userData.password = password || (config.default_pass as string);
  userData.role = 'student';

  // find academic semester info

  const addmissionSemester = await AcademicSemester.findById(
    payLoad.addmissionSemester,
  );

  // set manually generated id
  if (addmissionSemester) {
    userData.id = await generateStudentId(addmissionSemester);
  } else {
    throw new AppError(httpStatus.BAD_REQUEST,'Addmission semester is null');
  }
  // create a user
  const newUser = await User.create(userData);
  // create a student

  if (Object.keys(newUser).length) {
    // set id, _id as user
    payLoad.id = newUser.id;
    payLoad.user = newUser._id; // reference _id
    const newStudent = await Student.create(payLoad);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
