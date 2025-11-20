// SaveMate - Professional Mobile App
class SaveMateApp {
    constructor() {
        this.currentUser = this.loadUser();
        this.currentPage = 'home';
        this.init();
    }

    init() {
        console.log('🚀 SaveMate Initializing...');
        this.renderApp();
        
        // Auto-login for demo
        if (!this.currentUser) {
            this.autoLogin();
        } else {
            this.showToast('Welcome back to SaveMate! 🎉');
        }
    }

    autoLogin() {
        // Auto-create demo user for seamless experience
        this.currentUser = {
            id: '1',
            name: 'SaveMate User',
            email: 'demo@savemate.co.za'
        };
        this.saveUser(this.currentUser);
        console.log('✅ Auto-login completed');
    }

    loadUser() {
        try {
            const user = localStorage.getItem('savemate-user');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.log('No user found, starting fresh');
            return null;
        }
    }

    saveUser(user) {
        localStorage.setItem('savemate-user', JSON.stringify(user));
    }

    renderApp() {
        const app = document.getElementById('app');
        if (!app) {
            console.error('❌ App container not found!');
            return;
        }

        if (!this.currentUser) {
            app.innerHTML = this.renderAuthPage();
            this.bindAuthEvents();
            return;
        }

        app.innerHTML = this.renderMainApp();
        this.bindAppEvents();
    }

    renderAuthPage() {
        return `
            <div class="auth-container">
                <div class="auth-card">
                    <div class="auth-header">
                        <div class="app-logo">🛍️</div>
                        <h1>SaveMate</h1>
                        <p>Your South African Shopping Companion</p>
                    </div>
                    
                    <div class="auth-form">
                        <div class="form-group">
                            <input type="email" id="email" class="form-control" placeholder="Email Address" value="demo@user.com">
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" class="form-control" placeholder="Password" value="password">
                        </div>
                        
                        <button class="btn btn-primary" id="loginBtn">
                            <i class="fas fa-sign-in-alt"></i> 
                            Sign In to SaveMate
                        </button>
                        
                        <div class="demo-note">
                            <p>Demo: Use any email/password or click below</p>
                        </div>
                        
                        <button class="btn btn-secondary" id="quickStartBtn">
                            <i class="fas fa-rocket"></i>
                            Quick Start Demo
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderMainApp() {
        return `
            <div class="app-wrapper">
                <!-- Header -->
                <header class="app-header">
                    <div class="header-left">
                        <div class="logo" onclick="app.switchPage('home')">
                            <i class="fas fa-shopping-bag"></i>
                            <span>SaveMate</span>
                        </div>
                    </div>
                    <div class="header-actions">
                        <button class="header-btn" onclick="app.showNotifications()">
                            <i class="fas fa-bell"></i>
                        </button>
                        <button class="header-btn" onclick="app.switchPage('profile')">
                            <i class="fas fa-user"></i>
                        </button>
                    </div>
                </header>

                <!-- Main Content -->
                <main class="main-content">
                    ${this.renderCurrentPage()}
                </main>

                <!-- Bottom Navigation -->
                <nav class="bottom-nav">
                    ${this.renderNavItem('home', 'fas fa-home', 'Home')}
                    ${this.renderNavItem('explore', 'fas fa-compass', 'Explore')}
                    ${this.renderNavItem('deals', 'fas fa-tag', 'Deals')}
                    ${this.renderNavItem('list', 'fas fa-list', 'List')}
                    ${this.renderNavItem('profile', 'fas fa-user', 'Me')}
                </nav>

                <!-- Toast Container -->
                <div id="toastContainer"></div>
            </div>
        `;
    }

    renderNavItem(page, icon, label) {
        return `
            <div class="nav-item ${this.currentPage === page ? 'active' : ''}" 
                 onclick="app.switchPage('${page}')">
                <i class="${icon}"></i>
                <span>${label}</span>
            </div>
        `;
    }

    renderCurrentPage() {
        const pageRenderers = {
            'home': () => this.renderHomePage(),
            'explore': () => this.renderExplorePage(),
            'deals': () => this.renderDealsPage(),
            'list': () => this.renderListPage(),
            'profile': () => this.renderProfilePage()
        };

        const renderer = pageRenderers[this.currentPage] || pageRenderers['home'];
        return `
            <div class="page active">
                ${renderer()}
            </div>
        `;
    }

    renderHomePage() {
        return `
            <div class="home-container">
                <!-- Welcome Banner -->
                <div class="welcome-banner">
                    <div class="welcome-content">
                        <h2>Hello, ${this.currentUser.name}! 👋</h2>
                        <p>Ready to discover amazing deals today?</p>
                    </div>
                    <div class="welcome-actions">
                        <button class="btn-small" onclick="app.scanProduct()">
                            <i class="fas fa-camera"></i> Scan
                        </button>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="quick-actions">
                    <div class="action-card" onclick="app.switchPage('deals')">
                        <i class="fas fa-bolt"></i>
                        <span>Hot Deals</span>
                    </div>
                    <div class="action-card" onclick="app.switchPage('list')">
                        <i class="fas fa-shopping-cart"></i>
                        <span>My List</span>
                    </div>
                    <div class="action-card" onclick="app.showStores()">
                        <i class="fas fa-store"></i>
                        <span>Stores</span>
                    </div>
                    <div class="action-card" onclick="app.scanProduct()">
                        <i class="fas fa-qrcode"></i>
                        <span>Scan</span>
                    </div>
                </div>

                <!-- Featured Deals -->
                <section class="section">
                    <div class="section-header">
                        <h3>🔥 Trending Now</h3>
                        <a href="#" onclick="app.switchPage('deals')">See All</a>
                    </div>
                    
                    <div class="deals-grid">
                        ${this.renderDealCard('Tastic Rice 5kg', 'R105.99', 'Checkers', '🛒', '#E31B23')}
                        ${this.renderDealCard('Ouma Rusks 500g', 'R52.99', 'Pick n Pay', '🍪', '#0055A4')}
                        ${this.renderDealCard('Five Roses Tea', 'R35.50', 'Woolworths', '🍵', '#000000')}
                        ${this.renderDealCard('Koo Baked Beans', 'R18.99', 'Shoprite', '🥫', '#FF0000')}
                    </div>
                </section>

                <!-- Popular Stores -->
                <section class="section">
                    <div class="section-header">
                        <h3>🏪 Popular Stores</h3>
                    </div>
                    
                    <div class="stores-scroll">
                        ${this.renderStoreChip('Checkers', '#E31B23', '🛒')}
                        ${this.renderStoreChip('Pick n Pay', '#0055A4', '🏪')}
                        ${this.renderStoreChip('Woolworths', '#000000', '🛍️')}
                        ${this.renderStoreChip('Shoprite', '#FF0000', '🛒')}
                        ${this.renderStoreChip('Spar', '#008000', '🏬')}
                    </div>
                </section>
            </div>
        `;
    }

    renderDealCard(title, price, store, emoji, color) {
        return `
            <div class="deal-card">
                <div class="deal-badge">HOT</div>
                <div class="deal-image" style="background: ${color}">
                    ${emoji}
                </div>
                <div class="deal-content">
                    <h4 class="deal-title">${title}</h4>
                    <p class="deal-store">${store}</p>
                    <div class="deal-price">${price}</div>
                    <div class="deal-actions">
                        <button class="deal-btn" onclick="app.saveDeal('${title}')">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="deal-btn primary" onclick="app.addToList('${title}')">
                            <i class="fas fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderStoreChip(name, color, emoji) {
        return `
            <div class="store-chip" style="border-color: ${color}" onclick="app.showStore('${name}')">
                <div class="store-emoji">${emoji}</div>
                <span>${name}</span>
            </div>
        `;
    }

    renderExplorePage() {
        return `
            <div class="page-content">
                <div class="page-header">
                    <h2>Explore</h2>
                    <p>Discover stores and categories</p>
                </div>

                <div class="categories-grid">
                    <div class="category-card" onclick="app.showCategory('groceries')">
                        <i class="fas fa-shopping-basket"></i>
                        <span>Groceries</span>
                    </div>
                    <div class="category-card" onclick="app.showCategory('electronics')">
                        <i class="fas fa-laptop"></i>
                        <span>Electronics</span>
                    </div>
                    <div class="category-card" onclick="app.showCategory('fashion')">
                        <i class="fas fa-tshirt"></i>
                        <span>Fashion</span>
                    </div>
                    <div class="category-card" onclick="app.showCategory('home')">
                        <i class="fas fa-home"></i>
                        <span>Home & Garden</span>
                    </div>
                </div>

                <div class="featured-stores">
                    <h3>Featured Stores</h3>
                    <div class="stores-grid">
                        ${this.renderStoreCard('Checkers', '#E31B23', '🛒', '60-min delivery')}
                        ${this.renderStoreCard('Pick n Pay', '#0055A4', '🏪', 'Weekly specials')}
                        ${this.renderStoreCard('Woolworths', '#000000', '🛍️', 'Quality foods')}
                    </div>
                </div>
            </div>
        `;
    }

    renderStoreCard(name, color, emoji, description) {
        return `
            <div class="store-card" onclick="app.showStore('${name}')">
                <div class="store-header" style="background: ${color}">
                    <div class="store-emoji-large">${emoji}</div>
                </div>
                <div class="store-content">
                    <h4>${name}</h4>
                    <p>${description}</p>
                    <button class="btn-store">Browse Store</button>
                </div>
            </div>
        `;
    }

    renderDealsPage() {
        return `
            <div class="page-content">
                <div class="page-header">
                    <h2>Hot Deals</h2>
                    <p>Don't miss these amazing offers</p>
                </div>

                <div class="deals-list">
                    ${this.renderDealItem('Tastic Rice 5kg', 'R105.99', 'R129.99', 'Checkers', '25% OFF')}
                    ${this.renderDealItem('Ouma Rusks 500g', 'R52.99', 'R59.99', 'Pick n Pay', '12% OFF')}
                    ${this.renderDealItem('Five Roses Tea 100s', 'R35.50', 'R42.00', 'Woolworths', '15% OFF')}
                    ${this.renderDealItem('Koo Baked Beans', 'R18.99', 'R22.99', 'Shoprite', '17% OFF')}
                </div>
            </div>
        `;
    }

    renderDealItem(title, price, originalPrice, store, discount) {
        return `
            <div class="deal-item">
                <div class="deal-info">
                    <h4>${title}</h4>
                    <p class="deal-store">${store}</p>
                    <div class="deal-pricing">
                        <span class="current-price">${price}</span>
                        <span class="original-price">${originalPrice}</span>
                        <span class="discount-badge">${discount}</span>
                    </div>
                </div>
                <div class="deal-actions">
                    <button class="btn-icon" onclick="app.saveDeal('${title}')">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="btn-primary-small" onclick="app.addToList('${title}')">
                        Add to List
                    </button>
                </div>
            </div>
        `;
    }

    renderListPage() {
        return `
            <div class="page-content">
                <div class="page-header">
                    <h2>My Shopping List</h2>
                    <p>Your items and saved deals</p>
                </div>

                <div class="list-actions">
                    <button class="btn-primary" onclick="app.createNewList()">
                        <i class="fas fa-plus"></i> New List
                    </button>
                </div>

                <div class="shopping-list">
                    <div class="list-section">
                        <h3>Weekly Groceries</h3>
                        ${this.renderListItem('Tastic Rice 5kg', 'R105.99', 'Checkers')}
                        ${this.renderListItem('Ouma Rusks 500g', 'R52.99', 'Pick n Pay')}
                        ${this.renderListItem('Five Roses Tea', 'R35.50', 'Woolworths')}
                    </div>
                </div>
            </div>
        `;
    }

    renderListItem(name, price, store) {
        return `
            <div class="list-item">
                <input type="checkbox" class="list-checkbox">
                <div class="item-info">
                    <span class="item-name">${name}</span>
                    <span class="item-details">${store} • ${price}</span>
                </div>
                <button class="btn-icon" onclick="app.removeItem('${name}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }

    renderProfilePage() {
        return `
            <div class="page-content">
                <div class="profile-header">
                    <div class="profile-avatar">
                        ${this.currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <h2>${this.currentUser.name}</h2>
                    <p>SaveMate Pro Shopper 🛍️</p>
                </div>

                <div class="profile-stats">
                    <div class="stat-item">
                        <span class="stat-number">12</span>
                        <span class="stat-label">Saved Deals</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">8</span>
                        <span class="stat-label">Lists</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">24</span>
                        <span class="stat-label">Scans</span>
                    </div>
                </div>

                <div class="profile-actions">
                    <button class="profile-btn" onclick="app.editProfile()">
                        <i class="fas fa-user-edit"></i> Edit Profile
                    </button>
                    <button class="profile-btn" onclick="app.showSettings()">
                        <i class="fas fa-cog"></i> Settings
                    </button>
                    <button class="profile-btn" onclick="app.showHelp()">
                        <i class="fas fa-question-circle"></i> Help & Support
                    </button>
                    <button class="profile-btn logout" onclick="app.logout()">
                        <i class="fas fa-sign-out-alt"></i> Sign Out
                    </button>
                </div>
            </div>
        `;
    }

    // Event Binding
    bindAuthEvents() {
        setTimeout(() => {
            const loginBtn = document.getElementById('loginBtn');
            const quickStartBtn = document.getElementById('quickStartBtn');
            
            if (loginBtn) {
                loginBtn.onclick = () => this.handleLogin();
            }
            if (quickStartBtn) {
                quickStartBtn.onclick = () => this.handleQuickStart();
            }

            // Add enter key support
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.handleLogin();
                    }
                });
            });
        }, 100);
    }

    bindAppEvents() {
        // Any additional app event bindings
        console.log('✅ App events bound');
    }

    // Event Handlers
    handleLogin() {
        const email = document.getElementById('email')?.value || 'demo@user.com';
        const password = document.getElementById('password')?.value || 'password';

        console.log('🔐 Login attempt:', { email, password });

        // Always succeed for demo
        this.currentUser = {
            id: '1',
            name: email.split('@')[0] || 'SaveMate User',
            email: email
        };
        
        this.saveUser(this.currentUser);
        this.showToast('🎉 Welcome to SaveMate!');
        this.renderApp();
    }

    handleQuickStart() {
        this.currentUser = {
            id: '1',
            name: 'SaveMate Pro',
            email: 'pro@savemate.co.za'
        };
        
        this.saveUser(this.currentUser);
        this.showToast('🚀 Quick Start Activated!');
        this.renderApp();
    }

    switchPage(page) {
        console.log('🔄 Switching to page:', page);
        this.currentPage = page;
        this.renderApp();
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Feature Methods
    saveDeal(dealName) {
        this.showToast(`💖 Saved "${dealName}"`);
    }

    addToList(itemName) {
        this.showToast(`🛒 Added "${itemName}" to list`);
    }

    scanProduct() {
        this.showToast('📷 Scanner activated! Point camera at barcode');
    }

    showStore(storeName) {
        this.showToast(`🏪 Opening ${storeName}`);
    }

    showCategory(category) {
        this.showToast(`📁 Browsing ${category}`);
    }

    createNewList() {
        this.showToast('📝 New list created');
    }

    removeItem(itemName) {
        this.showToast(`🗑️ Removed "${itemName}"`);
    }

    showNotifications() {
        this.showToast('🔔 You have 3 new notifications');
    }

    editProfile() {
        this.showToast('👤 Edit profile feature');
    }

    showSettings() {
        this.showToast('⚙️ Settings panel');
    }

    showHelp() {
        this.showToast('❓ Help & support');
    }

    logout() {
        if (confirm('Are you sure you want to sign out?')) {
            this.currentUser = null;
            this.saveUser(null);
            this.showToast('👋 Signed out successfully');
            this.renderApp();
        }
    }

    // Toast System
    showToast(message, duration = 3000) {
        const container = document.getElementById('toastContainer') || this.createToastContainer();
        
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = `
            <div class="toast-content">
                <span>${message}</span>
            </div>
        `;
        
        container.appendChild(toast);
        
        // Animate in
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Remove after duration
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
    }

    createToastContainer() {
        const container = document.createElement('div');
        container.id = 'toastContainer';
        document.body.appendChild(container);
        return container;
    }
}

// Professional initialization
console.log('🛍️ SaveMate App Loading...');

// Wait for DOM and initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new SaveMateApp();
        console.log('✅ SaveMate App Ready!');
    });
} else {
    window.app = new SaveMateApp();
    console.log('✅ SaveMate App Ready!');
}

// Global error handler
window.addEventListener('error', (e) => {
    console.error('❌ App Error:', e.error);
});

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SaveMateApp;
}