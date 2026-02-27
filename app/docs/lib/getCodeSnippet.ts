export function getCodeSnippet(knobValues: Record<string, any> = {}, componentName = "string") {
  const propsString = Object.entries(knobValues)
    .filter(([_, v]) => v !== undefined && v !== "" && v !== false)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}="${value}"`;
      if (typeof value === "boolean") return key; // boolean true → just the prop name
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");

  const openTag = propsString ? `<${componentName} ${propsString}>` : `<${componentName}>`;
  return openTag;
}
