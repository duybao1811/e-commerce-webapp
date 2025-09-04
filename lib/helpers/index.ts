export function padStart(value: number, length: number, padChar: string = "0"): string {
  return String(value).padStart(length, padChar);
}
