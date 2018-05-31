# fluent.Me Vocab

This app is about learning and developing vocab quickly, efficiently and in a fun way. It's designed to supplement any language learning program and allows you to make flashcards quickly that can be reviewed with a spaced repetition system to reinforce recall and production. The idea centers around images, fluency and the concept that naturally, to strenghten vocabulary recall we need to be able to associate it with a variety of images not just one.

[Wireframe of Concept](https://projects.invisionapp.com/freehand/document/nhTVXNRKw "Wireframe on InvisionApp")

## MUST HAVE:

+ user should be able to browse lists of thematic vocab in their target language
+ user should be able to see associated images
+ user should be able to review todays list of vocab in full and categorize words as easy, medium or hard
+ user should receive push notifications to review words according to the difficulty level they've assigned to the word
+ user should see scores and leaderboards based on words studied, words reviewed, time spent on app
+ user should see leaderboard for contribution in terms of pictures to the app

## NICE TO HAVE:

### FLASHCARDS:
+ cards should have "checkbox" in green allowing the user to check as "learned" which then stores the object in the learned card state and triggers future push notifications automatically. Once the card is "checked" it fades out and is replaced by a new card, until the daily limit is reached. As the daily limit is reached, the total number of cards disappears. Progress bar at the bottom shows the number of new cards learned.
+ idea: on the image you can swipe down to get a new image? for example if you don't like the initially loaded image.
+ idea: after seeing all the L2 words from the vocab list, could swipe down whole page to refresh images and this time, after pressing, get a list of three words and choose the right one: (i.e: the dog picture reveals "perro, gato, lagartiza" this would require selecting ONE word from the card's values, and two more from the rest of the array's values)
+ consider having a container component that draws from the original store of the vocab list

### PRONUNCIATION MINIMAL PAIRS:
+ For Vietnamese Tones: 
++ Level 1: five words are played of the same tone, then the user gets 10 tries at guessing ifnext words have the same tone. TONE 1
++ Level 2: (after reaching 75% accuraccy) Activity for Level 1 is repeated with different tone; TONE 2
++ Level 3: (same criteria) Activity for previous level with TONE 3
++ Level 4: (same criteria) Activity for previous level with TONE 4
++ Level 5: (same criteria) Activity for previous level with TONE 5
++ Level 6: First set of two tones are mixed, user swipes left/right to put them in Tone 1 VS Tone 2
++ Level 7: Second set of two tones are mixed, user swipes left/right to put them in Tone 3 VS Tone 4
++ Level 8: Third set of two tones are mixed, user swipes left/right to put them in Tone 5 VS Tone 6
++ Level 9: First half of 3 tones are mixed, user swipes left/right to put them in Tone 1 VS Tone 2 VS Tone 3
++ Level 10: First half of 3 tones are mixed, user swipes left/right to put them in Tone 4 VS Tone 5 VS Tone 6
++ MASTERY: all tones mixed, USER moves word into correct tone box (like a hexagon)

### GENERAL:
+ user should receive language tips as push notifications
+ pronciation tune-up: minimal pairs activity where the app plays a recording and you chose the word you saw;
+ vocab recall: the app plays the recording of a word in a simple sentence and you select the one you hear;
+ words should be attatched to a pron example (via forvo perhaps)
+ words should link to examples and definitions from several dictionaries
+ user should be able to upload one image of their own choosing to add to the bank of images for each word
+ exercises for word association 
+ exercises for sentence building
+ memory exercises



## Other Ideas:

### Details/Ideas on Pronunciation Component:
+ The idea could be that when you learn a word, you record the foreign word AND the word in your native language. The word in your Native Language is used for others when listening to the word, the word you record in the foreign language is then rated. You rate and get feedback. By giving feedback, you improve your score as a community contributor. Community contributors got to the top of lists for language exchanges.

### Places Vocabulary:
+ Could use MapView to find places and give locations on Map.
