const oauthStateDecoder = (state: string) => {
  if (!state) {
    return {};
  }

  const result: Record<string, string> = {};
  const splittedState = state.split('&').map((v) => v.split('='));
  splittedState.forEach(([key, value]) => {
    result[key] = value;
  });
  return result;
};

export default oauthStateDecoder;
