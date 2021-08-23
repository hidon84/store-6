export const commonError = {
  notFound: {
    statusCode: 404,
    message: 'Not Found',
  },
  forbidden: {
    statusCode: 403,
    message: 'Forbidden',
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
  unexpectedField: {
    statusCode: 400,
    message: 'Unexpected field',
  },
  invalidQuery: {
    statusCode: 400,
    message: 'Invalid query parameters',
  },
  invalidPathParams: {
    statusCode: 400,
    message: 'Invalid path parameters',
  },
  invalidState: {
    statusCode: 422,
    message: 'Invalid state',
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
  unexpectedField: 'Unexpected field',
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
  invalidIdOrPw: {
    statusCode: 400,
    message: 'invalid id or pw',
  },
  invalidEmail: {
    statusCode: 400,
    message: 'invalid email',
  },
  invalidPhone: {
    statusCode: 400,
    message: 'invalid phone',
  },
  invalidTermsAndConditions: {
    statusCode: 400,
    message: 'You must agree to the terms and conditions',
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

export const ProductDetailError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Get Product Detail Information',
  },
};

export const CartError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Get CartItems',
  },
};

export const ShippingError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Get ShippingItems',
  },
}


export const ShippingPostError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Post ShippingItem',
  },
};

export const ShippingPutError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Update ShippingItem',
  },
};


export const ShippingDeleteError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Delete ShippingItem',
  },
};


export const ShippingSelectError = {
  unable: {
    statusCode: 500,
    message: 'Unable to Select ShippingItem',
  },
};
