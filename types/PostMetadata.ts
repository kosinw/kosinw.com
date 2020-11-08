export interface PostMetadata {
  title?: string;
  slug?: string;
  keywords?: string[];
  summary?: string;
  date?: string | Date;
  [x: string]: any;
}
