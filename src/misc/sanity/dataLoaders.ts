import { createClient } from "@sanity/client";
import type { Animatic } from "./models/animatic";
import type { Artwork } from "./models/artwork";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "astro:env/server";

const sanityClient = createClient({
    projectId: SANITY_PROJECT_ID, 
    dataset: SANITY_DATASET,
    apiVersion: "2025-01-12",
    useCdn: true,
});

// Functions

export async function getChiefArtworks(langCode: string) {
    var collection = await sanityClient.fetch(
        `*[_type == "artworksCollection" &&
            value == "portfolio-chief-works"]
            {
             collection[]->{
               "title": title[_key == "${langCode}"][0].value,
               "urlId": select(
                 _type == "animatic" => gifPreviewUrlId, 
                 _type == "artworkImage" => urlId),
               "alt": select(
                 _type == "animatic" => gifPreviewAccessibility.alt[_key == "${langCode}"][0].value,
                 _type == "artworkImage" => accessibility.alt[_key == "${langCode}"][0].value),
               "description": select(
                 _type == "animatic" => gifPreviewAccessibility.description[_key == "${langCode}"][0].value,
                 _type == "artworkImage" => accessibility.description[_key == "${langCode}"][0].value)
             }
           }`
    );

    return collection[0].collection as Artwork[];
}

export async function getArtworks(langCode: string) {
    var collection = await sanityClient.fetch(
        `*[_type == "artworksCollection" &&
            value == "portfolio-artworks"]{
             collection[]->{
               "title": title[_key == "${langCode}"][0].value,
               "urlId": urlId,
               "alt": accessibility.alt[_key == "${langCode}"][0].value,
               "description": accessibility.description[_key == "${langCode}"][0].value
             }
           }`
    );

    return collection[0].collection as Artwork[];
}

export async function getAnimatics(langCode: string) {
    var collection = await sanityClient.fetch(
        `*[_type == "artworksCollection" && 
            value == "portfolio-animatics"] 
          {
            collection[]->{
              "title": title[_key == "${langCode}"][0].value,
              urlId,
              isLoopable
            }
          }`
    );

    return collection[0].collection as Animatic[];
}