export const ERROR_ACTION = "ERROR ACTION";

export function errorAction(payload) {
  return {
    type: ERROR_ACTION,
    payload
  };
}