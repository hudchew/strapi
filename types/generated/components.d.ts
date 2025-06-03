import type { Schema, Struct } from '@strapi/strapi';

export interface TagItemTags extends Struct.ComponentSchema {
  collectionName: 'components_tag_item_tags';
  info: {
    displayName: 'Tags';
    icon: 'priceTag';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tag-item.tags': TagItemTags;
    }
  }
}
