import { useState, useCallback, DependencyList } from 'react';

const useInputValidator = (
  initialValue: string,
  validator: (userInput: string) => string,
  deps: DependencyList = [],
) => {
  const [input, setInput] = useState(initialValue);
  const [warning, setWarning] = useState(' ');

  const onInput = useCallback(
    (userInput: string) => {
      setInput(userInput);
      setWarning(validator(userInput));
    },
    [setInput, setWarning, validator, ...deps],
  );

  const handleInput = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    onInput(ev.target.value);
  }, deps);

  return [input, warning, handleInput, onInput] as const;
};

export default useInputValidator;
