import { FC } from 'react';
import ProfileImage from '~/components/common/ProfileImage';
import { Link } from '~/core/Router';
import { UsersGetResponseBody, ErrorResponse } from '~/lib/api/types';
import { UserInteractDropdown, InteractSpan } from './index.style';
import * as authAPI from '~/lib/api/auth';
import { alert } from '~/utils/modal';

interface IProps {
  user: UsersGetResponseBody;
  pathname: string;
}

const ProfileIcon: FC<IProps> = ({ user, pathname }) => {
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
      <ProfileImage image={user.profile} size="30px" />
      <UserInteractDropdown>
        <Link to="/me">
          <InteractSpan>마이페이지</InteractSpan>
        </Link>
        <InteractSpan onClick={requestLogout}>로그아웃</InteractSpan>
      </UserInteractDropdown>
    </>
  );
};

export default ProfileIcon;
