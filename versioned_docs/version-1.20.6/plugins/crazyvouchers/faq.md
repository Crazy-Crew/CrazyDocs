---
title: FAQ

hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: FAQ
sidebar_position: 2
---
### 1. Why do colors in console look weird?
#### Add this value to your startup flags!
 * -Dnet.kyori.ansi.colorLevel=truecolor

### 2. How do I give permissions to players?
 * Use a plugin such as [LuckPerms](https://luckperms.net), Please do read through their [wiki](https://luckperms.net/wiki)
   * Make sure to check our [Commands](commands/permissions) page for updated permissions.

### 3. Is there a way to make a player confirm when they want to redeem a voucher?
 * https://github.com/Crazy-Crew/CrazyVouchers/blob/e4431f79f5805ac839b992921701d1c305b5bf80/paper/src/main/resources/vouchers/Example.yml#L101

### 4. My player heads aren't working / Can I use player heads?
 * Q1
   * You likely have 2 `player: ''` in your config, One with the url and one empty so the plugin doesn't know what to do.
 * Q2
   * Yes

### 5. There is so much in the [Example.yml](examples/voucher-example). Do I need all of that?
 * No
   * You can view [PlayerHead.yml](examples/player-head-example) for a version of the voucher where you can remove as much as possible.
