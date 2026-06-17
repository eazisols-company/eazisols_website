import { COUNTRIES, type Country } from "./countries-data";

export type { Country };
export { COUNTRIES };

export function countryFlag(code: string): string {
  const upper = code.toUpperCase();
  if (upper.length !== 2) return "";
  return String.fromCodePoint(
    ...[...upper].map((char) => 0x1f1e6 - 65 + char.charCodeAt(0)),
  );
}

export function getCountryByCode(code: string): Country | undefined {
  return COUNTRIES.find((country) => country.code === code.toLowerCase());
}

export function formatCountryOption(country: Country): string {
  return `${country.code} ${country.name} (+${country.dialCode})`;
}

export function formatPhonePrefix(country: Country): string {
  return `${country.code.toUpperCase()} +${country.dialCode}`;
}

export function formatDialCodeValue(country: Country): string {
  return `+${country.dialCode}`;
}
