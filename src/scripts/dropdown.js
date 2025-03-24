document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
        
        document.querySelectorAll('.sub-menu').forEach((submenu) => {
            if (submenu !== dropdown.nextElementSibling) {
                submenu.classList.remove('show');
            }
        });

        document.querySelectorAll('.icon').forEach((icon) => {
            if (icon !== dropdown.querySelector('.icon')) {
                icon.classList.remove('rotate');
            }
        });

        const icon = dropdown.querySelector('.icon');
        const submenu = dropdown.nextElementSibling;
        
        icon?.classList.toggle('rotate');
        submenu?.classList.toggle('show');
    });
});
