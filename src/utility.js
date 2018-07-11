import { values, keyBy, map } from "lodash";

export const _getObjectValues = o => values(o);
export const _converToObjectByKey = (arr, key) => {
  const result = keyBy(arr, key);
  return result;
};
export const _map = (arr, prop) => map(arr, prop);
