function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Decko",
            title: "Naslov",
            release_year: 2020,
            id: 100,
            formats: {
                1: "AB",
                2: "BC",
                3: "CD"
            }
            
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;