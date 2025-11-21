// SaveMate - Complete Shopping & Social App
class SaveMateApp {
    constructor() {
        this.currentUser = this.loadUser();
        this.currentPage = 'home';
        this.savedDeals = new Set(this.loadSavedDeals());
        this.shoppingLists = this.loadShoppingLists();
        this.posts = this.loadPosts();
        this.notifications = this.loadNotifications();
        this.theme = this.loadTheme();
        this.init();
    }

    // Data Management
    loadUser() {
        const user = localStorage.getItem('savemate-user');
        return user ? JSON.parse(user) : null;
    }

    saveUser(user) {
        localStorage.setItem('savemate-user', JSON.stringify(user));
    }

    loadSavedDeals() {
        return JSON.parse(localStorage.getItem('savemate-saved-deals')) || [];
    }

    saveSavedDeals() {
        localStorage.setItem('savemate-saved-deals', JSON.stringify([...this.savedDeals]));
    }

    loadShoppingLists() {
        return JSON.parse(localStorage.getItem('savemate-shopping-lists')) || [
            {
                id: '1',
                name: "Weekly Groceries",
                items: [
                    { id: '1', title: "Tastic Rice 5kg", store: "Checkers", price: 105.99, quantity: 1 },
                    { id: '4', title: "Koo Baked Beans 410g", store: "Shoprite", price: 18.99, quantity: 2 }
                ]
            }
        ];
    }

    saveShoppingLists() {
        localStorage.setItem('savemate-shopping-lists', JSON.stringify(this.shoppingLists));
    }

    loadPosts() {
        return JSON.parse(localStorage.getItem('savemate-posts')) || [
            {
                id: '1',
                user: "DealHunterSA",
                avatar: "DH",
                content: "Just found Tastic Rice for R105.99 at Checkers! That's a R24 saving! 🎉 #MzansiDeals",
                image: "",
                time: "2 hours ago",
                likes: 24,
                comments: 8,
                shares: 3,
                liked: false,
                store: "Checkers"
            },
            {
                id: '2',
                user: "BudgetShopperCT",
                avatar: "BS",
                content: "Woolworths has amazing specials on baby products this week. Pampers nappies at unbeatable prices! 👶",
                image: "",
                time: "5 hours ago",
                likes: 42,
                comments: 12,
                shares: 5,
                liked: true,
                store: "Woolworths"
            }
        ];
    }

    savePosts() {
        localStorage.setItem('savemate-posts', JSON.stringify(this.posts));
    }

    loadNotifications() {
        return JSON.parse(localStorage.getItem('savemate-notifications')) || [
            { id: '1', type: 'deal', message: 'New Checkers specials available!', time: '5 min ago', read: false },
            { id: '2', type: 'social', message: 'DealHunterSA liked your post', time: '1 hour ago', read: false },
            { id: '3', type: 'system', message: 'Welcome to SaveMate!', time: '2 hours ago', read: true }
        ];
    }

    saveNotifications() {
        localStorage.setItem('savemate-notifications', JSON.stringify(this.notifications));
    }

    loadTheme() {
        return localStorage.getItem('savemate-theme') || 'light';
    }

    saveTheme(theme) {
        localStorage.setItem('savemate-theme', theme);
        this.applyTheme(theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    // App Initialization
    init() {
        this.applyTheme(this.theme);
        this.renderApp();
        this.showToast('🚀 SaveMate loaded successfully!');
    }

    renderApp() {
        const app = document.getElementById('app');
        
        if (!this.currentUser) {
            app.innerHTML = this.renderAuthPage();
            this.bindAuthEvents();
            return;
        }

        app.innerHTML = this.renderMainApp();
    }

    // Authentication
    renderAuthPage() {
        return `
            <div class="auth-container">
                <div class="auth-card">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <div style="font-size: 3rem; color: #1e40af; margin-bottom: 1rem;">🛍️</div>
                        <h2>Welcome to SaveMate</h2>
                        <p style="color: #6b7280; margin-top: 0.5rem;">Your South African shopping companion</p>
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

    bindAuthEvents() {
        setTimeout(() => {
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

    handleLogin() {
        const email = document.getElementById('email')?.value || 'demo@user.com';
        const password = document.getElementById('password')?.value || 'password';

        // Always succeed for demo
        this.currentUser = {
            id: '1',
            name: 'SaveMate User',
            email: email
        };
        
        this.saveUser(this.currentUser);
        this.showToast('🎉 Welcome to SaveMate!');
        this.renderApp();
    }

    handleSignup() {
        this.currentUser = {
            id: '1',
            name: 'New SaveMate User',
            email: 'new@user.com'
        };
        
        this.saveUser(this.currentUser);
        this.showToast('🛍️ Welcome to SaveMate!');
        this.renderApp();
    }

    // Main App Render
    renderMainApp() {
        return `
            <div class="app-header">
                <div class="logo" onclick="app.switchPage('home')">
                    <i class="fas fa-shopping-bag"></i>
                    <span>SaveMate</span>
                </div>
                <div class="header-actions">
                    <button class="header-btn" onclick="app.switchPage('notifications')" title="Notifications">
                        <i class="fas fa-bell"></i>
                        ${this.getUnreadNotifications() > 0 ? 
                            `<span class="notification-badge">${this.getUnreadNotifications()}</span>` : ''}
                    </button>
                    <button class="header-btn" onclick="app.switchPage('settings')" title="Settings">
                        <i class="fas fa-cog"></i>
                    </button>
                    <button class="header-btn" onclick="app.switchPage('profile')" title="Profile">
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
                <div class="nav-item ${this.currentPage === 'universe' ? 'active' : ''}" onclick="app.switchPage('universe')">
                    <i class="fas fa-users"></i>
                    <span>Universe</span>
                </div>
                <div class="nav-item ${this.currentPage === 'scanner' ? 'active' : ''}" onclick="app.switchPage('scanner')">
                    <i class="fas fa-camera"></i>
                    <span>Scan</span>
                </div>
                <div class="nav-item ${this.currentPage === 'shopping-list' ? 'active' : ''}" onclick="app.switchPage('shopping-list')">
                    <i class="fas fa-list"></i>
                    <span>List</span>
                </div>
            </div>
        `;
    }

    getUnreadNotifications() {
        return this.notifications.filter(n => !n.read).length;
    }

    renderCurrentPage() {
        const pages = {
            'home': this.renderHomePage(),
            'explore': this.renderExplorePage(),
            'universe': this.renderUniversePage(),
            'scanner': this.renderScannerPage(),
            'shopping-list': this.renderShoppingListPage(),
            'profile': this.renderProfilePage(),
            'notifications': this.renderNotificationsPage(),
            'settings': this.renderSettingsPage()
        };

        return pages[this.currentPage] || this.renderHomePage();
    }

    // Page Renderers
    renderHomePage() {
        const stores = [
            { id: '1', name: "Checkers", color: "#E31B23", logo: "🛒" },
            { id: '2', name: "Pick n Pay", color: "#0055A4", logo: "🏪" },
            { id: '3', name: "Woolworths", color: "#000000", logo: "🛍️" },
            { id: '4', name: "Shoprite", color: "#FF0000", logo: "🛒" },
            { id: '5', name: "Spar", color: "#008000", logo: "🏬" }
        ];

        const deals = [
            {
                id: '1',
                title: "Tastic Rice 5kg",
                current_price: 105.99,
                original_price: 129.99,
                store: "Checkers",
                badge: "SAVE R24",
                emoji: "🛒",
                color: "#E31B23"
            },
            {
                id: '2',
                title: "Ouma Rusks Buttermilk 500g",
                current_price: 52.99,
                original_price: 59.99,
                store: "Pick n Pay",
                badge: "POPULAR",
                emoji: "🍪",
                color: "#0055A4"
            },
            {
                id: '3',
                title: "Five Roses Tea 100s",
                current_price: 35.50,
                original_price: 42.00,
                store: "Woolworths",
                badge: "15% OFF",
                emoji: "🍵",
                color: "#000000"
            },
            {
                id: '4',
                title: "Koo Baked Beans 410g",
                current_price: 18.99,
                original_price: 22.99,
                store: "Shoprite",
                badge: "17% OFF",
                emoji: "🥫",
                color: "#FF0000"
            }
        ];

        return `
            <div class="page active">
                <div class="welcome-banner">
                    <h2>Hello, ${this.currentUser.name}! 👋</h2>
                    <p>Discover the best deals from South African retailers</p>
                </div>

                <div class="search-container">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search products, stores, or deals...">
                    </div>
                </div>

                <h2 class="section-title">
                    <i class="fas fa-fire" style="color: #f59e0b;"></i>
                    Trending Deals
                </h2>
                <div class="deals-grid">
                    ${deals.map(deal => `
                        <div class="deal-card">
                            <div class="deal-image" style="background: ${deal.color}; color: white; font-size: 3rem;">
                                ${deal.emoji}
                            </div>
                            <div class="deal-content">
                                <div class="deal-title">${deal.title}</div>
                                <div class="deal-store">
                                    <i class="fas fa-store"></i>
                                    <span>${deal.store}</span>
                                </div>
                                <div class="deal-price">
                                    R${deal.current_price}
                                    <span class="deal-original-price">R${deal.original_price}</span>
                                </div>
                                <div class="deal-actions">
                                    <button class="deal-btn" onclick="app.toggleSaveDeal('${deal.id}')">
                                        <i class="fas ${this.savedDeals.has(deal.id) ? 'fa-heart' : 'fa-heart'}"></i>
                                        ${this.savedDeals.has(deal.id) ? 'Saved' : 'Save'}
                                    </button>
                                    <button class="deal-btn primary" onclick="app.addToList('${deal.id}')">
                                        <i class="fas fa-list"></i>
                                        Add to List
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <h2 class="section-title">
                    <i class="fas fa-store"></i>
                    Popular Stores
                </h2>
                <div class="stores-scroll">
                    ${stores.map(store => `
                        <div class="store-chip" onclick="app.showStore('${store.id}')">
                            <div class="store-chip-logo" style="background: ${store.color}">
                                ${store.logo}
                            </div>
                            <span>${store.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderExplorePage() {
        const categories = [
            { name: 'Groceries', icon: 'fas fa-shopping-basket' },
            { name: 'Electronics', icon: 'fas fa-laptop' },
            { name: 'Fashion', icon: 'fas fa-tshirt' },
            { name: 'Home & Garden', icon: 'fas fa-home' }
        ];

        return `
            <div class="page active">
                <h2 class="section-title">
                    <i class="fas fa-compass"></i>
                    Explore Categories
                </h2>
                <div class="categories">
                    ${categories.map(cat => `
                        <div class="category" onclick="app.showCategory('${cat.name}')">
                            <i class="${cat.icon}"></i>
                            <span>${cat.name}</span>
                        </div>
                    `).join('')}
                </div>

                <h2 class="section-title">
                    <i class="fas fa-store"></i>
                    All Stores
                </h2>
                <div class="deals-grid">
                    ${this.renderStoreCards()}
                </div>
            </div>
        `;
    }

    renderStoreCards() {
        const stores = [
            { name: "Checkers", color: "#E31B23", logo: "🛒", desc: "60-min delivery" },
            { name: "Pick n Pay", color: "#0055A4", logo: "🏪", desc: "Weekly specials" },
            { name: "Woolworths", color: "#000000", logo: "🛍️", desc: "Quality foods" },
            { name: "Shoprite", color: "#FF0000", logo: "🛒", desc: "Lower prices" }
        ];

        return stores.map(store => `
            <div class="deal-card" onclick="app.showStore('${store.name}')">
                <div class="deal-image" style="background: ${store.color}; color: white; font-size: 3rem;">
                    ${store.logo}
                </div>
                <div class="deal-content">
                    <div class="deal-title">${store.name}</div>
                    <div class="deal-store">
                        <span>${store.desc}</span>
                    </div>
                    <div class="deal-actions">
                        <button class="deal-btn primary">
                            <i class="fas fa-store"></i> Browse Store
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderUniversePage() {
        return `
            <div class="page active">
                <div class="universe-header">
                    <span>SHOPPING UNIVERSE</span>
                </div>
                
                <div class="post-creator">
                    <div class="post-input-container">
                        <div class="post-avatar">${this.getUserInitials()}</div>
                        <input type="text" class="post-input" id="postInput" placeholder="Share a deal or shopping tip...">
                        <button class="header-btn" onclick="app.createPost()">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>

                <div id="postsContainer">
                    ${this.posts.map(post => this.renderPost(post)).join('')}
                </div>
            </div>
        `;
    }

    renderPost(post) {
        return `
            <div class="post-card">
                <div class="post-header">
                    <div class="post-avatar">${post.avatar}</div>
                    <div>
                        <div class="post-user">${post.user}</div>
                        <div class="post-time">${post.time}</div>
                    </div>
                </div>
                <div class="post-content">${post.content}</div>
                ${post.image ? `<div class="post-image" style="background-image: url('${post.image}')"></div>` : ''}
                <div class="post-actions">
                    <div class="post-action ${post.liked ? 'active' : ''}" onclick="app.likePost('${post.id}')">
                        <i class="fas fa-heart"></i>
                        <span>${post.likes}</span>
                    </div>
                    <div class="post-action" onclick="app.commentOnPost('${post.id}')">
                        <i class="fas fa-comment"></i>
                        <span>${post.comments}</span>
                    </div>
                    <div class="post-action" onclick="app.sharePost('${post.id}')">
                        <i class="fas fa-share"></i>
                        <span>${post.shares}</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderScannerPage() {
        return `
            <div class="page active">
                <div class="scanner-container">
                    <div class="scanner-placeholder">
                        <i class="fas fa-camera" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                        <div style="font-size: 1.1rem; font-weight: 500;">Point camera at barcode</div>
                    </div>
                    <p style="color: #6b7280; margin-bottom: 1.5rem;">
                        Scan barcodes to compare prices across South African stores
                    </p>
                    <button class="btn btn-primary" onclick="app.startScanner()" style="width: auto; padding: 1rem 2rem;">
                        <i class="fas fa-camera"></i> Start Scanning
                    </button>
                </div>
            </div>
        `;
    }

    renderShoppingListPage() {
        return `
            <div class="page active">
                <h2 class="section-title">
                    <i class="fas fa-list"></i>
                    My Shopping Lists
                </h2>

                <div class="list-category">
                    <h3>Weekly Groceries</h3>
                    ${this.shoppingLists[0].items.map(item => `
                        <div class="list-item">
                            <input type="checkbox" style="margin-right: 1rem;">
                            <div style="flex: 1;">
                                <div style="font-weight: 500;">${item.title}</div>
                                <div style="font-size: 0.875rem; color: #6b7280;">
                                    ${item.store} • R${item.price} • Qty: ${item.quantity}
                                </div>
                            </div>
                            <button class="header-btn" onclick="app.removeFromList('${item.id}')">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>

                <button class="btn btn-primary" onclick="app.createNewList()" style="margin-top: 2rem;">
                    <i class="fas fa-plus"></i> Create New List
                </button>
            </div>
        `;
    }

    renderProfilePage() {
        const userPosts = this.posts.filter(post => post.user === 'You');
        
        return `
            <div class="page active">
                <div class="profile-container">
                    <div class="profile-header">
                        <div class="cover-photo"></div>
                        <div class="profile-avatar-container">
                            <div class="profile-avatar">${this.getUserInitials()}</div>
                        </div>
                    </div>
                    
                    <div class="profile-info">
                        <h2>${this.currentUser.name}</h2>
                        <p>SaveMate enthusiast finding the best deals across South Africa! 🇿🇦</p>
                        
                        <div class="profile-stats">
                            <div class="stat">
                                <div class="stat-value">${userPosts.length}</div>
                                <div class="stat-label">Posts</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${this.savedDeals.size}</div>
                                <div class="stat-label">Saved</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${this.getTotalListItems()}</div>
                                <div class="stat-label">List Items</div>
                            </div>
                        </div>
                        
                        <button class="btn btn-primary" onclick="app.editProfile()">
                            <i class="fas fa-edit"></i> Edit Profile
                        </button>
                    </div>
                </div>

                <div style="margin-top: 2rem;">
                    <h3 class="section-title">My Activity</h3>
                    ${userPosts.length > 0 ? 
                        userPosts.map(post => this.renderPost(post)).join('') :
                        '<div class="empty-state"><i class="fas fa-feather"></i><p>No posts yet</p></div>'
                    }
                </div>
            </div>
        `;
    }

    renderNotificationsPage() {
        return `
            <div class="page active">
                <h2 class="section-title">
                    <i class="fas fa-bell"></i>
                    Notifications
                </h2>
                
                <div>
                    ${this.notifications.map(notif => `
                        <div class="list-item">
                            <div style="flex: 1;">
                                <div style="font-weight: 500;">${notif.message}</div>
                                <div style="font-size: 0.875rem; color: #6b7280;">
                                    ${notif.time}
                                </div>
                            </div>
                            ${!notif.read ? '<div style="width: 8px; height: 8px; background: #2563eb; border-radius: 50%;"></div>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderSettingsPage() {
        return `
            <div class="page active">
                <div class="settings-container">
                    <div class="settings-header">
                        <h2><i class="fas fa-cog"></i> Settings</h2>
                        <p>Customize your SaveMate experience</p>
                    </div>

                    <div class="settings-section">
                        <h3><i class="fas fa-user"></i> Account</h3>
                        <div class="settings-item" onclick="app.editProfile()">
                            <div class="settings-info">
                                <div class="settings-label">Profile Information</div>
                                <div class="settings-description">Update your name, email, and preferences</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        
                        <div class="settings-item" onclick="app.changePassword()">
                            <div class="settings-info">
                                <div class="settings-label">Change Password</div>
                                <div class="settings-description">Update your password for security</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h3><i class="fas fa-bell"></i> Notifications</h3>
                        
                        <div class="settings-item">
                            <div class="settings-info">
                                <div class="settings-label">Push Notifications</div>
                                <div class="settings-description">Receive alerts for new deals and messages</div>
                            </div>
                            <div class="settings-action">
                                <label class="toggle-switch">
                                    <input type="checkbox" checked onchange="app.toggleNotifications(this.checked)">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="settings-item">
                            <div class="settings-info">
                                <div class="settings-label">Email Notifications</div>
                                <div class="settings-description">Get weekly deal summaries via email</div>
                            </div>
                            <div class="settings-action">
                                <label class="toggle-switch">
                                    <input type="checkbox" checked onchange="app.toggleEmailNotifications(this.checked)">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h3><i class="fas fa-paint-brush"></i> Appearance</h3>
                        
                        <div class="settings-item">
                            <div class="settings-info">
                                <div class="settings-label">Dark Mode</div>
                                <div class="settings-description">Switch between light and dark themes</div>
                            </div>
                            <div class="settings-action">
                                <label class="theme-switch">
                                    <input type="checkbox" ${this.theme === 'dark' ? 'checked' : ''} onchange="app.toggleTheme()">
                                    <span class="theme-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h3><i class="fas fa-shield-alt"></i> Privacy & Security</h3>
                        
                        <div class="settings-item" onclick="app.viewPrivacyPolicy()">
                            <div class="settings-info">
                                <div class="settings-label">Privacy Policy</div>
                                <div class="settings-description">How we protect and use your data</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        
                        <div class="settings-item" onclick="app.viewTerms()">
                            <div class="settings-info">
                                <div class="settings-label">Terms of Service</div>
                                <div class="settings-description">App usage terms and conditions</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h3><i class="fas fa-info-circle"></i> About</h3>
                        
                        <div class="settings-item" onclick="app.viewAbout()">
                            <div class="settings-info">
                                <div class="settings-label">About SaveMate</div>
                                <div class="settings-description">Learn more about our mission</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        
                        <div class="settings-item" onclick="app.contactSupport()">
                            <div class="settings-info">
                                <div class="settings-label">Contact Support</div>
                                <div class="settings-description">Get help with the app</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <div class="app-info">
                        <div class="app-version">SaveMate v1.0.0</div>
                        <div class="app-copyright">© 2024 Hunadi Digital. All rights reserved.</div>
                        <button class="btn btn-secondary" onclick="app.logout()" style="margin-top: 1rem;">
                            <i class="fas fa-sign-out-alt"></i> Sign Out
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Utility Methods
    getUserInitials() {
        return this.currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
    }

    getTotalListItems() {
        return this.shoppingLists.reduce((total, list) => total + list.items.length, 0);
    }

    // Feature Methods
    switchPage(page) {
        this.currentPage = page;
        this.renderApp();
    }

    toggleSaveDeal(dealId) {
        if (this.savedDeals.has(dealId)) {
            this.savedDeals.delete(dealId);
            this.showToast('Removed from saved deals');
        } else {
            this.savedDeals.add(dealId);
            this.showToast('Saved deal for later');
        }
        this.saveSavedDeals();
        this.renderApp();
    }

    addToList(dealId) {
        this.showToast('Added to shopping list');
    }

    showStore(storeId) {
        this.showToast(`Opening ${storeId}`);
    }

    showCategory(category) {
        this.showToast(`Browsing ${category}`);
    }

    createPost() {
        const input = document.getElementById('postInput');
        const content = input?.value.trim();
        
        if (!content) {
            this.showToast('Please enter some content');
            return;
        }

        const newPost = {
            id: Date.now().toString(),
            user: 'You',
            avatar: this.getUserInitials(),
            content: content,
            time: 'Just now',
            likes: 0,
            comments: 0,
            shares: 0,
            liked: false
        };

        this.posts.unshift(newPost);
        this.savePosts();
        input.value = '';
        this.showToast('Post shared successfully!');
        this.renderApp();
    }

    likePost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
            this.savePosts();
            this.renderApp();
        }
    }

    commentOnPost(postId) {
        this.showToast('Comment feature coming soon!');
    }

    sharePost(postId) {
        this.showToast('Share feature coming soon!');
    }

    startScanner() {
        this.showToast('Barcode scanner activated!');
    }

    createNewList() {
        this.showToast('New list created');
    }

    removeFromList(itemId) {
        this.showToast('Item removed from list');
    }

    editProfile() {
        this.showToast('Edit profile feature coming soon!');
    }

    changePassword() {
        this.showToast('Change password feature coming soon!');
    }

    viewPrivacyPolicy() {
        this.showToast('Privacy policy displayed');
    }

    viewTerms() {
        this.showToast('Terms of service displayed');
    }

    viewAbout() {
        this.showToast('About SaveMate displayed');
    }

    contactSupport() {
        this.showToast('Contact support feature');
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.saveTheme(this.theme);
        this.showToast(this.theme === 'dark' ? '🌙 Dark mode activated' : '☀️ Light mode activated');
        this.renderApp();
    }

    toggleNotifications(enabled) {
        this.showToast(enabled ? '🔔 Notifications enabled' : '🔕 Notifications disabled');
    }

    toggleEmailNotifications(enabled) {
        this.showToast(enabled ? '📧 Email notifications enabled' : '📧 Email notifications disabled');
    }

    logout() {
        if (confirm('Are you sure you want to sign out?')) {
            this.currentUser = null;
            this.saveUser(null);
            this.showToast('Signed out successfully');
            this.renderApp();
        }
    }

    // Toast System
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

        // Remove after duration
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, duration);
    }
}

// Initialize the app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SaveMateApp();
    window.app = app;
});