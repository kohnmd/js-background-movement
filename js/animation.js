(function() {
    
    
    // --------------------------------------------------------
    // Private variables & functions.
    // --------------------------------------------------------
    var bg_image;
    
    
    // --------------------------------------------------------
    // Initialize Background (public)
    // --------------------------------------------------------
    var animationInit = function() {
        bg_image = window.getBgImage();
    };
    window.animationInit = animationInit;

})();


//backgroundInit();




canvas = window.game || document.getElementById('game');
context = canvas.getContext( '2d' );

animate();

function animate() {
    requestAnimFrame( animate );
    draw();
}

function draw() {

    var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 192 + 256;
    var y = Math.cos( time * 0.9 ) * 192 + 256;
    toggle = !toggle;

    context.fillStyle = toggle ? 'rgb(200,200,20)' :  'rgb(20,20,200)';
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();

}


