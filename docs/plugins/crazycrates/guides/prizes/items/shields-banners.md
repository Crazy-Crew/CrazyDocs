---
title: Shields & Banners
description: Examples of how to use color/patterns on shields/banners!

hide_title: false

sidebar_label: Shields & Banners
sidebar_position: 1
---
### How to add color and patterns to your shields and banners:

### Information
Usage: `{Pattern}:{Color}`

RGB: `{Pattern}:{Red},{Green},{Blue}`

[Colors](https://jd.papermc.io/paper/1.21.4/org/bukkit/DyeColor.html)

[Pattern Types](https://jd.papermc.io/paper/1.21.4/org/bukkit/block/banner/PatternType.html)

### Display Items
Set the item to either a `BANNER` or a `SHIELD`. Use the option called `Patterns:` then follow the example below.

#### Example
```yml
1:
 # The name of the shield.
 DisplayName: '<bold><green>Fancy Shield</bold>'
 # The item needs to be shield or banner
 DisplayItem: 'shield'
   # A list of patterns: https://jd.papermc.io/paper/1.21.4/org/bukkit/block/banner/PatternType.html
   # The patterns don't need to be uppercased. you can type them lowercased along with the colors.
   # Patterns have to be laid out in a specific order, otherwise it won't look right.
   # This also applies to the Items section.
 DisplayPatterns:
   - "base:white"
   - "gradient_up:light_gray"
   - "straight_cross:light_blue"
   - "flower:light_blue"
```

### Item: option
If you wish to give players a banner or shield with the colors and patterns on them then they work just like any other item in the `Items:` section.

#### Example
```yml
Items:
  - "Item:shield, base:white, gradient_up:light_gray, straight_cross:light_blue, flower:light_blue"
```

### RGB Example:
This is for if you wish to use a custom color instead of preset ones by Minecraft.

#### Example
```yml
1:
 DisplayName: '<bold><green>Fancy Shield</bold>'
 DisplayItem: 'shield'
 Patterns:
  - 'half_horizontal:255,0,0'
```
```yml
Items:
  - 'Item:shield, half_horizontal:255,0,0'
```
*Note `255,0,0` is red in RGB.