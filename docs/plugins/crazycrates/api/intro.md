---
id: crate-api-intro
title: Api Intro
slug: /crazycrates/api/intro
hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: Api Intro
---

# Developer API

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Adding CrazyCrates to your project</a>
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
    compileOnly "com.badbones69.crazycrates:crazycrates-paper-api:1.11.7"
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
    compileOnly("com.badbones69.crazycrates", "crazycrates-paper-api", "1.11.7")
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
  <groupId>com.badbones69.crazycrates</groupId>
  <artifactId>crazycrates-paper-api</artifactId>
  <version>1.11.7</version>
 </dependency>
```
</details>