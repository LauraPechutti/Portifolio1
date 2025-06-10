document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Animação das skills quando aparecem na tela
    const skills = document.querySelectorAll('.skill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });
    
    skills.forEach(skill => {
        skill.style.opacity = 0;
        skill.style.transform = 'translateX(-20px)';
        skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(skill);
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Aqui você pode adicionar o código para enviar o formulário
            console.log('Formulário enviado:', { nome, email, mensagem });
            
            // Feedback para o usuário
            alert('Obrigada pela mensagem! Entrarei em contato em breve.');
            contactForm.reset();
        });
    }
    
    // Carrega os projetos dinamicamente
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        const projects = [
            {
                title: "KittyFlix",
                description: "Uma plataforma desenvolvido com HTML5 Canvas e JavaScript puro.",
                tags: ["JavaScript", "HTML5"],
                links: [
                   
                    { url: "https://julianaquei.github.io/kittyflix/", text: "Entre" }
                ]
            },
            {
                title: "Site de estudos",
                description: "Plataforma para estudos, usando flashcards.",
                tags: ["JavaScript", "HTML5"],
                links: [
                   
                    { url: "https://julianaquei.github.io/aluraFlashcards/", text: "Entre" }
                    
                ]
            },
            {
                title: "Criando a aventura",
                description: "Aplicativo para você criar a própria avrntura.",
                tags: ["JavaScript", "HTML5"],
                links: [
                    
                    { url: "https://julianaquei.github.io/criando_aventura/", text: "Entre" }
                ]
            }
        ];
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const tagsHTML = project.tags.map(tag => 
                `<span class="project-tag">${tag}</span>`
            ).join('');
            
            const linksHTML = project.links.map(link => 
                `<a href="${link.url}">${link.text}</a>`
            ).join('');
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <i class="fas fa-gamepad"></i>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">${tagsHTML}</div>
                    <div class="project-links">${linksHTML}</div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }
    
    // Efeito de digitação no cabeçalho (opcional)
    const subtitle = document.querySelector('header h2');
    if (subtitle) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }
});