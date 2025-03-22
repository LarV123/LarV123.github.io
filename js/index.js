(function() {
    var buttons = document.getElementsByClassName("show-button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].parentElement.parentElement.getElementsByClassName("what-i-do")[0].style.display = "none";
        buttons[i].onclick = function(e){
            let whatIDo = e.target.parentElement.parentElement.getElementsByClassName("what-i-do")[0];
            if(whatIDo.style.display == "none"){
                whatIDo.style.display = "block";
                e.target.innerHTML = "Hide";
            }else{
                whatIDo.style.display = "none";
                e.target.innerHTML = "What I Do ?";
            }
        } 
    }
    var images = document.getElementsByClassName("img-panel");
    for(let i = 0; i < images.length; i++){
        images[i].onclick = function(e){
            let imageSrc = e.target.src;
            window.open(imageSrc, '_blank');
        } 
    }
 })();