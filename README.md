URL-Shortener-MicroService
==========================

1.You can pass a URL as a parameter in the URL after /new/ and you will receive a shortened URL version in a JSON response. Example you will pass, lets say Google to the URL. In the Heroku app URL you will add /new/https://www.google.com.

2.When you vist the shortened URL it will redirect you to your URL that you originally inserted into the URL after the /new/.

Example usage:

[HerokuAppNameHere/new/https://www.google.com](insertActualUrlHere)

[HerokuAppNameHere/new/https://www.github.com](insertActualUrlHere)

Example output:

:thumbsup: {"original\_url":"https://www.google.com", "short\_url":"https://herokuappname.com/new/45"}

:thumbsdown: {"error": "Error the URL is invalid, please check for errors"}

Example output usage:

Lets say you get this https://herokuappname.com/new/45. You can insert this in the URL and it will redirect you to you original URL.


Created By Matt C. Copyright 2017
