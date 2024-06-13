---
title: QuickCrate

hide_title: false

sidebar_label: QuickCrate Example
---
```yml
Crate:
  # Type of crate -> CSGO/Casino/Cosmic/QuadCrate/QuickCrate/Roulette/CrateOnTheGo/FireCracker/Wonder/Wheel/War

  # Make sure to check out the wiki for anything not explained here.
  # https://docs.crazycrew.us/crazycrates/home

  # See CosmicCrateExample.yml or CasinoExample.yml to see how the Cosmic/Casino CrateType works.

  # QuickCrate simply allows you to speed open crates.
  CrateType: QuickCrate
  # Name of the Inventory if a GUI crate.
  CrateName: "<yellow>Classic Crate"
  # The name of the inventory that will be in the preview GUI.
  Preview-Name: "<yellow>Classic Crate Preview"
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
  Slot: 14
  # Enables/Disables the Broadcasts message when they open a crate.
  OpeningBroadCast: true
  # Message that is broadcast when opening the crate.
  BroadCast: "%prefix%<bold><gold>%player%</bold><reset> <gray>is opening a <bold><yellow>Classic Crate.</bold>"
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
      # https://jd.papermc.io/paper/1.20.6/org/bukkit/Sound.html
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
      # https://jd.papermc.io/paper/1.20.6/org/bukkit/Sound.html
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
      # https://jd.papermc.io/paper/1.20.6/org/bukkit/Sound.html
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
  Item: "CHEST"
  # If the crate in the main /cc GUI is glowing or not.
  Glowing: false
  # Name of the item in the GUI.
  Name: "<bold><yellow>Classic Crate</bold>"
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
    Name: "<bold><yellow>Classic Crate Key</bold>"
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
      - "<bold><yellow>Classic Crate</bold>"
  Prizes:
    1:
      DisplayName: "<bold><green>Fancy Pants</bold>"
      DisplayItem: "CHAINMAIL_LEGGINGS"
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability is 100, It subtracts 75.
      # It cannot be 0.
      DisplayDamage: 75
      DisplayTrim:
        # Available Materials: https://jd.papermc.io/paper/1.20.6/org/bukkit/inventory/meta/trim/TrimMaterial.html
        Material: "QUARTZ"
        # Available Patterns: https://jd.papermc.io/paper/1.20.6/org/bukkit/inventory/meta/trim/TrimPattern.html
        Pattern: "SENTRY"
      DisplayAmount: 1
      Lore:
        - "<gray>Win a fancy pair of pants."
        - "<bold><gold>Chance: <red>40%</bold>"
      DisplayEnchantments:
        - "PROTECTION_ENVIRONMENTAL:2"
      MaxRange: 100
      Chance: 40
      Items:
        - "Item:CHAINMAIL_LEGGINGS, Amount:1, Damage:75, Trim-Pattern:SENTRY, Trim-Material:LAPIS, Name:<bold><green>Fancy Pants</bold>, PROTECTION_ENVIRONMENTAL:2"
      Messages:
        - "<gray>You just won a <reset>%reward%."
    2:
      DisplayName: "<bold><blue>Classic Sword</bold>"
      DisplayItem: "DIAMOND_SWORD"
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability is 100, It subtracts 7.
      # It cannot be 0.
      DisplayDamage: 7
      DisplayAmount: 1
      Lore:
        - "<gray>Win a old classic sword."
        - "<bold><gold>Chance: <red>35%</bold>"
      DisplayEnchantments:
        - "DAMAGE_ALL:2"
        - "FIRE_ASPECT:1"
      MaxRange: 100
      Chance: 35
      Items:
        - "Item:DIAMOND_SWORD, Amount:1, Damage:7, Name:<bold><blue>Classic Sword</bold>, DAMAGE_ALL:2, FIRE_ASPECT:1"
      Messages:
        - "<gray>You just won <reset>%reward%."
    3:
      DisplayName: "<bold><yellow>$100,000</bold>"
      DisplayItem: "SUNFLOWER"
      DisplayAmount: 1
      Lore:
        - "<gray>Make it rain a lot of Money."
        - "<bold><gold>Chance: <red>20%</bold>"
      MaxRange: 100
      Chance: 20
      Firework: true
      Commands:
        - "eco give %player% 100000"
      Messages:
        - "<gray>You just won <reset>%reward%."
```