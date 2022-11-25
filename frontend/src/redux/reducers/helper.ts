import storage from "./storage";

export const getPersistConfig = (config: any) => {
  return {
    ...config,
    storage,
  };
};
