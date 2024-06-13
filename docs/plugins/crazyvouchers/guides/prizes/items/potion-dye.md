---
title: Potion Dye
description: Examples of how to dye your potions!

hide_title: false

sidebar_label: Potion Dye
sidebar_position: 6
---
### An example of how to dye your potions!
```yml
  Prizes:
    1:
     DisplayName: '&cAn leather helmet.'
     DisplayItem: 'POTION:GREEN'
     # DisplayItem: 'POTION:133,50,73'
     DisplayAmount: 1
     MaxRange: 100
     Chance: 1
     Items:
     - 'Item:POTION:GREEN'
```
```yml
Items:
 - Item:POTION:GREEN
```
This allows you to dye your potion green.
You have a selection of [colors](https://jd.papermc.io/paper/1.21/org/bukkit/Color.html) to use with this option.

```yml
Items:
 - Item:POTION:133,50,73
```
This allows you to dye your potion any color.

* r = red
* g = green
* b = blue

### RGB! It improves performance /j
You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find any color you want.