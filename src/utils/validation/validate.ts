export const validateEmail = (_: any, value: string) => {
  if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error("Email không hợp lệ!"));
};
