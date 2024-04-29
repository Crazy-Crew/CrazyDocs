---
id: crazyvouchers-tipped-arrows
title: Tipped Arrows

hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Tipped Arrows
sidebar_position: 2
---
### [A list of potion types](https://jd.papermc.io/paper/1.20/org/bukkit/potion/PotionType.html)

### 1. How to make a tipped arrow as a prize item:
```yml
items:
 - Item:TIPPED_ARROW:{POTION_EFFECT}, Amount:64, Name:Posion Arrow
```
#### Example
```yml
items:
 - Item:TIPPED_ARROW:POISON, Amount:64, Name:Posion Arrow
```
### 2. How to make a tipped arrow as a display item:
```yml
item: TIPPED_ARROW:{POTION_EFFECT}
```
#### Example
```yml
item: TIPPED_ARROW:FIRE_RESISTANCE
```