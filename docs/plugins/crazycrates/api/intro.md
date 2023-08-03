---
id: crazycrates-api-intro
title: Developer API
slug: /crazycrates/api/intro
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: API Intro
---
### Groovy
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
    compileOnly "com.badbones69.crazycrates:crazycrates-paper-api:1.13"
}
```
</details>

### Kotlin
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
    compileOnly("com.badbones69.crazycrates", "crazycrates-paper-api", "1.13")
}
```
</details>

### Maven
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
  <version>1.13</version>
 </dependency>
```
</details>