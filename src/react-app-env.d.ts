/// <reference types="react-scripts" />

interface ImportMetaEnv {
  API_URL: string;
  REACT_APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
