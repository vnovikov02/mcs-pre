function rnaTranscription(dnaInput) {
    var dnaMap = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    dnaInput = dnaInput.split('');

    var rnaOutput = '';
    dnaInput.map(function(letter) {
        rnaOutput += dnaMap[letter]; 
    });

    return rnaOutput;
};