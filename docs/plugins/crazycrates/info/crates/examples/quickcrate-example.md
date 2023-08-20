---
id: crazycrates-quick-example
title: QuickCrate
slug: /crazycrates/info/crates/examples/quickcrate
hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: QuickCrate Example
---
```yml
Crate:
  # Type of crate -> CSGO/QuadCrate/QuickCrate/Roulette/CrateOnTheGo/FireCracker/Wonder/Wheel/War
  # See CosmicCrateExample.yml to see how the Cosmic CrateType works.
  # QuickCrate simply allows you to speed open crates.
  CrateType: QuickCrate
  CrateName: '&eClassic Crate'
  Preview-Name: '&eClassic Crate Preview'
  StartingKeys: 0
  RequiredKeys: 0
  Max-Mass-Open: 10
  InGUI: false
  Slot: 14
  OpeningBroadCast: true
  BroadCast: '%prefix%&6&l%player%&r &7is opening a &e&lClassic Chest&7.'
  Prize-Message:
    - '&7You have won &c%reward% &7from &c%crate%.'
  Item: 'CHEST'
  Glowing: false
  Name: '&e&lClassic Chest'
  Lore:
    - '&7This crate contains classic items.'
    - '&7You have &6%Keys% keys &7to open this crate with.'
    - '&7&l(&e&l!&7&l) Right click to view rewards.'
  Preview:
    Toggle: true
    ChestLines: 6
    Glass:
      Toggle: true
      # The name of the border item.
      Name: ' '
      Item: 'YELLOW_STAINED_GLASS_PANE'
  PhysicalKey:
    Name: '&e&lClassic Crate &c&lKey'
    Lore:
      - '&7A special Key'
      - '&7For a special Crate.'
    Item: 'TRIPWIRE_HOOK'
    Glowing: True
  Hologram:
    Toggle: true
    Height: 1.5
    Message:
      - '&e&lClassic Chest'
  Prizes:
    1:
      DisplayName: '&a&lFancy Pants'
      DisplayItem: 'CHAINMAIL_LEGGINGS'
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability
      # Durability is 100, It subtracts 75.
      # It cannot be 0.
      DisplayDamage: 75
      DisplayTrim:
        # Available Materials: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html
        Material: 'QUARTZ'
        # Available Patterns: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html
        Pattern: 'SENTRY'
      DisplayAmount: 1
      Lore:
        - '&7Win a fancy pair of pants.'
        - '&6&lChance: &c&l40%'
      DisplayEnchantments:
        - 'PROTECTION_ENVIRONMENTAL:2'
      MaxRange: 100
      Chance: 40
      Items:
        - 'Item:CHAINMAIL_LEGGINGS, Amount:1, Damage:75, Trim-Pattern:SENTRY, Trim-Material:LAPIS, Name:&aFancy Pants, PROTECTION_ENVIRONMENTAL:2'
      Messages:
        - '&7You just won a &r%reward%.'
    2:
      DisplayName: '&b&lClassic Sword'
      DisplayItem: 'DIAMOND_SWORD'
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability
      # Durability is 100, It subtracts 7.
      # It cannot be 0.
      DisplayDamage: 7
      DisplayAmount: 1
      Lore:
        - '&7Win a old classic sword.'
        - '&6&lChance: &c&l35%'
      DisplayEnchantments:
        - 'DAMAGE_ALL:2'
        - 'FIRE_ASPECT:1'
      MaxRange: 100
      Chance: 35
      Items:
        - 'Item:DIAMOND_SWORD, Amount:1, Damage:7, Name:&bClassic Sword, DAMAGE_ALL:2, FIRE_ASPECT:1'
      Messages:
        - '&7You just won &r%reward%.'
    3:
      DisplayName: '&e&l$100,000'
      DisplayItem: 'SUNFLOWER'
      DisplayAmount: 1
      Lore:
        - '&7Make it rain a lot of Money.'
        - '&6&lChance: &c&l20%'
      MaxRange: 100
      Chance: 20
      Firework: true
      Commands:
        - 'eco give %player% 100000'
      Messages:
        - '&7You just won &r%reward%.'
```