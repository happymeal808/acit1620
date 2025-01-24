document.addEventListener('DOMContentLoaded', () =>{

    // button
    const navToggle = document.getElementById('nav-toggle');
    // menu
    const navMenu = document.getElementById('nav-menu');
    // menu item
    const navLinks = Array.from(document.getElementsByClassName('nav-item'));

//  toggle menu button function
    navToggle.addEventListener('click', () =>{
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navMenu.classList.toggle('hidden');
        navToggle.setAttribute('aria-expanded', !isExpanded);
    })

//  close nav on nav link click
    navLinks.forEach((link) =>{
        link.addEventListener('click', ()=>{
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                navMenu.classList.add('hidden');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        })
    }) 
})
