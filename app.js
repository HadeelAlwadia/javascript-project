let Header=document.querySelector('.header');
let Form=document.querySelector('.form');
let Footer=document.querySelector('.footer');
let prodects=document.querySelector('.prodects');
let moredetauls=document.querySelector('.btn-detils');
let blog=document.querySelector('.blog');

/*obiect contins in info about prodect*/
let infoprodect=[{id:"1",salary:3000,name:'plans',src:"images/tools1.jpg"},
{id:"1",salary:3000,name:'plans',src:"images/tools2.jpg"},{id:"1",salary:3000,name:'plans',src:"./images/tools3.jpg"} ]

/*to change function*/
function chang(){
    
}
 let prodactdraw=infoprodect.map(item=>{
     return(`
 <div class="  shadow p-3 mb-5 bg-white rounded prodect-item" >
 <img src=${item.src}    alt="Cinque Terre"/>
 <h3>${item.name}</h3>
 <p>${item.info}</p>
 <p>${item.salary}</p>
 <button  class="btn btn-details" onClick="chang">more details</button>
 </div>`)})

 prodects.innerHTML=prodactdraw;


let continheader=(`<nav class="navbar navbar-expand-lg navbar-light headercontins  ">
<a class="navbar-brand" href="#">Tools with us</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0 btnsarch" type="submit">Search</button>
  </form>
</div>
</nav>`);

/*this progress to put  contins  in header   in html */
Header.innerHTML=continheader;




let continform=(`
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputEmail4">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
  </div>
  <div class="form-group col-md-6">
    <label for="inputPassword4">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
  </div>
</div>
<div class="form-group">
  <label for="inputAddress">Address</label>
  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
</div>
<div class="form-group">
  <label for="inputAddress2">Address 2</label>
  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
</div>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputCity">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="form-group col-md-4">
    <label for="inputState">State</label>
    <select id="inputState" class="form-control">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="form-group col-md-2">
    <label for="inputZip">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
</div>
<div class="form-group">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck">
    <label class="form-check-label" for="gridCheck">
      Check me out
    </label>
  </div>
</div>
<button type="submit" class="btn btn-primary btn-submit">Sign in</button>
`);


Form.innerHTML=continform;

let Footercontains=(`<!-- Footer -->

  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->

    <!-- Section: Form -->
    <section class="">
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-5 col-12">
            <!-- Email input -->
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example2" class="form-control" />
              <label class="form-label" for="form5Example2">Email address</label>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-auto">
            <!-- Submit button -->
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    </section>
    <!-- Section: Form -->

    <!-- Section: Text -->
    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    <!-- Section: Text -->

    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">poliy rolus</h5>

          <ul class="list-unstyled mb-0">
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">call us</h5>

          <ul class="list-unstyled mb-0">
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
            <li>
            <a href="#!" class="text-white">contant me</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->

<!-- Footer -->`);



Footer.innerHTML=Footercontains;


const images=['images/tools3.jpg','images/tools4.jpg','images/tools6.jpg','images/tools1.jpg','images/tools2.jpg']
let blogcontains=(`<div class="media border p-3 blog-item">
<img src=${images[0]} alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
<div class="media-body">
  <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
  <p>Lorem ipsum...</p>
  <div class="media p-3">
    <img src=${images[1]} alt="Jane Doe" class="mr-3 mt-3 rounded-circle" style="width:45px;">
    <div class="media-body">
      <h4>Jane Doe <small><i>Posted on February 20 2016</i></small></h4>
      <p>Lorem ipsum...</p>
    </div>
  </div> 
</div>
</div>
<div class="media border p-3">
  <img src=${images[3]} alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
  <div class="media-body">
    <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
    <p>Lorem ipsum...</p>
    <div class="media p-3">
      <img src=${images[2]} alt="Jane Doe" class="mr-3 mt-3 rounded-circle" style="width:45px;">
      <div class="media-body">
        <h4>Jane Doe <small><i>Posted on February 20 2016</i></small></h4>
        <p>Lorem ipsum...</p>
      </div>
    </div> 
  </div>
</div><div class="media border p-3">
<img src=${images[2]} alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
<div class="media-body">
  <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
  <p>Lorem ipsum...</p>
  <div class="media p-3">
    <img src=${images[4]} alt="Jane Doe" class="mr-3 mt-3 rounded-circle" style="width:45px;">
    <div class="media-body">
      <h4>Jane Doe <small><i>Posted on February 20 2016</i></small></h4>
      <p>Lorem ipsum...</p>
    </div>
  </div> 
</div>
</div>

`);

blog.innerHTML=blogcontains;