var aBtn = document.querySelectorAll('#btn-copy');


for (let i = 0; i < aBtn.length ; i++){
    
 aBtn[i].addEventListener(
           'click',
           function(event) {
               var precode = document.querySelectorAll('code')[i];
     var copyCode = querySelectorFrom("#code-to-copy",precode);
         var range = document.createRange();
            range.selectNode(precode);
            window.getSelection().addRange(range);
            try { // Now that we've selected the anchor text, execute the copy command 
       
             var successful = document.execCommand('copy');
       
             var msg = successful ? alert('ok')
               : alert('no');
             console.log('Copy email command was ' + msg);
            } catch (err) {
             console.log('Oops, unable to copy');
       
            }
            // Remove the selections - NOTE: Should use // removeRange(range) when it is supported
            window.getSelection().removeAllRanges();
       
           });
};

function querySelectorFrom(selector, elements){
  var all = document.querySelectorAll(selector);
  var temp = [];
  for(var i =0; i< elements.length;i++){
    if(Array.prototype.indexOf.call(all,elements[i])!==-1){
    temp.push(elements[i]);
    }
  }
  return temp;
} 