---
title: Custom Heads
description: Examples of how to use custom heads!

hide_title: false

sidebar_label: Custom Heads
sidebar_position: 3
---
### An example of how to have a custom head as a prize/display item.
Custom Heads only work on [Paper](https://papermc.io) or [Purpur](https://purpurmc.org) as Purpur is a fork of Paper. We do not support Spigot anymore however Paper ( drop in replacement ) and forks above can be a drop in replacement.

#### Warning: always remember to do some research into forks outside of Paper/Purpur including their configurations
```yml
  Prizes:
    1:
      DisplayName: '<red>An example player head.'
      DisplayItem: 'player_head'
      DisplayAmount: 1
      Player: '1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e'
      MaxRange: 100
      Chance: 5
      Items:
        - 'Item:player_head, Player:1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e, Amount:1'
```

#### This requires [HeadDatabase](https://www.spigotmc.org/resources/head-database.14280/) which pulls heads from minecraft-heads in a safe manner. The previous way heads were done via player name will likely be removed as it's wildly inefficient
```yml
  Prizes:
    1:
      DisplayName: '<red>An example helmet using Trims.'
      DisplayItem: 'player_head'
      DisplayAmount: 1
      Skull: '7129'
      MaxRange: 100
      Chance: 5
      Items:
        - 'Item:player_head, Skull:7129, Amount:1'
```