---
title: Wonder Crate

hide_title: false

sidebar_label: WonderCrate
---
```yaml
Crate:
  # https://docs.crazycrew.us/docs/plugins/crazycrates/misc/crate-types

  # Make sure to check out the wiki for anything not explained here.
  # https://docs.crazycrew.us/docs/category/crazycrates

  # See CosmicCrate.yml or CasinoCrate.yml to see how the Cosmic/Casino CrateType works.
  CrateType: Wonder
  # Starting amount of keys when the player 1st joins.
  StartingKeys: 0
  # The amount of keys required to use the crate.
  RequiredKeys: 5
  # Max amount of crates that can be opened at once using /crates mass-open
  Max-Mass-Open: 10
  # If the crate shows in the /crates.
  # If the type is QuickCrate/CrateOnTheGo/FireCracker, They will not work as they require a Physical Crate.
  InGUI: true
  # Slot the item is in the GUI.
  Slot: 33
  # Enables/Disables the Broadcasts message when they open a crate.
  OpeningBroadCast: true
  # Message that is broadcast when opening the crate.
  BroadCast: "%prefix%<bold><gold>%player%</bold><reset> <gray>is opening a <bold><gradient:#084CFB:#ADF3FD>Wonder Crate.</gradient></bold>"
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
      # The type of sound to use.
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
  Item: "shulker_box"
  # The custom model data of the item, -1 is disabled.
  Custom-Model-Data: -1
  # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
  # Set this to blank for it to do nothing.
  Model:
    # The namespace i.e. nexo
    Namespace: ""
    # The id i.e. emerald_helmet
    Id: ""
  # If the crate in the main /crates is glowing or not.
  Glowing: false
  # Name of the item in the GUI.
  Name: "<bold><gradient:#084CFB:#ADF3FD>Wonder Crate</gradient></bold>"
  # The lore of the item in the GUI.
  Lore:
    - "<gray>This crate contains strange objects."
    - "<gray>You have <gold>%keys% keys <gray>to open this crate with."
    - "<gray>You have opened this crate: <gold>%crate_opened% times"
    - "<gray>(<yellow>!<gray>) Right click to view rewards."
  Preview:
    # The name of the inventory for the preview menu.
    Name: "<gradient:#084CFB:#ADF3FD>Wonder Crate Preview</gradient>"
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
    Name: "<bold><gradient:#084CFB:#ADF3FD>Wonder Crate Key</gradient></bold>"
    # Lore of the Key.
    Lore:
      - "<gradient:#084CFB:#ADF3FD>A fancy key to open a wonderful crate!</gradient>"
    # The item the key is.
    Item: "blue_dye"
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
      - "<bold><light_purple>Wonder Crate</bold>"
  # All the prizes that can be obtained in the Crate.
  # These prizes do not require any extra configuration
  # They will give the prizes based on what's already below.
  # See the AdvancedExample.yml for a more advanced crate.
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
        # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
        # Set this to blank for it to do nothing.
        Model:
          # The namespace i.e. nexo
          Namespace: ""
          # The id i.e. emerald_helmet
          Id: ""
      # The amount to display in the gui.
      DisplayAmount: 1
      # The chance to win i.e. 1%
      Weight: 1.0
      # An example of a custom player head.
      # This can be a player head as well.
      # https://minecraft-heads.com/
      Player: "1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e"
      # Only uncomment this if using HeadDatabase by Arcaniax
      # Skull: "7129"
      Items:
        - "Item:player_head, Player:1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e, Name:<gold>BadBones69"
    "2":
      # The name of the item to display in the gui.
      DisplayName: "<red>Diamond Sword"
      # The enchants to display in the gui.
      DisplayEnchantments:
        - "sharpness:5"
        - "looting:3"
      # The item to display in the gui.
      DisplayItem: "diamond_sword"
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
      DisplayAmount: 1
      # The chance to win i.e. 15%
      Weight: 15.0
    "3":
      # The name of the item to display in the gui.
      DisplayName: "<red>Diamond Helmet"
      DisplayEnchantments:
        - "protection:5"
        - "unbreaking:3"
      # https://docs.crazycrew.us/docs/plugins/crazycrates/guides/prizes/items/armor-trim
      DisplayTrim:
        # The list of materials to use can be found on the link above
        Material: "quartz"
        # The list of patterns to use can be found on the link above
        Pattern: "sentry"
      # The item to display in the gui.
      DisplayItem: "diamond_helmet"
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
      DisplayAmount: 1
      # The lore of the item.
      DisplayLore:
        - "<gradient:#8fcfa0:#32a852>A gradient lore!"
      # The chance to win i.e. 15%
      Weight: 15.0
      # The list of items to win.
      Items:
        - "Item:diamond_helmet, Name:<red>Diamond Helmet, protection:5, unbreaking:3"
    "4":
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
      # The chance to win i.e. 25%
      Weight: 25.0
      # The list of items to win.
      Items:
        - "Item:enchanted_book, protection:5, unbreaking:3"
    "5":
      # The display name of the item.
      DisplayName: "<yellow>$1,000"
      # The item to display in the gui.
      # The enchanted book will function with the enchants properly in an anvil.
      DisplayItem: "sunflower"
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
      DisplayAmount: 5
      # The lore of the item.
      DisplayLore:
        - "<gray>Make it rain Money."
        - "<bold><gold>Chance: <red>%chance%</bold>"
      # The chance to win i.e. 20%
      Weight: 20.0
      # Spawn fireworks.
      Firework: true
      # Run commands when a prize is won.
      Commands:
        - "eco give %player% 1000"
      # Override the global message.
      Messages:
        - "<gray>You won <reset>%reward%."
```