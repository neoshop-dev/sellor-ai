import react from "@vitejs/plugin-react";
import "dotenv/config";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  define: {
    "process.env.SHOPIFY_API_KEY": JSON.stringify(process.env.SHOPIFY_API_KEY),
    "process.env.REACT_APP_API_URL": JSON.stringify(process.env.REACT_APP_API_URL),
    "process.env.REACT_APP_IMAGES_URL": JSON.stringify(process.env.REACT_APP_IMAGES_URL),
    "process.env.LOCAL_IMAGE_URL": JSON.stringify(process.env.LOCAL_IMAGE_URL),
  },
  plugins: [react()],
};
