var roots,definitions,x,y,word, word2
roots=['epi','hyper','hypo','in','re','trans','un','con','in','chromo','dem','derm','feder','gen','meso','mono','pachy','pan','poly','scop','al','ant','ia','ic','ium','less','ly','ness','oid','asylum','atrophy','contrite','conviction','disinclination','disparage','inadvertently','inane','pessimism','petty','rescind','skeptic','squander','truculent','ubiquitous']
definitions=['on, outside','over, above','under, below','not','back, again','across, through, over','not','with, together','not','color','people','skin','faith, trust','birth, produce, rate','middle','one','thick','all','many','look, view','like, related to','one who, that which','condition','like, related to','chemical element','without','like, manner of','state of','resembling','a place offering protection; an instituion for the care of teh mentally ill; sanctuary.','to cause to wither or waste away.','humbled by guilt and repentant for ones sins.','a strong belief; the process of proving guilty','lack of willingness; reluctance.','to slight; belittle; criticize','unintentionally; accidentally.','lacking sense or substance','tendenc to take the gloomiest possible view of a situation.','trivial; narrow; spiteful.','to void; repeal.','one who instinctively doubts or habitually disagrees.','to spend wastefully.','savage and cruel; inclined to fight.','being everywhere, omnipresent.']
function L(){
  x=0
  document.getElementById('root').innerHTML=roots[x]+':'
y=Math.floor(28*Math.random())
  document.getElementById('definition').innerHTML=definitions[x]
}
function next(){
  if (x<43){
    x+=1
  }
  document.getElementById('root').innerHTML=roots[x]+':'
  document.getElementById('definition').innerHTML=definitions[x] 
}
function previous(){
  if (x>0){
    x-=1
  }
  document.getElementById('root').innerHTML=roots[x] +':'
  document.getElementById('definition').innerHTML=definitions[x] 
}
