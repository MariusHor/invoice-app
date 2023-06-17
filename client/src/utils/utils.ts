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

export const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const camelToNormal = (string: string) => {
  return string.replace(/([A-Z])/g, " $1");
};
