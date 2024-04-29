---
id: crazyenchantments-permissions
title: Permissions

hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Permissions
sidebar_position: 3
---
| Command                                                          | Permission                                                              | Description                                                                                          |
|------------------------------------------------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `/tinker`                                                        | `crazyenchantments.tinker`                                              | Opens up the Tinkerer GUI.                                                                           |
| `/blacksmith`                                                    | `crazyenchantments.blacksmith`                                          | Opens up the Black Smith GUI.                                                                        |
| `/gkitz`                                                         | `crazyenchantments.access` **Dev builds use `crazyenchantments.gkitz`** | Open the GKitz GUI.                                                                                  |
| `/gkitz <kit>`                                                   | `crazyenchantments.gkitz.<gkit>`                                        | Gives you a gkit.                                                                                    |
| `/gkitz <kit> <player>`                                          | `crazyenchantments.gkitz.give`                                          | Gives another player a gkit.                                                                         |
| `/gkitz reset <kit> [player]`                                    | `crazyenchantments.reset`                                               | Reset a players gkit cooldown.                                                                       |
| `/ce`                                                            | `crazyenchantments.gui`                                                 | Opens the main menu GUI.                                                                             |
| `/ce help`                                                       | `crazyenchantments.access`                                              | Shows all CE commands.                                                                               |
| `/ce limit`                                                      | `crazyenchantments.limit`                                               | Gives information on the players current enchantment limit.                                          |
| `/ce info [enchantment]`                                         | `crazyenchantments.info`                                                | Shows info on all enchantments.                                                                      |
| `/ce reload`                                                     | `crazyenchantments.reload`                                              | Reloads all the configuration files.                                                                 |
| `/ce remove <enchantment>`                                       | `crazyenchantments.remove`                                              | Removes an enchantment from the item in your hand.                                                   |
| `/ce add <enchantment> [level]`                                  | `crazyenchantments.add`                                                 | Adds an enchantment to the item in your hand.                                                        |
| `/ce spawn <enchantment> [Level:#/World:<world>/X:#/Y:#/Z:#]`    | `crazyenchantments.spawn`                                               | Drops an enchantment book where you tell it to.                                                      |
| `/ce scroll <black/white/transmog> [amount] [player]`            | `crazyenchantments.scroll`                                              | Give a player scrolls.                                                                               |
| `/ce crystal [amount] [player]`                                  | `crazyenchantments.crystal`                                             | Give a player protection crystals.                                                                   |
| `/ce scrambler [amount] [player]`                                | `crazyenchantments.scrambler`                                           | Give a player scramblers.                                                                            |
| `/ce dust <success/destroy/mystery> [amount] [player] [percent]` | `crazyenchantments.dust`                                                | Give a player a some magical dust.                                                                   |
| `/ce book <enchantment> [level] [amount] [player]`               | `crazyenchantments.book`                                                | Give a player enchantment books.                                                                     |
| `/ce book <enchantment> [minlevel-maxlevel] [amount] [player]`   | `crazyenchantments.book`                                                | Gives a player an enchantment book with a random level from a set range.                             |
| `/ce lostbook <category> [amount] [player]`                      | `crazyenchantments.lostbook`                                            | Give a player lost books.                                                                            |
| `/ce give [player] [data]`                                       | `crazyenchantments.give`                                                | Give a player and item with crazy enchantments.                                                      |
| `/ce bottle [player] [storedAmount] [amount]`                                   | `crazyenchantments.give`                                                | Give a player a bottle with the specified amount stored.                                             |
| `/ce updateenchants`                                             | `crazyenchantments.updateenchants`                                      | Iterates through the lore of the item in your main hand and updates how the enchantments are stored. |

## Options
| Option            | Permission                       | Description                                                                                             |
|-------------------|----------------------------------|---------------------------------------------------------------------------------------------------------|
| Sign Shops        | `crazyenchantments.sign`         | Allows the player to make sign shops.                                                                   |
| Max Enchantments  | `crazyenchantments.limit.#`      | Replace the # with a number to set the limit for how many enchantments a player can have on the item.   |
| Base Enchantments | `crazyenchantments.base-limit.#` | Replace the # with a number to set base amount for how many enchantments a player can have on the item. |
| All Commands      | `crazyenchantments.admin`        | Allows you to access all commands.                                                                      |

## Bypass
| Option              | Permission                                   | Description                                           |
|---------------------|----------------------------------------------|-------------------------------------------------------|
| Max Enchantments    | `crazyenchantments.bypass.limit`             | Bypasses the enchantment limit.                       |
| Aura Enchantments   | `crazyenchantments.bypass.aura`              | Bypass all the aura enchantment effects.              |
| Blast Enchantment   | `crazyenchantments.blast.use`                | Allows you to use Blast.                              |
| Enchant Blacklist   | `crazyenchantments.<enchantmentName>.deny`   | Stops players from being able to use enchants.        |
| Wings Enemy         | `crazyenchantments.bypass.wings`             | Bypass the enemy detection for the wings enchantment. |
| Gkit Timers         | `crazyenchantments.bypass.gkitz`             | Bypass the gkit cooldowns.                            |
| Protection Crystals | `crazyenchantments.bypass.protectioncrystal` | Make protection crystals work every time.             |

## Permissions
| Wildcard                     | Description                                                                                                       |
|------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `crazyenchantments.player.*` | `Gives access to all player based permissions including the ability to use signs with a limit of 3 enchantments.` |
| `crazyenchantments.admin.*`  | `Gives access to all admin based permissions including bypasses.`                                                 |
