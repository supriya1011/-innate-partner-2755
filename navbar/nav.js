function nav(){
    return `
    <div class="wrapper">
    <nav>
      <input type="checkbox" id="show-search">
      <input type="checkbox" id="show-menu">
      <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
      <div class="content">
      
        <ul class="links">
          <li><a href="#">MENSWEAR</a></li>
          <li><a href="#">WOMENSWEAR</a></li>
          <li><a href="#">EVERYTHING ELSE</a></li>  
        </ul>

      </div>
      <div class="logo"><a href="#">SSENSE</a></div>

      <div class="content">
        <ul class="links">
            <li>
                <a href="#" class="desktop-link">ENGLISH</a>
                <input type="checkbox" id="show-services">
                <label for="show-services">ENGLISH</label>
                <ul>
                  <li><a href="#">HINDI</a></li>
                  <li><a href="#">MARATHI</a></li>
                  <li><a href="#">TELEGU</a></li>
                  
                </ul>
              </li>
              <li><a href="#">LOGIN</a></li>
              <li><a href="#">WISHLIST</a></li>
              <li><a href="#">SHOPPING BAG (0)</a></li>
              <li><a href="#"><i class="fas fa-user">&nbsp Account</i></a></li>
              
        </ul>
      </div>
      <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
      <form action="#" class="search-box">
        <input type="text" placeholder="Type Something to Search..." required>
        <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
      </form>
    </nav>
  </div>`;
}
export default nav();