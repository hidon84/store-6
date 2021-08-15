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
