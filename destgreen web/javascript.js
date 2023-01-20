function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    
    
    
    //SEARCH BOX
    function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    }
    function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
    }
    
    
    //ESCAPE KEY
    document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"){
    document.getElementById("myOverlay").style.display = "none";
    }
    });
    
    
    
    
    //BARCODE SCANNER
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var x = 4,
    y = 4,
    speed = 1,
    isBottom = false;
    
    function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#07C';
    ctx.lineCap = 'round';
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#07C";
    ctx.fillRect(x, y, 93, 10);
    
    if (!isBottom && y < canvas.height - 14) y += speed;
    else if (y === canvas.height - 14) isBottom = true;
    
    if (isBottom && y > 4) y -= speed;
    else if (y === 4) isBottom = false;
    
    requestAnimationFrame(draw);
    }
    
    draw();
  