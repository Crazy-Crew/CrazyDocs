---
title: Developer API
description: Get started with the api

hide_title: false

sidebar_label: API Intro
sidebar_position: 1
---
## Groovy
<details>
 <summary>
   Gradle (Groovy)
 </summary>

```gradle
repositories {
    maven {
        url = "https://repo.crazycrew.us/releases"
    }
}
```

```gradle
dependencies {
    compileOnly "com.badbones69.crazyenchantments:crazyenchantments-paper-api:2.5"
}
```
</details>

## Kotlin
<details>
 <summary>
   Gradle (Kotlin)
 </summary>

```gradle
repositories {
    maven("https://repo.crazycrew.us/releases")
}
```

```gradle
dependencies {
    compileOnly("com.badbones69.crazyenchantments", "crazyenchantments-paper-api", "2.5")
}
```
</details>

## Maven
<details>
 <summary>
   Maven
 </summary>

```xml
<repository>
  <id>crazycrew-releases</id>
  <url>https://repo.crazycrew.us/releases</url>
</repository>
```

```xml
<dependency>
  <groupId>com.badbones69.crazyenchantments</groupId>
  <artifactId>crazyenchantments-paper-api</artifactId>
  <version>2.5</version>
  <scope>provided</scope>
 </dependency>
```
</details>
