---
title: Getting Started
description: Get started with configuring your prizes!

hide_title: false

sidebar_label: Getting Started
sidebar_position: 1
---
### What do I need to do? I've been using the old way of doing Prizes.
- Run the command /crazycrates migrate -mt <insert_migration_type>
   - NewItemFormat
   - CratesDeprecated
- You can specify a crate name by doing /crazycrates migrate -mt <insert_migration_type> -c <crate_name>

### I have a feature request for prizes, Where do I go?
https://github.com/Crazy-Crew/CrazyCrates/issues

### Is there anything I need to know?
- All enchantments are lowercased and reflect the vanilla name, i.e. Bane of Arthropods is bane_of_arthropods
  - [Click Me](https://jd.papermc.io/paper/io/papermc/paper/registry/keys/EnchantmentKeys.html), The value you want is in the `description` field, Make sure to remove `minecraft:`