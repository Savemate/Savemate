import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://ykgtjyleyuxgwdmaduzs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrZ3RqeWxleXV4Z3dkbWFkdXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNDE1OTksImV4cCI6MjA3NzkxNzU5OX0.XsqpRrql4dT34meefxiKVOwECXlqm4ynDXRcedvgYq0'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Real South African store data
const southAfricanStores = [
    {
        id: '1',
        name: "Checkers",
        category: "Supermarket",
        color_hex: "#E31B23",
        logo: "🛒",
        description: "Checkers Sixty60 - Delivery in 60 minutes"
    },
    {
        id: '2',
        name: "Pick n Pay",
        category: "Supermarket", 
        color_hex: "#0055A4",
        logo: "🏪",
        description: "Quality you can taste everyday"
    },
    {
        id: '3',
        name: "Woolworths",
        category: "Supermarket",
        color_hex: "#000000",
        logo: "🛍️",
        description: "The quality you can trust"
    },
    {
        id: '4',
        name: "Shoprite",
        category: "Supermarket",
        color_hex: "#FF0000", 
        logo: "🛒",
        description: "Lower prices you can trust"
    },
    {
        id: '5',
        name: "Spar",
        category: "Supermarket",
        color_hex: "#008000",
        logo: "🏬",
        description: "Serving our communities"
    },
    {
        id: '6',
        name: "Makro",
        category: "Wholesale",
        color_hex: "#FF6B00",
        logo: "📦",
        description: "Wholesale prices for everyone"
    },
    {
        id: '7',
        name: "Game",
        category: "Department Store",
        color_hex: "#0033A0",
        logo: "🎮",
        description: "For the love of shopping"
    },
    {
        id: '8',
        name: "Clicks",
        category: "Pharmacy",
        color_hex: "#E40046",
        logo: "💊",
        description: "Health and beauty specialists"
    }
]

// Real product data with actual South African products
const realProducts = [
    {
        id: '1',
        title: "Tastic Rice 5kg",
        current_price: 105.99,
        original_price: 129.99,
        category: "Groceries",
        store_id: '1',
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop",
        description: "Tastic Parboiled Long Grain Rice 5kg",
        badge: "SAVE R24"
    },
    {
        id: '2',
        title: "Ouma Rusks Buttermilk 500g",
        current_price: 52.99,
        original_price: 59.99,
        category: "Groceries",
        store_id: '2',
        image: "https://images.unsplash.com/photo-1558961360-f9e2c4d7f5f7?w=300&h=200&fit=crop",
        description: "Traditional South African rusks",
        badge: "POPULAR"
    },
    {
        id: '3',
        title: "Five Roses Tea 100s",
        current_price: 35.50,
        original_price: 42.00,
        category: "Beverages",
        store_id: '3',
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop",
        description: "Five Roses Tea Bags 100s",
        badge: "SOUTH AFRICAN"
    },
    {
        id: '4',
        title: "Koo Baked Beans 410g",
        current_price: 18.99,
        original_price: 22.99,
        category: "Groceries",
        store_id: '4',
        image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=300&h=200&fit=crop",
        description: "Koo Baked Beans in Tomato Sauce",
        badge: "15% OFF"
    },
    {
        id: '5',
        title: "Fresh Lettuce",
        current_price: 12.99,
        original_price: 15.99,
        category: "Fresh Produce",
        store_id: '5',
        image: "https://images.unsplash.com/photo-1594282241892-7acad2be8e28?w=300&h=200&fit=crop",
        description: "Fresh Iceberg Lettuce",
        badge: "FRESH"
    },
    {
        id: '6',
        title: "Samsung TV 55\"",
        current_price: 6999.99,
        original_price: 8999.99,
        category: "Electronics",
        store_id: '6',
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop",
        description: "Samsung 55\" 4K Smart TV",
        badge: "HOT DEAL"
    },
    {
        id: '7',
        title: "All Gold Tomato Sauce 500g",
        current_price: 25.99,
        original_price: 29.99,
        category: "Groceries",
        store_id: '1',
        image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=300&h=200&fit=crop",
        description: "All Gold Tomato Sauce",
        badge: "13% OFF"
    },
    {
        id: '8',
        title: "Coca-Cola 2L",
        current_price: 24.99,
        original_price: 28.99,
        category: "Beverages",
        store_id: '2',
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&h=200&fit=crop",
        description: "Coca-Cola Soft Drink 2L",
        badge: "SAVE R4"
    }
]

// Real social posts
const realPosts = [
    {
        id: '1',
        user: "DealHunterSA",
        avatar: "DH",
        content: "Just found Tastic Rice for R105.99 at Checkers! That's a R24 saving! 🎉 #MzansiDeals #SaveMate",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
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
        content: "Woolworths has amazing specials on baby products this week. Pampers nappies at unbeatable prices! 👶 #FamilyBudget #CapeTown",
        image: "https://images.unsplash.com/photo-1595535873420-5996f7770f15?w=400&h=300&fit=crop",
        time: "5 hours ago",
        likes: 42,
        comments: 12,
        shares: 5,
        liked: true,
        store: "Woolworths"
    },
    {
        id: '3',
        user: "JoburgSaver",
        avatar: "JS",
        content: "Makro has incredible deals on electronics this weekend. Just got a 55\" Samsung TV for R6999! 📺 #Electronics #Deals",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
        time: "1 day ago",
        likes: 31,
        comments: 15,
        shares: 7,
        liked: false,
        store: "Makro"
    }
]

// Black Market Listings
const blackMarketListings = [
    {
        id: '1',
        title: "Part-time Cashier Needed",
        type: "job_offering",
        description: "Looking for a reliable cashier for weekend shifts at local supermarket. R120/hour.",
        user: "StoreManagerSA",
        time: "3 hours ago",
        location: "Johannesburg",
        price: "R120/hour"
    },
    {
        id: '2',
        title: "Graphic Designer Available",
        type: "job_seeking",
        description: "Experienced graphic designer seeking freelance work. Specializing in brand identity and social media graphics.",
        user: "CreativeDesignZA",
        time: "1 day ago",
        location: "Cape Town",
        price: "R250/hour"
    },
    {
        id: '3',
        title: "Brand New iPhone 14 Pro",
        type: "products",
        description: "Sealed iPhone 14 Pro 128GB. Received as gift but already have one. Best offer.",
        user: "TechTrader",
        time: "2 days ago",
        location: "Durban",
        price: "R18,000"
    }
]

class SaveMateApp {
    constructor() {
        this.currentUser = null
        this.currentPage = 'home'
        this.savedDeals = new Set()
        this.shoppingLists = []
        this.posts = [...realPosts]
        this.theme = localStorage.getItem('savemate-theme') || 'light'
        this.notifications = [
            { id: '1', type: 'deal', message: 'New Checkers specials available!', time: '5 min ago', read: false },
            { id: '2', type: 'social', message: 'DealHunterSA liked your post', time: '1 hour ago', read: false },
            { id: '3', type: 'system', message: 'Welcome to SaveMate! Start exploring deals.', time: '2 hours ago', read: true }
        ]
        this.init()
    }

    async init() {
        await this.checkAuth()
        this.setupEventListeners()
        this.applyTheme()
        this.renderApp()
    }

    async checkAuth() {
        try {
            const { data: { user } } = await supabase.auth.getUser()
            this.currentUser = user
        } catch (error) {
            console.error('Auth check failed:', error)
        }
    }

    setupEventListeners() {
        supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                this.currentUser = session.user
                this.renderApp()
            } else if (event === 'SIGNED_OUT') {
                this.currentUser = null
                this.renderApp()
            }
        })
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme)
        if (this.theme === 'dark') {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('savemate-theme', this.theme)
        this.applyTheme()
        this.showToast(`Switched to ${this.theme} theme`)
    }

    renderApp() {
        const app = document.getElementById('app')
        
        if (!this.currentUser) {
            app.innerHTML = this.renderAuthPage()
            this.setupAuthListeners()
            return
        }

        app.innerHTML = `
            <div class="app-header">
                <div class="logo" onclick="app.switchPage('home')">
                    <i class="fas fa-shopping-bag"></i>
                    <span>SaveMate</span>
                </div>
                <div class="header-actions">
                    <button class="header-btn" onclick="app.switchPage('settings')">
                        <i class="fas fa-cog"></i>
                    </button>
                    <button class="header-btn" onclick="app.switchPage('notifications')">
                        <i class="fas fa-bell"></i>
                        ${this.getUnreadNotificationCount() > 0 ? `<span class="notification-badge">${this.getUnreadNotificationCount()}</span>` : ''}
                    </button>
                    <button class="header-btn" onclick="app.switchPage('messages')">
                        <i class="fas fa-comments"></i>
                    </button>
                    <button class="header-btn" onclick="app.switchPage('profile')">
                        <i class="fas fa-user"></i>
                    </button>
                    <button class="header-btn" onclick="app.logout()">
                        <i class="fas fa-sign-out-alt"></i>
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
        `

        this.loadPageData()
    }

    getUnreadNotificationCount() {
        return this.notifications.filter(n => !n.read).length
    }

    setupAuthListeners() {
        // Remove existing listeners to prevent duplicates
        const loginBtn = document.querySelector('#loginForm .btn-primary')
        const signupBtn = document.querySelector('#signupForm .btn-primary')
        
        if (loginBtn) {
            loginBtn.onclick = () => this.handleLogin()
        }
        if (signupBtn) {
            signupBtn.onclick = () => this.handleSignup()
        }
    }

    renderCurrentPage() {
        switch(this.currentPage) {
            case 'home':
                return this.renderHomePage()
            case 'explore':
                return this.renderExplorePage()
            case 'universe':
                return this.renderUniversePage()
            case 'scanner':
                return this.renderScannerPage()
            case 'shopping-list':
                return this.renderShoppingListPage()
            case 'profile':
                return this.renderProfilePage()
            case 'messages':
                return this.renderMessagesPage()
            case 'notifications':
                return this.renderNotificationsPage()
            case 'settings':
                return this.renderSettingsPage()
            case 'black-market':
                return this.renderBlackMarketPage()
            default:
                return this.renderHomePage()
        }
    }

    renderAuthPage() {
        return `
            <div class="auth-container">
                <div class="auth-card">
                    <h2>Welcome to SaveMate</h2>
                    <div id="loginForm">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="form-control" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter your password">
                        </div>
                        <button class="btn btn-primary" onclick="app.handleLogin()">
                            <i class="fas fa-sign-in-alt"></i> Log In
                        </button>
                        <div class="auth-switch">
                            Don't have an account? <a href="#" onclick="app.showSignup()">Sign Up</a>
                        </div>
                    </div>
                    <div id="signupForm" style="display: none;">
                        <div class="form-group">
                            <label for="signupName">Full Name</label>
                            <input type="text" id="signupName" class="form-control" placeholder="Enter your full name">
                        </div>
                        <div class="form-group">
                            <label for="signupEmail">Email</label>
                            <input type="email" id="signupEmail" class="form-control" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="signupPassword">Password</label>
                            <input type="password" id="signupPassword" class="form-control" placeholder="Create a password (min. 6 characters)">
                        </div>
                        <button class="btn btn-primary" onclick="app.handleSignup()">
                            <i class="fas fa-user-plus"></i> Sign Up
                        </button>
                        <div class="auth-switch">
                            Already have an account? <a href="#" onclick="app.showLogin()">Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    renderHomePage() {
        return `
            <div class="page active">
                <div class="welcome-banner">
                    <h2>Hello, ${this.currentUser?.email || 'Shopper'}! 👋</h2>
                    <p>Discover the best deals from South African retailers</p>
                </div>

                <div class="search-container">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="homeSearch" placeholder="Search products, stores, or deals..." oninput="app.searchDeals(this.value)">
                    </div>
                </div>

                <h2 class="section-title">🔥 Trending Deals</h2>
                <div class="deals-grid" id="dealsContainer">
                    ${this.renderDealsSkeleton()}
                </div>

                <h2 class="section-title">💫 Weekly Specials</h2>
                <div class="deals-grid" id="specialsContainer">
                    ${this.renderDealsSkeleton()}
                </div>

                <h2 class="section-title">🏪 Popular Stores</h2>
                <div class="stores-scroll">
                    ${southAfricanStores.slice(0, 6).map(store => `
                        <div class="store-chip" onclick="app.showStoreDeals('${store.id}')" style="background: ${store.color_hex}20; border: 1px solid ${store.color_hex}40;">
                            <div class="store-chip-logo" style="background: ${store.color_hex};">${store.logo}</div>
                            <span>${store.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    }

    renderExplorePage() {
        return `
            <div class="page">
                <h2 class="section-title">📂 Explore Categories</h2>
                <div class="categories">
                    <div class="category" onclick="app.filterDeals('Groceries')">
                        <i class="fas fa-utensils"></i>
                        <span>Groceries</span>
                    </div>
                    <div class="category" onclick="app.filterDeals('Electronics')">
                        <i class="fas fa-mobile-alt"></i>
                        <span>Electronics</span>
                    </div>
                    <div class="category" onclick="app.filterDeals('Fresh Produce')">
                        <i class="fas fa-apple-alt"></i>
                        <span>Fresh Produce</span>
                    </div>
                    <div class="category" onclick="app.filterDeals('Beverages')">
                        <i class="fas fa-wine-bottle"></i>
                        <span>Beverages</span>
                    </div>
                    <div class="category" onclick="app.filterDeals('Household')">
                        <i class="fas fa-home"></i>
                        <span>Household</span>
                    </div>
                    <div class="category" onclick="app.filterDeals('Health & Beauty')">
                        <i class="fas fa-heartbeat"></i>
                        <span>Health & Beauty</span>
                    </div>
                </div>

                <h2 class="section-title">🏪 Featured Stores</h2>
                <div class="deals-grid" id="storesContainer">
                    ${this.renderStoresSkeleton()}
                </div>

                <h2 class="section-title">🛍️ All Products</h2>
                <div class="deals-grid" id="exploreDealsContainer">
                    ${this.renderDealsSkeleton(6)}
                </div>
            </div>
        `
    }

    renderUniversePage() {
        return `
            <div class="page">
                <div class="universe-header">
                    <span class="universe-title">SHOPPING</span>
                    <i class="fas fa-globe-americas globe-icon"></i>
                    <span class="universe-title">UNIVERSE</span>
                </div>
                
                <div class="post-creator">
                    <div class="post-input-container">
                        <div class="post-avatar">${this.getUserInitials()}</div>
                        <input type="text" class="post-input" id="postInput" placeholder="Share a deal or shopping tip...">
                        <button class="attachment-btn" onclick="app.attachMedia()">
                            <i class="fas fa-image"></i>
                        </button>
                        <button class="post-submit-btn" onclick="app.createPost()">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>

                <div id="universePosts">
                    ${this.renderPosts()}
                </div>
            </div>
        `
    }

    renderScannerPage() {
        return `
            <div class="page">
                <div class="scanner-container">
                    <div class="scanner-placeholder">
                        <i class="fas fa-camera" style="font-size: 60px; margin-bottom: 15px;"></i>
                        <div>Point camera at barcode</div>
                    </div>
                    <p>Scan barcodes to compare prices across South African stores</p>
                    <button class="btn btn-primary" style="width: auto; margin-top: 20px;" onclick="app.startScanner()">
                        <i class="fas fa-camera"></i> Start Scanning
                    </button>
                </div>

                <h2 class="section-title">📋 Recently Scanned</h2>
                <div id="recentlyScanned">
                    <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                        <i class="fas fa-barcode" style="font-size: 48px; margin-bottom: 16px;"></i>
                        <p>No recently scanned items</p>
                        <button class="btn btn-secondary" style="width: auto; margin-top: 10px;" onclick="app.startScanner()">
                            Scan Your First Item
                        </button>
                    </div>
                </div>
            </div>
        `
    }

    renderShoppingListPage() {
        return `
            <div class="page">
                <h2 class="section-title">📝 My Shopping Lists</h2>
                
                <div class="shopping-list-creator">
                    <div class="search-container">
                        <div class="search-box">
                            <i class="fas fa-search"></i>
                            <input type="text" id="shoppingListSearch" placeholder="Search for products to add to your list..." oninput="app.searchProducts(this.value)">
                        </div>
                    </div>
                    <div class="search-results" id="searchResults"></div>
                    <div class="list-actions">
                        <button class="btn btn-secondary" style="width: auto;" onclick="app.createNewList()">
                            <i class="fas fa-plus"></i> Create New List
                        </button>
                    </div>
                </div>

                <div class="list-category">
                    <h3>My Shopping Lists</h3>
                    <div id="shoppingListContainer">
                        ${this.shoppingLists.length > 0 ? 
                            this.shoppingLists.map(list => this.renderShoppingList(list)).join('') :
                            '<div style="text-align: center; padding: 40px; color: var(--text-muted);">' +
                            '<i class="fas fa-list" style="font-size: 48px; margin-bottom: 16px;"></i>' +
                            '<p>No shopping lists yet. Create your first list!</p>' +
                            '<button class="btn btn-primary" style="width: auto; margin-top: 16px;" onclick="app.createNewList()">' +
                            '<i class="fas fa-plus"></i> Create First List</button></div>'
                        }
                    </div>
                </div>
            </div>
        `
    }

    renderProfilePage() {
        return `
            <div class="page">
                <div class="profile-container">
                    <div class="profile-header">
                        <div class="cover-photo"></div>
                        <div class="profile-avatar-container">
                            <div class="profile-avatar">${this.getUserInitials()}</div>
                            <button class="avatar-upload-btn" onclick="app.uploadAvatar()">
                                <i class="fas fa-camera"></i> Change Photo
                            </button>
                        </div>
                    </div>
                    
                    <div class="profile-info">
                        <h2>${this.currentUser?.email || 'User'}</h2>
                        <p>SaveMate enthusiast finding the best deals in South Africa! 🇿🇦</p>
                        
                        <div class="profile-stats">
                            <div class="stat">
                                <div class="stat-value">${this.posts.filter(p => p.user === 'You').length}</div>
                                <div class="stat-label">Posts</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${this.savedDeals.size}</div>
                                <div class="stat-label">Saved</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">${this.shoppingLists.reduce((total, list) => total + list.items.length, 0)}</div>
                                <div class="stat-label">List Items</div>
                            </div>
                        </div>
                        
                        <button class="follow-btn" onclick="app.editProfile()">
                            <i class="fas fa-edit"></i> Edit Profile
                        </button>
                    </div>

                    <div class="profile-posts">
                        <h3>My Activity</h3>
                        <div id="userPostsContainer">
                            ${this.renderUserPosts()}
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    renderMessagesPage() {
        return `
            <div class="page">
                <h2 class="section-title">💬 Messages</h2>
                
                <div class="conversation-list">
                    <div class="conversation" onclick="app.openConversation('DealHunterSA')">
                        <div class="conversation-avatar">DH</div>
                        <div>
                            <div style="font-weight: 500;">DealHunterSA</div>
                            <div style="color: var(--text-secondary); font-size: 14px;">Thanks for the tip about Checkers!</div>
                        </div>
                    </div>
                    <div class="conversation" onclick="app.openConversation('BudgetShopperCT')">
                        <div class="conversation-avatar">BS</div>
                        <div>
                            <div style="font-weight: 500;">BudgetShopperCT</div>
                            <div style="color: var(--text-secondary); font-size: 14px;">Did you see the new Woolworths deal?</div>
                        </div>
                    </div>
                    <div class="conversation" onclick="app.openConversation('JoburgSaver')">
                        <div class="conversation-avatar">JS</div>
                        <div>
                            <div style="font-weight: 500;">JoburgSaver</div>
                            <div style="color: var(--text-secondary); font-size: 14px;">Great find on that TV deal!</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    renderNotificationsPage() {
        return `
            <div class="page">
                <h2 class="section-title">🔔 Notifications</h2>
                
                <div class="notifications-list">
                    ${this.notifications.map(notification => `
                        <div class="notification-item ${notification.read ? '' : 'unread'}" onclick="app.markNotificationRead('${notification.id}')">
                            <div class="notification-icon">
                                <i class="fas fa-${notification.type === 'deal' ? 'tag' : notification.type === 'social' ? 'heart' : 'info-circle'}"></i>
                            </div>
                            <div class="notification-content">
                                <div class="notification-message">${notification.message}</div>
                                <div class="notification-time">${notification.time}</div>
                            </div>
                            ${!notification.read ? '<div class="notification-dot"></div>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    }

    renderSettingsPage() {
        return `
            <div class="page">
                <h2 class="section-title">⚙️ Settings</h2>
                
                <div class="settings-container">
                    <!-- Theme Settings -->
                    <div class="settings-section">
                        <h3>🎨 Appearance</h3>
                        <div class="settings-item">
                            <div class="settings-info">
                                <div class="settings-label">Theme</div>
                                <div class="settings-description">Choose between light and dark mode</div>
                            </div>
                            <div class="settings-action">
                                <label class="theme-switch">
                                    <input type="checkbox" ${this.theme === 'dark' ? 'checked' : ''} onchange="app.toggleTheme()">
                                    <span class="theme-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Account Settings -->
                    <div class="settings-section">
                        <h3>👤 Account</h3>
                        <div class="settings-item" onclick="app.changeUsername()">
                            <div class="settings-info">
                                <div class="settings-label">Username</div>
                                <div class="settings-description">Change your display name</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="settings-item" onclick="app.changePassword()">
                            <div class="settings-info">
                                <div class="settings-label">Password</div>
                                <div class="settings-description">Update your password</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="settings-item" onclick="app.changeEmail()">
                            <div class="settings-info">
                                <div class="settings-label">Email</div>
                                <div class="settings-description">Change your email address</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Privacy Settings -->
                    <div class="settings-section">
                        <h3>🔒 Privacy</h3>
                        <div class="settings-item">
                            <div class="settings-info">
                                <div class="settings-label">Private Account</div>
                                <div class="settings-description">Make your profile private</div>
                            </div>
                            <div class="settings-action">
                                <label class="toggle-switch">
                                    <input type="checkbox">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        <div class="settings-item" onclick="app.showPrivacyPolicy()">
                            <div class="settings-info">
                                <div class="settings-label">Privacy Policy</div>
                                <div class="settings-description">How we protect your data</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="settings-item" onclick="app.showDataSettings()">
                            <div class="settings-info">
                                <div class="settings-label">Data Usage</div>
                                <div class="settings-description">Control your data preferences</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <!-- About Section -->
                    <div class="settings-section">
                        <h3>ℹ️ About</h3>
                        <div class="settings-item" onclick="app.showAbout()">
                            <div class="settings-info">
                                <div class="settings-label">About SaveMate</div>
                                <div class="settings-description">Learn about our mission</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="settings-item" onclick="app.showCompanyInfo()">
                            <div class="settings-info">
                                <div class="settings-label">Hunadi Digital</div>
                                <div class="settings-description">Our parent company</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="settings-item" onclick="app.showTerms()">
                            <div class="settings-info">
                                <div class="settings-label">Terms & Conditions</div>
                                <div class="settings-description">App usage terms</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Support -->
                    <div class="settings-section">
                        <h3>🛟 Support</h3>
                        <div class="settings-item" onclick="app.contactSupport()">
                            <div class="settings-info">
                                <div class="settings-label">Contact Support</div>
                                <div class="settings-description">Get help with the app</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div class="settings-item" onclick="app.reportProblem()">
                            <div class="settings-info">
                                <div class="settings-label">Report a Problem</div>
                                <div class="settings-description">Found a bug? Let us know</div>
                            </div>
                            <div class="settings-action">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <!-- App Info -->
                    <div class="settings-section">
                        <div class="app-info">
                            <div class="app-version">SaveMate v1.0.0</div>
                            <div class="app-copyright">© 2024 Hunadi Digital. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    renderBlackMarketPage() {
        return `
            <div class="page">
                <div class="black-market-header">
                    <h2 class="section-title" style="margin: 0;">⚫ Black Market</h2>
                    <button class="btn btn-secondary" style="width: auto; padding: 8px 16px;" onclick="app.createListing()">
                        <i class="fas fa-plus"></i> New Listing
                    </button>
                </div>

                <div class="job-type-selector">
                    <button class="job-type-btn active" onclick="app.filterListings('all')">All Listings</button>
                    <button class="job-type-btn" onclick="app.filterListings('job_seeking')">Job Seeking</button>
                    <button class="job-type-btn" onclick="app.filterListings('job_offering')">Job Offering</button>
                    <button class="job-type-btn" onclick="app.filterListings('services')">Services</button>
                    <button class="job-type-btn" onclick="app.filterListings('products')">Products</button>
                </div>

                <div id="blackMarketListings">
                    ${blackMarketListings.map(listing => `
                        <div class="listing-card">
                            <div class="listing-header">
                                <div class="listing-type ${listing.type}">${this.getListingTypeLabel(listing.type)}</div>
                                <div class="listing-price">${listing.price}</div>
                            </div>
                            <h3 class="listing-title">${listing.title}</h3>
                            <p class="listing-description">${listing.description}</p>
                            <div class="listing-footer">
                                <div class="listing-user">
                                    <div class="listing-avatar">${listing.user.charAt(0)}</div>
                                    <span>${listing.user}</span>
                                </div>
                                <div class="listing-meta">
                                    <span class="listing-location">📍 ${listing.location}</span>
                                    <span class="listing-time">${listing.time}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    }

    getListingTypeLabel(type) {
        const labels = {
            'job_offering': '💼 Job Offer',
            'job_seeking': '🔍 Seeking Job',
            'services': '🛠️ Service',
            'products': '📦 Product'
        }
        return labels[type] || type
    }

    loadPageData() {
        switch(this.currentPage) {
            case 'home':
                this.loadHomeData()
                break
            case 'explore':
                this.loadExploreData()
                break
            case 'universe':
                this.loadUniverseData()
                break
            case 'shopping-list':
                this.loadShoppingListData()
                break
        }
    }

    loadHomeData() {
        setTimeout(() => {
            const dealsContainer = document.getElementById('dealsContainer')
            const specialsContainer = document.getElementById('specialsContainer')
            
            if (dealsContainer) {
                dealsContainer.innerHTML = realProducts.slice(0, 4).map(product => 
                    this.renderDeal(product)
                ).join('')
            }
            
            if (specialsContainer) {
                specialsContainer.innerHTML = realProducts.slice(4, 8).map(product => 
                    this.renderDeal(product)
                ).join('')
            }
        }, 500)
    }

    loadExploreData() {
        setTimeout(() => {
            const storesContainer = document.getElementById('storesContainer')
            const exploreDealsContainer = document.getElementById('exploreDealsContainer')
            
            if (storesContainer) {
                storesContainer.innerHTML = southAfricanStores.map(store => `
                    <div class="deal-card" onclick="app.showStoreDeals('${store.id}')">
                        <div class="deal-image" style="background: ${store.color_hex}; color: white; font-weight: bold; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
                            ${store.logo}
                        </div>
                        <div class="deal-content">
                            <div class="deal-title">${store.name}</div>
                            <div class="deal-store">
                                <span>${store.category}</span>
                            </div>
                            <div class="deal-actions">
                                <button class="deal-btn" style="width: 100%; background: var(--navy-blue); color: white;">
                                    <i class="fas fa-store"></i> Browse Store
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')
            }
            
            if (exploreDealsContainer) {
                exploreDealsContainer.innerHTML = realProducts.map(product => 
                    this.renderDeal(product)
                ).join('')
            }
        }, 500)
    }

    loadUniverseData() {
        // Posts are already loaded
    }

    loadShoppingListData() {
        // Shopping lists are managed in state
    }

    renderDeal(product) {
        const store = southAfricanStores.find(s => s.id === product.store_id)
        const isSaved = this.savedDeals.has(product.id)
        
        return `
            <div class="deal-card">
                <div class="deal-image">
                    <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'; this.parentNode.style.background='var(--surface-color)'; this.parentNode.innerHTML='<div style=\\'font-size: 2rem; color: var(--text-muted)\\'>${store?.logo || '🛒'}</div>'">
                    ${product.badge ? `<div class="deal-badge">${product.badge}</div>` : ''}
                </div>
                <div class="deal-content">
                    <div class="deal-title">${product.title}</div>
                    <div class="deal-store">
                        <div style="width: 20px; height: 20px; border-radius: 4px; background: ${store?.color_hex || '#13294b'}; color: white; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold;">
                            ${store?.name?.charAt(0) || 'S'}
                        </div>
                        <span>${store?.name || 'Store'}</span>
                    </div>
                    <div class="deal-price">
                        R${product.current_price}
                        ${product.original_price ? `<span class="deal-original-price">R${product.original_price}</span>` : ''}
                    </div>
                    <div class="deal-actions">
                        <button class="deal-btn" style="background: transparent; border: 1px solid var(--border-color); color: var(--text-secondary);" 
                                onclick="app.toggleSaveDeal('${product.id}')">
                            <i class="far ${isSaved ? 'fa-bookmark' : 'fa-bookmark'}"></i> 
                            ${isSaved ? 'Saved' : 'Save'}
                        </button>
                        <button class="deal-btn" style="background: var(--navy-blue); color: white;" 
                                onclick="app.buyProduct('${product.id}')">
                            <i class="fas fa-shopping-cart"></i> Buy
                        </button>
                    </div>
                </div>
            </div>
        `
    }

    renderDealsSkeleton(count = 3) {
        return Array(count).fill(0).map(() => `
            <div class="deal-card">
                <div class="deal-image" style="background: var(--surface-color);"></div>
                <div class="deal-content">
                    <div class="deal-title" style="height: 20px; background: var(--surface-color); margin-bottom: 10px;"></div>
                    <div style="height: 16px; background: var(--surface-color); margin-bottom: 10px;"></div>
                    <div style="height: 24px; background: var(--surface-color); margin-bottom: 15px;"></div>
                    <div class="deal-actions">
                        <div style="height: 36px; background: var(--surface-color); flex: 1;"></div>
                        <div style="width: 10px;"></div>
                        <div style="height: 36px; background: var(--surface-color); flex: 1;"></div>
                    </div>
                </div>
            </div>
        `).join('')
    }

    renderStoresSkeleton() {
        return Array(6).fill(0).map(() => `
            <div class="deal-card">
                <div class="deal-image" style="background: var(--surface-color);"></div>
                <div class="deal-content">
                    <div class="deal-title" style="height: 20px; background: var(--surface-color); margin-bottom: 10px;"></div>
                    <div style="height: 16px; background: var(--surface-color); margin-bottom: 10px;"></div>
                    <div class="deal-actions">
                        <div style="height: 36px; background: var(--surface-color); width: 100%;"></div>
                    </div>
                </div>
            </div>
        `).join('')
    }

    renderPosts() {
        return this.posts.map(post => `
            <div class="post-card">
                <div class="post-header">
                    <div class="post-avatar">${post.avatar}</div>
                    <div>
                        <div class="post-user">${post.user}</div>
                        <div class="post-time">${post.time} • ${post.store}</div>
                    </div>
                </div>
                <div class="post-content">
                    ${post.content}
                </div>
                ${post.image ? `<div class="post-image" style="background-image: url('${post.image}')"></div>` : ''}
                <div class="post-actions">
                    <div class="post-action ${post.liked ? 'active' : ''}" onclick="app.likePost('${post.id}')">
                        <i class="${post.liked ? 'fas' : 'far'} fa-heart"></i>
                        <span>${post.likes}</span>
                    </div>
                    <div class="post-action" onclick="app.showComments('${post.id}')">
                        <i class="far fa-comment"></i>
                        <span>${post.comments}</span>
                    </div>
                    <div class="post-action" onclick="app.sharePost('${post.id}')">
                        <i class="fas fa-share-alt"></i>
                        <span>${post.shares}</span>
                    </div>
                </div>
            </div>
        `).join('')
    }

    renderUserPosts() {
        const userPosts = this.posts.filter(post => post.user === 'You')
        return userPosts.length > 0 ? 
            userPosts.map(post => this.renderPosts([post])).join('') :
            '<div style="text-align: center; padding: 40px; color: var(--text-muted);">' +
            '<i class="fas fa-feather" style="font-size: 48px; margin-bottom: 16px;"></i>' +
            '<p>No posts yet. Share your first deal in the Universe! 🌟</p>' +
            '<button class="btn btn-primary" style="width: auto; margin-top: 16px;" onclick="app.switchPage(\'universe\')">' +
            'Share First Post</button></div>'
    }

    renderShoppingList(list) {
        return `
            <div class="list-category">
                <h3>${list.name} 
                    <span style="font-size: 12px; color: var(--text-muted);">
                        (${list.items.length} items)
                    </span>
                    <button onclick="app.deleteList('${list.id}')" style="background: none; border: none; color: var(--danger-color); cursor: pointer; float: right;">
                        <i class="fas fa-trash"></i>
                    </button>
                </h3>
                ${list.items.length > 0 ? 
                    list.items.map(item => this.renderListItem(item)).join('') :
                    '<p style="text-align: center; color: var(--text-muted); padding: 20px;">This list is empty. Add some items!</p>'
                }
            </div>
        `
    }

    renderListItem(item) {
        return `
            <div class="list-item">
                <div style="width: 60px; height: 60px; background: var(--surface-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                    <i class="fas fa-shopping-cart" style="color: var(--text-muted);"></i>
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 500;">${item.title}</div>
                    <div style="color: var(--text-secondary); font-size: 14px;">${item.store} - R${item.price} x ${item.quantity}</div>
                </div>
                <button onclick="app.removeFromList('${item.id}')" 
                        style="background: none; border: none; color: var(--danger-color); cursor: pointer; padding: 8px;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `
    }

    // Authentication Methods
    async handleLogin() {
        const email = document.getElementById('email')?.value
        const password = document.getElementById('password')?.value

        if (!email || !password) {
            this.showToast('Please enter both email and password')
            return
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (error) {
                this.showToast('Login failed: ' + error.message)
            } else {
                this.currentUser = data.user
                this.renderApp()
                this.showToast('Welcome back to SaveMate! 🎉')
            }
        } catch (error) {
            this.showToast('Login error. Please try again.')
        }
    }

    async handleSignup() {
        const name = document.getElementById('signupName')?.value
        const email = document.getElementById('signupEmail')?.value
        const password = document.getElementById('signupPassword')?.value

        if (!name || !email || !password) {
            this.showToast('Please fill in all fields')
            return
        }

        if (password.length < 6) {
            this.showToast('Password must be at least 6 characters')
            return
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                        avatar: name.substring(0, 2).toUpperCase()
                    }
                }
            })

            if (error) {
                this.showToast('Signup failed: ' + error.message)
            } else {
                this.showToast('Account created! Check your email for verification. 📧')
                this.showLogin()
            }
        } catch (error) {
            this.showToast('Signup error. Please try again.')
        }
    }

    showSignup() {
        document.getElementById('loginForm').style.display = 'none'
        document.getElementById('signupForm').style.display = 'block'
    }

    showLogin() {
        document.getElementById('signupForm').style.display = 'none'
        document.getElementById('loginForm').style.display = 'block'
    }

    async logout() {
        try {
            await supabase.auth.signOut()
            this.currentUser = null
            this.renderApp()
            this.showToast('Logged out successfully')
        } catch (error) {
            this.showToast('Logout error')
        }
    }

    // Navigation Methods
    switchPage(page) {
        this.currentPage = page
        this.renderApp()
    }

    // Functional Methods
    toggleSaveDeal(productId) {
        if (this.savedDeals.has(productId)) {
            this.savedDeals.delete(productId)
            this.showToast('Deal removed from saved items')
        } else {
            this.savedDeals.add(productId)
            this.showToast('Deal saved to your list 💾')
        }
        this.renderApp()
    }

    buyProduct(productId) {
        const product = realProducts.find(p => p.id === productId)
        const store = southAfricanStores.find(s => s.id === product.store_id)
        this.showToast(`🛒 Redirecting to ${store?.name || 'store'} to purchase ${product.title}...`)
        
        // Simulate redirect after 2 seconds
        setTimeout(() => {
            this.showToast(`✅ ${product.title} added to cart at ${store?.name || 'store'}`)
        }, 2000)
    }

    searchDeals(query) {
        if (!query) {
            this.loadHomeData()
            return
        }
        
        const filtered = realProducts.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        )
        
        const dealsContainer = document.getElementById('dealsContainer')
        const specialsContainer = document.getElementById('specialsContainer')
        
        if (dealsContainer) {
            dealsContainer.innerHTML = filtered.map(product => this.renderDeal(product)).join('')
        }
        
        if (specialsContainer) {
            specialsContainer.innerHTML = ''
        }
        
        if (filtered.length === 0) {
            if (dealsContainer) {
                dealsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px; grid-column: 1 / -1;">No deals found for "' + query + '"</p>'
            }
        }
    }

    filterDeals(category) {
        const filtered = realProducts.filter(product => product.category === category)
        const exploreContainer = document.getElementById('exploreDealsContainer')
        if (exploreContainer) {
            exploreContainer.innerHTML = filtered.map(product => this.renderDeal(product)).join('')
        }
        this.showToast(`📂 Showing ${category} deals`)
    }

    showStoreDeals(storeId) {
        const store = southAfricanStores.find(s => s.id === storeId)
        const storeProducts = realProducts.filter(p => p.store_id === storeId)
        
        if (storeProducts.length > 0) {
            const exploreContainer = document.getElementById('exploreDealsContainer')
            if (exploreContainer) {
                exploreContainer.innerHTML = storeProducts.map(product => this.renderDeal(product)).join('')
            }
            this.showToast(`🏪 Showing products from ${store?.name}`)
        } else {
            this.showToast(`No products found for ${store?.name}`)
        }
    }

    createPost() {
        const postInput = document.getElementById('postInput')
        const content = postInput?.value.trim()
        
        if (!content) {
            this.showToast('Please enter some text for your post')
            return
        }
        
        const newPost = {
            id: Date.now().toString(),
            user: "You",
            avatar: this.getUserInitials(),
            content: content,
            time: "Just now",
            likes: 0,
            comments: 0,
            shares: 0,
            liked: false,
            store: "General"
        }
        
        this.posts.unshift(newPost)
        if (postInput) postInput.value = ''
        this.renderApp()
        this.showToast('Post published! 📢')
    }

    likePost(postId) {
        const post = this.posts.find(p => p.id === postId)
        if (post) {
            post.liked = !post.liked
            post.likes += post.liked ? 1 : -1
            this.renderApp()
            this.showToast(post.liked ? '❤️ Post liked!' : '💔 Post unliked')
        }
    }

    startScanner() {
        this.showToast('📷 Scanner activated! Point your camera at a barcode.')
        // In a real app, this would open the camera
        setTimeout(() => {
            this.showToast('🔍 Barcode detected! Searching for prices...')
        }, 2000)
    }

    searchProducts(query) {
        if (!query) {
            const resultsContainer = document.getElementById('searchResults')
            if (resultsContainer) resultsContainer.innerHTML = ''
            return
        }
        
        const filtered = realProducts.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase())
        )
        
        const resultsContainer = document.getElementById('searchResults')
        if (resultsContainer) {
            resultsContainer.innerHTML = filtered.map(product => `
                <div class="search-result-item" onclick="app.addToShoppingList('${product.id}')">
                    <div style="width: 40px; height: 40px; background: var(--surface-color); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 10px;">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div>
                        <div style="font-weight: 500;">${product.title}</div>
                        <div style="color: var(--text-secondary); font-size: 12px;">${southAfricanStores.find(s => s.id === product.store_id)?.name} - R${product.current_price}</div>
                    </div>
                </div>
            `).join('')
        }
    }

    createNewList() {
        const listName = prompt('Enter a name for your new shopping list:')
        if (listName) {
            const newList = {
                id: Date.now().toString(),
                name: listName,
                items: []
            }
            this.shoppingLists.push(newList)
            this.renderApp()
            this.showToast(`🛍️ New shopping list "${listName}" created!`)
        }
    }

    addToShoppingList(productId) {
        const product = realProducts.find(p => p.id === productId)
        const store = southAfricanStores.find(s => s.id === product.store_id)
        
        if (this.shoppingLists.length === 0) {
            this.createNewList()
            // Add product after list is created
            setTimeout(() => this.addToShoppingList(productId), 100)
            return
        }
        
        const list = this.shoppingLists[0] // Add to first list
        const existingItem = list.items.find(item => item.id === productId)
        
        if (existingItem) {
            existingItem.quantity += 1
        } else {
            list.items.push({
                id: productId,
                title: product.title,
                store: store.name,
                price: product.current_price,
                quantity: 1
            })
        }
        
        this.renderApp()
        this.showToast(`✅ ${product.title} added to your shopping list!`)
    }

    removeFromList(itemId) {
        this.shoppingLists.forEach(list => {
            list.items = list.items.filter(item => item.id !== itemId)
        })
        this.renderApp()
        this.showToast('🗑️ Item removed from shopping list')
    }

    deleteList(listId) {
        this.shoppingLists = this.shoppingLists.filter(list => list.id !== listId)
        this.renderApp()
        this.showToast('🗑️ Shopping list deleted')
    }

    // Settings Methods
    changeUsername() {
        const newUsername = prompt('Enter new username:')
        if (newUsername) {
            this.showToast(`Username updated to ${newUsername}`)
        }
    }

    changePassword() {
        this.showToast('Password change feature coming soon!')
    }

    changeEmail() {
        this.showToast('Email change feature coming soon!')
    }

    showPrivacyPolicy() {
        this.showToast('Privacy Policy: We protect your data with encryption and never share without permission.')
    }

    showDataSettings() {
        this.showToast('Data settings: You can download your data or delete your account anytime.')
    }

    showAbout() {
        this.showToast('SaveMate: Helping South Africans save money and connect through smart shopping!')
    }

    showCompanyInfo() {
        this.showToast('Hunadi Digital: Building innovative solutions for African communities since 2024.')
    }

    showTerms() {
        this.showToast('Terms: Use SaveMate responsibly. No spam, fraud, or illegal activities.')
    }

    contactSupport() {
        this.showToast('Contact: support@savemate.co.za | Call: 0861 SAVEMATE')
    }

    reportProblem() {
        this.showToast('Report issues to: bugs@savemate.co.za')
    }

    markNotificationRead(notificationId) {
        const notification = this.notifications.find(n => n.id === notificationId)
        if (notification) {
            notification.read = true
            this.renderApp()
        }
    }

    filterListings(type) {
        this.showToast(`Filtering ${type} listings...`)
    }

    createListing() {
        this.showToast('Create listing feature coming soon!')
    }

    // Utility Methods
    showToast(message) {
        // Remove existing toasts
        const existingToasts = document.querySelectorAll('.toast')
        existingToasts.forEach(toast => toast.remove())
        
        // Create new toast
        const toast = document.createElement('div')
        toast.className = 'toast show'
        toast.textContent = message
        document.body.appendChild(toast)

        setTimeout(() => {
            toast.remove()
        }, 3000)
    }

    getUserInitials() {
        const userData = this.currentUser?.user_metadata
        if (userData?.avatar) return userData.avatar
        if (userData?.full_name) return userData.full_name.substring(0, 2).toUpperCase()
        return this.currentUser?.email?.substring(0, 2).toUpperCase() || 'U'
    }

    // Placeholder Methods for Future Features
    editProfile() {
        this.showToast('👤 Edit profile feature coming soon!')
    }

    uploadAvatar() {
        this.showToast('📸 Avatar upload feature coming soon!')
    }

    openConversation(user) {
        this.showToast(`💬 Opening conversation with ${user}`)
    }

    attachMedia() {
        this.showToast('🖼️ Media attachment feature coming soon!')
    }

    showComments(postId) {
        this.showToast('💬 Comments feature coming soon!')
    }

    sharePost(postId) {
        this.showToast('📤 Share post feature coming soon!')
    }
}

// Initialize app
const app = new SaveMateApp()
window.app = app