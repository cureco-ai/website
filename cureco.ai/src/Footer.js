function Footer() {
    return (
      <footer class="page-footer blue darken-2">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">About us</h5>
              <a class="grey-text text-lighten-3" href="#!">Team</a><br/>
              <a class="grey-text text-lighten-3" href="mailto: contact@cureco.ai">Contact</a>
              {/* <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Linkedin</a></li>
                <li><a class="grey-text text-lighten-3" href="mailto: contact@cureco.ai">Partner with us</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div class="footer-copyright blue darken-2">
          <div class="container">
          © 2024 Copyright Aionix AI Labs PVT LTD
          {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
          </div>
        </div>
      </footer>   
    );
  }
  
  export default Footer;
  