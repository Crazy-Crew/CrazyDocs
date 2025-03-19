---
title: Map Dye
description: Examples of how to dye your maps!

hide_title: false

sidebar_label: Map Dye
sidebar_position: 8
---
### The new way of doing `Items` for prizes which will eventually be default, You can enable this in the `config.yml`
#### An example of how to dye your maps using a solid color!
```yaml
Crate:
  Prizes:
    # The name of the item.
    DisplayName: "<red>A green map."
    # The amount of the item to display.
    DisplayAmount: 1
    # The material of the item.
    DisplayItem: "filled_map"
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
        name: "<red>A green map."
        # The material of the item.
        material: "filled_map"
        # The amount of the item to give.
        amount: 1
        # Other settings.
        settings:
          # The color of the item given.
          color: "green"
```

#### An example of how to dye your maps using rgb!
```yaml
Crate:
  Prizes:
    # The name of the item.
    DisplayName: "<red>An rgb map."
    # The amount of the item to display.
    DisplayAmount: 1
    # The material of the item.
    DisplayItem: "filled_map"
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
        name: "<red>An rgb map."
        # The material of the item.
        material: "filled_map"
        # The amount of the item to give.
        amount: 1
        # Other settings.
        settings:
          # The color of the item given.
          rgb: "133,50,73"
```

### This is the current way of doing items, however it no longer receives any new features or changes.
#### An example of how to dye your maps!
```yaml
  Prizes:
    1:
     DisplayName: '<red>A green map.'
     DisplayItem: 'filled_map:green'
     # DisplayItem: 'filled_map:133,50,73'
     DisplayAmount: 1
     Weight: 1.0
     Items:
     - 'Item:filled_map:green'
```

```yaml
Items:
 - Item:filled_map:GREEN
```
You have a selection of [colors](https://jd.papermc.io/paper/1.21.4/org/bukkit/Color.html) to use with this option.

```yaml
Items:
 - Item:filled_map:133,50,73
```
This allows you to dye your map any color you want.

* r = red
* g = green
* b = blue

### RGB! It improves performance /j
You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find any color you want.