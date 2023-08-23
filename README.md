# React Notes App

The Notes app was a more advanced project, making use of different React libaries, database storage, useState/useEffect and debouncing.

## Note Setup

When no notes are present in the database, the user is presented with the option to make a new note. Upon selecting the option, the user is given a sidebar, where the list of notes is located, and a markdown editor created through the use of react-mde and showdown. 

Initial start screen for notes app.
![no-notes](/public/no-notes.png)

As the user adds notes, the sidebar containing the notes is populated according to the notes saved in the database. The most recent note (either added or edited) is pushed to the top of the sidebar to make it more accessable for the user.

Populated notes view
![notes](/public/notes.png)

## Firestore and Debouncing

Google's Firestore database is used to save user created notes. The Firestore provided tools such as addDoc, removeDoc, etc. are used to keep the database in sync with the users created notes, in conjunction with React's useEffect and useState functionality. Debouncing is done through React's useEffect, where requests to/from the database are only made 500ms after the last user input. This ensures that there requests are not being made on every user input, which would result in more requests then actually required to have the notes app perform its task.

Firestore database
![firestore](/public/firestore.png)

