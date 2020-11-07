export function parser(url: string, cropSize: string) {
  return url?.replace('source/100x100', cropSize);
}
