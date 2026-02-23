import type { Schema, Struct } from '@strapi/strapi';

export interface CardsDigitalStatCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_digital_stat_cards';
  info: {
    displayName: 'DigitalStatCard';
    icon: 'brush';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    mainStat: Schema.Attribute.String & Schema.Attribute.Required;
    source: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_section_banner_sections';
  info: {
    displayName: 'banner-section';
    icon: 'house';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionDigitalSpace extends Struct.ComponentSchema {
  collectionName: 'components_section_digital_spaces';
  info: {
    displayName: 'digital-space';
  };
  attributes: {
    cards: Schema.Attribute.Component<'cards.digital-stat-card', true>;
    title_kh: Schema.Attribute.String;
  };
}

export interface SectionGoals extends Struct.ComponentSchema {
  collectionName: 'components_section_goals';
  info: {
    displayName: 'Goals';
  };
  attributes: {};
}

export interface SectionNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_section_news_sections';
  info: {
    displayName: 'NewsSection';
  };
  attributes: {};
}

export interface SectionRoadmapDigitalCambodia extends Struct.ComponentSchema {
  collectionName: 'components_section_roadmap_digital_cambodias';
  info: {
    displayName: 'roadmap-digital-cambodia';
  };
  attributes: {
    period: Schema.Attribute.Component<'shared.period', true>;
    section_title_kh: Schema.Attribute.String;
  };
}

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

export interface SharedPeriod extends Struct.ComponentSchema {
  collectionName: 'components_shared_periods';
  info: {
    displayName: 'Period';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    year_range: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.digital-stat-card': CardsDigitalStatCard;
      'section.banner-section': SectionBannerSection;
      'section.digital-space': SectionDigitalSpace;
      'section.goals': SectionGoals;
      'section.news-section': SectionNewsSection;
      'section.roadmap-digital-cambodia': SectionRoadmapDigitalCambodia;
      'shared.cards': SharedCards;
      'shared.excellency': SharedExcellency;
      'shared.period': SharedPeriod;
    }
  }
}
