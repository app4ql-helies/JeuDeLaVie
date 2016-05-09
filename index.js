window.onload = function() {
        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var a = [];
        setInterval(anime, 1000);
       
        function anime() {
            context.fillStyle = "green";
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (i=0; i<10; i++) {
                for (j=0; j<10; j++) {
                    if (Math.random() > 0.9) {
                        a[i*10+j] = 1;
                        context.fillStyle = "green";
                    } else {
                        a[i*10+j] = 0;
                        context.fillStyle = "red";
                    }
                    context.fillRect(10*i, 10*j, 10, 10);
                }
            }
        }
    }
