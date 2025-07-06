 // DOM Elements
        const aboutBtn = document.getElementById('aboutBtn');
        const servicesBtn = document.getElementById('servicesBtn');
        const contactBtn = document.getElementById('contactBtn');
        const aboutSection = document.getElementById('aboutSection');
        const servicesSection = document.getElementById('servicesSection');
        const contactSection = document.getElementById('contactSection');
        const buttons = document.querySelectorAll('.btn');
        const contactForm = document.getElementById('contactForm');
        
        // Button click handlers
        aboutBtn.addEventListener('click', function() {
            showSection(aboutSection);
            setActiveButton(aboutBtn);
        });
        
        servicesBtn.addEventListener('click', function() {
            showSection(servicesSection);
            setActiveButton(servicesBtn);
        });
        
        contactBtn.addEventListener('click', function() {
            showSection(contactSection);
            setActiveButton(contactBtn);
        });
        
        // Form submission handler
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
        
        // Helper functions
        function showSection(section) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(sec => {
                sec.classList.remove('active');
            });
            
            // Show selected section
            section.classList.add('active');
        }
        
        function setActiveButton(button) {
            // Remove active class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
        }
        
        // Button hover effects
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            button.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = 'translateY(0)';
                }
            });
        });