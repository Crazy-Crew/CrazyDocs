---
id: crazyenvoys-faq
title: CrazyEnvoys Q/A
slug: /crazyenvoys/faq
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: FAQ
---
### 1. Why do colors in console look weird?
#### Add this value to your startup flags!
 * -Dnet.kyori.ansi.colorLevel=truecolor

### 2. Unsupported api-version 1.20  Warning, You will be on your own if you run into any errors if we deem it's because of missing api/new fixes not available on older versions.
* You need to use [1.20.4](https://papermc.io/) as we do not support legacy versions.
* You can open the plugin in 7zip, winrar or peazip, nanazip or whatever zip flavor you like and edit the plugin.yml's api-version or simply go to the [modrinth's version tab](https://modrinth.com/plugin/crazyenvoys/versions) and filter by version.

### 3. What hologram plugins do you support?
 * DecentHolograms
 * CMI Holograms
   * Note: CMI Holograms required the holograms module to be enabled in `modules.yml`

### 4. How do I add items?
 * Open up your `tiers` folder
 * Open up one of your `.yml` files
 * Scroll down to the `prize` section and copy paste what's already there.

### 5. How do I give permissions to players?
 * Use a plugin such as [LuckPerms](https://luckperms.net), Please do read through their [wiki](https://luckperms.net/wiki)
   * Make sure to check our [Commands](info/commands/permissions) page for updated permissions.

### 6. Why can I claim envoys but my players can't?
 #### Potential Solutions
  * Set `spawn-protection` to 0 ( requires server restart )
  * WorldGuard
    * Make sure you are not using `block-break`, `build`. You do not need to use these flags to protect spawn.
    * WorldGuard states that if you are not a member of the region, You cannot build or break by default.
    * You can read more at [Worldguard's Flag Section](https://worldguard.enginehub.org/en/latest/regions/flags/)
  * Claim Permissions
    * Each tier has the ability to require a permission for a player to claim them.
     * You can turn this off by going into one of your `.yml` files in the `tiers` folder.
    ```yml
    Settings:
    # If they need a permission to claim this envoy. Set too false to disable.
    Claim-Permission: false
    # What permission they need.
    Claim-Permission-Name: 'lucky.envoy.use'
    ```

### 7. Why did you stop supporting Holographic Displays?
 * Filoghost has put the plugin into maintenance mode, The last update for Holographic Displays was at least a month ago & does not have 1.20.1 support.
   * I recommend switching to [DecentHolograms](https://www.spigotmc.org/resources/decentholograms-1-8-1-20-1-papi-support-no-dependencies.96927/)

### 8. What's wrong with my config or envoy files?
#### Steps you can do before quickly jumping for support.
 * Run all your configuration files through [yamlint](https://www.yamllint.com/), It will tell you if you have any errors.
 * If you are confused on how to fix errors or read yaml, A nifty little guide for you by our favorite [longdick122](https://longbow122.github.io/learnerForYAML/)

#### If you have exhausted the previous steps.
 * Check your console for errors, any errors related to CrazyEnvoys.
  * Use this [paste service](https://mclo.gs/) for any errors or configurations.
  * Join our [discord](https://discord.gg/badbones-s-live-chat-182615261403283459) then head to #crazy-envoys
  * Send the url you got from the `paste service` link above.

### 9. Can I make supply drops spawn in multiple worlds?
 * You can only make supply drops spawn in multiple worlds by using `/envoy edit`

### 10. Why doesn't crate countdown work?
 * You need to have the option enabled in your `config.yml`
  ```yml
  Settings:
   Crate-Countdown:
     Toggle: false # If there should be a grace period when envoys spawn.
     # Recommended value is at least 15+ seconds. With falling blocks, that takes up about 5 seconds and for technical reasons. I can't start it after that...
     Time: 120 # How long in seconds till the envoys can be opened?
     Message: '&cReady to claim.' # The message to show if the countdown is up or the toggle is set to false.
     # Needs to have a space, so it's not crunched next to the countdown.
     Message-Seconds: ' seconds.'
  ```
 * You also need to have [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installed!