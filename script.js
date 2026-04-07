document.addEventListener('DOMContentLoaded', () => {
    const pathsData = [
        {
            id: 'active-directory',
            title: 'Active Directory Hacking',
            description: 'From foundational concepts to highly complex, multi-machine active directory networks.',
            modules: 16,
            difficultyRange: 'Easy to Hard',
            courses: [
                { title: "What Is Hack Smarter?", type: "Intro", difficulty: "Easy", id: "6a721825-9695-4aec-bc50-9e0361ff3b42" },
                { title: "Hack With Me: AD, Vol. 1", type: "Training", difficulty: "Easy", id: "1efdeabd-71d8-4b0e-8225-2c4fd0abf5c1" },
                { title: "Hack With Me: AD, Vol. 2", type: "Training", difficulty: "Easy", id: "90b450ac-ac73-46f7-83e2-f221043f016c" },
                { title: "Hack With Me: AD, Vol. 3", type: "Training", difficulty: "Easy", id: "7ee340aa-68ab-47da-b529-1590a71df378" },
                { title: "Hack With Me: AD, Vol. 4", type: "Training", difficulty: "Easy", id: "44957585-a851-4728-858e-6916c2ef34c0" },
                { title: "Challenge Lab: Welcome", type: "Lab", difficulty: "Easy", id: "3d1021e5-39bf-41a6-8120-0d9b3e9c5431" },
                { title: "Challenge Lab: Arasaka", type: "Lab", difficulty: "Easy", id: "f618f837-3060-40a3-81cf-31beeaadf37a" },
                { title: "Challenge Lab: ShareThePain", type: "Lab", difficulty: "Medium", id: "63bc86e1-3ab3-43be-b32e-62a676e6dee7" },
                { title: "Challenge Lab: Anomaly", type: "Lab", difficulty: "Medium", id: "336f34fa-2097-4b41-9e05-16698e68dcea" },
                { title: "Challenge Lab: Sysco", type: "Lab", difficulty: "Medium", id: "18876893-1afd-443f-b448-0681b13e86ec" },
                { title: "Challenge Lab: Lumon Industries", type: "Lab", difficulty: "Medium", id: "a952a025-4b22-47cd-bd75-d92cf5e524e9" },
                { title: "Challenge Lab: MidGarden2", type: "Lab", difficulty: "Hard", id: "da0b5de0-4949-4f3e-99a6-cc624b119acb" },
                { title: "Challenge Lab: NorthBridge Systems", type: "Lab", difficulty: "Hard", id: "1e19584b-4577-402d-a264-d6476d2d1b9b" },
                { title: "Challenge Lab: Odyssey", type: "Lab", difficulty: "Hard", id: "1205dc56-4441-47f0-b7d0-47b2113c43dc" },
                { title: "Challenge Lab: Triathlon", type: "Lab", difficulty: "Hard", id: "13a55ed5-7562-4ca4-a025-4b2b49009d3c" },
                { title: "Range: DarkHaven", type: "Range", difficulty: "Medium", id: "46ed15ab-0904-4cae-8a2c-2e91ac6e0274" }
            ]
        },
        {
            id: 'web-hacking',
            title: 'Web Application Hacking',
            description: 'Build a strong foundation to prepare for real-world web application pentesting, bug bounty, and security research.',
            modules: 11,
            difficultyRange: 'Easy to Medium',
            courses: [
                { title: "What Is Hack Smarter?", type: "Intro", difficulty: "Easy", id: "6a721825-9695-4aec-bc50-9e0361ff3b42" },
                { title: "Foundations of Web App Pentesting", type: "Training", difficulty: "Easy", id: "f7e446b7-6213-44b7-9a8a-e8f2cce0e0cf" },
                { title: "Guided Lab: CORS Misconfigurations", type: "Lab", difficulty: "Easy", id: "faadf913-b0ba-424c-9cc5-63684879ed98" },
                { title: "Guided Lab: File Upload Attacks", type: "Lab", difficulty: "Easy", id: "164a2fad-5d1c-4045-a8cb-56dd0c6fad99" },
                { title: "Challenge Lab: OWASP Juice Shop", type: "Lab", difficulty: "Easy", id: "24721a69-5dcc-4109-a1fa-7810e8c16ed6" },
                { title: "Challenge Lab: Hunter", type: "Lab", difficulty: "Easy", id: "19723a54-6e4b-410e-b9e3-371f702e0f5c" },
                { title: "Challenge Lab: Polution", type: "Lab", difficulty: "Easy", id: "1de73367-b278-41ba-a63c-83c2d510621c" },
                { title: "Challenge Lab: Verbose", type: "Lab", difficulty: "Easy", id: "5018ef14-b136-4331-aef0-8fb0a88a3efb" },
                { title: "Challenge Lab: Implicit", type: "Lab", difficulty: "Easy", id: "37e66768-0973-4a1b-9ae6-ba74ac8af201" },
                { title: "Challenge Lab: Static", type: "Lab", difficulty: "Medium", id: "bdd3ca9e-085d-4562-9d5c-3a7eac731746" },
                { title: "Challenge Lab: Race Conditions", type: "Lab", difficulty: "Medium", id: "f26a5a3e-e73d-43be-b880-be3ea20571d2" }
            ]
        },
        {
            id: 'oscp-prep',
            title: 'OSCP Preparation',
            description: 'Prepare for the OSCP certification based on LainKusanagi\'s list for Hack Smarter',
            modules: 19,
            difficultyRange: 'Easy to Hard',
            courses: [
                { title: "What Is Hack Smarter?", type: "Intro", difficulty: "Easy", id: "6a721825-9695-4aec-bc50-9e0361ff3b42" },
                { title: "Guided Lab: File Upload Attacks", type: "Lab", difficulty: "Easy", id: "164a2fad-5d1c-4045-a8cb-56dd0c6fad99" },
                { title: "Hack With Me: AD, Vol. 3", type: "Training", difficulty: "Easy", id: "7ee340aa-68ab-47da-b529-1590a71df378" },
                { title: "Hack With Me: AD, Vol. 4", type: "Training", difficulty: "Easy", id: "44957585-a851-4728-858e-6916c2ef34c0" },
                { title: "Challenge Lab: Ascension", type: "Lab", difficulty: "Easy", id: "191a82d2-26de-437d-8a5a-0f9192481fbc" },
                { title: "Challenge Lab: Verbose", type: "Lab", difficulty: "Easy", id: "5018ef14-b136-4331-aef0-8fb0a88a3efb" },
                { title: "Challenge Lab: Slayer", type: "Lab", difficulty: "Easy", id: "530c3910-9b4d-4983-949c-126a8587b4ed" },
                { title: "Challenge Lab: PivotSmarter", type: "Lab", difficulty: "Easy", id: "f55c9746-5ea7-4da6-bfcf-6ac6e21b2921" },
                { title: "Challenge Lab: Welcome", type: "Lab", difficulty: "Easy", id: "3d1021e5-39bf-41a6-8120-0d9b3e9c5431" },
                { title: "Challenge Lab: Arasaka", type: "Lab", difficulty: "Easy", id: "f618f837-3060-40a3-81cf-31beeaadf37a" },
                { title: "Challenge Lab: BankSmarter", type: "Lab", difficulty: "Medium", id: "c90bd016-24a5-4776-9f35-819062c51f6f" },
                { title: "Challenge Lab: Talisman", type: "Lab", difficulty: "Medium", id: "5e5b9833-e6be-4fa0-aa4d-efd3086a612c" },
                { title: "Challenge Lab: Exception", type: "Lab", difficulty: "Medium", id: "df65d37c-ed63-4eca-8f78-5dede200ec8e" },
                { title: "Challenge Lab: ShareThePain", type: "Lab", difficulty: "Medium", id: "63bc86e1-3ab3-43be-b32e-62a676e6dee7" },
                { title: "Challenge Lab: Sysco", type: "Lab", difficulty: "Medium", id: "18876893-1afd-443f-b448-0681b13e86ec" },
                { title: "Challenge Lab: Anomaly", type: "Lab", difficulty: "Medium", id: "336f34fa-2097-4b41-9e05-16698e68dcea" },
                { title: "Challenge Lab: Lumon Industries", type: "Lab", difficulty: "Medium", id: "a952a025-4b22-47cd-bd75-d92cf5e524e9" },
                { title: "Challenge Lab: 404 Bank", type: "Lab", difficulty: "Medium", id: "bd8a0659-8afe-40b4-9e95-0fe932850773" },
                { title: "Challenge Lab: Odyssey", type: "Lab", difficulty: "Hard", id: "1205dc56-4441-47f0-b7d0-47b2113c43dc" }


            ]
        },
        {
            id: 'aws-hacking',
            title: 'AWS Hacking',
            description: 'Build fundamental skills in AWS Pentesting via courses and labs.',
            modules: 6,
            difficultyRange: 'Easy to Hard',
            courses: [
                { title: "What Is Hack Smarter?", type: "Intro", difficulty: "Easy", id: "6a721825-9695-4aec-bc50-9e0361ff3b42" },
                { title: "Intro to AWS Pentesting", type: "Training", difficulty: "Easy", id: "90bc8479-b808-4a39-9632-7e97ed4eb72f" },
                { title: "Challenge Lab: SNS Secrets", type: "Lab", difficulty: "Easy", id: "43ca88a5-6b2f-4a3f-86c2-93e3920779cd" },
                { title: "Guided Lab: IAM Enumeration", type: "Lab", difficulty: "Easy", id: "b6ead7c6-6e3a-4d12-b9fa-fcd58b037147" },
                { title: "Challenge Lab: Static", type: "Lab", difficulty: "Medium", id: "bdd3ca9e-085d-4562-9d5c-3a7eac731746" },
                { title: "Challenge Lab: Data Secrets", type: "Lab", difficulty: "Medium", id: "30e7f465-e589-4d44-86eb-4d3fb17e1f5f" }
            ]
        },
        {
            id: 'free-content',
            title: 'Free Content',
            description: 'Not ready for a paid subscription? Here is a list of free courses & labs.',
            modules: 18,
            difficultyRange: 'Easy to Medium',
            courses: [
                { title: "What Is Hack Smarter?", type: "Intro", difficulty: "Easy", id: "6a721825-9695-4aec-bc50-9e0361ff3b42" },
                { title: "Guided Lab: NPM Supply Chain Attacks", type: "Lab", difficulty: "Easy", id: "16f4dfd6-7b60-4ba3-a050-d232d452da48" },
                { title: "Guided Lab: Sliver Basics: Linux Implants", type: "Training", difficulty: "Easy", id: "553f9722-29e1-4ba1-b49a-5b631fc08a64" },
                { title: "Guided Lab: Sliver Basics: Windows Implants", type: "Lab", difficulty: "Easy", id: "7ab147d1-2d2e-4624-82e8-d10d868c1cce" },
                { title: "Challenge Lab: OWASP Juice Shop", type: "Lab", difficulty: "Easy", id: "24721a69-5dcc-4109-a1fa-7810e8c16ed6" },
                { title: "Challenge Lab: Hunter", type: "Lab", difficulty: "Easy", id: "19723a54-6e4b-410e-b9e3-371f702e0f5c" },
                { title: "Challenge Lab: Polution", type: "Lab", difficulty: "Easy", id: "1de73367-b278-41ba-a63c-83c2d510621c" },
                { title: "Challenge Lab: SQL Basics", type: "Lab", difficulty: "Easy", id: "ecd76167-3ff0-4140-96b8-6405beb82799" },
                { title: "Guided Lab: CORS Misconfigurations", type: "Lab", difficulty: "Easy", id: "faadf913-b0ba-424c-9cc5-63684879ed98" },
                { title: "Challenge Lab: Race Conditions", type: "Lab", difficulty: "Medium", id: "f26a5a3e-e73d-43be-b880-be3ea20571d2" },
                { title: "Challenge Lab: GitOops", type: "Lab", difficulty: "Medium", id: "d6c75815-8e7b-4d90-9ebf-c619176ae2d9" },
                { title: "Challenge Lab: Exception", type: "Lab", difficulty: "Medium", id: "df65d37c-ed63-4eca-8f78-5dede200ec8e" },
                { title: "Guided Lab: File Upload Attacks", type: "Lab", difficulty: "Easy", id: "164a2fad-5d1c-4045-a8cb-56dd0c6fad99" },
                { title: "Guided Lab: IAM Enumeration", type: "Lab", difficulty: "Easy", id: "b6ead7c6-6e3a-4d12-b9fa-fcd58b037147" },
                { title: "Challenge Lab: Data Secrets", type: "Lab", difficulty: "Medium", id: "30e7f465-e589-4d44-86eb-4d3fb17e1f5f" },
                { title: "Hack With Me: AD, Vol. 1", type: "Training", difficulty: "Easy", id: "1efdeabd-71d8-4b0e-8225-2c4fd0abf5c1" },
                { title: "Hack With Me: AD, Vol. 2", type: "Training", difficulty: "Easy", id: "90b450ac-ac73-46f7-83e2-f221043f016c" },
                { title: "Hack With Me: Windows", type: "Training", difficulty: "Easy", id: "0b197e4f-6d58-4cf2-a445-6bc33d811a31" },

            ]
        }
        // Additional paths can be added here
    ];

    const pathsContainer = document.getElementById('paths-container');

    // Generate paths and their courses
    pathsData.forEach((path, pathIndex) => {
        const section = document.createElement('section');
        section.className = 'path-section';
        // Add expanded class to the first item by default? The user wanted "only expands if they click" 
        // So they'll all start collapsed.

        section.innerHTML = `
            <div class="path-header" onclick="togglePath(this.parentElement)">
                <div class="path-header-content">
                    <h2>${path.title}</h2>
                    <p>${path.description}</p>
                    <div class="path-stats">
                        <span>${path.modules} Modules</span>
                        <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> ${path.difficultyRange}</span>
                    </div>
                </div>
                <div class="path-toggle-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
            </div>
            
            <div class="path-content">
                <div class="timeline-container" id="timeline-${path.id}">
                    <div class="timeline-progress-bar">
                        <div class="timeline-progress-fill"></div>
                    </div>
                    <!-- Items -->
                </div>
            </div>
        `;

        pathsContainer.appendChild(section);

        const timelineContainer = section.querySelector('.timeline-container');

        path.courses.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'timeline-item';

            let diffBadge = '';
            if (item.difficulty) {
                const diffClass = `diff-${item.difficulty.toLowerCase()}`;
                diffBadge = `<span class="badge-difficulty ${diffClass}">${item.difficulty}</span>`;
            }

            const isLinkAble = item.id !== null;
            const href = isLinkAble ? `https://www.hacksmarter.org/courses/${item.id}` : '#';
            const tagType = isLinkAble ? 'a' : 'div';
            const linkAttrs = isLinkAble ? `href="${href}" target="_blank" rel="noopener noreferrer"` : '';

            const footerContent = isLinkAble
                ? `<div class="action-link">View Course <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>`
                : `<div class="missing-link">Coming Soon / Undisclosed</div>`;

            itemElement.innerHTML = `
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

            timelineContainer.appendChild(itemElement);
        });
    });

    // Intersection Observer for scroll animations of timeline items inside opened tabs
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, 300);
            }
        });
    }, observerOptions);

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    // Listen to scroll to update ALL active timeline progress bars
    window.addEventListener('scroll', updateProgressBars);
    window.addEventListener('resize', updateProgressBars);

    function updateProgressBars() {
        const sections = document.querySelectorAll('.path-section.expanded');
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const container = section.querySelector('.timeline-container');
            const progressBar = section.querySelector('.timeline-progress-fill');
            const containerRect = container.getBoundingClientRect();

            let progress = 0;
            if (containerRect.top < windowHeight * 0.5) {
                const totalHeight = containerRect.height;
                const scrolled = windowHeight * 0.5 - containerRect.top;
                progress = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));
            }
            // Invert it since bottom is 100% by default in css
            progressBar.style.bottom = `${100 - progress}%`;
        });
    }

    // Initial trigger
    updateProgressBars();
});

// Global toggle path function
window.togglePath = function (sectionElement) {
    const isExpanded = sectionElement.classList.contains('expanded');

    // Check if we want an accordion where only one opens at a time
    // If so, we collapse others. Here we let them all toggle independently.
    /*
    document.querySelectorAll('.path-section.expanded').forEach(sec => {
        if (sec !== sectionElement) sec.classList.remove('expanded');
    });
    */

    sectionElement.classList.toggle('expanded');

    // Trigger scroll logic so progress line updates immediately on expand
    if (!isExpanded) {
        setTimeout(() => window.dispatchEvent(new Event('scroll')), 400);
    }
};
