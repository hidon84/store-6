import React, { useState, useEffect } from 'react';
import {
  StyledUserInfoInput,
  UserInfoInputTitle,
  ModifyButton,
} from './index.style';

const DEFAULT_PLACEHOLDER = '수정은 수정 버튼으로';

interface Props {
  title: string;
  value?: string;
  defaultDisabled?: boolean;
  placeholder?: string;
  validator?: (userInput: string) => boolean;
  showWarning?: () => void;
  onSubmit?: (userInput: string) => void;
  inputComponent: React.ReactNode;
}

const UserInfoInput: React.FC<Props> = ({
  title,
  value,
  defaultDisabled,
  placeholder,
  validator,
  showWarning,
  onSubmit,
  inputComponent,
}) => {
  const safeValidator = (valueToValidate: string) =>
    validator ? validator(valueToValidate ?? '') : true;

  const [userInput, setUserInput] = useState(value ?? '');
  const [isCanSubmit, setIsCanSubmit] = useState(safeValidator(value));
  const [disabled, setDisabled] = useState(defaultDisabled ?? true);

  const handleOnChangeUserInput = (inputValue: string) => {
    setIsCanSubmit(safeValidator(inputValue));
    setUserInput(inputValue);
  };

  const handleOnClickModifyButton = () => {
    if (disabled) {
      setDisabled(false);
      return;
    }
    if ((validator && !validator(userInput)) || !isCanSubmit) {
      showWarning();
      return;
    }
    if (onSubmit) {
      onSubmit(userInput);
      setDisabled(true);
      setIsCanSubmit(safeValidator(value));
    }
  };

  useEffect(() => {
    setIsCanSubmit(safeValidator(value));
    setUserInput(value);
  }, [value]);

  return (
    <StyledUserInfoInput>
      <UserInfoInputTitle>{title}</UserInfoInputTitle>
      {typeof inputComponent === 'function' &&
        inputComponent({
          disabled,
          value: disabled ? '' : userInput,
          onChange: handleOnChangeUserInput,
          placeholder: placeholder?.length ? placeholder : DEFAULT_PLACEHOLDER,
        })}
      <ModifyButton
        disabled={disabled || !isCanSubmit}
        onClick={handleOnClickModifyButton}
      >
        {disabled ? '수정' : '완료'}
      </ModifyButton>
    </StyledUserInfoInput>
  );
};

export default UserInfoInput;
