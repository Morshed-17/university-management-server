import { TAcademicSemester } from '../acamdemicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudnet = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
  .sort({createdAt: -1})
  .lean();
  return lastStudnet?.id ? lastStudnet.id.substring(6) : undefined;
};

//  year semesterCode 4 digit number
export const generateStudentId = async (payLoad: TAcademicSemester) => {
  const currentId = (await findLastStudentId()) || (0).toString();
  let increamentId = (Number(currentId) + 1).toString().padStart(4, '0');
  increamentId = `${payLoad.year}${payLoad.code}${increamentId}`;
  return increamentId;
};
