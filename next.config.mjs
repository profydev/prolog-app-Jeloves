/** @type {import('next').NextConfig} */

import { readFileSync } from "fs";

const packageJsonContent = readFileSync("./package.json", "utf8");
const packageJson = JSON.parse(packageJsonContent);
const version = packageJson.version;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["prolog-api.profy.dev"],
  },
  env: {
    appVersion: version,
  },
};

export default nextConfig;
