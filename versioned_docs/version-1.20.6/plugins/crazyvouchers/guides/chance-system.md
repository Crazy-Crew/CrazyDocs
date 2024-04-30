---
title: Chance System
description: A guide on how the chance system works

hide_title: false
sidebar_label: Chance System
sidebar_position: 1
---
### Explanation:
This page helps explain how the chance system works in this plugin.

### How it works:
When using the chance system it uses a raffle type of system. The more tickets you have in the bukkit the higher chance of you getting picked.

### Example:
Layout: `- '<Chance> <Command goes after>'`

```yml
chance-commands:
  - '45 eco give {player} 100'
  - '25 eco give {player} 1000'
  - '15 eco give {player} 10000'
  - '10 eco give {player} 100000'
  - '5 eco give {player} 1000000'
```

Each prize has its own tickets(chance) of being picked out of the big bukkit of tickets.