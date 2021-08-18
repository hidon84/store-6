import { useState } from 'react';

function useInputValidator(
  initialValue: string,
  validator: (user_input: string) => string,
) {
  const [input, setInput] = useState(initialValue);
  const [warning, setWarning] = useState(' ');

  const handleInput = (user_input: string) => {
    setInput(user_input);
    setWarning(validator(user_input));
  };
  return [input, warning, handleInput] as const;
}

export default useInputValidator;
