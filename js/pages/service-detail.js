// Get service type from URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceType = urlParams.get('type') || 'software';
    
    // Load service data
    loadServiceData(serviceType);
});

function loadServiceData(serviceType) {
    const service = serviceData[serviceType];
    if (!service) return;

    // Update hero section
    document.querySelector('.service-hero h1').textContent = service.title;
    document.querySelector('.service-hero .lead').textContent = service.subtitle;
    document.querySelector('.service-hero img').src = service.image;

    // Update overview section
    document.querySelector('.service-overview .lead').textContent = service.description;

    // Update features
    const featuresContainer = document.querySelector('.features-row');
    featuresContainer.innerHTML = service.features.map(feature => `
        <div class="col-md-6">
            <div class="feature-card p-4 bg-light rounded">
                <i class="bi ${feature.icon} text-primary h2 mb-3"></i>
                <h4>${feature.title}</h4>
                <ul class="list-unstyled">
                    ${feature.items.map(item => `
                        <li><i class="bi bi-check-circle-fill text-success me-2"></i>${item}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Update stats
    const statsContainer = document.querySelector('.stats-container');
    statsContainer.innerHTML = service.stats.map(stat => `
        <div class="mb-4">
            <div class="d-flex align-items-center mb-2">
                <i class="bi ${stat.icon} text-primary h3 mb-0 me-3"></i>
                <div>
                    <h4 class="mb-0">${stat.number}</h4>
                    <p class="text-muted mb-0">${stat.label}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Update page title
    document.title = `${service.title} - VTI Việt Nam`;
}