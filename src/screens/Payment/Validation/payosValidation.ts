import * as yup from 'yup';

export const payosValidation = yup.object().shape({
    description: yup.string().required('Description is required'),
});