# This is the EQ Trainer for Spotify App 

This is my current project

# How to use EQ Trainer for Spotify:

- Login with Spotify
- Experiment with EQ on tracks from your Spotify playlists in the Playground
- Challenge yourself by guessing the parameters of the EQ in the Training section


# How to use EQ Trainer for Spotify locally:

- Fork and clone this repo
- Fork and clone the backend API [here](https://github.com/lovecosma/eq-trainer-for-spotify-api)
  - You will have to add your Spotify API credentials to credentials.yml
  - Check out Spotify API [docs](https://developer.spotify.com/documentation/web-api/) for more info on how to setup your requests
- Run bundle install && rails s in api's directory to start API
- Run yarn install && yarn start to run client
- Login with Spotify


# Key Technology:

- Ruby on Rails API
- Spotify API - for user authentication and retrieving user playlists/tracks / artwork
- Tone.js - Web Audio API wrapper library
- React/Redux - Javascript framework for DOM manipulation and client side rendering
- RestClient - simple HTTP and REST client for Ruby
- activerecord - ORM library for Ruby
- postgresql - relational database
- react-sliders
