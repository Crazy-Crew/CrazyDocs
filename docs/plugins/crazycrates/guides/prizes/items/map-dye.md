---
title: Map Dye
description: Examples of how to dye your maps!

hide_title: false

sidebar_label: Map Dye
sidebar_position: 8
---
### An example of how to dye your maps!
```yml
  Prizes:
    1:
     DisplayName: '<red>An map colored green.'
     DisplayItem: 'filled_map:green'
     # DisplayItem: 'filled_map:133,50,73'
     DisplayAmount: 1
     MaxRange: 100
     Chance: 1
     Items:
     - 'Item:filled_map:green'
```

```yml
Items:
 - Item:{filled_map}:GREEN
```
You have a selection of [colors](https://jd.papermc.io/paper/1.20.6/org/bukkit/Color.html) to use with this option.

```yml
Items:
 - Item:{filled_map}:133,50,73
```
This allows you to dye your map any color you want.

* r = red
* g = green
* b = blue

### RGB! It improves performance /j
You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find any color you want.