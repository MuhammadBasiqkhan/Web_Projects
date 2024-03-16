
     let profileImage = document.getElementById("prfileimage");
    let  heartIcon = document.getElementById("heart");

    profileImage.addEventListener("dblclick", function() {
        heartIcon.style.animation="heartbeat 0.6s ease-out forwards"
        setTimeout(() => {
            heartIcon.style.animation=""
        }, 2000);
    });
   