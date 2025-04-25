import { createClient } from "@sanity/client";
import type { Animatic } from "./models/animatic";
import type { Artwork } from "./models/artwork";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "astro:env/server";

const sanityClient = createClient({
    projectId: SANITY_PROJECT_ID, 
    dataset: SANITY_DATASET,
    apiVersion: "2025-04-20",
    useCdn: true,
});

// Functions

export async function getArtworks(langCode: string) {
    var collection = await sanityClient.fetch(
      `*[_type == 'collection' && title == 'portfolio-illustrations'] {
          pieces[]-> {
            "title": title[_key == "${langCode}"][0].value,
            "urlId": url,
            "alt": alt[_key == "${langCode}"][0].value
        }
      }`
    );

    return collection[0].pieces as Artwork[];
}

export async function getAnimatics(langCode: string) {
    var collection = await sanityClient.fetch(
      `*[_type == 'collection' && title == 'portfolio-animatics'] {
          pieces[]-> {
            "title": title[_key == "${langCode}"][0].value,
            url,
            "previewPicUrlId": preview.url,
            "previewPicAlt": preview.alt[_key == "${langCode}"][0].value
          }
      }`
    );

    return collection[0].pieces as Animatic[];
}