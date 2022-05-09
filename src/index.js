import messages_en_gm from "./translations/en-gm.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: "en-gm", messages: messages_en_gm }],
}

export const LanguageEnGmbModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}