import type { Schema, Struct } from '@strapi/strapi';

export interface CardsCardRichtext extends Struct.ComponentSchema {
  collectionName: 'components_cards_card_richtexts';
  info: {
    displayName: 'CardRichtext';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

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
    source_url: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface CardsStandardCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_standard_cards';
  info: {
    displayName: 'StandardCard';
  };
  attributes: {
    cardid: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface EmptyComponentDocumentGrid extends Struct.ComponentSchema {
  collectionName: 'components_empty_component_document_grids';
  info: {
    displayName: 'document-grid';
  };
  attributes: {};
}

export interface EmptyComponentStatsBar extends Struct.ComponentSchema {
  collectionName: 'components_empty_component_stats_bars';
  info: {
    displayName: 'stats-bar';
  };
  attributes: {};
}

export interface FooterLinkColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_columns';
  info: {
    displayName: 'link-column';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.link-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_items';
  info: {
    displayName: 'link-item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.Text;
    open_in_new_tab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String;
  };
}

export interface SectionAboutdesCommittee extends Struct.ComponentSchema {
  collectionName: 'components_section_aboutdes_committees';
  info: {
    displayName: 'committee';
  };
  attributes: {
    Chairmain: Schema.Attribute.Component<'shared.excellency', false>;
    member: Schema.Attribute.Component<'shared.excellency', true>;
    section_subtitle_kh: Schema.Attribute.String & Schema.Attribute.Required;
    section_title_kh: Schema.Attribute.String & Schema.Attribute.Required;
    vice_chairman: Schema.Attribute.Component<'shared.excellency', false>;
  };
}

export interface SectionAboutdesRolesAndResponsibilities
  extends Struct.ComponentSchema {
  collectionName: 'components_section_aboutdes_roles_and_responsibilities';
  info: {
    displayName: 'Roles-and-responsibilities';
    icon: 'briefcase';
  };
  attributes: {
    Role_card: Schema.Attribute.Component<'shared.cards', true>;
    section_subtitle_kh: Schema.Attribute.Text;
    section_title_kh: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionGeneralsecretariatComposition
  extends Struct.ComponentSchema {
  collectionName: 'components_section_generalsecretariat_compositions';
  info: {
    displayName: 'composition';
    icon: 'briefcase';
  };
  attributes: {
    secretary_general: Schema.Attribute.Component<'shared.excellency', false>;
    section_title_kh: Schema.Attribute.String & Schema.Attribute.Required;
    vice_secretary_general: Schema.Attribute.Component<
      'shared.excellency',
      true
    >;
  };
}

export interface SectionGeneralsecretariatTreeStructureSmall
  extends Struct.ComponentSchema {
  collectionName: 'components_section_generalsecretariat_tree_structure_smalls';
  info: {
    displayName: 'tree-Structure-small';
  };
  attributes: {
    bottom_tree: Schema.Attribute.Component<
      'shared.bottom-tree-structure',
      true
    >;
    middle_tree: Schema.Attribute.String & Schema.Attribute.Required;
    section_subtitle_kh: Schema.Attribute.Text & Schema.Attribute.Required;
    section_title_kh: Schema.Attribute.String & Schema.Attribute.Required;
    top_tree: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionProgressframeworkCambodiaIndex
  extends Struct.ComponentSchema {
  collectionName: 'components_section_progressframework_cambodia_indices';
  info: {
    displayName: 'cambodia-index';
  };
  attributes: {};
}

export interface SectionProgressframeworkHexagonInformation
  extends Struct.ComponentSchema {
  collectionName: 'components_section_progressframework_hexagon_informations';
  info: {
    displayName: 'hexagon-information';
  };
  attributes: {};
}

export interface SectionProgressframeworkInternationalIndex
  extends Struct.ComponentSchema {
  collectionName: 'components_section_progressframework_international_indices';
  info: {
    displayName: 'international-index';
  };
  attributes: {};
}

export interface SectionProgressframeworkKpiProgress
  extends Struct.ComponentSchema {
  collectionName: 'components_section_progressframework_kpi_progresses';
  info: {
    displayName: 'kpi-progress';
  };
  attributes: {};
}

export interface SectionProgressframeworkSummarizeState
  extends Struct.ComponentSchema {
  collectionName: 'components_section_progressframework_summarize_states';
  info: {
    displayName: 'summarize-state';
  };
  attributes: {};
}

export interface SectionProgressframeworkTabNavigation
  extends Struct.ComponentSchema {
  collectionName: 'components_section_progressframework_tab_navigations';
  info: {
    displayName: 'tab-navigation';
  };
  attributes: {};
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

export interface SectionCircleOfFramework extends Struct.ComponentSchema {
  collectionName: 'components_section_circle_of_frameworks';
  info: {
    displayName: 'circle-of-framework';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    section_title_kh: Schema.Attribute.String;
  };
}

export interface SectionContact extends Struct.ComponentSchema {
  collectionName: 'components_section_contacts';
  info: {
    displayName: 'contact';
    icon: 'envelop';
  };
  attributes: {};
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

export interface SectionDisplayallNews extends Struct.ComponentSchema {
  collectionName: 'components_section_displayall_news';
  info: {
    displayName: 'DisplayallNews';
    icon: 'layout';
  };
  attributes: {};
}

export interface SectionGoals extends Struct.ComponentSchema {
  collectionName: 'components_section_goals';
  info: {
    displayName: 'Goals';
  };
  attributes: {
    Foundation: Schema.Attribute.Component<'shared.goalpillar', true>;
    Impact: Schema.Attribute.Component<'shared.goalpillar', false>;
    Pillar: Schema.Attribute.Component<'shared.goalpillar', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    Roof: Schema.Attribute.Component<'shared.goalpillar', false>;
    section_subtitle_kh: Schema.Attribute.String;
    section_title_kh: Schema.Attribute.String;
  };
}

export interface SectionHomeFramework extends Struct.ComponentSchema {
  collectionName: 'components_section_home_frameworks';
  info: {
    displayName: 'home-framework';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    section_title_kh: Schema.Attribute.String;
  };
}

export interface SectionNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_section_news_sections';
  info: {
    displayName: 'NewsSection';
  };
  attributes: {
    section_title_kh: Schema.Attribute.String;
  };
}

export interface SectionReducingImpact extends Struct.ComponentSchema {
  collectionName: 'components_section_reducing_impacts';
  info: {
    displayName: 'reducing-impact';
  };
  attributes: {
    center_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    impact_group_text: Schema.Attribute.Component<'shared.impact-group', true>;
    section_description_kh: Schema.Attribute.Text;
    section_title_kh: Schema.Attribute.String;
  };
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

export interface SharedBottomTreeStructure extends Struct.ComponentSchema {
  collectionName: 'components_shared_bottom_tree_structures';
  info: {
    displayName: 'bottom-tree-structure';
  };
  attributes: {
    link: Schema.Attribute.String;
    title_kh: Schema.Attribute.Text;
  };
}

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'cards';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
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

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    label: Schema.Attribute.Text;
  };
}

export interface SharedGoalpillar extends Struct.ComponentSchema {
  collectionName: 'components_shared_goalpillars';
  info: {
    displayName: 'goalpillar';
  };
  attributes: {
    link: Schema.Attribute.String;
    opennewtab: Schema.Attribute.Boolean;
    title: Schema.Attribute.Text;
  };
}

export interface SharedIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'icon';
    icon: 'landscape';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedImpactGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_impact_groups';
  info: {
    displayName: 'impact_group';
  };
  attributes: {
    color: Schema.Attribute.String;
    text_list: Schema.Attribute.Component<'shared.impact-item', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedImpactItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_impact_items';
  info: {
    displayName: 'impact-item';
    icon: 'bold';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface SharedKeyPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_key_points';
  info: {
    displayName: 'keyPoints';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface SharedMainBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_main_banners';
  info: {
    displayName: 'MainBanner';
    icon: 'picture';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    current_page_name_kh: Schema.Attribute.String & Schema.Attribute.Required;
    description_kh: Schema.Attribute.String;
    float_icon: Schema.Attribute.Component<'shared.icon', true>;
    title_kh: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedMaingoalsection extends Struct.ComponentSchema {
  collectionName: 'components_shared_maingoalsections';
  info: {
    displayName: 'maingoalsection';
  };
  attributes: {
    goalcard: Schema.Attribute.Component<'cards.standard-card', true>;
    section_subtitle_kh: Schema.Attribute.String;
    section_title_kh: Schema.Attribute.String;
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

export interface SharedPolicyframework extends Struct.ComponentSchema {
  collectionName: 'components_shared_policyframeworks';
  info: {
    displayName: 'Policyframework';
  };
  attributes: {
    policyframework: Schema.Attribute.Component<'cards.card-richtext', true>;
    section_subtitle_kh: Schema.Attribute.String;
    section_title_kh: Schema.Attribute.String;
  };
}

export interface SharedTreeStructure extends Struct.ComponentSchema {
  collectionName: 'components_shared_tree_structures';
  info: {
    displayName: 'tree-Structure';
  };
  attributes: {
    bottom_tree: Schema.Attribute.Component<
      'shared.bottom-tree-structure',
      true
    >;
    middle_left: Schema.Attribute.String;
    middle_right: Schema.Attribute.String;
    section_title: Schema.Attribute.String & Schema.Attribute.Required;
    section_top_subtitle_kh: Schema.Attribute.Text & Schema.Attribute.Required;
    top_tree: Schema.Attribute.String;
  };
}

export interface SharedVideoplayer extends Struct.ComponentSchema {
  collectionName: 'components_shared_videoplayers';
  info: {
    displayName: 'Videoplayer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    section_title_kh: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.card-richtext': CardsCardRichtext;
      'cards.digital-stat-card': CardsDigitalStatCard;
      'cards.standard-card': CardsStandardCard;
      'empty-component.document-grid': EmptyComponentDocumentGrid;
      'empty-component.stats-bar': EmptyComponentStatsBar;
      'footer.link-column': FooterLinkColumn;
      'footer.link-item': FooterLinkItem;
      'section-aboutdes.committee': SectionAboutdesCommittee;
      'section-aboutdes.roles-and-responsibilities': SectionAboutdesRolesAndResponsibilities;
      'section-generalsecretariat.composition': SectionGeneralsecretariatComposition;
      'section-generalsecretariat.tree-structure-small': SectionGeneralsecretariatTreeStructureSmall;
      'section-progressframework.cambodia-index': SectionProgressframeworkCambodiaIndex;
      'section-progressframework.hexagon-information': SectionProgressframeworkHexagonInformation;
      'section-progressframework.international-index': SectionProgressframeworkInternationalIndex;
      'section-progressframework.kpi-progress': SectionProgressframeworkKpiProgress;
      'section-progressframework.summarize-state': SectionProgressframeworkSummarizeState;
      'section-progressframework.tab-navigation': SectionProgressframeworkTabNavigation;
      'section.banner-section': SectionBannerSection;
      'section.circle-of-framework': SectionCircleOfFramework;
      'section.contact': SectionContact;
      'section.digital-space': SectionDigitalSpace;
      'section.displayall-news': SectionDisplayallNews;
      'section.goals': SectionGoals;
      'section.home-framework': SectionHomeFramework;
      'section.news-section': SectionNewsSection;
      'section.reducing-impact': SectionReducingImpact;
      'section.roadmap-digital-cambodia': SectionRoadmapDigitalCambodia;
      'shared.bottom-tree-structure': SharedBottomTreeStructure;
      'shared.cards': SharedCards;
      'shared.excellency': SharedExcellency;
      'shared.features': SharedFeatures;
      'shared.goalpillar': SharedGoalpillar;
      'shared.icon': SharedIcon;
      'shared.impact-group': SharedImpactGroup;
      'shared.impact-item': SharedImpactItem;
      'shared.key-points': SharedKeyPoints;
      'shared.main-banner': SharedMainBanner;
      'shared.maingoalsection': SharedMaingoalsection;
      'shared.period': SharedPeriod;
      'shared.policyframework': SharedPolicyframework;
      'shared.tree-structure': SharedTreeStructure;
      'shared.videoplayer': SharedVideoplayer;
    }
  }
}
