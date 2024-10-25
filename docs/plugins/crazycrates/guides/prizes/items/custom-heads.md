---
title: Custom Heads
description: Examples of how to use custom heads!

hide_title: false

sidebar_label: Custom Heads
sidebar_position: 3
---
### An example of how to have a custom head as a prize/display item.

#### This requires finding the texture on [minecraft-heads.com](https://minecraft-heads.com/)
```yml
  Prizes:
    1:
      DisplayName: '<red>An example player head using textures.'
      DisplayItem: 'player_head'
      DisplayAmount: 1
      Player: '1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e'
      MaxRange: 100
      Chance: 5
      Items:
        - 'Item:player_head, Player:1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e, Amount:1'
```

#### This requires [HeadDatabase](https://www.spigotmc.org/resources/head-database.14280/) which pulls heads from minecraft-heads in a safe manner.
```yml
  Prizes:
    1:
      DisplayName: '<red>An example player head using headdatabase.'
      DisplayItem: 'player_head'
      DisplayAmount: 1
      Skull: '7129'
      MaxRange: 100
      Chance: 5
      Items:
        - 'Item:player_head, Skull:7129, Amount:1'
```

#### This grabs a player name, and tries to display their skull.
```yml
  Prizes:
    1:
      DisplayName: '<red>An example player head using names.'
      DisplayItem: 'player_head'
      DisplayAmount: 1
      Player: 'ryderbelserion'
      MaxRange: 100
      Chance: 5
      Items:
        - 'Item:player_head, Skull:7129, Amount:1'
```
