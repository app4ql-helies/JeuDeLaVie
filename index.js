


window.onload = function() {
    var canvas = document.getElementById('can');
    var context = canvas.getContext('2d');
    var map = [];
    var animation;

    /* taille de la grille */
    var taille_elem = document.getElementById('taille');
    var taille = 10;
    taille_elem.value = taille;

    /* nombre de carrés rouges */
    var nb_elem = document.getElementById('nb');
    var nb = 5;
    nb_elem.value = nb;

    /* frame per second */
    var interval_elem = document.getElementById('interval');
    var interval = 1000;
    interval_elem.value = interval;

    /* couleur du background */
    var bgcolor_elem = document.getElementById('background-color');
    var bgcolor = "#008000";
    bgcolor_elem.value = bgcolor;

    /* couleur des carrés */
    var rcolor_elem = document.getElementById('rectangle-color');
    var rcolor = "#FF0000";
    rcolor_elem.value = rcolor;

    /* initialisation de la map */
    var init_rects = function() {
        var c = 0;

        for (var i=0; i<taille; i++) {
            for (var j=0; j<taille; j++) {
                map[i*taille+j] = 0;
            }
        }

        while (c < nb) {
            var i = Math.floor((Math.random() * taille)); 
            var j = Math.floor((Math.random() * taille)); 
            if (map[i*taille+j]==0) {
                map[i*taille+j] = 1;
                c++;
            }
        }
    }

    /* dessin de la map */
    var draw_rects = function() {
        context.fillStyle = bgcolor;
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i=0; i<taille; i++) {
            for (var j=0; j<taille; j++) {
                if (map[i*taille+j] == 0) 
                    context.fillStyle = bgcolor;
                else
                    context.fillStyle = rcolor;
                context.fillRect(taille*i, taille*j, taille, taille);
            }
        }
    }

    /* fonction d'animation */
    var anime = function() {
        init_rects();
        draw_rects();
    }

    /* fonctions d'écoute des formulaires */
    taille_elem.onchange = function() {
        taille = taille_elem.value;
        anime();
    };

    nb_elem.onchange = function() {
        nb = nb_elem.value;
        anime();
    };

    interval_elem.onchange = function() {
        interval = interval_elem.value;
        clearInterval(animation);
        animation = setInterval(anime,interval);
    };

    bgcolor_elem.onchange = function() {
        bgcolor = bgcolor_elem.value;
        anime();
    };

    rcolor_elem.onchange = function() {
        rcolor = rcolor_elem.value;
        anime();
    };


    anime();
    animation = setInterval(anime, interval);
}
