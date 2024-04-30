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

#### An example of how to give it as a prize.
```yml
Items: # Give any item you want to the winning player & with a custom texture.
 - 'Item:PLAYER_HEAD, Player:https://textures.minecraft.net/texture/1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e, Amount:1'
```

```yml
Items: # Give any item you want to the winning player & with a custom texture.
 - 'Item:PLAYER_HEAD, Player:Badbones69, Amount:1
```