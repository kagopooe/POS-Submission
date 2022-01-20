const shoppingCart = function(){

}

let prod1 = document.querySelector(".players")
    cart1 = document.querySelector(".cart-list")
    productQ = document.querySelector(".quantity")
    mpTcart = document.querySelector(".btn-cart-clear")
    checkO = document.querySelector(".btn-cart-check")
    totalP = document.querySelector(".total-price")
;

let players = [
        {
          id: 0,
          name: "Aaron Ramsdale",
          description: "Goalkeeper, Arsenal FC & England.",
          imageUrl: "https://postimg.cc/8s3Nnmdw",
          price: "60 000 000"
        }
],


// data array here
playersInCart = [];

const listPlayers = function () {
    players.forEach(function(players) {
        let player = document.createElement('div');
        player.className = "player";
        player.innerHTML = `
                            <div class="player-img"> <img src = "${players.imageUrl}"</div>
                            <div class="playerName"><span>Player:</span> ${players.name}</div>
                            <div class""><span>Description:</span> ${players.description}</div>
                            <div class='price'><span>Price:</span> ${players.price} <span>&pound;</span></div>
                            <div class='add-to-cart'><a href"" class="btn moreinfo">More Details</a>
                            <a class"btn add-to-cart" data-id=${players.id}>Add to cart</a>
                            </div></div>
                            `;
                            prod1.appendChild(player);
                        });
                    }
    const generateCartList = function() {
        cart1.innerHTML = "";
        playersInCart.forEach(function(players) {
            let li = document.createElement("li");
            li.innerHTML = `
                            ${players.quantity} ${players.player.name} - <span>&pound;</span>${players.price * players.quantity}`;
                            cart1.appendChild(li);
        }); 
        productQ.innerHTML = playersInCart.length;
        generateCartButtons()}

//empty cart
const generateCartButtons = function() {
    if (playersInCart.length > 0) {
        mpTcart.style.display = "block";
        checkO.style.display = "block"
        totalP.innerHTML = "<span>&pound;</span> " + calculateTotalPrice();
    }
    else {
        mpTcart.style.display = "none";
        checkO.style.display  = "none" 
     }  
}
        
const setupListeners = function() {
    prod1.addEventListener("click", function(event) {
        let project = event.target;
        if(project.classList.contains("add-to-cart")) {
            let projectId = project.dataset.id;
            addToCart(projectId)
        }})
    mpTcart.addEventListener("click", function(event) {
        if(confirm("Are you sure?")) {
            playersInCart = [];
        }
        generateCartList();
    });
} 

const addToCart = function(id) {
    let obj = players[id];
    if(playersInCart.length === 0 || playerFound(obj.id)=== undefined) {
        playersInCart.push({player: obj, quantity: 1});}
    else {
        playersInCart.forEach(function(players) {
            if(players.id === obj.id) {
                players.quantity++;
            }
        });
    }
    generateCartList();}

let playerFound = function(playerId) {
    return playersInCart.find(function(players)  {
        return players.id === playerId;
    });    
}

let calculateTotalPrice = function () {
    return playersInCart.reduce(function(total,players) {
        return total + (players.price * players.quantity);
    }, 0);
}

let init = function() {
    generatePlayerList();
    setupListeners();
}
return {
    init: init
}
    
    
    

