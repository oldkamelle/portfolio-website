export const defaultLang = 'sq';

export const ui: UiTranslations = {
    'sq': {
        "language": "Gjuha",
        "tagline": "Artiste tradicionale & digjitale",
        
        "contact": "Kontakt",
        "contactAriaLabel": "Kliko të kopjosh email-in",

        "backToTopAriaLabel": "Kthehu në krye",

        "portfolio": "Portofol",
        "artworks": "Vizatime",
        "animatics": "Animacione",
    },
    'en': {
        "language": "Language",
        "tagline": "Traditional & digital artist",
        
        "contact": "Contact",
        "contactAriaLabel": "Click to copy email",

        "backToTopAriaLabel": "Back to top",

        "portfolio": "Portfolio",
        "artworks": "Artworks",
        "animatics": "Animatics",
    }
} as const;

interface UiTranslations {
    [key: string]: {
        language: string,
        tagline: string,
        contact: string,
        contactAriaLabel: string,
        backToTopAriaLabel: string,
        portfolio: string,
        artworks: string,
        animatics: string
    }
}