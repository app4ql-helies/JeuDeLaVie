window.onload = function() {
        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var a = [];
        var nb = document.getElementById('nb');
        var taille = document.getElementById('size');
        var temps = document.getElementById('temps');
        setInterval(anime, temps);

        function anime() {
            context.fillStyle = "green";
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (i=0; i<nb; i++) {
                for (j=0; j<nb; j++) {
                    if (Math.random() > 0.9) {
                        a[i*taille+j] = 1;
                        context.fillStyle = "green";
                    } else {
                        a[i*taille+j] = 0;
                        context.fillStyle = document.getElementById('color');
                    }
                    context.fillRect(taille*i, taille*j, taille, taille);
                }
            }
        }
    }
