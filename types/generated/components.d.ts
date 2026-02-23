import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'cards';
    icon: 'book';
  };
  attributes: {};
}

export interface SharedExcellency extends Struct.ComponentSchema {
  collectionName: 'components_shared_excellencies';
  info: {
    displayName: 'excellency';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cards': SharedCards;
      'shared.excellency': SharedExcellency;
    }
  }
}
