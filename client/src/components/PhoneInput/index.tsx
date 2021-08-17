import React, { Fragment, useCallback, useMemo } from 'react';
import Input from '~/components/Input';
import Divider from '~/components/Divider';

import { PhoneWrapper } from './index.style';
import { REG_NOT_DIGITS } from '~/utils/validation';

interface Props {
  onChange?: (phoneNumber: string) => void;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
}

const phoneNumbersInfo = [
  { key: 1, max: 3, placeholder: '입력이' },
  { key: 2, max: 4, placeholder: '필요' },
  { key: 3, max: 4, placeholder: '합니다' },
];

const PhoneInput: React.FC<Props> = ({
  onChange,
  value,
  disabled,
  placeholder,
}) => {
  const phoneValue = useMemo(() => {
    const result = phoneNumbersInfo.map(() => '');
    value?.split('-').forEach((v, i) => {
      result[i] = v;
    });
    return result;
  }, [value]);
  const phonePlaceHolder = useMemo(() => {
    const result = phoneNumbersInfo.map((info) => info.placeholder);
    placeholder
      ?.split(' ')
      .slice(0, 3)
      .forEach((p, i) => {
        result[i] = p;
      });
    return result;
  }, [placeholder]);

  const setPhoneNumber = useCallback(
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextPhone = [...phoneValue];
      const currentValue = e.target.value;
      const phoneNumber = currentValue.replace(REG_NOT_DIGITS, '');

      if (phoneNumber === phoneValue[i]) return;
      nextPhone[i] = phoneNumber;
      onChange(nextPhone.join('-'));
    },
    [onChange, phoneValue],
  );

  const setPhoneNumbers = useMemo(
    () => phoneNumbersInfo.map((_, i) => setPhoneNumber(i)),
    [setPhoneNumber],
  );

  return (
    <PhoneWrapper>
      {phoneNumbersInfo.map((phoneNumberInfo, i) => {
        return (
          <Fragment key={phoneNumberInfo.key}>
            <Input
              type="text"
              width="90px"
              value={phoneValue[i]?.slice(0, phoneNumberInfo.max) || ''}
              onChange={setPhoneNumbers[i]}
              maxLength={phoneNumberInfo.max}
              style={{ textAlign: 'center', fontSize: '14px' }}
              disabled={disabled}
              placeholder={phonePlaceHolder[i]}
            />
            {i !== phoneNumbersInfo.length - 1 && (
              <Divider
                style={{ margin: '20px' }}
                width="10px"
                direction="horizontal"
              />
            )}
          </Fragment>
        );
      })}
    </PhoneWrapper>
  );
};

export default PhoneInput;
