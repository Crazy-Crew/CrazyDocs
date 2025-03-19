---
title: Leather Dye
description: Examples of how to dye your leather!

hide_title: false

sidebar_label: Leather Dye
sidebar_position: 5
---
### The new way of doing `Items` for prizes which will eventually be default, You can enable this in the `config.yml`
#### An example of how to dye your leather armor using a solid color!
```yaml
Crate:
  Prizes:
    "1":
      # The name of the item.
      DisplayName: "<red>A green leather helmet."
      # The amount of the item to display.
      DisplayAmount: 1
      # The material of the item.
      DisplayItem: "leather_helmet"
      # Other Settings
      Settings:
        # The color of the item displayed.
        Color: "green"
      # The weight of the item, the lower the weight, the less likely to win it.
      Weight: 5.0
      # All the items to give to the player.
      Items:
        "1":
          # The name of the item.
          name: "<red>A green leather helmet."
          # The material of the item.
          material: "leather_helmet"
          # The amount of the item to give.
          amount: 1
          # Other settings.
          settings:
            # The color of the item given.
            color: "green"
```

#### An example of how to dye your leather armor using rgb!
```yaml
Crate:
  Prizes:
    "1":
      # The name of the item.
      DisplayName: "<red>A green leather helmet."
      # The amount of the item to display.
      DisplayAmount: 1
      # The material of the item.
      DisplayItem: "leather_helmet"
      # Other Settings
      Settings:
        # The color of the item displayed.
        RGB: "133,50,73"
      # The weight of the item, the lower the weight, the less likely to win it.
      Weight: 5.0
      # All the items to give to the player.
      Items:
        "1":
          # The name of the item.
          name: "<red>A green leather helmet."
          # The material of the item.
          material: "leather_helmet"
          # The amount of the item to give.
          amount: 1
          # Other settings.
          settings:
            # The color of the item given.
            rgb: "133,50,73"
```

### This is the current way of doing items, however it no longer receives any new features or changes.
#### An example of how to dye your leather armor!
```yaml
Crate:
  Prizes:
    "1":
      DisplayName: "<red>A green leather helmet."
      DisplayItem: "leather_helmet:green"
      # DisplayItem: "leather_helmet:133,50,73"
      DisplayAmount: 1
      Weight: 1.0
      Items:
       - "Item:{leather_helmet/leather_horse_armor}:green"
```

```yaml
Items:
 - "Item:{leather_helmet/leather_horse_armor}:green"
```
You have a selection of [colors](https://jd.papermc.io/paper/1.21.4/org/bukkit/Color.html) to use with this option.

```yaml
Items:
 - Item:{leather_helmet/leather_horse_armor}:133,50,73
```
This allows you to dye your leather any color you want.

* r = red
* g = green
* b = blue

### RGB! It improves performance /j
You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find any color you want.