---
id: crazyenvoys-chance-system
title: Chance System
slug: /crazyenvoys/tiers/chance-system
hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: Chance System
---
### How to use the chance system in CrazyEnvoys:
If you've opened any of the tier files, you should be able to recognize three settings relating to probability. These will be `Spawn-Chance`, `Chance` and `Use-Chance`.

`Spawn-chance` is the probability that the specific tier/envoy type will spawn in the world, this cannot be turned off, so if you want to **_always_** spawn that specific tier, set it to 100. 

`Chance` is the probability that a prize will be given to the user. This on the other hand can be turned off, however it makes a random selection; further explained below. 

`Use-chance` If this option is set to true, it will use the `Chance` setting above in each prize file. If set to false, it will randomly select a prize from the section with a probability of 1/n where n is how many prizes are in the Tier file.

<details>
<summary><b>Additional Information Regarding Bulk Prizes</b></summary>

If you have multiple prizes, and do not have the setting `Bulk-Prizes.Toggle` set to `false` and a prize has 100% probability, there is no other chance for another prize to be selected. Set to `true` for this to allow for a guaranteed selection of at least one prize and the chance for however many more. 

If you want to give a specific prize every time AND an additional chance/random prize set `Chance` to 100 and configure your file to reflect the following
```yml
Bulk-Prizes:
   Toggle: true
   Random: true
   MaxBulk: 2
```
</details>

### Checking all prizes:
1. Loops through a list of prizes, checking each one individually
2. Checks if the individual prize has a successful probability of being selected.
3. If it is successful then it puts the prize into a winning list. If not, it does nothing.
4. Continues through the loop, repeating steps 2 & 3 until it reaches the end of the list.

### After all prizes have been checked:
1. A random prize is chosen from the list of items from the previous step. (It does not worry about chances the prize has in this state from the crate files)
2. Once the prize is picked it will be given to the player.