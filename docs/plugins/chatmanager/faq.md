---
id: chatmanager-faq
title: ChatManager Q/A
slug: /chatmanager/faq
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: FAQ
---
### 1. Why do colors in console look weird?
#### Add this value to your startup flags!
 * -Dnet.kyori.ansi.colorLevel=truecolor

### 2. Why isn't ChatManager working?
If chat manager isn't working please go in console and restart the server and look at the start-up messages, this will tell you if something is wrong. If there are error messages please try and read them yourself to resolve the issue to join the discord server and request for help.

The most common causes of this problem could be caused by not having Vault on your server. Vault is a dependency and is required to use chat manager.

### 3. Why isn't chat formatting working?
 * Do you have a permissions plugin like LuckPerms installed?
   * LuckPerms automatically set groups in lowercase so make sure groups in your config.yml are lowercase.
   * LuckPerms works out of the box with the default config.yml so revert changes you made if possible.

### 4. Can I disable any commands?
 * No

### What are the available placeholders?
 * You can find available placeholders at [Placeholders](info/placeholders)

### Why can players use color codes in chat?
 * External plugins might override or have their own color codes in chat.
   * It is best to pick which plugin you want to handle color codes in chat by disabling.
   * You can disable color codes in ChatManager in the config.yml, I cannot say for other plugins.

### Why isn't clear chat working?
 * You likely are opped or have the bypass permission which means chat won't clear for you.

### Why isn't chat bot working?
 * It was removed.