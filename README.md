# flickr-cards

Consumes the public Flickr API and display the results according to specified wireframe. 

## Quick Overview

* The website is built as a SPA.
* The tech stack used ReactJS.
* App is fully responsive across all devices and screen sizes.
* App has been tested in all major browsers on both Windows and Mac as well as Android Mobile device (Chrome, Firefox, Safari, IE11).
* Added polyfill for IE11.
* Public feed served images not suitable for all ages, that's why the App uses Flickr Search Photos API, where an appropriate API key was requested
* All photos are suitable for all ages. 
* Code has unit tests to cover the core functionality as a minimum.
* Lazy loading has been implemented using **react-lazyload**.
* CSS animations for image loading and hover interactions.
* When thumbnail image is clicked it opens a modal with a large version of the image.

## To run the app 

1. Run `sh npm i`
2. Run `sh npm start` to run locally
3. Run `npm test` and verify all tests pass
4. Run `sh npm run build` to build views and minify js/css

## Link to a life demo  

[Demo page](http://cherneva.com/demos/flickr-cards)