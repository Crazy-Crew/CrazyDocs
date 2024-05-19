---
title: Tipped Arrows
description: Example of how to apply custom potions to tipped arrows!

hide_title: false

sidebar_label: Tipped Arrows
sidebar_position: 1
---
### [A list of potion types](https://jd.papermc.io/paper/1.20/org/bukkit/potion/PotionType.html)

### An example of how to use it for display items.
```yml
  Prizes:
    1:
     DisplayName: '&cAn arrow with a potion effect.'
     DisplayItem: 'tipped_arrow:{POTION_EFFECT}'
     # DisplayItem: 'tipped_arrow:fire_resistance'
     DisplayAmount: 1
     MaxRange: 100
     Chance: 1
     Items:
     - 'Item:tipped_arrow:{POTION_EFFECT}'
```

### 1. How to make a tipped arrow as a prize item:
```yml
Items:
 - Item:tipped_arrow:{POTION_EFFECT}, Amount:64, Name:Posion Arrow
```
#### Example
```yml
Items:
 - Item:tipped_arrow:poison, Amount:64, Name:Posion Arrow
```
### 2. How to make a tipped arrow as a display item:
```yml
DisplayItem: tipped_arrow:{POTION_EFFECT}
```
#### Example
```yml
DisplayItem: tipped_arrow:fire_resistance
```