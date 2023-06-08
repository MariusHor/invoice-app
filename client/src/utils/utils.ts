export const capitalize = (string: string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

export function invariant(value: unknown): asserts value {
  if (value) {
    return;
  }

  throw new Error("Invariant violation");
}

export const parseJwt = (token: string | undefined) => {
  try {
    if (token) return JSON.parse(atob(token.split(".")[1]));
    throw new Error();
  } catch (e) {
    return null;
  }
};

export const getCharacterValidationError = (str: string) => {
  return `Password must have at least 1 ${str} character`;
};
