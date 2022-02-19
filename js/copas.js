let copyBtn = document.querySelectorAll('#btn-copy');


for (let i = 0; i < copyBtn.length ; i++){
    
 copyBtn[i].addEventListener(
           'click',
           function(event) {
               let precode = document.querySelectorAll('code')[i];
     let copyCode = querySelectorFrom("#code-to-copy",precode);
         let range = document.createRange();
            range.selectNode(precode);
            window.getSelection().addRange(range);
            try { // Now that we've selected the anchor text, execute the copy command 
       
             let successful = document.execCommand('copy');
       
             let msg = successful ? alert('dicopy')
               : alert('error woiii');
            } catch (err) {
       
            }
            // Remove the selections - NOTE: Should use // removeRange(range) when it is supported
            window.getSelection().removeAllRanges();
       
           });
};

function querySelectorFrom(selector, elements){
  let all = document.querySelectorAll(selector);
  let temp = [];
  for(let i =0; i< elements.length;i++){
    if(Array.prototype.indexOf.call(all,elements[i])!==-1){
    temp.push(elements[i]);
    }
  }
  return temp;
} 
