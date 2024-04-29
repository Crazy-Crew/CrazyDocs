---
id: crazyenchantments-shields-banners
title:  Shields & Banners

hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Shields & Banners
sidebar_position: 1
---
## Usage and info
Usage: `<Pattern>:<Color>`

RGB: `<Pattern>:<Red>,<Green>,<Blue>`

[Colors](https://jd.papermc.io/paper/1.20/org/bukkit/DyeColor.html)

[Pattern Types](https://jd.papermc.io/paper/1.20/org/bukkit/block/banner/PatternType.html)

*Note that the RGB option may not always work due to some internal stuff in MC that doesn't always let every colorwork.

### Display Items
If you wish to add the colors and patterns to your shields and banners this is how you would for the Display Items.
Set the item to either a banner or a shield and then use the option called `Patterns:` and use the option like this.

Example:
```yaml
  Gkitz:
    Hero:
      Display:
        Name: '&a&lFancy Shield'
        Item: 'SHIELD'
        Patterns:
         - 'HALF_HORIZONTAL:RED'
         - 'RHOMBUS_MIDDLE:BLACK'
         - 'STRIPE_TOP:RED'
         - 'STRIPE_BOTTOM:WHITE'
         - 'STRIPE_MIDDLE:BLACK'
         - 'CIRCLE_MIDDLE:WHITE'
```

### Item: option
If you wish to give players a banner or shield with the colors and patterns on them then they work like normal options in the Items: list.

Example:
```yaml
Items:
  - 'Item:Shield, HALF_HORIZONTAL:RED, RHOMBUS_MIDDLE:BLACK, STRIPE_TOP:RED, STRIPE_BOTTOM:WHITE, STRIPE_MIDDLE:BLACK, CIRCLE_MIDDLE:WHITE'
```

### RGB Example
This is for if you wish to use a custom color instead of preset ones by Minecraft.

Example:
```yaml
  Gkitz:
    Hero:
      Display:
        Name: '&a&lFancy Shield'
        Item: 'SHIELD'
        Patterns:
        - 'HALF_HORIZONTAL:255,0,0'
```
```yaml
Items:
  - 'Item:Shield, HALF_HORIZONTAL:255,0,0'
```
*Note `255,0,0` is red in RGB.