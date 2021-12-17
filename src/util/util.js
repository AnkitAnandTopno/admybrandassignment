function randomString(length){
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newString = "";
    for(let i=0; i<length; i++){
        let min = Math.ceil(0);
    let max = Math.floor(51);
    let  randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        newString += charSet[randomIndex];
    }
    return newString;
}
function filterBySearchSubString(arr, searchString){
    let filteredArray = [];
    for(let i=0; i<arr.length; i++){
        let lowCaseElement = arr&&arr[i]&&arr[i].toLowerCase();
        if(lowCaseElement.indexOf(searchString&&searchString.toLowerCase())>-1){
            filteredArray.push(arr[i]);
        }
    }
    if(searchString.length>0){
        return filteredArray;
    }
    else{
        return arr;
    }
}
export {randomString, filterBySearchSubString};