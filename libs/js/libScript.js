// 提取参数
function parseWords(str, word){
  let regex = new RegExp(`(${word}=)([^&]*)`);
  if(match && match[2]){
    return match[2];
  }
  return null; // not match，没有匹配
}
/*
str = "str1=val1&str2=val2"
parseWords(str, "str1") 就返回 val1
*/
