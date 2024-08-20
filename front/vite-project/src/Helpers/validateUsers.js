export default function validateUser(user) {
  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegexp = /^(?=.*[A-Z])(?=.*\d).+$/;
  const errors = {};

  if (!user.name) {
    errors.name = "Debe Ingresar un Nombre";
  }
  if (!user.email) {
    errors.email = "Debe Ingresar un Correo Electrónico";
  } else {
    if (!emailRegexp.test(user.email)) {
      errors.email = "el correo debe ser un correo válido";
    }
  }
  if (!user.birthdate) {
    errors.birthdate = "Debe Ingresar una Fecha de Nacimiento";
  } else if (!isOldEnough(user.birthdate)) {
    errors.birthdate = "Debe ser mayor de 18 años";
  }
  if (!user.nDni) {
    errors.nDni = "Debe ingresar un número de Dni";
  }

  if (!user.username) {
    errors.username = "Debe Ingresar un Nombre de Usuario";
  } else {
    if (user.username < 4 || user.username > 10) {
      errors.username =
        "El Nombre de Usuario debe estar entre 4 y 10 caracteres";
    }
  }

  if (!user.password) {
    errors.password = "Debe Ingresar una Contraseña";
  } else {
    if (!passwordRegexp.test(user.password)) {
      errors.password =
        "La contraseña debe contener al menos una mayúscula y un Número";
    }
  }

  if (!user.confirPassword) {
    errors.confirPassword = "Debe Confirmar la Contraseña";
  } else {
    if (user.confirPassword != user.password) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
  }
  return errors;
}
const isOldEnough = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age >= 18;
};
