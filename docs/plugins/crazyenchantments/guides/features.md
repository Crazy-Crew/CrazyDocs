---
title: Features

hide_title: true
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Features
sidebar_position: 4
---
## Tinkerer
The Tinkerer is a tool that allows you to recycle old enchanted items such as armor, tools, weapons, or enchantment books. Instead of discarding them into the lava, you can use the Tinkerer to receive rewards such as XP and mystery dust in exchange for these items.

#### Example
1. Run the command `/Tinkerer` `/Tinker`
2. Click the items you want to recycle
3. Look at the rewards you get on the right side
4. Click any items you want to take back
5. Click the recycle button to receive your rewards

## Black Smith
The Black Smith is a tool that allows you to combine custom enchantments. It functions similarly to a regular anvil, but specifically for custom enchantments. As you add new enchantments or upgrade existing ones on an item, the XP cost will increase.

#### Example
1. Run the command `/BlackSmith` `/BS`
2. Click the two items you wish to combine
3. Check out how much the new item will cost
4. Click on the new item to finalize the deal

## GKitz
GKitz are similar to regular kits, but the items they contain can have random enchantment levels. This makes them ideal for daily or weekly kits, as the player may receive armor that is fully upgraded or has randomly leveled enchantments.

#### Example
https://github.com/Crazy-Crew/CrazyEnchantments/blob/main/paper/src/main/resources/GKitz.yml

## Lost Books
Lost books make great rewards for players because they contain unknown enchantments. The enchantment within the book is not revealed until the player right-clicks on it. Once right-clicked, the book will reveal its enchantment.

## Rates
### Success Rate Description
The success rate of an enchantment book determines the likelihood of it being successfully added to an item. The higher the success rate, the greater the chance of the enchantment being applied. If the success rate is met, the enchantment will be added to the item, even if the destroy rate is triggered.
### Destroy Rate Description
The destroy rate determines the likelihood of both the item and the enchantment book being destroyed during the enchanting process. If the destroy rate is successful and the success rate fails, both the item and the book will be destroyed, unless the item being enchanted has a white scroll applied to it, in which case only the book will be destroyed.
### No Rate Description
If neither the Success or Destroy rate is successful then the enchantment book fails and only the book is destroyed.

## Dust
### Mystery Dust Description
When right-clicked has a 1/3 chance of being either Success Dust, Destroy Dust, or Failed Dust.
### Success Dust Description
When dropped onto a custom enchantment book, it will increase the suckess rate of the item by the percent specified.
### Destroy Dust Description
When dropped onto a custom enchantment book, it will decrease the destroy rate on the book by the amount specified.
### Failed Dust Description
Failed dust has no use, except as a source of gunpowder for crafting TNT or fireworks. By default, failed dust is gunpowder, but this can be changed in the configuration settings.

## Scrolls
### White Scroll
When placed onto an item, it will protect the item from the destroy rate of custom enchantments.
### Black Scroll
When placed onto an item with custom enchantments, it will remove a random enchantment and return it back tho the users inventory in the shape of a book.
### Transmog Scroll
When applied to an item with custom enchantments, it will rearrange the item’s lore and add a number to its name indicating the total number of enchantments on the item.

## Protection Crystal
Protection crystals can be applied to any item and prevents it from being lost on death.

## Slot Crystal
Slot crystals are used to increase the amount of enchantments that you can have on an item from `crazyenchantments.base-limit.#` to `crazyenchantments.limit.#`.

## The Scrambler
The Scrambler allows players to re-roll the success and destroy rates of a custom enchantment book. This provides an opportunity to improve the rates of a less desirable book.

## Enchantment Limiter
The enchantment limiter is designed to prevent players from adding an unlimited amount of enchantments to an item. It can be used to limit the number of enchantments based on the player’s rank and permissions. However, this does not prevent players with lower permissions from using an item that has more enchantments than they are allowed to apply.