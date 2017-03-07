# Avaandmete päev 4. märtsil / Open Data Day on March 4th — Tartu 2017

![4. märtsil Tartus / March 4th in Tartu, Estonia](https://github.com/okestonia/opendataday/blob/master/images/odd2017-plain.png?raw=true)

This is repository for oganizing the event, information about program and participants is found at:

* Facebook event: https://www.facebook.com/events/1856419724613761
* Web page: http://opendata.ee/opendataday

See you on Saturday!

## Call for participation

Any ideas how to make meaningful use of some public data? Maybe visualise, calculate some statistics, some data journalism, maybe build an app? Just curious about some datasets or want to scrape something that's not so directly available yet?

Bring your ideas to Open Data Day where we can explore them together in series of workshops. Don't hesitate to contact us to discuss how to prepare for the day and if you have any particular interest, we might be able to connect you with the right people and organize a workshop/track that deals with things you are most interested in!

This year we are putting research data in focus and we want to build a link between scienctific data and real current issues we are facing as citizens and humans living in a global society. We partner with Wikimedia and use data from [Open Science repositories](https://utlib.ut.ee/avatud-teadus-open-science) from Tartu University Library and we're mixing it up with public and scraped data from other sources.

Of course any questions, ideas and projects on Open Data are welcome, so reserve Saturday 4th of March for Open Data and join us discussing any aspect of making use of data! There will be lots of us at the event, so there is definitely something interesting for you, too!

If you want to join in organizing the Open Data Day in Tartu, please contact one of the organisers or [file an issue](https://github.com/okestonia/opendataday/issues) about what you think is still needed to be done.

Currently the team consists of:

* Märt Põder
* Werko Pihor
* Maria Deriaga
* Nicola Vitucci
* Eno Menov
* Tõnis Kärdi

Soon we will have information about Open Data Day 2017 on http://opendata.ee and we are currently putting together the list of workshops/tracks that will be hosted on Open Data Day. And, yes, we strongly encourage you to bring your own ideas to the event, so contact us in advance to make the most of it!

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

