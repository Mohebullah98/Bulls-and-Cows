/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 //Use a hashTable to keep track of how many times each char appears in secret
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    let hashTable = new Array(10).fill(0);
    guess = guess.split("");
    for(const x of secret){
        hashTable[parseInt(x)]+=1;
    }
    //iterate both strings
    for(let i=0;i<secret.length;i++){
        //If both chars are equal, remove one instance of char from hashTable so it won't be counted again and change guess[i] to special char so we don't count it again. Increment bulls
        if(secret[i] === guess[i]){
            bulls+=1;
            hashTable[parseInt(secret[i])]-=1;
            guess[i] = '$'
        }
    }
    //Iterate guess and see how many valid chars left appear in hashtable, increment cows and reduce hashtable tallies as we run into valid chars
    for(let i=0;i<guess.length;i++){
        if(guess[i] !== '$' && hashTable[parseInt(guess[i])] > 0){
            cows+=1;
            hashTable[parseInt(guess[i])]-=1;
        }
    }
    return `${bulls}A${cows}B`
};
