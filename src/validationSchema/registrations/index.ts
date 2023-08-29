import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
  registration_time: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  event_id: yup.string().nullable().required(),
});
