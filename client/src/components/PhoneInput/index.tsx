import React, { useCallback, useMemo } from 'react';
import Input from '~/components/Input';
import Divider from '~/components/Divider';

import { PhoneWrapper } from './index.style';

interface Props {
  onChange?: (phoneNumber: string[]) => void;
  value?: string[];
}

const phoneNumbersInfo = [
  { key: 1, max: 3 },
  { key: 2, max: 4 },
  { key: 3, max: 4 },
];

const PhoneInput: React.FC<Props> = ({ onChange, value }) => {
  const phoneValue = useMemo(() => {
    const result = phoneNumbersInfo.map(() => '');
    if (!value) return result;
    value.forEach((v, i) => {
      result[i] = v;
    });
    return result;
  }, [value]);

  const setPhoneNumber = useCallback(
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextPhone = [...phoneValue];
      const currentValue = e.target.value;
      const phoneNumber = currentValue.replace(/[^0-9]/g, '');

      if (phoneNumber === phoneValue[i]) return;
      nextPhone[i] = phoneNumber;
      onChange(nextPhone);
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
          <React.Fragment key={phoneNumberInfo.key}>
            <Input
              type="text"
              width="90px"
              value={phoneValue[i].slice(0, phoneNumberInfo.max)}
              onChange={setPhoneNumbers[i]}
              maxLength={phoneNumberInfo.max}
              style={{ textAlign: 'center', fontSize: '14px' }}
            />
            {i !== phoneNumbersInfo.length - 1 && (
              <Divider
                style={{ margin: '20px' }}
                width="10px"
                direction="horizontal"
              />
            )}
          </React.Fragment>
        );
      })}
    </PhoneWrapper>
  );
};

export default PhoneInput;
