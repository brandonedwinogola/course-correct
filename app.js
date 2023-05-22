//$(document).ready(function(){
   // $(window).scroll(function(){
        // sticky navbar on scroll script
        //if(this.scrollY > 20){
          //  $('.navbar').addClass("sticky");
        //}else{
        //    $('.navbar').removeClass("sticky");
       // }
        
        // scroll-up button show/hide script
        //if(this.scrollY > 500){
        //    $('.scroll-up-btn').addClass("show");
       // }else{
            //$('.scroll-up-btn').removeClass("show");
      //  }
   // });

    // slide-up script
    //$('.scroll-up-btn').click(function(){
       /// $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
       // $('html').css("scrollBehavior", "auto");
   // });

  //  $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        //$('html').css("scrollBehavior", "smooth");
  //  });

    // toggle menu/navbar script
   // $('.menu-btn').click(function(){
        //$('.navbar .menu').toggleClass("active");
        //$('.menu-btn i').toggleClass("active");
   // });

    // typing text animation script
    //var typed = new Typed(".typing", {
       // strings: [" Unlocking the potential of every learner", "Through Holistic Online Education"],
        //typeSpeed: 100,
       // backSpeed: 60,
        //loop: true
   // });

   // var typed = new Typed(".typing-2", {
      //  strings: [" Learning Management System", "Providing Quality Education"],
        //typeSpeed: 100,
       // backSpeed: 60,
        //loop: true
    //});

    // owl carousel script
    //$('.carousel').owlCarousel({
       // margin: 20,
        //loop: true,
        ////autoplay: true,
        //autoplayTimeOut: 1000,
       // autoplayHoverPause: true,
        //responsive: {
          //  0:{
            //    items: 1,
              //  nav: false
            //},
            //300:{
               // items: 1,
                //nav: false
            //},
           // 500:{
                //items: 1,
               // nav: false
         //   }
       // }
  //  });
//});

//function handleSubmit(event) {
   
//}



//const year = document.querySelector('.year');
//year.innerHTML = new Date().getFullYear();




// Function to handle smooth scrolling for navigation links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Add click event listeners to navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = link.getAttribute('href');
      // Check if the target is an external URL or an anchor on the current page
      if (target.startsWith('http') || target.startsWith('#')) {
        window.location.href = target; // Redirect to the target page
      } else {
        smoothScroll(target); // Scroll to the target anchor on the current page
      }
    });
  });
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Perform validation and submit the form data
    if (name && email && message) {
      // Here, you can send the form data to a server using AJAX or perform any other desired action
      console.log('Form submitted successfully!');
      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  
  // Add form submit event listener
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
  
  // Optional: Add any additional JavaScript functionality you require
  // ...
  