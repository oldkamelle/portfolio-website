import { defineCollection, z } from "astro:content";

const textLocalesObject = z.object({
    sq: z.string(),
    en: z.string(),
});

const goods = defineCollection({
    type: "data",
    schema: ({ image }) => z.object({
        title: textLocalesObject,
        description: textLocalesObject,
        previewImg: z.object ({
            img: image(),
            alt: textLocalesObject,
        }),
        productLink: z.string()
    })
});

export const collections = {
    goods,
};