---
title: Permissions
description: A list of commands with updated permissions
---
`/crazyenchantments` can also be run as `/ce` or `/enchanter`.

| Command                                                                         | Permission                       | Default | Description                                                                                                                    |
|---------------------------------------------------------------------------------|----------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------|
| `/tinkerer` (alias `/tinker`)                                                   | `crazyenchantments.tinker`       | true    | Opens up the Tinkerer GUI.                                                                                                     |
| `/tinkerer -p <player>`                                                         | `crazyenchantments.tinker.others` | OP     | Opens the Tinkerer GUI for another player.                                                                                     |
| `/blacksmith` (aliases `/bsmith`, `/bs`)                                        | `crazyenchantments.blacksmith`   | true    | Opens up the Black Smith GUI.                                                                                                  |
| `/blacksmith -p <player>`                                                       | `crazyenchantments.blacksmith.others` | OP | Opens the Black Smith GUI for another player.                                                                                  |
| `/gkitz`                                                                        | `crazyenchantments.gkitz`        | true    | Open the GKitz GUI.                                                                                                            |
| `/gkitz give <kit> [player]`                                                    | `crazyenchantments.gkitz.use`    | OP      | Gives you, or another player, a gkit. The receiving player needs `crazyenchantments.gkitz.<kit>` for that kit.                 |
| `/gkitz reset <kit> <player>`                                                   | `crazyenchantments.gkitz.reset`  | OP      | Reset a players gkit cooldown.                                                                                                 |
| `/ce`                                                                           | `crazyenchantments.gui`          | true    | Opens the main menu GUI.                                                                                                       |
| `/ce help`                                                                      | `crazyenchantments.help`         | true    | Shows all CE commands.                                                                                                         |
| `/ce limit`                                                                     | `crazyenchantments.limit`        | true    | Gives information on the players current enchantment limit.                                                                    |
| `/ce info [enchantment]`                                                        | `crazyenchantments.info`         | OP      | Shows info on all enchantments.                                                                                                |
| `/ce reload`                                                                    | `crazyenchantments.reload`       | OP      | Reloads all the configuration files.                                                                                           |
| `/ce debug`                                                                     | `crazyenchantments.debug`        | OP      | Checks your configuration for enchantments or enchantment types that are missing or broken.                                    |
| `/ce convert`                                                                   | `crazyenchantments.convert`      | OP      | Converts an old-format `Tinker.yml` to the current format. The old file is kept as `Tinker-v1.yml`.                            |
| `/ce fix`                                                                       | `crazyenchantments.fix`          | OP      | Adds default entries to `Enchantments.yml` for any enchantments that are missing from it.                                      |
| `/ce remove <enchantment>`                                                      | `crazyenchantments.remove`       | OP      | Removes an enchantment from the item in your hand.                                                                             |
| `/ce add <enchantment> <level>`                                                 | `crazyenchantments.add`          | OP      | Adds an enchantment to the item in your hand.                                                                                  |
| `/ce spawn [-enchantment <name>/-category <name>] [-world <world>] [-level <#>] [-x <#>] [-y <#>] [-z <#>]` | `crazyenchantments.spawn` | OP | Drops an enchantment book, or a lost book from a category, where you tell it to. The level can be a range such as `1-3`. |
| `/ce scroll <black/white/transmog> <amount> <player>`                           | `crazyenchantments.scroll`       | OP      | Give a player scrolls.                                                                                                         |
| `/ce crystal <amount> <player>`                                                 | `crazyenchantments.crystal`      | OP      | Give a player protection crystals.                                                                                             |
| `/ce slotcrystal <amount> <player>`                                             | `crazyenchantments.slotcrystal`  | OP      | Give a player slot crystals.                                                                                                   |
| `/ce scrambler <amount> <player>`                                               | `crazyenchantments.scrambler`    | OP      | Give a player scramblers.                                                                                                      |
| `/ce dust <destroy/failed/mystery/success> <amount> <player> <percent>`         | `crazyenchantments.dust`         | OP      | Give a player a some magical dust.                                                                                             |
| `/ce book <enchantment> <level> <amount> <player>`                              | `crazyenchantments.book`         | OP      | Give a player enchantment books.                                                                                               |
| `/ce lostbook <category> <amount> <player>` (alias `lb`)                        | `crazyenchantments.lostbook`     | OP      | Give a player lost books.                                                                                                      |
| `/ce bottle <player> <xp> <amount>`                                             | `crazyenchantments.bottle`       | OP      | Give a player a bottle with the specified amount of xp stored.                                                                 |
| `/ce check <player>` (alias `checkenchants`)                                    | `crazyenchantments.check`        | OP      | Loops through all armor that the specified player has and sends the information about what crazy enchantments they are using.  |

:::caution
In 2.8.1, `/ce spawn` reads the `-enchantment`, `-category` and `-world` flags under the wrong names, so it cannot currently drop a book. Use `/ce book` or `/ce lostbook` instead.
:::

## Options
| Option            | Permission                          | Default | Description                                                                                                                                  |
|-------------------|-------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Max Enchantments  | `crazyenchantments.limit.#`         | false   | Replace the # with a number to set the limit for how many enchantments a player can have on the item.                                        |
| Base Enchantments | `crazyenchantments.base-limit.#`    | false   | Replace the # with a number to set base amount for how many enchantments a player can have on the item.                                      |
| GKit Access       | `crazyenchantments.gkitz.<kit>`     | OP      | Replace `<kit>` with the kit name in lowercase to allow a player to claim that gkit.                                                         |
| Admin             | `crazyenchantments.admin`           | false   | Counts as having `crazyenchantments.bypass.aura`, and lets players use the GKitz, Black Smith and Tinkerer buttons in the `/ce` menu. It does not grant the command permissions above. |

## Bypass
| Option              | Permission                                   | Default | Description                                                                                         |
|---------------------|----------------------------------------------|---------|-----------------------------------------------------------------------------------------------------|
| Max Enchantments    | `crazyenchantments.bypass.limit`             | false   | Bypasses the enchantment limit.                                                                     |
| Aura Enchantments   | `crazyenchantments.bypass.aura`              | false   | Bypass all the aura enchantment effects.                                                            |
| Enchant Blacklist   | `crazyenchantments.<enchantment>.deny`       | OP      | Stops players from being able to use an enchant. Replace `<enchantment>` with the enchantment name. Has no effect on operators. |
| Wings Enemy Bypass  | `crazyenchantments.bypass.wings`             | false   | Bypass the enemy detection for the wings enchantment.                                               |
| Gkit Timers Bypass  | `crazyenchantments.bypass.gkitz`             | false   | Bypass the gkit cooldowns, and allows claiming any gkit.                                            |
| GKit Give Bypass    | `crazyenchantments.gkitz.give`               | OP      | When a player with this is given a gkit through `/gkitz give`, the cooldown and kit permission are skipped. |
| Protection Crystals | `crazyenchantments.bypass.protectioncrystal` | false   | Make protection crystals work every time.                                                           |

:::caution
`crazyenchantments.gkitz.<kit>` and `crazyenchantments.<enchantment>.deny` are not registered in `plugin.yml`, so operators have them by default.

`crazyenchantments.<enchantment>.deny` only affects non-operators who are given it, because operators always pass the enchantment check.
:::

## Permissions
| Wildcard                     | Default | Description                                                                                                                                                                         |
|------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `crazyenchantments.player.*` | false   | Gives `crazyenchantments.tinker`, `crazyenchantments.blacksmith`, `crazyenchantments.gkitz`, `crazyenchantments.gui`, `crazyenchantments.limit` and `crazyenchantments.info`.      |
| `crazyenchantments.admin.*`  | false   | Gives `crazyenchantments.admin`, `crazyenchantments.blacksmith.others` and all of the `crazyenchantments.bypass.*` permissions above. It does not include the admin commands.      |
