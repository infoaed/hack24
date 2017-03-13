![24H POST-TRUTH HACKATHON](https://github.com/infoaed/hack24/raw/master/assets/images/logo-white-bg.png)

# 31.03‒1.04 in Tartu, Estonia

The topic of post-truth emerged as a challenge for information society during late 2016. However, problem with manipulating public opinion is not new, but it has taken unprecedented scale with new digital media sphere becoming widespread and versatile.

During hackathon we tackle with problems of trust, focusing on journalistic content itself and infrastructure of providing it.

The event will be held in Spark Demo Centre during 24h starting with a kick-off for the teams on Friday 31th March and ending with awarding the best solutions on the evening of April 1st.

Find out more on: http://hack24.ut.ee

# About the website

This site is built with [Lektor](https://www.getlektor.com/).

It has a bunch of dependencies, so do `npm install` and then `npm run build`.

`grunt` will watch for changes to your SCSS files, and also icons (see [svgstore](https://github.com/FWeinb/grunt-svgstore)).

You can launch `lektor server` to run a local server and preview the site on `http://localhost:5000`.

`lektor deploy` will deploy to the gh-pages branch, **putting changes live**, if you have deploy permissions. Remember that, in order to deploy correctly, you have to build the site first (you can use `lektor build && lektor deploy` to build and then deploy).

#### Translations

To translate the site we need to duplicate the `contents.lr` file, and save with the language code in the file name, like `contents+et.lr`.

We also need to add translations to `global-content.ini` and `main-nav.ini`.

If we are adding new language to the site we also need to:

- Add the new language to `languages.json`;
- Add the language to `project.lektorproject`.

