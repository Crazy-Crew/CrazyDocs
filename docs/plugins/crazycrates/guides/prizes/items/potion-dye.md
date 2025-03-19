---
title: Potion Dye
description: Examples of how to dye your potions!

hide_title: false

sidebar_label: Potion Dye
sidebar_position: 6
---
### The new way of doing `Items` for prizes which will eventually be default, You can enable this in the `config.yml`
#### An example of how to dye your potions using a solid color!
```yaml
Crate:
  Prizes:
    # The name of the item.
    DisplayName: "<red>A green potion."
    # The amount of the item to display.
    DisplayAmount: 1
    # The material of the item.
    DisplayItem: "potion"
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
        name: "<red>A green potion."
        # The material of the item.
        material: "potion"
        # The amount of the item to give.
        amount: 1
        # Other settings.
        settings:
          # The color of the item given.
          color: "green"
```

#### An example of how to dye your potions using rgb!
```yaml
Crate:
  Prizes:
    # The name of the item.
    DisplayName: "<red>An rgb potion."
    # The amount of the item to display.
    DisplayAmount: 1
    # The material of the item.
    DisplayItem: "potion"
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
        name: "<red>An rgb potion."
        # The material of the item.
        material: "potion"
        # The amount of the item to give.
        amount: 1
        # Other settings.
        settings:
          # The color of the item given.
          rgb: "133,50,73"
```

### This is the current way of doing items, however it no longer receives any new features or changes.
#### An example of how to dye your potions!
```yaml
Crate:
  Prizes:
    "1":
      DisplayName: '<red>A potion colored green.'
      DisplayItem: 'potion:green'
      # DisplayItem: 'potion:133,50,73'
      DisplayAmount: 1
      Weight: 1.0
      Items:
       - 'Item:potion:green'
```

```yaml
Items:
 - Item:potion:GREEN
```
You have a selection of [colors](https://jd.papermc.io/paper/1.21.4/org/bukkit/Color.html) to use with this option.

```yaml
Items:
 - Item:potion:133,50,73
```
This allows you to dye your potion any color you want.

* r = red
* g = green
* b = blue

### RGB! It improves performance /j
You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find any color you want.