export function maskCPF(value: string) {
  let newValue = value;

  newValue = newValue.replace(/\D/g, '');
  newValue = newValue.replace(/^(\d{3})(\d{3})(\d{3})(\d)/g, '$1.$2.$3-$4');
  return newValue;
}

export function maskPhoneNumber(value: string) {
  let newValue = value;

  newValue = newValue.replace(/\D/g, '');
  newValue = newValue.replace(/^(\d{2})(\d{1})(\d{4})(\d)/g, '($1) $2 $3-$4');
  return newValue;
}

export function maskDate(value: string) {
  let newValue = value;

  newValue = newValue.replace(/\D/g, '');
  newValue = newValue.replace(/^(\d{2})(\d{2})(\d{2})/g, '$1/$2/$3');
  return newValue;
}
