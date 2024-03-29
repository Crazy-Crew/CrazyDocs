---
id: crazyenchantments-api-intro
title: Developer API
slug: /crazyenchantments/api/intro
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: API Intro
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
    compileOnly "com.badbones69.crazyenchantments:crazyenchantments-paper-api:2.1.2"
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
    compileOnly("com.badbones69.crazyenchantments", "crazyenchantments-paper-api", "2.1.2")
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
  <version>2.1.2</version>
  <scope>provided</scope>
 </dependency>
```
</details>
