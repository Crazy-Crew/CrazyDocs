---
title: Tipped Arrows
description: Example of how to apply custom potions to tipped arrows!

hide_title: false

sidebar_label: Tipped Arrows
sidebar_position: 2
---
### [A list of potion types](https://jd.papermc.io/paper/1.21.4/org/bukkit/potion/PotionType.html)

### 1. How to make a tipped arrow as a prize item:
```yaml
Items:
 - Item:TIPPED_ARROW:{POTION_EFFECT}, Amount:64, Name:Posion Arrow
```
#### Example
```yaml
Items:
 - Item:TIPPED_ARROW:POISON, Amount:64, Name:Posion Arrow
```