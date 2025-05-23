---
title: Default Example

hide_title: false

sidebar_label: Default Example
sidebar_position: 3
---
```yaml
# FAQ
# Q) How can I deny the player's permissions?
# A) Use your permissions plugin like LuckPerms, You can run /lp user {player} permission set your_permission

# Q) Do I need everything in this config?
# A) No, You can view PlayerHead.yml for an example whereas much as possible can be removed.

###################################
#             Items: Options
# Item: <ID:MD> - You can choose the item with its id and meta data.
# Amount: <Number> - Choose how many of the item you get.
# Name: <Name> - The display name that goes on the item.
# Lore: <Line 1>,<Line 2>,<Line 3>,<Line 4> - The lore that will go under the enchantments. Split lines with a ','
# <Enchantment>:<Level> - Choose the enchantment you want to add to the item. You can use the in-game names of the enchantment if you want. Replace the spaces in the name with a "_".
###################################################################
#                         Firework Colors:                        #
#      Aqua, Black, Blue, Fuchsia, Gray, Green, Lime, Maroon,     #
#  Navy, Olive, Orange, Purple, Red, Silver, Teal, White, Yellow  #
###################################################################
voucher:
  # The material.
  item: 'DIAMOND_HELMET'
  # The name of the item.
  name: '&8&l>&7&l>&cTrim Example&7&l<&8&l<'
  # The lore of the item.
  lore:
  - '&7Use this voucher to get fancy trims.'
  - '&7&l(&6&l!&7&l) &7Right click to redeem.'
  player: ''
  # If the item should glow or not.
  glowing: true
  # The commands to send.
  commands:
    - 'msg {player} wow you claimed a voucher.'
    - 'msg {player} #FCFCFDwew multiple commands with &ccolors'
  options:
    # The message sent when they right-click it.
    message: '&7Congratulations, you have yourself fancy trims'
    whitelist-worlds:
      # The message to send.
      message: '{prefix}You are not in any of the whitelisted worlds.'
      # The list of worlds they have to be in.
      worlds:
        - 'world'
        - 'world_nether'
    permission:
      whitelist-permission:
        # If we should check players for this.
        toggle: false
        # If they don't have the permission, send this message.
        message: '{prefix}You do not have the permission {permission} to use this voucher.'
        # If they don't have this permission, they can't use the voucher.
        permissions:
          - 'your-permission'
      blacklist-permission:
        # If we should check players for this.
        toggle: false
        # The message to send to a player if they can't use the voucher.
        message: '{prefix}You already have the permission {permission} so you can''t use this voucher.'
        # If they have this permission, they can't use the voucher.
        permissions:
          - 'your-permission'
    limiter:
      # If this should be enabled.
      toggle: false
      # The max amount of uses for the voucher.
      amount: 10
    # If the player has to confirm claiming the voucher.
    two-step-authentication: false
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
      - 'BLOCK_CHERRY_WOOD_BUTTON_CLICK_ON'
    firework:
      # If the fireworks should be enabled.
      toggle: true
      # The colors of the firework.
      colors: 'Black, Gray, Aqua'

    # If the voucher is edible
    is-edible: false

  # The items to give when claiming the voucher.
  items:
  - 'Item:DIAMOND_HELMET, Damage:50, Trim-Pattern:SENTRY, Trim-Material:QUARTZ, Amount:1, Protection:4, Respiration:1, Aqua_Affinity:3, Unbreaking:3, Thorns:3'
  - 'Item:DIAMOND_CHESTPLATE, Damage:50, Trim-Pattern:DUNE, Trim-Material:REDSTONE, Amount:1, Protection:4, Unbreaking:3, Thorns:3'
  # Random Commands is completely random, It'll run one of these commands.
  random-commands:
    - 'eco give 50000'
    - 'eco give 5000'
    - 'eco give 1000'
    - 'give {player} diamond 5'
  # https://docs.crazycrew.us/crazyvouchers/info/chance-system
  # Lets you run commands with % chances
  chance-commands:
    - '45 eco give {player} 100'
    - '25 eco give {player} 1000'
    - '15 eco give {player} 10000'
    - '10 eco give {player} 100000'
    - '5 eco give {player} 1000000'

  # The durability or damage to the item given in the preview gui.
  display-damage: 50

  # The trim applied to the item in the preview gui.
  display-trim:
    material: QUARTZ
    pattern: SENTRY
```