---
title: Tipped Arrows
description: Example of how to apply custom potions to tipped arrows!

hide_title: false

sidebar_label: Tipped Arrows
sidebar_position: 1
---
### [A list of potion types](https://jd.papermc.io/paper/1.21.4/io/papermc/paper/registry/keys/MobEffectKeys.html)

### The new way of doing `Items` for prizes which will eventually be default, You can enable this in the `config.yml`
```yaml
  # A list of prizes.
  Prizes:
    "1":
      # The name of the item to display in the gui.
      DisplayName: "<red>A tipped arrow with potion effects."
      # The item to display in the gui.
      DisplayItem: "tipped_arrow:{POTION_EFFECT}"
      # Prize display preview settings
      Settings:
        # The custom model data of the item, -1 is disabled.
        Custom-Model-Data: -1
      # The amount to display in the gui.
      DisplayAmount: 1
      # The lower the number, the less likely to win it.
      Weight: 1.0
      # The new items section
      Items:
        "1":
          # The name of the item.
          name: "<yellow>A tipped arrow with multiple effects"
          # The material of the item.
          material: "tipped_arrow"

          # The amount of the item to give.
          amount: 1
          # Other settings.
          settings:
            # Should the item glow?
            # glowing: false

            # The configuration section for potions, minecraft: is not needed in front of the potion.
            # A list of potion effects https://jd.papermc.io/paper/1.21.4/io/papermc/paper/registry/keys/MobEffectKeys.html
            potions:
              absorption: # potion name, must be an exact name.
                # The length of the potion
                duration: 30
                # The strength of the potion
                level: 3
                # Cosmetic settings of the potion
                style:
                  # Should the icon be enabled?
                  icon: true
                  # Should it be ambient?
                  ambient: true
                  # Should potion particles show?
                  particles: true
              poison: # potion name, must be an exact name.
                # The length of the potion
                duration: 30
                # The strength of the potion
                level: 3
                # Cosmetic settings of the potion
                style:
                  # Should the icon be enabled?
                  icon: true
                  # Should it be ambient?
                  ambient: true
                  # Should potion particles show?
                  particles: true
```
### This is the current way of doing items, however it no longer receives any new features or changes.
#### An example of how to use it for display items.
```yaml
  Prizes:
    1:
     DisplayName: "<red>An arrow with a potion effect."
     DisplayItem: "tipped_arrow:{POTION_EFFECT}"
     # DisplayItem: "tipped_arrow:fire_resistance"
     DisplayAmount: 1
     Weight: 1.0
     Items:
     - "Item:tipped_arrow:{POTION_EFFECT}"
```

### 1. How to make a tipped arrow as a prize item:
```yaml
Items:
 - Item:tipped_arrow:{POTION_EFFECT}, Amount:64, Name:Posion Arrow
```
#### Example
```yaml
Items:
 - Item:tipped_arrow:poison, Amount:64, Name:Posion Arrow
```
### 2. How to make a tipped arrow as a display item:
```yaml
DisplayItem: tipped_arrow:{POTION_EFFECT}
```
#### Example
```yaml
DisplayItem: tipped_arrow:fire_resistance
```