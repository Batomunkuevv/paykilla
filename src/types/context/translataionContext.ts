import { LocaleType } from "@t";

export type TranslationContextType = {
    translation: (key: string) => string;
    locale: LocaleType;
};
