// Simple SaveMate App - Working Version
class SaveMateApp {
    constructor() {
        this.currentUser = this.loadUser();
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.renderApp();
        this.showToast('🚀 SaveMate loaded successfully!');
    }

    loadUser() {
        return JSON.parse(localStorage.getItem('savemate-user')) || null;
    }

    saveUser(user) {
        localStorage.setItem('savemate-user', JSON.stringify(user));
    }

    renderApp() {
        const app = document.getElementById('app');
        
        if (!this.currentUser) {
            app.innerHTML = this.renderAuthPage();
            return;
        }

        app.innerHTML = `
            <div class="app-header">
                <div class="logo" onclick="app.switchPage('home')">
                    <i class="fas fa-shopping-bag"></i>
                    <span>SaveMate</span>
                </div>
                <div class="header-actions">
                    <button class="header-btn" onclick="app.switchPage('profile')">
                        <i class="fas fa-user"></i>
                    </button>
                </div>
            </div>

            <main class="main-content">
                ${this.renderCurrentPage()}
            </main>

            <div class="bottom-nav">
                <div class="nav-item ${this.currentPage === 'home' ? 'active' : ''}" onclick="app.switchPage('home')">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </div>
                <div class="nav-item ${this.currentPage === 'explore' ? 'active' : ''}" onclick="app.switchPage('explore')">
                    <i class="fas fa-compass"></i>
                    <span>Explore</span>
                </div>
                <div class="nav-item ${this.currentPage === 'list' ? 'active' : ''}" onclick="app.switchPage('list')">
                    <i class="fas fa-list"></i>
                    <span>List</span>
                </div>
            </div>
        `;
    }

    renderCurrentPage() {
        const pages = {
            'home': this.renderHomePage(),
            'explore': this.renderExplorePage(),
            'list': this.renderListPage(),
            'profile': this.renderProfilePage()
        };

        return pages[this.currentPage] || this.renderHomePage();
    }

    renderAuthPage() {
        return `
            <div class="auth-container">
                <div class="auth-card">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <div style="font-size: 3rem; color: #13294b; margin-bottom: 1rem;">🛍️</div>
                        <h2>Welcome to SaveMate</h2>
                        <p style="color: #64748b; margin-top: 0.5rem;">Your South African shopping companion</p>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" class="form-control" placeholder="Enter your email" value="demo@user.com">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Enter your password" value="password">
                    </div>
                    <button class="btn btn-primary" onclick="app.handleLogin()">
                        <i class="fas fa-sign-in-alt"></i> Sign In to SaveMate
                    </button>
                    <div class="auth-switch">
                        New to SaveMate? <a href="#" onclick="app.handleSignup()">Create an account</a>
                    </div>
                </div>
            </div>
        `;
    }

    renderHomePage() {
        return `
            <div class="page active">
                <div class="welcome-banner">
                    <h2>Hello, ${this.currentUser?.name || 'Shopper'}! 👋</h2>
                    <p>Discover the best deals from South African retailers</p>
                </div>

                <h2>Trending Deals</h2>
                <div class="deals-grid">
                    <div class="deal-card">
                        <div class="deal-image">
                            🛒
                        </div>
                        <div class="deal-content">
                            <div class="deal-title">Tastic Rice 5kg</div>
                            <div class="deal-price">R105.99</div>
                            <div class="deal-actions">
                                <button class="deal-btn">
                                    <i class="fas fa-heart"></i> Save
                                </button>
                                <button class="deal-btn primary">
                                    <i class="fas fa-list"></i> Add
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="deal-card">
                        <div class="deal-image">
                            🍪
                        </div>
                        <div class="deal-content">
                            <div class="deal-title">Ouma Rusks 500g</div>
                            <div class="deal-price">R52.99</div>
                            <div class="deal-actions">
                                <button class="deal-btn">
                                    <i class="fas fa-heart"></i> Save
                                </button>
                                <button class="deal-btn primary">
                                    <i class="fas fa-list"></i> Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderExplorePage() {
        return `
            <div class="page active">
                <h2>Explore Stores</h2>
                <p>Browse deals from your favorite South African stores</p>
                
                <div class="deals-grid">
                    <div class="deal-card">
                        <div class="deal-image" style="background: #E31B23; color: white;">
                            🛒
                        </div>
                        <div class="deal-content">
                            <div class="deal-title">Checkers</div>
                            <div class="deal-actions">
                                <button class="deal-btn primary">
                                    Browse Store
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="deal-card">
                        <div class="deal-image" style="background: #0055A4; color: white;">
                            🏪
                        </div>
                        <div class="deal-content">
                            <div class="deal-title">Pick n Pay</div>
                            <div class="deal-actions">
                                <button class="deal-btn primary">
                                    Browse Store
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderListPage() {
        return `
            <div class="page active">
                <h2>My Shopping List</h2>
                <p>Your saved items and shopping lists</p>
                
                <div style="background: white; padding: 1rem; border-radius: 0.5rem; margin-top: 1rem;">
                    <h3>Weekly Groceries</h3>
                    <ul style="list-style: none; margin-top: 1rem;">
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;">
                            <input type="checkbox" style="margin-right: 1rem;">
                            Tastic Rice 5kg - R105.99
                        </li>
                        <li style="padding: 0.5rem 0;">
                            <input type="checkbox" style="margin-right: 1rem;">
                            Ouma Rusks 500g - R52.99
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }

    renderProfilePage() {
        return `
            <div class="page active">
                <div style="text-align: center; padding: 2rem;">
                    <div style="width: 80px; height: 80px; background: #13294b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; margin: 0 auto 1rem;">
                        ${this.currentUser?.name?.charAt(0) || 'U'}
                    </div>
                    <h2>${this.currentUser?.name || 'User'}</h2>
                    <p style="color: #64748b; margin-bottom: 2rem;">SaveMate Shopper</p>
                    
                    <button class="btn btn-primary" onclick="app.logout()" style="max-width: 200px; margin: 0 auto;">
                        <i class="fas fa-sign-out-alt"></i> Sign Out
                    </button>
                </div>
            </div>
        `;
    }

    handleLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            this.showToast('Please fill in all fields');
            return;
        }

        // Simple login - accept any email/password
        this.currentUser = {
            id: '1',
            name: 'Demo User',
            email: email
        };
        this.saveUser(this.currentUser);
        this.showToast('Welcome to SaveMate! 🎉');
        this.renderApp();
    }

    handleSignup() {
        // For demo, just log them in
        this.currentUser = {
            id: '1', 
            name: 'New User',
            email: 'new@user.com'
        };
        this.saveUser(this.currentUser);
        this.showToast('Welcome to SaveMate! 🛍️');
        this.renderApp();
    }

    switchPage(page) {
        this.currentPage = page;
        this.renderApp();
    }

    logout() {
        if (confirm('Are you sure you want to sign out?')) {
            this.currentUser = null;
            this.saveUser(null);
            this.showToast('Signed out successfully');
            this.renderApp();
        }
    }

    showToast(message, duration = 3000) {
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        // Remove toast after duration
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, duration);
    }
}

// Initialize the app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SaveMateApp();
});

// Make app globally available
window.app = app;