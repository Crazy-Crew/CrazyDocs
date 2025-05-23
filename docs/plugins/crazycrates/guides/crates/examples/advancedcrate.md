---
title: Advanced Crate

hide_title: false

sidebar_label: AdvancedCrate
---
```yaml
Crate:
  # https://docs.crazycrew.us/docs/plugins/crazycrates/misc/crate-types

  # Make sure to check out the wiki for anything not explained here.
  # https://docs.crazycrew.us/docs/category/crazycrates

  # See CosmicCrate.yml or CasinoCrate.yml to see how the Cosmic/Casino CrateType works.
  CrateType: CSGO
  # Starting amount of keys when the player 1st joins.
  StartingKeys: 0
  # The amount of keys required to use the crate.
  RequiredKeys: 10
  # Max amount of crates that can be opened at once using /crates mass-open
  Max-Mass-Open: 10
  # If the crate shows in /crates.
  # If the type is QuickCrate/CrateOnTheGo/FireCracker, They will not work as they require a Physical Crate.
  InGUI: true
  # Slot the item is in the GUI.
  Slot: 13
  # Enables/Disables the Broadcasts message when they open a crate.
  OpeningBroadCast: true
  # Message that is broadcast when opening the crate.
  BroadCast: "%prefix%<bold><gold>%player%</bold><reset> <gray>is opening a <bold><light_purple>Advanced Crate.</bold>"
  # This section is related to commands opening when a crate is opened.
  opening-command:
    # If the commands should be sent or not.
    toggle: false
    # The commands to run when the crate opens.
    # Supports all placeholderapi placeholders
    # Supports %prefix which returns our prefix, %player% which uses the player name
    commands:
      - "put your command here."
  sound:
    # The sound options when the animation is cycling.
    cycle-sound:
      # If sound should be enabled or not.
      toggle: true
      # The type of sound to use. Custom sounds from texture packs are supported!
      # https://minecraft.wiki/w/Sounds.json#Java_Edition_values
      value: "block.note_block.xylophone"
      # The volume of the pitch.
      volume: 1.0
      # The speed of the sound.
      pitch: 1.0
    # The sound options when an item is clicked.
    click-sound:
      # If sound should be enabled or not.
      toggle: true
      # The type of sound to use. Custom sounds from texture packs are supported!
      # https://minecraft.wiki/w/Sounds.json#Java_Edition_values
      value: "ui.button.click"
      # The volume of the pitch.
      volume: 1.0
      # The speed of the sound.
      pitch: 1.0
    # The sound options when a crate ends.
    stop-sound:
      # If sound should be enabled or not.
      toggle: true
      # The type of sound to use. Custom sounds from texture packs are supported!
      # https://minecraft.wiki/w/Sounds.json#Java_Edition_values
      value: "entity.player.levelup"
      # The volume of the pitch.
      volume: 1.0
      # The speed of the sound.
      pitch: 1.0
  # A default message if the prize doesn't have any Messages
  # i.e. Messages: [] or the value isn't there.
  Prize-Message:
    - "<gray>You have won <red>%reward% <gray>from <red>%crate%."
  # A list of commands to run by default on every prize.
  # If you do not want these commands to run, set this to []
  Prize-Commands: []
  # Global Settings
  Settings:
    # Broadcast a message to the server
    Broadcast:
      # If the messages should be sent.
      Toggle: false
      # The messages to broadcast.
      Messages:
        - "<red>%player% won the prize <yellow>%reward%."
      # If the player has this permission, they don't get the broadcast.
      Permission: ""
    # Settings related to rewards.
    Rewards:
      # Should a yes/no popup be made, to ask if they want to keep the prize?
      Re-Roll-Spin: false
      # Should there be a limit to how many times they can re-roll?
      Permission:
        Toggle: false
        # This will define how many permissions will be registered to the server per crate.
        # i.e. crazycrates.respin.crate_name.1-20
        # It will simply register multiple permissions, so it shows up in things like LuckPerms.
        Max-Cap: 20
  # Item the crate is in the GUI
  Item: "chest"
  # The custom model data of the item, -1 is disabled.
  Custom-Model-Data: -1
  # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
  # Set this to blank for it to do nothing.
  Model:
    # The namespace i.e. nexo
    Namespace: ""
    # The id i.e. emerald_helmet
    Id: ""
  # If the crate in the main /cc GUI is glowing or not.
  Glowing: false
  # Name of the item in the GUI.
  Name: "<bold><light_purple>Advanced Crate</bold>"
  # The lore of the item in the GUI.
  Lore:
    - "<gray>This crate contains strange objects."
    - "<gray>You have <gold>%keys% keys <gray>to open this crate with."
    - "<gray>You have opened this crate: <gold>%crate_opened% times"
    - "<gray>(<yellow>!<gray>) Right click to view rewards."
  Preview:
    # The name of the inventory for the preview menu.
    Name: "<light_purple>Advanced Crate Preview"
    # Turn on and off the preview for this crate.
    Toggle: true
    # How many lines should the preview be? You can use 1-6.
    ChestLines: 6
    Glass:
      # Turn the glass border in the preview on and off.
      Toggle: true
      # The name of the border item.
      Name: " "
      # The item that shows in the border. Can be glass or any other item.
      Item: "gray_stained_glass_pane"
      # The custom model data of the item, -1 is disabled.
      Custom-Model-Data: -1
      # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
      # Set this to blank for it to do nothing.
      Model:
        # The namespace i.e. nexo
        Namespace: ""
        # The id i.e. emerald_helmet
        Id: ""
  PhysicalKey:
    # Name of the Key.
    Name: "<bold><light_purple>Advanced Crate Key</bold>"
    # Lore of the Key.
    Lore:
      - "<gray>A special Key"
      - "<gray>For a special Crate."
    # The item the key is.
    Item: "red_dye"
    # The custom model data of the item, -1 is disabled.
    Custom-Model-Data: -1
    # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
    # Set this to blank for it to do nothing.
    Model:
      # The namespace i.e. nexo
      Namespace: ""
      # The id i.e. emerald_helmet
      Id: ""
    # Makes the key look enchanted.
    Glowing: true
  # Settings for the holograms.
  Hologram:
    # Toggle on and off the holograms for the crates.
    Toggle: true
    # The height of the hologram above the crate.
    Height: 1.5
    # The distance the hologram can be seen.
    Range: 8
    # How often should the hologram update? -1 is disabled.
    Update-Interval: -1
    # The background color of the hologram. It uses hex colors. This only works with CMI/FancyHolograms
    # Set the color to transparent if you don't want any color.
    Color: "transparent"
    # The message that will be displayed above the crate.
    # Note: MiniMessage or Color Codes being supported is depending on the 'holograms' plugin.
    Message:
      - "<bold><light_purple>Advanced Crate</bold>"
  # All the prizes that can be obtained in the Crate.
  # This is a slightly more advanced version. If you want simple!
  # See the CrateExample.yml for a more simple crate.
  Prizes:
    "1":
      # The name of the item to display in the gui.
      DisplayName: "<bold><dark_red>Warlord's Set</bold>"
      # The item to display in the gui.
      DisplayItem: "netherite_helmet"
      # Prize display preview settings
      Settings:
        # The custom model data of the item, -1 is disabled.
        Custom-Model-Data: -1
        # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
        # Set this to blank for it to do nothing.
        Model:
          # The namespace i.e. nexo
          Namespace: ""
          # The id i.e. emerald_helmet
          Id: ""
      # The enchants on the item.
      DisplayEnchantments:
        - "protection:5"
        - "unbreaking:3"
      # https://docs.crazycrew.us/docs/plugins/crazycrates/guides/prizes/items/armor-trim
      DisplayTrim:
        # The list of materials to use can be found on the link above
        Material: "redstone"
        # The list of patterns to use can be found on the link above
        Pattern: "sentry"
      # The amount to display in the gui.
      DisplayAmount: 1
      # The lore of the item.
      DisplayLore:
        - "<gray>Win the warlord's set."
        - "<bold><gold>Chance: <red>40%</bold>"
      # The lower the number, the less likely to win it.
      Weight: 40.0
      # A list of commands to run when they roll this prize.
      Commands:
        # This adds the blacklist permission to the player when they win the prize,
        # After this, they will no longer be able to use this prize.
        - "lp user %player% permission set crazycrates.blacklist.warlord"
      # The list of items to give.
      Items:
        - "Item:netherite_helmet, Amount:1, Damage:25, Trim-Pattern:sentry, Trim-Material:redstone, Name:<bold><dark_red>Warlord's Helmet</bold>, protection:5, unbreaking:3"
        - "Item:netherite_chestplate, Amount:1, Damage:25, Trim-Pattern:sentry, Trim-Material:redstone, Name:<bold><dark_red>Warlord's Chestplate</bold>, protection:5, unbreaking:3"
        - "Item:netherite_leggings, Amount:1, Damage:25, Trim-Pattern:sentry, Trim-Material:redstone, Name:<bold><dark_red>Warlord's Leggings</bold>, protection:5, unbreaking:3"
        - "Item:netherite_boots, Amount:1, Damage:25, Trim-Pattern:sentry, Trim-Material:redstone, Name:<bold><dark_red>Warlord's Boots</bold>, protection:5, unbreaking:3"
      # A list of permissions, If a player has any of these permissions. they cannot win this prize again!
      BlackListed-Permissions:
        - "crazycrates.blacklist.warlord"
      # The alternative prize.
      Alternative-Prize:
        # if it should be enabled.
        Toggle: true
        # The message to send.
        Messages:
          - "<reset> <dark_gray>[<blue>CrazyCrates<dark_gray>]: <gray>You have already won that prize, so enjoy some gold nuggets."
        # A list of commands to run.
        Commands:
          - "give %player% gold_nugget 16"
        # Alternatively, instead of commands. You can have an Items section which functions the same as the Items section above.
        Items:
          - "Item:gold_nugget, Amount:16"
    "2":
      # The enchants to be stored on the book.
      DisplayEnchantments:
        - "protection:5"
        - "unbreaking:3"
      # The item to display in the gui.
      # The enchanted book will function with the enchants properly in an anvil.
      DisplayItem: "enchanted_book"
      # Prize display preview settings
      Settings:
        # The custom model data of the item, -1 is disabled.
        Custom-Model-Data: -1
        # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
        # Set this to blank for it to do nothing.
        Model:
          # The namespace i.e. nexo
          Namespace: ""
          # The id i.e. emerald_helmet
          Id: ""
      # The amount to display in the gui.
      DisplayAmount: 3
      # The lore of the item.
      DisplayLore:
        - "<gradient:#8fcfa0:#32a852>A gradient lore!"
      # The lower the number, the less likely to win it.
      Weight: 25.0
      # The list of items to win.
      Items:
        - "Item:enchanted_book, protection:5, unbreaking:3"
```