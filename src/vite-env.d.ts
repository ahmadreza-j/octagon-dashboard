/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOST_API: string;
  readonly VITE_ASSETS_API: string;
  readonly VITE_MAPBOX_API: string;
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APPID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID: string;
  readonly VITE_AWS_AMPLIFY_USER_POOL_ID: string;
  readonly VITE_AWS_AMPLIFY_USER_POOL_WEB_CLIENT_ID: string;
  readonly VITE_AWS_AMPLIFY_REGION: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CALLBACK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
