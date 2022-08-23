var roots,definitions,x,y,word, word2
roots=['epi','hyper','hypo','in','re','trans','un','con','in','chromo','dem','derm','feder','gen','meso','mono','pachy','pan','poly','scop','al','ant','ia','ic','ium','less','ly','ness','oid']
definitions=['on, outside','over, above','under, below','not','back, again','across, through, over','not','with, together','not','color','people','skin','faith, trust','birth, produce, rate','middle','one','thick','all','many','look, view','like, related to','one who, that which','condition','like, related to','chemical element','without','like, manner of','state of','resembling']
x=Math.floor(28*Math.random())
y=Math.floor(28*Math.random())
function L(){
  x=Math.floor(28*Math.random())
y=Math.floor(28*Math.random())
  document.getElementById('root').innerHTML=definitions[x]
}
function guess(word){
  word=word.toLowerCase();
  word2=word[0]
  word=word.slice(1)
  word=word2+word
  if (word==roots[x]){
    document.getElementById("message").innerHTML='Correct! The Root Was ' + roots[x] +'!';
  L()
  }

}