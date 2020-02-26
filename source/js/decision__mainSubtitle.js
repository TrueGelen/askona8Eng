window.addEventListener('load', ()=>{
  const from768 = 'The Askona brand and digital agency Nectarin offered their users<br> to find out once and for all who awakens in a woman whilst she is asleep!<br> Depending on the result based on an illustration and real-life situations, the user will be offered<br> a perfect gift from the brand that they will be able to present to their lady.'
  const to768 = 'The Askona brand and digital agency Nectarin offered their users<br> to find out once and for all who awakens in a woman whilst she is asleep!<br> Depending on the result based on an illustration and real-life situations, the user will be offered a perfect gift from the brand that they will be able to present to their lady.'
  const decision_subtitle = document.querySelector('.decision .container .mainSubtitle')

  function buildText(){
    if(window.innerWidth > 768){
      decision_subtitle.innerHTML = from768
    }else{
      decision_subtitle.innerHTML = to768
    }
  }

  buildText()

  window.addEventListener('resize', ()=>{
    buildText()
  })
})