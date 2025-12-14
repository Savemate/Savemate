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
        this.users = this.loadUsers();
        this.followers = this.loadFollowers();
        this.blackMarketItems = this.loadBlackMarketItems();
        this.currentMedia = null;
        this.currentUniverseMedia = null;
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
                    { id: '2', title: "Ouma Rusks Buttermilk 500g", store: "Pick n Pay", price: 52.99, quantity: 1 },
                    { id: '3', title: "Five Roses Tea 100s", store: "Woolworths", price: 35.50, quantity: 2 },
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
                store: "Checkers",
                userId: "2"
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
                store: "Woolworths",
                userId: "3"
            },
            {
                id: '3',
                user: "GroceryGuruJHB",
                avatar: "GG",
                content: "Spar is running a buy-one-get-one-free on frozen veggies. Stock up while it lasts! 🥦 #SmartShopping",
                image: "",
                time: "1 day ago",
                likes: 38,
                comments: 15,
                shares: 7,
                liked: false,
                store: "Spar",
                userId: "4"
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
            { id: '3', type: 'system', message: 'Welcome to SaveMate! Start exploring deals', time: '2 hours ago', read: true },
            { id: '4', type: 'alert', message: 'Price drop on Tastic Rice at Pick n Pay', time: '3 hours ago', read: false }
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
            },
            {
                id: '3',
                name: 'BudgetShopperCT',
                email: 'budget@example.com',
                avatar: 'BS',
                bio: 'Mom of 3 • Master of budget shopping • Sharing tips daily 👶🛒',
                coverPhoto: '',
                storage: 'occupied',
                location: 'Durban',
                joined: '2024-02-10'
            },
            {
                id: '4',
                name: 'GroceryGuruJHB',
                email: 'grocery@example.com',
                avatar: 'GG',
                bio: 'Food expert • Finding quality deals • Healthy living advocate 🥦',
                coverPhoto: '',
                storage: 'empty',
                location: 'Johannesburg',
                joined: '2024-01-05'
            }
        ];
    }

    saveUsers() {
        localStorage.setItem('savemate-users', JSON.stringify(this.users));
    }

    loadFollowers() {
        return JSON.parse(localStorage.getItem('savemate-followers')) || {
            '1': {
                following: ['2', '3'],
                followers: ['2', '3']
            },
            '2': {
                following: ['1', '3'],
                followers: ['1', '3', '4']
            },
            '3': {
                following: ['1', '2'],
                followers: ['1', '2']
            },
            '4': {
                following: ['2'],
                followers: []
            }
        };
    }

    saveFollowers() {
        localStorage.setItem('savemate-followers', JSON.stringify(this.followers));
    }

    loadBlackMarketItems() {
        return JSON.parse(localStorage.getItem('savemate-blackmarket')) || [
            {
                id: '1',
                userId: '2',
                title: 'Gaming Console PS5',
                price: 6500,
                category: 'Electronics',
                image: '',
                description: 'Hardly used, comes with 2 controllers and 3 games. Perfect condition.',
                date: '2024-01-20',
                location: 'Cape Town'
            },
            {
                id: '2',
                userId: '3',
                title: 'Baby Stroller',
                price: 1200,
                category: 'Baby & Kids',
                image: '',
                description: 'Excellent condition, all accessories included. Lightweight and foldable.',
                date: '2024-01-18',
                location: 'Durban'
            },
            {
                id: '3',
                userId: '1',
                title: 'Vintage Camera',
                price: 850,
                category: 'Electronics',
                image: '',
                description: 'Classic film camera, fully functional. Great for photography enthusiasts.',
                date: '2024-01-15',
                location: 'Johannesburg'
            }
        ];
    }

    saveBlackMarketItems() {
        localStorage.setItem('savemate-blackmarket', JSON.stringify(this.blackMarketItems));
    }

    // Utility Methods
    getUserStorageStatus(userId) {
        const userItems = this.blackMarketItems.filter(item => item.userId === userId);
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

    getTotalListItems() {
        return this.shoppingLists.reduce((total, list) => total + list.items.length, 0);
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

        app.innerHTML = this.renderMainApp();
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
            'settings': this.renderSettingsPage()
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
                emoji: "🛒",
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
                emoji: "🍪",
                color: "#0055A4",
                icon: "fas fa-cookie-bite"
            },
            {
                id: '3',
                title: "Five Roses Tea 100s",
                current_price: 35.50,
                original_price: 42.00,
                store: "Woolworths",
                badge: "15% OFF",
                emoji: "🍵",
                color: "#000000",
                icon: "fas fa-mug-hot"
            }
        ];

        const stores = [
            { id: '1', name: "Checkers", color: "#E31B23", logo: "🛒", icon: "fas fa-shopping-cart" },
            { id: '2', name: "Pick n Pay", color: "#0055A4", logo: "🏪", icon: "fas fa-store" },
            { id: '3', name: "Woolworths", color: "#000000", logo: "🛍️", icon: "fas fa-shopping-bag" }
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

                <h2 class="section-title">
                    <i class="fas fa-store"></i>
                    Popular Stores
                </h2>
                <div class="stores-scroll">
                    ${stores.map(store => `
                        <div class="store-chip" onclick="app.showStore('${store.id}')">
                            <div class="store-chip-logo" style="background: ${store.color}">
                                <i class="${store.icon}"></i>
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
            { name: 'Groceries', icon: 'fas fa-shopping-basket', color: '#10B981' },
            { name: 'Electronics', icon: 'fas fa-laptop', color: '#3B82F6' },
            { name: 'Fashion', icon: 'fas fa-tshirt', color: '#8B5CF6' },
            { name: 'Home & Garden', icon: 'fas fa-home', color: '#F59E0B' }
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
                            <i class="${cat.icon}" style="color: ${cat.color};"></i>
                            <span>${cat.name}</span>
                        </div>
                    `).join('')}
                </div>

                <h2 class="section-title">
                    <i class="fas fa-store"></i>
                    Featured Stores
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
                <div class="deal-image" style="background: ${store.color}; color: white; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-store" style="font-size: 3rem;"></i>
                </div>
                <div class="deal-content">
                    <div class="deal-title">${store.name}</div>
                    <div class="deal-store">
                        <i class="fas fa-info-circle"></i>
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
        // Get all posts sorted by time
        const allPosts = [...this.posts].sort((a, b) => {
            const timeA = this.getTimeValue(a.time);
            const timeB = this.getTimeValue(b.time);
            return timeB - timeA;
        });
        
        return `
            <div class="page active">
                <div class="universe-header">
                    <i class="fas fa-users"></i> SHOPPING UNIVERSE
                </div>
                
                <!-- Post Creator -->
                <div class="post-creator">
                    <div class="post-input-container">
                        <div class="post-avatar">${this.getUserInitials()}</div>
                        <input type="text" class="post-input" id="universePostInput" placeholder="Share a deal or shopping tip...">
                        <button class="header-btn" onclick="app.toggleUniverseMediaUpload()" title="Add media">
                            <i class="fas fa-image"></i>
                        </button>
                        <button class="header-btn" onclick="app.createUniversePost()">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    <div id="universeMediaPreview" style="display: none; margin-top: 1rem;"></div>
                    <input type="file" id="universeMediaUpload" accept="image/*" style="display: none;" onchange="app.handleUniverseMediaUpload(event)">
                </div>

                <!-- All posts -->
                <div id="universePostsContainer">
                    ${allPosts.length > 0 ? 
                        allPosts.map(post => this.renderPost(post)).join('') :
                        '<div class="empty-state"><i class="fas fa-users"></i><p>No posts yet. Be the first to share!</p></div>'
                    }
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
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem; text-align: center;">
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
        const currentList = this.shoppingLists[0];
        const total = currentList.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        return `
            <div class="page active">
                <h2 class="section-title">
                    <i class="fas fa-list"></i>
                    My Shopping Lists
                </h2>

                <div class="list-category">
                    <h3>
                        <i class="fas fa-shopping-basket"></i>
                        ${currentList.name}
                        <span style="margin-left: auto; font-size: 1rem; color: var(--success-color);">
                            Total: R${total.toFixed(2)}
                        </span>
                    </h3>
                    ${currentList.items.map(item => `
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

                <button class="btn btn-primary" onclick="app.createNewList()" style="margin-top: 2rem;">
                    <i class="fas fa-plus"></i> Create New List
                </button>
            </div>
        `;
    }

    renderProfilePage(userId = null) {
        const profileUserId = userId || this.currentUser.id;
        const isCurrentUser = profileUserId === this.currentUser.id;
        const user = this.users.find(u => u.id === profileUserId) || this.currentUser;
        const userFollowers = this.followers[profileUserId] || { following: [], followers: [] };
        const userPosts = this.posts.filter(post => post.userId === profileUserId);
        const storageStatus = this.getUserStorageStatus(profileUserId);

        return `
            <div class="page active">
                <div class="profile-container">
                    <div class="profile-header">
                        <div class="cover-photo" id="coverPhoto" style="background: linear-gradient(135deg, var(--primary-navy) 0%, var(--dark-navy) 100%); ${user.coverPhoto ? `background-image: url('${user.coverPhoto}'); background-size: cover; background-position: center;` : ''}">
                            ${isCurrentUser ? `
                                <button class="cover-edit-btn" onclick="app.editCoverPhoto()">
                                    <i class="fas fa-camera"></i> Edit Cover
                                </button>
                            ` : ''}
                        </div>
                        <div class="profile-avatar-container">
                            <div class="profile-avatar" id="profileAvatar">
                                ${user.avatar && user.avatar.length > 2 ? 
                                    `<img src="${user.avatar}" alt="${user.name}">` : 
                                    user.avatar
                                }
                            </div>
                            ${isCurrentUser ? `
                                <button class="avatar-edit-btn" onclick="app.editProfilePicture()">
                                    <i class="fas fa-camera"></i>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="profile-info">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                            <div>
                                <h2>${user.name}</h2>
                                <p style="color: var(--text-secondary); margin-top: 0.25rem;">
                                    <i class="fas fa-map-marker-alt"></i> ${user.location}
                                </p>
                            </div>
                            ${!isCurrentUser ? `
                                <button class="btn ${userFollowers.followers.includes(this.currentUser.id) ? 'btn-secondary' : 'btn-primary'}" onclick="app.toggleFollow('${profileUserId}')">
                                    <i class="fas ${userFollowers.followers.includes(this.currentUser.id) ? 'fa-user-check' : 'fa-user-plus'}"></i>
                                    ${userFollowers.followers.includes(this.currentUser.id) ? 'Following' : 'Follow'}
                                </button>
                            ` : ''}
                        </div>
                        
                        <p style="color: var(--text-primary); margin-bottom: 1.5rem; line-height: 1.6;">
                            ${user.bio}
                        </p>
                        
                        <!-- Storage Indicator -->
                        <div class="storage-indicator" onclick="${isCurrentUser ? "app.showBlackMarket()" : ''}" style="cursor: ${isCurrentUser ? 'pointer' : 'default'};">
                            <div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--surface-color); border-radius: 0.75rem; border: 1px solid var(--border-color);">
                                <div style="width: 40px; height: 40px; border-radius: 50%; background: ${storageStatus === 'occupied' ? 'var(--success-color)' : 'var(--text-muted)'}; display: flex; align-items: center; justify-content: center; color: white;">
                                    <i class="fas ${storageStatus === 'occupied' ? 'fa-box-open' : 'fa-box'}"></i>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-weight: 500; color: var(--text-primary);">Storage</div>
                                    <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                        ${storageStatus === 'occupied' ? 'Items listed in Black Market' : 'No items in Black Market'}
                                        ${isCurrentUser ? ' • Tap to manage' : ''}
                                    </div>
                                </div>
                                <div style="color: ${storageStatus === 'occupied' ? 'var(--success-color)' : 'var(--text-muted)'}; font-weight: 600;">
                                    ${storageStatus === 'occupied' ? '● Occupied' : '○ Empty'}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Stats -->
                        <div class="profile-stats">
                            <div class="stat" onclick="app.showFollowers('${profileUserId}')">
                                <div class="stat-value">${userPosts.length}</div>
                                <div class="stat-label">Posts</div>
                            </div>
                            <div class="stat" onclick="app.showFollowers('${profileUserId}')">
                                <div class="stat-value">${userFollowers.followers.length}</div>
                                <div class="stat-label">Followers</div>
                            </div>
                            <div class="stat" onclick="app.showFollowing('${profileUserId}')">
                                <div class="stat-value">${userFollowers.following.length}</div>
                                <div class="stat-label">Following</div>
                            </div>
                        </div>
                        
                        ${isCurrentUser ? `
                            <button class="btn btn-primary" onclick="app.editProfile()">
                                <i class="fas fa-edit"></i> Edit Profile
                            </button>
                        ` : ''}
                    </div>
                </div>

                <!-- Post Creator (Only for current user) -->
                ${isCurrentUser ? `
                    <div class="post-creator" style="margin-top: 2rem;">
                        <div class="post-input-container">
                            <div class="post-avatar">${this.getUserInitials()}</div>
                            <input type="text" class="post-input" id="profilePostInput" placeholder="What's on your mind? Share a deal or tip...">
                            <button class="header-btn" onclick="app.toggleMediaUpload()" title="Add media">
                                <i class="fas fa-image"></i>
                            </button>
                            <button class="header-btn" onclick="app.createProfilePost()">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                        <div id="mediaPreview" style="display: none; margin-top: 1rem;"></div>
                        <input type="file" id="mediaUpload" accept="image/*" style="display: none;" onchange="app.handleMediaUpload(event)">
                    </div>
                ` : ''}

                <!-- Profile Wall -->
                <div style="margin-top: 2rem;">
                    <h3 class="section-title">
                        <i class="fas fa-stream"></i>
                        ${isCurrentUser ? 'Your Activity' : `${user.name.split(' ')[0]}'s Posts`}
                    </h3>
                    <div id="profilePostsContainer">
                        ${userPosts.length > 0 ? 
                            userPosts.map(post => this.renderPost(post)).join('') :
                            `<div class="empty-state">
                                <i class="fas fa-newspaper"></i>
                                <p>${isCurrentUser ? 'You haven\'t posted anything yet' : 'No posts yet'}</p>
                                ${isCurrentUser ? '<button class="btn btn-primary" onclick="app.switchPage(\'universe\')">Start Sharing</button>' : ''}
                            </div>`
                        }
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
        const userItems = this.blackMarketItems.filter(item => item.userId === this.currentUser.id);
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

                    <!-- Black Market Section in Settings -->
                    <div class="settings-section">
                        <h3><i class="fas fa-store-alt"></i> Black Market</h3>
                        
                        <div class="settings-item" onclick="app.showBlackMarket()">
                            <div class="settings-info">
                                <div class="settings-label">My Storage</div>
                                <div class="settings-description">
                                    ${userItems.length} item${userItems.length !== 1 ? 's' : ''} listed
                                    <span style="color: ${storageStatus === 'occupied' ? 'var(--success-color)' : 'var(--text-muted)'};">
                                        ${storageStatus === 'occupied' ? '● Occupied' : '○ Empty'}
                                    </span>
                                </div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        
                        <div class="settings-item" onclick="app.createBlackMarketItem()">
                            <div class="settings-info">
                                <div class="settings-label">Sell an Item</div>
                                <div class="settings-description">List items for sale in Black Market</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-plus-circle" style="color: var(--success-color);"></i>
                            </div>
                        </div>
                        
                        <div class="settings-item" onclick="app.browseBlackMarket()">
                            <div class="settings-info">
                                <div class="settings-label">Browse Marketplace</div>
                                <div class="settings-description">Find items from other users</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-compass" style="color: var(--accent-gold);"></i>
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

    // Post Renderer (Used in both Universe and Profile)
    renderPost(post) {
        const user = this.users.find(u => u.id === post.userId) || { name: post.user, avatar: post.avatar };
        const isCurrentUser = post.userId === this.currentUser.id;
        
        return `
            <div class="post-card">
                <div class="post-header">
                    <div class="post-avatar" onclick="${!isCurrentUser ? `app.switchToProfile('${post.userId}')` : ''}" style="cursor: ${!isCurrentUser ? 'pointer' : 'default'}">
                        ${user.avatar && user.avatar.length > 2 ? 
                            `<img src="${user.avatar}" alt="${user.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">` : 
                            user.avatar || post.avatar
                        }
                    </div>
                    <div>
                        <div class="post-user" onclick="${!isCurrentUser ? `app.switchToProfile('${post.userId}')` : ''}" style="cursor: ${!isCurrentUser ? 'pointer' : 'default'}">
                            ${user.name}
                        </div>
                        <div class="post-time">${post.time} ${post.store ? '• ' + post.store : ''}</div>
                    </div>
                </div>
                <div class="post-content">${post.content}</div>
                ${post.image ? `
                    <div class="post-image">
                        <img src="${post.image}" alt="Post image">
                    </div>
                ` : ''}
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

    // Core Functionality
    switchPage(page, userId = null) {
        this.currentPage = page;
        this.renderApp();
        
        // If switching to profile with a specific user ID
        if (page === 'profile' && userId) {
            setTimeout(() => this.renderProfilePage(userId), 0);
        }
    }

    switchToProfile(userId) {
        this.switchPage('profile', userId);
    }

    // Profile Features
    editProfilePicture() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => this.handleProfilePictureUpload(e);
        input.click();
    }

    handleProfilePictureUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
                if (userIndex > -1) {
                    this.users[userIndex].avatar = e.target.result;
                    this.saveUsers();
                    this.showToast('Profile picture updated!');
                    this.renderApp();
                }
            };
            reader.readAsDataURL(file);
        }
    }

    editCoverPhoto() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => this.handleCoverPhotoUpload(e);
        input.click();
    }

    handleCoverPhotoUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
                if (userIndex > -1) {
                    this.users[userIndex].coverPhoto = e.target.result;
                    this.saveUsers();
                    this.showToast('Cover photo updated!');
                    this.renderApp();
                }
            };
            reader.readAsDataURL(file);
        }
    }

    editProfile() {
        const user = this.users.find(u => u.id === this.currentUser.id);
        const newName = prompt('Enter your name:', user.name);
        if (newName && newName.trim()) {
            const newBio = prompt('Enter your bio:', user.bio);
            const newLocation = prompt('Enter your location:', user.location);
            
            user.name = newName.trim();
            user.bio = newBio || user.bio;
            user.location = newLocation || user.location;
            user.avatar = this.getUserInitials();
            
            this.saveUsers();
            this.showToast('Profile updated successfully!');
            this.renderApp();
        }
    }

    toggleFollow(userId, event = null) {
        if (event) event.stopPropagation();
        
        const currentUserId = this.currentUser.id;
        
        if (!this.followers[currentUserId]) {
            this.followers[currentUserId] = { following: [], followers: [] };
        }
        if (!this.followers[userId]) {
            this.followers[userId] = { following: [], followers: [] };
        }

        const isFollowing = this.followers[currentUserId].following.includes(userId);
        const userToFollow = this.users.find(u => u.id === userId);
        
        if (isFollowing) {
            // Unfollow
            this.followers[currentUserId].following = this.followers[currentUserId].following.filter(id => id !== userId);
            this.followers[userId].followers = this.followers[userId].followers.filter(id => id !== currentUserId);
            this.showToast(`Unfollowed ${userToFollow.name}`);
        } else {
            // Follow
            this.followers[currentUserId].following.push(userId);
            this.followers[userId].followers.push(currentUserId);
            this.showToast(`Following ${userToFollow.name}`);
            
            // Add notification
            this.addNotification(userId, 'follow', `${this.currentUser.name} started following you`);
        }
        
        this.saveFollowers();
        this.renderApp();
    }

    showFollowers(userId) {
        const user = this.users.find(u => u.id === userId);
        const followers = this.followers[userId] || { followers: [] };
        
        const modalContent = `
            <div class="modal-content">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-primary);">
                    <i class="fas fa-users"></i> ${user.name}'s Followers
                </h3>
                <div style="max-height: 400px; overflow-y: auto;">
                    ${followers.followers.length > 0 ? 
                        followers.followers.map(followerId => {
                            const follower = this.users.find(u => u.id === followerId);
                            return follower ? `
                                <div class="user-list-item" onclick="app.switchToProfile('${followerId}'); app.closeModal();">
                                    <div class="post-avatar">${follower.avatar}</div>
                                    <div style="flex: 1;">
                                        <div style="font-weight: 500; color: var(--text-primary);">${follower.name}</div>
                                        <div style="font-size: 0.875rem; color: var(--text-secondary);">${follower.bio.substring(0, 50)}...</div>
                                    </div>
                                    ${this.currentUser.id !== followerId ? `
                                        <button class="btn ${this.followers[this.currentUser.id]?.following.includes(followerId) ? 'btn-secondary' : 'btn-primary'}" onclick="app.toggleFollow('${followerId}', event)">
                                            ${this.followers[this.currentUser.id]?.following.includes(followerId) ? 'Following' : 'Follow'}
                                        </button>
                                    ` : ''}
                                </div>
                            ` : '';
                        }).join('') :
                        `<div class="empty-state" style="padding: 2rem; border: none;">
                            <i class="fas fa-user-friends"></i>
                            <p>No followers yet</p>
                        </div>`
                    }
                </div>
            </div>
        `;
        
        this.showModal('Followers', modalContent);
    }

    showFollowing(userId) {
        const user = this.users.find(u => u.id === userId);
        const following = this.followers[userId] || { following: [] };
        
        const modalContent = `
            <div class="modal-content">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-primary);">
                    <i class="fas fa-user-check"></i> ${user.name} is Following
                </h3>
                <div style="max-height: 400px; overflow-y: auto;">
                    ${following.following.length > 0 ? 
                        following.following.map(followingId => {
                            const followingUser = this.users.find(u => u.id === followingId);
                            return followingUser ? `
                                <div class="user-list-item" onclick="app.switchToProfile('${followingId}'); app.closeModal();">
                                    <div class="post-avatar">${followingUser.avatar}</div>
                                    <div style="flex: 1;">
                                        <div style="font-weight: 500; color: var(--text-primary);">${followingUser.name}</div>
                                        <div style="font-size: 0.875rem; color: var(--text-secondary);">${followingUser.bio.substring(0, 50)}...</div>
                                    </div>
                                    ${this.currentUser.id !== followingId ? `
                                        <button class="btn ${this.followers[this.currentUser.id]?.following.includes(followingId) ? 'btn-secondary' : 'btn-primary'}" onclick="app.toggleFollow('${followingId}', event)">
                                            ${this.followers[this.currentUser.id]?.following.includes(followingId) ? 'Following' : 'Follow'}
                                        </button>
                                    ` : ''}
                                </div>
                            ` : '';
                        }).join('') :
                        `<div class="empty-state" style="padding: 2rem; border: none;">
                            <i class="fas fa-user-plus"></i>
                            <p>Not following anyone yet</p>
                        </div>`
                    }
                </div>
            </div>
        `;
        
        this.showModal('Following', modalContent);
    }

    // Post Creation
    toggleMediaUpload() {
        document.getElementById('mediaUpload').click();
    }

    handleMediaUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = document.getElementById('mediaPreview');
                preview.innerHTML = `
                    <div style="position: relative;">
                        <img src="${e.target.result}" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 0.5rem;">
                        <button class="header-btn" onclick="app.removeMediaPreview()" style="position: absolute; top: 0.5rem; right: 0.5rem; background: var(--danger-color);">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                preview.style.display = 'block';
                this.currentMedia = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    removeMediaPreview() {
        const preview = document.getElementById('mediaPreview');
        preview.innerHTML = '';
        preview.style.display = 'none';
        this.currentMedia = null;
        document.getElementById('mediaUpload').value = '';
    }

    createProfilePost() {
        const input = document.getElementById('profilePostInput');
        const content = input?.value.trim();
        
        if (!content) {
            this.showToast('Please enter some content');
            return;
        }

        const newPost = {
            id: Date.now().toString(),
            user: this.currentUser.name,
            avatar: this.currentUser.avatar,
            content: content,
            image: this.currentMedia || '',
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
        
        // Clear inputs
        input.value = '';
        this.removeMediaPreview();
        
        this.showToast('Post created successfully!');
        this.renderApp();
    }

    // Universe Posts
    toggleUniverseMediaUpload() {
        document.getElementById('universeMediaUpload').click();
    }

    handleUniverseMediaUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = newFileReader();
            reader.onload = (e) => {
                const preview = document.getElementById('universeMediaPreview');
                preview.innerHTML = `
                    <div style="position: relative;">
                        <img src="${e.target.result}" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 0.5rem;">
                        <button class="header-btn" onclick="app.removeUniverseMediaPreview()" style="position: absolute; top: 0.5rem; right: 0.5rem; background: var(--danger-color);">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                preview.style.display = 'block';
                this.currentUniverseMedia = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    removeUniverseMediaPreview() {
        const preview = document.getElementById('universeMediaPreview');
        preview.innerHTML = '';
        preview.style.display = 'none';
        this.currentUniverseMedia = null;
        document.getElementById('universeMediaUpload').value = '';
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
            avatar: this.currentUser.avatar,
            content: content,
            image: this.currentUniverseMedia || '',
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
        
        // Clear inputs
        input.value = '';
        this.currentUniverseMedia = null;
        const preview = document.getElementById('universeMediaPreview');
        preview.innerHTML = '';
        preview.style.display = 'none';
        document.getElementById('universeMediaUpload').value = '';
        
        this.showToast('Post shared to Universe!');
        this.renderApp();
    }

    likePost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            post.liked = !post.liked;
            post.likes += post.liked ? 1 : -1;
            
            // Add notification if not current user's post
            if (post.userId !== this.currentUser.id && post.liked) {
                this.addNotification(post.userId, 'like', `${this.currentUser.name} liked your post`);
            }
            
            this.savePosts();
            this.renderApp();
        }
    }

    // Black Market Features
    showBlackMarket() {
        const userItems = this.blackMarketItems.filter(item => item.userId === this.currentUser.id);
        const storageStatus = this.getUserStorageStatus(this.currentUser.id);
        
        const modalContent = `
            <div class="modal-content">
                <div style="margin-bottom: 2rem;">
                    <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">
                        <i class="fas fa-store-alt"></i> My Black Market Storage
                    </h3>
                    <div style="display: flex; align-items: center; justify-content: space-between; background: var(--surface-color); padding: 1rem; border-radius: 0.75rem; border: 1px solid var(--border-color);">
                        <div>
                            <div style="font-weight: 500; color: var(--text-primary);">Storage Status</div>
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                ${userItems.length} item${userItems.length !== 1 ? 's' : ''} listed
                            </div>
                        </div>
                        <div style="color: ${storageStatus === 'occupied' ? 'var(--success-color)' : 'var(--text-muted)'}; font-weight: 600;">
                            ${storageStatus === 'occupied' ? '● Occupied' : '○ Empty'}
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
                    <button class="btn btn-primary" onclick="app.createBlackMarketItem();" style="flex: 1;">
                        <i class="fas fa-plus"></i> Sell Item
                    </button>
                    <button class="btn btn-secondary" onclick="app.browseBlackMarket();" style="flex: 1;">
                        <i class="fas fa-compass"></i> Browse
                    </button>
                </div>

                <h4 style="margin-bottom: 1rem; color: var(--text-primary);">My Listed Items</h4>
                
                <div style="max-height: 300px; overflow-y: auto;">
                    ${userItems.length > 0 ? 
                        userItems.map(item => `
                            <div class="black-market-item">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                    <div style="flex: 1;">
                                        <div style="font-weight: 500; color: var(--text-primary);">${item.title}</div>
                                        <div style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
                                            R${item.price} • ${item.category} • ${item.location}
                                        </div>
                                        <div style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                                            ${item.description}
                                        </div>
                                    </div>
                                    <div style="display: flex; gap: 0.25rem; margin-left: 1rem;">
                                        <button class="header-btn" onclick="app.editBlackMarketItem('${item.id}')">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="header-btn" onclick="app.deleteBlackMarketItem('${item.id}')">
                                            <i class="fas fa-trash" style="color: var(--danger-color);"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('') :
                        '<div class="empty-state" style="padding: 2rem; border: none;"><i class="fas fa-box-open"></i><p>No items listed yet</p></div>'
                    }
                </div>
            </div>
        `;
        
        this.showModal('Black Market', modalContent);
    }

    browseBlackMarket() {
        this.closeModal();
        const allItems = this.blackMarketItems;
        
        const modalContent = `
            <div class="modal-content">
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: var(--text-primary); margin-bottom: 1rem;">
                        <i class="fas fa-compass"></i> Browse Black Market
                    </h3>
                    <div class="search-box" style="margin-bottom: 1rem;">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search items..." onkeyup="app.searchBlackMarketItems(this.value)">
                    </div>
                </div>

                <div id="blackMarketItems" style="max-height: 400px; overflow-y: auto;">
                    ${allItems.length > 0 ? 
                        allItems.map(item => {
                            const seller = this.users.find(u => u.id === item.userId);
                            return `
                                <div class="black-market-listing">
                                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                                        <div style="font-weight: 500; color: var(--text-primary); font-size: 1.1rem;">
                                            ${item.title}
                                        </div>
                                        <div style="font-weight: 600; color: var(--success-color);">
                                            R${item.price}
                                        </div>
                                    </div>
                                    <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                                        <i class="fas fa-tag"></i> ${item.category} 
                                        <i class="fas fa-map-marker-alt" style="margin-left: 1rem;"></i> ${item.location}
                                    </div>
                                    <div style="font-size: 0.875rem; color: var(--text-primary); margin-bottom: 0.75rem;">
                                        ${item.description}
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <div onclick="app.switchToProfile('${item.userId}'); app.closeModal();" style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                            <div class="post-avatar" style="width: 24px; height: 24px; font-size: 0.75rem;">
                                                ${seller?.avatar || '?'}
                                            </div>
                                            <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                                ${seller?.name || 'Unknown Seller'}
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" onclick="app.contactSeller('${item.id}')" style="padding: 0.25rem 0.75rem; font-size: 0.75rem;">
                                            <i class="fas fa-envelope"></i> Contact
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('') :
                        '<div class="empty-state" style="padding: 2rem; border: none;"><i class="fas fa-store-slash"></i><p>No items available in Black Market</p></div>'
                    }
                </div>
            </div>
        `;
        
        this.showModal('Black Market Browse', modalContent);
    }

    createBlackMarketItem() {
        this.closeModal();
        
        const modalContent = `
            <div class="modal-content">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-primary);">
                    <i class="fas fa-plus-circle"></i> Sell an Item
                </h3>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                        Item Title *
                    </label>
                    <input type="text" id="bmTitle" class="form-control" placeholder="What are you selling?" style="margin-bottom: 1rem;">
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                            Price (R) *
                        </label>
                        <input type="number" id="bmPrice" class="form-control" placeholder="0.00" step="0.01">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                            Category *
                        </label>
                        <select id="bmCategory" class="form-control">
                            <option value="">Select category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Baby & Kids">Baby & Kids</option>
                            <option value="Home & Garden">Home & Garden</option>
                            <option value="Vehicles">Vehicles</option>
                            <option value="Sports">Sports</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                        Description *
                    </label>
                    <textarea id="bmDescription" class="form-control" placeholder="Describe your item..." rows="3" style="resize: vertical;"></textarea>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                        Location
                    </label>
                    <input type="text" id="bmLocation" class="form-control" placeholder="Where is the item located?">
                </div>
                
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-secondary" onclick="app.closeModal()" style="flex: 1;">
                        Cancel
                    </button>
                    <button class="btn btn-primary" onclick="app.saveBlackMarketItem()" style="flex: 1;">
                        <i class="fas fa-check"></i> List Item
                    </button>
                </div>
            </div>
        `;
        
        this.showModal('Sell Item', modalContent);
    }

    saveBlackMarketItem() {
        const title = document.getElementById('bmTitle')?.value.trim();
        const price = parseFloat(document.getElementById('bmPrice')?.value);
        const category = document.getElementById('bmCategory')?.value;
        const description = document.getElementById('bmDescription')?.value.trim();
        const location = document.getElementById('bmLocation')?.value.trim();
        
        if (!title || isNaN(price) || !category || !description) {
            this.showToast('Please fill in all required fields');
            return;
        }
        
        const newItem = {
            id: Date.now().toString(),
            userId: this.currentUser.id,
            title: title,
            price: price,
            category: category,
            description: description,
            location: location || 'Unknown',
            date: new Date().toISOString().split('T')[0],
            image: ''
        };
        
        this.blackMarketItems.push(newItem);
        this.saveBlackMarketItems();
        this.updateUserStorageStatus(this.currentUser.id);
        
        this.closeModal();
        this.showToast('Item listed successfully in Black Market!');
        
        // Update the app
        this.renderApp();
    }

    editBlackMarketItem(itemId) {
        const item = this.blackMarketItems.find(item => item.id === itemId);
        if (!item) return;
        
        this.closeModal();
        
        const modalContent = `
            <div class="modal-content">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-primary);">
                    <i class="fas fa-edit"></i> Edit Item
                </h3>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                        Item Title *
                    </label>
                    <input type="text" id="bmEditTitle" class="form-control" value="${item.title}" style="margin-bottom: 1rem;">
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                            Price (R) *
                        </label>
                        <input type="number" id="bmEditPrice" class="form-control" value="${item.price}" step="0.01">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                            Category *
                        </label>
                        <select id="bmEditCategory" class="form-control">
                            <option value="Electronics" ${item.category === 'Electronics' ? 'selected' : ''}>Electronics</option>
                            <option value="Furniture" ${item.category === 'Furniture' ? 'selected' : ''}>Furniture</option>
                            <option value="Clothing" ${item.category === 'Clothing' ? 'selected' : ''}>Clothing</option>
                            <option value="Baby & Kids" ${item.category === 'Baby & Kids' ? 'selected' : ''}>Baby & Kids</option>
                            <option value="Home & Garden" ${item.category === 'Home & Garden' ? 'selected' : ''}>Home & Garden</option>
                            <option value="Vehicles" ${item.category === 'Vehicles' ? 'selected' : ''}>Vehicles</option>
                            <option value="Sports" ${item.category === 'Sports' ? 'selected' : ''}>Sports</option>
                            <option value="Other" ${item.category === 'Other' ? 'selected' : ''}>Other</option>
                        </select>
                    </div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                        Description *
                    </label>
                    <textarea id="bmEditDescription" class="form-control" rows="3" style="resize: vertical;">${item.description}</textarea>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">
                        Location
                    </label>
                    <input type="text" id="bmEditLocation" class="form-control" value="${item.location}">
                </div>
                
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-secondary" onclick="app.closeModal()" style="flex: 1;">
                        Cancel
                    </button>
                    <button class="btn btn-primary" onclick="app.updateBlackMarketItem('${itemId}')" style="flex: 1;">
                        <i class="fas fa-save"></i> Save Changes
                    </button>
                </div>
            </div>
        `;
        
        this.showModal('Edit Item', modalContent);
    }

    updateBlackMarketItem(itemId) {
        const title = document.getElementById('bmEditTitle')?.value.trim();
        const price = parseFloat(document.getElementById('bmEditPrice')?.value);
        const category = document.getElementById('bmEditCategory')?.value;
        const description = document.getElementById('bmEditDescription')?.value.trim();
        const location = document.getElementById('bmEditLocation')?.value.trim();
        
        if (!title || isNaN(price) || !category || !description) {
            this.showToast('Please fill in all required fields');
            return;
        }
        
        const itemIndex = this.blackMarketItems.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            this.blackMarketItems[itemIndex] = {
                ...this.blackMarketItems[itemIndex],
                title: title,
                price: price,
                category: category,
                description: description,
                location: location || 'Unknown'
            };
            
            this.saveBlackMarketItems();
            this.closeModal();
            this.showToast('Item updated successfully!');
            this.showBlackMarket();
        }
    }

    deleteBlackMarketItem(itemId) {
        if (confirm('Are you sure you want to delete this item?')) {
            const itemIndex = this.blackMarketItems.findIndex(item => item.id === itemId);
            if (itemIndex > -1) {
                this.blackMarketItems.splice(itemIndex, 1);
                this.saveBlackMarketItems();
                this.updateUserStorageStatus(this.currentUser.id);
                this.showToast('Item deleted from Black Market');
                
                // Refresh the display
                this.showBlackMarket();
            }
        }
    }

    searchBlackMarketItems(query) {
        const itemsContainer = document.getElementById('blackMarketItems');
        const allItems = this.blackMarketItems;
        
        if (!query.trim()) {
            // Show all items
            const html = allItems.map(item => {
                const seller = this.users.find(u => u.id === item.userId);
                return `
                    <div class="black-market-listing">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                            <div style="font-weight: 500; color: var(--text-primary); font-size: 1.1rem;">
                                ${item.title}
                            </div>
                            <div style="font-weight: 600; color: var(--success-color);">
                                R${item.price}
                            </div>
                        </div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                            <i class="fas fa-tag"></i> ${item.category} 
                            <i class="fas fa-map-marker-alt" style="margin-left: 1rem;"></i> ${item.location}
                        </div>
                        <div style="font-size: 0.875rem; color: var(--text-primary); margin-bottom: 0.75rem;">
                            ${item.description}
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div onclick="app.switchToProfile('${item.userId}'); app.closeModal();" style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                <div class="post-avatar" style="width: 24px; height: 24px; font-size: 0.75rem;">
                                    ${seller?.avatar || '?'}
                                </div>
                                <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                    ${seller?.name || 'Unknown Seller'}
                                </div>
                            </div>
                            <button class="btn btn-primary" onclick="app.contactSeller('${item.id}')" style="padding: 0.25rem 0.75rem; font-size: 0.75rem;">
                                <i class="fas fa-envelope"></i> Contact
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
            
            itemsContainer.innerHTML = html || '<div class="empty-state" style="padding: 2rem; border: none;"><i class="fas fa-store-slash"></i><p>No items available in Black Market</p></div>';
            return;
        }
        
        // Filter items
        const filteredItems = allItems.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()) ||
            item.location.toLowerCase().includes(query.toLowerCase())
        );
        
        const html = filteredItems.map(item => {
            const seller = this.users.find(u => u.id === item.userId);
            return `
                <div class="black-market-listing">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                        <div style="font-weight: 500; color: var(--text-primary); font-size: 1.1rem;">
                            ${item.title}
                        </div>
                        <div style="font-weight: 600; color: var(--success-color);">
                            R${item.price}
                        </div>
                    </div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                        <i class="fas fa-tag"></i> ${item.category} 
                        <i class="fas fa-map-marker-alt" style="margin-left: 1rem;"></i> ${item.location}
                    </div>
                    <div style="font-size: 0.875rem; color: var(--text-primary); margin-bottom: 0.75rem;">
                        ${item.description}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div onclick="app.switchToProfile('${item.userId}'); app.closeModal();" style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                            <div class="post-avatar" style="width: 24px; height: 24px; font-size: 0.75rem;">
                                ${seller?.avatar || '?'}
                            </div>
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                ${seller?.name || 'Unknown Seller'}
                            </div>
                        </div>
                        <button class="btn btn-primary" onclick="app.contactSeller('${item.id}')" style="padding: 0.25rem 0.75rem; font-size: 0.75rem;">
                            <i class="fas fa-envelope"></i> Contact
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        itemsContainer.innerHTML = html || '<div class="empty-state" style="padding: 2rem; border: none;"><i class="fas fa-search"></i><p>No items found matching "${query}"</p></div>';
    }

    contactSeller(itemId) {
        const item = this.blackMarketItems.find(item => item.id === itemId);
        const seller = item ? this.users.find(u => u.id === item.userId) : null;
        
        if (seller) {
            this.showToast(`Opening chat with ${seller.name}`);
            // In a real app, this would open a chat window
        }
    }

    // Utility Methods
    getTimeValue(timeString) {
        if (timeString.includes('Just now')) return Date.now();
        if (timeString.includes('min')) return Date.now() - parseInt(timeString) * 60 * 1000;
        if (timeString.includes('hour')) return Date.now() - parseInt(timeString) * 60 * 60 * 1000;
        if (timeString.includes('day')) return Date.now() - parseInt(timeString) * 24 * 60 * 60 * 1000;
        return Date.now();
    }

    addNotification(userId, type, message) {
        const notification = {
            id: Date.now().toString(),
            type,
            message,
            time: 'Just now',
            read: false
        };
        
        this.notifications.unshift(notification);
        this.saveNotifications();
    }

    markNotificationRead(notificationId) {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification && !notification.read) {
            notification.read = true;
            this.saveNotifications();
            this.renderApp();
        }
    }

    // Modal System
    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="app.closeModal()"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="app.closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                ${content}
            </div>
        `;
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }

    // Other Methods
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

    showStore(storeId) {
        this.showToast(`Opening ${storeId} deals`);
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

    createNewList() {
        const newList = {
            id: Date.now().toString(),
            name: `Shopping List ${this.shoppingLists.length + 1}`,
            items: []
        };
        this.shoppingLists.push(newList);
        this.saveShoppingLists();
        this.showToast('New shopping list created!');
        this.renderApp();
    }

    removeFromList(itemId) {
        const currentList = this.shoppingLists[0];
        const itemIndex = currentList.items.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            currentList.items.splice(itemIndex, 1);
            this.saveShoppingLists();
            this.showToast('Item removed from list');
            this.renderApp();
        }
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
        this.showToast('Contact support feature coming soon!');
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

// Initialize the app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SaveMateApp();
    window.app = app;
});