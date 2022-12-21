var product = 0;
myFT.on("instantads", function() {

    TweenMax.set(".centerX", { position: "absolute", xPercent: -50, left: "50%" });
    TweenMax.set(".centerY", { position: "absolute", yPercent: -50, top: "50%" });
    TweenMax.set(".centerXY", { position: "absolute", xPercent: -50, yPercent: -50, left: "50%", top: "50%" });


    anim = new TimelineMax({ repeat: 0, repeatDelay: 3.5 })
    anim.set('#ad', { visibility: 'visible' },.15);
    anim.set('#screen_description, .descipt_product_container', { display: 'none' },.15);

    anim.addLabel('screen1');

    anim.from('#txt_screen1', .5, { opacity: 0, y: -20, ease: Power2.easeOut }, 'screen1');
    anim.from('#homepage', .5, { yPercent: 150, ease: Back.easeOut.config(.5) }, 'screen1+=.7');
    anim.from('#cta', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen1+=1.1');
    //anim.pause('screen1+=2');
    
    anim.addLabel('screen2', "+=2");

    anim.to('#date_op_generique', .01, { opacity: 0, ease: Power3.easeInOut }, 'screen2');
    anim.to('#date_op', .5, {fontSize:"12px",y: 0, x: 130, ease: Power3.easeInOut }, 'screen2');
    anim.to('#date_product1', .5, { opacity: 1, ease: Power3.easeInOut }, 'screen2');
    anim.from('#container_product_screen2', .5, { yPercent: 100, ease: Power3.easeInOut }, 'screen2');
    anim.from('#bloc_prix_product1', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen2+=.6');
    anim.from('#pictos_product1', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen2+=.9');
    anim.from('#cta', .5, { x: 20, ease: Power2.easeOut }, 'screen2+=.6');
    anim.from('#legal', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen2+=.6');
    anim.add(function() {
        product = 1;
    }, 'screen2+=.6');
    //anim.pause('screen2+=2');
    anim.addLabel('screen3', "+=2");
    anim.to('#container_product_screen2', .5, { yPercent: -100, ease: Power3.easeInOut }, 'screen3');
    anim.to('#date_product1', .5, { opacity: 0, ease: Power3.easeInOut }, 'screen3');
    anim.to('#date_product2', .5, { opacity: 1, ease: Power3.easeInOut }, 'screen3');
    anim.from('#container_product_screen3', .5, { yPercent: 100, ease: Power3.easeInOut }, 'screen3');
    anim.from('#bloc_prix_product2', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen3+=.6');
    anim.from('#pictos_product2', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen3+=.9');
    anim.add(function() {
        product = 2;
    }, 'screen3+=.6');
    //anim.pause('screen3+=2');
    anim.addLabel('screen4', "+=2")
    anim.to('#container_product_screen3', .5, { yPercent: -100, ease: Power3.easeInOut }, 'screen4');
    anim.to('#date_product2', .5, { opacity: 0, ease: Power3.easeInOut }, 'screen4');
    anim.to('#date_product3', .5, { opacity: 1, ease: Power3.easeInOut }, 'screen4');
    anim.from('#container_product_screen4', .5, { yPercent: 100, ease: Power3.easeInOut }, 'screen4');
    anim.from('#bloc_prix_product3', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen4+=.6');
    anim.from('#pictos_product3', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen4+=.9');
    anim.add(function() {
        product = 3;
    }, 'screen4+=.6');

    anim.addLabel('screen5', "+=2")
    anim.to('#container_product_screen4', .5, { yPercent: -100, ease: Power3.easeInOut }, 'screen5');
    anim.to('#date_product3', .5, { opacity: 0, ease: Power3.easeInOut }, 'screen5');
    anim.to('#date_product4', .5, { opacity: 1, ease: Power3.easeInOut }, 'screen5');
    anim.from('#container_product_screen5', .5, { yPercent: 100, ease: Power3.easeInOut }, 'screen5');
    anim.from('#bloc_prix_product4', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen5+=.6');
    anim.from('#pictos_product4', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen5+=.9');
    anim.add(function() {
        product = 4;
    }, 'screen5+=.6');

    anim.addLabel('screen6', "+=2");
    anim.to('#date_op', .5, { y: 0, x: 0, ease: Power3.easeInOut }, 'screen6');
    anim.to('#legal', .5, { opacity: 0, y: 20, ease: Power2.easeOut }, 'screen6');
    anim.to('#container_product_screen5', .5, { yPercent: -100, ease: Power3.easeInOut }, 'screen6');
    anim.to('#date_product4', .5, { opacity: 0, ease: Power3.easeInOut }, 'screen6');
    anim.to('#date_op_generique_end', .5, { opacity: 1, ease: Power3.easeInOut }, 'screen6');
    anim.from('#container_product_screen6', .5, { yPercent: 100, ease: Power3.easeInOut }, 'screen6');
    anim.to('#cta', .5, { x: 20, ease: Power2.easeOut }, 'screen6');
    //anim.pause('screen6+=2');
})
document.getElementById("legal").addEventListener("click", legal);
document.getElementById("close").addEventListener("click", close);

function legal() {
    document.getElementById("screen_description").style.display = "block";
    document.getElementById("description_produit" + product).style.display = "block";
    anim.pause();
}

function close() {
    document.getElementById("screen_description").style.display = "none";
    document.getElementById("description_produit" + product).style.display = "none";
    anim.play();
}