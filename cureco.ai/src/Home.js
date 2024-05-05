

const homeStyle ={
    height: '100vh',
  }
  

function Home() {
  return (
    <div class="container" >
        <div class="row valign-wrapper" style={homeStyle}>
            <div class="col m6 l6 ">
                Left
            </div>

            <div class="col m6 l6 ">
                Right
            </div>
        </div>
    </div>
    
  );
}

export default Home;
