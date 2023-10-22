---
id: crazyvouchers-api-intro
title: Developer API
slug: /crazyvouchers/api/intro
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
    compileOnly "com.badbones69.crazyvouchers:crazyvouchers-paper-api:3.1.5"
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
    compileOnly("com.badbones69.crazyvouchers", "crazyvouchers-paper-api", "3.1.5")
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
  <groupId>com.badbones69.crazyvouchers</groupId>
  <artifactId>crazyvouchers-paper-api</artifactId>
  <version>3.1.5</version>
  <scope>provided</scope>
 </dependency>
```
</details>