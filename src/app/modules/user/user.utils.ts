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
    .sort({ createdAt: -1 })
    .lean();
  return lastStudnet?.id ? lastStudnet.id : undefined;
};

//  year semesterCode 4 digit number
export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString(); // 0000
  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); //01
  const lastStudentYear = lastStudentId?.substring(0, 4); // 2030

  const currentSemesterCode = payload.code;
  const currentYear = payload.year;
  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.substring(6);
  }

  let increamentId = (Number(currentId) + 1).toString().padStart(4, '0');
  increamentId = `${payload.year}${payload.code}${increamentId}`;
  return increamentId;
};

const findLastFaculty = async () => {
  const faculty = await User.findOne({
    role: 'faculty',
  }).sort({ createdAt: -1 });
  return faculty?.id ? faculty.id : undefined;
};

export const generateFacultyid = async () => {
  let currentId = (0).toString();
  const lastFaculty = await findLastFaculty();
  if (lastFaculty) {
    currentId = lastFaculty.split('-')[1];
  }
  let increamentId = (Number(currentId) + 1).toString().padStart(4, '0');
  increamentId = `F-${increamentId}`;
  return increamentId;
};
