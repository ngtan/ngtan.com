export default function getTimeToRead(s: string) {
  const wordsPerMinute = 225;
  const words = s.split(/\s/g).length;
  const minutes = words / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
}
