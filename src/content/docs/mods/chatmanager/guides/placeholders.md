---
title: Placeholders
---
PlaceholderAPI is supported in `all` aspects of the plugin except for console messages.

Available Placeholders:
* `{player}` - Shows the players name.
* `{prefix}` - Shows the prefix that's set in the messages file.
* `{message}` - The message the player typed. Used in the chat format, staff chat, social spy, announcement and warning messages, and the staff notification formats.

Chat Format only:
* `{radius}` - The players chat radius channel prefix, when Chat Radius is enabled.

:::caution
`{server_name}` appears in the default join and title messages, but it is currently not replaced by the plugin. Replace it with your server's name until this is fixed.
:::

PlaceholderAPI Placeholders:
* %chatmanager_radius% - Shows what chat radius channel the player is in.
* %chatmanager_toggle_pm% - Shows if toggle pm is enabled or disabled.
* %chatmanager_toggle_chat% - Shows if toggle chat is enabled or disabled.
* %chatmanager_command_spy% - Shows if command spy is enabled or disabled.
* %chatmanager_social_spy% - Shows if social spy is enabled or disabled.
* %chatmanager_mute_chat% - Shows if mute chat is enabled or disabled.
* %chatmanager_staff_chat% - Shows if staff chat is enabled or disabled.
