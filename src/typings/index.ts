/**
 * https://discord.com/developers/docs/resources/channel#embed-object
 */
export enum EmbedType {
  /**
   * RICH
   * generic embed rendered from embed attributes
   * @returns string
   */
  RICH = "rich",
  /**
   * IMAGE
   * image embed
   * @returns string
   */
  IMAGE = "image",
  /**
   * vidoe embed
   * @returns string
   */
  VIDEO = "video",
  /**
   * gif
   * animated gif image embed rendered as a video embed
   * @returns string
   */
  GIF = "gifv",
  /**
   * article
   * article embed
   * @returns string
   */
  ARTICLE = "article",
  /**
   * link
   * link embed
   * @returns string
   */
  LINK = "link",
}

export enum EmbedColor {
  RED = 0xff0000,
  GREEEN = 0x00ff00,
  BLUE = 0x00ff00,
  YELLOW = 0x00ff00,
  PURPLE = 0xff00ff,
  ORANGE = 0xff00ff,
  TEAL = 0xff00ff,
  MAGENTA = 0xff00ff,
}
export interface EmbedFooter {
  /**
   * text
   * footer text
   * @returns string
   */
  text: string;
  /**
   * icon_url
   * url of footer icon (only supports http(s) and attachments)
   * @returns string
   */
  icon_url?: string;
  /**
   * proxy_icon_url
   * a proxied url of footer icon
   * @returns string
   */
  proxy_icon_url?: string;
}
export interface EmbedImage {
  /**
   * url
   * source url of image (only supports http(s) and attachments)
   * @returns string
   */
  url: string;
  /**
   * proxy_url
   * a proxied url of the image
   * @returns string
   */
  proxy_url?: string;
  /**
   * height
   * height of image
   * @returns number
   */
  height?: number;
  /**
   * width
   * width of image
   * @returns number
   */
  width?: number;
}
export interface EmbedThumbnail {
  /**
   * url
   * source url of image (only supports http(s) and attachments)
   * @returns string
   */
  url: string;
  /**
   * proxy_url
   * a proxied url of the image
   * @returns string
   */
  proxy_url?: string;
  /**
   * height
   * height of image
   * @returns number
   */
  height?: number;
  /**
   * width
   * width of image
   * @returns number
   */
  width?: number;
}
export interface EmbedVideo {
  /**
   * url
   * source url of video
   * @returns string
   */
  url?: string;
  /**
   * proxy_url
   * a proxied url of the video
   * @returns string
   */
  proxy_url?: string;
  /**
   * height
   * height of video
   * @returns number
   */
  height?: number;
  /**
   * width
   * width of video
   * @returns number
   */
  width?: number;
}
export interface EmbedProvider {
  /**
   * name
   * name of provider
   * @returns string
   */
  name?: string;
  /**
   * url
   * url of provider
   * @returns string
   */
  url?: string;
}
export interface EmbedAuthor {
  /**
   * name
   * name of author
   * @returns string
   */
  name: string;
  /**
   * url
   * url of author (only supports http(s))
   */
  url?: string;
  /**
   * icon_url
   * url of author icon (only supports http(s) and attachments)
   * @returns string
   */
  icon_url?: string;
  /**
   * proxy_icon_url
   * a proxied url of author icon
   * @returns string
   */
  proxy_icon_url?: string;
}
export interface EmbedField {
  /**
   * name
   * name of the field
   * @returns string
   */
  name: string;
  /**
   * value
   * value of the field
   * @returns string
   */
  value: string;
  /**
   * inline
   * whether or not this field should display inline
   * @returns boolean
   */
  inline?: boolean;
}
export interface IDiscordEmbed {
  /**
   * title
   * title of embed
   * @returns string
   */
  title?: string;
  /**
   * type
   * type of embed(always "rich" for webhook embeds)
   * @returns EmbedType
   */
  type?: EmbedType;
  /**
   * description
   * description of embed
   * @returns
   */
  description?: string;
  /**
   * url
   * url of embed
   * @returns string
   */
  url?: string;
  /**
   * timestamp
   * timestamp fo embed content
   * @returns string
   */
  timestamp?: string | Date;
  /**
   * color
   * color code of the embed
   * @returns number
   */
  color?: EmbedColor | number;
  /**
   * footer
   * embed footer object
   * @returns EmbedFooter
   */
  footer?: EmbedFooter;
  /**
   * image
   * embed image object
   * @returns EmbedImage
   */
  image?: EmbedImage;
  /**
   * thumbnail
   * embed thumbnail object
   * @returns EmbedThumbnail
   */
  thumbnail?: EmbedThumbnail;
  /**
   * video
   * embed video object
   * @returns EmbedVideo
   */
  video?: EmbedVideo;
  /**
   * provider
   * embed provider object
   * @returns EmbedProvider
   */
  provider?: EmbedProvider;
  /**
   * author
   * embed author object
   * @returns EmbedAuthor
   */
  author?: EmbedAuthor;
  /**
   * fields
   * array of embed field objects
   * @returns EmbedField
   */
  fields?: EmbedField[];
}
