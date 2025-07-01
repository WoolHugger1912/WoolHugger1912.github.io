
function searchInv() {

  var table = document.getElementById("tableId");
  var tr = table.getElementsByTagName("tr");
  var input = document.getElementById("lookUp");
  var filter = input.value.toUpperCase();
  var i;

  for (i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      var txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      };
    };
  };
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("aaLS").innerHTML += Math.max(0, localStorage.getItem("Acetic Acid"));
document.getElementById("aaLS").innerHTML += (localStorage.getItem("Acetic Acid") * 0.66).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("afLS").innerHTML += Math.max(0, localStorage.getItem("Albaflow SF Plus"));
document.getElementById("afLSc").innerHTML += (localStorage.getItem("Albaflow SF Plus") * 2.92).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("afscLS").innerHTML += Math.max(0, localStorage.getItem("Albafluid SL Conc"));
document.getElementById("afscLSc").innerHTML += (localStorage.getItem("Albafluid SL Conc") * 1.25).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("agaLS").innerHTML += Math.max(0, localStorage.getItem("Albegal A"));
document.getElementById("agaLSc").innerHTML += (localStorage.getItem("Albegal A") * 3.32).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("ageLS").innerHTML += Math.max(0, localStorage.getItem("Albegal E3 B"));
//document.getElementById("albeE3Bc").innerHTML += (localStorage.getItem("Albegal E3-B") * 6.2).toLocaleString("en-IN", { style: "currency", currency: "USD"});
document.getElementById("ageLSc").innerHTML += (localStorage.getItem("Albegal E3 B") * 6.2).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("agsLS").innerHTML += Math.max(0, localStorage.getItem("Albegal Set"));
document.getElementById("agsLSc").innerHTML += (localStorage.getItem("Albegal Set") * 4.15).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("cbLS").innerHTML += Math.max(0, localStorage.getItem("Clarite Bac"));
document.getElementById("cbLSc").innerHTML += (localStorage.getItem("Clarite Bac") * 2.72).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("ccLS").innerHTML += Math.max(0, localStorage.getItem("Color Clear"));
document.getElementById("ccLSc").innerHTML += (localStorage.getItem("Color Clear") * 4.06).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("epeLS").innerHTML += Math.max(0, localStorage.getItem("Eriopon E3 Save"));
document.getElementById("epeLSc").innerHTML += (localStorage.getItem("Eriopon E3-Save") * 2.75).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("eplLS").innerHTML += Math.max(0, localStorage.getItem("Eriopon Lan"));
document.getElementById("eplLSc").innerHTML += (localStorage.getItem("Eriopon Lan") * 2.75).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("faLS").innerHTML += Math.max(0, localStorage.getItem("Formic Acid"));
document.getElementById("faLSc").innerHTML += (localStorage.getItem("Formic Acid") * 0.7).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("hpLS").innerHTML += Math.max(0, localStorage.getItem("Hydrogen Peroxide"));
document.getElementById("hpLSc").innerHTML += (localStorage.getItem("Hydrogen Peroxide") * 0.52).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("hsLS").innerHTML += Math.max(0, localStorage.getItem("Hydroxylamine Sulfate"));
document.getElementById("hsLSc").innerHTML += (localStorage.getItem("Hydroxylamine Sulfate") * 8.96).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("mlLS").innerHTML += Math.max(0, localStorage.getItem("Miralan LTD"));
document.getElementById("mlLSc").innerHTML += (localStorage.getItem("Miralan LTD") * 5.72).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("mtLS").innerHTML += Math.max(0, localStorage.getItem("Miralan TOP"));
document.getElementById("mtLSc").innerHTML += (localStorage.getItem("Miralan TOP") * 3.08).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("spLS").innerHTML += Math.max(0, localStorage.getItem("Sarabid Paw"));
document.getElementById("spLSc").innerHTML += (localStorage.getItem("Sarabid Paw") * 2.6).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("saLS").innerHTML += Math.max(0, localStorage.getItem("Soda Ash"));
document.getElementById("saLSc").innerHTML += (localStorage.getItem("Soda Ash") * 0.44).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("smaLS").innerHTML += Math.max(0, localStorage.getItem("Sodium Acetate"));
document.getElementById("smaLSc").innerHTML += (localStorage.getItem("Sodium Acetate") * 3.19).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("smbLS").innerHTML += Math.max(0, localStorage.getItem("Sodium Bicarbonate"));
document.getElementById("smbLSc").innerHTML += (localStorage.getItem("Sodium Bicarbonate") * 0.35).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("smmLS").innerHTML += Math.max(0, localStorage.getItem("Sodium Metabisulfate"));
document.getElementById("smmLSc").innerHTML += (localStorage.getItem("Sodium Metabisulfate") * 0.45).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("smsLS").innerHTML += Math.max(0, localStorage.getItem("Sodium Sulfate"));
document.getElementById("smsLSc").innerHTML += (localStorage.getItem("Sodium Sulfate") * 0.37).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("spdLS").innerHTML += Math.max(0, localStorage.getItem("Solopol DE3"));
document.getElementById("spdLSc").innerHTML += (localStorage.getItem("Solopol DE3") * 8.54).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tdLS").innerHTML += Math.max(0, localStorage.getItem("Thiourea Dioxide"));
document.getElementById("tdLSc").innerHTML += (localStorage.getItem("Thiourea-Dioxide") * 3.65).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tnLS").innerHTML += Math.max(0, localStorage.getItem("Tinegal NT"));
document.getElementById("tnLSc").innerHTML += (localStorage.getItem("Tinegal NT") * 4.34).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("ucnLS").innerHTML += Math.max(0, localStorage.getItem("Ultravon CN"));
document.getElementById("ucnLSc").innerHTML += (localStorage.getItem("Ultravon CN") * 2.32).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("uvddplLS").innerHTML += Math.max(0, localStorage.getItem("Univadine DPL"));
document.getElementById("uvddplLSc").innerHTML += (localStorage.getItem("Univadine DPL") * 1.83).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("uvddfmLS").innerHTML += Math.max(0, localStorage.getItem("Univadine DFM"));
document.getElementById("uvddfmLSc").innerHTML += (localStorage.getItem("Univadine DFM") * 3.16).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("ufpLS").innerHTML += Math.max(0, localStorage.getItem("UV Fast PLF"));
document.getElementById("ufpLSc").innerHTML += (localStorage.getItem("UV Fast PLF") * 6.08).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("ufwlLS").innerHTML += Math.max(0, localStorage.getItem("UV Fast W. Liq."));
document.getElementById("ufwlLSc").innerHTML += (localStorage.getItem("UV Fast W. Liq.") * 22.5).toLocaleString("en-IN", { style: "currency", currency: "USD"});


document.getElementById("bemaYelo").innerHTML += Math.max(0, localStorage.getItem("Bemaplex Yellow M-T"));
document.getElementById("bemaYeloc").innerHTML += (localStorage.getItem("Bemaplex Yellow M-T") * 7).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bez4GYelo").innerHTML += Math.max(0, localStorage.getItem("Bezaktiv Yellow WO-4G"));
document.getElementById("bema4GYeloc").innerHTML += (localStorage.getItem("Bezaktiv Yellow WO-4G") * 9.63).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bez4RYelo").innerHTML += Math.max(0, localStorage.getItem("Bezaktiv Yellow WO-4R"));
document.getElementById("bez4RYeloc").innerHTML += (localStorage.getItem("Bezaktiv Yellow WO-4R") * 4.48).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bemacYelo").innerHTML += Math.max(0, localStorage.getItem("Bemacid Yellow E-4G"));
document.getElementById("bemacYeloc").innerHTML += (localStorage.getItem("Bemacid Yellow E-4G") * 9.04).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("doraYelo").innerHTML += Math.max(0, localStorage.getItem("Doracryl Golden Yellow XGFLS 200"));
document.getElementById("doraYeloc").innerHTML += (localStorage.getItem("Doracryl Golden Yellow XGFLS 200") * 12.5).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana2RYelo").innerHTML += Math.max(0, localStorage.getItem("Lanaset Yellow 2R"));
document.getElementById("lana2RYeloc").innerHTML += (localStorage.getItem("Lanaset Yellow 2R") * 13.89).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana4GNYelo").innerHTML += Math.max(0, localStorage.getItem("Lanaset Yellow 4GN"));
document.getElementById("lana4GNYeloc").innerHTML += (localStorage.getItem("Lanaset Yellow 4GN") * 27.49).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaCEYelo").innerHTML += Math.max(0, localStorage.getItem("Lanasol Golden Yellow CE"));
document.getElementById("lanaCEYeloc").innerHTML += (localStorage.getItem("Lanasol Golden Yellow CE") * 11.97).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana4GYelo").innerHTML += Math.max(0, localStorage.getItem("Lanasol Yellow 4G"));
document.getElementById("lana4GYeloc").innerHTML += (localStorage.getItem("Lanasol Yellow 4G") * 22.55).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tect2GYelo").innerHTML += Math.max(0, localStorage.getItem("Tectilon Yellow 2G 200%"));
document.getElementById("tect2GYeloc").innerHTML += (localStorage.getItem("Tectilon Yellow 2G 200%") * 37.45).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tect3RYelo").innerHTML += Math.max(0, localStorage.getItem("Tectilon Yellow 3R 200%"));
document.getElementById("tect3RYeloc").innerHTML += (localStorage.getItem("Tectilon Yellow 3R 200%") * 33.15).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("telo4RYelo").innerHTML += Math.max(0, localStorage.getItem("Telon Yellow 4R Micro 01"));
document.getElementById("telo4RYeloc").innerHTML += (localStorage.getItem("Telon Yellow 4R Micro 01") * 9.35).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraCRYelo").innerHTML += Math.max(0, localStorage.getItem("Terasil Yellow CR"));
document.getElementById("teraCRYeloc").innerHTML += (localStorage.getItem("Terasil Yellow CR") * 9.58).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraBRLFYelo").innerHTML += Math.max(0, localStorage.getItem("Teratop Yellow BRLF"));
document.getElementById("teraBRLFYeloc").innerHTML += (localStorage.getItem("Teratop Yellow BRLF") * 14.48).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraGWLYelo").innerHTML += Math.max(0, localStorage.getItem("Tera(top/sil) Yellow GWL"));
document.getElementById("teraGWLYeloc").innerHTML += (localStorage.getItem("Tera(top/sil) Yellow GWL") * 8.75).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaRNOrng").innerHTML += Math.max(0, localStorage.getItem("Lanaset Orange RN"));
document.getElementById("lanaRNOrngc").innerHTML += (localStorage.getItem("Lanaset Orange RN") * 15.93).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teloMGSNOrng").innerHTML += Math.max(0, localStorage.getItem("Telon Orange M-GSN 01"));
document.getElementById("teloMGSNOrngc").innerHTML += (localStorage.getItem("Telon Orange M-GSN 01") * 18.65).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraTCOrng").innerHTML += Math.max(0, localStorage.getItem("Terasil Orange TC-01"));
document.getElementById("teraTCOrngc").innerHTML += (localStorage.getItem("Terasil Orange TC-01") * 7.52).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tera4RLOrng").innerHTML += Math.max(0, localStorage.getItem("Terasil Orange 4RL"));
document.getElementById("tera4RLOrngc").innerHTML += (localStorage.getItem("Terasil Orange 4RL") * 6.95).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bezRed").innerHTML += Math.max(0, localStorage.getItem("Bezaktiv Red WO-BB"));
document.getElementById("bezRedc").innerHTML += (localStorage.getItem("Bezaktiv Red WO-BB") * 4.53).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bemaMTRed").innerHTML += Math.max(0, localStorage.getItem("Bemaplex Red M-T"));
document.getElementById("bemaMTRedc").innerHTML += (localStorage.getItem("Bemaplex Red M-T") * 8.98).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bemacF4BRed").innerHTML += Math.max(0, localStorage.getItem("Bemacid Red F-4B"));
document.getElementById("bemacF4BRedc").innerHTML += (localStorage.getItem("Bemacid Red F-4B") * 6.26).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("doraafLSBRed").innerHTML += Math.max(0, localStorage.getItem("Dorasyn Red C-2B"));
document.getElementById("doraafLSBRedc").innerHTML += (localStorage.getItem("Dorasyn Red C-2B") * 11.95).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("eriRed").innerHTML += Math.max(0, localStorage.getItem("Erionyl Red B-10B"));
document.getElementById("eriRedc").innerHTML += (localStorage.getItem("Erionyl Red B-10B") * 31.82).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana2BRed").innerHTML += Math.max(0, localStorage.getItem("Lanaset Red 2B"));
document.getElementById("lana2BRedc").innerHTML += (localStorage.getItem("Lanaset Red 2B") * 38.32).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaBBord").innerHTML += Math.max(0, localStorage.getItem("Lanaset Bordeaux B"));
document.getElementById("lanaBBordc").innerHTML += (localStorage.getItem("Lanaset Bordeaux B") * 28.84).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaCEBord").innerHTML += Math.max(0, localStorage.getItem("Lanasol Bordeaux CE"));
document.getElementById("lanaCEBordc").innerHTML += (localStorage.getItem("Lanasol Bordeaux CE") * 12.24).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana6GRed").innerHTML += Math.max(0, localStorage.getItem("Lanasol Red 6G"));
document.getElementById("lana6GRedc").innerHTML += (localStorage.getItem("Lanasol Red 6G") * 18).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaCERed").innerHTML += Math.max(0, localStorage.getItem("Lanasol Red CE"));
document.getElementById("lanaCERedc").innerHTML += (localStorage.getItem("Lanasol Red CE") * 15.69).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaGRed").innerHTML += Math.max(0, localStorage.getItem("Lanaset Red G"));
document.getElementById("lanaGRedc").innerHTML += (localStorage.getItem("Lanaset Red G") * 27.47).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaF3GLScar").innerHTML += Math.max(0, localStorage.getItem("Lanasyn Scarlet F-3GL 130%"));
document.getElementById("lanaF3GLScarc").innerHTML += (localStorage.getItem("Lanasyn Scarlet F-3GL 130%") * 45.35).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("maxiRed").innerHTML += Math.max(0, localStorage.getItem("Maxilon Red GRL 200%"));
document.getElementById("maxiRedc").innerHTML += (localStorage.getItem("Maxilon Red GRL 200%") * 21.87).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("optiScar").innerHTML += Math.max(0, localStorage.getItem("Optilan Scarlet MF-GL 130"));
document.getElementById("optiScarc").innerHTML += (localStorage.getItem("Optilan Scarlet MF-GL 130") * 31.06).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tect2BRed").innerHTML += Math.max(0, localStorage.getItem("Tectilon Red 2B"));
document.getElementById("tect2BRedc").innerHTML += (localStorage.getItem("Tectilon Red 2B") * 32.87).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teloRed").innerHTML += Math.max(0, localStorage.getItem("Telon Red A-FG"));
document.getElementById("teloRedc").innerHTML += (localStorage.getItem("Telon Red A-FG") * 19.37).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teloRhod").innerHTML += Math.max(0, localStorage.getItem("Telon Rhodamine"));
document.getElementById("teloRhodc").innerHTML +=  (localStorage.getItem("Telon Rhodamine") * 27.5).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tera3BLRed").innerHTML += Math.max(0, localStorage.getItem("Terasil Red 3BL.01 150%"));
document.getElementById("tera3BLRedc").innerHTML += (localStorage.getItem("Terasil Red 3BL.01 150%") * 11.51).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraCBRed").innerHTML += Math.max(0, localStorage.getItem("Terasil Red CB"));
document.getElementById("teraCBRedc").innerHTML += (localStorage.getItem("Terasil Red CB") * 18.22).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraRRed").innerHTML += Math.max(0, localStorage.getItem("Terasil Red R"));
document.getElementById("teraRRedc").innerHTML += (localStorage.getItem("Terasil Red R") * 10.51).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraPink").innerHTML += Math.max(0, localStorage.getItem("Teratop Pink 2GLA"));
document.getElementById("teraPinkc").innerHTML += (localStorage.getItem("Teratop Pink 2GLA") * 17.06).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaViol").innerHTML += Math.max(0, localStorage.getItem("Lanaset Violet B"));
document.getElementById("lanaViolc").innerHTML += (localStorage.getItem("Lanaset Violet B") * 34.57).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teloViol").innerHTML += Math.max(0, localStorage.getItem("Telon Violet M-RWN 01"));
document.getElementById("teloViolc").innerHTML += (localStorage.getItem("Telon Violet M-RWN 01") * 60).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaGrey").innerHTML += Math.max(0, localStorage.getItem("Lanaset Grey G"));
document.getElementById("lanaGreyc").innerHTML += (localStorage.getItem("Lanaset Grey G") * 30.03).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("doraBlue").innerHTML += Math.max(0, localStorage.getItem("Doracid Blue SBL"));
document.getElementById("doraBluec").innerHTML += (localStorage.getItem("Doracid Blue SBL") * 19.5).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bezBlue").innerHTML += Math.max(0, localStorage.getItem("Bezaktiv Blue WO-DB"));
document.getElementById("bezBluec").innerHTML += (localStorage.getItem("Bezaktiv Blue WO-DB") * 6.65).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana2RABlue").innerHTML += Math.max(0, localStorage.getItem("Lanaset Blue 2RA"));
document.getElementById("lana2RABluec").innerHTML += (localStorage.getItem("Lanaset Blue 2RA") * 44.13).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana5GBlue").innerHTML += Math.max(0, localStorage.getItem("Lanaset Blue 5G"));
document.getElementById("lana5GBluec").innerHTML += (localStorage.getItem("Lanaset Blue 5G") * 67.19).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana3GBlue").innerHTML += Math.max(0, localStorage.getItem("Lanasol Blue 3G"));
document.getElementById("lana3GBluec").innerHTML += (localStorage.getItem("Lanasol Blue 3G") * 46.65).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana3RBlue").innerHTML += Math.max(0, localStorage.getItem("Lanasol Blue 3R"));
document.getElementById("lana3RBluec").innerHTML += (localStorage.getItem("Lanasol Blue 3R") * 42.75).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lana8GBlue").innerHTML += Math.max(0, localStorage.getItem("Lanasol Blue 8G"));
document.getElementById("lana8GBluec").innerHTML += (localStorage.getItem("Lanasol Blue 8G") * 39.62).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaCEBlue").innerHTML += Math.max(0, localStorage.getItem("Lanasol Blue CE"));
document.getElementById("lanaCEBluec").innerHTML += (localStorage.getItem("Lanasol Blue CE") * 29.23).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("maxiBlue").innerHTML += Math.max(0, localStorage.getItem("Maxilon Blue SL 200%"));
document.getElementById("maxiBluec").innerHTML += (localStorage.getItem("Maxilon Blue SL 200%") * 19.06).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tect4RSBlue").innerHTML += Math.max(0, localStorage.getItem("Tectilon Blue 4RS KWL 200%"));
document.getElementById("tect4RSBluec").innerHTML += (localStorage.getItem("Tectilon Blue 4RS KWL 200%") * 34.43).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tect6GBlue").innerHTML += Math.max(0, localStorage.getItem("Tectilon Blue 6G 200%"));
document.getElementById("tect6GBluec").innerHTML += (localStorage.getItem("Tectilon Blue 6G 200%") * 47.75).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teloMGLWBlue").innerHTML += Math.max(0, localStorage.getItem("Telon Blue M-GLW"));
document.getElementById("teloMGLWBluec").innerHTML += (localStorage.getItem("Telon Blue M-GLW") * 57.51).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teloRRBlue").innerHTML += Math.max(0, localStorage.getItem("Telon Blue RR"));
document.getElementById("teloRRBluec").innerHTML += (localStorage.getItem("Telon Blue RR") * 35).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("tera3RLBlue").innerHTML += Math.max(0, localStorage.getItem("Terasil Blue 3RL-02 150%"));
document.getElementById("tera3RLBluec").innerHTML += (localStorage.getItem("Terasil Blue 3RL-02 150%") * 33.84).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraGLFBlue").innerHTML += Math.max(0, localStorage.getItem("Terasil/Teratop Blue GLF"));
document.getElementById("teraGLFBluec").innerHTML += (localStorage.getItem("Terasil/Teratop Blue GLF") * 50.72).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraRBSBlue").innerHTML += Math.max(0, localStorage.getItem("Terasil Blue RBS"));
document.getElementById("teraRBSBluec").innerHTML += (localStorage.getItem("Terasil Blue RBS") * 20.23).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraBGEBlue").innerHTML += Math.max(0, localStorage.getItem("Teratop Blue BGE"));
document.getElementById("teraBGEBluec").innerHTML += (localStorage.getItem("Teratop Blue BGE") * 31.67).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("teraBLFBlue").innerHTML += Math.max(0, localStorage.getItem("Teratop Blue BLF"));
document.getElementById("teraBLFBluec").innerHTML += (localStorage.getItem("Teratop Blue BLF") * 14.48).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bemaNavy").innerHTML += Math.max(0, localStorage.getItem("Bemaplex Navy M-T"));
document.getElementById("bemaNavyc").innerHTML += (localStorage.getItem("Bemaplex Navy M-T") * 7.71).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaCFRNavy").innerHTML += Math.max(0, localStorage.getItem("Lanasyn Navy CF-R"));
document.getElementById("lanaCFRNavyc").innerHTML += (localStorage.getItem("Lanasyn Navy CF-R") * 10).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaCENavy").innerHTML += Math.max(0, localStorage.getItem("Lanasol Navy CE"));
document.getElementById("lanaCENavyc").innerHTML += (localStorage.getItem("Lanasol Navy CE") * 11.42).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaGreen").innerHTML += Math.max(0, localStorage.getItem("Lanaset Green B"));
document.getElementById("lanaGreenc").innerHTML += (localStorage.getItem("Lanaset Green B") * 32.61).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bemaBrown").innerHTML += Math.max(0, localStorage.getItem("Bemaplex Brown D-BD"));
document.getElementById("bemaBrownc").innerHTML += (localStorage.getItem("Bemaplex Brown D-BD") * 7.51).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaBNABrown").innerHTML += Math.max(0, localStorage.getItem("Lanaset Brown B-NA"));
document.getElementById("lanaBNABrownc").innerHTML += (localStorage.getItem("Lanaset Brown B-NA") * 12.13).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaGBrown").innerHTML += Math.max(0, localStorage.getItem("Lanaset Brown G-01"));
document.getElementById("lanaGBrownc").innerHTML += (localStorage.getItem("Lanaset Brown G-01") * 38.16).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("bezBlck").innerHTML += Math.max(0, localStorage.getItem("Bezaktiv Black WO-TF"));
document.getElementById("bezBlckc").innerHTML += (localStorage.getItem("Bezaktiv Black WO-TF") * 5.73).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("isolBlck").innerHTML += Math.max(0, localStorage.getItem("Isolan Black 2S-LD"));
document.getElementById("isolBlckc").innerHTML += (localStorage.getItem("Isolan Black 2S-LD") * 6.83).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaCEBlck").innerHTML += Math.max(0, localStorage.getItem("Lanasol Black CE"));
document.getElementById("lanaCEBlckc").innerHTML += (localStorage.getItem("Lanasol Black CE") * 11).toLocaleString("en-IN", { style: "currency", currency: "USD"});

document.getElementById("lanaCEDpBlck").innerHTML += Math.max(0, localStorage.getItem("Lanasol Deep Black CE-R"));
document.getElementById("lanaCEDpBlckc").innerHTML += (localStorage.getItem("Lanasol Deep Black CE-R") * 11).toLocaleString("en-IN", { style: "currency", currency: "USD"});


function exportTableToExcel(tableId) {
    // Get the table element using the provided ID
    const table = document.getElementById(tableId);
  
    // Extract the HTML content of the table
    const html = table.outerHTML;
  
    // Create a Blob containing the HTML data with Excel MIME type
    const blob = new Blob([html], {type: 'application/vnd.ms-excel'});
  
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
  
    // Create a temporary anchor element for downloading
    const a = document.createElement('a');
    a.href = url;
  
    // Set the desired filename for the downloaded file
    a.download = 'table.xls';
  
    // Simulate a click on the anchor to trigger download
    a.click();
  
    // Release the URL object to free up resources
    URL.revokeObjectURL(url);

  }
  
  // Attach the function to the export button's click event
  document.getElementById('exportButton').addEventListener('click', function() {
    exportTableToExcel('tableId');
    
    if (window.location.href === mathInven.html) {
        window.location.href = MasterInv.html;
    };
  });