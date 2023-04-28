import {
  EmbedAuthor,
  EmbedColor,
  EmbedFooter,
  EmbedImage,
  EmbedProvider,
  EmbedThumbnail,
  EmbedType,
  EmbedVideo,
  IDiscordEmbed,
} from "../typings";

export interface DiscordEmbed extends IDiscordEmbed {}
export class DiscordEmbed implements Partial<IDiscordEmbed> {
  public setTitle(title: string) {
    this.title = title;
    return this;
  }

  public setType(type: EmbedType): this | EmbedType {
    this.type = type;
    return this;
  }

  public setDescription(description: string): this {
    this.description = description;
    return this;
  }

  public setTimestamp(timestamp?: Date | string | number): this {
    this.timestamp = new Date(timestamp ?? Date.now()).toISOString();
    return this;
  }

  public setColor(color: EmbedColor | number): this {
    this.color = color;
    return this;
  }

  public setFooter(options: EmbedFooter | string): this | EmbedFooter {
    if (typeof options === "string") {
      options = {
        text: options,
        icon_url: undefined,
        proxy_icon_url: undefined,
      };
    }
    this.footer = options;
    return this;
  }

  public setImage(options: EmbedImage | string): this | EmbedImage {
    if (typeof options === "string") {
      options = {
        url: options,
        proxy_url: undefined,
        height: undefined,
        width: undefined,
      };
      this.image = options;
      return this;
    }
  }

  public setThumbnail(options: EmbedThumbnail | string): this | EmbedThumbnail {
    if (typeof options === "string") {
      options = {
        url: options,
        proxy_url: undefined,
        height: undefined,
        width: undefined,
      };
    }
    this.thumbnail = options;
    return this;
  }

  public setVideo(options: EmbedVideo | string): this | EmbedVideo {
    if (typeof options === "string") {
      options = {
        url: options,
        proxy_url: undefined,
        height: undefined,
        width: undefined,
      };
    }
    this.video = options;
    return this;
  }

  public setProvider(options: EmbedProvider): this | EmbedProvider {
    this.provider = options;
    return this;
  }

  public setAuthor(options: EmbedAuthor | string): this | EmbedAuthor {
    if (typeof options === "string") {
      options = {
        name: options,
        url: undefined,
        icon_url: undefined,
        proxy_icon_url: undefined,
      };
    }
    this.author = options;
    return this;
  }

  public setFields(options: EmbedFooter[]): this | EmbedFooter[] {
    //@ts-ignore
    this.footer = [options];
    return this;
  }
}
