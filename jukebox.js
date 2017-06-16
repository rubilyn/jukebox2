$(document).ready(function() {
  $('body').submit(function(event) {
    event.preventDefault()
  });

  console.log('loaded by rtsc');
  const songs = [];
  const empty = '';

  const onComplete = function () {
    songs.shift();
    $('#play-button').slideDown();
    $('li').eq(0).remove();
    if ($('li').eq(0) != null) {
      $('li').eq(0).append(' Now Playing...');
      playSong(parseSong(songs[0]), 400, onComplete);
    }
  
  };

  $('#songForm input[type="submit"]').on('click', function() {
    const song = $('#songString').val();
    songs.push(song);
    console.log('form submitted')
    const songName = $('#songName').val();

    $('#song-queue').append('<li>' + songName + ' <span>' + song + '</span></li>');
    $('span').hide();
    $('#songForm input[type="text"]').val('');
  });

  $('#play-button').on('click', function() {
    $(this).slideUp();
    $('li').eq(0).append(' Now Playing...');
    playSong(parseSong(songs[0]), 400, onComplete);
  });

  $('ul').on('mouseenter', 'li', function() {
    $('span').eq($(this).index()).fadeIn();
  });

  $('ul').on('mouseleave', 'li', function() {
    $('span').fadeOut();
  });



});
