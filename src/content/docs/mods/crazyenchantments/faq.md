---
title: Frequently Asked Questions
description: Questions frequently asked by our users
---
### 1. Why do my enchantments no longer have colour?
Since version 2.0.0, the use of `Color:` and `BookColor:` have been removed. Instead, you now have to edit the `Name:`.

### 2. What is required to use this plugin?
Take a read on [permissions](/mods/crazyenchantments/commands/permissions/#options).

We recommend using [LuckPerms](https://luckperms.net/) with our plugin as well as [Vault](https://www.spigotmc.org/resources/vault.34315/).

### 3. Plugin wont load | Internal Error
- Is the plugin up to date?
  - Check the modrinth page: https://modrinth.com/plugin/crazyenchantments/versions
- Are you using the correct plugin version?
  - Run the command `/version crazyenchantments` to get the version.
- Is the server type supported?
  - We only guaranteed it to work on Paper.
- Is the server version still supported?
  - Supported server versions are 26.X.X and above, with Java 25.

### 4. Do I need any plugins to run this?
Check out our [plugin support](/mods/crazyenchantments/misc/plugin-support/) page.

### 5. How do I give myself money?
Use an economy plugin that hooks into [Vault](https://www.spigotmc.org/resources/vault.34315/) such as [EssentialsX](https://modrinth.com/plugin/essentialsx) which is considered one example.

[Let Me Google That For You](https://letmegooglethat.com/?q=economy+plugins+spigotmc)

### 6. How can I limit enchantments on items?
Add the permissions `crazyenchantments.limit.5` and `crazyenchantments.base-limit.1` to a group or user with a permissions plugin. `5` and `1` can be replaced with any number.    
Alternatively, you can set the limits in `config.yml` under `Settings.EnchantmentOptions.Limit`: set `Check-Perms: true`, then change `Default-Limit` and `Default-Base-Limit`. ([v2.3+](https://github.com/Crazy-Crew/CrazyEnchantments/commit/b32c0e9dcabc977d2c73ad503f35ed925a848434))    
You can use `crazyenchantments.bypass.limit` to bypass the limit.     
[More Info](/mods/crazyenchantments/guides/features/). Make sure to read the section on slot crystals.

### 7. Is the rage enchant spamming chat?
Try out `Rage-Boss-Bar: true` in config.yml or set the message to ''.

### 8. What versions can I use?
- 2.0.0 will work with all builds after.
- 1.9.9.4-rc was a test build and is not compatible with any other builds.
- 1.9.9.3 items and below will not work on newer versions.
  - `/ce updateenchants` could be used to convert enchanted items only, but it has since been removed. `/ce convert` only converts `Tinker.yml` to the current format, not items.
- Check the [modrinth versions tab](https://modrinth.com/plugin/crazyenchantments/versions) for server version compatability.

### 9. Where is the API?
The last published API, `crazyenchantments-paper-api` 2.5, is from August 2024, and the current plugin does not publish an API. See the [Developer API](/mods/crazyenchantments/guides/api/intro/) page for details.

### 10. How do I add my own custom enchantments?
This is not possible unless you have extensive knowledge of Bukkit/Spigot plugin development and Java. If you hold both, you can get acquainted with our [codebase](https://github.com/Crazy-Crew/CrazyEnchantments) and [API](/mods/crazyenchantments/guides/api/intro/) to develop your own enchantments.

If you have seen someone make use of CrazyEnchantments configurations to make their own custom enchantments, they would have been using an extremely outdated version that allowed for such configurations. We no longer support custom enchantment creation through configurations alone for multiple reasons. If you do not know how to program, it is recommended that you find someone to commission.

### 11. How do I add blocks to blast?
Add the item to `BlockList.yml`.
