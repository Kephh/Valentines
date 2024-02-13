var video = document.querySelector("video");
var flag = true;
count = 0;

var random = Math.floor(Math.random() * 2);
document.querySelector("#btn").addEventListener("click", function () {
    if (document.querySelector("input").value != "") {
        if (random == 0 && count > 1) {
            document.querySelector(".overlay").style.display = "none";
            setTimeout(function () {
                document.querySelector(".msg").style.display = "flex";
            }, 1000);

            setTimeout(function () {
                document.querySelector(".msg").style.display = "none";
                video.style.display = "block";
                video.play();
            }, 2500);

            setTimeout(function () {
                document.querySelector(".p-cls").style.display = "flex";
                document.querySelector(".btn-cls").style.display = "flex";
            }, 4000);

            document.getElementById("yes-btn").addEventListener("click", function () {
                document.querySelector("#q-p").style.display = "none";
                document.querySelector(".p-cls").style.backgroundColor = "transparent";
                document.querySelector(".btn-cls").style.display = "none";

                setTimeout(function () {
                    document.querySelector("#alrighty").style.display = "block";
                    document.querySelector(".p-cls").style.backgroundColor = "white";
                }, 1000);

                setTimeout(function () {
                    video.currentTime = 42.8;
                    document.querySelector("#alrighty").style.display = "none";
                    document.querySelector("#dynamic-text2").style.display = "flex";
                }, 2000);
            })

            document.getElementById("no-btn").addEventListener("click", function () {
                if (flag) {
                    flag = false;
                    document.querySelector("#q-p").style.display = "none";
                    document.querySelector(".p-cls").style.backgroundColor = "transparent";
                    document.querySelector(".btn-cls").style.display = "none";
                    setTimeout(function () {
                        document.querySelector("#q-p").style.display = "flex";
                        document.querySelector(".p-cls").style.backgroundColor = "white";
                        document.querySelector(".btn-cls").style.display = "flex";
                        document.querySelector("#q-p").innerHTML = "You don't like me back...?";
                        yes.innerText = "I do";
                        no.innerText = "I don't";
                    }, 1000);
                } else {
                    document.querySelector("#q-p").style.display = "none";
                    document.querySelector(".p-cls").style.backgroundColor = "transparent";
                    document.querySelector(".btn-cls").style.display = "none";
                    setTimeout(function () {
                        document.querySelector("#q-p").style.display = "flex";
                        document.querySelector(".p-cls").style.backgroundColor = "white";
                        document.querySelector("#q-p").innerHTML = "You could have been Rick Rolled!";
                        video.pause();
                        setTimeout(function () {
                            closeWindowOrRedirect();
                        }, 2500);
                    }, 1000);
                }

            })
        } else {
            count++;
            setTimeout(function () {
                document.querySelector(".msg").style.display = "block";
                document.querySelector(".msg").style.backgroundColor = "transparent";
                document.querySelector("#msg-p").innerText = "I don't like you";
                setTimeout(function () {
                    document.querySelector(".msg").style.display = "none";
                }, 1500);
                setTimeout(function () {
                    document.querySelector(".msg").style.display = "block";
                    document.querySelector(".msg").style.backgroundColor = "transparent";
                    document.querySelector("#msg-p").innerText = "Just Kidding!!";
                }, 2500);
                setTimeout(function () {
                    document.querySelector("#btn").innerText = "Try Again";
                }, 3500);
            }, 1000);
        }
    } else {
        alert("Please enter your name");
    }
})

function closeWindowOrRedirect() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent)) {
        window.location.href = 'about:blank';
    } else {
        window.close();
    }
}
