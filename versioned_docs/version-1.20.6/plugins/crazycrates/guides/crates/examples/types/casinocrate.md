---
title: Casino Crate

hide_title: false

sidebar_label: CasinoCrate
---
```yml
Crate:
  # https://docs.crazycrew.us/docs/plugins/crazycrates/misc/crate-types

  # Make sure to check out the wiki for anything not explained here.
  # https://docs.crazycrew.us/docs/category/crazycrates

  # See CosmicCrate.yml to see how the Cosmic CrateType works.
  CrateType: Casino
  # Name of the Inventory if a GUI crate.
  CrateName: "<dark_blue>Casino Crate"
  # The name of the inventory that will be in the preview GUI.
  Preview-Name: "<dark_blue>Casino Crate Preview"
  # Starting amount of keys when the player 1st joins.
  StartingKeys: 0
  # The amount of keys required to use the crate.
  RequiredKeys: 0
  # Max amount of crates that can be opened at once using /crates mass-open
  Max-Mass-Open: 10
  # If the crate shows in /crates.
  # If the type is QuickCrate/CrateOnTheGo/FireCracker, They will not work as they require a Physical Crate.
  InGUI: true
  # Slot the item is in the GUI.
  Slot: 16
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
  # A default command if the prize doesn't have any commands
  # i.e. Commands: [] or the value isn't there.
  Prize-Commands: []
  # Item the crate is in the GUI
  Item: "gold_ingot"
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
    # Turn on and off the preview for this crate.
    Toggle: true
    # How many lines the Crate Preview should have. Including Header and Bottom (Between 3 and 6)
    ChestLines: 6
    Glass:
      # Turn the glass border in the preview on and off.
      Toggle: true
      # The name of the border item.
      Name: " "
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
      # The item used for the secondary gui when you right-click for the preview.
      Item: "chest"
      # Chance of that item getting picked. It would be 80/100 chance because MaxRange is 100.
      Chance: 50
      # The max range that the chance will go though.
      MaxRange: 100
      # The slot this item will be in the secondary gui.
      Slot: 20
    UnCommon:
      # The in-game name of the tier.
      Name: "<green>Uncommon Tier"
      # The in-game lore of the tier.
      Lore:
        - "<green>An uncommon tier."
      # The item used for the secondary gui when you right-click for the preview.
      Item: "chest"
      # Chance of that item getting picked. It would be 35/100 chance because MaxRange is 100.
      Chance: 35
      # The max range that the chance will go though.
      MaxRange: 100
      # The slot this item will be in the secondary gui.
      Slot: 22
    Rare:
      # The in-game name of the tier.
      Name: "<dark_red>Rare Tier"
      # The in-game lore of the tier.
      Lore:
        - "<red>A rare tier."
      # The item used for the secondary gui when you right-click for the preview.
      Item: "ender_chest"
      # Chance of that item getting picked. It would be 25/100 chance because MaxRange is 100.
      Chance: 25
      # The max range that the chance will go though.
      MaxRange: 100
      # The slot this item will be in the secondary gui.
      Slot: 24
  PhysicalKey:
    # Name of the Key.
    Name: "<bold><dark_blue>Casino Crate Key</bold>"
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
    # The background color of the hologram. It uses hex colors. This only works with CMI/FancyHolograms
    # Set the color to transparent if you don't want any color.
    Color: "transparent"
    # The message that will be displayed above the crate.
    # Note: MiniMessage or Color Codes being supported is depending on the 'holograms' plugin.
    Message:
      - "<bold><dark_blue>Casino Crate</bold>"
  # All the prizes that can be obtained in the Crate.
  Prizes:
    '1':
      # The name of the item to display in the gui.
      DisplayName: "<gold>BadBones69"
      # The item to display in the gui.
      DisplayItem: "player_head"
      # The amount to display in the gui.
      DisplayAmount: 1
      # The max range i.e. 1/100 = 1% chance to win.
      MaxRange: 100
      # The chance to win i.e. 1%
      Chance: 1
      # Tiers are available in Cosmic and Casino crate types.
      # The Tiers the rewards can be found in.
      Tiers:
        - "Basic"
      # An example of a custom player head.
      # This can be a player head as well.
      # https://minecraft-heads.com/
      Player: "1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e"
```