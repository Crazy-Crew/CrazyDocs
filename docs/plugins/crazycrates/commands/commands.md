---
id: crazycrates-commands-v2
title: Permissions
slug: /crazycrates/v2/permissions
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Permissions
---
### Commands and Permissions are changing in the next version of CrazyCrates. Please check back here frequently.
*To make this transition as smooth as possible, You should preemptively create versions of your configs with the new commands*

### What do the changes mean?
* If a player doesn't have the permission, It will simply say `Unknown Command` in chat. ( Trying to change that )
* We adopted a similar system to WorldEdit where instead of `/crazycrates key`, It's now `/crazycrates:key`
 * `crazycrates` is the `group` and `key` is a command in the `group`.

Command|Permission|Description|Default
---|---|---|---
`/crazycrates:key`|`crazycrates.key`|Check the number of keys you have.|op
`/crazycrates:key [player]`|`crazycrates.key-others`|Check the number of keys a player has.|op
`/crazycrates:transfer <crate> <player> <amount>`|`crazycrates.transfer`|Allows players to send virtual keys to another player.|op
`/crazycrates:menu`|`crazycrates.crate-menu`|Opens the primary crate menu.|op
`/crazycrates:help player`|`crazycrates.help`|Shows all player commands for CrazyCrates.|true
`/crazycrates:help admin`|`crazycrates.admin-access`|Shows all admin commands for CrazyCrates.|op
`/crazycrates:additem <crate> <prize>`|`crazycrates.additem`|Add items in-game to a prize in a crate.|op
`/crazycrates:admin`|`crazycrates.admin-access`|Opens the Admin Keys GUI.|op
`/crazycrates:preview <crate> [player]`|`crazycrates.preview`|Opens the preview of a crate for a player.|op
`/crazycrates:debug`|`crazycrates.debug`|Allows you to debug prizes.|op
`/crazycrates:list`|`crazycrates.list`|Displays a list of all crates.|op
`/crazycrates:open <crate>`|`crazycrates.open`|Tries to open a crate for yourself if you have a key.|op
`/crazycrates:open-others <crate> [player]`|`crazycrates.open-others`|Tries to open a crate for a player if they have a key.|op
`/crazycrates:forceopen <crate> [player]`|`crazycrates.force-open`|Opens a crate for a player for free.|op
`/crazycrates:tp <location>`|`crazycrates.teleport`|Teleport to a crate.|op
`/crazycrates:give <physical/virtual> <crate> [amount] [player]`|`crazycrates.give-key`|Give a key(s) to a player to use on a crate.|op
`/crazycrates:giveall <physical/virtual> <crate> [amount]`|`crazycrates.give-all`|Gives all online players keys to use on a crate.|op
`/crazycrates:take <physical/virtual> <crate> [amount] [player]`|`crazycrates.take-key`|Allows you to take keys from a player.|op
`/crazycrates:set <crate>`|`crazycrates.set-menu`|Set a block you are looking at as the specified crate.|op
`/crazycrates:reload`|`crazycrates.reload`|Reloads the configuration and data files.|op
`/crazycrates:convert`|`crazycrates.convert`|Tries to convert supported plugin's crate files into crazy crate's crate files.|op
`/crazycrates:set1/set2`|`crazycrates.schematic-set`|Set position #1 or #2 for when making a new schematic for quadcrates.|op
`/crazycrates:save <schematic file name>`|`crazycrates.schematic-save`|Save the new schematic file to the schematics folder.|op
`/crazycrates:mass-open <amount>`|`crazycrates.mass-open`|Mass opens crates. Defaults to 10 but can be changed in the crate config files.|op
`/crazycrates:give-random <virtual/physical> <amount> <player>`|`crazycrates.give-random-key`|Gives a random key out of all the crates available.|op

# Other
Permission|Description|Default
---|---|---
`crazycrates.exclude-player-give-all`|`Prevents you from getting keys when using giveall.`|false

# Permissions
Wildcard|Description|Default
---|---|---
`crazycrates.players.*`|`Gives access to all player commands.`|false
`crazycrates.admin.*`|`Gives access to all admin commands.`|false
`crazycrates.schematic.*`|`Gives access to all commands relating to schematics.`|false