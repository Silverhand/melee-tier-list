//Rankings Data
var rank = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101];
var char1 = ['Jigglypuff','Peach','Fox','Sheik','Falco','Marth','Marth','Captain Falcon','Yoshi','Pikachu','Captain Falcon','Fox','Sheik','Samus','Marth','Captain Falcon','Fox','Fox','Ice Climbers','Ice Climbers','Peach','Falco','Samus','Fox','Fox','Marth','Captain Falcon','Fox','Sheik','Fox','Fox','Marth','Sheik','Fox','Peach','Fox','Peach','Fox','Fox','Falco','Jigglypuff','Captain Falcon','Fox','Peach','Sheik','Ice Climbers','Marth','Falco','Jigglypuff','Fox Falco','Falco','Fox','Sheik','Falco','Jigglypuff','Fox','Sheik','Luigi','Fox','Sheik','Ice Climbers','Marth','Luigi','Sheik','Ice Climbers','Sheik','Ice Climbers','Jigglypuff','Fox','Ice Climbers','Fox','Marth','Fox','Falco','Sheik','Luigi','Jigglypuff','Fox','Marth','Fox','Sheik','Fox','Captain Falcon','Falco','Jigglypuff','Fox','Fox','Marth','Falco','Ice Climbers','Falco','Fox','Falco','Peach','Marth','Sheik','Falco','Yoshi','Samus','Falco','Sheik'];
var char2 = ['', 'Fox', '', 'Fox', 'Fox', 'Sheik', '', '', '', '', '', '', '', '', 'Fox', '', '', '', '', '', '', '', '', 'Sheik', '', 'Fox', '', '', 'Marth', 'Marth', 'Sheik', '', '', '', '', 'Falco', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Fox', '', '', 'Captain Falcon', '', '', '', '', '', '', 'Marth', '', '', '', '', '', 'Marth', '', 'Sheik', '', '', '', '', '', '', '', '', 'Falco', '', '', '', 'Falco', 'Sheik', '', 'Fox', '', '', '', '', '', '', 'Fox', '', '', '', 'Fox', 'Marth'];
var char3 = ['', '', '', 'Samus', '', 'Fox', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Marth', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
var weightChars = ["Fox", "Sheik", "Falco", "Marth", "Ice Climbers", "Jigglypuff", "Captain Falcon", "Peach", "Samus", "Yoshi", "Pikachu", "Luigi"];
var weightResults = [];
for (var i = 0; i < weightChars.length; i++) {
    weightResults[i] = 0;
}

//Main Processing Loop
for(var i = 0; i < rank.length; i++) {
    var weight = 0;

    if(char3[i] == '' && char2[i] == '' && char1[i] != '') {
        weight = 1 * formula(rank[i]);
        addToResults(weight, char1[i]);
    } else if(char3[i] == '' && char2[i] != '' && char1[i] != '') {
        weight = 0.7 * formula(rank[i]);
        addToResults(weight, char1[i]);

        weight = 0.3 * formula(rank[i]);
        addToResults(weight, char2[i]);
    } else if (char3[i] != '' && char2[i] != '' && char1[i] != '') {
        weight = 0.7 * formula(rank[i]);
        addToResults(weight, char1[i]);

        weight = 0.2 * formula(rank[i]);
        addToResults(weight, char2[i]);

        weight = 0.1 * formula(rank[i]);
        addToResults(weight, char3[i]);
    }
}

for(i = 0; i < weightChars.length; i++) {
    console.log(weightChars[i] + " " + weightResults[i] + "\n");
}

function formula(r) {
    var x = 0;

    x = Math.exp((-0.25*r) + 5.05);

    return x;
}

function addToResults(w, c) {
    var place = 0;
    for(var y = 0; y < weightChars.length; y++) {
        if(c == weightChars[y]) {
            place = y;
        }
    }

    weightResults[place] += w;
}
