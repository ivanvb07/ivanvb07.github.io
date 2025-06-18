// Animation des barres de compétences lorsqu'elles deviennent visibles
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, {threshold: 0.5});
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
    
    /*// Menu mobile (à implémenter)
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            // À compléter avec la logique pour afficher/masquer le menu mobile
            alert('Menu mobile à implémenter');
        });
    }*/
});