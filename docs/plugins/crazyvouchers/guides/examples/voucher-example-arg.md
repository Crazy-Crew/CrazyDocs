---
title: Voucher Example Arg

hide_title: false

sidebar_label: Voucher Example Arg
sidebar_position: 1
---
```yaml
# FAQ
# Q) How can I deny the player's permissions?
# A) Use your permissions plugin like LuckPerms, You can run /lp user {player} permission set your_permission

# Q) Do I need everything in this config?
# A) No, You can view PlayerHead.yml for an example whereas much as possible can be removed.
voucher:
  # The material.
  item: 'PAPER'
  # The name of the item.
  name: '&bArg Example &3{arg}'
  # The lore of the item.
  lore:
  - '&7Use this voucher to rank up to &c{arg}'
  - '&8(&e!&8) &dRight click to redeem.'
  # The player name
  player: ''
  # If the item should glow or not.
  glowing: true
  # The commands to send.
  commands:
    - 'lp user {player} parent group set {arg}'
  options:
    # The message sent when they right-click it.
    message: '&7Congratulations, you have just ranked up to &6{arg}&7.'
    sound:
      # If the sounds should be enabled.
      toggle: true
      # The volume pitch
      volume: 1.0
      # The sound pitch
      pitch: 1.0
      # The sound or sounds to use.
      # https://jd.papermc.io/paper/1.21.4/org/bukkit/Sound.html
      sounds:
      - 'BLOCK_AMETHYST_CLUSTER_STEP'
```