---
title: Frequently Asked Questions
description: Questions frequently asked by our users
---
### 1. Why do colors in console look weird?
#### Add this value to your startup flags!
 * -Dnet.kyori.ansi.colorLevel=truecolor

### 2. Why isn't ChatManager working?
If chat manager isn't working please go in console and restart the server and look at the start-up messages, this will tell you if something is wrong. If there are error messages please try and read them yourself to resolve the issue or join the discord server and request for help.

Vault is optional. It is only needed for per-group chat formats, where ChatManager uses Vault (chat + permission services) to look up the player's primary group.

### 3. Why can't my players use any commands or features?
Almost every ChatManager permission node defaults to OP (the grouped `chatmanager.chatradius.all`, `chatmanager.bypass.all`, `chatmanager.commands.all` and `chatmanager.notify.all` nodes default to false), so normal players have none of them until you grant them with your permissions plugin.
 * Common player nodes are `chatmanager.message`, `chatmanager.reply`, `chatmanager.mention`, `chatmanager.mention.receive`, `chatmanager.rules`, `chatmanager.ping`, `chatmanager.toggle.pm`, `chatmanager.toggle.chat` and `chatmanager.toggle.togglementions`.
 * A player needs `chatmanager.mention` to send mentions, and the target needs `chatmanager.mention.receive` to be notified.
 * See [Permissions](/mods/chatmanager/commands/permissions/) for the full list.

### 4. Why isn't chat formatting working?
 * `Chat_Format.Enable` is `false` by default, so turn it on in the config.yml first.
 * Do you have Vault and a permissions plugin like LuckPerms installed?
   * LuckPerms automatically set groups in lowercase so make sure groups in your config.yml are lowercase.
   * LuckPerms works out of the box with the default config.yml so revert changes you made if possible.

### 5. Can I disable any commands?
 * No

### 6. What are the available placeholders?
 * You can find available placeholders at [Placeholders](/mods/chatmanager/guides/placeholders/)

### 7. Why can players use color codes in chat?
 * External plugins might override or have their own color codes in chat.
   * It is best to pick which plugin you want to handle color codes in chat by disabling.
   * You can disable color codes in ChatManager in the config.yml, I cannot say for other plugins.

### 8. Why isn't clear chat working?
 * You likely are using /op or have the bypass permission which means chat won't clear for you.

### 9. Why isn't chat bot working?
 * It was removed.
