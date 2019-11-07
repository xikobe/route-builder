
## Hello francisco_map

This is my interpretation of the route builder challenge. I built it with:

 - [react](https://github.com/facebook/react)
 - [emotion (css-in-js)](https://emotion.sh/docs/introduction)
 - [chakra UI](https://chakra-ui.com/) for simple UI design system
 - [google-maps](https://www.ecosia.org/search?q=google%20maps%20api&addon=chrome&addonversion=2.1.0)
 - [jest](https://jestjs.io/), [enzyme](https://github.com/airbnb/enzyme) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for unit tests
 - [gps-to-gpx](https://www.npmjs.com/package/gps-to-gpx) for building gpx file
 - [react-sortable-hoc](https://www.npmjs.com/package/react-sortable-hoc) for sorting list UI

The way I approached this project was trying to figure out the little things I wanted to deliver:

 - clicking on the map creates markers
 - with the markers, draw the line between them
 - having a decoupled way of creating + drawing markers and line between them
 - store the markers for them to be used by the list component
 - how to generate the gpx file (totally unknown to me in the beginning)

After having all this things sorted out, I was able to work on:

- removing markers
- re-drawing the map
- ordering the map

The biggest challenges were:

- not using an existent google-map-react component. But in the end I'm happy that I accepted the challenge because I think the code written is very simple.
- creating server to build gpx file (not complex but had to investigate a bit because I don't have much experience with backend work).
- handling markers data in a way that was simple enough to access and manipulate them and redraw the map correctly. I opted to try the new context api because it's something that I don't use much on my everyday work (redux for the past 3 years). I ended up with mixed feelings about it but for this specific feature, it works fine.
- using the context api required a bigger effort related to unit testing
- the emotion and chakra ui libraries were also new to me and I also don't think I'd go for that again. chakra UI is a bit broken while unit testing.

Take aways:

It was a good exercise  and I'm happy with the end result and the approach I took. Got the opportunity to try things I don't normally use and that is always good fun. Hope it's enough to show what I can do.

## Running the project

### Pre conditions
- Extract/pull files from zip/repo.
- Install dependencies `npm i`
- Create `.env.local` file with `REACT_APP_MAP_KEY` variable
- Insert a valid google maps api key

### Running local dev
- on root folder
- start local app `npm run start`
- start local express server `node server.js`
- app will run in `http://localhost:3000/`

### Running prod build
- on root folder
- `npm run build`
- start server `node server.js`
- app will run in `http://localhost:8080/`
