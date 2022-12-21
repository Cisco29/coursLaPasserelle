function IdentityClass(identity, el) {
    var classList = identity in el;
    for (var i = 0; i < el.children.length; i++) {
        var child = el.children[i];
        if (child.tagName == 'DIV' || child.tagName == 'IMG') {
            if (classList) {
                child.classList.add(identity);
            } else {
                child.className += ' ' + identity;
            }
        }
    }
}


function isFileImage(fileTmp, product_Number, orie) {
    var tab = fileTmp.split('/')
    var file = tab[tab.length - 1].split('.')[1];

    if (file == 'png') {
        document.getElementById('product' + product_Number + '_img').classList.add("contain");
    } else {
        document.getElementById('product' + product_Number + '_img').classList.add(orie);
    }
}


myFT.on("instantads", function() {

    var mag = myFT.instantAds.mag;
    var clickTag = myFT.instantAds.clickTag;
    var orientation_product1 = myFT.instantAds.orientation_product1;
    var orientation_product2 = myFT.instantAds.orientation_product2;
    var orientation_product3 = myFT.instantAds.orientation_product3;
    var orientation_product4 = myFT.instantAds.orientation_product4;

    /* Image de Background */
    var bg_img_product0 = myFT.$('#bg_img_product0')[0];
    var bg_img_product5 = myFT.$('#bg_img_product5')[0];

    bg_img_product0.src = myFT.instantAds.bg_img_product0;
    bg_img_product5.src = myFT.instantAds.bg_img_product0;

    /* logo Identity */
    var brand_logo = myFT.$('#brand_logo')[0]
    brand_logo.src = 'img_statique/' + myFT.instantAds.mag + '_logo.svg';
    var ad_click = myFT.$('#click')[0]
        /* homepage */
    var homepage = myFT.$('#homepage')[0]
    var homepage_end = myFT.$('#homepage_end')[0]
    homepage.src = myFT.instantAds.homepage;
    homepage_end.src = myFT.instantAds.homepage;

    /* title */
    var txt_screen1 = myFT.$('#txt_screen1')[0];
    var txt_screen_end = myFT.$('#txt_screen_end')[0];
    txt_screen1.innerHTML = myFT.instantAds.title;
    txt_screen_end.innerHTML = myFT.instantAds.title;

    /* Shop_name */
    var brand_logo_txt = myFT.$('#brand_logo_txt')[0];
    brand_logo_txt.innerHTML = myFT.instantAds.nom_mag;

    /* date_op */
    var date_op_generique = myFT.$('#date_op_generique')[0];
    var date_op_generique_end = myFT.$('#date_op_generique_end')[0];
    var date_product1 = myFT.$('#date_product1')[0];
    var date_product2 = myFT.$('#date_product2')[0];
    var date_product3 = myFT.$('#date_product3')[0];
    var date_product4 = myFT.$('#date_product4')[0];

    date_op_generique.innerHTML = myFT.instantAds.date_op_generique;
    date_op_generique_end.innerHTML = myFT.instantAds.date_op_generique;
    date_product1.innerHTML = myFT.instantAds.date_product1;
    date_product1.classList.add('bg_' + myFT.instantAds.color_product1);
    date_product2.innerHTML = myFT.instantAds.date_product2;
    date_product2.classList.add('bg_' + myFT.instantAds.color_product2);
    date_product3.innerHTML = myFT.instantAds.date_product3;
    date_product3.classList.add('bg_' + myFT.instantAds.color_product3);
    date_product4.innerHTML = myFT.instantAds.date_product4;
    date_product4.classList.add('bg_' + myFT.instantAds.color_product4);

    /* cta */
    var cta = myFT.$('#cta')[0];
    cta.innerHTML = myFT.instantAds.cta;

    /* adresse */
    var adresse = myFT.$('#adresse')[0];
    adresse.innerHTML = myFT.instantAds.adresse;

    /* produit1 */

    var container_product_screen2 = myFT.$('#container_product_screen2')[0];
    var bg_img_product1 = myFT.$('#bg_img_product1')[0];
    var product1_img = myFT.$('#product1_img')[0];
    var capsule_prix_product1 = myFT.$('#capsule_prix_product1')[0];
    var txt_product1 = myFT.$('#txt_product1')[0];
    var title_description_product1 = myFT.$('#title_description_product1')[0];
    var description_product1 = myFT.$('#description_product1')[0];
    var pictos_product1 = myFT.$('#pictos_product1')[0];
    var legal_pictos_product1 = myFT.$('#legal_pictos_product1')[0];
    var game_product1 = myFT.$('#game_product1')[0];


    container_product_screen2.classList.add('bg_' + myFT.instantAds.color_product1);
    bg_img_product1.src = myFT.instantAds.bg_img_product1;
    product1_img.src = myFT.instantAds.product1_img;
    capsule_prix_product1.src = myFT.instantAds.capsule_prix_product1;
    txt_product1.innerHTML += myFT.instantAds.txt_product1;
    title_description_product1.innerHTML = myFT.instantAds.txt_product1;
    description_product1.innerHTML = myFT.instantAds.legal_product1;
    pictos_product1.src = myFT.instantAds.pictos_product1;
    if (myFT.instantAds.pictos_product1_bg == 'true'){
        pictos_product1.classList.add('pictos_product_background');
    }   
    legal_pictos_product1.src = myFT.instantAds.legal_pictos_product1;
    game_product1.src = myFT.instantAds.game_product1;

    /* produit2*/
    var container_product_screen3 = myFT.$('#container_product_screen3')[0];
    var bg_img_product2 = myFT.$('#bg_img_product2')[0];
    var product2_img = myFT.$('#product2_img')[0];
    var capsule_prix_product2 = myFT.$('#capsule_prix_product2')[0];
    var txt_product2 = myFT.$('#txt_product2')[0];
    var title_description_product2 = myFT.$('#title_description_product2')[0];
    var description_product2 = myFT.$('#description_product2')[0];
    var pictos_product2 = myFT.$('#pictos_product2')[0];
    var legal_pictos_product2 = myFT.$('#legal_pictos_product2')[0];
    var game_product2 = myFT.$('#game_product2')[0];


    container_product_screen3.classList.add('bg_' + myFT.instantAds.color_product2);
    bg_img_product2.src = myFT.instantAds.bg_img_product2;
    product2_img.src = myFT.instantAds.product2_img;
    capsule_prix_product2.src = myFT.instantAds.capsule_prix_product2;
    txt_product2.innerHTML += myFT.instantAds.txt_product2;
    title_description_product2.innerHTML = myFT.instantAds.txt_product2;
    description_product2.innerHTML = myFT.instantAds.legal_product2;
    pictos_product2.src = myFT.instantAds.pictos_product2;
        if (myFT.instantAds.pictos_product2_bg == 'true'){
        pictos_product2.classList.add('pictos_product_background');
    } 
    legal_pictos_product2.src = myFT.instantAds.legal_pictos_product2;
    game_product2.src = myFT.instantAds.game_product2;


    /* produit3 */

    var container_product_screen4 = myFT.$('#container_product_screen4')[0];
    var bg_img_product3 = myFT.$('#bg_img_product3')[0];
    var product3_img = myFT.$('#product3_img')[0];
    var capsule_prix_product3 = myFT.$('#capsule_prix_product3')[0];
    var txt_product3 = myFT.$('#txt_product3')[0];
    var title_description_product3 = myFT.$('#title_description_product3')[0];
    var description_product3 = myFT.$('#description_product3')[0];
    var pictos_product3 = myFT.$('#pictos_product3')[0];
    var legal_pictos_product3 = myFT.$('#legal_pictos_product3')[0];
    var game_product3 = myFT.$('#game_product3')[0];


    container_product_screen4.classList.add('bg_' + myFT.instantAds.color_product3);
    bg_img_product3.src = myFT.instantAds.bg_img_product3;
    product3_img.src = myFT.instantAds.product3_img;
    capsule_prix_product3.src = myFT.instantAds.capsule_prix_product3;
    txt_product3.innerHTML += myFT.instantAds.txt_product3;
    title_description_product3.innerHTML = myFT.instantAds.txt_product3;
    description_product3.innerHTML = myFT.instantAds.legal_product3;
    pictos_product3.src = myFT.instantAds.pictos_product3;
    if (myFT.instantAds.pictos_product3_bg == 'true'){
        pictos_product3.classList.add('pictos_product_background');
    } 
    legal_pictos_product3.src = myFT.instantAds.legal_pictos_product3;
    game_product3.src = myFT.instantAds.game_product3;

    /* produit4 */
    var container_product_screen5 = myFT.$('#container_product_screen5')[0];
    var bg_img_product4 = myFT.$('#bg_img_product4')[0];
    var product4_img = myFT.$('#product4_img')[0];
    var capsule_prix_product4 = myFT.$('#capsule_prix_product4')[0];
    var txt_product4 = myFT.$('#txt_product4')[0];
    var title_description_product4 = myFT.$('#title_description_product4')[0];
    var description_product4 = myFT.$('#description_product4')[0];
    var pictos_product4 = myFT.$('#pictos_product4')[0];
    var legal_pictos_product4 = myFT.$('#legal_pictos_product4')[0];
    var game_product4 = myFT.$('#game_product4')[0];


    container_product_screen5.classList.add('bg_' + myFT.instantAds.color_product4);
    bg_img_product4.src = myFT.instantAds.bg_img_product4;
    product4_img.src = myFT.instantAds.product4_img;
    capsule_prix_product4.src = myFT.instantAds.capsule_prix_product4;
    txt_product4.innerHTML += myFT.instantAds.txt_product4;
    title_description_product4.innerHTML = myFT.instantAds.txt_product4;
    description_product4.innerHTML = myFT.instantAds.legal_product4;
    pictos_product4.src = myFT.instantAds.pictos_product4;
    if (myFT.instantAds.pictos_product4_bg == 'true'){
        pictos_product4.classList.add('pictos_product_background');
    } 
    legal_pictos_product4.src = myFT.instantAds.legal_pictos_product4;
    game_product4.src = myFT.instantAds.game_product4;

    var url = myFT.instantAds.clickTag;
    myFT.applyClickTag(ad_click, 1, url);
    /* Class Name Identity */

    var ad = document.getElementById('ad');
    var s1 = document.getElementById('container_product_screen1');
    var s2 = document.getElementById('container_product_screen2');
    var s3 = document.getElementById('container_product_screen3');
    var s4 = document.getElementById('container_product_screen4');
    var s5 = document.getElementById('container_product_screen5');
    var s6 = document.getElementById('container_product_screen6');
    var logo_container = document.getElementById('logo_container');
    var footer = document.getElementById('footer');
    var date_op = document.getElementById('date_op');
    var screen_description = document.getElementById('screen_description');
    var description_produit1 = document.getElementById('description_produit1');
    var description_produit2 = document.getElementById('description_produit2');
    var description_produit3 = document.getElementById('description_produit3');
    var description_produit4 = document.getElementById('description_produit4');


    IdentityClass(mag, ad);
    IdentityClass(mag, s1);
    IdentityClass(mag, s2);
    IdentityClass(mag, s3);
    IdentityClass(mag, s4);
    IdentityClass(mag, s5);
    IdentityClass(mag, s6);
    IdentityClass(mag, logo_container);
    IdentityClass(mag, footer);
    IdentityClass(mag, screen_description);
    IdentityClass(mag, description_produit1);
    IdentityClass(mag, description_produit2);
    IdentityClass(mag, description_produit3);
    IdentityClass(mag, description_produit4);


    isFileImage(myFT.instantAds.product1_img, 1, orientation_product1);
    isFileImage(myFT.instantAds.product2_img, 2, orientation_product2);
    isFileImage(myFT.instantAds.product3_img, 3, orientation_product3);
    isFileImage(myFT.instantAds.product4_img, 4, orientation_product4);

    setTimeout(() => {

        textFit([
            document.getElementById('txt_screen1'),
            document.getElementById('txt_screen_end')
        ], { maxFontSize: 22 });
        textFit([
            document.getElementById('txt_product1'),
            document.getElementById('txt_product2'),
            document.getElementById('txt_product3'),
            document.getElementById('txt_product4'),
            document.getElementById('title_description_product1'),
            document.getElementById('title_description_product2'),
            document.getElementById('title_description_product3'),
            document.getElementById('title_description_product4')
        ], { maxFontSize: 20 });

        textFit([
            document.getElementById('brand_logo_txt'),
            document.getElementById('adresse'),
            document.getElementById('description_product1'),
            document.getElementById('description_product2'),
            document.getElementById('description_product3'),
            document.getElementById('description_product4')
        ], { maxFontSize: 13 });

    }, "100")
});