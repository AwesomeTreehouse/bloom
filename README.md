# Bloom
Bloom is an all-in-one tool to help you brew some damn fine coffee! The inspiration to build this application came from a deep love of coffee and the desire to have a timer, ratio helper, and a way to keep track of my brews all in one place.

In building this app I wanted to explore the use of an external API as well as keeping certain design elements consistent and clean. The snappy user experience is thanks to a front-end built with React.js and React Router which prevents the need for frequent page reloads. For a nice, familiar user authentication experience I utilized Google OAuth 2.0 so signing in as easy as could be.

## Technologies
* Ruby on Rails back end with PostgreSQL database
* React.js front-end with React Router to prevent page reloads
* Google OAuth 2.0 for easy sign up & log in.
* Yelp external API
* Mobile First design
* Clean, minimalist styling to make the user experience simple and enjoyable

## Setup
To get set up, clone this repository and run:
```
bundle
rake db:create
rake db:migrate
rails s
```

In a separate terminal window, run:
```
yarn install
yarn start
```
