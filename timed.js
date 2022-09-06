var roots,definitions,x,y,word, word2,time1,roundActive, score
roots=['epi','hyper','hypo','in','re','trans','un','con','in','chromo','dem','derm','feder','gen','meso','mono','pachy','pan','poly','scop','al','ant','ia','ic','ium','less','ly','ness','oid','asylum','atrophy','contrite','conviction','disinclination','disparage','inadvertently','inane','pessimism','petty','rescind','skeptic','squander','truculent','ubiquitous']
definitions=['on, outside','over, above','under, below','not','back, again','across, through, over','not','with, together','not','color','people','skin','faith, trust','birth, produce, rate','middle','one','thick','all','many','look, view','like, related to','one who, that which','condition','like, related to','chemical element','without','like, manner of','state of','resembling','a place offering protection; an instituion for the care of teh mentally ill; sanctuary.','to cause to wither or waste away.','humbled by guilt and repentant for ones sins.','a strong belief; the process of proving guilty','lack of willingness; reluctance.','to slight; belittle; criticize','unintentionally; accidentally.','lacking sense or substance','tendenc to take the gloomiest possible view of a situation.','trivial; narrow; spiteful.','to void; repeal.','one who instinctively doubts or habitually disagrees.','to spend wastefully.','savage and cruel; inclined to fight.','being everywhere, omnipresent.']
x=Math.floor(44*Math.random())
y=Math.floor(44*Math.random())
roundActive=false
score=0
time1=0
function count(){
  if (roundActive==true){
  var timer = setInterval(function(){        document.getElementById('Timer').innerHTML=time1;
        time1--;
        if (time1 < 0) {
            clearInterval(timer);
          roundActive=false
          document.getElementById('attempt').style.visibility='hidden'
document.getElementById('guess').style.visibility='hidden'
          document.getElementById('Done').innerHTML='Congratulations! Your score was ' + score +'!'
  

}
                                    }
                          ,1000);}
}
function L1(){
  L()
  score=0
  time1=60
  count()
}
 function L(){
  roundActive=true
  x=Math.floor(44*Math.random())
y=Math.floor(44*Math.random())
  document.getElementById('root').innerHTML=definitions[x]
}
function guess(word){
  word=word.trim()
  word=word.toLowerCase();
  word2=word[0]
  word=word.slice(1)
  word=word2+word
  if (word==roots[x]){
    document.getElementById("message").innerHTML='Correct! The root was ' + roots[x] +'!';
  score+=1
  L()
  document.getElementById("attempt").value=' '
  }
}
var input = document.getElementById("attempt")
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
  guess(document.getElementById("attempt").value)
}
})
