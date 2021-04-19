import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

function getValidationErrors(err: ValidationError): IErrors {
  const validationErrors: IErrors = {};

  err.inner.forEach(error => {
    if (!error.path) return;

    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

export { getValidationErrors };
