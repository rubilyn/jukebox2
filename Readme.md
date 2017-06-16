![screenshot 2017-06-15 17 54 46](https://user-images.githubusercontent.com/19618674/27207457-d6ab1828-51f3-11e7-8323-96f77bbb30ed.png)


## Tasks
- Improve the Jukebox to allow users to queue-up songs to be played next to keep listening to your awesome tunes! 
- Let's use some jQuery to do this.
- You will be building upon the `jukebox-part-ii repo` for this assignment.
- Put your new javascript code in the main.js file.

## Enqueuing Songs
- The user will enter a string of song notes (e.g. "A B*2 C#") into the song form.  
- When they submit the form, create a new list item in the Song Queue list containing the song's notes. 
- Also, clear the text field contents so that they can easily add more songs.

When the Play button is clicked:

1.  Start playing the top song in the queue.
2. Remove the top song from the queue.
3. When the top song is finished playing, repeat with the next top song until there are no songs left to play.
4. When the Play button is clicked, slide it up to show that we are currently playing. When the last song is finished playing, slide the Play button back down.

## Songs with Names
1. Add a Song Name text field to the page just above the Enter a Song field.
2. When the Enqueue Song button is clicked, add the song's name to the list item you created. Now the queue should include song names AND the song notes themselves.
3. When the Jukebox is playing a song, a message should show on the page saying Now Playing [Song Name]. When there is no song playing, the message should say Enter a song to play

## Stretch
1. Only show the song's title in the queue. When you move your mouse over a particular song in the queue, however, fade in the song's notes. When your mouse leaves that song, fade the song's notes back out.
2. Start playing songs as above when you press "spacebar". Make sure you can still enter songs properly in the form (the songs shouldn't start playing if you enter a space while writing the song's notes).
3. Played songs should be moved to a Played list. Songs from the played list should:
4. Have a trash can button to delete them.
5. Have a Play Again button that moves it back to the queue.
6. Add a Repeat button that when toggled will cause the queue to repeat its songs instead of deleting them (or, moving them to the Played list).
7. When songs are playing Play All should turn into a Pause button, clicking it will pause the queue and turn it into a Play All button again.
