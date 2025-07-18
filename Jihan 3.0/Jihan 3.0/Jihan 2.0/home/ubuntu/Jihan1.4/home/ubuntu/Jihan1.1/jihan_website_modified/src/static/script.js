// Currency flag mapping
const currencyFlags = {
    'USD': 'https://flagcdn.com/w40/us.png',
    'EUR': 'https://flagcdn.com/w40/eu.png',
    'GBP': 'https://flagcdn.com/w40/gb.png',
    'TRY': 'https://flagcdn.com/w40/tr.png',
    'IRR': 'https://flagcdn.com/w40/ir.png',
    'NOK': 'https://flagcdn.com/w40/no.png',
    'SEK': 'https://flagcdn.com/w40/se.png',
    'JOD': 'https://flagcdn.com/w40/jo.png',
    'SAR': 'https://flagcdn.com/w40/sa.png',
    'AED': 'https://flagcdn.com/w40/ae.png',
    'CAD': 'https://flagcdn.com/w40/ca.png',
    'AUD': 'https://flagcdn.com/w40/au.png',
    'CHF': 'https://flagcdn.com/w40/ch.png',
    'DKK': 'https://flagcdn.com/w40/dk.png',
    'QAR': 'https://flagcdn.com/w40/qa.png',
    'KWD': 'https://flagcdn.com/w40/kw.png',
    'IQD': 'https://flagcdn.com/w40/iq.png'
};

// Translation object
const translations = {
    ku: {
        site_title: 'نوسینگەی جیهان',
        services_text: 'هاوبەشی متمانەپێکراوتان بۆ خزمەتگوزاری گۆڕینی دراو',
        best_rates: 'باشترین نرخی گۆڕین',
        secure_transactions: 'مامەڵەی پارێزراو',
        fast_service: 'خزمەتگوزاری خێرا',
        exchange_rates: 'نرخی دراو',
        refresh_rates: 'نوێکردنەوەی نرخەکان',
        payment_methods: 'ڕێگەکانی پارەدان:',
        services_title: 'خزمەتگوزارییەکان',
        currency_exchange: 'گۆڕینی دراو',
        money_transfer: 'گواستنەوەی پارە',
        fast_exchange: 'ڕاوێژکاری نرخ',
        location: 'ناونیشان:',
        location_text: 'تەق تەق، شەقامی گشتی، بەرامبەر کۆمیتە',
        mariwan: 'مەریوان:',
        hiwa: 'هیوا:',
        copyright: '© 2025 نوسینگەی جیهان - هەموو مافەکان پارێزراون',
        admin_panel: 'پانێڵی بەڕێوەبەر'
    },
    en: {
        site_title: 'Jihan Exchange',
        services_text: 'Your trusted partner for reliable currency exchange services',
        best_rates: 'Best Exchange Rates',
        secure_transactions: 'Secure Transactions',
        fast_service: 'Fast Service',
        exchange_rates: 'Exchange Rates',
        refresh_rates: 'Refresh Rates',
        payment_methods: 'Payment Methods:',
        services_title: 'Services',
        currency_exchange: 'Currency Exchange',
        money_transfer: 'Money Transfer',
        fast_exchange: 'Rate Advisory',
        location: 'Address:',
        location_text: 'Taq Taq, Main Street, Opposite Committee',
        mariwan: 'Mariwan:',
        hiwa: 'Hiwa:',
        copyright: '© 2025 Jihan Exchange - All Rights Reserved',
        admin_panel: 'Admin Panel'
    },
    ar: {
        site_title: 'مکتب جیهان',
        services_text: 'شريكك الموثوق لخدمات صرف العملات الموثوقة',
        best_rates: 'أفضل أسعار الصرف',
        secure_transactions: 'معاملات آمنة',
        fast_service: 'خدمة سريعة',
        exchange_rates: 'أسعار الصرف',
        refresh_rates: 'تحديث الأسعار',
        payment_methods: 'طرق الدفع:',
        services_title: 'الخدمات',
        currency_exchange: 'صرف العملات',
        money_transfer: 'تحويل الأموال',
        fast_exchange: 'استشارة الأسعار',
        location: 'العنوان:',
        location_text: 'تق تق، الشارع الرئيسي، مقابل اللجنة',
        mariwan: 'مريوان:',
        hiwa: 'هيوا:',
        copyright: '© 2025 مکتب جیهان - جميع الحقوق محفوظة',
        admin_panel: 'لوحة الإدارة'
    }
};

// Currency names in different languages
const currencyNames = {
    ku: {
        'USD': 'دۆلاری ئەمریکی',
        'EUR': 'یۆرۆ',
        'GBP': 'پاوەندی بەریتانی',
        'TRY': 'لیرەی تورکی',
        'IRR': 'تومانی ئێران',
        'NOK': 'کرۆنی نۆرویژی',
        'SEK': 'کرۆنی سویدی',
        'JOD': 'دیناری ئوردونی',
        'SAR': 'ڕیالی سعودی',
        'AED': 'درهەمی ئیمارات',
        'CAD': 'دۆلاری کەنەدی',
        'AUD': 'دۆلاری ئوسترالی',
        'CHF': 'فرانکی سویسری',
        'DKK': 'کرۆنی دانمارکی',
        'QAR': 'ڕیالی قەتەری',
        'KWD': 'دیناری کویتی',
        'IQD': 'دیناری عێراقی'
    },
    en: {
        'USD': 'US Dollar',
        'EUR': 'Euro',
        'GBP': 'British Pound',
        'TRY': 'Turkish Lira',
        'IRR': 'Iranian Toman',
        'NOK': 'Norwegian Krone',
        'SEK': 'Swedish Krona',
        'JOD': 'Jordanian Dinar',
        'SAR': 'Saudi Riyal',
        'AED': 'UAE Dirham',
        'CAD': 'Canadian Dollar',
        'AUD': 'Australian Dollar',
        'CHF': 'Swiss Franc',
        'DKK': 'Danish Krone',
        'QAR': 'Qatari Riyal',
        'KWD': 'Kuwaiti Dinar',
        'IQD': 'Iraqi Dinar'
    },
    ar: {
        'USD': 'الدولار الأمريكي',
        'EUR': 'اليورو',
        'GBP': 'الجنيه البريطاني',
        'TRY': 'الليرة التركية',
        'IRR': 'التومان الإيراني',
        'NOK': 'الكرونة النرويجية',
        'SEK': 'الكرونة السويدية',
        'JOD': 'الدينار الأردني',
        'SAR': 'الريال السعودي',
        'AED': 'الدرهم الإماراتي',
        'CAD': 'الدولار الكندي',
        'AUD': 'الدولار الأسترالي',
        'CHF': 'الفرنك السويسري',
        'DKK': 'الكرونة الدنماركية',
        'QAR': 'الريال القطري',
        'KWD': 'الدينار الكويتي',
        'IQD': 'الدينار العراقي'
    }
};

// Sample exchange rates data (simulating live data)
let exchangeRates = [
    { code: 'IQD', buy: 140988.01, sell: 141083.09 },
    { code: 'EUR', buy: 116.26, sell: 115.67 },
    { code: 'GBP', buy: 132.74, sell: 135.45 },
    { code: 'TRY', buy: 4140.51, sell: 3886.82 },
    { code: 'IRR', buy: 8848628.11, sell: 7324177.53 },
    { code: 'NOK', buy: 79.57, sell: 87.74 },
    { code: 'SEK', buy: 87.52, sell: 89.58 },
    { code: 'JOD', buy: 70.89, sell: 67.94 },
    { code: 'SAR', buy: 385.77, sell: 376.49 },
    { code: 'AED', buy: 374.25, sell: 368.89 },
    { code: 'CAD', buy: 71.72, sell: 72.62 },
    { code: 'AUD', buy: 62.27, sell: 63.91 },
    { code: 'CHF', buy: 123.00, sell: 123.25 },
    { code: 'DKK', buy: 128.73, sell: 136.93 },
    { code: 'QAR', buy: 383.97, sell: 377.22 },
    { code: 'KWD', buy: 292.28, sell: 317.05 }
];

let currentLanguage = 'ku';
let lastUpdateTime = Date.now();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    renderExchangeRates();
});

function initializeApp() {
    // Set initial language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ku';
    switchLanguage(savedLanguage);
}

function setupEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Manual refresh button
    const refreshBtn = document.getElementById("refreshBtnTop");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", function() {
            manualRefreshRates();
        });
    }

    // Admin logo click for admin panel
    const adminLogo = document.getElementById("adminLogo");
    if (adminLogo) {
        adminLogo.addEventListener("click", function() {
            window.location.href = "admin.html";
        });
    }
}

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update active tab
    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-lang') === lang) {
            tab.classList.add('active');
        }
    });
    
    // Update text direction
    const body = document.body;
    if (lang === 'en') {
        body.setAttribute('dir', 'ltr');
    } else {
        body.setAttribute('dir', 'rtl');
    }
    
    // Update all translatable elements
    updateTranslations();
    renderExchangeRates();
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');
    
    if (dateElement && timeElement) {
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            timeZone: 'Asia/Baghdad'
        };
        
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Baghdad'
        };
        
        dateElement.textContent = now.toLocaleDateString('en-CA', options);
        timeElement.textContent = now.toLocaleTimeString('en-GB', timeOptions);
    }
}

function formatNumber(number) {
    // Format Iranian Toman to show full numbers with commas
    if (number >= 1000000) {
        return number.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    return number.toFixed(2);
}

function renderExchangeRates() {
    const container = document.getElementById('ratesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    exchangeRates.forEach(rate => {
        const rateRow = document.createElement('div');
        rateRow.className = 'rate-row';
        
        const currencyName = currencyNames[currentLanguage][rate.code] || rate.code;
        const flagUrl = currencyFlags[rate.code] || 'https://flagcdn.com/w40/xx.png';
        
        rateRow.innerHTML = `
            <div class="currency-info">
                <img src="${flagUrl}" alt="${rate.code}" class="currency-flag" onerror="this.style.display='none'">
                <div class="currency-details">
                    <div class="currency-name">${currencyName}</div>
                    <div class="currency-code">${rate.code}</div>
                </div>
            </div>
            <div class="rate-value buy-rate">${formatNumber(rate.buy)}</div>
            <div class="rate-value sell-rate">${formatNumber(rate.sell)}</div>
        `;
        
        container.appendChild(rateRow);
    });
}

function manualRefreshRates() {
    const refreshBtn = document.getElementById('refreshBtnTop');
    if (refreshBtn) {
        refreshBtn.disabled = true;
        refreshBtn.textContent = currentLanguage === 'ku' ? 'نوێکردنەوە...' : 
                                 currentLanguage === 'en' ? 'Refreshing...' : 'جاري التحديث...';
    }
    
    // Simulate fetching new rates (in real implementation, this would fetch from the source website)
    setTimeout(() => {
        // Simulate small random changes in rates
        exchangeRates = exchangeRates.map(rate => {
            if (rate.code === 'IQD' || rate.code === 'EUR' || rate.code === 'GBP') {
                return rate; // Do not change these rates randomly
            }
            return {
                ...rate,
                buy: rate.buy + (Math.random() - 0.5) * rate.buy * 0.001,
                sell: rate.sell + (Math.random() - 0.5) * rate.sell * 0.001
            };
        });
        
        renderExchangeRates();
        lastUpdateTime = Date.now();
        
        if (refreshBtn) {
            refreshBtn.disabled = false;
            refreshBtn.textContent = translations[currentLanguage].refresh_rates;
        }
        
        // Show success message
        showNotification(
            currentLanguage === 'ku' ? 'نرخەکان نوێکرانەوە' :
            currentLanguage === 'en' ? 'Rates updated successfully' : 'تم تحديث الأسعار بنجاح',
            'success'
        );
    }, 1500);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
        color: ${type === 'success' ? '#155724' : '#721c24'};
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        z-index: 1001;
        font-weight: 600;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Admin panel functionality (for admin.html)
if (window.location.pathname.includes('admin')) {
    // Updated admin credentials
    const ADMIN_CREDENTIALS = {
        username: 'Admin',
        password: 'Jihan$ex1'
    };
    
    function handleAdminLogin(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('adminPanel').style.display = 'block';
            loadExchangeRates();
        } else {
            showError('Invalid credentials. Please try again.');
        }
    }
    
    function showError(message) {
        const errorDiv = document.getElementById('errorMessage') || document.createElement('div');
        errorDiv.id = 'errorMessage';
        errorDiv.className = 'error';
        errorDiv.textContent = message;
        
        const form = document.getElementById('loginForm');
        if (form && !document.getElementById('errorMessage')) {
            form.appendChild(errorDiv);
        }
    }
    
    function loadExchangeRates() {
        const tbody = document.querySelector('#ratesTable tbody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        exchangeRates.forEach((rate, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${rate.code}</td>
                <td><input type="number" value="${rate.buy}" step="0.01" onchange="updateRate(${index}, 'buy', this.value)"></td>
                <td><input type="number" value="${rate.sell}" step="0.01" onchange="updateRate(${index}, 'sell', this.value)"></td>
                <td><button onclick="deleteRate(${index})" class="delete-btn">Delete</button></td>
            `;
            tbody.appendChild(row);
        });
    }
    
    function updateRate(index, type, value) {
        exchangeRates[index][type] = parseFloat(value);
        saveRates();
    }
    
    function deleteRate(index) {
        exchangeRates.splice(index, 1);
        loadExchangeRates();
        saveRates();
    }
    
    function addNewRate() {
        const code = document.getElementById('newCode').value.toUpperCase();
        const buy = parseFloat(document.getElementById('newBuy').value);
        const sell = parseFloat(document.getElementById('newSell').value);
        
        if (code && !isNaN(buy) && !isNaN(sell)) {
            exchangeRates.push({ code, buy, sell });
            loadExchangeRates();
            saveRates();
            
            // Clear form
            document.getElementById('newCode').value = '';
            document.getElementById('newBuy').value = '';
            document.getElementById('newSell').value = '';
        }
    }
    
    function saveRates() {
        // In a real implementation, this would save to a database
        localStorage.setItem('exchangeRates', JSON.stringify(exchangeRates));
        console.log('Rates saved:', exchangeRates);
    }
    
    // Load saved rates on admin panel load
    const savedRates = localStorage.getItem('exchangeRates');
    if (savedRates) {
        exchangeRates = JSON.parse(savedRates);
    }
}

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

