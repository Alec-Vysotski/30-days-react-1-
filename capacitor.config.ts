import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.countrychecker.app',
  appName: 'CountryChecker',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
