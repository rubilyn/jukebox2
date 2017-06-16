function parseNote(str) {
  let noteElements = str.split('*');
  let noteObject = {};
  if (noteElements.length === 1) {
    noteObject = {
      pitch: noteElements[0],
      beats: 1
    };
  } else {
    noteObject = {
      pitch: noteElements[0],
      beats: noteElements[1]
    };
  }
  return noteObject;

}

function parseSong(song) {
  let arraySongObjects = song.split(' ');
  let songObjects = []
  for (let i = 0; i < arraySongObjects.length; i++) {
    songObjects.push(parseNote(arraySongObjects[i]));
  }
  return songObjects;

}
// 
// const onComplete = function() {
//   stringToPlay = prompt('Song finished playing');
//   playSong((parseSong(stringToPlay)), 400, onComplete);
// }

// playSong((parseSong(stringToPlay)), 400, onComplete);

// A*2 D*2 D E D C# B*2 B*2 B*2 E*2 E F# E D C#*2 A*2 A*2 F#*2 F# G F# E D*2 B*2 A A B*2 E*2 C#*2 D*2
