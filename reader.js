/**
 * Menstrupedia Comic Reader - Core Reader Logic
 * Mobile-first, accessible, offline-capable comic reader
 */

class ComicReader {
    constructor() {
        // State
        this.currentPage = 1;
        this.currentLang = 'en';
        this.totalPages = COMIC_DATA.meta.totalPages;
        this.bookmarks = new Set();
        this.isSpeaking = false;
        this.speechUtterance = null;
        this.autoHideControls = true;
        this.controlsHidden = false;
        this.hideTimeout = null;
        this.isOffline = !navigator.onLine;

        // DOM Elements
        this.elements = {
            loadingScreen: document.getElementById('loading-screen'),
            header: document.getElementById('app-header'),
            comicPage: document.getElementById('comic-page'),
            pageWrapper: document.getElementById('page-wrapper'),
            progressFill: document.getElementById('progress-fill'),
            pageIndicator: document.getElementById('page-indicator'),
            progressContainer: document.getElementById('progress-container'),
            bookmarkBtn: document.getElementById('bookmark-btn'),
            readAloudBtn: document.getElementById('read-aloud-btn'),
            readAloudBar: document.getElementById('read-aloud-bar'),
            speakingText: document.getElementById('speaking-text'),
            stopSpeechBtn: document.getElementById('stop-speech'),
            menuBtn: document.getElementById('menu-btn'),
            sideMenu: document.getElementById('side-menu'),
            menuOverlay: document.getElementById('menu-overlay'),
            closeMenu: document.getElementById('close-menu'),
            chapterList: document.getElementById('chapter-list'),
            bookmarkList: document.getElementById('bookmark-list'),
            settingsBtn: document.getElementById('settings-btn'),
            settingsPanel: document.getElementById('settings-panel'),
            settingsOverlay: document.getElementById('settings-overlay'),
            closeSettings: document.getElementById('close-settings'),
            toastContainer: document.getElementById('toast-container'),
            offlineBadge: document.getElementById('offline-badge'),
            navPrev: document.getElementById('nav-prev'),
            navNext: document.getElementById('nav-next'),
            navArrowPrev: document.getElementById('nav-arrow-prev'),
            navArrowNext: document.getElementById('nav-arrow-next'),
            installPrompt: document.getElementById('install-prompt'),
            installBtn: document.getElementById('install-btn'),
            dismissInstall: document.getElementById('dismiss-install')
        };

        this.init();
    }

    init() {
        this.loadSettings();
        this.loadBookmarks();
        this.setupEventListeners();
        this.setupSwipeGestures();
        this.setupKeyboardNavigation();
        this.setupOnlineStatus();
        this.renderChapterList();
        this.renderBookmarkList();
        this.goToPage(1);

        // Hide loading screen
        setTimeout(() => {
            this.elements.loadingScreen.classList.add('hidden');
        }, 1500);

        // Show install prompt after delay
        setTimeout(() => this.showInstallPrompt(), 5000);
    }

    // ==================== NAVIGATION ====================

    goToPage(pageNum) {
        if (pageNum < 1 || pageNum > this.totalPages) return;

        const direction = pageNum > this.currentPage ? 'next' : 'prev';
        this.currentPage = pageNum;

        // Update page content
        this.updatePageContent(direction);
        this.updateProgress();
        this.updateBookmarkState();
        this.saveProgress();

        // Reset auto-hide timer
        this.resetAutoHide();
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.goToPage(this.currentPage + 1);
        } else {
            this.showToast('🎉 You have reached the end of the comic!', 'success');
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.goToPage(this.currentPage - 1);
        }
    }

    updatePageContent(direction) {
        const pageData = this.getCurrentPageData();
        const img = this.elements.comicPage;

        // Add loading state
        img.classList.add('loading');

        // Slide animation
        const slideClass = direction === 'next' ? 'page-slide-right' : 'page-slide-left';
        img.classList.add(slideClass);

        // Update image with preload
        const preloadImg = new Image();
        preloadImg.onload = () => {
            img.src = pageData.image;
            img.alt = pageData.alt;
            img.classList.remove('loading');

            setTimeout(() => {
                img.classList.remove(slideClass);
            }, 300);
        };
        preloadImg.onerror = () => {
            img.classList.remove('loading');
            img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000"><rect fill="%23FFE0E0" width="800" height="1000"/><text x="400" y="500" text-anchor="middle" font-size="24" fill="%23FF6B6B">📖 Loading page...</text></svg>';
        };
        preloadImg.src = pageData.image;

        // Preload next page
        if (this.currentPage < this.totalPages) {
            const nextPageData = COMIC_DATA.pages[this.currentLang][this.currentPage];
            if (nextPageData) {
                const nextPreload = new Image();
                nextPreload.src = nextPageData.image;
            }
        }

        // Update narration text for read aloud
        this.updateReadAloudText(pageData.narration);
    }

    getCurrentPageData() {
        const pages = COMIC_DATA.pages[this.currentLang] || COMIC_DATA.pages['en'];
        return pages[this.currentPage - 1] || pages[0];
    }

    // ==================== PROGRESS ====================

    updateProgress() {
        const percent = (this.currentPage / this.totalPages) * 100;
        this.elements.progressFill.style.width = `${percent}%`;
        this.elements.pageIndicator.textContent = `${this.currentPage} / ${this.totalPages}`;

        // Update chapter highlight in menu
        this.updateChapterHighlight();
    }

    // ==================== BOOKMARKS ====================

    toggleBookmark() {
        const key = `${this.currentLang}-${this.currentPage}`;

        if (this.bookmarks.has(key)) {
            this.bookmarks.delete(key);
            this.showToast('🔖 Bookmark removed', 'info');
        } else {
            this.bookmarks.add(key);
            this.showToast('🔖 Page bookmarked!', 'success');
        }

        this.updateBookmarkState();
        this.saveBookmarks();
        this.renderBookmarkList();
    }

    updateBookmarkState() {
        const key = `${this.currentLang}-${this.currentPage}`;
        const btn = this.elements.bookmarkBtn;

        if (this.bookmarks.has(key)) {
            btn.classList.add('active');
            btn.querySelector('svg').setAttribute('fill', 'currentColor');
        } else {
            btn.classList.remove('active');
            btn.querySelector('svg').setAttribute('fill', 'none');
        }
    }

    loadBookmarks() {
        try {
            const saved = localStorage.getItem('comic-bookmarks');
            if (saved) {
                this.bookmarks = new Set(JSON.parse(saved));
            }
        } catch (e) {
            console.warn('Could not load bookmarks:', e);
        }
    }

    saveBookmarks() {
        try {
            localStorage.setItem('comic-bookmarks', JSON.stringify([...this.bookmarks]));
        } catch (e) {
            console.warn('Could not save bookmarks:', e);
        }
    }

    renderBookmarkList() {
        const list = this.elements.bookmarkList;

        if (this.bookmarks.size === 0) {
            list.innerHTML = '<li class="empty-bookmarks">No bookmarks yet. Tap the bookmark icon while reading!</li>';
            return;
        }

        list.innerHTML = [...this.bookmarks].map(key => {
            const [lang, page] = key.split('-');
            const pageNum = parseInt(page);
            const pageData = (COMIC_DATA.pages[lang] || COMIC_DATA.pages['en'])[pageNum - 1];
            const chapter = COMIC_DATA.chapters.find(c => c.id === pageData?.chapterId);

            return `
                <li class="bookmark-item" data-page="${pageNum}" data-lang="${lang}" tabindex="0" role="button">
                    <span>📄 Page ${pageNum}</span>
                    <span style="color: var(--text-light); font-size: 0.8rem;">${chapter ? chapter.title[lang] || chapter.title['en'] : ''}</span>
                </li>
            `;
        }).join('');

        // Add click handlers
        list.querySelectorAll('.bookmark-item').forEach(item => {
            item.addEventListener('click', () => {
                const page = parseInt(item.dataset.page);
                const lang = item.dataset.lang;
                this.currentLang = lang;
                this.updateLanguageButtons();
                this.goToPage(page);
                this.closeMenu();
            });
        });
    }

    // ==================== CHAPTERS ====================

    renderChapterList() {
        const list = this.elements.chapterList;

        list.innerHTML = COMIC_DATA.chapters.map(chapter => {
            const title = chapter.title[this.currentLang] || chapter.title['en'];
            const isActive = this.currentPage >= chapter.pageStart && this.currentPage <= chapter.pageEnd;

            return `
                <li class="chapter-item ${isActive ? 'active' : ''}" data-page="${chapter.pageStart}" tabindex="0" role="button">
                    <span class="chapter-number">${chapter.icon}</span>
                    <span>${title}</span>
                </li>
            `;
        }).join('');

        list.querySelectorAll('.chapter-item').forEach(item => {
            item.addEventListener('click', () => {
                this.goToPage(parseInt(item.dataset.page));
                this.closeMenu();
            });
        });
    }

    updateChapterHighlight() {
        const items = this.elements.chapterList.querySelectorAll('.chapter-item');
        items.forEach((item, index) => {
            const chapter = COMIC_DATA.chapters[index];
            const isActive = this.currentPage >= chapter.pageStart && this.currentPage <= chapter.pageEnd;
            item.classList.toggle('active', isActive);
        });
    }

    // ==================== READ ALOUD ====================

    toggleReadAloud() {
        if (this.isSpeaking) {
            this.stopReadAloud();
        } else {
            this.startReadAloud();
        }
    }

    startReadAloud() {
        if (!('speechSynthesis' in window)) {
            this.showToast('❌ Text-to-speech not supported on this device', 'error');
            return;
        }

        const pageData = this.getCurrentPageData();
        const text = pageData.narration;

        this.speechUtterance = new SpeechSynthesisUtterance(text);

        // Set language based on current selection
        const langMap = {
            'en': 'en-IN',
            'hi': 'hi-IN',
            'mr': 'mr-IN',
            'gu': 'gu-IN'
        };
        this.speechUtterance.lang = langMap[this.currentLang] || 'en-IN';
        this.speechUtterance.rate = 0.9;
        this.speechUtterance.pitch = 1.1;

        this.speechUtterance.onstart = () => {
            this.isSpeaking = true;
            this.elements.readAloudBtn.classList.add('active');
            this.elements.readAloudBar.classList.add('visible');
            this.elements.readAloudBar.setAttribute('aria-hidden', 'false');
        };

        this.speechUtterance.onend = () => {
            this.stopReadAloud();
        };

        this.speechUtterance.onerror = (e) => {
            console.warn('Speech error:', e);
            this.stopReadAloud();
        };

        window.speechSynthesis.speak(this.speechUtterance);
    }

    stopReadAloud() {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        this.isSpeaking = false;
        this.elements.readAloudBtn.classList.remove('active');
        this.elements.readAloudBar.classList.remove('visible');
        this.elements.readAloudBar.setAttribute('aria-hidden', 'true');
    }

    updateReadAloudText(text) {
        this.elements.speakingText.textContent = text || 'Reading aloud...';

        // If currently speaking, restart with new text
        if (this.isSpeaking) {
            this.stopReadAloud();
            setTimeout(() => this.startReadAloud(), 100);
        }
    }

    // ==================== LANGUAGE ====================

    changeLanguage(lang) {
        if (!COMIC_DATA.pages[lang]) {
            this.showToast('❌ Language not available', 'error');
            return;
        }

        this.currentLang = lang;
        this.updateLanguageButtons();
        this.updatePageContent();
        this.renderChapterList();
        this.saveSettings();
        this.showToast(`🌍 Switched to ${this.getLanguageName(lang)}`, 'success');
    }

    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }

    getLanguageName(lang) {
        const names = {
            'en': 'English',
            'hi': 'हिंदी',
            'mr': 'मराठी',
            'gu': 'ગુજરાતી'
        };
        return names[lang] || lang;
    }

    // ==================== SETTINGS ====================

    loadSettings() {
        try {
            const saved = localStorage.getItem('comic-reader-settings');
            if (saved) {
                const settings = JSON.parse(saved);
                this.currentLang = settings.language || 'en';
                this.currentPage = settings.lastPage || 1;
                this.autoHideControls = settings.autoHide !== false;

                // Apply settings to UI
                document.getElementById('auto-hide-toggle').checked = this.autoHideControls;

                if (settings.contrast) {
                    document.documentElement.setAttribute('data-contrast', 'high');
                    document.getElementById('contrast-toggle').checked = true;
                }

                if (settings.fit === 'width') {
                    this.elements.comicPage.classList.add('fit-width');
                    document.querySelector('[data-fit="width"]').classList.add('active');
                    document.querySelector('[data-fit="contain"]').classList.remove('active');
                }
            }
        } catch (e) {
            console.warn('Could not load settings:', e);
        }
    }

    saveSettings() {
        try {
            const settings = {
                language: this.currentLang,
                lastPage: this.currentPage,
                autoHide: this.autoHideControls,
                contrast: document.documentElement.getAttribute('data-contrast') === 'high',
                fit: this.elements.comicPage.classList.contains('fit-width') ? 'width' : 'contain'
            };
            localStorage.setItem('comic-reader-settings', JSON.stringify(settings));
        } catch (e) {
            console.warn('Could not save settings:', e);
        }
    }

    saveProgress() {
        this.saveSettings();
    }

    // ==================== UI CONTROLS ====================

    openMenu() {
        this.elements.sideMenu.classList.add('open');
        this.elements.sideMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    closeMenu() {
        this.elements.sideMenu.classList.remove('open');
        this.elements.sideMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    openSettings() {
        this.elements.settingsPanel.classList.add('open');
        this.elements.settingsPanel.setAttribute('aria-hidden', 'false');
    }

    closeSettingsPanel() {
        this.elements.settingsPanel.classList.remove('open');
        this.elements.settingsPanel.setAttribute('aria-hidden', 'true');
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'alert');

        this.elements.toastContainer.appendChild(toast);

        // Remove after animation
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // ==================== AUTO-HIDE CONTROLS ====================

    resetAutoHide() {
        if (!this.autoHideControls) return;

        clearTimeout(this.hideTimeout);
        this.showControls();

        this.hideTimeout = setTimeout(() => {
            this.hideControls();
        }, 3000);
    }

    showControls() {
        this.controlsHidden = false;
        this.elements.header.classList.remove('hidden');
        this.elements.progressContainer.classList.remove('hidden');
    }

    hideControls() {
        if (!this.autoHideControls) return;
        this.controlsHidden = true;
        this.elements.header.classList.add('hidden');
        this.elements.progressContainer.classList.add('hidden');
    }

    toggleControls() {
        if (this.controlsHidden) {
            this.showControls();
            this.resetAutoHide();
        } else {
            this.hideControls();
        }
    }

    // ==================== SWIPE GESTURES ====================

    setupSwipeGestures() {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchStartTime = 0;

        const container = this.elements.pageWrapper;

        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
            touchStartTime = Date.now();
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const touchEndY = e.changedTouches[0].screenY;
            const touchEndTime = Date.now();

            const diffX = touchStartX - touchEndX;
            const diffY = touchStartY - touchEndY;
            const timeDiff = touchEndTime - touchStartTime;

            // Only handle horizontal swipes
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50 && timeDiff < 500) {
                if (diffX > 0) {
                    this.nextPage();
                } else {
                    this.prevPage();
                }
            }

            // Tap to toggle controls (if not a swipe)
            if (Math.abs(diffX) < 10 && Math.abs(diffY) < 10 && timeDiff < 300) {
                this.toggleControls();
            }
        }, { passive: true });
    }

    // ==================== KEYBOARD NAVIGATION ====================

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Don't handle if typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextPage();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.prevPage();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToPage(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToPage(this.totalPages);
                    break;
                case 'b':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.toggleBookmark();
                    }
                    break;
                case 's':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.toggleReadAloud();
                    }
                    break;
                case 'Escape':
                    this.closeMenu();
                    this.closeSettingsPanel();
                    this.stopReadAloud();
                    break;
            }
        });
    }

    // ==================== ONLINE/OFFLINE ====================

    setupOnlineStatus() {
        window.addEventListener('online', () => {
            this.isOffline = false;
            this.elements.offlineBadge.classList.add('hidden');
            this.showToast('🌐 Back online!', 'success');
        });

        window.addEventListener('offline', () => {
            this.isOffline = true;
            this.elements.offlineBadge.classList.remove('hidden');
            this.showToast('📴 You are offline. Content is cached for reading.', 'info');
        });

        // Initial state
        if (this.isOffline) {
            this.elements.offlineBadge.classList.remove('hidden');
        }
    }

    // ==================== PWA INSTALL ====================

    showInstallPrompt() {
        // Only show if not already installed and not dismissed
        if (localStorage.getItem('install-dismissed')) return;
        if (window.matchMedia('(display-mode: standalone)').matches) return;

        this.elements.installPrompt.classList.add('visible');
        this.elements.installPrompt.setAttribute('aria-hidden', 'false');
    }

    hideInstallPrompt() {
        this.elements.installPrompt.classList.remove('visible');
        this.elements.installPrompt.setAttribute('aria-hidden', 'true');
    }

    // ==================== EVENT LISTENERS ====================

    setupEventListeners() {
        // Navigation
        this.elements.navPrev.addEventListener('click', () => this.prevPage());
        this.elements.navNext.addEventListener('click', () => this.nextPage());
        this.elements.navArrowPrev.addEventListener('click', () => this.prevPage());
        this.elements.navArrowNext.addEventListener('click', () => this.nextPage());

        // Progress bar click to jump
        this.elements.progressFill.parentElement.addEventListener('click', (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const page = Math.max(1, Math.min(this.totalPages, Math.round(percent * this.totalPages)));
            this.goToPage(page);
        });

        // Bookmark
        this.elements.bookmarkBtn.addEventListener('click', () => this.toggleBookmark());

        // Read Aloud
        this.elements.readAloudBtn.addEventListener('click', () => this.toggleReadAloud());
        this.elements.stopSpeechBtn.addEventListener('click', () => this.stopReadAloud());

        // Menu
        this.elements.menuBtn.addEventListener('click', () => this.openMenu());
        this.elements.closeMenu.addEventListener('click', () => this.closeMenu());
        this.elements.menuOverlay.addEventListener('click', () => this.closeMenu());

        // Settings
        this.elements.settingsBtn.addEventListener('click', () => this.openSettings());
        this.elements.closeSettings.addEventListener('click', () => this.closeSettingsPanel());
        this.elements.settingsOverlay.addEventListener('click', () => this.closeSettingsPanel());

        // Language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => this.changeLanguage(btn.dataset.lang));
        });

        // Settings toggles
        document.getElementById('auto-hide-toggle').addEventListener('change', (e) => {
            this.autoHideControls = e.target.checked;
            this.saveSettings();
            if (this.autoHideControls) {
                this.resetAutoHide();
            } else {
                this.showControls();
            }
        });

        document.getElementById('contrast-toggle').addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-contrast', 'high');
            } else {
                document.documentElement.removeAttribute('data-contrast');
            }
            this.saveSettings();
        });

        // Reading direction
        document.querySelectorAll('[data-direction]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('[data-direction]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // In a real app, this would flip the reading direction
            });
        });

        // Page fit
        document.querySelectorAll('[data-fit]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('[data-fit]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                if (btn.dataset.fit === 'width') {
                    this.elements.comicPage.classList.add('fit-width');
                } else {
                    this.elements.comicPage.classList.remove('fit-width');
                }
                this.saveSettings();
            });
        });

        // Install prompt
        this.elements.dismissInstall.addEventListener('click', () => {
            this.hideInstallPrompt();
            localStorage.setItem('install-dismissed', 'true');
        });

        this.elements.installBtn.addEventListener('click', () => {
            // In a real PWA, this would trigger the install prompt
            this.showToast('📲 Install feature coming soon!', 'info');
            this.hideInstallPrompt();
        });

        // Handle visibility change (pause speech when tab hidden)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && this.isSpeaking) {
                this.stopReadAloud();
            }
        });

        // Prevent context menu on comic page (right-click)
        this.elements.comicPage.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
}

// ==================== INITIALIZE ====================

document.addEventListener('DOMContentLoaded', () => {
    window.comicReader = new ComicReader();
});
