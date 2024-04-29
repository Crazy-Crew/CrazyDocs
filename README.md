# CrazyDocs
A wiki deployed via GitHub pages @ https://docs.crazycrew.us

# Contributing
Contributing is easy! We use markdown files for the wiki so anyone can contribute with a little reading.<br>
All `.md` files are located under `docs`, Each directory translates to a directory on the website. ( https://docs.crazycrew.us )

## Adding a new page
To add a new page is very simple!

* Create a new `.md` file in `docs`
  * Each `.md` file has a unique id found at the top.
    ```
    ---
    id: overview
    title: Docs Overview
    
    hide_title: true
    hide_table_of_contents: true
    
    pagination_next: null
    pagination_prev: null
    
    sidebar_label: Docs Overview
    sidebar_position: 1
    ---
    ```
    * `getting_started/overview` is considered the path while `/overview` is the page id defined above.
    * The build will fail if you type the wrong one.
* use the command `npm run start`
* Go to http://localhost:3000
* Make changes until it looks right.
* Once it look rights, create a pull request!

## Editing Pages
* Simply edit the `.md` files.
* use the command `npm run start`.
* Go to http://localhost:3000
* Make changes until it looks right.
* Make a pull request once it looks right.

## Requirements
* You must know TypeScript and React