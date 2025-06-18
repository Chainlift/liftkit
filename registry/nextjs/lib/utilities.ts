export function propsToDataAttrs(
  props: Record<string, unknown>,
  baseAttr: string,
): Record<string, string> {
  const dataAttrs: Record<string, string> = {};

  Object.entries(props).forEach(([key, value]) => {
    // Only process serializable values
    if (
      value === undefined ||
      value === null ||
      typeof value === "function" ||
      typeof value === "object"
    )
      return;

    const kebabKey = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

    dataAttrs[`data-lk-${baseAttr}-${kebabKey}`] = String(value);
  });

  return dataAttrs;
}
