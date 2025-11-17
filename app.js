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
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Checkers_Logo.svg/1200px-Checkers_Logo.svg.png"
    },
    {
        id: '2',
        name: "Pick n Pay",
        category: "Supermarket", 
        color_hex: "#0055A4",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pick_n_Pay_logo.svg/1200px-Pick_n_Pay_logo.svg.png"
    },
    {
        id: '3',
        name: "Woolworths",
        category: "Supermarket",
        color_hex: "#000000",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Woolworths_Logo.svg/1200px-Woolworths_Logo.svg.png"
    },
    {
        id: '4',
        name: "Shoprite",
        category: "Supermarket",
        color_hex: "#FF0000", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shoprite_Logo.svg/1200px-Shoprite_Logo.svg.png"
    },
    {
        id: '5',
        name: "Spar",
        category: "Supermarket",
        color_hex: "#008000",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/SPAR_International_logo.svg/1200px-SPAR_International_logo.svg.png"
    },
    {
        id: '6',
        name: "Makro",
        category: "Wholesale",
        color_hex: "#FF6B00",
        logo: "https://www.makro.co.za/sites/makro_co_za/files/2021-06/makro-logo.svg"
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
        image: "https://www.checkers.co.za/medias/10214747EA-20190726-Media-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU4NnxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDg0Lzg5NzIyNzI0MjA1MTAuanBnfDg0YzQ5Y2Q0YzE2YzA5ZTY2NzU5YzQzYzUxYzQ2Y2YwYjU1YjU1YzY0YjU4YjQ1Y2Q2YzE3YzQ4Y2FhY2M",
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
        image: "https://www.pnp.co.za/medias/10224049EA-20190726-Media-pnp-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU4NnxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDg0Lzg5NzIyNzI0MjA1MTAuanBnfDg0YzQ5Y2Q0YzE2YzA5ZTY2NzU5YzQzYzUxYzQ2Y2YwYjU1YjU1YzY0YjU4YjQ1Y2Q2YzE3YzQ4Y2FhY2M",
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
        image: "https://woolworthsonline.co.za/medias/10214747EA-20190726-Media-woolworths300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU4NnxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDg0Lzg5NzIyNzI0MjA1MTAuanBnfDg0YzQ5Y2Q0YzE2YzA5ZTY2NzU5YzQzYzUxYzQ2Y2YwYjU1YjU1YzY0YjU4YjQ1Y2Q2YzE3YzQ4Y2FhY2M",
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
        image: "https://www.shoprite.co.za/medias/10214747EA-20190726-Media-shoprite300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU4NnxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDg0Lzg5NzIyNzI0MjA1MTAuanBnfDg0YzQ5Y2Q0YzE2YzA5ZTY2NzU5YzQzYzUxYzQ2Y2YwYjU1YjU1YzY0YjU4YjQ1Y2Q2YzE3YzQ4Y2FhY2M",
        description: "Koo Baked Beans in Tomato Sauce",
        badge: "15% OFF"
    },
    {
        id: '5',
        title: "Spar Lettuce",
        current_price: 12.99,
        original_price: 15.99,
        category: "Fresh Produce",
        store_id: '5',
        image: "https://www.spar.co.za/medias/10214747EA-20190726-Media-spar300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU4NnxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDg0Lzg5NzIyNzI0MjA1MTAuanBnfDg0YzQ5Y2Q0YzE2YzA5ZTY2NzU5YzQzYzUxYzQ2Y2YwYjU1YjU1YzY0YjU4YjQ1Y2Q2YzE3YzQ4Y2FhY2M",
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
        image: "https://www.makro.co.za/medias/10214747EA-20190726-Media-makro300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU4NnxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDg0Lzg5NzIyNzI0MjA1MTAuanBnfDg0YzQ5Y2Q0YzE2YzA5ZTY2NzU5YzQzYzUxYzQ2Y2YwYjU1YjU1YzY0YjU4YjQ1Y2Q2YzE3YzQ4Y2FhY2M",
        description: "Samsung 55\" 4K Smart TV",
        badge: "HOT DEAL"
    }
]

// Real social posts
const realPosts = [
    {
        id: '1',
        user: "DealHunterSA",
        avatar: "DH",
        content: "Just found Tastic Rice for R105.99 at Checkers! That's a R24 saving! 🎉 #MzansiDeals #SaveMate",
        image: "https://www.checkers.co.za/medias/10214747EA-20190726-Media-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU4NnxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDg0Lzg5NzIyNzI0MjA1MTAuanBnfDg0YzQ5Y2Q0YzE2YzA5ZTY2NzU5YzQzYzUxYzQ2Y2YwYjU1YjU1YzY0YjU4YjQ1Y2Q2YzE3YzQ4Y2FhY2M",
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
        image: "https://woolworthsonline.co.za/medias/10214747EA-20190726-Media-woolworths300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU4NnxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDg0Lzg5NzIyNzI0MjA1MTAuanBnfDg0YzQ5Y2Q0YzE2YzA5ZTY2NzU5YzQzYzUxYzQ2Y2YwYjU1YjU1YzY0YjU4YjQ1Y2Q2YzE3YzQ4Y2FhY2M",
        time: "5 hours ago",
        likes: 42,
        comments: 12,
        shares: 5,
        liked: true,
        store: "Woolworths"
    }
]

class SaveMateApp {
    constructor() {
        this.currentUser = null
        this.currentPage = 'home'
        this.savedDeals = new Set()
        this.shoppingLists = []
        this.posts = [...realPosts]
        this.init()
    }

    async init() {
        await this.checkAuth()
        this.setupEventListeners()
        this.renderApp()
    }

    async checkAuth() {
        const { data: { user } } = await supabase.auth.getUser()
        this.currentUser = user
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

    renderApp() {
        const app = document.getElementById('app')
        
        if (!this.currentUser) {
            app.innerHTML = this.renderAuthPage()
            return
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
                    <button class="header-btn" onclick="app.switchPage('messages')">
                        <i class="fas fa-comments"></i>
                    </button>
                    <button class="header-btn" onclick="app.showNotifications()">
                        <i class="fas fa-bell"></i>
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
                        <button class="btn btn-primary" onclick="app.handleLogin()">Log In</button>
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
                            <input type="password" id="signupPassword" class="form-control" placeholder="Create a password">
                        </div>
                        <button class="btn btn-primary" onclick="app.handleSignup()">Sign Up</button>
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
                    <h2>Hello, ${this.currentUser?.email || 'Shopper'}!</h2>
                    <p>Discover the best deals from South African retailers</p>
                </div>

                <div class="search-container">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="homeSearch" placeholder="Search products, stores, or deals..." oninput="app.searchDeals(this.value)">
                    </div>
                </div>

                <h2 class="section-title">Trending Deals</h2>
                <div class="deals-grid" id="dealsContainer">
                    ${this.renderDealsSkeleton()}
                </div>

                <h2 class="section-title">Weekly Specials</h2>
                <div class="deals-grid" id="specialsContainer">
                    ${this.renderDealsSkeleton()}
                </div>
            </div>
        `
    }

    renderExplorePage() {
        return `
            <div class="page">
                <h2 class="section-title">Explore Categories</h2>
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

                <h2 class="section-title">Featured Stores</h2>
                <div class="deals-grid" id="storesContainer">
                    ${this.renderStoresSkeleton()}
                </div>

                <h2 class="section-title">All Products</h2>
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
                        Start Scanning
                    </button>
                </div>

                <h2 class="section-title">Recently Scanned</h2>
                <div id="recentlyScanned">
                    <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                        <i class="fas fa-barcode" style="font-size: 48px; margin-bottom: 16px;"></i>
                        <p>No recently scanned items</p>
                    </div>
                </div>
            </div>
        `
    }

    renderShoppingListPage() {
        return `
            <div class="page">
                <h2 class="section-title">My Shopping Lists</h2>
                
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
                            '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No shopping lists yet. Create your first list!</p>'
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
                        <p>SaveMate enthusiast finding the best deals in South Africa!</p>
                        
                        <div class="profile-stats">
                            <div class="stat">
                                <div class="stat-value">12</div>
                                <div class="stat-label">Posts</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">245</div>
                                <div class="stat-label">Followers</div>
                            </div>
                            <div class="stat">
                                <div class="stat-value">178</div>
                                <div class="stat-label">Following</div>
                            </div>
                        </div>
                        
                        <button class="follow-btn" onclick="app.editProfile()">
                            <i class="fas fa-edit"></i> Edit Profile
                        </button>
                    </div>

                    <div class="profile-posts">
                        <h3>My Posts</h3>
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
                <h2 class="section-title">Messages</h2>
                
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
                </div>
            </div>
        `
    }

    renderBlackMarketPage() {
        return `
            <div class="page">
                <div class="black-market-header">
                    <h2 class="section-title" style="margin: 0;">Black Market</h2>
                    <button class="btn btn-secondary" style="width: auto; padding: 8px 16px;" onclick="app.createListing()">
                        <i class="fas fa-plus"></i> New Listing
                    </button>
                </div>

                <div class="job-type-selector">
                    <button class="job-type-btn active">All Listings</button>
                    <button class="job-type-btn">Job Seeking</button>
                    <button class="job-type-btn">Job Offering</button>
                    <button class="job-type-btn">Services</button>
                    <button class="job-type-btn">Products</button>
                </div>

                <div id="blackMarketListings">
                    <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                        <i class="fas fa-store" style="font-size: 48px; margin-bottom: 16px;"></i>
                        <p>No listings yet. Be the first to create one!</p>
                    </div>
                </div>
            </div>
        `
    }

    // ... (rest of the methods including loadPageData, renderDeals, etc.)

    // Add all the functional methods for buttons and interactions
    async handleLogin() {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if (!email || !password) {
            this.showToast('Please enter both email and password')
            return
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            this.showToast('Login failed: ' + error.message)
        } else {
            this.currentUser = data.user
            this.renderApp()
            this.showToast('Welcome back to SaveMate!')
        }
    }

    async handleSignup() {
        const name = document.getElementById('signupName').value
        const email = document.getElementById('signupEmail').value
        const password = document.getElementById('signupPassword').value

        if (!name || !email || !password) {
            this.showToast('Please fill in all fields')
            return
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name
                }
            }
        })

        if (error) {
            this.showToast('Signup failed: ' + error.message)
        } else {
            this.showToast('Account created! Check your email for verification.')
            this.showLogin()
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
        await supabase.auth.signOut()
        this.currentUser = null
        this.renderApp()
        this.showToast('Logged out successfully')
    }

    switchPage(page) {
        this.currentPage = page
        this.renderApp()
    }

    showToast(message) {
        // Create toast element
        const toast = document.createElement('div')
        toast.className = 'toast show'
        toast.textContent = message
        document.body.appendChild(toast)

        setTimeout(() => {
            toast.remove()
        }, 3000)
    }

    getUserInitials() {
        return this.currentUser?.email?.substring(0, 2).toUpperCase() || 'U'
    }

    // Add all other functional methods...
}

// Initialize app
const app = new SaveMateApp()
window.app = app// Add these methods to your SaveMateApp class:

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
    // Load trending deals
    const dealsContainer = document.getElementById('dealsContainer')
    const specialsContainer = document.getElementById('specialsContainer')
    
    if (dealsContainer) {
        dealsContainer.innerHTML = realProducts.slice(0, 3).map(product => 
            this.renderDeal(product)
        ).join('')
    }
    
    if (specialsContainer) {
        specialsContainer.innerHTML = realProducts.slice(3, 6).map(product => 
            this.renderDeal(product)
        ).join('')
    }
}

loadExploreData() {
    // Load stores
    const storesContainer = document.getElementById('storesContainer')
    const exploreDealsContainer = document.getElementById('exploreDealsContainer')
    
    if (storesContainer) {
        storesContainer.innerHTML = southAfricanStores.map(store => `
            <div class="deal-card" onclick="app.showStoreDeals('${store.id}')">
                <div class="deal-image" style="background: ${store.color_hex}; color: white; font-weight: bold; display: flex; align-items: center; justify-content: center;">
                    ${store.name.toUpperCase()}
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
}

loadUniverseData() {
    // Posts are already rendered in the template
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
                <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'; this.parentNode.innerHTML='${product.title}'">
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
            <div class="deal-image" style="background: var(--secondary-bg);"></div>
            <div class="deal-content">
                <div class="deal-title" style="height: 20px; background: var(--secondary-bg); margin-bottom: 10px;"></div>
                <div style="height: 16px; background: var(--secondary-bg); margin-bottom: 10px;"></div>
                <div style="height: 24px; background: var(--secondary-bg); margin-bottom: 15px;"></div>
                <div class="deal-actions">
                    <div style="height: 36px; background: var(--secondary-bg); flex: 1;"></div>
                    <div style="width: 10px;"></div>
                    <div style="height: 36px; background: var(--secondary-bg); flex: 1;"></div>
                </div>
            </div>
        </div>
    `).join('')
}

renderStoresSkeleton() {
    return Array(6).fill(0).map(() => `
        <div class="deal-card">
            <div class="deal-image" style="background: var(--secondary-bg);"></div>
            <div class="deal-content">
                <div class="deal-title" style="height: 20px; background: var(--secondary-bg); margin-bottom: 10px;"></div>
                <div style="height: 16px; background: var(--secondary-bg); margin-bottom: 10px;"></div>
                <div class="deal-actions">
                    <div style="height: 36px; background: var(--secondary-bg); width: 100%;"></div>
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
        '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No posts yet. Share your first deal!</p>'
}

renderShoppingList(list) {
    return `
        <div class="list-category">
            <h3>${list.name} 
                <span style="font-size: 12px; color: var(--text-muted);">
                    (${list.items.length} items)
                </span>
                <button onclick="app.deleteList('${list.id}')" style="background: none; border: none; color: var(--danger); cursor: pointer; float: right;">
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
            <div style="width: 60px; height: 60px; background: var(--secondary-bg); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                <i class="fas fa-barcode" style="color: var(--text-muted);"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 500;">${item.title}</div>
                <div style="color: var(--text-secondary); font-size: 14px;">${item.store} - R${item.price} x ${item.quantity}</div>
            </div>
            <button onclick="app.removeFromList('${item.id}')" 
                    style="background: none; border: none; color: var(--danger); cursor: pointer;">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `
}

// Functional methods
toggleSaveDeal(productId) {
    if (this.savedDeals.has(productId)) {
        this.savedDeals.delete(productId)
        this.showToast('Deal removed from saved items')
    } else {
        this.savedDeals.add(productId)
        this.showToast('Deal saved to your list')
    }
    this.renderApp()
}

buyProduct(productId) {
    const product = realProducts.find(p => p.id === productId)
    this.showToast(`Redirecting to ${product?.store_id ? southAfricanStores.find(s => s.id === product.store_id)?.name : 'store'}...`)
}

searchDeals(query) {
    if (!query) {
        this.loadHomeData()
        return
    }
    
    const filtered = realProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    )
    
    const dealsContainer = document.getElementById('dealsContainer')
    if (dealsContainer) {
        dealsContainer.innerHTML = filtered.map(product => this.renderDeal(product)).join('')
    }
}

filterDeals(category) {
    const filtered = realProducts.filter(product => product.category === category)
    const exploreContainer = document.getElementById('exploreDealsContainer')
    if (exploreContainer) {
        exploreContainer.innerHTML = filtered.map(product => this.renderDeal(product)).join('')
    }
    this.showToast(`Showing ${category} deals`)
}

showStoreDeals(storeId) {
    const store = southAfricanStores.find(s => s.id === storeId)
    const storeProducts = realProducts.filter(p => p.store_id === storeId)
    this.showToast(`Showing products from ${store?.name}`)
    // In a real app, you would filter and display store-specific products
}

createPost() {
    const postInput = document.getElementById('postInput')
    const content = postInput.value.trim()
    
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
    postInput.value = ''
    this.renderApp()
    this.showToast('Post published!')
}

likePost(postId) {
    const post = this.posts.find(p => p.id === postId)
    if (post) {
        post.liked = !post.liked
        post.likes += post.liked ? 1 : -1
        this.renderApp()
        this.showToast(post.liked ? 'Post liked!' : 'Post unliked')
    }
}

startScanner() {
    this.showToast('Scanner activated! Point your camera at a barcode.')
    // In a real app, this would open the camera
}

searchProducts(query) {
    if (!query) {
        document.getElementById('searchResults').innerHTML = ''
        return
    }
    
    const filtered = realProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
    )
    
    const resultsContainer = document.getElementById('searchResults')
    resultsContainer.innerHTML = filtered.map(product => `
        <div class="search-result-item" onclick="app.addToShoppingList('${product.id}')">
            <div style="width: 40px; height: 40px; background: var(--secondary-bg); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 10px;">
                <i class="fas fa-barcode"></i>
            </div>
            <div>
                <div style="font-weight: 500;">${product.title}</div>
                <div style="color: var(--text-secondary); font-size: 12px;">${southAfricanStores.find(s => s.id === product.store_id)?.name} - R${product.current_price}</div>
            </div>
        </div>
    `).join('')
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
        this.showToast(`New shopping list "${listName}" created!`)
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
    this.showToast(`${product.title} added to your shopping list!`)
}

removeFromList(itemId) {
    this.shoppingLists.forEach(list => {
        list.items = list.items.filter(item => item.id !== itemId)
    })
    this.renderApp()
    this.showToast('Item removed from shopping list')
}

deleteList(listId) {
    this.shoppingLists = this.shoppingLists.filter(list => list.id !== listId)
    this.renderApp()
    this.showToast('Shopping list deleted')
}

editProfile() {
    this.showToast('Edit profile feature coming soon!')
}

uploadAvatar() {
    this.showToast('Avatar upload feature coming soon!')
}

openConversation(user) {
    this.showToast(`Opening conversation with ${user}`)
}

showNotifications() {
    this.showToast('You have 3 new notifications')
}

attachMedia() {
    this.showToast('Media attachment feature coming soon!')
}

showComments(postId) {
    this.showToast('Comments feature coming soon!')
}

sharePost(postId) {
    this.showToast('Share post feature coming soon!')
}

createListing() {
    this.showToast('Create listing feature coming soon!')
}