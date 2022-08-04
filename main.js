let nav_btn = document.querySelector(".navTrigger");
let mobile_navbar = document.querySelector(".header-content nav");

nav_btn.addEventListener("click", ()=>{
    mobile_navbar.classList.toggle("show");
    nav_btn.classList.toggle("active");
})


//Accordion Implementation
let accordion_triggers = document.querySelectorAll(".accordion-question");

accordion_triggers.forEach((module)=>{
      module.addEventListener("click", ()=>{
          let current = document.querySelector(".accordion-question.active")
          if(current && current !== module){
              current.classList.toggle("active")
              current.nextElementSibling.style.maxHeight = 0
          }
          module.classList.toggle("active")
          
          let module_details = module.nextElementSibling
  
          if(module.classList.contains("active")){
              module_details.style.maxHeight = module_details.scrollHeight + 'px'
          }else{
              module_details.style.maxHeight = 0;
          }
      })
  })

  //switch my account tabs
  let switch_btns = document.querySelectorAll(".account-links ul li");
  let switch_conts = document.querySelectorAll(".container-tab");

  const showActive = (index)=>{
    switch_btns.forEach((btn)=>{
        btn.classList.remove("active");
    })
    switch_btns[index].classList.add('active');

    switch_conts.forEach((container)=>{
        container.style.display = "none";
    })
    switch_conts[index].style.display = 'flex';
}

showActive(0)

for(let i = 0; i < switch_btns.length; i++){
    switch_btns[i].addEventListener("click", ()=>{
          showActive(i);
    })
}

  // Place Order Calculation and Implementaton
   
   /* Calculation ya order form */
   let order_form = document.forms['orderform'];

  let fanyaCalculation = ()=>{
       let computed_estimate, page_count, paper_value, duration;

       let num_of_pages = order_form.elements['num-pages'];
       let paper_type = order_form.elements['paper-type'];
       let duration_chosen = order_form.elements['duration'];
       let result = order_form.elements['result'];

       if(num_of_pages.value != ""){
           page_count = parseInt(num_of_pages.value);
       }
 
       paper_value = paper_type.value;
       duration = duration_chosen.value;

       computed_estimate = page_count * paper_value * duration;

       result.value = "$ "+computed_estimate;
  }



  /* modal implementation */
  let fire_the_modal = (btns, modal_container, close_btn) => {
    btns.forEach( btn => {
        btn.addEventListener("click", ()=>{
              modal_container.style.display = "flex";
        });
    });
    close_btn.addEventListener("click", ()=>{
        modal_container.style.display = "none";
    });
  }
  
  //Place order modal
  let order_modal = document.querySelector("#order-modal");
  let order_triggers = document.querySelectorAll(".order-btn");
  let order_close_btn = document.querySelector(".order-close-btn");

  fire_the_modal(order_triggers, order_modal, order_close_btn);

  //Login modal 
  let login_modal = document.querySelector("#login-modal");
  let login_trigger = document.querySelectorAll(".login-btn");
  let login_close_btn = document.querySelector(".login-close-btn");

  fire_the_modal(login_trigger, login_modal, login_close_btn);

  //Sign up modal 
  let signup_modal = document.querySelector("#signup-modal");
  let signup_trigger = document.querySelectorAll(".signup-btn");
  let signup_close_btn = document.querySelector(".signup-close-btn");

  fire_the_modal(signup_trigger, signup_modal, signup_close_btn);

// Ticket modal
let ticket_modal = document.querySelector("#ticket-modal");
let ticket_trigger = document.querySelectorAll(".ticket-btn");
let ticket_close_btn = document.querySelector(".ticket-close-btn");

fire_the_modal(ticket_trigger, ticket_modal, ticket_close_btn);

// Manage Modal
let manage_modal = document.querySelector("#manage-modal");
let manage_triggers = document.querySelectorAll(".manage-btn");
let manage_close_btn = document.querySelector(".manage-close-btn");

fire_the_modal(manage_triggers, manage_modal, manage_close_btn);

//Section change on the navigation implementation
window.addEventListener("scroll",function(){
    let sections = ['home', 'about', 'order', 'faqs', 'contact-section'];

    let scrollBarLocation = window.scrollY;
    let list = document.querySelectorAll(".header-content nav ul li");
    
    let about= document.getElementById(sections[1]).offsetTop - 200;
    let order= document.getElementById(sections[2]).offsetTop - 200;
    let faqs = document.getElementById(sections[3]).offsetTop - 200;
    let contact = document.getElementById(sections[4]).offsetTop - 200;

    for(let i = 0; i < list.length; i++){
       if(scrollBarLocation < about){
           list[0].classList.add("active");
       }else{
           list[0].classList.remove("active");
       }
       if(scrollBarLocation > about && scrollBarLocation <= order){
           list[1].classList.add("active");
       }
       else{
           list[1].classList.remove("active");
       }
       if(scrollBarLocation > order && scrollBarLocation <= faqs){
           list[2].classList.add("active");
       }else{
           list[2].classList.remove("active");
       }
       if(scrollBarLocation > faqs && scrollBarLocation < contact){
           list[3].classList.add("active");
       }else{
           list[3].classList.remove("active");
       } 
       if(scrollBarLocation > contact){
           list[4].classList.add("active");
       }else{
           list[4].classList.remove("active");
       }
    }
    
   });

$(function(){
    $('a').on("click", function(e){
        if (this.hash !== ''){
           e.preventDefault();
          
          let hash = this.hash;
          
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
               window.location.hash = hash;
          });
        } 
  });
})