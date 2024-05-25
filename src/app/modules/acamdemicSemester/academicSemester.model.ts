import { Schema, model } from 'mongoose';
import {
  TAcademicSemester,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonth,
} from './academicSemester.interface';

const months: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summar',
  'Fall',
];
const academicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];
const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: academicSemesterName,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: academicSemesterCode,
  },
  startMonth: {
    type: String,
    enum: months,
  },
  endMonth: {
    type: String,
    enum: months,
  },
});

export const AcademicSemster = model<TAcademicSemester>(
  'AcademicSemster',
  academicSemesterSchema,
);
