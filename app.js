(() => {
    const icon = (name, size = 20) => {
        const paths = {
            dashboard: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
            people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
            calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
            folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3V7Z"/><path d="M3 10h18"/>',
            menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
            bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
            search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
            wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 8h18M16 14h.01"/>',
            coins: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v5c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 10v5c0 1.7 3.6 3 8 3 1.4 0 2.8-.2 4-.5M4 15v4c0 1.7 3.6 3 8 3"/>',
            chart: '<path d="M3 3v18h18M7 14l4-4 4 3 6-7"/>',
            briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/>',
            alert: '<path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 4h.01"/>',
            arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
            plus: '<path d="M12 5v14M5 12h14"/>',
            more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
            close: '<path d="m18 6-12 12M6 6l12 12"/>',
            check: '<path d="m5 12 4 4L19 6"/>',
            clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
            pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
            filter: '<path d="M4 6h16M7 12h10m-7 6h4"/>',
            logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',
            brand: '<path d="M5 18c2-7 5-12 9-12 3 0 5 2 5 5 0 5-5 9-14 9M7 14c3 1 7 1 11-1"/>'
        };
        return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.dashboard}</svg>`;
    };

    const data = {
        manager: 'مهرانه خلیلی',
        role: 'مدیر عامل',
        metrics: [{
            label: 'بودجه کل',
            amount: '۷۲۰,۰۰۰,۰۰۰',
            unit: 'تومان',
            change: '۸٪',
            tone: 'success',
            icon: 'wallet',
            values: [9, 15, 12, 20, 17, 23, 19, 28]
        },
        {
            label: 'هزینه‌ها',
            amount: '۱۷۵,۰۰۰,۰۰۰',
            unit: 'تومان',
            change: '۳٪',
            tone: 'danger',
            icon: 'coins',
            values: [25, 19, 22, 14, 19, 11, 15, 8]
        },
        {
            label: 'درآمد خالص',
            amount: '۴۵,۸۰۰,۰۰۰',
            unit: 'تومان',
            change: '۱۲٪',
            tone: 'primary',
            icon: 'chart',
            values: [7, 11, 9, 17, 15, 21, 18, 27]
        },
        {
            label: 'پروژه‌های فعال',
            amount: '۷',
            unit: 'پروژه',
            change: '۱۴٪',
            tone: 'blue',
            icon: 'briefcase',
            values: [8, 13, 12, 18, 15, 22, 20, 27]
        }
        ],
        meetings: [{
            day: 'امروز، ۲۸ شهریور',
            time: '۱۰:۰۰',
            title: 'جلسه استراتژی فصل پاییز',
            person: 'مهرانه خلیلی · تیم مدیریت',
            kind: 'استراتژی',
            date: '۲۸',
            month: 'شهریور'
        },
        {
            day: 'امروز، ۲۸ شهریور',
            time: '۱۴:۰۰',
            title: 'بررسی گزارش مالی ماهانه',
            person: 'سارا احمدی · واحد مالی',
            kind: 'مالی',
            date: '۲۸',
            month: 'شهریور'
        },
        {
            day: 'فردا، ۲۹ شهریور',
            time: '۱۱:۳۰',
            title: 'برنامه‌ریزی جذب نیروی جدید',
            person: 'علی رضایی · منابع انسانی',
            kind: 'منابع انسانی',
            date: '۲۹',
            month: 'شهریور'
        },
        {
            day: 'سه‌شنبه، ۳۰ شهریور',
            time: '۱۶:۰۰',
            title: 'ارزیابی کمپین بازاریابی',
            person: 'نگار موسوی · بازاریابی',
            kind: 'بازاریابی',
            date: '۳۰',
            month: 'شهریور'
        }
        ],
        employees: [{
            name: 'سارا احمدی',
            initials: 'س‌ا',
            role: 'مدیر مالی',
            team: 'مالی',
            status: 'فعال',
            phone: '۰۹۱۲ ۳۴۵ ۶۷۸۹'
        },
        {
            name: 'علی رضایی',
            initials: 'ع‌ر',
            role: 'مدیر منابع انسانی',
            team: 'منابع انسانی',
            status: 'فعال',
            phone: '۰۹۱۲ ۵۶۷ ۱۲۳۴'
        },
        {
            name: 'نگار موسوی',
            initials: 'ن‌م',
            role: 'مدیر بازاریابی',
            team: 'بازاریابی',
            status: 'فعال',
            phone: '۰۹۳۵ ۴۵۶ ۷۸۹۰'
        },
        {
            name: 'پارسا کریمی',
            initials: 'پ‌ک',
            role: 'مدیر محصول',
            team: 'محصول',
            status: 'مرخصی',
            phone: '۰۹۱۰ ۲۲۲ ۴۵۶۷'
        },
        {
            name: 'هانیه حیدری',
            initials: 'ه‌ح',
            role: 'طراح تجربه کاربری',
            team: 'محصول',
            status: 'فعال',
            phone: '۰۹۱۹ ۸۷۶ ۵۴۳۲'
        },
        {
            name: 'امیر نادری',
            initials: 'ا‌ن',
            role: 'توسعه‌دهنده ارشد',
            team: 'فنی',
            status: 'فعال',
            phone: '۰۹۱۲ ۸۸۸ ۱۱۲۲'
        }
        ],
        projects: [{
            name: 'بازطراحی تجربه مشتری',
            team: 'تیم محصول و طراحی',
            status: 'در حال اجرا',
            progress: 72,
            detail: 'بهبود مسیرهای اصلی و یکپارچه‌سازی بازخورد مشتریان.'
        },
        {
            name: 'سامانه گزارش‌گیری مالی',
            team: 'تیم مالی و فنی',
            status: 'در حال اجرا',
            progress: 58,
            detail: 'ساخت گزارش‌های مدیریتی و داشبوردهای تصمیم‌گیری.'
        },
        {
            name: 'کمپین پاییزه برند',
            team: 'تیم بازاریابی',
            status: 'در حال اجرا',
            progress: 84,
            detail: 'برنامه‌ریزی و اجرای کمپین چندکاناله پاییز.'
        },
        {
            name: 'مرکز دانش سازمانی',
            team: 'منابع انسانی',
            status: 'در انتظار',
            progress: 32,
            detail: 'مستندسازی فرایندها و ساخت کتابخانه داخلی دانش.'
        },
        {
            name: 'توسعه بازار جدید',
            team: 'تیم مدیریت',
            status: 'در حال اجرا',
            progress: 46,
            detail: 'تحلیل فرصت‌ها و طراحی مسیر ورود به بازار.'
        },
        {
            name: 'به‌روزرسانی زیرساخت',
            team: 'تیم فنی',
            status: 'تکمیل شده',
            progress: 100,
            detail: 'ارتقای زیرساخت سرویس‌های اصلی سازمان.'
        }
        ]
    };

    const activeUser = window.RobinAuth?.getUser();
    if (activeUser) {
        data.manager = activeUser.name;
        data.role = activeUser.role;
    }

    const routes = [{
        id: 'dashboard',
        label: 'داشبورد',
        href: '/',
        icon: 'dashboard'
    },
    {
        id: 'employees',
        label: 'کارمندان',
        href: '/employees',
        icon: 'people'
    },
    {
        id: 'meetings',
        label: 'جلسات',
        href: '/meetings',
        icon: 'calendar'
    },
    {
        id: 'projects',
        label: 'پروژه‌ها',
        href: '/projects',
        icon: 'folder'
    }
    ];
    const siteBasePath = new URL(document.baseURI).pathname;
    const locationPath = location.pathname;
    const pathname = locationPath.startsWith(siteBasePath)
        ? `/${locationPath.slice(siteBasePath.length).replace(/^\/|\/$/g, '')}`
        : locationPath.replace(/\/$/, '') || '/';
    const siteUrl = path => new URL(path.replace(/^\/+/, ''), document.baseURI).pathname;
    const current = routes.find(route => route.href === pathname) || routes[0];
    const root = document.getElementById('app');
    const dateLabel = new Intl.DateTimeFormat('fa-IR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date());

    function sidebar() {
        return `<aside class="sidebar" id="sidebar" aria-label="منوی اصلی">
      <a class="brand" href="${siteUrl('/')}" aria-label="رفتن به داشبورد"><span class="brand-mark"><img src="${siteUrl('robin-mark.svg')}" alt=""></span><span><span class="brand-name">پردازش روبین پرهام</span><span class="brand-caption">مدیریت یکپارچه سازمان</span></span></a>
      <button class="sidebar-close-button" type="button" aria-label="بستن منو">${icon('close')}</button>
      <div class="sidebar-label">فضای کاری</div>
      <nav class="nav-list">${routes.map(route => `<a class="nav-link ${current.id === route.id ? 'active' : ''}" href="${siteUrl(route.href)}" ${current.id === route.id ? 'aria-current="page"' : ''}>${icon(route.icon)}<span>${route.label}</span></a>`).join('')}</nav>
      <div class="sidebar-bottom"><div class="sidebar-note"><strong>خلاصه امروز</strong><p>همه شاخص‌ها به‌روز هستند. آخرین همگام‌سازی: همین حالا</p></div><div class="sidebar-profile"><div class="avatar">م‌خ</div><div class="profile-meta"><strong>${data.manager}</strong><span>${data.role}</span></div><button class="logout-button" id="logoutButton" type="button" aria-label="خروج از حساب کاربری">${icon('logout')}<span>خروج</span></button></div></div>
    </aside>`;
    }

    function header() {
        return `<header class="topbar"><div class="topbar-start"><button class="icon-button menu-toggle" id="menuToggle" aria-label="باز کردن منوی کناری" aria-expanded="false">${icon('menu')}</button><a class="topbar-brand-mark" href="${siteUrl('/')}" aria-label="پردازش روبین پرهام"><img src="${siteUrl('robin-mark.svg')}" alt=""></a><div class="page-context"><strong>${current.label}</strong><span>نمای کلی و مدیریت ${current.id === 'dashboard' ? 'سازمان' : current.label}</span></div></div><div class="topbar-actions"><label class="search-box" aria-label="جستجو">${icon('search')}<input id="globalSearch" type="search" placeholder="جستجو در این صفحه..." autocomplete="off"></label><button class="icon-button" id="notificationButton" aria-label="اعلان‌ها" aria-expanded="false">${icon('bell')}<span class="notification-dot"></span></button><button class="avatar topbar-avatar" id="profileButton" aria-label="حساب کاربری">م‌خ</button></div><section class="popover" id="notificationPopover" hidden><h3>اعلان‌های اخیر</h3><div class="popover-item">۳ مورد نیازمند پیگیری فوری در پروژه‌های فعال دارید.</div><div class="popover-item">جلسه استراتژی امروز ساعت ۱۰:۰۰ برگزار می‌شود.</div><div class="popover-item">گزارش مالی ماهانه برای بررسی آماده است.</div></section></header>`;
    }

    function sparkline(values, tone) {
        const points = values.map((value, index) => `${index * 15 + 2},${30 - value}`).join(' ');
        return `<svg class="spark" viewBox="0 0 110 32" preserveAspectRatio="none" style="color:var(--color-${tone})" aria-hidden="true"><polyline points="${points}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }

    function metricCard(item) {
        return `<article class="card metric-card filterable" data-search="${item.label}"><div class="metric-head"><span class="metric-icon" style="--tone:var(--color-${item.tone});--tone-soft:var(--color-${item.tone}-soft)">${icon(item.icon)}</span><div><div class="metric-title">${item.label}</div><div class="metric-value">${item.amount}<span class="metric-unit"> ${item.unit}</span></div></div></div><div class="metric-bottom"><span class="trend">${icon('chart', 14)} ${item.change} رشد نسبت به ماه قبل</span>${sparkline(item.values, item.tone)}</div></article>`;
    }

    function meetingRow(item) {
        return `<article class="meeting-row filterable" data-search="${item.title} ${item.person} ${item.kind}"><div class="meeting-time">${item.time}</div><div class="meeting-info"><strong>${item.title}</strong><span>${item.person}</span></div><span class="meeting-tag">${item.kind}</span></article>`;
    }

    function dashboardPage() {
        return `<section class="welcome-row"><div><h1>به داشبورد مدیریت خوش آمدید</h1><p>خلاصه وضعیت کسب‌وکار شما در یک نگاه</p></div><div class="date-badge">${dateLabel}${icon('calendar')}</div></section>
      <section class="metrics-grid" aria-label="شاخص‌های کسب‌وکار">${data.metrics.map(metricCard).join('')}</section>
      <a class="alert-card" href="${siteUrl('/projects')}" aria-label="مشاهده پروژه‌های نیازمند پیگیری"><span class="alert-icon">${icon('alert')}</span><span class="alert-copy"><strong>موارد نیازمند پیگیری مدیران ارشد</strong><span>۳ مورد برای بررسی و پیگیری فوری وجود دارد.</span></span><span class="alert-count">۳ مورد جدید</span></a>
      <div class="dashboard-columns"><section class="card panel"><div class="panel-heading"><h2 class="panel-title">${icon('calendar')} جلسات پیش رو</h2><a class="text-link" href="${siteUrl('/meetings')}">همه جلسات ${icon('arrow', 14)}</a></div><div class="meeting-list">${data.meetings.slice(0, 3).map(meetingRow).join('')}</div></section>
      <section class="card panel"><div class="panel-heading"><h2 class="panel-title">${icon('people')} منابع انسانی</h2><a class="text-link" href="${siteUrl('/employees')}">فهرست کارمندان ${icon('arrow', 14)}</a></div><div class="people-summary"><a class="people-tile" href="${siteUrl('/employees')}"><div class="people-tile-head"><span class="metric-icon" style="--tone:var(--color-primary);--tone-soft:var(--color-primary-soft)">${icon('people')}</span>${icon('arrow', 15)}</div><strong>۱۲۸</strong><span>کارمند فعال</span></a><a class="people-tile" href="${siteUrl('/employees')}"><div class="people-tile-head"><span class="metric-icon" style="--tone:var(--color-success);--tone-soft:var(--color-success-soft)">${icon('plus')}</span>${icon('arrow', 15)}</div><strong>۸</strong><span>استخدام جدید این ماه</span></a></div></section></div>
      <section class="card panel status-panel"><div class="panel-heading"><h2 class="panel-title">${icon('folder')} وضعیت پروژه‌ها</h2><a class="text-link" href="${siteUrl('/projects')}">مشاهده همه ${icon('arrow', 14)}</a></div><div class="status-content"><div class="donut-area"><div class="donut" role="img" aria-label="۷ پروژه: ۴ در حال اجرا، ۲ در انتظار و ۱ تکمیل شده"><div class="donut-center"><strong>۷</strong><span>پروژه فعال</span></div></div></div><div class="legend"><div class="legend-row"><span class="legend-dot" style="--dot:var(--color-success)"></span><span>در حال اجرا</span><strong>۴</strong></div><div class="legend-row"><span class="legend-dot" style="--dot:var(--color-warning)"></span><span>در انتظار</span><strong>۲</strong></div><div class="legend-row"><span class="legend-dot" style="--dot:var(--color-primary)"></span><span>تکمیل شده</span><strong>۱</strong></div></div></div></section>`;
    }

    function employeePage() {
        return `<div class="page-title-row"><div><h1>کارمندان</h1><p>فهرست همکاران و اطلاعات تیم‌های سازمان</p></div><button class="primary-button" data-action="add-employee">${icon('plus')} افزودن کارمند</button></div><section class="employee-cards"><article class="card mini-stat"><span>کل کارمندان</span><strong>۱۲۸ نفر</strong></article><article class="card mini-stat"><span>کارمندان فعال</span><strong>۱۲۰ نفر</strong></article><article class="card mini-stat"><span>استخدام این ماه</span><strong>۸ نفر</strong></article></section><section class="card panel"><div class="toolbar"><h2 class="panel-title">${icon('people')} فهرست همکاران</h2><label class="search-box">${icon('search')}<input class="local-search" type="search" placeholder="جستجو نام یا واحد..." aria-label="جستجو در کارمندان"></label></div><div class="data-table-wrap"><table class="data-table"><thead><tr><th>نام و سمت</th><th>واحد</th><th>شماره تماس</th><th>وضعیت</th><th>عملیات</th></tr></thead><tbody>${data.employees.map(employee => `<tr class="filterable" data-search="${employee.name} ${employee.role} ${employee.team}"><td><div class="person-cell"><span class="avatar">${employee.initials}</span><span><strong>${employee.name}</strong><span>${employee.role}</span></span></div></td><td>${employee.team}</td><td>${employee.phone}</td><td><span class="status-pill ${employee.status === 'مرخصی' ? 'pending' : ''}">${employee.status}</span></td><td><button class="action-button" data-action="employee-details" data-drill="employee" data-name="${employee.name}" aria-label="اطلاعات ${employee.name}" title="نمایش اطلاعات">${icon('more')}</button></td></tr>`).join('')}</tbody></table><div class="empty-state" hidden>نتیجه‌ای برای جستجوی شما پیدا نشد.</div></div></section>`;
    }

    function meetingsPage() {
        return `<div class="page-title-row"><div><h1>جلسات</h1><p>برنامه جلسات و نشست‌های پیش روی مدیران</p></div><button class="primary-button" data-action="add-meeting">${icon('plus')} برنامه‌ریزی جلسه</button></div><div class="toolbar"><div class="date-badge">${icon('calendar')} این هفته · شهریور ۱۴۰۵</div><button class="secondary-button" data-action="calendar-view">${icon('calendar')} نمای تقویم</button></div><section class="meetings-page-grid">${data.meetings.map(item => `<article class="card meeting-card filterable" data-search="${item.title} ${item.person} ${item.kind}"><div class="meeting-card-top"><div><span class="meeting-tag">${item.kind}</span><h3>${item.title}</h3><p>${item.person}</p></div><div class="meeting-datebox"><strong>${item.date}</strong><span>${item.month}</span></div></div><div class="meeting-card-footer"><span>${icon('clock', 14)} ${item.day}</span><span>${item.time}</span><button class="action-button" data-action="meeting-details" data-drill="meeting" data-name="${item.title}" aria-label="جزئیات ${item.title}">${icon('more')}</button></div></article>`).join('')}</section>`;
    }

    function projectsPage() {
        return `<div class="page-title-row"><div><h1>پروژه‌ها</h1><p>نمای کلی پیشرفت و وضعیت پروژه‌های سازمان</p></div><button class="primary-button" data-action="add-project">${icon('plus')} پروژه جدید</button></div><section class="employee-cards"><article class="card mini-stat"><span>کل پروژه‌ها</span><strong>۷ پروژه</strong></article><article class="card mini-stat"><span>در حال اجرا</span><strong>۴ پروژه</strong></article><article class="card mini-stat"><span>نیازمند پیگیری</span><strong>۲ پروژه</strong></article></section><section class="project-grid">${data.projects.map(project => `<article class="card project-card filterable" data-search="${project.name} ${project.team} ${project.status}"><div class="project-card-top"><span class="project-symbol">${icon('folder')}</span><span class="status-pill ${project.status === 'در انتظار' ? 'pending' : project.status === 'تکمیل شده' ? 'done' : ''}">${project.status}</span></div><h3>${project.name}</h3><p>${project.detail}</p><div class="progress-track" aria-label="${project.progress} درصد پیشرفت"><div class="progress-fill" style="width:${project.progress}%"></div></div><div class="project-progress-label"><span>${project.team}</span><strong>${project.progress}٪</strong></div><button class="text-link" type="button" data-drill="project" data-name="${project.name}" aria-label="جزئیات پروژه ${project.name}">مشاهده جزئیات ${icon('arrow', 14)}</button></article>`).join('')}</section>`;
    }

    const pages = {
        dashboard: dashboardPage,
        employees: employeePage,
        meetings: meetingsPage,
        projects: projectsPage
    };
    document.title = `${current.label} | راهبر`;
    root.innerHTML = `<div class="app-layout">${sidebar()}<div class="mobile-overlay" id="mobileOverlay"></div><div class="main-area">${header()}<main class="content">${pages[current.id]()}</main></div></div><div class="toast" id="toast" role="status" aria-live="polite"></div>`;

    const mobileNavItems = [
        { label: 'منو', icon: 'menu', action: 'open-menu' },
        { label: 'کارمندان', href: '/employees', icon: 'people' },
        { label: 'جلسات', href: '/meetings', icon: 'calendar' },
        { label: 'پروژه‌ها', href: '/projects', icon: 'folder' },
        { label: 'داشبورد', href: '/', icon: 'dashboard' }
    ];
    root.insertAdjacentHTML('beforeend', `<nav class="mobile-bottom-nav" aria-label="ناوبری موبایل">${mobileNavItems.map(item => item.href ? `<a class="mobile-nav-item ${current.href === item.href ? 'active' : ''}" href="${siteUrl(item.href)}" ${current.href === item.href ? 'aria-current="page"' : ''}>${icon(item.icon, 20)}<span>${item.label}</span></a>` : `<button class="mobile-nav-item" type="button" data-mobile-action="${item.action}" aria-label="باز کردن منو" aria-expanded="false">${icon(item.icon, 20)}<span>${item.label}</span></button>`).join('')}</nav>`);
    root.insertAdjacentHTML('beforeend', `<section class="drilldown-dialog" id="drilldownDialog" role="dialog" aria-modal="true" aria-labelledby="drilldownTitle" hidden><article class="drilldown-card"><div class="drilldown-top"><p class="drilldown-kicker" id="drilldownKicker">جزئیات</p><button class="icon-button" type="button" data-drill-close aria-label="بستن جزئیات">${icon('close')}</button></div><h2 id="drilldownTitle"></h2><div class="drilldown-details" id="drilldownDetails"></div><div class="drilldown-secondary" id="drilldownSecondary" hidden></div><div class="drilldown-actions"><button class="secondary-button" type="button" data-drill-close>بستن</button><button class="primary-button" id="drilldownMore" type="button">جزئیات بیشتر</button></div></article></section>`);

    root.insertAdjacentHTML('beforeend', `<section class="logout-dialog" id="logoutDialog" role="dialog" aria-modal="true" aria-labelledby="logoutTitle" aria-describedby="logoutDescription" hidden>
    <article class="logout-card">
      <span class="logout-icon">${icon('logout')}</span>
      <h2 id="logoutTitle">از حساب کاربری خارج می‌شوید؟</h2>
      <p id="logoutDescription">پس از خروج، برای مشاهدهٔ دوبارهٔ داشبورد باید با نام کاربری و رمز عبور وارد شوید.</p>
      <div class="logout-actions">
        <button type="button" data-cancel-logout>بازگشت به داشبورد</button>
        <button class="confirm-logout" type="button" data-confirm-logout>بله، خارج می‌شوم</button>
      </div>
    </article>
  </section>`);

    // Smoke checks run in the browser console after each page renders.
    console.assert(root.querySelectorAll('.nav-link').length === 4, 'ناوبری باید چهار صفحه داشته باشد.');
    console.assert(root.querySelector('.nav-link.active')?.getAttribute('href') === current.href, 'صفحه فعال با مسیر فعلی هماهنگ نیست.');
    console.assert(root.querySelector('#menuToggle') && root.querySelector('#notificationButton'), 'کنترل‌های هدر ساخته نشده‌اند.');
    console.assert(root.querySelectorAll('.mobile-bottom-nav .mobile-nav-item').length === 5, 'نوار موبایل باید پنج گزینه داشته باشد.');
    console.assert(root.querySelector('#drilldownDialog'), 'پنجرهٔ جزئیات دو مرحله‌ای ساخته نشده است.');
    console.assert(root.querySelector('main.content')?.children.length > 0, 'محتوای صفحه رندر نشده است.');
    if (current.id === 'dashboard') {
        console.assert(root.querySelectorAll('.metric-card').length === 4, 'باید چهار کارت شاخص رندر شود.');
        console.assert(root.querySelectorAll('.meeting-row').length === 3, 'جلسات داشبورد رندر نشده‌اند.');
    }
    if (current.id === 'employees') console.assert(root.querySelectorAll('.data-table tbody tr').length === data.employees.length, 'فهرست کارمندان کامل رندر نشده است.');
    if (current.id === 'meetings') console.assert(root.querySelectorAll('.meeting-card').length === data.meetings.length, 'فهرست جلسات کامل رندر نشده است.');
    if (current.id === 'projects') console.assert(root.querySelectorAll('.project-card').length === data.projects.length, 'فهرست پروژه‌ها کامل رندر نشده است.');

    const toast = document.getElementById('toast');
    let toastTimer;

    function notify(message) {
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
    }

    const sidebarElement = document.getElementById('sidebar');
    const overlay = document.getElementById('mobileOverlay');
    const menuToggle = document.getElementById('menuToggle');
    sidebarElement?.setAttribute('aria-hidden', String(window.innerWidth <= 760));
    if (sidebarElement) sidebarElement.inert = window.innerWidth <= 760;

    function closeMenu({ returnFocus = false } = {}) {
        if (!sidebarElement || !overlay) return;
        sidebarElement.classList.remove('open');
        overlay.classList.remove('visible');
        sidebarElement.setAttribute('aria-hidden', String(window.innerWidth <= 760));
        sidebarElement.inert = window.innerWidth <= 760;
        menuToggle?.setAttribute('aria-expanded', 'false');
        root.querySelector('[data-mobile-action="open-menu"]')?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        if (returnFocus) menuToggle?.focus();
    }

    function openMenu(trigger = menuToggle) {
        if (!sidebarElement || !overlay) return;
        sidebarElement.classList.add('open');
        overlay.classList.add('visible');
        sidebarElement.setAttribute('aria-hidden', 'false');
        sidebarElement.inert = false;
        menuToggle?.setAttribute('aria-expanded', 'true');
        root.querySelector('[data-mobile-action="open-menu"]')?.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
        sidebarElement.querySelector('.nav-link')?.focus();
        trigger?.setAttribute('aria-expanded', 'true');
    }

    menuToggle?.addEventListener('click', () => {
        sidebarElement.classList.contains('open') ? closeMenu({ returnFocus: true }) : openMenu(menuToggle);
    });
    root.querySelector('[data-mobile-action="open-menu"]')?.addEventListener('click', event => {
        sidebarElement.classList.contains('open') ? closeMenu({ returnFocus: true }) : openMenu(event.currentTarget);
    });
    sidebarElement.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
    sidebarElement.querySelector('.sidebar-close-button')?.addEventListener('click', () => closeMenu({ returnFocus: true }));
    overlay.addEventListener('click', () => closeMenu({ returnFocus: true }));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) closeMenu();
    });

    const notificationButton = document.getElementById('notificationButton');
    const notificationPopover = document.getElementById('notificationPopover');
    notificationButton.addEventListener('click', () => {
        notificationPopover.hidden = !notificationPopover.hidden;
        notificationButton.setAttribute('aria-expanded', String(!notificationPopover.hidden));
    });
    document.addEventListener('click', event => {
        if (!notificationPopover.contains(event.target) && !notificationButton.contains(event.target)) {
            notificationPopover.hidden = true;
            notificationButton.setAttribute('aria-expanded', 'false');
        }
    });
    document.getElementById('profileButton').addEventListener('click', () => notify(`${data.manager} · ${data.role}`));
    const logoutButton = document.getElementById('logoutButton');
    const logoutDialog = document.getElementById('logoutDialog');
    const cancelLogout = logoutDialog.querySelector('[data-cancel-logout]');
    const confirmLogout = logoutDialog.querySelector('[data-confirm-logout]');
    let logoutFocusReturn = null;

    function openLogoutDialog() {
        logoutFocusReturn = document.activeElement;
        logoutDialog.hidden = false;
        document.body.style.overflow = 'hidden';
        cancelLogout.focus();
    }

    function closeLogoutDialog() {
        if (logoutDialog.hidden) return;
        logoutDialog.hidden = true;
        document.body.style.overflow = '';
        logoutFocusReturn?.focus();
    }

    logoutButton.addEventListener('click', openLogoutDialog);
    cancelLogout.addEventListener('click', closeLogoutDialog);
    confirmLogout.addEventListener('click', () => window.RobinAuth?.logout());
    logoutDialog.addEventListener('click', event => {
        if (event.target === logoutDialog) closeLogoutDialog();
    });
    document.addEventListener('keydown', event => {
        if (logoutDialog.hidden) return;
        if (event.key === 'Escape') closeLogoutDialog();
        if (event.key === 'Tab') {
            const controls = [cancelLogout, confirmLogout];
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    function applySearch(query) {
        const normalized = query.trim().toLocaleLowerCase('fa');
        let visible = 0;
        document.querySelectorAll('.filterable').forEach(item => {
            const match = !normalized || `${item.dataset.search || ''} ${item.textContent}`.toLocaleLowerCase('fa').includes(normalized);
            item.hidden = !match;
            if (match) visible++;
        });
        const empty = document.querySelector('.empty-state');
        if (empty) empty.hidden = visible !== 0;
    }
    document.getElementById('globalSearch').addEventListener('input', event => applySearch(event.target.value));
    document.querySelector('.local-search')?.addEventListener('input', event => {
        const globalSearch = document.getElementById('globalSearch');
        globalSearch.value = event.target.value;
        applySearch(event.target.value);
    });

    document.addEventListener('click', event => {
        const button = event.target.closest('[data-action]');
        if (!button) return;
        const action = button.dataset.action;
        if (action === 'employee-details' && !button.dataset.drill) notify(`اطلاعات همکار: ${button.dataset.name}`);
        else if (action === 'meeting-details' && !button.dataset.drill) notify(`جزئیات جلسه: ${button.dataset.name}`);
        else if (action === 'calendar-view') notify('جلسات به ترتیب تاریخ نمایش داده می‌شوند.');
        else if (action === 'add-employee') notify('فرم افزودن کارمند در نسخه متصل به سامانه باز می‌شود.');
        else if (action === 'add-meeting') notify('برای برنامه‌ریزی جلسه، سامانه تقویم را متصل کنید.');
        else if (action === 'add-project') notify('برای ساخت پروژه، سامانه مدیریت پروژه را متصل کنید.');
    });
    const drilldown = document.getElementById('drilldownDialog');
    const drilldownTitle = document.getElementById('drilldownTitle');
    const drilldownKicker = document.getElementById('drilldownKicker');
    const drilldownDetails = document.getElementById('drilldownDetails');
    const drilldownSecondary = document.getElementById('drilldownSecondary');
    const drilldownMore = document.getElementById('drilldownMore');
    let activeDrillRecord = null;
    let drilldownLevel = 1;
    let lastDrillTrigger = null;

    function renderDrilldownLevel() {
        const { type, record } = activeDrillRecord;
        const title = type === 'employee' ? record.name : type === 'meeting' ? record.title : record.name;
        const primaryDetails = type === 'employee' ? [
            ['سمت', record.role], ['واحد', record.team], ['وضعیت', record.status]
        ] : type === 'meeting' ? [
            ['زمان', `${record.day}، ساعت ${record.time}`], ['دسته‌بندی', record.kind], ['شرکت‌کنندگان', record.person]
        ] : [
            ['وضعیت', record.status], ['تیم مسئول', record.team], ['پیشرفت', `${record.progress}٪`]
        ];
        const deeperContent = type === 'employee'
            ? `<h3>اطلاعات تماس و تیم</h3><p>شماره تماس: ${record.phone}<br>واحد ${record.team} · وضعیت همکاری: ${record.status}</p>`
            : type === 'meeting'
                ? `<h3>برنامه و اقدام بعدی</h3><p>موضوع جلسه «${record.title}» در دستهٔ ${record.kind} قرار دارد. هماهنگی با ${record.person} انجام می‌شود.</p>`
                : `<h3>خلاصهٔ اجرایی</h3><p>${record.detail}<br>تیم مسئول: ${record.team} · وضعیت فعلی: ${record.status}</p>`;

        drilldownTitle.textContent = title;
        drilldownKicker.textContent = `${type === 'employee' ? 'کارمند' : type === 'meeting' ? 'جلسه' : 'پروژه'} · سطح ${drilldownLevel} از ۲`;
        drilldownDetails.innerHTML = primaryDetails.map(([label, value]) => `<div class="drilldown-detail"><span>${label}</span><strong>${value}</strong></div>`).join('');
        drilldownSecondary.innerHTML = deeperContent;
        drilldownSecondary.hidden = drilldownLevel === 1;
        drilldownMore.hidden = drilldownLevel === 2;
    }

    function openDrilldown(trigger) {
        const type = trigger.dataset.drill;
        const name = trigger.dataset.name;
        const source = type === 'employee' ? data.employees : type === 'meeting' ? data.meetings : data.projects;
        const key = type === 'meeting' ? 'title' : 'name';
        const record = source.find(item => item[key] === name);
        if (!record) return;
        activeDrillRecord = { type, record };
        drilldownLevel = 1;
        lastDrillTrigger = trigger;
        renderDrilldownLevel();
        drilldown.hidden = false;
        document.body.style.overflow = 'hidden';
        drilldown.querySelector('[data-drill-close]').focus();
    }

    function closeDrilldown() {
        if (drilldown.hidden) return;
        drilldown.hidden = true;
        document.body.style.overflow = '';
        lastDrillTrigger?.focus();
    }

    document.addEventListener('click', event => {
        const trigger = event.target.closest('[data-drill]');
        if (trigger) {
            openDrilldown(trigger);
            return;
        }
        if (event.target.closest('[data-drill-close]') || event.target === drilldown) closeDrilldown();
    });
    drilldownMore.addEventListener('click', () => {
        drilldownLevel = 2;
        renderDrilldownLevel();
    });
    document.addEventListener('keydown', event => {
        if (drilldown.hidden) return;
        if (event.key === 'Escape') {
            closeDrilldown();
            return;
        }
        if (event.key !== 'Tab') return;

        const focusable = [...drilldown.querySelectorAll('button:not([disabled]):not([hidden]), a[href], input:not([disabled])')]
            .filter(element => element.getClientRects().length > 0);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

})();
