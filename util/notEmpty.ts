export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}
export function isEmpty<TValue>(
  value: TValue | null | undefined
): value is undefined {
  return value === undefined;
}
