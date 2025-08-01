import { defaultLang, ui } from './uiTranslations';

export function useTranslations(lang: string) {
    const language = lang as keyof typeof ui;
    
    return function translate(key: keyof typeof ui[typeof defaultLang]) {
        return ui[language][key];
    }
}

export const getRouteLangParam = (lang: string): string | undefined => 
    lang == defaultLang ? undefined : lang;

export function getPathWithoutLocale(pathname: string, currentLocale: string) : string {
    if(currentLocale == defaultLang)
        return pathname;
    else {
        const pathPieces = pathname.split('/');
        pathPieces.splice(1, 1); // Removing the language code
        
        return pathPieces.join('/');
    } 
}