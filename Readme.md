# Personal Project “What to watch”.

Using React, TypeScript, React Router, Redux, Hooks, optimization.

**About the project**
"What to watch" is an online cinema. Watch new items free and good quality. Leave reviews, rate and choose movie.

---

**Description of functionality**

Application Pages
The application consists of several pages: Main (/), Sign In (/login), MyList (/mylist), Film (/films/:id), Add review (/films/:id/review), Player (/player/:id).

MyList, Add review pages are available only to authorized users. If the user is not authorized, these pages are redirected to the Sign In page.

If the user is not authorized, then when trying to go to the private page, a redirect to the "Sign In" page (/login) is performed.

The user's avatar and the "Sign Out" button (if the user is authorized) or the Sign In link (if the user is not authorized) are displayed in the right corner of the cap.

Clicking on the "Sign Out" button leads to the end of the session - leaving the closed part of the application.

Clicking on the user's avatar takes you to the MyList (/mylist) page.

Accessing a non-existent page (for example, through the address bar) does not lead to errors in the application, but is correctly processed by routing. The user is redirected to the 404 page. 

---

**Main page**

The main page presents genres, previews of films.

A page with a detailed description of the film is available to all users.

The page header displays the poster and cover of the promo film.

You can immediately watch the promo film by clicking the "Play" button or add it to the "My List" list.

The promo movie for the main page is received by a separate request to the server (see "Routes").

After downloading the application, 8 movie cards of arbitrary genres are displayed. In the list of genres highlighted "All genes."

The list of genres displays no more than 9 genres + All genes (lists films of any genre).

---

**List of films**

When changing the genre or receiving information about films from the server, no more than 8 films are displayed in the list of films.

Additional movies are shown by clicking on the "Show more" button.

Clicking on the "Show more" button adds the next 8 films to the list or the remaining films, if there are fewer of them.

After displaying all films corresponding to the selected genre, the "Show more" button is hidden.

---

**Movie card in the list of movies**

The following information is displayed in the movie card:
  Image (film preview).
  Film title.

Clicking on an image or movie title takes you to the Film page (/films/:id).

When you hover and hold the mouse over an image of a movie, a video preview of the movie begins to play instead of an image.

---

**Movie Description Page**

A page with a detailed description of the film is available /films/:id, where id is the movie ID received from the server. 

A page with a detailed description of the film is available to all users.

The page header contains the following set of information:
  Frame from the movie.
  Poster.
  Film title.
  Genre.
  Year of release.
  The button to start the view.
  Add to View list button.
  Click the button to go to the Add Feedback page.

More detailed information about the film is presented in three tabs:
  Overview. General information.
  Details. Extended information.
  Reviews. Reviews.

---

**Tabs on the movie description page**

Overview. General information about the film:
  Description of the film.
  Rating. For example, 8.9 (always one decimal place).
  Description of the assessment (Bad, Normal, Good, Very good, Awesome).
  Number of votes.
  Director.
  List of actors.

Details. Advanced Information:
  Director.
  Cast.
  Duration (hours, minutes).
  Genre.
  Year of release.

Reviews. List of user reviews.

---

**Evaluation of the film**

The text representation of the film assessment is formed according to the following rules:
0 to 3 - Bad.
3 to 5 - Normal.
5 to 8 - Good.
8 to 10 - Very good.
10 — Awesome.

---

**Similar films**

The "More like this" block shows similar movies. The block displays up to 4 cards of similar films.

A list of similar movies is downloaded from the server (see "Routes").

The cards contain the same set of information as the cards on the home page.

Clicking on the card from the "More like this" block takes you to the "Film" page of the corresponding film.

---

**Reviews**

Each review contains:
  Feedback text.
  User assessment.
  User name.
  Date of recall in the format: Month (full name) day, year. 
  
Add a new revocation by clicking on the "Add review" button. The button should only be displayed for authorized users.

---

**Feedback Submission Form**

Clicking the "Add review" button takes you to the Add review (/films/:id/review) page.

The page is available only to authorized users. Unauthorized users are redirected to the "Sign In" page.

The user gives the film a rating of 1 to 10. The evaluation is made by highlighting a certain number of stars. If users did not have time to rate the film, the server will return 0 as the rating.

The feedback text must be at least 50 characters and not more than 400 characters.

Until the user has rated and entered a valid amount of text, the button for sending feedback is not active.

When you click the Post button and send data, the Submit button and the entire form must be blocked. The form and button are unlocked if the upload is successful or if an error occurs.

If the form is successfully submitted, the user is redirected to the current movie card.

---

**MyList page**

The page contains information about movies added to the To Watch list.

The data for the MyList page is always downloaded from the server. To do this, there is a separate route (see the section "Interaction with the server").

Add to the "To View" list by clicking on the "+ MyList" button on the "Film" page and on the main page for the promo film. The "+ MyList" button is replaced with the "✓ MyList" button.

If the movie is already added to the To View list, clicking the ✓ My List button removes the movie from the list. The "✓ MyList" button is replaced with the "+ MyList" button.

The MyList page is available only to authorized users. Unauthorized users are redirected to the Sign In page.

Clicking on the film card (image, title) takes you to the "Film" page with a detailed description of the film.

---

**Sign In page**

The Sign in page is available at /login.

To enter the service, the user enters a login (email) and password.

Since the service doesn't have the ability to register, the login and password can be any, but not empty.

The correct email must be entered in the "login" field.

A valid password must be entered in the "password" field. A valid password means a password that consists of at least one letter and number.

The page is available only to unauthorized users. Redirects authorized users to the home page.

The error information is output to the error block.

---

**Watching movies**

When you click on the "Play" button, the player is drawn and the selected film starts showing. An animated spinner is displayed at the time the film is uploaded. The implementation of the spinner remains at the discretion of the developer.

Player functionality:
  «Play/Pause». Start/stop video.
  «Fullscreen». Switch to full-screen mode.
  «Time elapsed». Remaining video playback time. The time is displayed in the format -MM: SS - minutes, seconds or -HH: MM: SS - hours, minutes,   seconds, if the video duration is more than one hour.
  «Exit». Stop browsing. The player is hiding.

The player is implemented using <video>.

---
  
**Interaction with the server**

All necessary data is downloaded from the server.
The server is available at: https ://8.react.pages.academy/wtw.
If the server is unavailable, an information message is displayed. The design of the message remains at the discretion of the developer.
The server receives the data as a JSON object.
Server authorization is based on a token. The token is passed with each request in the X-Token header.
  
  
  
