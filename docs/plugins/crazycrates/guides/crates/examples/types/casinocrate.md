---
title: Casino Crate

hide_title: false

sidebar_label: CasinoCrate
---
```yaml
Crate:
  # https://docs.crazycrew.us/docs/plugins/crazycrates/misc/crate-types

  # Make sure to check out the wiki for anything not explained here.
  # https://docs.crazycrew.us/docs/category/crazycrates

  # See CosmicCrate.yml to see how the Cosmic CrateType works.
  CrateType: Casino
  # Starting amount of keys when the player 1st joins.
  StartingKeys: 0
  # The amount of keys required to use the crate.
  RequiredKeys: 20
  # Max amount of crates that can be opened at once using /crates mass-open
  Max-Mass-Open: 10
  # If the crate shows in /crates.
  # If the type is QuickCrate/CrateOnTheGo/FireCracker, They will not work as they require a Physical Crate.
  InGUI: true
  # Slot the item is in the GUI.
  Slot: 15
  # Enables/Disables the Broadcasts message when they open a crate.
  OpeningBroadCast: true
  # Message that is broadcast when opening the crate.
  BroadCast: "%prefix%<bold><gold>%player%</bold><reset> <gray>is opening a <bold><dark_blue>Casino Crate.</bold>"
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
    # Handles settings related to the border
    Border:
      # Settings related to the glass border
      Glass-Border:
        Toggle: true # Should the glass border be enabled?
    # Broadcast a message to the server
    Broadcast:
      # If the messages should be sent.
      Toggle: false
      # The messages to broadcast.
      Messages:
        - "<red>%player% won the prize <yellow>%reward%."
      # If the player has this permission, they don't get the broadcast.
      Permission: ""
  # Item the crate is in the GUI
  Item: "gold_ingot"
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
  Name: "<bold><dark_blue>Casino Crate</bold>"
  # The lore of the item in the GUI.
  Lore:
    - "<gray>This crate contains strange objects."
    - "<gray>You have <gold>%keys% keys <gray>to open this crate with."
    - "<gray>You have opened this crate: <gold>%crate_opened% times"
    - "<gray>(<yellow>!<gray>) Right click to view rewards."
  Preview:
    # The name of the inventory for the preview menu.
    Name: "<dark_blue>Casino Crate Preview"
    # Turn on and off the preview for this crate.
    Toggle: true
    # How many lines should the preview be? You can use 1-6.
    ChestLines: 6
    Glass:
      # Turn the glass border in the preview on and off.
      Toggle: true
      # The name of the border item.
      Name: " "
      # The custom model data of the item, -1 is disabled.
      Custom-Model-Data: -1
      # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
      # Set this to blank for it to do nothing.
      Model:
        # The namespace i.e. nexo
        Namespace: ""
        # The id i.e. emerald_helmet
        Id: ""
      # The item that shows in the border. Can be glass or any other item.
      Item: "gray_stained_glass_pane"
  tier-preview:
    # Turn on and off the preview for this crate.
    toggle: true
    # How many lines the Tier Preview should have. Including Header and Bottom (Between 3 and 6)
    rows: 5
    # The glass border
    glass:
      # Turn the glass border in the preview on and off.
      toggle: true
      # The name of the border item.
      name: " "
      # The custom model data of the item, -1 is disabled.
      custom-model-data: -1
      # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
      # Set this to blank for it to do nothing.
      model:
        # The namespace i.e. nexo
        namespace: ""
        # The id i.e. emerald_helmet
        id: ""
      # The item that shows in the border. Can be glass or any other item.
      item: "red_stained_glass_pane"
  # Tier related settings only for Casino.
  random:
    # If the tiers should be random.
    toggle: false
    # The rows with pre-defined tiers.
    types:
      # Row 1
      row-1: Basic
      # Row 2
      row-2: UnCommon
      # Row 3
      row-3: Rare
  # Tiers are available in Cosmic and Casino crate types.
  # The Tiers the rewards can be found in.
  Tiers:
    # The config name for the tier
    Basic:
      # The in-game name of the tier.
      Name: "<dark_gray>Basic Tier"
      # The in-game lore of the tier.
      Lore:
        - "<gray>A basic tier."
        - "<red>%chance%%</red>"
      # The item used for the secondary gui when you right-click for the preview.
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
      # The lower the number, the less likely to win it.
      Weight: 50.0
      # The slot this item will be in the secondary gui.
      Slot: 20
    UnCommon:
      # The in-game name of the tier.
      Name: "<green>Uncommon Tier"
      # The in-game lore of the tier.
      Lore:
        - "<green>An uncommon tier."
        - "<red>%chance%%</red>"
      # The item used for the secondary gui when you right-click for the preview.
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
      # The lower the number, the less likely to win it.
      Weight: 35.0
      # The slot this item will be in the secondary gui.
      Slot: 22
    Rare:
      # The in-game name of the tier.
      Name: "<dark_red>Rare Tier"
      # The in-game lore of the tier.
      Lore:
        - "<red>A rare tier."
        - "<red>%chance%%</red>"
      # The item used for the secondary gui when you right-click for the preview.
      Item: "ender_chest"
      # The custom model data of the item, -1 is disabled.
      Custom-Model-Data: -1
      # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
      # Set this to blank for it to do nothing.
      Model:
        # The namespace i.e. nexo
        Namespace: ""
        # The id i.e. emerald_helmet
        Id: ""
      # The lower the number, the less likely to win it.
      Weight: 25.0
      # The slot this item will be in the secondary gui.
      Slot: 24
  PhysicalKey:
    # Name of the Key.
    Name: "<bold><dark_blue>Casino Crate Key</bold>"
    # The custom model data of the item, -1 is disabled.
    Custom-Model-Data: -1
    # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
    # Set this to blank for it to do nothing.
    Model:
      # The namespace i.e. nexo
      Namespace: ""
      # The id i.e. emerald_helmet
      Id: ""
    # Lore of the Key.
    Lore:
      - "<gray>A special Key"
      - "<gray>For a special Crate."
    # The item the key is.
    Item: "cyan_dye"
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
      - "<bold><dark_blue>Casino Crate</bold>"
  # All the prizes that can be obtained in the Crate.
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
      # The lower the number, the less likely to win it.
      Weight: 1.0
      # Tiers are available in Cosmic and Casino crate types.
      # The Tiers the rewards can be found in.
      Tiers:
        - "Basic"
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
      # Tiers are available in Cosmic and Casino crate types.
      # The Tiers the rewards can be found in.
      Tiers:
        - "UnCommon"
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
    "3":
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
      # Tiers are available in Cosmic and Casino crate types.
      # The Tiers the rewards can be found in.
      Tiers:
        - "Rare"
      # The list of items to win.
      Items:
        - "Item:enchanted_book, protection:5, unbreaking:3"
    "4":
      # The name of the item to display in the gui.
      DisplayName: "<bold><green>Fancy Pants</bold>"
      # The item to display in the gui.
      DisplayItem: "chainmail_leggings"
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
        - "protection:2"
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability is 100, It subtracts 75.
      # It cannot be 0.
      DisplayDamage: 75
      # https://docs.crazycrew.us/docs/plugins/crazycrates/guides/prizes/items/armor-trim
      DisplayTrim:
        # The list of materials to use can be found on the link above
        Material: "lapis"
        # The list of patterns to use can be found on the link above
        Pattern: "sentry"
      # The amount to display in the gui.
      DisplayAmount: 1
      # The lower the number, the less likely to win it.
      Weight: 40.0
      # Tiers are available in Cosmic and Casino crate types.
      # The Tiers the rewards can be found in.
      Tiers:
        - "Basic"
        - "UnCommon"
      # The lore of the item.
      DisplayLore:
        - "<gray>Win a fancy pair of pants."
        - "<bold><gold>Chance: <red>%chance%</bold>"
      # The items to win.
      Items:
        - "Item:chainmail_leggings, Amount:1, Damage:75, Trim-Pattern:sentry, Trim-Material:lapis, Name:<bold><green>Fancy Pants</bold>, protection:2"
      # The messages to send.
      Messages:
        - "<gray>You just won a <reset>%reward%."
    "5":
      # The name of the item to display in the gui.
      DisplayName: "<bold><blue>Classic Sword</bold>"
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
      # The enchants on the item.
      DisplayEnchantments:
        - "sharpness:2"
        - "fire_aspect:1"
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability is 100, It subtracts 7.
      # It cannot be 0.
      DisplayDamage: 7
      # The amount to display in the gui.
      DisplayAmount: 1
      # The lore of the item.
      DisplayLore:
        - "<gray>Win a old classic sword."
        - "<bold><gold>Chance: <red>3.5%</bold>"
      # The lower the number, the less likely to win it.
      Weight: 35.0
      # Tiers are available in Cosmic and Casino crate types.
      # The Tiers the rewards can be found in.
      Tiers:
        - "Basic"
        - "UnCommon"
        - "Rare"
      # The items to win.
      Items:
        - "Item:diamond_sword, Amount:1, Damage:7, Name:<bold><blue>Classic Sword</bold>, sharpness:2, fire_aspect:1"
      # The messages to send.
      Messages:
        - "<gray>You just won <reset>%reward%."
```