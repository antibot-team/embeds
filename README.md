# 🔷 embeds
 🔷 A module for Discord embeds! Using this module you can send embed data.

## Docs
https://antibot-team.github.io/embeds/
```js
const { DiscordEmbed, EmbedColor } = require("@antibot/embeds");
const embed = new DiscordEmbed()
  .setTitle("Hi")
  .setDescription("This is a very cool embed!")
  .setColor(EmbedColor.BLUE)
  .setFooter({
    text: "https://antibot.xyz",
  });
```