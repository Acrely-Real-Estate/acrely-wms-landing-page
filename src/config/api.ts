/**
 * Central API configuration.
 * All frontend services should import the base URL from here.
 */

const PRODUCTION_API_URL = "https://wms-landing-backend.onrender.com";
const DEVELOPMENT_API_URL = "http://localhost:5000";

export function getApiBaseUrl(): string {
  const envUrl = (import.meta as any).env?.VITE_API_URL as string | undefined;
  if (envUrl) return envUrl;
  return import.meta.env.PROD ? PRODUCTION_API_URL : DEVELOPMENT_API_URL;
}
