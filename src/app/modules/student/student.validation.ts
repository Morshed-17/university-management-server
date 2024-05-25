import { z } from 'zod';

// Define UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'First Name length cannot be longer than 20' })
    .min(1, { message: 'First Name is required' })
    .refine(
      (value) => {
        const trimmedValue = value.trim();
        const firstNameStr =
          trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1);
        return value === firstNameStr;
      },
      { message: 'First Name must start with a capital letter' },
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last Name is required' })
    .refine((value) => /^[A-Za-z]+$/.test(value.trim()), {
      message: 'Last Name must only contain alphabetic characters',
    }),
});

// Define Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact No is required' }),
  motherName: z.string().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact No is required' }),
});

// Define LocalGuardian schema
const localGuardianValidationSchema = z.object({
  Name: z.string().min(1, { message: 'Local Guardian Name is required' }),
  Occupation: z
    .string()
    .min(1, { message: 'Local Guardian Occupation is required' }),
  ContactNo: z
    .string()
    .min(1, { message: 'Local Guardian Contact No is required' }),
  address: z.string().min(1, { message: 'Local Guardian Address is required' }),
});

// Define Student schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .max(20, { message: 'Pasword can not be more than 20 characters' }),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other'], {
        message: 'Gender is not valid',
      }),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: 'Invalid email address' }),
      contactNo: z.string().min(1, { message: 'Contact No is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency Contact No is required' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present Address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent Address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
