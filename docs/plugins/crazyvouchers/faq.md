---
id: crazyvouchers-faq
title: CrazyVouchers Q/A
slug: /crazyvouchers/faq
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: FAQ
---
### 1. Why do colors in console look weird?
#### Add this value to your startup flags!
 * -Dnet.kyori.ansi.colorLevel=truecolor

### 2. Unsupported api-version 1.20  Warning, You will be on your own if you run into any errors if we deem it's because of missing api/new fixes not available on older versions.
 * You need to use [1.20.4](https://papermc.io/) as we do not support legacy versions.
 * You can open the plugin in 7zip, winrar or peazip, nanazip or whatever zip flavor you like and edit the plugin.yml's api-version or simply go to the [modrinth's version tab](https://modrinth.com/plugin/crazyvouchers/versions) and filter by version.

### 3. How do I give permissions to players?
 * Use a plugin such as [LuckPerms](https://luckperms.net), Please do read through their [wiki](https://luckperms.net/wiki)
   * Make sure to check our [Commands](info/commands/permissions) page for updated permissions.

### 4. Is there a way to make a player confirm when they want to redeem a voucher?
 * https://github.com/Crazy-Crew/CrazyVouchers/blob/759eb71eb3acadf87b46aed8c3f997947da70074/paper/src/main/resources/Config.yml#L56

### 5. My player heads aren't working / Can I use player heads?
 * Q1
   * You likely have 2 `player: ''` in your config, One with the url and one empty so the plugin doesn't know what to do.
 * Q2
   * Yes

### 6. There is so much in the [Example.yml](info/examples/voucher-example). Do I need all of that?
 * No
   * You can view [PlayerHead.yml](info/examples/player-head-example) for a version of the voucher where you can remove as much as possible.
