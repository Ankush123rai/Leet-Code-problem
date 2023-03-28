var isValid = function(s) {
    let stack = []
    const symbole = {")" : "(", "}" : "{",  "]" : "["}
        
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(char in symbole){
            let topElement = stack.pop() || "#"
            if(topElement != symbole[char]){
                return false
            }
        }else{
            stack.push(char)
        }
    }
    return stack.length === 0;
}
const x = isValid("()");

console.log(x);
