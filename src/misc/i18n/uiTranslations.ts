export const defaultLang = 'sq';

export const ui: UiTranslations = {
    'sq': {
        contact: "Kontakt",
        language: "Gjuha",

        tagline: "Artiste tradicionale & digjitale",
        
        portfolio: "Portofoli",
        illustrations: "Vizatime",
        animatics: "Animacione",

        goods: "Produkte",
    },
    'en': {
        contact: "Contact",
        language: "Language",
        
        tagline: "Traditional & digital artist",
        
        portfolio: "Portfolio",
        illustrations: "Illustrations",
        animatics: "Animatics",

        goods: "Goods",
    }
} as const;

interface UiTranslations {
    [key: string]: {
        contact: string,
        language: string,

        tagline: string,

        portfolio: string,
        illustrations: string,
        animatics: string,

        goods: string,
    }
}