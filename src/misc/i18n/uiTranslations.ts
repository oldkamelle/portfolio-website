export const defaultLang = 'sq';

export const ui: UiTranslations = {
    'sq': {
        language: "Gjuha",
        closeBtn: "Mbyll",
        tagline: "Artiste tradicionale & digjitale",
        
        about: "Kush?",
        contact: "Kontakt",
        illustrations: "Vizatime",
        animatics: "Animacione",

        backToTopAriaLabel: "Kthehu në krye",
    },
    'en': {
        language: "Language",
        closeBtn: "Close",
        tagline: "Traditional & digital artist",
        
        about: "About",
        contact: "Contact",
        illustrations: "Illustrations",
        animatics: "Animatics",

        backToTopAriaLabel: "Back to top",
    }
} as const;

interface UiTranslations {
    [key: string]: {
        language: string,
        closeBtn: string,
        tagline: string,
        about: string,
        illustrations: string,
        animatics: string,
        contact: string,
        backToTopAriaLabel: string,
    }
}