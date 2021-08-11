import React, { useState } from 'react';
import { RouterLocation } from '~/core/Router';

/**
 * 이 함수를 원하는건지 Router에 있는 useLocation() 을 원하는건지 잘 생각하고 사용하세요.
 * React Router DOM 라이브러리에서 사용하던 useLocation 함수와 같은 역할을 하는것은
 * Router에 있는 useLocation() 함수입니다.
 */
function useLocation() {
  const [location, setLocation] = useState(window.location);

  const setLocationWrapper = (newLocation: Partial<RouterLocation>) => {
    window.history.pushState({}, '', newLocation.pathname);
    setLocation({ ...location, ...newLocation });
  };

  return [location, setLocationWrapper] as const;
}

export default useLocation;
