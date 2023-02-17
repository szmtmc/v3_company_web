/**
 * 将target重置为origin
 */
export function reset<T>(target: any, origin: any) {
  Object.keys(origin).forEach((key) => {
    target[key] = origin[key];
  });
}
