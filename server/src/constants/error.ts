export const commonError = {
  notFound: {
    statusCode: 404,
    message: 'Not Found',
  },
  wrong: {
    statusCode: 500,
    message: 'Something went very wrong!!!',
  },
  unauthorized: {
    statusCode: 401,
    message: 'Unauthorized',
  },
  tooLarge: {
    statusCode: 413,
    message: 'Payload too large',
  },
  badRequest: {
    statusCode: 400,
    message: 'Bad Request',
  },
};

export const uploadImageError = {
  notAcceptable: {
    statusCode: 406,
    message: 'Only jpeg, jpg, png type images are accepted.',
  },
};

export const multerError = {
  tooLarge: 'File too large',
};

export const loginError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Login',
  },
};

export const logoutError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Logout',
  },
};

export const refreshError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Refresh',
  },
};

export const userCreateError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Create User',
  },
  alreadyExists: {
    statusCode: 409,
    message: 'account already exists',
  },
};

export const userUpdateError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Update User',
  },
};

export const userDeleteError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Update User',
  },
};

export const ProductError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Get Products',
  },
};
