# CrazyDocs
A wiki deployed via github pages @ https://docs.crazycrew.us

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
    slug: /
    hide_title: true
    hide_table_of_contents: true
    pagination_next: null
    pagination_prev: null
    sidebar_label: Docs Overview
    ---
    ```
    * `getting_started/overview` is considered the path while `/overview` is the page id defined above.
    * The build will fail if you type the wrong one.
* Go to `sidebars.js` and follow what's already in there on how to add one.
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

## JavaScript/TypeScript/React
* You must have knowledge of either one of these
  * The project is temporarily using JavaScript but I'll likely convert it to TypeScript
* You must have some knowledge of ReactJS as I'll be adding more components related to ReactJS to the project.

## Styling
* The site needs a theme, I am going to be working on one but I'll be deciding between css/scss or simply using ReactJS components so please hold off on pull requests with anything relating to how the website looks.
