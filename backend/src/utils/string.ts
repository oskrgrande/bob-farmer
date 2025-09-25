export function isUpperCase(text: string) {
  return text.localeCompare(text.toUpperCase()) === 0
}

export function toSnakeCase(name: string) {
  name = name.replaceAll(/(.)([A-Z][a-z]+)/g, '$1_$2')
  name = name.replaceAll(/__([A-Z])/g, '_$1')
  name = name.replaceAll(/([\da-z])([A-Z])/g, '$1_$2')
  return name.toLowerCase()
}
