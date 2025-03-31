---
title: Beta Crate

hide_title: false

sidebar_label: BetaCrate
---
```yaml
# This is an example of the new crate format.
Crate:
  # The crate type as per usual.
  CrateType: CSGO
  # If the crate shows in the /crates.
  # If the type is QuickCrate/CrateOnTheGo/FireCracker, They will not work as they require a Physical Crate.
  InGUI: true
  # Slot the item is in the GUI.
  Slot: 11
  # Item the crate is in the GUI.
  Item: "diamond"
  # Name of the item in the GUI.
  Name: "<bold><yellow>New Crate</bold>"
  # The preview menu
  Preview:
    # The name of the inventory for the preview menu.
    Name: "<yellow>New Crate Preview"
    # Turn on and off the preview for this crate.
    Toggle: true
  # The settings for the physical key.
  PhysicalKey:
    # Name of the Key.
    Name: "<bold><green>New Crate Key</bold>"
    # The item the key is.
    Item: "lime_dye"
  # A list of prizes.
  Prizes:
    "1":
      # The name of the item to display in the gui.
      DisplayName: "<gold>BadBones69"
      # The item to display in the gui.
      DisplayItem: "player_head"
      # Prize display preview settings
      Settings:
        # The custom model data of the item, -1 is disabled.
        Custom-Model-Data: -1
      # The amount to display in the gui.
      DisplayAmount: 1
      # The lower the number, the less likely to win it.
      Weight: 1.0
      # The player name/texture to display.
      # https://minecraft-heads.com/
      Player: "1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e"
      # The new items section
      Items:
        "1":
          # The name of the item.
          name: "<gold>BadBones69"
          # The material of the item.
          material: "player_head"
          # The amount of the item to give.
          amount: 3
          # Other settings.
          settings:
            # The player name/texture to display.
            # https://minecraft-heads.com/
            player: "1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e"
        "2":
          # The name of the item.
          name: "<red>ryderbelserion"
          # The material of the item.
          material: "player_head"
          # The amount of the item to give.
          amount: 1
          # Other settings.
          settings:
            # The player name/texture to display.
            # https://minecraft-heads.com/
            player: "ryderbelserion"
        "3":
          # The name of the item.
          name: "<red>Super Helmet"
          # The lore of the item.
          lore:
            - "<gray>The helmet of legends."
            - "<red>Batteries not included!"
          # The material of the item.
          material: "diamond_helmet"

          # The configuration section for enchantments, minecraft: is not needed in front of the enchantment.
          # A list of enchantments https://jd.papermc.io/paper/1.21.4/io/papermc/paper/registry/keys/EnchantmentKeys.html
          # enchantment: amount
          enchantments:
            # enchantment: amount
            protection: 4
            thorns: 3
            unbreaking: 2

          # The amount of the item to give.
          amount: 1
          # Other settings.
          settings:
            # Should the item glow?
            # glowing: false

            # Trim Settings.
            trim:
              # The trim pattern of the armor.
              pattern: "sentry"
              # The trim material of the armor.
              material: "redstone"
        "4":
          # The name of the item.
          name: "<yellow>A pretty shield"
          # The material of the item.
          material: "shield"

          # The amount of the item to give.
          amount: 1
          # Other settings.
          settings:
            # Should the item glow?
            # glowing: false

            # TThe configuration section for patterns, minecraft: is not needed in front of the pattern.
            # A list of enchantments https://jd.papermc.io/paper/1.21.4/io/papermc/paper/registry/keys/BannerPatternKeys.html
            # pattern: color
            patterns:
              # pattern: color
              base: white
              gradient_up: light_gray
              straight_cross: light_blue
              flower: light_blue
              half_horizontal: 255,0,0
```