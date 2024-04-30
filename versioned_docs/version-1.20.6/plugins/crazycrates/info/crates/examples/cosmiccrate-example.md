---
title: Cosmic Type

hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: CosmicCrate Example
---
```yaml
Crate:
  # Type of crate -> CSGO/Casino/Cosmic/QuadCrate/QuickCrate/Roulette/CrateOnTheGo/FireCracker/Wonder/Wheel/War

  # Make sure to check out the wiki for anything not explained here.
  # https://docs.crazycrew.us/crazycrates/home

  # See CasinoExample.yml to see how the Casino CrateType works.
  CrateType: Cosmic
  # Name of the Inventory if a GUI crate.
  CrateName: "<light_purple>Cosmic Crate"
  # The name of the inventory that will be in the preview GUI.
  Preview-Name: "<light_purple>Cosmic Crate Preview"
  # Starting amount of keys when the player 1st joins.
  StartingKeys: 0
  # The amount of keys required to use the crate.
  RequiredKeys: 0
  # Max amount of crates that can be opened at once using /cc mass-open
  Max-Mass-Open: 10
  # If the crate shows in the /cc GUI.
  # If the type is QuickCrate/CrateOnTheGo/FireCracker, They will not work as they require a Physical Crate.
  InGUI: true
  # Slot the item is in the GUI.
  Slot: 34
  # Enables/Disables the Broadcasts message when they open a crate.
  OpeningBroadCast: true
  # Message that is broadcast when opening the crate.
  BroadCast: "%prefix%<bold><gold>%player%</bold><reset> <gray>is opening a <bold><light_purple>Cosmic Crate.</bold>"
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
      # https://jd.papermc.io/paper/1.20/org/bukkit/Sound.html
      value: "BLOCK_NOTE_BLOCK_XYLOPHONE"
      # The volume of the pitch.
      volume: 1.0
      # The speed of the sound.
      pitch: 1.0
    # The sound options when an item is clicked.
    click-sound:
      # If sound should be enabled or not.
      toggle: true
      # The type of sound to use.
      # https://jd.papermc.io/paper/1.20/org/bukkit/Sound.html
      value: "UI_BUTTON_CLICK"
      # The volume of the pitch.
      volume: 1.0
      # The speed of the sound.
      pitch: 1.0
    # The sound options when a crate ends.
    stop-sound:
      # If sound should be enabled or not.
      toggle: true
      # The type of sound to use.
      # https://jd.papermc.io/paper/1.20/org/bukkit/Sound.html
      value: "ENTITY_PLAYER_LEVELUP"
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
  Item: "ENDER_CHEST"
  # If the crate in the main /cc GUI is glowing or not.
  Glowing: false
  # Name of the item in the GUI.
  Name: "<bold><light_purple>Cosmic Crate</bold>"
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
      Item: "GRAY_STAINED_GLASS_PANE"
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
      # The item that shows in the border. Can be glass or any other item.
      item: "RED_STAINED_GLASS_PANE"
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
    # The Config Name for the Crate
    Basic:
      # The in-game name of the tier.
      Name: "<dark_gray>Basic Tier"
      # The in-game lore of the tier.
      Lore:
        - "<gray>A basic tier."
      # The item used for the secondary gui when you right-click for the preview.
      Item: "CHEST"
      # Chance of that item getting picked. It would be 80/100 chance because MaxRange is 100.
      Chance: 50
      # The max range that the chance will go though.
      MaxRange: 100
      # The slot this item will be in the secondary gui.
      Slot: 20
    UnCommon:
      Name: "<green>Uncommon Tier"
      Lore:
        - "<green>An uncommon tier."
      Item: "CHEST"
      Chance: 35
      MaxRange: 100
      Slot: 22
    Rare:
      Name: "<dark_red>Rare Tier"
      Lore:
        - "<red>A rare tier."
      Item: "ENDER_CHEST"
      Chance: 25
      MaxRange: 100
      Slot: 24
  PhysicalKey:
    # Name of the Key.
    Name: "<bold><light_purple>Cosmic Crate Key</bold>"
    # Lore of the Key.
    Lore:
      - "<gray>A special Key"
      - "<gray>For a special Crate."
    # The item the key is.
    Item: "TRIPWIRE_HOOK"
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
      - "<bold><light_purple>Cosmic Crate</bold>"
  Crate-Type-Settings:
    # The total amount of prizes to pick.
    Total-Prize-Amount: 4
    Mystery-Crate:
      # The item of the mystery crate.
      Item: "CHEST"
      # The name of the mystery crate.
      Name: "<bold><white>???</bold>"
      # The lore of the mystery crate.
      Lore:
        - "<gray>You may choose 4 crates."
    Picked-Crate:
      # The item of the picked crate.
      Item: "GLASS_PANE"
      # The name of the picked crate.
      Name: "<bold><white>???</bold>"
      # The lore of the picked crate.
      Lore:
        - "<gray>You have chosen #%slot%."
  # All the prizes that can be gotten in the Crate.
  Prizes:
    1:
      # Name of the item shown by the crate.
      DisplayName: "<bold><light_purple>Cosmic Grass</bold>"
      # Item shown by the crate.
      DisplayItem: "GRASS_BLOCK"
      # The amount displayed.
      DisplayAmount: 1
      # The lore in the crate preview
      # If you do not want a lore, Set the "Lore:" to look like the line below.
      # Lore: []
      Lore:
        - "<gray>Win some grass for your fields."
        - "<bold><gold>Chance: <red>40%</bold>"
      # Tiers are available in Cosmic and Casino crate types.
      # The Tiers the rewards can be found in.
      Tiers:
        - "Basic"
        - "UnCommon"
        - "Rare"
      MaxRange: 100 # Available values: 100, 1000, 10000, 100000, 1000000, 10000000
      #
      # 25 is 25% if Max Range is 100
      # Read more on "Chance" @ https://github.com/Crazy-Crew/Crazy-Crates/wiki/Chance-System
      #
      Chance: 40 # The chance out of MaxRange to win an item.
      Items: # Give any item you want
        - "Item:GRASS_BLOCK, Amount:32, Name:<bold><light_purple>Galactic Grass</bold>"
      Commands: # Run any command you want
        - "broadcast <bold><gold>%player%</bold><reset> <gray>has just won some <reset>%reward%."
    2:
      DisplayName: "<bold><blue>Cheap Helmet</bold>"
      DisplayItem: "GOLDEN_HELMET"
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability is 100, It subtracts 5.
      # It cannot be 0.
      DisplayDamage: 5
      DisplayTrim:
        # Available Materials: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html
        Material: "QUARTZ"
        # Available Patterns: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html
        Pattern: "SENTRY"
      DisplayAmount: 1
      Lore:
        - "<gray>Win a cheap helmet."
        - "<bold><gold>Chance: <red>60%</bold>"
      DisplayEnchantments:
        - "PROTECTION_ENVIRONMENTAL:1"
        - "OXYGEN:1"
      MaxRange: 100
      Chance: 60
      Tiers:
        - "Basic"
        - "UnCommon"
        - "Rare"
      Items:
        - "Item:GOLDEN_HELMET, Amount:1, Damage:5, Trim-Pattern:SENTRY, Trim-Material:DIAMOND, Name:<bold><blue>Cheap Helmet</bold>, PROTECTION_ENVIRONMENTAL:1, OXYGEN:1"
    3:
      DisplayName: "<bold><yellow>$1,000</bold>"
      DisplayItem: "SUNFLOWER"
      DisplayAmount: 1
      Lore:
        - "<gray>Make it rain Money."
        - "<bold><gold>Chance: <red>20%</bold>"
      MaxRange: 100
      Chance: 20
      Firework: true
      Tiers:
        - "Basic"
        - "UnCommon"
        - "Rare"
      Commands:
        - "eco give %player% 1000"
    4:
      DisplayName: "<bold><blue>Crazy <dark_red>Sword</bold>"
      DisplayItem: "GOLDEN_SWORD"
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability is 100, It subtracts 12.
      DisplayDamage: 12
      DisplayAmount: 1
      Lore:
        - "<gray>Win a crazy cool sword."
        - "<bold><gold>Chance: <red>10%</bold>"
      DisplayEnchantments:
        - "DAMAGE_ALL:5"
        - "FIRE_ASPECT:1"
      MaxRange: 100
      Chance: 10
      Tiers:
        - "Rare"
      Items:
        - "Item:GOLDEN_SWORD, Amount:1, Damage:12, Name:<bold><blue>Crazy <dark_red>Sword</bold>, DAMAGE_ALL:5, FIRE_ASPECT:1"
    5:
      DisplayName: "<bold><yellow>$1,000,000</bold>"
      DisplayItem: "SUNFLOWER"
      DisplayAmount: 1
      Lore:
        - "<gray>Make it rain a butt load of Money."
        - "<bold><gold>Chance: <red>20%</bold>"
      MaxRange: 100
      Chance: 20
      Firework: true
      Tiers:
        - "Rare"
      Commands:
        - "eco give %player% 1000000"
    6:
      DisplayName: "<bold><blue>Crazy Crate <gold>Key <gray>(x2)</bold>"
      DisplayItem: "TRIPWIRE_HOOK"
      DisplayAmount: 2
      Lore:
        - "<gray>A special Key"
        - "<gray>For a special Crate."
        - "<bold><gold>Chance: <red>10%</bold>"
      MaxRange: 100
      Chance: 10
      Firework: true
      Glowing: true
      Tiers:
        - "UnCommon"
        - "Rare"
      Commands:
        - "cc give physical crazy 2 %player%"
```