export default class WeatherCities {
  /** @param {array[]} cities */
  constructor(cities) {
    this.cities = cities;
  }

  getFirst() {
    return this.cities[0];
  }

  getLast() {
    return this.cities.at(-1);
  }

  exportCsv() {
    const citiesName = this.cities.map((city) => {
      return `${city.location.name} ${city.current.temperature}`;
    });
    return citiesName.join(", ");
  }
}
