---
title: Cosmic Crate

hide_title: false

sidebar_label: CosmicCrate
---
```yaml
Crate:
  # https://docs.crazycrew.us/docs/plugins/crazycrates/misc/crate-types

  # Make sure to check out the wiki for anything not explained here.
  # https://docs.crazycrew.us/docs/category/crazycrates

  # See CasinoCrate.yml to see how the Cosmic/Casino CrateType works.
  CrateType: Cosmic
  # Starting amount of keys when the player 1st joins.
  StartingKeys: 0
  # The amount of keys required to use the crate.
  RequiredKeys: 4
  # Max amount of crates that can be opened at once using /crates mass-open
  Max-Mass-Open: 10
  # If the crate shows in the /crates.
  # If the type is QuickCrate/CrateOnTheGo/FireCracker, They will not work as they require a Physical Crate.
  InGUI: true
  # Slot the item is in the GUI.
  Slot: 29
  # Enables/Disables the Broadcasts message when they open a crate.
  OpeningBroadCast: true
  # Message that is broadcast when opening the crate.
  BroadCast: "%prefix%<bold><gold>%player%</bold><reset> <gray>is opening a <bold><gradient:#E43A96:#FF91EA>Cosmic Crate.</gradient></bold>"
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
  # Item the crate is in the GUI
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
  # If the crate in the main /crates is glowing or not.
  Glowing: false
  # Name of the item in the GUI.
  Name: "<bold><gradient:#E43A96:#FF91EA>Cosmic Crate</gradient></bold>"
  # The lore of the item in the GUI.
  Lore:
    - "<gray>This crate contains strange objects."
    - "<gray>You have <gold>%keys% keys <gray>to open this crate with."
    - "<gray>You have opened this crate: <gold>%crate_opened% times"
    - "<gray>(<yellow>!<gray>) Right click to view rewards."
  Preview:
    # The name of the inventory for the preview menu.
    Name: "<gradient:#E43A96:#FF91EA>Cosmic Crate Preview</gradient>"
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
    glass:
      # Turn the glass border in the preview on and off.
      toggle: true
      # The name of the border item.
      name: " "
      # The custom model data of the item, -1 is disabled.
      custom-model-data: -1
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
    Name: "<bold><gradient:#E43A96:#FF91EA>Cosmic Crate Key</gradient></bold>"
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
      - "<gradient:#E43A96:#FF91EA>A fancy key to open a cosmical crate!</gradient>"
    # The item the key is.
    Item: "purple_dye"
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
      - "<bold><light_purple>Cosmic Crate</bold>"
  # The crate type specific settings.
  Crate-Type-Settings:
    # The total amount of prizes to pick.
    Total-Prize-Amount: 4
    # The mystery crate customization.
    Mystery-Crate:
      # The item of the mystery crate.
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
      # The name of the mystery crate.
      Name: "<bold><white>???</bold>"
      # The lore of the mystery crate.
      Lore:
        - "<gray>You may choose 4 crates."
    # The picked crate customization.
    Picked-Crate:
      # The item of the picked crate.
      Item: "glass_pane"
      # The custom model data of the item, -1 is disabled.
      Custom-Model-Data: -1
      # The item model, Mojang introduced this in 1.21.4... this replaces custom model data!
      # Set this to blank for it to do nothing.
      Model:
        # The namespace i.e. nexo
        Namespace: ""
        # The id i.e. emerald_helmet
        Id: ""
      # The name of the picked crate.
      Name: "<bold><white>???</bold>"
      # The lore of the picked crate.
      Lore:
        - "<gray>You have chosen #%slot%."
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
      DisplayName: "<bold><blue>Cheap Helmet</bold>"
      DisplayItem: "golden_helmet"
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
      DisplayEnchantments:
        - "protection:1"
        - "aqua_affinity:1"
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability is 100, It subtracts 5.
      # It cannot be 0.
      DisplayDamage: 5
      # https://docs.crazycrew.us/docs/plugins/crazycrates/guides/prizes/items/armor-trim
      DisplayTrim:
        # The list of materials to use can be found on the link above
        Material: "diamond"
        # The list of patterns to use can be found on the link above
        Pattern: "sentry"
      # The amount to display in the gui.
      DisplayAmount: 1
      # The lower the number, the less likely to win it.
      Weight: 60.0
      # The lore of the item.
      DisplayLore:
        - "<gray>Win a cheap helmet."
        - "<bold><gold>Chance: <red>%chance%</bold>"
      # The tiers the prize can be won from.
      Tiers:
        - "Basic"
        - "UnCommon"
        - "Rare"
      # The items to win.
      Items:
        - "Item:golden_helmet, Amount:1, Damage:5, Trim-Pattern:sentry, Trim-Material:diamond, Name:<bold><blue>Cheap Helmet</bold>, protection:1, aqua_affinity:1"
    "3":
      # The name of the item to display in the gui.
      DisplayName: "<bold><yellow>$1,000</bold>"
      # The item to display in the gui.
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
      DisplayAmount: 1
      # The lower the number, the less likely to win it.
      Weight: 20.0
      # The lore of the item.
      DisplayLore:
        - "<gray>Make it rain Money."
        - "<bold><gold>Chance: <red>%chance%</bold>"
      # If the prize should spawn fireworks.
      Firework: true
      # The tiers the prize can be won from.
      Tiers:
        - "Basic"
        - "UnCommon"
        - "Rare"
      # The commands to run.
      Commands:
        - "eco give %player% 1000"
    "4":
      # The name of the item to display in the gui.
      DisplayName: "<bold><blue>Crazy <dark_red>Sword</bold>"
      # The item to display in the gui.
      DisplayItem: "golden_sword"
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
        - "sharpness:5"
        - "fire_aspect:1"
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability is 100, It subtracts 12.
      DisplayDamage: 12
      # The amount to display in the gui.
      DisplayAmount: 1
      # The lower the number, the less likely to win it.
      Weight: 10.0
      # The lore of the item.
      DisplayLore:
        - "<gray>Win a crazy cool sword."
        - "<bold><gold>Chance: <red>%chance%</bold>"
      # The tiers the prize can be won from.
      Tiers:
        - "Rare"
      # The items to win.
      Items:
        - "Item:golden_sword, Amount:1, Damage:12, Name:<bold><blue>Crazy <dark_red>Sword</bold>, sharpness:5, fire_aspect:1"
    "5":
      # The name of the item to display in the gui.
      DisplayName: "<bold><yellow>$1,000,000</bold>"
      # The item to display in the gui.
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
      DisplayAmount: 1
      # The lower the number, the less likely to win it.
      Weight: 20.0
      # The lore of the item.
      DisplayLore:
        - "<gray>Make it rain a butt load of Money."
        - "<bold><gold>Chance: <red>%chance%</bold>"
      # If the prize should spawn fireworks.
      Firework: true
      # The tiers the prize can be won from.
      Tiers:
        - "Rare"
      # The commands to run.
      Commands:
        - "eco give %player% 1000000"
    "6":
      # The name of the item to display in the gui.
      DisplayName: "<bold><blue>Crazy Crate <gold>Key <gray>(x2)</bold>"
      # The item to display in the gui.
      DisplayItem: "lime_dye"
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
      DisplayAmount: 2
      # The lower the number, the less likely to win it.
      Weight: 10.0
      # The lore of the item.
      DisplayLore:
        - "<gray>A special Key"
        - "<gray>For a special Crate."
        - "<bold><gold>Chance: <red>%chance%</bold>"
      # If the prize should spawn fireworks.
      Firework: true
      # If the display item should glow.
      Glowing: true
      # The tiers the prize can be won from.
      Tiers:
        - "UnCommon"
        - "Rare"
      # The commands to run.
      Commands:
        - "crates give physical CrateExample 2 %player%"
```