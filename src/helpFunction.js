export function generateUniqueKey(num = 4) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "";
  for (let i = 0; i < num; i++) {
    key += chars[Math.floor(Math.random() * chars.length)];
  }
  return key;
}
