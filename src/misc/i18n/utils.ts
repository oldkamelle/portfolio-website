import { defaultLang, ui } from './uiTranslations';

export function useTranslations(lang: string) {
    const language = lang as keyof typeof ui;
    
    return function translate(key: keyof typeof ui[typeof defaultLang]) {
        return ui[language][key];
    }
}

export const getRouteLangParam = (lang: string): string | undefined => 
    lang == defaultLang ? undefined : lang;