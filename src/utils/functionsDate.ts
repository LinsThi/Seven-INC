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

export function validYear(date: string) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const yearBirthDateEmployee = date.split('/')[2];

  if (currentYear - Number(yearBirthDateEmployee) >= 0) {
    return true;
  }

  return false;
}

export function dateCreatedAtAfterBirthDate(
  dateCreatedAt: string,
  dateBirthDate: string,
) {
  const [dayCreatedAt, monthCreatedAt, yearCreatedAt] =
    dateCreatedAt.split('/');
  const [dayBirthDateEmployee, monthBirthDateEmployee, yearBirthDateEmployee] =
    dateBirthDate.split('/');

  if (Number(yearCreatedAt) - Number(yearBirthDateEmployee) > 16) {
    return true;
  }

  if (Number(yearCreatedAt) - Number(yearBirthDateEmployee) === 16) {
    if (Number(monthCreatedAt) > Number(monthBirthDateEmployee)) {
      return true;
    }

    if (Number(monthCreatedAt) === Number(monthBirthDateEmployee)) {
      if (Number(dayCreatedAt) >= Number(dayBirthDateEmployee)) {
        return true;
      }
    }
  }

  return false;
}

export function isBiggerThan16(date: string) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const [dayBirthDateEmployee, monthBirthDateEmployee, yearBirthDateEmployee] =
    date.split('/');

  if (currentYear - Number(yearBirthDateEmployee) > 16) {
    return true;
  }

  if (currentYear - Number(yearBirthDateEmployee) === 16) {
    const currentMonth = today.getMonth() + 1;

    if (currentMonth > Number(monthBirthDateEmployee)) {
      return true;
    }

    if (currentMonth === Number(monthBirthDateEmployee)) {
      const currentDay = today.getDate();

      if (currentDay >= Number(dayBirthDateEmployee)) {
        return true;
      }
    }
  }

  return false;
}
