import { useState, useCallback, DependencyList } from 'react';

function useInputValidator(
  initialValue: string,
  validator: (user_input: string) => string,
  deps: DependencyList = [],
) {
  const [input, setInput] = useState(initialValue);
  const [warning, setWarning] = useState(' ');

  const onInput = (user_input: string) => {
    setInput(user_input);
    setWarning(validator(user_input));
  };

  const handleInput = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    onInput(ev.target.value);
  }, deps);
  return [input, warning, handleInput] as const;
}

export default useInputValidator;
