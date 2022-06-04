export class AppSettings {
  static getUrl() {
    switch (process.env.NODE_ENV) {
      case 'development':
        return "https://devtest.ge/";
      case 'test':
        return "https://devtest.ge/";
      case 'production':
        return "https://devtest.ge/";
      default:
        return "https://devtest.ge/";
    }
  }
}
