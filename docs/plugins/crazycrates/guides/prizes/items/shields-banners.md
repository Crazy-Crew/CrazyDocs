---
title: Shields & Banners
description: Examples of how to use color/patterns on shields/banners!

hide_title: false

sidebar_label: Shields & Banners
sidebar_position: 1
---
### How to add color and patterns to your shields and banners:

[Colors](https://jd.papermc.io/paper/1.21.4/org/bukkit/DyeColor.html)

[Pattern Types](https://jd.papermc.io/paper/1.21.4/org/bukkit/block/banner/PatternType.html)

### Display Items
Set the item to either a `banner` or a `shield`. Use the option called `Patterns:` then follow the example below.

### The new way of doing `Items` for prizes which will eventually be default, You can enable this in the `config.yml`
#### Example
```yaml
    "1":
      # The name of the item to display in the gui.
      DisplayName: '<bold><green>Fancy Shield</bold>'
      # The item needs to be shield or banner
      DisplayItem: 'shield'
      # The amount to display in the gui.
      DisplayAmount: 1
      # The patterns to display on the shield
      DisplayPatterns:
        - "base:white"
        - "gradient_up:light_gray"
        - "straight_cross:light_blue"
        - "flower:light_blue"
      # The lower the number, the less likely to win it.
      Weight: 1.0
      # The player name/texture to display.
      # https://minecraft-heads.com/
      # The new items section
      Items:
        "1":
          # The name of the item.
          name: "<yellow>A pretty shield"
          # The material of the item.
          material: "shield"

          # The amount of the item to give.
          amount: 1
          # Other settings.
          settings:
            # Should the item glow?
            # glowing: false

            # TThe configuration section for patterns, minecraft: is not needed in front of the pattern.
            # A list of enchantments https://jd.papermc.io/paper/1.21.4/io/papermc/paper/registry/keys/BannerPatternKeys.html
            # pattern: color
            patterns:
              # pattern: color
              base: white
              gradient_up: light_gray
              straight_cross: light_blue
              flower: light_blue
              half_horizontal: 255,0,0
```

### This is the current way of doing items, however it no longer receives any new features or changes.
Usage: `{Pattern}:{Color}`

RGB: `{Pattern}:{Red},{Green},{Blue}`

### Item: option
If you wish to give players a banner or shield with the colors and patterns on them then they work just like any other item in the `Items:` section.

#### Example
```yaml
Items:
  - "Item:shield, base:white, gradient_up:light_gray, straight_cross:light_blue, flower:light_blue"
```

### RGB Example:
This is for if you wish to use a custom color instead of preset ones by Minecraft.

#### Example
```yaml
1:
 DisplayName: '<bold><green>Fancy Shield</bold>'
 DisplayItem: 'shield'
 Patterns:
  - 'half_horizontal:255,0,0'
```
```yaml
Items:
  - 'Item:shield, half_horizontal:255,0,0'
```
*Note `255,0,0` is red in RGB.
