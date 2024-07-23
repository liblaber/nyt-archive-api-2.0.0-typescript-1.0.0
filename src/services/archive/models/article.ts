import { z } from "zod";
import {
  multimedia,
  multimediaRequest,
  multimediaResponse,
} from "./multimedia";
import { headline, headlineRequest, headlineResponse } from "./headline";
import { keyword, keywordRequest, keywordResponse } from "./keyword";
import { byline, bylineRequest, bylineResponse } from "./byline";

/**
 * The shape of the model inside the application code - what the users use
 */
export const article: any = z.lazy(() => {
  return z.object({
    abstract: z.string().optional().nullable(),
    leadParagraph: z.string().optional().nullable(),
    webUrl: z.string().optional().nullable(),
    snippet: z.string().optional().nullable(),
    printPage: z.string().optional().nullable(),
    printSection: z.string().optional().nullable(),
    source: z.string().optional().nullable(),
    multimedia: z.array(multimedia).optional().nullable(),
    headline: headline.optional().nullable(),
    keywords: z.array(keyword).optional().nullable(),
    pubDate: z.string().optional().nullable(),
    documentType: z.string().optional().nullable(),
    newsDesk: z.string().optional().nullable(),
    sectionName: z.string().optional().nullable(),
    subsectionName: z.string().optional().nullable(),
    byline: byline.optional().nullable(),
    typeOfMaterial: z.string().optional().nullable(),
    _id: z.string().optional().nullable(),
    wordCount: z.number().optional().nullable(),
    uri: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Article} article
 * @property {string} - Document abstract.
 * @property {string} - Lead paragraph.
 * @property {string} - Article URL.
 * @property {string}
 * @property {string} - Page in print (e.g. 1).
 * @property {string} - Section in print (e.g. A).
 * @property {string}
 * @property {Multimedia[]}
 * @property {Headline}
 * @property {Keyword[]}
 * @property {string} - Publication date.
 * @property {string} - Document type (article, multimedia).
 * @property {string} - Desk in the newsroom that worked on the story (Foreign, Metro, Sports, ...).
 * @property {string} - Section that the article appeared in (New York, Sports, World, ...).
 * @property {string}
 * @property {Byline}
 * @property {string} - Type of asset (Correction, News, Op-Ed, Review, Video, ...).
 * @property {string}
 * @property {number} - Number of words in the article.
 * @property {string} - Uniquely identifies an asset.
 */
export type Article = z.infer<typeof article>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const articleResponse: any = z.lazy(() => {
  return z
    .object({
      abstract: z.string().optional().nullable(),
      lead_paragraph: z.string().optional().nullable(),
      web_url: z.string().optional().nullable(),
      snippet: z.string().optional().nullable(),
      print_page: z.string().optional().nullable(),
      print_section: z.string().optional().nullable(),
      source: z.string().optional().nullable(),
      multimedia: z.array(multimediaResponse).optional().nullable(),
      headline: headlineResponse.optional().nullable(),
      keywords: z.array(keywordResponse).optional().nullable(),
      pub_date: z.string().optional().nullable(),
      document_type: z.string().optional().nullable(),
      news_desk: z.string().optional().nullable(),
      section_name: z.string().optional().nullable(),
      subsection_name: z.string().optional().nullable(),
      byline: bylineResponse.optional().nullable(),
      type_of_material: z.string().optional().nullable(),
      _id: z.string().optional().nullable(),
      word_count: z.number().optional().nullable(),
      uri: z.string().optional().nullable(),
    })
    .transform((data) => ({
      abstract: data["abstract"],
      leadParagraph: data["lead_paragraph"],
      webUrl: data["web_url"],
      snippet: data["snippet"],
      printPage: data["print_page"],
      printSection: data["print_section"],
      source: data["source"],
      multimedia: data["multimedia"],
      headline: data["headline"],
      keywords: data["keywords"],
      pubDate: data["pub_date"],
      documentType: data["document_type"],
      newsDesk: data["news_desk"],
      sectionName: data["section_name"],
      subsectionName: data["subsection_name"],
      byline: data["byline"],
      typeOfMaterial: data["type_of_material"],
      _id: data["_id"],
      wordCount: data["word_count"],
      uri: data["uri"],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const articleRequest: any = z.lazy(() => {
  return z
    .object({
      abstract: z.string().nullish(),
      leadParagraph: z.string().nullish(),
      webUrl: z.string().nullish(),
      snippet: z.string().nullish(),
      printPage: z.string().nullish(),
      printSection: z.string().nullish(),
      source: z.string().nullish(),
      multimedia: z.array(multimediaRequest).nullish(),
      headline: headlineRequest.nullish(),
      keywords: z.array(keywordRequest).nullish(),
      pubDate: z.string().nullish(),
      documentType: z.string().nullish(),
      newsDesk: z.string().nullish(),
      sectionName: z.string().nullish(),
      subsectionName: z.string().nullish(),
      byline: bylineRequest.nullish(),
      typeOfMaterial: z.string().nullish(),
      _id: z.string().nullish(),
      wordCount: z.number().nullish(),
      uri: z.string().nullish(),
    })
    .transform((data) => ({
      abstract: data["abstract"],
      lead_paragraph: data["leadParagraph"],
      web_url: data["webUrl"],
      snippet: data["snippet"],
      print_page: data["printPage"],
      print_section: data["printSection"],
      source: data["source"],
      multimedia: data["multimedia"],
      headline: data["headline"],
      keywords: data["keywords"],
      pub_date: data["pubDate"],
      document_type: data["documentType"],
      news_desk: data["newsDesk"],
      section_name: data["sectionName"],
      subsection_name: data["subsectionName"],
      byline: data["byline"],
      type_of_material: data["typeOfMaterial"],
      _id: data["_id"],
      word_count: data["wordCount"],
      uri: data["uri"],
    }));
});
