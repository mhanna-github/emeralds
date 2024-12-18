// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Home → navigation*
 */
export interface HomeDocumentDataNavigationItem {
  /**
   * nav link field in *Home → navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.navigation[].nav_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nav_link: prismic.KeyTextField;

  /**
   * nav link title field in *Home → navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.navigation[].nav_link_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nav_link_title: prismic.KeyTextField;
}

type HomeDocumentDataSlicesSlice = never;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * navigation field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<HomeDocumentDataNavigationItem>>;

  /**
   * home title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.home_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  home_title: prismic.KeyTextField;

  /**
   * home image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.home_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  home_image: prismic.ImageField<never>;

  /**
   * home text field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.home_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  home_text: prismic.KeyTextField;

  /**
   * about span1 field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_span1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_span1: prismic.KeyTextField;

  /**
   * about title1 field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_title1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_title1: prismic.KeyTextField;

  /**
   * about text1 field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_text1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_text1: prismic.KeyTextField;

  /**
   * about span2 field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_span2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_span2: prismic.KeyTextField;

  /**
   * about title2 field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_title2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_title2: prismic.KeyTextField;

  /**
   * about text2 field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_text2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  about_text2: prismic.KeyTextField;

  /**
   * about image1 field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_image1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  about_image1: prismic.ImageField<never>;

  /**
   * about image2 field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_image2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  about_image2: prismic.ImageField<never>;

  /**
   * about image3 field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.about_image3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  about_image3: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataNavigationItem,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
