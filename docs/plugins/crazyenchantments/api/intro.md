---
id: crazyenchantments-api-intro
title: API Intro
slug: /crazyenchantments/api/intro
hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: API Intro
---
# Developer API

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Adding CrazyEnchantments to your project</a>
      <ul>
        <li><a href="##maven">Maven</a></li>
        <li><a href="##groovy">Gradle (Groovy)</a></li>
        <li><a href="##kotlin">Gradle (Kotlin)</a></li>
      </ul>
    </li>
  </ol>
</details>

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
    compileOnly "com.badbones69.crazyenchantments:crazyenchantments-api:1.9.8"
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
    compileOnly("com.badbones69.crazyenchantments", "crazyenchantments-api", "1.9.8")
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
  <artifactId>crazyenchantments-api</artifactId>
  <version>1.9.8</version>
 </dependency>
```
</details>