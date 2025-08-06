// Set up a script to animate the progress bar
var script = `
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
        document.getElementById('progress-bar').style.width = '100%';
        }, 0); // 0-second delay to ensure the transition works (used to be a 10 second delay)
    });
    </script>
`;