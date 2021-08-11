import React, { useState } from 'react';

function useLocation() {
  const { pathname } = window.location;
  const [location, setLocation] = useState(pathname);

  return [location, setLocation] as const;
}

export default useLocation;
