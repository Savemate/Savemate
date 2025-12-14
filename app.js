// SaveMate - Complete Shopping & Social App with Black Market
class SaveMateApp {
    constructor() {
        this.currentUser = this.loadUser();
        this.currentPage = 'home';
        this.savedDeals = new Set(this.loadSavedDeals());
        this.shoppingLists = this.loadShoppingLists();
        this.posts = this.loadPosts();
        this.notifications = this.loadNotifications();
        this.theme = this.loadTheme();
        this.users = this.loadUsers();
        this.followers = this.loadFollowers();
        this.blackMarketPosts = this.loadBlackMarketPosts();
        this.currentMedia = null;
        this.currentUniverseMedia = null;
        this.bmCurrentMedia = null;
        this.bmCurrentPage = 'take'; // 'take' or 'offer'
        this.bmCurrentCategory = 'all';
        this.bmSearchQuery = '';
        this.init();
    }

    // Data Management Methods
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
                    { id: '2', title: "Ouma Rusks Buttermilk 500g", store: "Pick n Pay", price: 52.99, quantity: 1 }
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
                store: "Checkers",
                userId: "2"
            }
        ];
    }

    savePosts() {
        localStorage.setItem('savemate-posts', JSON.stringify(this.posts));
    }

    loadNotifications() {
        return JSON.parse(localStorage.getItem('savemate-notifications')) || [
            { id: '1', type: 'deal', message: 'New Checkers specials available!', time: '5 min ago', read: false }
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

    loadUsers() {
        return JSON.parse(localStorage.getItem('savemate-users')) || [
            {
                id: '1',
                name: 'SaveMate User',
                email: 'demo@user.com',
                avatar: 'SU',
                bio: 'SaveMate enthusiast finding the best deals across South Africa! 🇿🇦',
                coverPhoto: '',
                storage: 'empty',
                location: 'Johannesburg',
                joined: '2024-01-15'
            },
            {
                id: '2',
                name: 'DealHunterSA',
                email: 'deals@example.com',
                avatar: 'DH',
                bio: 'Professional deal hunter • Saving Mzansi one deal at a time! 💰',
                coverPhoto: '',
                storage: 'occupied',
                location: 'Cape Town',
                joined: '2023-11-20'
            }
        ];
    }

    saveUsers() {
        localStorage.setItem('savemate-users', JSON.stringify(this.users));
    }

    loadFollowers() {
        return JSON.parse(localStorage.getItem('savemate-followers')) || {
            '1': {
                following: ['2'],
                followers: ['2']
            },
            '2': {
                following: ['1'],
                followers: ['1']
            }
        };
    }

    saveFollowers() {
        localStorage.setItem('savemate-followers', JSON.stringify(this.followers));
    }

    loadBlackMarketPosts() {
        return JSON.parse(localStorage.getItem('savemate-blackmarket-posts')) || [
            {
                id: '1',
                userId: '2',
                user: 'DealHunterSA',
                avatar: 'DH',
                type: 'item',
                title: 'Gaming Console PS5',
                price: 6500,
                category: 'Electronics',
                description: 'Hardly used, comes with 2 controllers and 3 games. Perfect condition. No issues.',
                location: 'Cape Town',
                contact: 'deals@example.com',
                time: '2 days ago',
                likes: 8,
                comments: 3,
                shares: 1,
                liked: false,
                image: ''
            },
            {
                id: '2',
                userId: '1',
                user: 'SaveMate User',
                avatar: 'SU',
                type: 'service',
                title: 'Web Development Services',
                price: 150,
                category: 'Services',
                description: 'Professional web development services. Frontend, backend, and full-stack development. HTML, CSS, JavaScript, React, Node.js.',
                location: 'Johannesburg',
                contact: 'demo@user.com',
                time: '1 day ago',
                likes: 12,
                comments: 5,
                shares: 2,
                liked: true,
                image: ''
            },
            {
                id: '3',
                userId: '2',
                user: 'DealHunterSA',
                avatar: 'DH',
                type: 'job',
                title: 'Part-time Delivery Driver',
                price: 25,
                category: 'Jobs',
                description: 'Looking for reliable delivery drivers for evening shifts. Own vehicle required. Flexible hours, good pay.',
                location: 'Cape Town',
                contact: 'deals@example.com',
                time: '3 hours ago',
                likes: 5,
                comments: 2,
                shares: 0,
                liked: false,
                image: ''
            }
        ];
    }

    saveBlackMarketPosts() {
        localStorage.setItem('savemate-blackmarket-posts', JSON.stringify(this.blackMarketPosts));
    }

    // Utility Methods
    getUserStorageStatus(userId) {
        const userItems = this.blackMarketPosts.filter(post => post.userId === userId && post.type === 'item');
        return userItems.length > 0 ? 'occupied' : 'empty';
    }

    updateUserStorageStatus(userId) {
        const userIndex = this.users.findIndex(u => u.id === userId);
        if (userIndex > -1) {
            this.users[userIndex].storage = this.getUserStorageStatus(userId);
            this.saveUsers();
        }
    }

    getUserInitials() {
        return this.currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }

    getUnreadNotifications() {
        return this.notifications.filter(n => !n.read).length;
    }

    // App Initialization
    init() {
        this.applyTheme(this.theme);
        this.renderApp();
        this.showToast('🚀 SaveMate loaded successfully! Welcome!');
    }

    renderApp() {
        const app = document.getElementById('app');
        
        if (!this.currentUser) {
            app.innerHTML = this.renderAuthPage();
            this.bindAuthEvents();
            return;
        }

        // Check if we're in Black Market mode
        if (this.currentPage === 'black-market') {
            document.body.classList.add('black-market-mode');
            app.innerHTML = this.renderBlackMarketPage();
        } else {
            document.body.classList.remove('black-market-mode');
            app.innerHTML = this.renderMainApp();
        }
    }

    // Authentication
    renderAuthPage() {
        return `
            <div class="auth-container">
                <div class="auth-card">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <div style="font-size: 3rem; color: #F4C000; margin-bottom: 1rem;">🛍️</div>
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

        // Demo authentication
        this.currentUser = {
            id: '1',
            name: 'SaveMate User',
            email: email,
            avatar: 'SU'
        };
        
        this.saveUser(this.currentUser);
        this.showToast('🎉 Welcome to SaveMate! Start exploring deals.');
        this.renderApp();
    }

    handleSignup() {
        this.currentUser = {
            id: Date.now().toString(),
            name: 'New SaveMate User',
            email: 'new@user.com',
            avatar: 'NU'
        };
        
        this.saveUser(this.currentUser);
        this.showToast('🛍️ Welcome to SaveMate! Your account has been created.');
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

    renderCurrentPage() {
        const pages = {
            'home': this.renderHomePage(),
            'explore': this.renderExplorePage(),
            'universe': this.renderUniversePage(),
            'scanner': this.renderScannerPage(),
            'shopping-list': this.renderShoppingListPage(),
            'profile': this.renderProfilePage(),
            'notifications': this.renderNotificationsPage(),
            'settings': this.renderSettingsPage(),
            'black-market': this.renderBlackMarketPage()
        };

        return pages[this.currentPage] || this.renderHomePage();
    }

    // Page Renderers
    renderHomePage() {
        const deals = [
            {
                id: '1',
                title: "Tastic Rice 5kg",
                current_price: 105.99,
                original_price: 129.99,
                store: "Checkers",
                badge: "SAVE R24",
                color: "#E31B23",
                icon: "fas fa-shopping-cart"
            },
            {
                id: '2',
                title: "Ouma Rusks Buttermilk 500g",
                current_price: 52.99,
                original_price: 59.99,
                store: "Pick n Pay",
                badge: "POPULAR",
                color: "#0055A4",
                icon: "fas fa-cookie-bite"
            }
        ];

        return `
            <div class="page active">
                <div class="welcome-banner">
                    <h2>Hello, ${this.currentUser.name.split(' ')[0]}! 👋</h2>
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
                        <div class="deal-card" onclick="app.showDealDetail('${deal.id}')">
                            <div class="deal-image" style="background: ${deal.color}; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem;">
                                <i class="${deal.icon}" style="font-size: 2.5rem;"></i>
                                <div style="font-size: 1rem; font-weight: 600;">${deal.badge}</div>
                            </div>
                            <div class="deal-content">
                                <div class="deal-title">${deal.title}</div>
                                <div class="deal-store">
                                    <i class="fas fa-store"></i>
                                    <span>${deal.store}</span>
                                </div>
                                <div class="deal-price">
                                    R${deal.current_price.toFixed(2)}
                                    <span class="deal-original-price">R${deal.original_price.toFixed(2)}</span>
                                </div>
                                <div class="deal-actions">
                                    <button class="deal-btn" onclick="app.toggleSaveDeal('${deal.id}', event)">
                                        <i class="fas ${this.savedDeals.has(deal.id) ? 'fa-heart' : 'fa-heart'}"></i>
                                        ${this.savedDeals.has(deal.id) ? 'Saved' : 'Save'}
                                    </button>
                                    <button class="deal-btn primary" onclick="app.addToList('${deal.id}', event)">
                                        <i class="fas fa-list"></i>
                                        Add to List
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderExplorePage() {
        return `
            <div class="page active">
                <h2 class="section-title">
                    <i class="fas fa-compass"></i>
                    Explore Categories
                </h2>
                <div class="categories">
                    ${['Groceries', 'Electronics', 'Fashion', 'Home & Garden'].map(cat => `
                        <div class="category" onclick="app.showCategory('${cat}')">
                            <i class="fas fa-${cat === 'Groceries' ? 'shopping-basket' : cat === 'Electronics' ? 'laptop' : cat === 'Fashion' ? 'tshirt' : 'home'}"></i>
                            <span>${cat}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderUniversePage() {
        return `
            <div class="page active">
                <div class="universe-header">
                    <i class="fas fa-users"></i> SHOPPING UNIVERSE
                </div>
                
                <div class="post-creator">
                    <div class="post-input-container">
                        <div class="post-avatar">${this.getUserInitials()}</div>
                        <input type="text" class="post-input" id="universePostInput" placeholder="Share a deal or shopping tip...">
                        <button class="header-btn" onclick="app.createUniversePost()">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>

                <div id="universePostsContainer">
                    ${this.posts.map(post => this.renderPost(post)).join('')}
                </div>
            </div>
        `;
    }

    renderScannerPage() {
        return `
            <div class="page active">
                <h2 class="section-title">
                    <i class="fas fa-camera"></i>
                    Barcode Scanner
                </h2>
                
                <div class="scanner-container">
                    <div class="scanner-placeholder">
                        <i class="fas fa-camera" style="font-size: 4rem; margin-bottom: 1rem; color: #F4C000;"></i>
                        <div style="font-size: 1.1rem; font-weight: 500; color: var(--text-primary);">Point camera at barcode</div>
                    </div>
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
                    <h3>
                        <i class="fas fa-shopping-basket"></i>
                        Weekly Groceries
                    </h3>
                    ${this.shoppingLists[0].items.map(item => `
                        <div class="list-item">
                            <input type="checkbox" style="margin-right: 1rem; width: 1.25rem; height: 1.25rem;">
                            <div style="flex: 1;">
                                <div style="font-weight: 500; color: var(--text-primary);">${item.title}</div>
                                <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                    ${item.store} • R${item.price.toFixed(2)} • Qty: ${item.quantity}
                                </div>
                            </div>
                            <button class="header-btn" onclick="app.removeFromList('${item.id}')">
                                <i class="fas fa-trash" style="color: var(--danger-color);"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderProfilePage() {
        const user = this.users.find(u => u.id === this.currentUser.id);
        const userFollowers = this.followers[this.currentUser.id] || { following: [], followers: [] };
        const userPosts = this.posts.filter(post => post.userId === this.currentUser.id);
        const storageStatus = this.getUserStorageStatus(this.currentUser.id);

        return `
            <div class="page active">
                <div class="profile-container">
                    <div class="profile-header">
                        <div class="cover-photo" id="coverPhoto" style="background: linear-gradient(135deg, var(--primary-navy) 0%, var(--dark-navy) 100%);">
                            <button class="cover-edit-btn" onclick="app.editCoverPhoto()">
                                <i class="fas fa-camera"></i> Edit Cover
                            </button>
                        </div>
                        <div class="profile-avatar-container">
                            <div class="profile-avatar" id="profileAvatar">
                                ${user.avatar}
                            </div>
                            <button class="avatar-edit-btn" onclick="app.editProfilePicture()">
                                <i class="fas fa-camera"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="profile-info">
                        <h2>${user.name}</h2>
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.5;">
                            ${user.bio}
                        </p>
                        
                        <!-- Storage Indicator -->
                        <div class="storage-indicator" onclick="app.openBlackMarket()">
                            <div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--surface-color); border-radius: 0.75rem; border: 1px solid var(--border-color);">
                                <div style="width: 40px; height: 40px; border-radius: 50%; background: ${storageStatus === 'occupied' ? 'var(--success-color)' : 'var(--text-muted)'}; display: flex; align-items: center; justify-content: center; color: white;">
                                    <i class="fas ${storageStatus === 'occupied' ? 'fa-box-open' : 'fa-box'}"></i>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500; color: var(--text-primary);">Storage</div>
                                    <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                        ${storageStatus === 'occupied' ? 'Items listed in Black Market' : 'No items in Black Market'}
                                        <span style="color: var(--accent-color);"> • Tap to open Black Market</span>
                                    </div>
                                </div>
                                <div style="color: ${storageStatus === 'occupied' ? 'var(--success-color)' : 'var(--text-muted)'}; font-weight: 600;">
                                    ${storageStatus === 'occupied' ? '● Occupied' : '○ Empty'}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Stats -->
                        <div class="profile-stats">
                            <div class="stat">
                                <div class="stat-value">${userPosts.length}</div>
                                <div class="stat-label">Posts</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${userFollowers.followers.length}</div>
                                <div class="stat-label">Followers</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${userFollowers.following.length}</div>
                                <div class="stat-label">Following</div>
                            </div>
                        </div>
                        
                        <button class="btn btn-primary" onclick="app.editProfile()">
                            <i class="fas fa-edit"></i> Edit Profile
                        </button>
                    </div>
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
                        <div class="list-item" onclick="app.markNotificationRead('${notif.id}')">
                            <div style="flex: 1;">
                                <div style="font-weight: 500; color: var(--text-primary);">${notif.message}</div>
                                <div style="font-size: 0.875rem; color: var(--text-secondary);">
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
        const userItems = this.blackMarketPosts.filter(post => post.userId === this.currentUser.id && post.type === 'item');
        const storageStatus = this.getUserStorageStatus(this.currentUser.id);
        
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
                    </div>

                    <!-- Black Market Section in Settings -->
                    <div class="settings-section">
                        <h3><i class="fas fa-store-alt"></i> Black Market</h3>
                        
                        <div class="settings-item" onclick="app.openBlackMarket()">
                            <div class="settings-info">
                                <div class="settings-label">Open Black Market</div>
                                <div class="settings-description">
                                    Buy, sell, offer services • Independent marketplace
                                    <span style="color: ${storageStatus === 'occupied' ? 'var(--success-color)' : 'var(--text-muted)'};">
                                        ${storageStatus === 'occupied' ? '● Occupied' : '○ Empty'}
                                    </span>
                                </div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-external-link-alt" style="color: var(--bm-orange);"></i>
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

    // ===========================================
    // BLACK MARKET PAGE
    // ===========================================
    
    renderBlackMarketPage() {
        // Apply Black Market theme
        this.applyTheme('black-market');
        
        // Filter posts based on category and search
        let filteredPosts = [...this.blackMarketPosts];
        
        if (this.bmCurrentCategory !== 'all') {
            filteredPosts = filteredPosts.filter(post => post.category === this.bmCurrentCategory);
        }
        
        if (this.bmSearchQuery) {
            const query = this.bmSearchQuery.toLowerCase();
            filteredPosts = filteredPosts.filter(post => 
                post.title.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query) ||
                post.location.toLowerCase().includes(query)
            );
        }
        
        // Sort by time (newest first)
        filteredPosts.sort((a, b) => this.getTimeValue(b.time) - this.getTimeValue(a.time));
        
        return `
            <div class="black-market-page page active">
                <!-- Black Market Header -->
                <div class="black-market-header">
                    <div class="logo" onclick="app.exitBlackMarket()">
                        <i class="fas fa-store-alt"></i>
                        <span>BLACK MARKET</span>
                    </div>
                    <button class="header-btn" onclick="app.exitBlackMarket()" title="Exit Black Market">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <!-- Black Market Nav -->
                <div class="black-market-nav">
                    <button class="black-market-nav-btn ${this.bmCurrentPage === 'take' ? 'active' : ''}" onclick="app.setBMPage('take')">
                        <i class="fas fa-hand-holding"></i> TAKE
                    </button>
                    <button class="black-market-nav-btn ${this.bmCurrentPage === 'offer' ? 'active' : ''}" onclick="app.setBMPage('offer')">
                        <i class="fas fa-hand-holding-heart"></i> OFFER
                    </button>
                </div>

                <!-- Search Box -->
                <div class="bm-search-container">
                    <div class="bm-search-box">
                        <input type="text" placeholder="Search Black Market..." value="${this.bmSearchQuery}" oninput="app.bmSearch(this.value)">
                        <button class="bm-search-btn" onclick="app.bmSearch(document.querySelector('.bm-search-box input').value)">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>

                ${this.bmCurrentPage === 'take' ? this.renderBMTakePage(filteredPosts) : this.renderBMOfferPage()}

                <!-- Disclaimer -->
                <div class="black-market-disclaimer">
                    <h4><i class="fas fa-exclamation-triangle"></i> IMPORTANT NOTICE</h4>
                    <p>Black Market operates independently from SaveMate. All transactions are between users. SaveMate is not responsible for any issues that may arise. Exercise caution and use good judgment when engaging with other users.</p>
                </div>

                <!-- Footer -->
                <div class="black-market-footer">
                    <p>© 2024 Black Market • Independent Marketplace</p>
                </div>
            </div>
        `;
    }

    renderBMTakePage(posts) {
        const categories = ['all', 'Electronics', 'Furniture', 'Clothing', 'Services', 'Jobs', 'Vehicles', 'Other'];
        
        return `
            <!-- Categories -->
            <div class="bm-categories">
                ${categories.map(cat => `
                    <div class="bm-category ${this.bmCurrentCategory === cat ? 'active' : ''}" onclick="app.setBMCategory('${cat}')">
                        ${cat === 'all' ? 'All Items' : cat}
                    </div>
                `).join('')}
            </div>

            <!-- Posts Grid -->
            <div style="padding: 0 1rem;">
                ${posts.length > 0 ? 
                    posts.map(post => this.renderBMPost(post)).join('') :
                    '<div class="empty-state"><i class="fas fa-search"></i><p>No listings found. Try a different search or category.</p></div>'
                }
            </div>
        `;
    }

    renderBMOfferPage() {
        return `
            <!-- Offer Form -->
            <div class="bm-post-creator">
                <h3 style="color: var(--bm-orange); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-plus-circle"></i> Create Listing
                </h3>

                <!-- Type Selector -->
                <div class="bm-post-type-selector" id="bmTypeSelector">
                    <button class="bm-type-btn" onclick="app.setBMType('item')" id="bmTypeItem">
                        <i class="fas fa-box"></i> Sell Item
                    </button>
                    <button class="bm-type-btn" onclick="app.setBMType('service')" id="bmTypeService">
                        <i class="fas fa-tools"></i> Offer Service
                    </button>
                    <button class="bm-type-btn" onclick="app.setBMType('job')" id="bmTypeJob">
                        <i class="fas fa-briefcase"></i> Post Job
                    </button>
                </div>

                <!-- Form -->
                <div class="bm-form-group">
                    <label for="bmTitle">Title *</label>
                    <input type="text" id="bmTitle" class="bm-form-control" placeholder="What are you offering?">
                </div>

                <div class="bm-form-group">
                    <label for="bmPrice">${this.bmCurrentType === 'job' ? 'Hourly Rate (R)' : 'Price (R)'} *</label>
                    <input type="number" id="bmPrice" class="bm-form-control" placeholder="0.00" step="0.01">
                </div>

                <div class="bm-form-group">
                    <label for="bmCategory">Category *</label>
                    <select id="bmCategory" class="bm-form-control">
                        ${this.getBMCategories().map(cat => `
                            <option value="${cat}">${cat}</option>
                        `).join('')}
                    </select>
                </div>

                <div class="bm-form-group">
                    <label for="bmDescription">Description *</label>
                    <textarea id="bmDescription" class="bm-form-control" rows="4" placeholder="Describe what you're offering in detail..."></textarea>
                </div>

                <div class="bm-form-group">
                    <label for="bmLocation">Location *</label>
                    <input type="text" id="bmLocation" class="bm-form-control" placeholder="City or area">
                </div>

                <div class="bm-form-group">
                    <label for="bmContact">Contact Info *</label>
                    <input type="text" id="bmContact" class="bm-form-control" placeholder="Email or phone number" value="${this.currentUser.email}">
                </div>

                <!-- Image Upload -->
                <div class="bm-form-group">
                    <label>Image (Optional)</label>
                    <input type="file" id="bmImageUpload" accept="image/*" style="display: none;" onchange="app.handleBMImageUpload(event)">
                    <button class="btn btn-secondary" onclick="document.getElementById('bmImageUpload').click()" style="width: 100%;">
                        <i class="fas fa-image"></i> Upload Image
                    </button>
                    <div id="bmImagePreview" style="margin-top: 1rem;"></div>
                </div>

                <!-- Submit Button -->
                <button class="btn btn-primary" onclick="app.createBMListing()" style="width: 100%;">
                    <i class="fas fa-rocket"></i> POST TO BLACK MARKET
                </button>
            </div>

            <!-- My Listings -->
            <div style="padding: 1rem;">
                <h3 style="color: var(--text-primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-list"></i> My Listings
                </h3>
                
                ${this.renderBMUserListings()}
            </div>
        `;
    }

    getBMCategories() {
        switch(this.bmCurrentType) {
            case 'item':
                return ['Electronics', 'Furniture', 'Clothing', 'Home & Garden', 'Vehicles', 'Sports', 'Other'];
            case 'service':
                return ['Services', 'Consulting', 'Repair', 'Creative', 'Transport', 'Other'];
            case 'job':
                return ['Jobs', 'Full-time', 'Part-time', 'Freelance', 'Internship', 'Other'];
            default:
                return ['Electronics', 'Furniture', 'Clothing', 'Services', 'Jobs', 'Other'];
        }
    }

    renderBMPost(post) {
        const typeIcon = {
            'item': 'fas fa-box',
            'service': 'fas fa-tools',
            'job': 'fas fa-briefcase'
        }[post.type] || 'fas fa-question';
        
        const typeColor = {
            'item': '#FF6B00',
            'service': '#00B894',
            'job': '#0984E3'
        }[post.type] || '#6C5CE7';

        return `
            <div class="bm-post-card">
                <div class="bm-post-type" style="background: ${typeColor}">
                    <i class="${typeIcon}"></i> ${post.type.toUpperCase()}
                </div>
                
                <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">${post.title}</h3>
                
                <div class="bm-post-price">
                    R${post.price} ${post.type === 'job' ? '/hour' : ''}
                </div>
                
                <div class="bm-post-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${post.location}</span>
                    <span style="margin-left: auto; color: var(--text-muted); font-size: 0.75rem;">
                        ${post.time}
                    </span>
                </div>
                
                <div class="bm-post-location">
                    <i class="fas fa-tag"></i>
                    <span>${post.category}</span>
                </div>
                
                <div class="bm-post-description">
                    ${post.description}
                </div>
                
                ${post.image ? `
                    <div class="bm-image-preview">
                        <img src="${post.image}" alt="${post.title}">
                    </div>
                ` : ''}
                
                <!-- Seller Info -->
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--bm-medium-gray);">
                    <div class="post-avatar">${post.avatar}</div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; color: var(--text-primary);">${post.user}</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary);">Contact: ${post.contact}</div>
                    </div>
                </div>
                
                <!-- Actions -->
                <div class="bm-post-actions">
                    <div class="bm-post-action ${post.liked ? 'active' : ''}" onclick="app.bmLikePost('${post.id}')">
                        <i class="fas fa-heart"></i>
                        <span>${post.likes}</span>
                    </div>
                    <div class="bm-post-action" onclick="app.bmCommentOnPost('${post.id}')">
                        <i class="fas fa-comment"></i>
                        <span>${post.comments}</span>
                    </div>
                    <div class="bm-post-action" onclick="app.bmSharePost('${post.id}')">
                        <i class="fas fa-share"></i>
                        <span>${post.shares}</span>
                    </div>
                    <button class="btn btn-primary" onclick="app.bmContactSeller('${post.id}')" style="margin-left: auto; padding: 0.25rem 1rem; font-size: 0.875rem;">
                        <i class="fas fa-envelope"></i> Contact
                    </button>
                </div>
            </div>
        `;
    }

    renderBMUserListings() {
        const userListings = this.blackMarketPosts.filter(post => post.userId === this.currentUser.id);
        
        if (userListings.length === 0) {
            return '<div class="empty-state"><i class="fas fa-box-open"></i><p>You haven\'t posted anything yet</p></div>';
        }
        
        return userListings.map(post => `
            <div class="list-item" style="margin-bottom: 0.5rem;">
                <div style="flex: 1;">
                    <div style="font-weight: 500; color: var(--text-primary);">${post.title}</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">
                        R${post.price} • ${post.category} • ${post.time}
                    </div>
                </div>
                <div style="display: flex; gap: 0.25rem;">
                    <button class="header-btn" onclick="app.editBMListing('${post.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="header-btn" onclick="app.deleteBMListing('${post.id}')">
                        <i class="fas fa-trash" style="color: var(--danger-color);"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Black Market Methods
    openBlackMarket() {
        this.bmCurrentPage = 'take';
        this.bmCurrentCategory = 'all';
        this.bmSearchQuery = '';
        this.bmCurrentType = 'item'; // Default type
        this.switchPage('black-market');
    }

    exitBlackMarket() {
        this.applyTheme(this.theme); // Restore original theme
        this.switchPage('home');
    }

    setBMPage(page) {
        this.bmCurrentPage = page;
        this.bmCurrentType = 'item'; // Reset to default type
        this.renderApp();
    }

    setBMCategory(category) {
        this.bmCurrentCategory = category;
        this.renderApp();
    }

    setBMType(type) {
        this.bmCurrentType = type;
        
        // Update button states
        const buttons = ['item', 'service', 'job'];
        buttons.forEach(btnType => {
            const btn = document.getElementById(`bmType${btnType.charAt(0).toUpperCase() + btnType.slice(1)}`);
            if (btn) {
                btn.classList.toggle('active', btnType === type);
            }
        });
        
        // Update category dropdown
        const categorySelect = document.getElementById('bmCategory');
        if (categorySelect) {
            const currentValue = categorySelect.value;
            categorySelect.innerHTML = this.getBMCategories().map(cat => `
                <option value="${cat}" ${cat === currentValue ? 'selected' : ''}>${cat}</option>
            `).join('');
        }
    }

    bmSearch(query) {
        this.bmSearchQuery = query;
        this.renderApp();
    }

    handleBMImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.bmCurrentMedia = e.target.result;
                const preview = document.getElementById('bmImagePreview');
                preview.innerHTML = `
                    <div class="bm-image-preview">
                        <img src="${e.target.result}" alt="Preview">
                        <button class="bm-remove-image" onclick="app.removeBMImagePreview()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
            };
            reader.readAsDataURL(file);
        }
    }

    removeBMImagePreview() {
        this.bmCurrentMedia = null;
        const preview = document.getElementById('bmImagePreview');
        preview.innerHTML = '';
        document.getElementById('bmImageUpload').value = '';
    }

    createBMListing() {
        const title = document.getElementById('bmTitle')?.value.trim();
        const price = parseFloat(document.getElementById('bmPrice')?.value);
        const category = document.getElementById('bmCategory')?.value;
        const description = document.getElementById('bmDescription')?.value.trim();
        const location = document.getElementById('bmLocation')?.value.trim();
        const contact = document.getElementById('bmContact')?.value.trim();
        
        if (!title || isNaN(price) || !category || !description || !location || !contact) {
            this.showToast('Please fill in all required fields');
            return;
        }
        
        const newPost = {
            id: Date.now().toString(),
            userId: this.currentUser.id,
            user: this.currentUser.name,
            avatar: this.getUserInitials(),
            type: this.bmCurrentType || 'item',
            title: title,
            price: price,
            category: category,
            description: description,
            location: location,
            contact: contact,
            time: 'Just now',
            likes: 0,
            comments: 0,
            shares: 0,
            liked: false,
            image: this.bmCurrentMedia || ''
        };
        
        this.blackMarketPosts.unshift(newPost);
        this.saveBlackMarketPosts();
        
        // Update storage status if it's an item
        if (this.bmCurrentType === 'item') {
            this.updateUserStorageStatus(this.currentUser.id);
        }
        
        // Clear form
        document.getElementById('bmTitle').value = '';
        document.getElementById('bmPrice').value = '';
        document.getElementById('bmDescription').value = '';
        document.getElementById('bmLocation').value = '';
        document.getElementById('bmContact').value = this.currentUser.email;
        this.removeBMImagePreview();
        
        // Switch to Take page to see the new listing
        this.bmCurrentPage = 'take';
        this.bmCurrentCategory = 'all';
        
        this.showToast('Listing posted to Black Market!', 3000);
        this.renderApp();
    }

    editBMListing(postId) {
        const post = this.blackMarketPosts.find(p => p.id === postId);
        if (!post) return;
        
        // For now, just show a simple edit modal
        const newTitle = prompt('Edit title:', post.title);
        if (newTitle) {
            const newPrice = prompt('Edit price:', post.price);
            if (newPrice && !isNaN(parseFloat(newPrice))) {
                post.title = newTitle;
                post.price = parseFloat(newPrice);
                this.saveBlackMarketPosts();
                this.showToast('Listing updated!');
                this.renderApp();
            }
        }
    }

    deleteBMListing(postId) {
        if (confirm('Are you sure you want to delete this listing?')) {
            const postIndex = this.blackMarketPosts.findIndex(p => p.id === postId);
            if (postIndex > -1) {
                this.blackMarketPosts.splice(postIndex, 1);
                this.saveBlackMarketPosts();
                
                // Update storage status if it was an item
                if (this.blackMarketPosts[postIndex]?.type === 'item') {
                    this.updateUserStorageStatus(this.currentUser.id);
                }
                
                this.showToast('Listing deleted');
                this.renderApp();
            }
        }
    }

    bmLikePost(postId) {
        const post = this.blackMarketPosts.find(p => p.id === postId);
        if (post) {
            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
            this.saveBlackMarketPosts();
            this.renderApp();
        }
    }

    bmCommentOnPost(postId) {
        this.showToast('Comment feature coming soon!');
    }

    bmSharePost(postId) {
        this.showToast('Share feature coming soon!');
    }

    bmContactSeller(postId) {
        const post = this.blackMarketPosts.find(p => p.id === postId);
        if (post) {
            this.showToast(`Contacting ${post.user}...`);
            // In a real app, this would open a chat or email
        }
    }

    saveBlackMarketPosts() {
        localStorage.setItem('savemate-blackmarket-posts', JSON.stringify(this.blackMarketPosts));
    }

    // Utility Methods for Black Market
    getTimeValue(timeString) {
        if (timeString.includes('Just now')) return Date.now();
        if (timeString.includes('min')) return Date.now() - parseInt(timeString) * 60 * 1000;
        if (timeString.includes('hour')) return Date.now() - parseInt(timeString) * 60 * 60 * 1000;
        if (timeString.includes('day')) return Date.now() - parseInt(timeString) * 24 * 60 * 60 * 1000;
        return Date.now();
    }

    // Core Functionality
    switchPage(page) {
        this.currentPage = page;
        this.renderApp();
    }

    // Other Methods (existing SaveMate functionality)
    renderPost(post) {
        const user = this.users.find(u => u.id === post.userId) || { name: post.user, avatar: post.avatar };
        return `
            <div class="post-card">
                <div class="post-header">
                    <div class="post-avatar">${user.avatar}</div>
                    <div>
                        <div class="post-user">${user.name}</div>
                        <div class="post-time">${post.time} • ${post.store}</div>
                    </div>
                </div>
                <div class="post-content">${post.content}</div>
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

    createUniversePost() {
        const input = document.getElementById('universePostInput');
        const content = input?.value.trim();
        
        if (!content) {
            this.showToast('Please enter some content');
            return;
        }

        const newPost = {
            id: Date.now().toString(),
            user: this.currentUser.name,
            avatar: this.getUserInitials(),
            content: content,
            image: '',
            time: 'Just now',
            likes: 0,
            comments: 0,
            shares: 0,
            liked: false,
            store: 'General',
            userId: this.currentUser.id
        };

        this.posts.unshift(newPost);
        this.savePosts();
        
        input.value = '';
        this.showToast('Post shared to Universe!');
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

    editProfilePicture() {
        this.showToast('Profile picture edit coming soon!');
    }

    editCoverPhoto() {
        this.showToast('Cover photo edit coming soon!');
    }

    editProfile() {
        const user = this.users.find(u => u.id === this.currentUser.id);
        const newName = prompt('Enter your name:', user.name);
        if (newName && newName.trim()) {
            user.name = newName.trim();
            user.avatar = this.getUserInitials();
            this.saveUsers();
            this.showToast('Profile updated!');
            this.renderApp();
        }
    }

    toggleSaveDeal(dealId, event) {
        event.stopPropagation();
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

    addToList(dealId, event) {
        event.stopPropagation();
        this.showToast('Added to shopping list');
    }

    showDealDetail(dealId) {
        this.showToast(`Showing details for deal ${dealId}`);
    }

    showCategory(category) {
        this.showToast(`Browsing ${category} category`);
    }

    commentOnPost(postId) {
        this.showToast('Comment feature coming soon!');
    }

    sharePost(postId) {
        this.showToast('Share feature coming soon!');
    }

    startScanner() {
        this.showToast('Barcode scanner activated! Demo mode.');
    }

    removeFromList(itemId) {
        this.showToast('Item removed from list');
    }

    markNotificationRead(notificationId) {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification && !notification.read) {
            notification.read = true;
            this.saveNotifications();
            this.renderApp();
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.saveTheme(this.theme);
        this.showToast(this.theme === 'dark' ? '🌙 Dark mode activated' : '☀️ Light mode activated');
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