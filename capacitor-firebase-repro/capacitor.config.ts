import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-firebase-repro',
  webDir: 'dist',
  ios: {
    scheme: "App QA"
  }
};

export default config;
