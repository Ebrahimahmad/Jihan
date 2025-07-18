// Loading overlay control
function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

// Message toast control
function showMessage(message, isError = false) {
    const toast = document.getElementById('message-toast');
    const messageText = document.getElementById('message-text');
    
    messageText.textContent = message;
    toast.className = `message-toast ${isError ? 'error' : ''}`;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Update dashboard stats
function updateDashboardStats() {
    document.getElementById('last-update').textContent = new Date().toLocaleString('ku');
}

// Show/hide sections
function showLogin() {
    document.getElementById('login-section').style.display = 'flex';
    document.getElementById('admin-dashboard').style.display = 'none';
}

function showDashboard(username) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'flex';
    document.getElementById('admin-username').textContent = username;
    updateDashboardStats();
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');
    
    showLoading();
    
    // Validate credentials
    const validUsername = 'Admin';
    const validPassword = 'Admin123';

    if (username.trim() === validUsername && password === validPassword) {
        errorDiv.style.display = 'none';
        showMessage('Login Successful');
        
        // Short delay to show the success message
        setTimeout(() => {
            showDashboard('Admin');
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('admin-dashboard').style.display = 'flex';
        }, 500);
    } else {
        errorDiv.textContent = 'Invalid username or password';
        errorDiv.style.display = 'block';
    }
    
    hideLoading();
}

// Handle logout
function handleLogout() {
    showMessage('Logged out successfully');
    setTimeout(() => {
        showLogin();
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('login-error').style.display = 'none';
    }, 500);
}

// Initialize admin panel
function initAdmin() {
    // Show login on start
    showLogin();
    
    // Set up event listeners
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Disable refresh buttons for now
    const refreshBtn = document.getElementById('refresh-rates');
    if (refreshBtn) {
        refreshBtn.disabled = true;
        refreshBtn.title = 'Currently disabled';
    }
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initAdmin);


