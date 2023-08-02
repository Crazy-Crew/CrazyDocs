---
id: crazycrates-placeholders
title: Placeholders
slug: /crazycrates/placeholders
hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: Placeholders
---
## Random Number Placeholder:
This placeholder can only be used in commands!

### How to use:
`%random%:min-max`

### Example:
```yml
Commands:
- 'eco give %player% %random%:10000-100000'
```

### 3rd Party Placeholders
_The first table assumes you are using [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) to parse placeholders._

Placeholder|Example|Description
---|---|---
`%crazycrates_<crate>%`|`%crazycrates_galactic%`|Returns the amount of virtual keys a player has.
`%crazycrates_<crate>_physical%`|`%crazycrates_galactic_physical%`|Returns the amount of physical keys a player has in their inventory.
`%crazycrates_<crate>_total%`|`%crazycrates_galactic_total%`|Returns the total amount of virtual AND physical keys a player has.

### [MVdWPlaceholderAPI](https://www.spigotmc.org/resources/11182/) *Only used for [Legacy Versions](https://modrinth.com/plugin/crazycrates/versions?g=1.8.8,1.12.2,1.16.5)*
Placeholder|Example|Description
---|---|---
`{crazycrates_<crate>}`|`{crazycrates_galactic}​`|Returns the amount of virtual keys a player has.
`{crazycrates_<crate>_physical}`|`{crazycrates_galactic_physical}​`|Returns the amount of physical keys a player has in their inventory.
`{crazycrates_<crate>_total}`|`{crazycrates_galactic_total}​`|Returns the total amount of virtual AND physical keys a player has.

*MVdWPlaceholderAPI is needed for the placeholders to work.