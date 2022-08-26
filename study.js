var roots,definitions,x,y,word, word2
roots=['epi','hyper','hypo','in','re','trans','un','con','in','chromo','dem','derm','feder','gen','meso','mono','pachy','pan','poly','scop','al','ant','ia','ic','ium','less','ly','ness','oid']
definitions=['on, outside','over, above','under, below','not','back, again','across, through, over','not','with, together','not','color','people','skin','faith, trust','birth, produce, rate','middle','one','thick','all','many','look, view','like, related to','one who, that which','condition','like, related to','chemical element','without','like, manner of','state of','resembling']
function L(){
  x=0
  document.getElementById('root').innerHTML=roots[x]+':'
y=Math.floor(28*Math.random())
  document.getElementById('definition').innerHTML=definitions[x]
}
function next(){
  if (x<28){
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
