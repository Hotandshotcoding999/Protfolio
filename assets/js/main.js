/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon, .tabs',{ interval: 200}); 
sr.reveal('.skills__data, .work-text, .work-role, .work-image, .work__img, .services, .services-container .contact__input',{interval: 200}); 

/*==================== QUALIFICATION TABS ====================*/
  const buttons = document.querySelectorAll(".tab-btn");
  const timelines = document.querySelectorAll(".timeline");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      timelines.forEach(t => t.classList.remove("active"));
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
/*==================== SERVICES TABS ====================*/
  // Open modal
  document.querySelectorAll('.services-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      document.getElementById(modalId).classList.add('active');
    });
  });

  // Close modal
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modalId = closeBtn.getAttribute('data-close');
      document.getElementById(modalId).classList.remove('active');
    });
  });

  // Optional: Close modal when clicking outside modal-box
  document.querySelectorAll('.services-modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Optional: Close modal on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.services-modal.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });
