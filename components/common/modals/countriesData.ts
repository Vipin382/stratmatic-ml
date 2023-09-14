import { countries } from "country-data";

interface Icountries {
  id: string;
  name: string;
  unavailable: boolean;
}

export const getCountries = () => {
  const countriesData: Icountries[] = [];

  for (var i = 0; i < countries.all.length; i++) {
    countriesData.push({
      id: countries.all[i].ioc,
      name: countries.all[i].name,
      unavailable: false,
    });
  }

  return countriesData;
};
