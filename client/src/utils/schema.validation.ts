import * as Yup from 'yup';

// Yup.setLocale({
//   mixed: {
//     required: 'Este campo es obligatorio.',
//   },
//   string: {
//     min: 'Debe tener minimo ${min} caracteres.',
//     max: 'Debe tener maximo ${max} caracteres.',
//     email: 'El correo ingresado no es valido.',
//   },
// });

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required(),
  password: Yup.string()
    .min(8)
    .max(15)
    .required(),
});

// export const signupSchema = Yup.object().shape({
//   email: Yup.string()
//     .email()
//     .required(),
//   name: Yup.string().required(),
//   password: Yup.string()
//     .min(8)
//     .max(15)
//     .required(),
//   phone: Yup.string()
//     .matches(phoneRegExp, 'El telefono ingresado no es valido.')
//     .required(),
//   repassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden.')
//     .required(),
// });
