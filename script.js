// ArtisanLink - App State & Logic

const artisansData = [
    {
        id: 1,
        name: "Chioma Okafor",
        skill: "Plumber",
        rating: 4.8,
        reviews: 147,
        location: "Lagos",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%2300d4ff' text-anchor='middle' dy='.3em'%3E🔧%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='20' fill='%23e0e0e0' text-anchor='middle'%3EPlumber%3C/text%3E%3C/svg%3E",
        price: 5000,
        description: "Expert plumber with 8 years experience. Specialized in pipe repairs, installation, and maintenance.",
        verified: true,
        jobs: 342,
        availability: "Available today"
    },
    {
        id: 2,
        name: "Ahmed Hassan",
        skill: "Electrician",
        rating: 4.9,
        reviews: 203,
        location: "Abuja",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%2300d4ff' text-anchor='middle' dy='.3em'%3E⚡%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='20' fill='%23e0e0e0' text-anchor='middle'%3EElectrician%3C/text%3E%3C/svg%3E",
        price: 6000,
        description: "Licensed electrician offering wiring, repairs, and maintenance services. Fast and reliable.",
        verified: true,
        jobs: 521,
        availability: "Available in 2 hours"
    },
    {
        id: 3,
        name: "Grace Mensah",
        skill: "Carpenter",
        rating: 4.7,
        reviews: 98,
        location: "Accra",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%2300d4ff' text-anchor='middle' dy='.3em'%3E🪵%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='20' fill='%23e0e0e0' text-anchor='middle'%3ECarpenter%3C/text%3E%3C/svg%3E",
        price: 7000,
        description: "Master carpenter specializing in furniture, doors, and custom woodwork.",
        verified: true,
        jobs: 156,
        availability: "Available tomorrow"
    },
    {
        id: 4,
        name: "Fatima Abdullahi",
        skill: "Tailor",
        rating: 4.6,
        reviews: 234,
        location: "Lagos",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%2300d4ff' text-anchor='middle' dy='.3em'%3E✂️%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='20' fill='%23e0e0e0' text-anchor='middle'%3ETailor%3C/text%3E%3C/svg%3E",
        price: 3000,
        description: "Professional tailor offering alterations, custom designs, and traditional outfits.",
        verified: true,
        jobs: 412,
        availability: "Available today"
    },
    {
        id: 5,
        name: "David Okonkwo",
        skill: "Mechanic",
        rating: 4.8,
        reviews: 189,
        location: "Lagos",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%2300d4ff' text-anchor='middle' dy='.3em'%3E🔩%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='20' fill='%23e0e0e0' text-anchor='middle'%3EMechanic%3C/text%3E%3C/svg%3E",
        price: 8000,
        description: "Expert auto mechanic with 10 years experience. Engine repair, maintenance, diagnostics.",
        verified: true,
        jobs: 287,
        availability: "Available in 1 hour"
    },
    {
        id: 6,
        name: "Amos Kiplagat",
        skill: "Electrician",
        rating: 4.5,
        reviews: 76,
        location: "Nairobi",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%2300d4ff' text-anchor='middle' dy='.3em'%3E⚡%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='20' fill='%23e0e0e0' text-anchor='middle'%3EElectrician%3C/text%3E%3C/svg%3E",
        price: 5500,
        description: "Professional electrician in Nairobi. Residential and commercial electrical services.",
        verified: true,
        jobs: 143,
        availability: "Available today"
    },
    {
        id: 7,
        name: "Zainab Mohammed",
        skill: "Painter",
        rating: 4.9,
        reviews: 112,
        location: "Abuja",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%2300d4ff' text-anchor='middle' dy='.3em'%3E🎨%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='20' fill='%23e0e0e0' text-anchor='middle'%3EPainter%3C/text%3E%3C/svg%3E",
        price: 4500,
        description: "Professional painter. Interior and exterior painting, texture work, color consultation.",
        verified: true,
        jobs: 267,
        availability: "Available this week"
    },
    {
        id: 8,
        name: "Kwame Boateng",
        skill: "Plumber",
        rating: 4.7,
        reviews: 134,
        location: "Accra",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230f3460' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%2300d4ff' text-anchor='middle' dy='.3em'%3E🔧%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='20' fill='%23e0e0e0' text-anchor='middle'%3EPlumber%3C/text%3E%3C/svg%3E",
        price: 5500,
        description: "Experienced plumber. Drainage, water supply, fixtures, emergency repairs.",
        verified: true,
        jobs: 198,
        availability: "Available today"
    }
];

const categories = [
    { id: 1, name: "Plumbing", icon: "fa-faucet", skill: "Plumber" },
    { id: 2, name: "Electrical", icon: "fa-bolt", skill: "Electrician" },
    { id: 3, name: "Carpentry", icon: "fa-hammer", skill: "Carpenter" },
    { id: 4, name: "Tailoring", icon: "fa-scissors", skill: "Tailor" },
    { id: 5, name: "Mechanics", icon: "fa-wrench", skill: "Mechanic" },
    { id: 6, name: "Painting", icon: "fa-paint-brush", skill: "Painter" }
];

let currentUser = null;
let currentArtisan = null;
let bookings = [];
let savedArtisans = [];

// Initialize app
window.addEventListener('DOMContentLoaded', () => {
    const isOnboarded = localStorage.getItem('artisanlink_user');
    if (isOnboarded) {
        currentUser = JSON.parse(isOnboarded);
        document.getElementById('onboarding').classList.add('hidden');
        loadDashboard();
    }
    renderCategories();
    renderArtisans(artisansData);
});

function startApp() {
    const name = document.getElementById('onboardingName').value;
    const phone = document.getElementById('onboardingPhone').value;
    const city = document.getElementById('onboardingCity').value;

    if (!name || !phone || !city) {
        alert('Please fill in all fields');
        return;
    }

    currentUser = { name, phone, city, id: Date.now() };
    localStorage.setItem('artisanlink_user', JSON.stringify(currentUser));
    document.getElementById('onboarding').classList.add('hidden');
    loadDashboard();
    goToScreen('home');
}

function goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = categories.map(cat => `
        <button class="category-btn" onclick="filterByCategory('${cat.skill}')">
            <i class="fas ${cat.icon}" style="font-size: 24px;"></i>
            ${cat.name}
        </button>
    `).join('');
}

function renderArtisans(data) {
    const grid = document.getElementById('artisansGrid');
    const topRated = document.getElementById('topRatedGrid');

    if (data.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        grid.innerHTML = '';
        return;
    }

    document.getElementById('noResults').style.display = 'none';

    const html = data.map(artisan => `
        <div class="artisan-card" onclick="viewProfile(${artisan.id})">
            <img src="${artisan.image}" alt="${artisan.name}">
            <div class="artisan-info">
                <div class="artisan-header">
                    <div>
                        <div class="artisan-name">${artisan.name}</div>
                        ${artisan.verified ? '<span style="color: var(--color-success); font-size: 12px;"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
                    </div>
                </div>
                <div class="artisan-skill">${artisan.skill}</div>
                <div class="artisan-location"><i class="fas fa-map-marker-alt"></i> ${artisan.location}</div>
                <div class="artisan-rating">
                    <span class="star"><i class="fas fa-star"></i></span>
                    <span>${artisan.rating}</span>
                    <span style="color: var(--color-text-muted); font-size: 12px;">(${artisan.reviews})</span>
                </div>
                <div class="artisan-price">From ₦${artisan.price.toLocaleString()}</div>
                <div class="artisan-actions">
                    <button class="btn btn-primary btn-sm" onclick="viewProfile(${artisan.id}); event.stopPropagation();">View</button>
                    <button class="btn btn-secondary btn-sm" onclick="saveArtisan(${artisan.id}); event.stopPropagation();"><i class="fas fa-bookmark"></i></button>
                </div>
            </div>
        </div>
    `).join('');

    grid.innerHTML = html;

    if (topRated) {
        const topArtisans = [...artisansData].sort((a, b) => b.rating - a.rating).slice(0, 4);
        topRated.innerHTML = topArtisans.map(artisan => `
            <div class="artisan-card" onclick="viewProfile(${artisan.id})">
                <img src="${artisan.image}" alt="${artisan.name}">
                <div class="artisan-info">
                    <div class="artisan-name">${artisan.name}</div>
                    <div class="artisan-skill">${artisan.skill}</div>
                    <div class="artisan-location"><i class="fas fa-map-marker-alt"></i> ${artisan.location}</div>
                    <div class="artisan-rating">
                        <span class="star"><i class="fas fa-star"></i></span>
                        <span>${artisan.rating}</span>
                    </div>
                    <div class="artisan-price">₦${artisan.price.toLocaleString()}</div>
                </div>
            </div>
        `).join('');
    }
}

function viewProfile(artisanId) {
    currentArtisan = artisansData.find(a => a.id === artisanId);
    if (!currentArtisan) return;

    const html = `
        <div class="profile-header">
            <img src="${currentArtisan.image}" alt="${currentArtisan.name}">
            <img src="${currentArtisan.image}" alt="" class="profile-avatar">
        </div>
        <div class="profile-info">
            <div class="profile-name">${currentArtisan.name}</div>
            <div class="profile-skill">${currentArtisan.skill}</div>
            <div style="margin: 12px 0; color: var(--color-text-muted);">
                <i class="fas fa-map-marker-alt"></i> ${currentArtisan.location} 
                ${currentArtisan.verified ? '· <span style="color: var(--color-success);"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
            </div>
            <div class="profile-stats">
                <div class="stat">
                    <div class="stat-value">${currentArtisan.rating}</div>
                    <div class="stat-label">Rating</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${currentArtisan.reviews}</div>
                    <div class="stat-label">Reviews</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${currentArtisan.jobs}</div>
                    <div class="stat-label">Jobs</div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="section">
                <div class="section-title"><i class="fas fa-info-circle"></i> About</div>
                <p>${currentArtisan.description}</p>
            </div>
            <div class="section">
                <div class="section-title"><i class="fas fa-briefcase"></i> Recent Reviews</div>
                <div class="review-item">
                    <div class="review-header">
                        <div class="review-author">Emeka C.</div>
                        <div class="review-date">2 days ago</div>
                    </div>
                    <div class="review-rating">
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                    </div>
                    <div class="review-text">Excellent work! Very professional and on time. Highly recommended.</div>
                </div>
                <div class="review-item">
                    <div class="review-header">
                        <div class="review-author">Amara T.</div>
                        <div class="review-date">1 week ago</div>
                    </div>
                    <div class="review-rating">
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                        <i class="fas fa-star" style="color: var(--color-warning);"></i>
                    </div>
                    <div class="review-text">Great service. Will use again.</div>
                </div>
            </div>
            <div class="section">
                <div style="display: flex; gap: 12px; margin-bottom: 16px;">
                    <button class="btn btn-primary" onclick="startBooking()" style="flex: 1;">
                        <i class="fas fa-calendar"></i> Hire Now
                    </button>
                    <button class="btn btn-secondary" onclick="toggleChat()" style="flex: 1;">
                        <i class="fas fa-comments"></i> Chat
                    </button>
                </div>
                <button class="btn btn-secondary" onclick="goToScreen('browse')" style="width: 100%;">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
            </div>
        </div>
    `;

    document.getElementById('profileContent').innerHTML = html;
    goToScreen('profile');
}

function startBooking() {
    goToScreen('booking');
}

function completeBooking() {
    const booking = {
        id: Date.now(),
        artisan: currentArtisan,
        date: new Date(),
        status: 'confirmed',
        amount: currentArtisan.price
    };
    bookings.push(booking);
    localStorage.setItem('artisanlink_bookings', JSON.stringify(bookings));

    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('paymentEscrow').style.display = 'block';
    showToast('Booking confirmed! Payment secured in escrow.');
}

function filterArtisans() {
    const searchTerm = document.querySelector('#browseSearch').value.toLowerCase();
    const selectedSkills = Array.from(document.querySelectorAll('.filter-group:nth-child(1) input:checked')).map(el => el.value);
    const selectedLocations = Array.from(document.querySelectorAll('.filter-group:nth-child(2) input:checked')).map(el => el.value);

    let filtered = artisansData.filter(a => {
        const matchSearch = a.name.toLowerCase().includes(searchTerm) || a.skill.toLowerCase().includes(searchTerm);
        const matchSkill = selectedSkills.length === 0 || selectedSkills.includes(a.skill);
        const matchLocation = selectedLocations.length === 0 || selectedLocations.includes(a.location);
        return matchSearch && matchSkill && matchLocation;
    });

    renderArtisans(filtered);
}

function filterByCategory(skill) {
    goToScreen('browse');
    setTimeout(() => {
        const checkboxes = document.querySelectorAll('.filter-group:nth-child(1) input');
        checkboxes.forEach(cb => {
            cb.checked = cb.value === skill;
        });
        filterArtisans();
    }, 100);
}

function filterHomeArtisans() {
    const search = document.getElementById('homeSearch')?.value.toLowerCase() || '';
    const filtered = artisansData.filter(a => 
        a.name.toLowerCase().includes(search) || a.skill.toLowerCase().includes(search)
    );
    const grid = document.getElementById('topRatedGrid');
    grid.innerHTML = filtered.slice(0, 4).map(a => `
        <div class="artisan-card" onclick="viewProfile(${a.id})">
            <img src="${a.image}" alt="${a.name}">
            <div class="artisan-info">
                <div class="artisan-name">${a.name}</div>
                <div class="artisan-skill">${a.skill}</div>
                <div class="artisan-location"><i class="fas fa-map-marker-alt"></i> ${a.location}</div>
                <div class="artisan-price">₦${a.price.toLocaleString()}</div>
            </div>
        </div>
    `).join('');
}

function resetFilters() {
    document.querySelectorAll('.filter-option input').forEach(cb => cb.checked = false);
    document.getElementById('browseSearch').value = '';
    renderArtisans(artisansData);
}

function saveArtisan(artisanId) {
    const artisan = artisansData.find(a => a.id === artisanId);
    if (!savedArtisans.find(a => a.id === artisanId)) {
        savedArtisans.push(artisan);
        localStorage.setItem('artisanlink_saved', JSON.stringify(savedArtisans));
        showToast('Artisan saved!');
    } else {
        savedArtisans = savedArtisans.filter(a => a.id !== artisanId);
        localStorage.setItem('artisanlink_saved', JSON.stringify(savedArtisans));
        showToast('Artisan removed');
    }
}

function switchDashboardTab(index) {
    document.querySelectorAll('.dashboard-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
    document.querySelectorAll('.tab-content').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });

    if (index === 0) loadActiveBookings();
    if (index === 1) loadPastJobs();
    if (index === 2) loadSavedArtisans();
    if (index === 3) loadPaymentHistory();
}

function loadDashboard() {
    bookings = JSON.parse(localStorage.getItem('artisanlink_bookings')) || [];
    savedArtisans = JSON.parse(localStorage.getItem('artisanlink_saved')) || [];
    loadActiveBookings();
}

function loadActiveBookings() {
    const container = document.getElementById('activeBookings');
    const active = bookings.filter(b => b.status === 'confirmed');

    if (active.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon"><i class="fas fa-inbox"></i></div><h3 class="empty-state-title">No active bookings</h3><button class="btn btn-primary" onclick="goToScreen(\'browse\')">Browse Artisans</button></div>';
        return;
    }

    container.innerHTML = active.map(b => `
        <div class="booking-card">
            <img src="${b.artisan.image}" alt="">
            <div class="booking-card-details">
                <div class="booking-card-name">${b.artisan.name}</div>
                <div class="booking-card-service">${b.artisan.skill}</div>
                <div class="booking-card-date">${new Date(b.date).toLocaleDateString()}</div>
            </div>
            <div class="booking-status pending"><i class="fas fa-clock"></i> In Progress</div>
        </div>
    `).join('');
}

function loadPastJobs() {
    document.getElementById('pastJobs').innerHTML = '<div class="empty-state"><div class="empty-state-icon"><i class="fas fa-history"></i></div><h3 class="empty-state-title">No past jobs yet</h3></div>';
}

function loadSavedArtisans() {
    const container = document.getElementById('savedArtisans');
    if (savedArtisans.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon"><i class="fas fa-bookmark"></i></div><h3 class="empty-state-title">No saved artisans</h3></div>';
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'grid-2';
    grid.innerHTML = savedArtisans.map(a => `
        <div class="artisan-card" onclick="viewProfile(${a.id})">
            <img src="${a.image}" alt="${a.name}">
            <div class="artisan-info">
                <div class="artisan-name">${a.name}</div>
                <div class="artisan-skill">${a.skill}</div>
                <div class="artisan-price">₦${a.price.toLocaleString()}</div>
            </div>
        </div>
    `).join('');
    container.innerHTML = grid.innerHTML;
}

function loadPaymentHistory() {
    document.getElementById('paymentHistory').innerHTML = `
        <div class="section">
            <div class="section-title"><i class="fas fa-wallet"></i> Wallet Balance</div>
            <div style="text-align: center; padding: 24px; background: rgba(0, 212, 255, 0.1); border-radius: 12px; border: 1px solid rgba(0, 212, 255, 0.2);">
                <div style="font-size: 14px; color: var(--color-text-muted); margin-bottom: 8px;">Available Balance</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--color-accent);">₦0.00</div>
            </div>
        </div>
    `;
}

function toggleChat() {
    const modal = document.getElementById('chatModal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active') && currentArtisan) {
        document.getElementById('chatMessages').innerHTML = `
            <div style="text-align: center; color: var(--color-text-muted); padding: 20px;">
                <i class="fas fa-comments" style="font-size: 32px; opacity: 0.5; display: block; margin-bottom: 12px;"></i>
                Start a conversation with ${currentArtisan.name}
            </div>
        `;
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.background = 'var(--color-secondary)';
    toast.style.border = '1px solid var(--color-accent)';
    toast.style.color = 'var(--color-text)';
    toast.style.padding = '16px 20px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '14px';
    toast.style.zIndex = '3000';
    toast.style.animation = 'slideInRight 0.3s ease-out';
    toast.style.boxShadow = '0 4px 12px rgba(0, 212, 255, 0.2)';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function toggleVoiceSearch() {
    const btn = event.target.closest('.voice-search-btn');
    btn.classList.toggle('listening');
    showToast('Voice search coming soon!');
    setTimeout(() => btn.classList.remove('listening'), 2000);
}