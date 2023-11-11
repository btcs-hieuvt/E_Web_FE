export const validateEmail = (_: any, value: string) => {
  if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error("Please enter a valid email!"));
};

export const validatePhone = (_: any, value: string) => {
  const phoneRegex = /^[0-9]{10}$/;
  if (!value || phoneRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject("Please enter a valid phone number!");
};

export const validatePassword = (_: any, value: string) => {
  if (value?.trim()?.length < 8) {
    return Promise.reject("Password must be at least 8 characters");
  }
  return Promise.resolve();
};
