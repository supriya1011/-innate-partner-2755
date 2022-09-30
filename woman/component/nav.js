function nav(){
    return `
    <div class="wrapper">
    <nav>
      <input type="checkbox" id="show-search">
      <input type="checkbox" id="show-menu">
      <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
      <div class="content">
      
        <ul class="links">
          <li><a href="../menswear/index.html">MENSWEAR</a></li>
          <li><a href="../woman/index.html">WOMENSWEAR</a></li>
          <li><a href="../everthing _else/page.html">EVERYTHING ELSE</a></li>  
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
              <li><a href="../login/login.html">LOGIN</a></li>
              <li><a href="../wishlist/wishlist.html">WISHLIST</a></li>
              <li><a href="../shoppingbag/shoppingbag.html">SHOPPING BAG (0)</a></li>
              <li><a href="#"><i class="fas fa-user">&nbsp Account</i></a></li>
              
        </ul>
      </div>
      <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
      <form action="#" class="search-box">
        <input type="text" id="debounce" placeholder="Type Something to Search..." required>
        <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
      </form>
    </nav>
  </div>`;
}
export default nav();