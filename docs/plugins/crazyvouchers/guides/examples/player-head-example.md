---
title: Player Head Example

hide_title: false

sidebar_label: Player Head Example
sidebar_position: 2
---
```yaml
voucher:
  # The material.
  item: 'PLAYER_HEAD'
  # The name of the item.
  name: '&cA player head example'
  # The lore of the item.
  lore:
    - '&7Use this voucher to get fancy trims.'
    - '&7&l(&6&l!&7&l) &7Right click to redeem.'
  player: '1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e'
  # Only uncomment this if using HeadDatabase by Arcaniax
  # skull: '61151'
  # If the item should glow or not.
  glowing: true
  # Hide item flags
  flags:
    - 'HIDE_ATTRIBUTES'
    - 'HIDE_ENCHANTS'
  # All options when they right-click it.
  options:
    # The message sent when they right-click it.
    message: '&7Congratulations, you have yourself a fancy head.'
  # The items to give when claiming the voucher.
  items:
    # Only uncomment this is using HeadDatabase by Arcaniax
    #- 'Item:PLAYER_HEAD, Skull:61151, Name:&cA fancy head, Lore:&eA fancy lore,&7with lines, Amount:3, Glowing:true'
    - 'Item:PLAYER_HEAD, Player:1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e, Name:&cA fancy head, Lore:&eA fancy lore,&7with lines, Amount:3, Glowing:true'
```
