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

[Colors](https://jd.papermc.io/paper/1.20/org/bukkit/DyeColor.html)

[Pattern Types](https://jd.papermc.io/paper/1.20/org/bukkit/block/banner/PatternType.html)

### Display Items
Set the item to either a `BANNER` or a `SHIELD`. Use the option called `Patterns:` then follow the example below.

#### Example
```yml
1:
 # The name of the shield.
 DisplayName: '&a&lFancy Shield'
 # The item needs to be SHIELD or BANNER
 DisplayItem: 'SHIELD'
 # The type of pattern you want on the shield.
 Patterns:
  - 'HALF_HORIZONTAL:RED'
  - 'RHOMBUS_MIDDLE:BLACK'
  - 'STRIPE_TOP:RED'
  - 'STRIPE_BOTTOM:WHITE'
  - 'STRIPE_MIDDLE:BLACK'
  - 'CIRCLE_MIDDLE:WHITE'
```

### Item: option
If you wish to give players a banner or shield with the colors and patterns on them then they work just like any other item in the `Items:` section.

#### Example
```yml
Items:
  - 'Item:Shield, HALF_HORIZONTAL:RED, RHOMBUS_MIDDLE:BLACK, STRIPE_TOP:RED, STRIPE_BOTTOM:WHITE, STRIPE_MIDDLE:BLACK, CIRCLE_MIDDLE:WHITE'
```

### RGB Example:
This is for if you wish to use a custom color instead of preset ones by Minecraft.

#### Example
```yml
1:
 DisplayName: '&a&lFancy Shield'
 DisplayItem: 'SHIELD'
 Patterns:
  - 'HALF_HORIZONTAL:255,0,0'
```
```yml
Items:
  - 'Item:Shield, HALF_HORIZONTAL:255,0,0'
```
*Note `255,0,0` is red in RGB.