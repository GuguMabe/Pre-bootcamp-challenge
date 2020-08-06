 function listVowels(string){
  var vowels = 'aeiouAEIOU';
  var array = '';
  for (i = 0; i < string.length; i++){
    if(vowels.indexOf(string[i]) >= 0) array += string[i];
  } return array;
}
  console.log(listVowels("Gugu MAbe"));