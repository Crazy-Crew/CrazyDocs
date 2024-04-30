---
title: Chance System
description: A guide on how the chance system works

hide_title: false

sidebar_label: Chance System
sidebar_position: 1
---
This is how the chance system works in Crazy Crates when finding the display item or final prize of a crate.
**Don't use `decimals` in the `Chance` option as that is what the Max Range is meant for.** ( i.e 0.3 )

### Checking all prizes:
1. Gets the next prize on the list.
2. Checks if its chance is successful.
3. If is successful then it puts the prize into a winning list and if not successful it does nothing.
4. Moves on to the next prize and goes back to step #1 until the last prize is done with.

### After all, prizes have been checked:
1. Goes into the winning list and picks a random prize from that winning list. (It does not worry about chances in this state)
2. Once the prize is picked it is the prize that is shown on the display or is given to the player as the final prize depending on what state the crate is currently in.

### How the Chance/Max Range works:
The max range option is there to allow for higher chances by using math to allow for decimals. This uses basic math to find out the final chance that the prize has.

#### Examples: (Chance / Max Range = Final Chance)
| Chance | Max Range | Final Chance |
|--------|-----------|--------------|
| 15     | 100       | 15%          |
| 15     | 1000      | 1.5%         |
| 15     | 10000     | 0.15%        |
| 15     | 100000    | 0.015%       |
| 15     | 1000000   | 0.0015%      |
| 15     | 10000000  | 0.00015%     |