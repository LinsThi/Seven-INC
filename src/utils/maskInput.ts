export function maskCPF(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/g, '$1.$2.$3-$4');
  return value;
}

export function maskPhoneNumber(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d)/g, '($1) $2 $3-$4');
  return value;
}

export function maskDate(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{2})(\d{2})/g, '$1/$2/$3');
  return value;
}
