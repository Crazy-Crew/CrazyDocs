---
title: Getting Started
description: Configure everything about the main menu!

slug: mods/crazycrates/reference/menus/main/index
---
The main menu is the menu that opens when a player runs `/crates` (or `/crazycrates`). It lists every crate that has `InGUI: true` in its crate file, placed in the slot set by that crate's `Slot` option.

The menu itself is configured in `config.yml` under the `gui` section:

| Option                        | Description                                                                                                  | Default |
|-------------------------------|--------------------------------------------------------------------------------------------------------------|---------|
| `gui.toggle`                  | If `/crates` should open the main menu. Turning this off also removes the menu button from crate previews.   | `true`  |
| `gui.inventory.name`          | The title of the menu.                                                                                       | `"<bold><gradient:#e91e63:blue>Crazy Crates</gradient></bold>"` |
| `gui.inventory.rows`          | The amount of rows the menu has.                                                                             | `5`     |
| `gui.inventory.buttons.menu`  | The main menu button.                                                                                        |         |
| `gui.inventory.buttons.next`  | The next page button.                                                                                        |         |
| `gui.inventory.buttons.back`  | The previous page button.                                                                                    |         |
| `gui.inventory.buttons.filler.toggle` | Fill the menu with a single item.                                                                    | `false` |
| `gui.inventory.buttons.customizer.toggle` | Enable per-slot items from `customizer.items`, i.e. `"slot:0, item:red_stained_glass_pane, name: "`. | `true`  |

:::note
A full reference for every option in the main menu is coming soon. Until then, the comments in the default `config.yml` explain each option.
:::
