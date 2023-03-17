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

export function isBiggerThan16(date: string) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const yearBirthDateEmployee = date.split('/')[2];

  if (currentYear - Number(yearBirthDateEmployee) >= 16) {
    return true;
  }

  const currentMonth = today.getMonth() + 1;
  const monthBirthDateEmployee = date.split('/')[1];

  if (currentMonth < Number(monthBirthDateEmployee)) {
    return false;
  }

  if (currentMonth > Number(monthBirthDateEmployee)) {
    return true;
  }

  const currentDay = today.getDate();
  const dayBirthDateEmployee = date.split('/')[0];

  if (currentDay < Number(dayBirthDateEmployee)) {
    return false;
  }

  return true;
}
