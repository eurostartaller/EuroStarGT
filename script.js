document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para el botón de servicios
    const serviciosBtn = document.getElementById('serviciosBtn');
    const serviciosContent = document.getElementById('serviciosContent');
    const serviciosBtnIcon = serviciosBtn.querySelector('span:last-child');

    serviciosBtn.addEventListener('click', function() {
        serviciosContent.classList.toggle('hidden');
        serviciosBtnIcon.style.transform = serviciosContent.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    });

    // Funcionalidad para el menú móvil
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar el menú móvil al hacer clic en un enlace
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    emailjs.init("UOvdq5YehBubpOE4K");
    
    // Funcionalidad para el formulario de cita
    const citaForm = document.getElementById('citaForm');
    citaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Envía el formulario con EmailJS
        emailjs.sendForm('service_75r5jwj', 'template_ugaum3k', this)
        .then(function(response) {
            alert('Correo enviado correctamente');
            console.log('Success:', response.status, response.text);
        }, function(error) {
            alert('Hubo un problema al enviar el correo');
            console.error('Error:', error);
        });
        alert('Gracias por agendar una cita. Te contactaremos pronto.');
        // citaForm.reset();
    });

    // Datos de las marcas de vehículos
    const vehicleBrands = {
        american: [
            { name: "Ford", models: ["Mustang", "F-150", "Explorer", "Escape"] },
            { name: "Chevrolet", models: ["Camaro", "Silverado", "Tahoe", "Equinox"] },
            { name: "Dodge", models: ["Challenger", "Charger", "Durango", "Ram"] },
        ],
        european: [
            { name: "Mercedes-Benz", models: ["Clase A", "Clase C", "Clase E", "GLC"] },
            { name: "BMW", models: ["Serie 3", "Serie 5", "X3", "X5"] },
            { name: "Audi", models: ["A3", "A4", "Q5", "Q7"] },
        ]
    };

    // Función para crear el acordeón de marcas
    function createBrandAccordion(brands, containerId) {
        const container = document.getElementById(containerId);
        brands.forEach(brand => {
            const brandDiv = document.createElement('div');
            brandDiv.className = 'mb-2';
            brandDiv.innerHTML = `
                <button class="w-full text-left bg-gray-800 p-2 rounded text-white flex justify-between items-center">
                    ${brand.name}
                    <span class="transform transition-transform duration-200">▼</span>
                </button>
                <div class="hidden mt-2 pl-4">
                    <ul class="list-disc pl-4 text-gray-300">
                        ${brand.models.map(model => `<li>${model}</li>`).join('')}
                    </ul>
                </div>
            `;
            container.appendChild(brandDiv);

            const button = brandDiv.querySelector('button');
            const content = brandDiv.querySelector('div');
            const icon = button.querySelector('span');

            button.addEventListener('click', () => {
                content.classList.toggle('hidden');
                icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            });
        });
    }

    // Crear acordeones de marcas
    createBrandAccordion(vehicleBrands.american, 'americanBrands');
    createBrandAccordion(vehicleBrands.european, 'europeanBrands');
});
