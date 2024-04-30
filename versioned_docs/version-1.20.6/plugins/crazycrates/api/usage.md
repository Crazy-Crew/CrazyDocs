---
title: API Usage

hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: API Usage
---
## Add virtual keys to a player
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addKeys(5, uuid, "CrateName", KeyType.virtual_key);
```

## Add physical keys to a player
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addKeys(5, uuid, "CrateName", KeyType.physical_key);
```

## Update or add how many times a player has opened a crate.
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addOpenedCrate(uuid, "CrateName");
```

## An example of the api in use in a plugin.
> https://github.com/Crazy-Crew/ExamplePlugin/tree/main
> You can compile the plugin using ./gradlew assemble
