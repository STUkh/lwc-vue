import * as Yup from 'c/yupLib';

export const schema = Yup.object().shape({
    email: Yup.string().email().required().label('Email Address'),
    password: Yup.string().min(5).required().label('Your Password'),
});