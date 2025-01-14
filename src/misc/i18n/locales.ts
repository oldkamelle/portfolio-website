export const LOCALES: LocaleSetting = {
    'sq': {
        "label": "Shqip",
    },
    'en': {
        "label": "English",
    },
}

interface LocaleSetting {
    [key: string]: {
        label: string;
    }
}