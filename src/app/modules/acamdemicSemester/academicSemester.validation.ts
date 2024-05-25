
import { z } from 'zod';

const createAcademicSemsterValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    
  })
});

export const AcademicSemsterValidation = {
  createAcademicSemsterValidationSchema,
};
