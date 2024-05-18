import Joi from "joi";

// creating a schema validation using joi

const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .max(20)
      .trim()
      .required()
      .pattern(/^[A-Z][a-z]*$/, 'capitalized')
      .messages({
        'string.pattern.name': '{#label} must start with a capital letter',
      }),
    middleName: Joi.string().trim().optional(),
    lastName: Joi.string()
      .trim()
      .required()
      .pattern(/^[A-Za-z]+$/, 'alphabetic')
      .messages({
        'string.pattern.name':
          '{#label} must only contain alphabetic characters',
      }),
  });

  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().trim().required(),
    fatherOccupation: Joi.string().trim().required(),
    fatherContactNo: Joi.string().trim().required(),
    motherName: Joi.string().trim().required(),
    motherOccupation: Joi.string().trim().required(),
    motherContactNo: Joi.string().trim().required(),
  });

  const localGuardianValidationSchema = Joi.object({
    Name: Joi.string().trim().required(),
    Occupation: Joi.string().trim().required(),
    ContactNo: Joi.string().trim().required(),
    address: Joi.string().trim().required(),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    dateOfBirth: Joi.date().iso().optional(),
    email: Joi.string().email().required(),
    contactNo: Joi.string().trim().required(),
    emergencyContactNo: Joi.string().trim().required(),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
      .optional(),
    presentAddress: Joi.string().trim().required(),
    permanentAddress: Joi.string().trim().required(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImg: Joi.string().uri().trim().optional(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
  });

  export default studentValidationSchema

