// Global Visa Guide - Main JavaScript File
// CHANGE: Updated country card navigation to link to new country-details.html page
// Instead of showing alerts, users are now directed to dedicated country pages with blog content

// Country Data
const countries = [
    { name: 'United States', region: 'Americas', visas: ['Tourist (B1/B2)', 'Work (H1-B)', 'Student (F-1)'], emoji: '🇺🇸' },
    { name: 'Canada', region: 'Americas', visas: ['Express Entry', 'Student', 'Visitor'], emoji: '🇨🇦' },
    { name: 'United Kingdom', region: 'Europe', visas: ['Skilled Worker', 'Student', 'Visitor'], emoji: '🇬🇧' },
    { name: 'Germany', region: 'Europe', visas: ['EU Blue Card', 'Student', 'Residence'], emoji: '🇩🇪' },
    { name: 'France', region: 'Europe', visas: ['Talent Passport', 'Student', 'Visitor'], emoji: '🇫🇷' },
    { name: 'Japan', region: 'Asia', visas: ['Work', 'Student', 'Trainee', 'Tourist'], emoji: '🇯🇵' },
    { name: 'Singapore', region: 'Asia', visas: ['Employment Pass', 'Student', 'Visitor'], emoji: '🇸🇬' },
    { name: 'Australia', region: 'Oceania', visas: ['Skilled Migration', 'Student', 'Work Holiday'], emoji: '🇦🇺' },
    { name: 'New Zealand', region: 'Oceania', visas: ['Skilled Migration', 'Student', 'Work'], emoji: '🇳🇿' },
    { name: 'United Arab Emirates', region: 'Middle East', visas: ['Employment', 'Investor', 'Visitor'], emoji: '🇦🇪' },
    { name: 'South Africa', region: 'Africa', visas: ['General Work', 'Study', 'Visitor'], emoji: '🇿🇦' },
    { name: 'Mexico', region: 'Americas', visas: ['Temporary', 'Student', 'Investor', 'Tourist'], emoji: '🇲🇽' },
    { name: 'Thailand', region: 'Asia', visas: ['Tourist', 'Education', 'Long Term Resident'], emoji: '🇹🇭' },
    { name: 'Spain', region: 'Europe', visas: ['Digital Nomad', 'Student', 'Visitor'], emoji: '🇪🇸' },
    { name: 'Portugal', region: 'Europe', visas: ['Digital Nomad', 'Student', 'D-7 Passive Income'], emoji: '🇵🇹' },
    { name: 'Israel', region: 'Middle East', visas: ['Tourist', 'Student', 'Work'], emoji: '🇮🇱' },
    { name: 'South Korea', region: 'Asia', visas: ['Work', 'Student', 'Investor'], emoji: '🇰🇷' },
    { name: 'Malaysia', region: 'Asia', visas: ['MM2H', 'Student', 'Work'], emoji: '🇲🇾' },
    { name: 'Philippines', region: 'Asia', visas: ['Tourist', 'Study', 'Work'], emoji: '🇵🇭' },
    { name: 'Switzerland', region: 'Europe', visas: ['Employment', 'Student', 'Visitor'], emoji: '🇨🇭' },
];

// Visa Types Data
const visaTypes = [
    { name: 'Tourist Visa', description: 'For leisure travel and short-term visits' },
    { name: 'Work Visa', description: 'Employment and professional work visas' },
    { name: 'Student Visa', description: 'For international students pursuing education' },
    { name: 'Family Visa', description: 'For family reunification and sponsorship' },
    { name: 'Investment Visa', description: 'For investors and business owners' },
    { name: 'Digital Nomad Visa', description: 'For remote workers and freelancers' },
    { name: 'Retirement Visa', description: 'For retirees and seniors' },
    { name: 'Residency Visa', description: 'For long-term residency and settlement' },
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCountries();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Toggle Mobile Menu
function toggleMenu() {
    navMenu.classList.toggle('active');
}

// Load Countries
function loadCountries() {
    const destinationsContainer = document.getElementById('topDestinations');
    destinationsContainer.innerHTML = '';

    countries.forEach(country => {
        const card = createDestinationCard(country);
        destinationsContainer.appendChild(card);
    });
}

// Create Destination Card
// CHANGE: Updated to link to new country-details.html page instead of showing alert
// Navigation now passes country name as query parameter: ?country=CountryName
function createDestinationCard(country) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.innerHTML = `
        <div class="card-header">${country.emoji}</div>
        <h3>${country.name}</h3>
        <p class="visa-info">${country.visas.join(', ')}</p>
        <a href="pages/country-details.html?country=${encodeURIComponent(country.name)}" class="btn-link">Learn More →</a>
    `;
    return card;
}

// Handle Search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.length === 0) {
        document.getElementById('searchResults').style.display = 'none';
        return;
    }

    const results = countries.filter(country => 
        country.name.toLowerCase().includes(searchTerm) ||
        country.region.toLowerCase().includes(searchTerm) ||
        country.visas.some(visa => visa.toLowerCase().includes(searchTerm))
    );

    if (results.length > 0) {
        displaySearchResults(results);
    } else {
        displayNoResults();
    }
}

// Display Search Results
function displaySearchResults(results) {
    const searchSection = document.getElementById('searchResults');
    const resultsContainer = document.getElementById('resultsContainer');
    
    resultsContainer.innerHTML = '';
    
    results.forEach(country => {
        const card = createDestinationCard(country);
        resultsContainer.appendChild(card);
    });

    searchSection.style.display = 'block';
    searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Display No Results
function displayNoResults() {
    const searchSection = document.getElementById('searchResults');
    const resultsContainer = document.getElementById('resultsContainer');
    
    resultsContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
            <i class="fas fa-search"></i>
            <h3>No Results Found</h3>
            <p>Try searching with different keywords or explore countries by region.</p>
        </div>
    `;

    searchSection.style.display = 'block';
    searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Show Country Details
// CHANGE: Redirects to country-details.html page instead of alert
// Encodes country name to safely pass through URL query parameters
function showCountryDetails(countryName) {
    window.location.href = `pages/country-details.html?country=${encodeURIComponent(countryName)}`;
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Filter Countries by Region
function filterByRegion(region) {
    const filtered = countries.filter(c => c.region === region);
    const destinationsContainer = document.getElementById('topDestinations');
    destinationsContainer.innerHTML = '';

    filtered.forEach(country => {
        const card = createDestinationCard(country);
        destinationsContainer.appendChild(card);
    });
}

// Get Unique Regions
function getRegions() {
    return [...new Set(countries.map(c => c.region))];
}

// Export Functions for Debugging
window.visaGuide = {
    countries,
    visaTypes,
    filterByRegion,
    getRegions,
    showCountryDetails
};

console.log('Global Visa Guide loaded successfully');
