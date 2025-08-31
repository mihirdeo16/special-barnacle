// Load configuration and populate the email signature template
console.log('JavaScript file loaded!');

function loadSignatureConfig() {
    console.log('loadSignatureConfig function called');

    // Try to load config.json
    fetch('config.json')
        .then(response => {
            console.log('Response received:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(config => {
            console.log('Config loaded:', config);

            // Update all matching elements for personal information
            document.querySelectorAll('.name').forEach(el => {
                el.textContent = config.name;
            });
            document.querySelectorAll('.title').forEach(el => {
                el.textContent = config.title;
            });

            // Update all matching elements for contact information
            document.querySelectorAll('.phone-text').forEach(el => {
                el.textContent = config.phone;
            });

            document.querySelectorAll('.linkedin-link').forEach(el => {
                el.href = config.linkedin;
                el.textContent = config.linkedin_user;
            });

            // Update the HTML code in the textarea
            updateHTMLCode(config);

            console.log('Configuration loaded successfully!');
        })
        .catch(error => {
            console.error('Error loading configuration:', error);

            // Fallback to default values
            console.log('Using fallback values...');
            document.querySelectorAll('.name').forEach(el => {
                el.textContent = 'John Doe';
            });
            document.querySelectorAll('.title').forEach(el => {
                el.textContent = 'Software Developer';
            });
            document.querySelectorAll('.phone-text').forEach(el => {
                el.textContent = '+1 (555) 123-4567';
            });
            document.querySelectorAll('.linkedin-link').forEach(el => {
                el.href = 'https://linkedin.com/in/johndoe';
                el.textContent = 'LinkedIn';
            });

            // Update HTML code with fallback values
            const fallbackConfig = {
                name: 'John Doe',
                title: 'Software Developer',
                phone: '+1 (555) 123-4567',
                linkedin: 'https://linkedin.com/in/johndoe'
            };
            updateHTMLCode(fallbackConfig);
        });
}

function updateHTMLCode(config) {
    console.log('Updating HTML code with config:', config);

    const htmlCode = `<div style="font-family: Arial, sans-serif; text-align: left; border: 2px solid #007bff; border-radius: 10px; padding: 25px; background: white; max-width: 300px;">
    <img src="images/image.png" alt="Your Photo" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #007bff; margin: 0 0 15px 0; display: block; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
    
    <div style="font-size: 12px; font-weight: bold; color: #333; margin-bottom: 6px;">${config.name}</div>
    <div style="font-size: 10px; color: #666; margin-bottom: 15px; font-style: italic;">${config.title}</div>
    
    <div style="color: #333; padding: 0; margin-top: 15px;">
        <h3 style="margin: 0 0 8px 0; font-size: 12px; text-align: left; color: #007bff; font-weight: bold;">Contact Me</h3>
        <div style="border-top: 1px solid #007bff; margin: 8px 0 10px 0; width: 100%;"></div>
        
        <div style="margin-bottom: 8px; font-size: 8px; display: flex; align-items: center; justify-content: flex-start; gap: 8px;">
            <span style="font-size: 8px;">📞</span>
            <span>${config.phone}</span>
        </div>
        
        <div style="margin-bottom: 8px; font-size: 8px; display: flex; align-items: center; justify-content: flex-start; gap: 8px;">
            <span style="background-color: #0077b5; color: white; padding: 2px 4px; border-radius: 2px; font-weight: bold; font-size: 6px; font-family: Arial, sans-serif;">in</span>
            <a href="${config.linkedin}" style="color: #007bff; text-decoration: none; font-weight: 500;">LinkedIn</a>
        </div>
    </div>
</div>`;

    const textarea = document.getElementById('htmlCode');
    if (textarea) {
        textarea.value = htmlCode;
        console.log('HTML code updated in textarea');
    } else {
        console.error('Textarea not found!');
    }
}

// Load configuration when the page loads
console.log('Adding DOMContentLoaded event listener...');
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, calling loadSignatureConfig...');
    loadSignatureConfig();
});

// Also try to load immediately if DOM is already loaded
if (document.readyState === 'loading') {
    console.log('DOM still loading, waiting for DOMContentLoaded...');
} else {
    console.log('DOM already loaded, calling loadSignatureConfig immediately...');
    loadSignatureConfig();
}
