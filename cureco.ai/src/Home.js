

const homeStyle ={
    height: '100vh',
  }
  
  
function Home() {
  return (
    <div class="cyan lighten-4">
    <div class="container" >
        <div class="valign-wrapper" style={homeStyle}>

          <div class="row" >
              <div class="col m6 l6 s8 offset-s2 offset-l3 offset-m3">
                <img style={{width: '100%'}}  src="images/Cureco_ai_no_border.png" alt="Cureco.ai Logo"/>
                <h5 class=" center-align blue-grey-text text-darken-4">
                    Actionable intelligence for Medical professionals
                </h5>
                <br/>
                <h5 class=" center-align blue-grey-text text-darken-2">
                  (coming soon)
                </h5>
              </div>
          </div>
        </div>
    </div>
    </div>
    
  );
}

export default Home;
