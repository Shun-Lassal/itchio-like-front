const isValidEmail = (str) => {
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let isLengthValid = str.length > 6;
  let isEmailValid = pattern.test(str);
  return {
    validLength: isLengthValid,
    validEmail: isEmailValid,
  };
};

const isValidUsername = (str) => {
  let isLengthValid = str.length > 2;
  let isUsernameValid = /^[a-zA-Z0-9]+$/.test(str);
  return {
    validLength: isLengthValid,
    validUsername: isUsernameValid,
  };
};

const isValidPassword = (str) => {
  let isLengthValid = str.length > 7;
  return isLengthValid;
};

const isValidPasswords = (str, str2) => {
  let isFirstPswdValid = isValidPassword(str);
  let isSecondPswdValid = isValidPassword(str2);
  let arePswdSame = str === str2;
  return {
    validFirstPswd: isFirstPswdValid,
    validSecondPswd: isSecondPswdValid,
    validPswds: arePswdSame,
  };
};

export default {
  isValidEmail,
  isValidUsername,
  isValidPassword,
  isValidPasswords,
};
