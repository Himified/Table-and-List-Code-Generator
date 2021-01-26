function createTable()
{
    var nbr_rows = document.getElementById('rows').value;
    var nbr_cols = document.getElementById('cols').value;
    var header = '<table border="1">\n';
    var body = '';

    for( var i=0; i<nbr_rows;i++)
    {
        body += '<tr>\n';
        for( var j=0; j<nbr_cols;j++)
        {
            if(i==0){
                body += '<th>';
            body +=  +i+1 ;
            body += '</th>\n'
            }
            else
            {
                body += '<td>';
            body +=  +i+1 ;
            body += '</td>\n'
            }
            
        }
        body += '</tr>\n';
    }
    var footer = '</table>';
    document.getElementById('comment').innerHTML = header + body + footer;
}
function createList()
{
    var items = document.getElementById('items').value;
    var header = '<ul>\n';
    var body = '';

    for( var i=0; i<items;i++)
    {
            body+='<li>';
            body+= +i+1;
            body+='</li>\n';
    }
    var footer = '</ul>';
    document.getElementById('display').innerHTML = header + body + footer;
}

document.getElementById('reset1').addEventListener("click",function(){
  document.getElementById('comment').value="";
});

document.getElementById('reset2').addEventListener("click",function(){
  document.getElementById('display').value="";
});

document.getElementById('copy1').addEventListener("click",function(){
        let copyTextarea = document.querySelector('#comment');
        copyTextarea.focus();
        copyTextarea.select();
        try {
          let successful = document.execCommand('copy');
          let msg = successful ? 'successful' : 'unsuccessful';
          if(msg==='successful'){
                document.getElementById('copy1').innerHTML="copied!";
                setTimeout(function () {
                document.getElementById('copy1').innerHTML="COPY";
                }, 2000);
          }
        } catch(err) {
          alert('Unable to copy');
        }
});

document.getElementById('copy2').addEventListener("click",function(){
        let copyTextarea = document.querySelector('#display');
        copyTextarea.focus();
        copyTextarea.select();
        try {
          let successful = document.execCommand('copy');
          let msg = successful ? 'successful' : 'unsuccessful';
          if(msg==='successful'){
                document.getElementById('copy2').innerHTML="copied!";
                setTimeout(function () {
                document.getElementById('copy2').innerHTML="COPY";
                }, 2000);
          }
        } catch(err) {
          alert('Unable to copy');
        }
});

var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml10 .let');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='let'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .let',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
