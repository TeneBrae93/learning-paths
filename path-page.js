document.addEventListener('DOMContentLoaded', () => {
    // Get the path ID from the data attribute on body
    const pathId = document.body.dataset.pathId;
    const pathData = PATHS_DATA.find(p => p.id === pathId);

    if (!pathData) {
        document.getElementById('path-content').innerHTML = '<p>Path not found.</p>';
        return;
    }

    // Set page title
    document.title = `${pathData.title} | Hack Smarter Paths`;

    // Render header
    const header = document.getElementById('path-header');
    header.innerHTML = `
        <div class="container">
            <h1>${pathData.title}</h1>
            <p>${pathData.description}</p>
            <div class="path-page-stats">
                <span>${pathData.modules} Modules</span>
                <span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    ${pathData.difficultyRange}
                </span>
            </div>
        </div>
    `;

    // Render timeline
    const container = document.getElementById('path-content');
    const timeline = document.createElement('div');
    timeline.className = 'timeline-container';
    timeline.innerHTML = `
        <div class="timeline-progress-bar">
            <div class="timeline-progress-fill"></div>
        </div>
    `;

    pathData.courses.forEach((item) => {
        const el = document.createElement('div');
        el.className = 'timeline-item';

        let diffBadge = '';
        if (item.difficulty) {
            const diffClass = `diff-${item.difficulty.toLowerCase()}`;
            diffBadge = `<span class="badge-difficulty ${diffClass}">${item.difficulty}</span>`;
        }

        const isLinkable = item.id !== null;
        const href = isLinkable ? `https://www.hacksmarter.org/courses/${item.id}` : '#';
        const tagType = isLinkable ? 'a' : 'div';
        const linkAttrs = isLinkable ? `href="${href}" target="_blank" rel="noopener noreferrer"` : '';

        const footerContent = isLinkable
            ? `<div class="action-link">View Course <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>`
            : `<div class="missing-link">Coming Soon / Undisclosed</div>`;

        el.innerHTML = `
            <div class="timeline-dot"></div>
            <${tagType} ${linkAttrs} class="timeline-content">
                <div class="content-header">
                    <div>
                        <span class="course-type">${item.type}</span>
                        <h3 class="course-title">${item.title}</h3>
                    </div>
                    ${diffBadge}
                </div>
                <div class="content-footer">
                    ${footerContent}
                </div>
            </${tagType}>
        `;

        timeline.appendChild(el);
    });

    container.appendChild(timeline);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, 300);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.15 });

    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));

    // Progress bar scroll tracking
    function updateProgressBar() {
        const timelineEl = document.querySelector('.timeline-container');
        const progressBar = document.querySelector('.timeline-progress-fill');
        if (!timelineEl || !progressBar) return;

        const rect = timelineEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let progress = 0;

        if (rect.top < windowHeight * 0.5) {
            const scrolled = windowHeight * 0.5 - rect.top;
            progress = Math.min(100, Math.max(0, (scrolled / rect.height) * 100));
        }
        progressBar.style.bottom = `${100 - progress}%`;
    }

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);
    updateProgressBar();
});
