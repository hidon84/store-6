import { useState, useCallback, DependencyList } from 'react';

const useInputValidator = (
  initialValue: string,
  validator: (userInput: string) => string,
  deps: DependencyList = [],
) => {
  const [input, setInput] = useState(initialValue);
  const [warning, setWarning] = useState(' ');

  const onInput = (userInput: string) => {
    setInput(userInput);
    setWarning(validator(userInput));
  };

  const handleInput = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    onInput(ev.target.value);
  }, deps);
  return [input, warning, handleInput] as const;
};

export default useInputValidator;
