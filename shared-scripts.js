// Scripts Compartilhados - Rede Cesária

document.addEventListener('DOMContentLoaded', () => {
    // Criar elementos flutuantes animados
    createFloatingElements();
    
    // Animação de Scroll
    initScrollAnimations();
    
    // Navegação Ativa
    initActiveNavigation();
    
    // Scroll Suave
    initSmoothScroll();
});

function createFloatingElements() {
    const body = document.body;
    
    // Criar 4 elementos flutuantes
    for (let i = 1; i <= 4; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.cssText = `
            position: fixed;
            border-radius: 50%;
            opacity: 0.1;
            z-index: -1;
            animation: float 20s infinite linear;
        `;
        
        // Configurações específicas para cada elemento
        switch(i) {
            case 1:
                element.style.cssText += `
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(45deg, #FBBF24, #EF4444);
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                `;
                break;
            case 2:
                element.style.cssText += `
                    width: 120px;
                    height: 120px;
                    background: linear-gradient(45deg, #38BDF8, #EC4899);
                    top: 60%;
                    right: 15%;
                    animation-delay: -5s;
                `;
                break;
            case 3:
                element.style.cssText += `
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, #10B981, #FBBF24);
                    bottom: 30%;
                    left: 20%;
                    animation-delay: -10s;
                `;
                break;
            case 4:
                element.style.cssText += `
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(45deg, #8B5CF6, #EF4444);
                    top: 40%;
                    right: 30%;
                    animation-delay: -15s;
                `;
                break;
        }
        
        body.appendChild(element);
    }
}

function initScrollAnimations() {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });
}

function initActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    if (sections.length > 0) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href && href.startsWith('#')) {
                            link.classList.toggle('active', href.substring(1) === entry.target.id);
                        }
                    });
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px" });

        sections.forEach(section => { 
            navObserver.observe(section); 
        });
    }
}

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Função para adicionar navegação a uma página
function addNavigation(currentPage = '') {
    const nav = document.createElement('nav');
    nav.className = 'main-nav';
    nav.style.display = 'flex';
    
    const navItems = [
        { href: '..', text: 'Início', id: 'inicio' },
        { href: '../guia', text: 'Guia', id: 'guia' },
        { href: '../apps', text: 'Apps', id: 'apps' },
        { href: '../radios', text: 'Rádios', id: 'radios' },
        { href: '../map', text: 'Mapa', id: 'mapa' }
    ];
    
    navItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.className = 'nav-link';
        link.textContent = item.text;
        
        if (currentPage === item.id) {
            link.classList.add('active');
        }
        
        nav.appendChild(link);
    });
    
    document.body.insertBefore(nav, document.body.firstChild);
}

// Função para criar breadcrumb
function createBreadcrumb(items) {
    const breadcrumb = document.createElement('div');
    breadcrumb.className = 'breadcrumb';
    breadcrumb.style.cssText = `
        position: fixed;
        top: 6rem;
        left: 2rem;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 0.5rem 1rem;
        border-radius: 6px;
        border: 1px solid #2d2d2d;
        font-size: 0.9rem;
    `;
    
    items.forEach((item, index) => {
        if (index > 0) {
            const separator = document.createElement('span');
            separator.textContent = ' > ';
            separator.style.color = '#666';
            breadcrumb.appendChild(separator);
        }
        
        if (item.href) {
            const link = document.createElement('a');
            link.href = item.href;
            link.textContent = item.text;
            link.style.cssText = 'color: #2d2d2d; text-decoration: none;';
            breadcrumb.appendChild(link);
        } else {
            const span = document.createElement('span');
            span.textContent = item.text;
            span.style.fontWeight = 'bold';
            breadcrumb.appendChild(span);
        }
    });
    
    document.body.appendChild(breadcrumb);
}

