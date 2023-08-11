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
Command|Permission|Description
---|---|---
`/key`|`crazycrates.key`|Check the number of keys you have.
`/key [player]`|`crazycrates.key-others`|Check the number of keys a player has.
`/crazycrates transfer <crate> <player> <amount>`|`crazycrates.transfer`|Allows players to send virtual keys to another player.
`/crazycrates menu`|`crazycrates.crate-menu`|Opens the primary crate menu.
`/crazycrates help`|`crazycrates.help`|Shows all player commands for CrazyCrates.
`/crazycrates admin-help`|`crazycrates.access`|Shows all admin commands for CrazyCrates.
`/crazycrates additem <crate> <prize>`|`crazycrates.additem`|Add items in-game to a prize in a crate.
`/crazycrates admin`|`crazycrates.access`|Opens the Admin Keys GUI.
`/crazycrates preview <crate> [player]`|`crazycrates.preview`|Opens the preview of a crate for a player.
`/crazycrates debug`|`crazycrates.debug`|Allows you to debug prizes.
`/crazycrates list`|`crazycrates.list`|Displays a list of all crates.
`/crazycrates open <crate>`|`crazycrates.open`|Tries to open a crate for yourself if you have a key.
`/crazycrates open-others <crate> [player]`|`crazycrates.open-others`|Tries to open a crate for a player if they have a key.
`/crazycrates forceopen <crate> [player]`|`crazycrates.force-open`|Opens a crate for a player for free.
`/crazycrates tp <location>`|`crazycrates.teleport`|Teleport to a crate.
`/crazycrates give <Physical/Virtual> <crate> [amount] [player]`|`crazycrates.give-key`|Give a key(s) to a player to use on a crate.
`/crazycrates giveall <Physical/Virtual> <crate> [amount]`|`crazycrates.give-all`|Gives all online players keys to use on a crate.
`/crazycrates take <Physical/Virtual> <crate> [amount] [player]`|`crazycrates.take-key`|Allows you to take keys from a player.
`/crazycrates set <crate>`|`crazycrates.set-menu`|Set a block you are looking at as the specified crate.
`/crazycrates reload`|`crazycrates.reload`|Reloads the configuration and data files.
`/crazycrates convert`|`crazycrates.convert`|Tries to convert supported plugin's crate files into crazy crate's crate files.
`/crazycrates set1/set2`|`crazycrates.schematic-set`|Set position #1 or #2 for when making a new schematic for quadcrates.
`/crazycrates save <schematic file name>`|`crazycrates.schematic-save`|Save the new schematic file to the schematics folder.
`/crazycrates mass-open <amount>`|`crazycrates.mass-open`|Mass opens crates. Defaults to 10 but can be changed in the crate config files.
`/crazycrates give-random <virtual/physical> <amount> <player>`|`crazycrates.give-random-key`|Gives a random key out of all the crates available.

# Other
Permission|Description
---|---
`crazycrates.exclude-player-give-all`|`Prevents you from getting keys when using giveall.`

# Permissions
Wildcard|Description
---|---
`crazycrates.players.*`|`Gives access to all player commands.`
`crazycrates.admin.*`|`Gives access to all admin commands.`
`crazycrates.schematic.*`|`Gives access to all commands relating to schematics.`