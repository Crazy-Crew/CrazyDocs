---
title: Developer API
description: Get started with the api
---
:::caution
The latest published `crazyenchantments-paper-api` is 2.5, released in August 2024. The current plugin does not publish an API, so this artifact does not match current plugin versions.
:::

## Groovy
<details>
 <summary>
   Gradle (Groovy)
 </summary>

```groovy
repositories {
    maven {
        url = "https://repo.crazycrew.us/releases"
    }
}
```

```groovy
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

```kotlin
repositories {
    maven("https://repo.crazycrew.us/releases")
}
```

```kotlin
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
