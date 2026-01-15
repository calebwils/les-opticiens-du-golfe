/**
 * Core Logic for Les Opticiens du Golfe - Admin System
 */

const AdminApp = {
    init() {
        console.log("Admin Interface Initialized");
        this.loadStats();
        this.renderExpirationList();
    },

    /**
     * Simulation of data loading
     */
    loadStats() {
        // In a real app, this would fetch from an API
    },

    /**
     * Calculate expiration based on pick-up date and duration
     * @param {string} dateStr - YYYY-MM-DD
     * @param {number} durationMonths - 12, 18, 24
     */
    calculateExpiration(dateStr, durationMonths) {
        const date = new Date(dateStr);
        date.setMonth(date.getMonth() + durationMonths);
        return date;
    },

    /**
     * Get visual status based on expiration date
     */
    getExpirationStatus(expDate) {
        const now = new Date();
        const diffDays = Math.ceil((expDate - now) / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return { label: 'Expiré', class: 'badge-danger' };
        if (diffDays <= 60) return { label: 'Expire bientôt', class: 'badge-warning' };
        return { label: 'Valide', class: 'badge-success' };
    }
};

// Sidebar Toggle Functionality
function initSidebarToggle() {
    const sidebar = document.getElementById('adminSidebar');
    const mainContent = document.getElementById('adminMain');
    const toggleBtn = document.getElementById('sidebarToggle');
    const toggleIcon = toggleBtn?.querySelector('i');

    if (!sidebar || !mainContent || !toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');

        // Toggle icon direction
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.classList.remove('fa-chevron-left');
            toggleIcon.classList.add('fa-chevron-right');
        } else {
            toggleIcon.classList.remove('fa-chevron-right');
            toggleIcon.classList.add('fa-chevron-left');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    AdminApp.init();
    initSidebarToggle();
});
