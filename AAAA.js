document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const songs = document.querySelectorAll('.song-item');

    songs.forEach(song => {
        const songName = song.getAttribute('data-name').toLowerCase();
        if (songName.includes(searchQuery)) {
            song.style.display = 'block'; // Show the song if it matches
        } else {
            song.style.display = 'none'; // Hide the song if it doesn't match
        }
    });
});

// Play/Pause functionality
document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', function() {
        const audio = this.previousElementSibling; // Find the corresponding <audio> element
        if (audio.paused) {
            // Stop all other songs
            document.querySelectorAll('.audio-player').forEach(player => {
                player.pause();
                player.currentTime = 0;
            });

            // Play the current song
            audio.play();
            this.textContent = 'Pause'; // Change the button text to 'Pause'
        } else {
            // Pause the current song
            audio.pause();
            this.textContent = 'Play'; // Change the button text back to 'Play'
        }
    });
});
