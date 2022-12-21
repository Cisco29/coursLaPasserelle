/* GLOBAL DEFINITION FOR ESLINT */
/* global dfpLevel1 */
/* global dfpLevel2*/
/* global $ */
/* global googletag */
/* global dfpPageType */
/* global gptadslots */
/* global localCommune */
/* global dfpPageTags:true */
/* global dfpIDArticle */
/* global jQuery */
/* global tlgedDfp:true */
/* global allSlots:true */
/* global disableDfp:true */

/* END GLOBAL DEFINITION FOR ESLINT */

window.tlgedDfp = function() {
  var divNames = new Array();
  window.allSlots = {
    pub_dfp_banniere_haute: 0,
    pub_dfp_banniere_basse: 0,
    pub_dfp_banniere_middle: 0,
    pub_dfp_droite_basse: 0,
    pub_dfp_droite_milieu: 0,
    pub_dfp_habillage: 0,
    article: 0,
    pub_dfp_Pub_iannounce_co_uk_728x90_21: 0,
    pub_dfp_Pub_iannounce_co_uk_728x90_22: 0,
    pub_dfp_Pub_iannounce_co_uk_728x90_23: 0
  };
  if (window.location.href.includes("/soir")) {
    var taggingPlanContextual = {
      home_soir: {
        desktop: {
          banniere_basse: "1x1,728x90,970x90,1000x90,1000x200",
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          droite_basse: "1x1,300x250,300x600,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        mobile: {
          banniere_haute: "1x1,320x50,320x100,320x120",
          droite_basse: "1x1,300x250,fluid",
          banniere_basse: "1x1,320x50,320x100,320x120"
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          droite_basse: "1x1,300x250,300x600,fluid",
          banniere_basse: "1x1,728x90,970x90,970x250,1000x90"
        }
      },
      article: {
        desktop: {
          article: "1x1,300x250,fluid",
          banniere_basse: "1x1,728x90,970x90,1000x90,1000x200",
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          droite_basse: "1x1,300x250,300x600,fluid",
        },
        mobile: {
          article: "1x1,300x250,fluid",
          banniere_haute: "1x1,320x50,320x100,320x120",
          droite_basse: "1x1,300x250,fluid",
          banniere_basse: "1x1,320x50,320x100,320x120"
        },
        tablette: {
          article: "1x1,300x250,fluid",
          banniere_haute: "1x1,320x50,320x100,320x120",
          droite_basse: "1x1,300x250,fluid",
          banniere_basse: "1x1,320x50,320x100,320x120"
        }
      }
    };
  } else {
    taggingPlanContextual = {
      master: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x300,1000x450,1000x560",
          droite_basse: "1x1,300x250,300x600,300x900,fluid",
          banniere_middle: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        minitablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250",
          droite_basse: "1x1,300x250,300x600,fluid",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        mobile: {
          banniere_haute: "1x1,300x50,320x50,320x100,320x120",
          banniere_basse: "1x1,300x50,320x50,320x100,320x120",
          droite_basse: "1x1,300x250,fluid",
          banniere_middle: "1x1,300x250,fluid",
          droite_haute: "1x1,300x250,fluid"
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250",
          droite_basse: "1x1,300x250,300x600,fluid",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        }
      },
      article: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,fluid",
          article: "1x1,300x250,fluid",
          article2: "1x1,300x250,fluid",
          article3: "1x1,300x250,fluid",
          banniere_middle: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid"
        },
        minitablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          article: "1x1,300x250,fluid",
          article2: "1x1,300x250,fluid",
          article3: "1x1,300x250,fluid",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid"
        },
        mobile: {
          article: "1x1,300x250,fluid",
          article2: "1x1,300x250,fluid",
          article3: "1x1,300x250,fluid",
          banniere_middle: "1x1,300x250,fluid",
          banniere_haute: "1x1,300x50,320x50,320x100,320x120"
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          article: "1x1,300x250,fluid",
          article2: "1x1,300x250,fluid",
          article3: "1x1,300x250,fluid",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid"
        }
      },
      home: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x300,1000x450,1000x560",
          droite_basse: "1x1,300x250,300x600,300x900,fluid",
          banniere_middle: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          middle_2: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        minitablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid",
          droite_basse: "1x1,300x250,300x600,fluid",
          droite_3: "1x1,300x250,300x600,fluid",
          droite_haute: "1x1,300x250,fluid"
        },
        mobile: {
          banniere_haute: "1x1,300x50,320x50,320x100,320x120",
          banniere_basse: "1x1,300x50,320x50,320x100,320x120",
          droite_basse: "1x1,300x250,fluid",
          banniere_middle: "1x1,300x250,fluid",
          middle_2: "1x1,300x250,fluid",
          droite_haute: "1x1,300x250,fluid"
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250",
          droite_basse: "1x1,300x250,300x600,fluid",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid",
          middle_2: "1x1,728x90,970x90,970x250,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        }
      },
      theme: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x300,1000x450,1000x560",
          droite_basse: "1x1,300x250,300x600,300x900,fluid",
          droite_3: "1x1,300x250,300x600,300x900,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250",
          droite_basse: "1x1,300x250,300x600,fluid",
          droite_3: "1x1,300x250,300x600,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        mobile: {
          banniere_haute: "1x1,300x50,320x50,320x100,320x120",
          banniere_basse: "1x1,300x50,320x50,320x100,320x120",
          droite_basse: "1x1,300x250,fluid",
          droite_3: "1x1,300x250,fluid",
          droite_haute: "1x1,300x250,fluid"
        }
      },
      service: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x300,1000x450,1000x560,fluid",
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250,fluid",
        },
        mobile: {
          banniere_haute: "1x1,300x50,320x50,320x100,320x120,fluid",
          banniere_basse: "1x1,300x50,320x50,320x100,320x120,fluid",
        }
      },
      bretagne: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x300,1000x450,1000x560",
          droite_basse: "1x1,300x250,300x600,300x900,fluid",
          droite_haute: "1x1,300x250,300x600,fluid",
          banniere_middle: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          middle_2: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          middle_3: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid"
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250",
          droite_basse: "1x1,300x250,300x600,fluid",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid",
          middle_2: "1x1,728x90,970x90,970x250,fluid",
          middle_3: "1x1,728x90,970x90,970x250,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        mobile: {
          banniere_haute: "1x1,300x50,320x50,320x100,320x120",
          banniere_basse: "1x1,300x50,320x50,320x100,320x120",
          droite_basse: "1x1,300x250,fluid",
          banniere_middle: "1x1,300x250,fluid",
          middle_2: "1x1,300x250,fluid",
          middle_3: "1x1,300x250,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        }
      },
      topic: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          droite_haute: "1x1,300x250,300x600,300x900,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x300,1000x450,1000x560",
          banniere_middle: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid"
        },
        minitablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          droite_haute: "1x1,300x250,300x600,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid"
        },
        mobile: {
          banniere_haute: "1x1,300x50,320x50,320x100,320x120",
          droite_haute: "1x1,300x250,fluid",
          banniere_basse: "1x1,300x50,320x50,320x100,320x120",
          banniere_middle: "1x1,300x250,fluid"
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          droite_haute: "1x1,300x250,300x600,fluid",
          banniere_basse: "1x1,728x90,970x90,970x200,970x250",
          banniere_middle: "1x1,728x90,970x90,970x250,fluid"
        }
      },
      tags: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_basse: "1x1,728x90,970x90,970x250,1000x90,1000x200,1000x300,fluid",
          droite_basse: "1x1,300x250,300x600,300x900,300x1050,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        minitablette: {
            banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
            droite_basse: "1x1,300x250,300x600,fluid",
            droite_haute: "1x1,300x250,300x600,fluid",
            banniere_basse: "1x1,728x90,970x90,970x250,1000x90,1000x200,1000x300,1000x450,1000x560,fluid"
        },
        mobile: {
          banniere_haute: "1x1,320x50,320x100,320x120,fluid",
          droite_basse: "1x1,300x250,300x600,fluid",
          banniere_basse: "1x1,320x50,320x100,320x120,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          droite_basse: "1x1,300x250,300x600,fluid",
          droite_haute: "1x1,300x250,300x600,fluid"
        }
      },
      avdc_article: {
        desktop: {
          droite_basse: "1x1,300x250,300x600,336x280,fluid",
          Pub_iannounce_co_uk_728x90_11: "1x1,728x90,970x90,970x250,fluid",
          Pub_iannounce_co_uk_728x90_12: "1x1,728x90,970x90,970x250,fluid",
          Pub_iannounce_co_uk_728x90_13: "1x1,728x90,970x90,970x250,fluid"
        },
        mobile: {
          droite_basse: "1x1,300x100,300x250,fluid",
          Pub_iannounce_co_uk_728x90_11: "1x1,300x50,320x50,320x100,fluid",
          Pub_iannounce_co_uk_728x90_12: "1x1,300x50,320x50,320x100,fluid",
          Pub_iannounce_co_uk_728x90_13: "1x1,300x50,320x50,320x100,fluid"
        },
        tablette: {
          droite_basse: "1x1,300x250,300x600,fluid",
          Pub_iannounce_co_uk_728x90_11: "1x1,300x50,320x50,320x100,728x90,970x90,fluid",
          Pub_iannounce_co_uk_728x90_12: "1x1,300x50,320x50,320x100,728x90,970x90,fluid",
          Pub_iannounce_co_uk_728x90_13: "1x1,300x50,320x50,320x100,728x90,970x90,fluid"
        }
      },
      avdc_home: {
        desktop: {
          droite_basse: "1x1,300x250,300x600,336x280,fluid",
          Pub_iannounce_co_uk_728x90_21: "1x1,728x90,970x90,970x250,fluid",
          Pub_iannounce_co_uk_728x90_22: "1x1,728x90,970x90,970x250,fluid",
          Pub_iannounce_co_uk_728x90_23: "1x1,728x90,970x90,970x250,fluid"
        },
        mobile: {
          droite_basse: "1x1,300x100,300x250,fluid",
          Pub_iannounce_co_uk_728x90_21: "1x1,300x50,320x50,320x100,fluid",
          Pub_iannounce_co_uk_728x90_22: "1x1,300x50,320x50,320x100,fluid",
          Pub_iannounce_co_uk_728x90_23: "1x1,300x50,320x50,320x100,fluid"
        },
        tablette: {
          droite_basse: "1x1,300x250,300x600,fluid",
          Pub_iannounce_co_uk_728x90_21: "1x1,300x50,320x50,320x100,728x90,970x90,fluid",
          Pub_iannounce_co_uk_728x90_22: "1x1,300x50,320x50,320x100,728x90,970x90,fluid",
          Pub_iannounce_co_uk_728x90_23: "1x1,300x50,320x50,320x100,728x90,970x90,fluid"
        }
      },
      avdc_topic: {
        desktop: {
          banniere_middle: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_basse: "1x1,728x90,970x90,970x250,1000x90",
          Pub_iannounce_co_uk_728x90_7: "1x1,728x90,970x90,970x250,fluid",
          Pub_iannounce_co_uk_728x90_8: "1x1,200x200,250x250,300x250,300x600,fluid",
          Pub_iannounce_co_uk_728x90_9: "1x1,728x90,970x90,970x250,fluid"
        },
        mobile: {
          banniere_middle: "1x1,300x250,320x100,fluid",
          banniere_basse: "1x1,300x250,320x50,320x100,fluid",
          Pub_iannounce_co_uk_728x90_7: "1x1,300x50,320x50,320x100,fluid",
          Pub_iannounce_co_uk_728x90_8: "1x1,200x200,250x250,300x250,fluid",
          Pub_iannounce_co_uk_728x90_9: "1x1,300x50,320x50,320x100,fluid"
        },
        tablette: {
          banniere_middle: "1x1,728x90,970x90,970x250,1000x90",
          banniere_basse: "1x1,728x90,970x90,970x250,1000x90",
          Pub_iannounce_co_uk_728x90_7: "1x1,728x90,970x90,970x250",
          Pub_iannounce_co_uk_728x90_8: "1x1,200x200,250x250,300x250,300x600,fluid",
          Pub_iannounce_co_uk_728x90_9: "1x1,728x90,970x90,970x250"
        }
      },
      page_election: {
        desktop: {
          banniere_haute: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_middle: "1x1,728x90,970x90,970x200,970x250,1000x90,1000x200,1000x250,728x250,fluid",
          banniere_basse: "1x1,300x50,320x50,320x100,fluid",
        },
        mobile: {
          banniere_haute: "1x1,300x50,320x50,320x100,fluid",
          banniere_middle: "1x1,300x50,320x50,320x100,fluid",
          banniere_basse: "1x1,300x50,320x50,320x100,fluid",
        },
        tablette: {
          banniere_haute: "1x1,728x90,970x90,1000x90",
          banniere_middle: "1x1,728x90,970x90,970x250,1000x90,1000x200",
          banniere_basse: "1x1,728x90,970x90,970x250,1000x90,1000x200,1000x300,1000x450,1000x560",
        }
      }
    };
  }
  var tlgedDfp = {
    init: function() {
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];
      if (typeof disableDfp == "undefined" || !disableDfp) {
        tlgedDfp.config = {
          currentTerminal: "",
          debug: !1,
          publisherId: 31755961,
          level1: dfpLevel1,
          taggingPlan: taggingPlanContextual
        };
        tlgedDfp.defineTerminal();
        tlgedDfp.insertInRead();
        tlgedDfp.declarations();
        tlgedDfp.loadwrapper366();
      }
    },
    loadwrapper366: function() {
      console.log("load wrapper 366");
      var scriptLPM = document.createElement('script');
    scriptLPM.defer = true;
    scriptLPM.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    scriptLPM.src = 'https://cdn1.366.fr/wrp/letelegramme_fr/letelegramme_fr_v2.js';
    document.body.appendChild(scriptLPM);
    },
    insertInRead: function() {
      if (dfpLevel2 != "loisirs") {
        if (
          $("#pageListNew")
            .find(".liste_articles")
            .children(".publiInfo").length
        ) {
          $("#pageListNew")
            .find(".liste_articles")
            .find("li:nth-child(6)")
            .after('<div id="pub_dfp_inread_haut"></div>');
          divNames.push("pub_dfp_inread_haut");
        } else {
          $("#pageListNew")
            .find(".liste_articles")
            .find("li:nth-child(6)")
            .after('<div id="pub_dfp_inread_haut"></div>');
          divNames.push("pub_dfp_inread_haut");
        }
      }
      if (dfpPageType == "article" && document.getElementById('Position1') == null && document.getElementsByClassName('faceaface').length == 0) {
        //Add article inread
          if (document.getElementsByClassName('article__content')[0].getElementsByTagName('p').length == 1) {
            document.getElementById("support").insertAdjacentHTML('afterEnd', '<div class="pub" id="Position1"><div id="pub_dfp_article"></div></div>');
          }else {
            if (document.querySelectorAll('.refresh-live').length == 0) {
              document.querySelectorAll(".article__content p")[0].insertAdjacentHTML('afterEnd', '<div class="pub" id="Position1"><div id="pub_dfp_article"></div></div>');
            }else {
              //Display pub article before second li in live
              document.querySelectorAll(".timeline-event")[0].insertAdjacentHTML('afterEnd', '<div class="pub" id="Position1"><div id="pub_dfp_article"></div></div>')
            }
            //Add article3 position if needed
            article_length = 0;
          jQuery(".article__content p").each(function(el){
            article_length += this.innerHTML.length
            console.log(this);
            console.log('charcount: ' + article_length);
            if (article_length > 2000 && !jQuery('#Position2').length) {
              //Add article2 position
              jQuery(this).after('<div class="pub" style="text-align: center; margin-bottom: 10px;" id="Position2"><div id="pub_dfp_article2"></div></div>');
              console.log('disp article2 charcount: ' + article_length);
              console.log(this);
            }
            if (article_length > 3000 && !jQuery('#Position3').length && this.getAttribute('lang') != 'fr') {
              jQuery(this).after('<div class="pub" style="text-align: center; margin-bottom: 10px;" id="Position3"><div style="margin-bottom: 15px;" id="pub_dfp_article3"></div></div>');
              console.log('disp article3 charcount: ' + article_length);
              console.log('attribute');
              console.log(this.getAttribute('lang'));
              console.log(this);
            }
          });
          }          
      } else {
        //face ï¿½  face article
        if (!jQuery('#Position1').length)  {
          jQuery(jQuery(".faceAFace__article p")[0]).after('<div class="pub" id="Position1"><div id="pub_dfp_article"></div></div>');
        }
      }
    },
    declarations: function() {

      googletag.cmd.push(function() {
        googletag.pubads().addEventListener("slotRenderEnded", function(event) {
          if (event != null && event.size != null && event.size[0] != 1) {
            //Wait 2s and remove pub_dfp_banniere_haute div
          }
        });
      });
      googletag.cmd.push(function() {
        if (typeof tlgedDfp.config.taggingPlan[dfpPageType] != "undefined") {
          googletag.destroySlots();
          var a = 1;
          var arrayAdUnitSizes;
          var AdUnitName;
          var declaredSlots = {};
          var idDiv;
          var idDivRWD;
          var levels_3 = tlgedDfp.config.taggingPlan[dfpPageType][tlgedDfp.config.currentTerminal];
          tlgedDfp.config.publisherId = '31755961,22581005655';
          for (var level3 in levels_3) {
            arrayAdUnitSizes = tlgedDfp.convertAdUnitSizesToArray(levels_3[level3]);
            AdUnitName = "/" + tlgedDfp.config.publisherId + "/" + tlgedDfp.config.level1 + "/" + dfpLevel2 + "/" + level3;
            idDiv = "pub_dfp_" + level3;
            if (tlgedDfp.config.currentTerminal != "desktop") {
              idDivRWD = idDiv + "__" + tlgedDfp.config.currentTerminal;
              if ($("#" + idDivRWD).length) {
                idDiv = idDivRWD;
              }
            }
            console.log('adunitname');
            console.log(AdUnitName);
            gptadslots[a] = googletag
              .defineSlot(AdUnitName, arrayAdUnitSizes, idDiv)
              .setTargeting("pos", [level3])
              .addService(googletag.pubads());
            declaredSlots[level3] = gptadslots[a];
            allSlots["pub_dfp_" + level3] = gptadslots[a];
            a++;
          }
            AdUnitName = "/" + tlgedDfp.config.publisherId + "/" + tlgedDfp.config.level1 + "/" + dfpLevel2 + "/habillage";
            declaredSlots.habillage = googletag
              .defineOutOfPageSlot(AdUnitName, "pub_dfp_habillage")
              .addService(googletag.pubads())
              .setTargeting("pos", "habillage");
            allSlots.pub_dfp_habillage = declaredSlots.habillage;
          googletag.pubads().addEventListener("slotRenderEnded", function() {});
          var Tfr_Acces_1 = tlgedDfp.getCookie("Tfr_Acces_1");
          var tg_statut = "visiteur";
          if (Tfr_Acces_1 != "") {
            Tfr_Acces_1 = JSON.parse(decodeURIComponent(Tfr_Acces_1));
            if (Tfr_Acces_1.estAbonneInitial) {
              tg_statut = "abonneInitial";
            } else if (Tfr_Acces_1.estAbonne) {
              tg_statut = "abonne";
            }
            if (Tfr_Acces_1.abonnements.length) {
              googletag.pubads().setTargeting("tg_sso_abonnements", Tfr_Acces_1.abonnements.join());
            }
          }
          googletag.pubads().setTargeting("tg_statut", tg_statut);
          var referrerKeyword = tlgedDfp.getSocialKeyword(document.referrer);
          googletag.pubads().setTargeting("tg_referrer", referrerKeyword);
          googletag.pubads().setTargeting("tg_device", [tlgedDfp.config.currentTerminal]);
          if (typeof localCommune != "undefined") {
            googletag.pubads().setTargeting("tg_codep", JSON.stringify(localCommune.code_postal).replace(/"/g, ""));
          }
          if (typeof dfpPageTags != "undefined") {
            if (dfpPageTags.indexOf(",") != -1) {
              dfpPageTags = JSON.parse(dfpPageTags);
            } else if (dfpPageTags.indexOf("[") != -1) {
              dfpPageTags = JSON.parse(dfpPageTags);
            }
            googletag.pubads().setTargeting("tg_tag", dfpPageTags);
          }
          if (typeof dfpIDArticle != "undefined") {
            googletag.pubads().setTargeting("tg_article", dfpIDArticle);
          }
          googletag.cmd.push(function() {
            var gptSlots = googletag.pubads().getSlots();
            for (var i = 0; i < gptSlots.length; i++) {
              var sizes = gptSlots[i].getSizes().map(function(size) {
                if (size.getWidth && size.getHeight) return [size.getWidth(), size.getHeight()];
                else return [1, 1];
              });
            }
          });

          console.log("disable dfp initial load");
          googletag.pubads().disableInitialLoad();
          googletag.pubads().enableSingleRequest();
          googletag.pubads().enableAsyncRendering();
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
        }
      });
    },
    defineTerminal: function() {
      var documentSize = window.innerWidth;
      var terminal;
      if (documentSize >= 1000) terminal = "desktop";
      else if (documentSize >= 750 && documentSize < 1000) terminal = "tablette";
      else if (documentSize < 750) terminal = "mobile";
      if (tlgedDfp.config.currentTerminal != terminal) {
        tlgedDfp.config.currentTerminal = terminal;
        return !0;
      } else {
        return !1;
      }
    },
    getSocialKeyword: function(referrer) {
      if (referrer.indexOf("facebook") >= 0) {
        return "facebook";
      } else if (referrer.indexOf("t.co") >= 0 || referrer.indexOf("twitter") >= 0) {
        return "twitter";
      } else if (referrer.indexOf("news.url.google") >= 0 || referrer.indexOf("news.google") >= 0) {
        return "gnews";
      } else if (referrer.indexOf("linkedin") >= 0 || referrer.indexOf("lnkd.in") >= 0) {
        return "linkedin";
      } else if (referrer.indexOf("letelegramme") >= 0) {
        return "internal";
      } else return "moteur";
    },
    convertAdUnitSizesToArray: function(AdUnitSizes) {
      var arraySplit = AdUnitSizes.split(",");
      var arrayAdUnitSizes = [];
      var arrayAdUnitSize = [];
      arraySplit.forEach(function(unitSize) {
        if (unitSize == "Fluid" || unitSize == "fluid") {
          arrayAdUnitSizes.push("fluid");
        } else {
          arrayAdUnitSize = unitSize.split("x");
          arrayAdUnitSizes.push([parseInt(arrayAdUnitSize[0]), parseInt(arrayAdUnitSize[1])]);
        }
      });
      return arrayAdUnitSizes;
    },
    getCookie: function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  };
  
  tlgedDfp.init();
};