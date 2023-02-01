export default class Weather {
  /** @param {object} details */
  constructor(details) {
    this.details = details;
  }

  getLocation() {
    return `${this.details.location.name}, ${this.details.location.country}`;
  }

  getIcon() {
    return `${this.details.current.weather_icons}`;
  }

  getTemperature() {
    return `${this.details.current.temperature}&deg;C`;
  }
}
