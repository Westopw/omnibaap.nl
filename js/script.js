var basics =
["Dieren", "Landen", "Bekende mensen", "Fictionele karakters", 
    "Bands & Artiesten", "Films & Series", "Merken",
    "Flora", "Waarvan je in het ziekenhuis beland als het vanaf twee verdiepingen op je land", "Vakantiebestemmingen", 
    "Winkels", "Ik ga op vakantie en ik bezoek ...", "Alles", 
    "Alles voor 1 euro", "Alles voor 10 euro", "Wat je 10 meter ver kan gooien",
    "Beroepen", "Scheldwoorden", "Bedrijfsmotto's", 
    'Bestaande of nieuwe omnibaap spel categoriën', 
    'Boeken', 'Dingen harder dan een baksteen', 'Muzieknummers', 
    'Trends voor 13-jarigen', 'Dranken', 'Videogames', 
    'Plekken', 'Elke chillsessie ooit', 'Wat jou 10 meter ver kan gooien', 
    'Wat je over je vriendin kan zeggen maar niet over je auto', 'Dingen die je met je moeder zou doen', 'Wat je over je auto kan zeggen maar niet over je vriendin', 
    'Wat mogelijk is na de dood', 'Kookgerei', 'Het eerste waar je aan denkt', 
    'Alles zonder Herman', 'Waar een kind in kan stikken', 'Talen en dialecten', 'Luxeproducten', 'Red flags', 
    'Dingen die je niet ziet aankomen', 'Alles met Herman', 'Groentes', 
    'Wat je kan eten', 'Fruit', 'Schoolvakken', 
    'Kunststromingen', 'Lichaamsdelen', 'Wat je in een kluis zou stoppen', 
    'Dingen die kut zijn', 'Redenen om met iemand naar bed te gaan', 'Eén van je drie magische wensen', 
    'Het beste idee van Nederland', 'Complottheoriën', 'Lichamelijke aandoeningen', 
    'Dingen in een donkere steeg', 'Culturen', 'Absoluut het geld waard', 
    'Moordwapens', 'Kantoorartikelen', 'Waar je dood aan kan gaan',
    "Dingen om een joint mee aan te steken", 'Dingen die je kunt roken',
    'Het laatste wat je doet', 'Politieke partijen', 'Alcoholische dranken', 
    'Nostalgie', 'Goede doelen', 'Fetishes', 
    'Kinks', 'Dingen die je op je reis mee terug zou nemen', 'Subculturen'];

var woorden =
["Iets wat rijmt op het vorige woord", 'Engelse woorden, >=8 letters', 'Synoniemen voor geld', 
    'Getallen', 'Namen voor een dating-app', "Afko's", 
    'Woorden die al gezegd zijn', 'Werkwoorden', 'Onomatopeeën', 
    'Synoniemen voor bier', 'Een naam voor een IKEA-meubel', 'Voorzetsels', 
    'Engelse woorden', 'Afkortingen', 'Palindroom', 
    'Kleuren', 'Woorden om een kunstwerk mee te beschrijven'];

var plekken =
["Plekken om te slapen", 'Waterlichamen', 'Oppervlaktes', 
    'Plekken om te wonen', 'Plekken om seks te hebben', 'Dingen waar je in kan wonen', 
    'Gebouwen', 'Plekken om je peuken te bewaren', 'Plekken om je wiet te bewaren', 
    'Plekken om te zitten'];

var personen =
["Wetenschappers", 'Kunstenaars', 'Voornamen', 
    'De ideale schoonzoon', 'Genderloze voornamen', 'Beroemde mensen', 
    'Namen voor een street gang', 'Achternamen', 'Vrouwennamen', 
    'Criminelen', 'Dikke mensen', 'Mannennamen', 
    'Namen voor knuffeldieren', 'Leiderschapskwaliteiten'];

var dingen =
["Wat in je broekzak past", "Wat je in de supermarkt kan tegenkomen", "Dingen die je kan stelen als je dronken bent", 
    "Dingen die vet relaxt zijn", "Dingen die je niet in een vliegtuig mee kan nemen", "Dingen die je graag zou willen hebben",
    "Dingen die trillen", "Dingen zachter dan veren", "Dingen die zwaar zijn", 
    "Dingen die licht zijn", 'Electronica', 'Decoraties', 
    'Meubels', 'Dingen die je wilt hebben', 'Organen', 
    'Dingen die je kan stelen', 'Dingen die je kan begraven', 'Knoppen op een rekenmachine', 
    'Alles dat niet bestaat', 'Speelgoed', 'Bouwmaterialen', 
    'Dingen met toetsen en knoppen', 'Dingen die drijven', 'Sekstoys', 
    'Dingen om mee te schrijven', 'Dingen die geluid maken', 'Dingen die glibberig zijn', 
    'Dingen die heel groot zijn', 'Dingen die je lichaam ingaan', 'Dingen die je lichaam uitkomen', 
    'Dingen die niet in een lift passen', 'Dingen die sus zijn', 'Dingen om voor te bedelen', 
    'Dingen om weg te gooien', 'Dingen uit de jaren 80', 'Dingen waar Adam Eva van had kunnen maken', 
    'Dingen waar je een tattoo van zou willen hebben', 'Wietsoorten', 'Muziekinstrumenten', 
    'Dingen die vliegen', 'Wat je niet kan eten', 'Snacks', 
    'Kledingstukken'];

var gerelateerd =
["Wetenschappelijk gerelateerd", "Oorlogsgerelateerd",
    "Godsdienst gerelateerd", "Sport gerelateerd", "Jouw werk/studie gerelateerd",
    "Game gerelateerd", "Kunst gerelateerd", "Seks gerelateerd",
    "Drugs gerelateerd", "Ruimtevaart gerelateerd", "Politiek gerelateerd",
    "Kerst gerelateerd", "Halloween gerelateerd"];

var nieuws =
['Een nieuwe titel voor een wetenschappelijk artikel', 'Het onderwerp van je elevator pitch', 'Dingen om muzieknummers over te schrijven', 
    'Namen voor een nieuw product', 'Een nieuw muziekgenre', 'One sentence horror story', 
    'Een nieuwe uitvinding', 'Dingen om met een miljoen te doen'];

var cleopatra = 
["Dingen om in de BoBa te doen", "Dingen om in de BeBa te doen", "Dingen om in de TuBa te doen", 
    "Redenen om bestuur te worden", "Boten", "Stammen",
    "BeBa-hitjes", "Cleopatra gerelateerd", "Dingen die je met veilingitems kan doen",
    "Cleopatranen", "Groningse uitgaansgelegenheden", "Verenigingen", 
    "Thema's voor feesten", "Objecten om een klefemmer mee te geven", "BeBa-nummers waar je nu onderhand wel een beetje klaar mee bent",
    "Dingen om tijdens een NICO te koken", "Manieren om 'kapitein' te zeggen", "Namen voor een boot",
    "Namen voor een stam", "Dingen om op bootkamp te doen", 'Dingen waar je vloeistof in kan doen'];

var media =
["Pokemon", 'Antagonisten', 'Filmgenres', 
    'Games die veel beter zouden zijn in VR', 'Protagonisten', 'Theatervoorstellingen', 
    'Stripfiguren', 'Mythologische wezens', 'Musicals', 
    'Binge-waardige shows', 'Bordspellen', 'Waar je een film over zou kunnen maken', 
    'Personages waar je een masker van wilt hebben', 'Muzieknummers met een niet-Engelse titel', 'Catchphrases', 
    'Dingen om in Minecraft te bouwen', 'Monsters', 'Memes', 
    'Consoles'];

var zinnen =
['Welkom bij mijn TED-talk over ...', 'Simon says...', 'Ik ga op reis en ik neem mee ...', 
    'Komt een man bij de dokter...', 'Verboden te...', 'Wie als eerst ..., wint!', 
    'Komt een vrouw bij de dokter...', 'Kijk uit!...', 'dissen',
    'Nieuwjaarsvoornemens', 'Manieren om met moord weg te komen', 'Openingszinnen', 
    'Dromen', 'Wat je absoluut niet op je LinkedIn wil hebben staan', 'Redenen om op vakantie te gaan', 
    'Weddenschappen', 'Redenen om te daten', 'Domme manieren om dood te gaan', 
    'Nachtmerries'];

var activiteiten =
['Dingen die je met je baby zou doen', 'Dansmoves', 'Redenen om te protesteren', 
    'Opleidingen', 'Seksstandjes', 'Hollandse feestdagen', 
    'Dingen om te doen tijdens het slaapwandelen', 'Historische gebeurtenissen', 'Dingen om naar iemand te gooien', 
    'Feestdagen', 'Drankspellen', 'Nummers om karaoke op te zingen', 
    'Alles waarvoor je gestraft wordt', 'Dingen die je kan drinken'];

var junk =
['Dingen die heel medium zijn', 'Dingen die je sociaal geaccepteerd mag stelen', 'Green flags', 
    'Dingen die je uit kan zetten', 'Dingen om op te schrijven', 'Dingen die je in het stopcontact steekt', 
    'Dingen die niemand boeit', 'Dingen die je aan kan zetten', 'Dingen om een koekje in te dopen', 
    'Onhygiënische praktijken', 'Dingen die je in de kelder kan vinden', 'Dingen waar je alles voor zou doen', 
    'Redenen waarom lucifer uit de hemel is verbannen', 'Aangename verassingen', 'Dingen die geen geluid maken', 
    'Recepten', 'Slechte geuren voor een kaars', 'Dingen om te doen tijdens het poepen', 
    'Schoonmaakproducten', 'Dingen waarvan je vind dat jij beter bent dan de rest', 'Inside jokes', 
    'Dingen die je niet in de magnetron kan stoppen', "Thema's voor een pretpark", 'Dingen met toeters en bellen', 
    'Schoonheidsproducten', 'Pretparkattracties', 'Psychische aandoeningen', 
    'Waar je problemen mee krijgt bij de douane', 'Goede geuren voor een kaars', 'Outfits voor themafeesten', 
    'Dingen waar je verslaafd aan kan raken', 'Dingen waar je niets voor zou doen', 'Maanden in een jaar', 
    'Handelingen die door AI vervangen kunnen worden', 'Kermisattracties', "Dingen die je op 20 april zou doen",
    'Smokkelwaar', 'Ongemakkelijke situaties', 'Wapens voor tijdens een zombie apocalypse', 
    'Ontbijt', 'Absoluut niet het geld waard', 'Dingen die heel klein zijn', 
    'Absoluut niet het geld waard', 'Hygiënische praktijken'];

//zet getallen neer
var loadmodulelength;
for(i = 1; i < ($(".modulebutton").length + 1); i++){
    loadmodulelength = $(".modulebutton:nth-child(" + i + ")").attr("id");
    parseFloat(loadmodulelength);
    loadmodulelength = loadmodulelength.length;
    $(".modulebutton:nth-child(" + i + ") span span").text(window[$(".modulebutton:nth-child(" + i + ")").attr("id")].length);
}

var log = [];
var optionsout = 0;
var prompt;
var playing = [];
var mode = "light";
var add;
var addstorage = 1;

//activeer modules
var modules = [];

for(i = 1; i < ($(".modulebutton").length + 1); i++){

    if(window.localStorage.getItem("omnibaap_module_" + $(".modulebutton:nth-child(" + i + ")").attr("id")) != null){
        if(window.localStorage.getItem("omnibaap_module_" + $(".modulebutton:nth-child(" + i + ")").attr("id")) == true){
            $(".modulebutton:nth-child(" + i + ")").toggleClass("active");
        }
    }
}

loadmodules();

//default = 5
var loglength = 5;
//version
var version = "v3.1_2025";

$("#signature").append(version);

//de 'dubbel-checker'. Activeer om te checken of er dubbele waarden zijn.
const frequency = (arr, item) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
        }
    }
    return count;
};

for(let k = 0; k < playing.length; k++){
console.log(frequency(playing, playing[k])); }
//'dubbel-checker' uit

//zet darkmode klaar (eerst local storage checken)
if(window.localStorage.getItem("omnibaap_darkmodestorage") != null){
    mode = window.localStorage.getItem("omnibaap_darkmodestorage");
}else if(window.localStorage.getItem("omnibaap_darkmodestorage") == 1 || 0){
    //forced update localstorage
    window.localStorage.setItem("omnibaap_darkmodestorage", "light");   
}
darkmode(mode);

//als hamburger geklikt
$("#hamburger").on("click", function () {
    
    //check of al uitgeklapt of niet, afhankelijk daarvan vergroten/verkleinen
    if(optionsout == 0){

        $("#button").css("display", "none");
        $("#hamburger div").css("background-color", "rgb(52, 78, 65)");
        $("#options").css("transform", "translate(0vw, 0)");
        $("header").css("border-radius", "0px");

        optionsout = 1;
    
    }else if(optionsout == 1){
    
        $("#button").css("display", "inherit");
        $("#options").css("transform", "translate(-100vw, 0)");
        $("header").css("border-radius", "0 0 42px 42px");

        if(darkmode == 0){
            $("#hamburger div").css("background-color", "white");
        }else if(darkmode == 1){
            $("#hamburger div").css("background-color", "black");
        }
        optionsout = 0;
    }

});

//als moduleknop geklikt wordt
$('.modulebutton').click(function (e) { 
    $(this).toggleClass("active");
    modules = [];
    loadmodules();
});

//als darkmode knop geklikt
$("#modebutton").on("click", function () {

        if(mode == "light"){

            window.localStorage.setItem("omnibaap_darkmodestorage", "dark");
            mode = "dark";
            darkmode(mode);

        }else if(mode == "dark"){

            window.localStorage.setItem("omnibaap_darkmodestorage", "light");
            mode = "light";
            darkmode(mode);
        }else if(mode == "funky"){
        
            if(window.localStorage.getItem("omnibaap_darkmodestorage") == "light"){
                mode = "light";
            }else if(window.localStorage.getItem("omnibaap_darkmodestorage") == "dark"){
                mode = "dark";
            }
            darkmode(mode);
    
        }
});

//als signature knop geklikt
$("#signature").on("click", function () {

    if(mode == "funky"){
        
        if(window.localStorage.getItem("omnibaap_darkmodestorage") == "light"){
            mode = "light";
        }else if(window.localStorage.getItem("omnibaap_darkmodestorage") == "dark"){
            mode = "dark";
        }
        darkmode(mode);

    }else if(mode != "funky"){
        mode = "funky";
        darkmode(mode);
    }
});

//als button geklikt wordt
$("#button").on("click", function () {
    $("#button p").css("color", "rgb(255, 255, 255, 0%)");

    printprompt(modules);
});


//functie voor het kiezen en printen van de prompt
function printprompt(modules) {
    $("#button p").css("color", "rgb(255, 255, 255, 0%)");

        gekozen_prompt = Math.floor(Math.random() * playing.length);
    
        if($("#prompt").html() != ""){
            
            //reset log
            $("#log").html("");

            log.unshift(prompt);

            if(log.length > loglength){
                log.pop();
            }

            for(var i = 0; i < log.length; i++){
                $("#log").append(log[i] + "<br/>");;
            }
        }
        
        if(playing.length == 1){
            setTimeout(() => {
                loadmodules();
            }, 100);
        }

                prompt = playing[gekozen_prompt];

                playing.splice(gekozen_prompt, 1);

                $("#prompt").html(prompt);
    
    console.log(playing.length);
}

function loadmodules(){

    //voor elke div in #modulebuttons, check of active=true oid. Voeg deze toe aan de array.
    for(i = 1; i < ($(".modulebutton").length + 1); i++){

        //als active (haal vanuit local storage)
        if($(".modulebutton:nth-child(" + i + ")").hasClass("active") == true){
            //voeg aan array toe en consolelog actief
            modules.push($(".modulebutton:nth-child(" + i + ")").attr("id"));
            console.log($(".modulebutton:nth-child(" + i + ")").attr("id") + " - active");
            window.localStorage.setItem("omnibaap_module_" + $(".modulebutton:nth-child(" + i + ")").attr("id"), "true");
        }else{
            //consolelog inactief
            console.log($(".modulebutton:nth-child(" + i + ")").attr("id") + " - inactive");
            window.localStorage.setItem("omnibaap_module_" + $(".modulebutton:nth-child(" + i + ")").attr("id"), "false");
        };
    };

    buildlist(modules);
}

function buildlist(modules) {
         //create playing list
         playing = [];
         console.log(modules);

         for(i = 0; i < modules.length; i++){
            modules[i] = window[modules[i]];
         }

         for(i = 0; i < modules.length; i++){
            for(j = 0; j < modules[i].length; j++){
                playing.push(modules[i][j]);
            }
         }

         console.log(playing);   
}

function darkmode(naar) {

    if(naar == "dark"){

        $("#modebutton").css("border-color", "black");
        $("#hamburger div").css("background-color", "black");
        $("body").css("background-color", "black");
        $("#prompt").css("color", "white");
        $("#log").css("color", "rgb(170, 170, 170)");
        $("#gradient").css("background-image", "linear-gradient(to bottom, rgba(255,0,0,0), 40%, black)");
        $("#whiteblock").css("background-color", "black");
        $("#button").attr("mode","dark");
        $("header").attr("mode","");
        $("footer").attr("mode","");

        if(optionsout == 1){
            $("#hamburger div").css("background-color", "rgb(52, 78, 65)");
        }else if(optionsout == 0){
            $("#hamburger div").css("background-color", "black");
        }
    }else if(naar == "light"){

        $("#modebutton").css("border-color", "white");
        $("body").css("background-color", "white");
        $("#prompt").css("color", "black");
        $("#log").css("color", "rgb(70, 70, 70)");
        $("#gradient").css("background-image", "linear-gradient(to bottom, rgba(255,0,0,0), 40%, white)");
        $("#whiteblock").css("background-color", "white");
        $("#button").attr("mode","white");
        $("header").attr("mode","");
        $("footer").attr("mode","");

        if(optionsout == 1){
            $("#hamburger div").css("background-color", "rgb(52, 78, 65)");
        }else if(optionsout == 0){
            $("#hamburger div").css("background-color", "white");
        }
    }else if(naar == "funky"){
        $("#button").attr("mode","funky");
        $("header").attr("mode","funky");
        $("footer").attr("mode","funky");
    }

}