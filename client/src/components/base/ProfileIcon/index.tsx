import { FC, useCallback, useEffect, useRef, useState } from 'react';

import ProfileImage from '~/components/common/ProfileImage';
import { Link } from '~/core/Router';
import * as authAPI from '~/lib/api/auth';
import { UsersGetResponseBody, ErrorResponse } from '~/lib/api/types';
import { alert } from '~/utils/modal';

import { UserInteractDropdown, InteractSpan } from './index.style';

interface IProps {
  user: UsersGetResponseBody;
  pathname: string;
}

const ProfileIcon: FC<IProps> = ({ user, pathname }) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const profileImageRef = useRef<HTMLDivElement>();
  const profileModalRef = useRef<HTMLDivElement>();
  const handleMouseClick = useCallback(() => setIsDropdownOpened(true), []);
  const onDocumentClick = useCallback(({ target }) => {
    if (![profileModalRef.current, profileImageRef.current].includes(target))
      setIsDropdownOpened(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', onDocumentClick);
    return () => document.addEventListener('click', onDocumentClick);
  }, []);

  const requestLogout = () => {
    authAPI
      .logout()
      .then(() => {
        window.location.href = pathname;
      })
      .catch((e: ErrorResponse) => alert(e.message));
  };

  return (
    <>
      <ProfileImage
        image={user.profile}
        size="30px"
        onClick={handleMouseClick}
        ref={profileImageRef}
      />
      <UserInteractDropdown
        isDropdownOpened={isDropdownOpened}
        ref={profileModalRef}
      >
        <Link to="/me">
          <InteractSpan>마이페이지</InteractSpan>
        </Link>
        <InteractSpan onClick={requestLogout}>로그아웃</InteractSpan>
      </UserInteractDropdown>
    </>
  );
};

export default ProfileIcon;
