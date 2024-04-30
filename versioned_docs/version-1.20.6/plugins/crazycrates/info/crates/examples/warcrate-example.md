---
title: QuickCrate

hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: QuickCrate Example
---
```yml
Crate:
  # Type of crate -> CSGO/Casino/Cosmic/QuadCrate/QuickCrate/Roulette/CrateOnTheGo/FireCracker/Wonder/Wheel/War

  # Make sure to check out the wiki for anything not explained here.
  # https://docs.crazycrew.us/crazycrates/home

  # See CosmicCrateExample.yml or CasinoExample.yml to see how the Cosmic/Casino CrateType works.
  CrateType: War
  # Name of the Inventory if a GUI crate.
  CrateName: "<dark_red>War Crate"
  # The name of the inventory that will be in the preview GUI.
  Preview-Name: "<dark_red>War Crate Preview"
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
  Slot: 30
  # Enables/Disables the Broadcasts message when they open a crate.
  OpeningBroadCast: true
  # Message that is broadcast when opening the crate.
  BroadCast: "%prefix%<bold><gold>%player%</bold><reset> <gray>is opening a <bold><dark_red>War Crate.</bold>"
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
  Item: "BEACON"
  # If the crate in the main /cc GUI is glowing or not.
  Glowing: false
  # Name of the item in the GUI.
  Name: "<bold><dark_red>War Crate</bold>"
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
  PhysicalKey:
    # Name of the Key.
    Name: "<bold><dark_red>War Crate Key</bold>"
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
      - "<bold><dark_red>War Crate</bold>"
  # All the prizes that can be gotten in the Crate.
  Prizes:
    1:
      DisplayName: "<bold><dark_red>Warlord's Helmet</bold>"
      DisplayItem: "NETHERITE_HELMET"
      DisplayTrim:
        # Available Materials: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html
        Material: "REDSTONE"
        # Available Patterns: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html
        Pattern: "SENTRY"
      DisplayAmount: 1
      Lore:
        - "<gray>Win the warlord's helmet."
        - "<bold><gold>Chance: <red>40%</bold>"
      DisplayEnchantments:
        - "PROTECTION_ENVIRONMENTAL:5"
        - "DURABILITY:3"
      MaxRange: 100
      Chance: 40
      Items:
        - "Item:NETHERITE_HELMET, Amount:1, Damage:25, Trim-Pattern:SENTRY, Trim-Material:REDSTONE, Name:<bold><dark_red>Warlord's Helmet</bold>, PROTECTION_ENVIRONMENTAL:5, DURABILITY:3"
    2:
      DisplayName: "<bold><dark_red>Warlord's Chestplate</bold>"
      DisplayItem: "NETHERITE_CHESTPLATE"
      DisplayTrim:
        # Available Materials: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html
        Material: "REDSTONE"
        # Available Patterns: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html
        Pattern: "SENTRY"
      DisplayAmount: 1
      Lore:
        - "<gray>Win the warlord's chestplate."
        - "<bold><gold>Chance: <red>40%</bold>"
      DisplayEnchantments:
        - "PROTECTION_ENVIRONMENTAL:5"
        - "DURABILITY:3"
      MaxRange: 100
      Chance: 40
      Items:
        - "Item:NETHERITE_CHESTPLATE, Amount:1, Damage:25, Trim-Pattern:SENTRY, Trim-Material:REDSTONE, Name:<bold><dark_red>Warlord's Chestplate</bold>, PROTECTION_ENVIRONMENTAL:5, DURABILITY:3"
    3:
      DisplayName: "<bold><dark_red>Warlord's Leggings</bold>"
      DisplayItem: "NETHERITE_LEGGINGS"
      DisplayTrim:
        # Available Materials: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html
        Material: "REDSTONE"
        # Available Patterns: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html
        Pattern: "SENTRY"
      DisplayAmount: 1
      Lore:
        - "<gray>Win the warlord's leggings."
        - "<bold><gold>Chance: <red>40%</bold>"
      DisplayEnchantments:
        - "PROTECTION_ENVIRONMENTAL:5"
        - "DURABILITY:3"
      MaxRange: 100
      Chance: 40
      Items:
        - "Item:NETHERITE_LEGGINGS, Amount:1, Damage:25, Trim-Pattern:SENTRY, Trim-Material:REDSTONE, Name:<bold><dark_red>Warlord's Leggings</bold>, PROTECTION_ENVIRONMENTAL:5, DURABILITY:3"
    4:
      DisplayName: "<bold><dark_red>Warlord's Boots"
      DisplayItem: "NETHERITE_BOOTS"
      DisplayTrim:
        # Available Materials: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html
        Material: "REDSTONE"
        # Available Patterns: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html
        Pattern: "SENTRY"
      DisplayAmount: 1
      Lore:
        - "<gray>Win the warlord's boots."
        - "<bold><gold>Chance: <red>40%</bold>"
      DisplayEnchantments:
        - "PROTECTION_ENVIRONMENTAL:5"
        - "DURABILITY:3"
      MaxRange: 100
      Chance: 40
      Items:
        - "Item:NETHERITE_BOOTS, Amount:1, Damage:25, Trim-Pattern:SENTRY, Trim-Material:REDSTONE, Name:<bold><dark_red>Warlord's Boots</bold>, PROTECTION_ENVIRONMENTAL:5, DURABILITY:3"
```