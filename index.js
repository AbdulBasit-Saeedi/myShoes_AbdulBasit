let slide = document.querySelectorAll(".slideCard");
let card = document.querySelectorAll(".card");
let count = 0;


slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 4000);



// card details
card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards.firstElementChild.src );
        document.querySelector(".container").style.display="none"
        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
        <img src=${cards.firstElementChild.src } alt="">
    <div class="cardText">
        <h2>Top Trending</h2>
        <h2>Upto 30% OFF.</h2>
        <p>Hurry Up.Order Now</p>
        <p>Comfortable FootWear.</p>
        <p>Available in all sizes.</p>
        <p>Order now Come on!</p>
        
        <button>Buy Now</button>
        <a href="">Back</a>
    </div>`
    document.querySelector("body").appendChild(div)
    })
})