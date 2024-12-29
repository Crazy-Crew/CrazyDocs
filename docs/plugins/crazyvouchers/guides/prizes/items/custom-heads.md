---
title: Custom Heads
description: Examples of how to use custom heads!

hide_title: false

sidebar_label: Custom Heads
sidebar_position: 3
---
### An example of how to have a custom head as a prize/display item.
```yml
  Prizes:
    1:
      DisplayName: '&cAn example player head.'
      DisplayItem: 'PLAYER_HEAD'
      DisplayAmount: 1
      Player: '1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e'
      MaxRange: 100
      Chance: 5
      Items:
        - 'Item:PLAYER_HEAD, Player:1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e, Amount:1'
```

#### You can also do the following if you don't want a custom texture from https://minecraft-heads.com/
```yml
  Prizes:
    1:
      DisplayName: '&cAn example helmet using Trims.'
      DisplayItem: 'PLAYER_HEAD'
      DisplayAmount: 1
      Player: 'Badbones69'
      MaxRange: 100
      Chance: 5
      Items:
        - 'Item:PLAYER_HEAD, Player:Badbones69, Amount:1'
```
