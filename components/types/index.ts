import data from '../data/data.json';

export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavItem {
  name: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export type LinkType = NavItem;

export interface HeaderData {
  top_bar_color?: string;
  logo: string;
  logo_text: string;
  logo_subtext: string;
  links: LinkType[];
  donate_button_text?: string;
  donate_button_href?: string;
  menu_aria_label: string;
  close_aria_label: string;
}

export interface HeroSectionData {
  eyebrow: string;
  headline_first: string;
  headline_second?: string;
  headline_highlight: string;
  description: string;
  button_text: string;
  button_href: string;
  hero_image: string;
  hero_image_alt: string;
}

export interface FocusAreaItem {
  id: string;
  icon: string;
  icon_color: string;
  icon_bg: string;
  title: string;
  description: string;
  href: string;
}

export interface FocusAreasSectionData {
  badge: string;
  heading_prefix: string;
  heading_highlight: string;
  items: FocusAreaItem[];
}

export interface AboutSectionData {
  badge: string;
  heading_prefix?: string;
  heading_line1?: string;
  heading_line2_prefix?: string;
  heading_highlight: string;
  description: string;
  mission_title: string;
  mission_desc: string;
  badge_years: string;
  badge_text?: string;
  badge_text_line1?: string;
  badge_text_line2?: string;
  image_children?: string;
  image_children_alt?: string;
  image_children_1: string;
  image_children_1_alt?: string;
  image_children_2: string;
  image_children_2_alt?: string;
  image_teacher: string;
  image_teacher_alt: string;
}

export interface CounterItem {
  id: string;
  icon: string;
  icon_color?: string;
  value: string;
  label: string;
}

export interface CountersSectionData {
  title_prefix: string;
  title_highlight: string;
  items: CounterItem[];
}

export interface WhySupportFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhySupportSectionData {
  badge: string;
  heading_prefix: string;
  heading_highlight: string;
  subtitle: string;
  image: string;
  image_alt: string;
  features: WhySupportFeatureItem[];
}

export interface WorkProgramItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  icon_bg: string;
  icon_color: string;
  image: string;
  image_alt: string;
  href: string;
}

export interface OurWorkSectionData {
  badge: string;
  heading_prefix: string;
  heading_highlight: string;
  subtitle: string;
  items: WorkProgramItem[];
}

export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface GallerySectionData {
  badge: string;
  heading_prefix: string;
  heading_highlight: string;
  subtitle: string;
  close_aria_label: string;
  prev_aria_label: string;
  next_aria_label: string;
  images: GalleryImageItem[];
}

export interface CtaFeatureItem {
  title: string;
  icon: string;
}

export interface CtaSectionData {
  badge: string;
  headline_first: string;
  headline_second?: string;
  headline_third?: string;
  headline_highlight: string;
  description: string;
  image: string;
  image_alt: string;
  features: CtaFeatureItem[];
  button_text?: string;
  button_href?: string;
}

export interface TestimonialItem {
  id: string;
  author_name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
  avatar_alt: string;
}

export interface TestimonialsSectionData {
  badge: string;
  heading_prefix: string;
  heading_highlight: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface VolunteerSocialLink {
  platform: string;
  href: string;
}

export interface VolunteerItem {
  id: string;
  name: string;
  role: string;
  image: string;
  image_alt: string;
  socials?: VolunteerSocialLink[];
}

export interface VolunteersSectionData {
  badge: string;
  heading_prefix: string;
  heading_highlight: string;
  subtitle: string;
  items: VolunteerItem[];
}

export interface ContactCardItem {
  id: string;
  icon: string;
  icon_bg?: string;
  icon_color?: string;
  title: string;
  lines?: string[];
  line1?: string;
  line2?: string;
}

export interface ContactFormData {
  card_title: string;
  name_label?: string;
  name_placeholder?: string;
  phone_label?: string;
  phone_placeholder?: string;
  email_label?: string;
  email_placeholder?: string;
  subject_label?: string;
  subject_placeholder?: string;
  program_label?: string;
  program_placeholder?: string;
  program_options?: string[];
  message_label?: string;
  message_placeholder?: string;
  submit_button: string;
  submitting_text?: string;
  success_message?: string;
}

export interface ContactSectionData {
  badge: string;
  heading_prefix: string;
  heading_highlight: string;
  subtitle?: string;
  subtitle_line1?: string;
  subtitle_line2?: string;
  image: string;
  image_alt: string;
  cards: ContactCardItem[];
  form: ContactFormData;
}

export interface FooterProgramItem {
  id: string;
  title: string;
  icon: string;
  href: string;
}

export interface FooterContactItem {
  id: string;
  title: string;
  icon: string;
  lines: string[];
  href?: string;
}

export interface FooterSocialItem {
  platform: string;
  href: string;
}

export interface FooterData {
  logo: string;
  logo_text: string;
  logo_subtext: string;
  tagline: string;
  social_links?: FooterSocialItem[];
  quick_links_title: string;
  quick_links: LinkType[];
  programs_title?: string;
  programs?: FooterProgramItem[];
  contact_title: string;
  contact_items: FooterContactItem[];
  copyright_prefix: string;
  copyright_brand: string;
  copyright_suffix: string;
  copyright_text?: string;
}

export interface BackToTopData {
  aria_label: string;
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface PageMeta {
  title: string;
  pageName: string;
  metadata: {
    title: string;
    description: string;
  };
  components: PageComponent[];
}

export interface SiteSections {
  hero: HeroSectionData;
  focus_areas: FocusAreasSectionData;
  about: AboutSectionData;
  counters: CountersSectionData;
  why_support: WhySupportSectionData;
  our_work: OurWorkSectionData;
  gallery: GallerySectionData;
  cta: CtaSectionData;
  testimonials: TestimonialsSectionData;
  volunteers: VolunteersSectionData;
  contact: ContactSectionData;
}

export interface SitePages {
  home: PageMeta;
}

export interface TemplateComponents {
  pages: SitePages;
  sections: SiteSections;
}

export interface SiteData {
  common: {
    Header: HeaderData;
    Footer: FooterData;
    BackToTop: BackToTopData;
  };
  categories: {
    NonProfitCharity: {
      templateComponents: {
        'template-1': TemplateComponents;
      };
    };
  };
}

export const siteJson: SiteData = data as unknown as SiteData;
export const common = siteJson.common;
export const template =
  siteJson.categories.NonProfitCharity.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;

