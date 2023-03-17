export function isBeforeToday(date: string) {
  const today = new Date();
  const todayYMD = new Date(
    today.getTime() - today.getTimezoneOffset() * 60 * 1000,
  )
    .toISOString()
    .split('T')[0];

  const dateCreatedAt = date;
  const trechos = dateCreatedAt.split('/');
  const dateCreatedAtYMD = [trechos[2], trechos[1], trechos[0]].join('-');

  return todayYMD >= dateCreatedAtYMD;
}
