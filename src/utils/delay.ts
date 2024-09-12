/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const delay = async (ms = 2000) => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};
