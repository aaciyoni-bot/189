<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189</title>
    
    <!-- פונטים -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;800&family=Rubik:wght@400;700;900&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Assistant', 'sans-serif'],
                        heading: ['Rubik', 'sans-serif'],
                    },
                    colors: {
                        idf: { green: '#37412a', yellow: '#facc15', dark: '#141610', gold: '#d97706' }
                    }
                }
            }
        }
    </script>
    
    <style>
        body { background-color: #f8fafc; color: #1e293b; overflow-x: hidden; scroll-behavior: smooth; }
        h1, h2, h3, h4, .font-heading { font-family: 'Rubik', sans-serif; }
        
        .hero-bg {
            background: linear-gradient(to right, rgba(20, 22, 16, 0.9), rgba(55, 65, 42, 0.7)), 
                        url('https://images.unsplash.com/photo-1595350550478-f71f6d3a9544?auto=format&fit=crop&q=80&w=2000');
            background-size: cover; background-position: center;
        }

        .dark-section { background-color: #141610; color: white; }
        
        .card-img-zoom { overflow: hidden; position: relative; }
        .card-img-zoom img { transition: transform 0.6s ease; }
        .card-img-zoom:hover img { transform: scale(1.08); }

        /* לוגו שפורץ קצת את הניווט (מראה של תג יחידה) */
        .badge-logo {
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            transition: transform 0.3s ease;
        }
        .badge-logo:hover { transform: scale(1.05); }

        /* מודאל (חלון קופץ) לטפסים */
        .modal { display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.8); backdrop-filter: blur(5px); }
        .modal.active { display: flex; align-items: center; justify-content: center; }
        
        /* בורר שפות */
        .lang-btn { opacity: 0.6; transition: 0.3s; padding: 4px 12px; border-radius: 99px; cursor: pointer; border: 1px solid transparent; }
        .lang-btn.active { opacity: 1; border-color: #facc15; background-color: #facc15; color: #141610; }
        
        /* כפתורי ניווט ברורים (UI/UX) */
        .nav-button {
            background-color: #f1f5f9;
            color: #475569;
            padding: 8px 20px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 0.95rem;
            border: 1px solid #e2e8f0;
            transition: all 0.2s ease;
        }
        .nav-button:hover {
            background-color: #facc15;
            color: #141610;
            border-color: #facc15;
            box-shadow: 0 4px 12px rgba(250, 204, 21, 0.3);
        }
    </style>
</head>
<body>

    <!-- ניווט עליון -->
    <nav class="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-md border-b-4 border-idf-yellow shadow-lg h-24 flex items-center transition-all">
        <div class="max-w-[95rem] mx-auto px-4 w-full flex justify-between items-center">
            
            <!-- אזור לוגו וכותרת מותאם אישית -->
            <div class="flex items-center gap-5">
                <!-- הלוגו הוגדל והפך למרכזי יותר -->
                <div class="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl md:rounded-3xl border-2 border-gray-100 flex items-center justify-center shrink-0 relative badge-logo -mb-4 md:-mb-8 z-50">
                    <img src="logo.png" alt="" class="w-full h-full object-contain scale-110 p-2" onerror="this.src='https://placehold.co/150/37412a/facc15?text=189'">
                </div>
                <!-- הכותרת הוקטנה במעט כדי לתת כבוד לסמל -->
                <div class="hidden sm:block">
                    <h1 class="text-lg md:text-xl font-black text-idf-dark leading-tight" data-i18n="navTitle">עמותת חטיבת נגבה 189</h1>
                    <p class="text-idf-green font-bold text-xs uppercase tracking-widest opacity-80" data-i18n="navSub">משפחה אחת. דרך אחת.</p>
                </div>
            </div>

            <!-- אזור כפתורי הניווט (UI/UX משופר - כפתורים נפרדים) -->
            <div class="hidden xl:flex gap-3">
                <a href="#mission" class="nav-button" data-i18n="navMission">מטרות העמותה</a>
                <a href="#networking" class="nav-button" data-i18n="navNet">נטוורקינג ולוח משרות</a>
                <a href="#battalions" class="nav-button" data-i18n="navBat">גדודי החטיבה</a>
                <a href="#management" class="nav-button" data-i18n="navMgmt">הנהלה</a>
                <a href="#documents" class="nav-button" data-i18n="navDocs">מסמכים</a>
            </div>

            <!-- אזור שפות ופעולות -->
            <div class="flex items-center gap-4">
                <!-- שפות -->
                <div class="hidden md:flex bg-gray-100 rounded-full p-1 border border-gray-200">
                    <button onclick="changeLang('he')" class="lang-btn active text-xs font-bold text-gray-800" id="btn-he">HE</button>
                    <button onclick="changeLang('en')" class="lang-btn text-xs font-bold text-gray-800" id="btn-en">EN</button>
                    <button onclick="changeLang('fr')" class="lang-btn text-xs font-bold text-gray-800" id="btn-fr">FR</button>
                </div>
                <!-- כפתור תרומה מוביל לווטסאפ -->
                <a href="https://wa.me/972542456102" target="_blank" class="hidden sm:flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full font-black text-sm hover:bg-red-700 transition shadow-md hover:shadow-red-500/30" data-i18n="btnDonateHeader">
                    <i class="fa-brands fa-whatsapp text-lg"></i> לתרומה
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="hero-bg min-h-[85vh] flex items-center pt-24 text-white">
        <div class="max-w-6xl mx-auto px-6">
            <span class="inline-block px-4 py-1 bg-idf-yellow text-idf-dark font-black rounded text-sm mb-6 uppercase tracking-widest shadow-md" data-i18n="heroTag">מהנגב באנו, על הנגב נגן</span>
            <h2 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter drop-shadow-xl" data-i18n="heroTitle">
                מגינים על הבית בחזית,<br><span class="text-idf-yellow">ובונים קהילה בעורף.</span>
            </h2>
            <p class="text-lg md:text-2xl text-gray-200 font-light max-w-3xl leading-relaxed mb-10 drop-shadow-md" data-i18n="heroDesc">
                עמותת החטיבה היא הבית של הלוחמים, המפקדים והמשפחות. אנו דואגים לרווחה, לנטוורקינג תעסוקתי, ומהווים משפחה אחת גדולה במילואים ובאזרחות.
            </p>
            <div class="flex flex-wrap gap-4">
                <button onclick="openModal('joinModal')" class="px-8 py-4 bg-idf-yellow text-idf-dark font-black text-lg rounded-xl hover:bg-white transition shadow-lg hover:shadow-idf-yellow/50" data-i18n="btnJoin">טופס הצטרפות לעמותה</button>
                <a href="#networking" class="px-8 py-4 bg-black/40 backdrop-blur-sm border border-white/30 text-white font-black text-lg rounded-xl hover:bg-black/60 transition" data-i18n="btnNet">אינדקס ולוח משרות</a>
            </div>
        </div>
    </section>

    <!-- רצועת תרומה (ווטסאפ) -->
    <section id="donate" class="bg-idf-dark text-white py-12 border-y-4 border-idf-yellow">
        <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h3 class="text-3xl font-black mb-2" data-i18n="donateTitle">תמכו במשפחת החטיבה</h3>
                <p class="text-gray-400" data-i18n="donateDesc">התרומות שלכם מאפשרות לנו לממן את הניידת, חבילות למשפחות וסיוע למילואימניקים.</p>
            </div>
            <a href="https://wa.me/972542456102" target="_blank" class="flex items-center justify-center gap-3 px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-xl rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.5)] transition" data-i18n="btnDonateNow">
                <i class="fa-brands fa-whatsapp text-3xl"></i> תרמו עכשיו
            </a>
        </div>
    </section>

    <!-- מטרות ופעילות -->
    <section id="mission" class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-idf-dark mb-4" data-i18n="missionTitle">העשייה שלנו</h2>
                <div class="h-1.5 w-24 bg-idf-green mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- כרטיסייה 1: ניידת ת"ש -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-img-zoom flex flex-col h-full border border-gray-100">
                    <div class="h-56 relative overflow-hidden bg-gray-800">
                        <img src="https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&q=80&w=600" alt="" class="w-full h-full object-cover opacity-70">
                        <!-- סמל 189 נגבה מוטמע בתמונה -->
                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span class="text-3xl font-black text-idf-dark bg-idf-yellow px-4 py-2 rounded-lg transform -skew-x-12 shadow-2xl border-2 border-white">189 נגבה</span>
                        </div>
                        <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                            <i class="fa-solid fa-truck-fast text-xl text-idf-green"></i>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-3 text-idf-dark" data-i18n="m1Title">ניידת ת"ש ללוחמים</h3>
                        <p class="text-gray-600 text-sm leading-relaxed" data-i18n="m1Desc">הגעת ניידת ייעודית לשטחי הכינוס והלחימה עם אוכל, ציוד לוגיסטי ופינוקים לשמירה על מורל גבוה של הכוחות.</p>
                    </div>
                </div>

                <!-- כרטיסייה 2: משפחות -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-img-zoom flex flex-col h-full border border-gray-100">
                    <div class="h-56 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=600" alt="" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                            <i class="fa-solid fa-house-chimney-heart text-xl text-red-500"></i>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-3 text-idf-dark" data-i18n="m2Title">מעטפת משפחות</h3>
                        <p class="text-gray-600 text-sm leading-relaxed" data-i18n="m2Desc">תמיכה בנשות ואנשי המילואים, חלוקת שי בחגים, וארגון ימי הפוגה קהילתיים למשפחות החטיבה.</p>
                    </div>
                </div>

                <!-- כרטיסייה 3: נטוורקינג -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-img-zoom flex flex-col h-full border border-gray-100">
                    <div class="h-56 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600" alt="" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                            <i class="fa-solid fa-handshake text-xl text-blue-600"></i>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-3 text-idf-dark" data-i18n="m3Title">תעסוקה ונטוורקינג</h3>
                        <p class="text-gray-600 text-sm leading-relaxed" data-i18n="m3Desc">קידום עסקים של חברי החטיבה, עזרה במציאת עבודה ויצירת קהילה כלכלית תומכת במרחב האזרחי.</p>
                    </div>
                </div>

                <!-- כרטיסייה 4: מועדון צרכנות -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-img-zoom flex flex-col h-full border border-gray-100">
                    <div class="h-56 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600" alt="" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                            <i class="fa-solid fa-tags text-xl text-idf-gold"></i>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-3 text-idf-dark" data-i18n="m4Title">מועדון צרכנות</h3>
                        <p class="text-gray-600 text-sm leading-relaxed" data-i18n="m4Desc">מינוף כוח הקנייה של 2,500 חברי העמותה להשגת הטבות והנחות בלעדיות ברשתות שיווק ושירותים.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- מערכת נטוורקינג (Firebase Powered) -->
    <section id="networking" class="dark-section py-24 border-y border-white/10">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-idf-yellow mb-4" data-i18n="netTitle">קהילה של 2,500 אחים</h2>
                <p class="text-gray-400 max-w-2xl mx-auto text-lg" data-i18n="netDesc">במיוחד עבורכם בנינו מערכת חיה למציאת עבודה ולקידום העסקים של משרתי החטיבה. המידע מתעדכן בזמן אמת.</p>
            </div>

            <!-- Tabs -->
            <div class="flex justify-center gap-4 mb-8">
                <button onclick="switchTab('jobs')" id="tab-jobs" class="px-8 py-3 rounded-xl font-black text-lg bg-idf-yellow text-idf-dark transition" data-i18n="tabJobs">לוח משרות</button>
                <button onclick="switchTab('biz')" id="tab-biz" class="px-8 py-3 rounded-xl font-black text-lg bg-white/10 text-white hover:bg-white/20 transition" data-i18n="tabBiz">אינדקס עסקים</button>
            </div>

            <!-- לוח משרות -->
            <div id="content-jobs" class="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-white/10 pb-4 gap-4">
                    <h3 class="text-2xl font-bold text-white">משרות חמות לחברי החטיבה</h3>
                    <button onclick="openModal('jobModal')" class="bg-idf-green hover:bg-idf-green/80 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-lg"><i class="fa-solid fa-plus ml-2"></i>פרסם משרה</button>
                </div>
                <div id="jobs-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="text-center text-gray-500 py-10 col-span-full">טוען משרות מהמערכת...</div>
                </div>
            </div>

            <!-- אינדקס עסקים -->
            <div id="content-biz" class="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hidden">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-white/10 pb-4 gap-4">
                    <h3 class="text-2xl font-bold text-white">בעלי מקצוע מהחטיבה</h3>
                    <button onclick="openModal('bizModal')" class="bg-idf-green hover:bg-idf-green/80 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-lg"><i class="fa-solid fa-plus ml-2"></i>הוסף עסק לאינדקס</button>
                </div>
                <div id="biz-list" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="text-center text-gray-500 py-10 col-span-full">טוען עסקים מהמערכת...</div>
                </div>
            </div>
        </div>
    </section>

    <!-- גדודי החטיבה -->
    <section id="battalions" class="py-24 bg-gray-100">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-idf-dark mb-4" data-i18n="batTitle">השדרה המבצעית</h2>
                <div class="h-1.5 w-24 bg-idf-yellow mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 1891 -->
                <div class="bg-white rounded-[2rem] shadow-md overflow-hidden flex flex-col transition hover:shadow-xl">
                    <div class="h-40 bg-idf-green flex flex-col items-center justify-center text-white border-b-4 border-idf-yellow relative">
                        <i class="fa-solid fa-shield-halved absolute opacity-10 text-8xl right-4"></i>
                        <h3 class="text-4xl font-black relative z-10">1891</h3>
                        <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1 relative z-10">"מגני יואב"</p>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">מרחב לכיש, קריית גת ומועצה אזורית יואב. מגן על השער הצפוני של הנגב.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-auto flex justify-between items-center">
                            <div>
                                <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                                <span class="font-black text-idf-dark text-lg">יואב הנר</span>
                            </div>
                            <i class="fa-solid fa-user-shield text-idf-green opacity-30 text-2xl"></i>
                        </div>
                    </div>
                </div>

                <!-- 1892 -->
                <div class="bg-white rounded-[2rem] shadow-md overflow-hidden flex flex-col transition hover:shadow-xl">
                    <div class="h-40 bg-idf-green flex flex-col items-center justify-center text-white border-b-4 border-idf-yellow relative">
                        <i class="fa-solid fa-bolt absolute opacity-10 text-8xl right-4"></i>
                        <h3 class="text-4xl font-black relative z-10">1892</h3>
                        <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1 relative z-10">"חורב"</p>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף המגן פיזית על הבית.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-auto flex justify-between items-center">
                            <div>
                                <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                                <span class="font-black text-idf-dark text-lg">אלי כהן</span>
                            </div>
                            <i class="fa-solid fa-user-shield text-idf-green opacity-30 text-2xl"></i>
                        </div>
                    </div>
                </div>

                <!-- 1893 -->
                <div class="bg-white rounded-[2rem] shadow-md overflow-hidden flex flex-col transition hover:shadow-xl">
                    <div class="h-40 bg-idf-green flex flex-col items-center justify-center text-white border-b-4 border-idf-yellow relative">
                        <i class="fa-solid fa-mountain absolute opacity-10 text-8xl right-4"></i>
                        <h3 class="text-4xl font-black relative z-10">1893</h3>
                        <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1 relative z-10">"הר הנגב"</p>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">דימונה, ערד, ירוחם ומצפה רמון. שמירה הדוקה על מרחב הנגב המרכזי והערבה.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-auto flex justify-between items-center">
                            <div>
                                <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                                <span class="font-black text-idf-dark text-lg">אורי שינדלר</span>
                            </div>
                            <i class="fa-solid fa-user-shield text-idf-green opacity-30 text-2xl"></i>
                        </div>
                    </div>
                </div>

                <!-- 1894 -->
                <div class="bg-white rounded-[2rem] shadow-md overflow-hidden flex flex-col transition hover:shadow-xl lg:col-start-1 lg:col-end-2 lg:ml-auto w-full">
                    <div class="h-40 bg-idf-green flex flex-col items-center justify-center text-white border-b-4 border-idf-yellow relative">
                        <i class="fa-solid fa-anchor absolute opacity-10 text-8xl right-4"></i>
                        <h3 class="text-4xl font-black relative z-10">1894</h3>
                        <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1 relative z-10">"הלל"</p>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">מורכב מיוצאי חיל הים. גדוד מילואים המשלב ניסיון מבצעי עשיר ים ויבשה.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-auto flex justify-between items-center">
                            <div>
                                <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                                <span class="font-black text-idf-dark text-lg">יהונתן פרידמן</span>
                            </div>
                            <i class="fa-solid fa-user-shield text-idf-green opacity-30 text-2xl"></i>
                        </div>
                    </div>
                </div>

                <!-- 1895 -->
                <div class="bg-white rounded-[2rem] shadow-md overflow-hidden flex flex-col transition hover:shadow-xl lg:col-start-2 lg:col-end-3">
                    <div class="h-40 bg-idf-green flex flex-col items-center justify-center text-white border-b-4 border-idf-yellow relative">
                        <i class="fa-solid fa-map-location-dot absolute opacity-10 text-8xl right-4"></i>
                        <h3 class="text-4xl font-black relative z-10">1895</h3>
                        <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1 relative z-10">"יעלה"</p>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">העיר אילת ויישובי חבל אילות. הגנה על הגזרה הדרומית ביותר של מדינת ישראל.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-auto flex justify-between items-center">
                            <div>
                                <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                                <span class="font-black text-idf-dark text-lg">חיים קמחי</span>
                            </div>
                            <i class="fa-solid fa-user-shield text-idf-green opacity-30 text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- הנהלה -->
    <section id="management" class="py-24 bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-idf-dark mb-4" data-i18n="mgmtTitle">הנהגת העמותה</h2>
                <div class="h-1.5 w-24 bg-idf-green mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- הוועד המנהל -->
                <div class="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
                    <h3 class="text-2xl font-black text-idf-dark mb-6 border-b pb-4"><i class="fa-solid fa-users-gear ml-2 text-idf-green"></i>הוועד המנהל והביקורת</h3>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 col-span-full">
                            <span class="font-bold text-gray-500">יו"ר העמותה</span>
                            <span class="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-lg font-bold">טרם מונה</span>
                        </div>
                        
                        <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <span class="font-bold">יואב הנר</span>
                            <span class="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">חבר ועד (1891)</span>
                        </div>
                        <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <span class="font-bold">אלי כהן</span>
                            <span class="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">חבר ועד (1892)</span>
                        </div>
                        <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <span class="font-bold">אורי שינדלר</span>
                            <span class="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">חבר ועד (1893)</span>
                        </div>
                        <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <span class="font-bold">יהונתן פרידמן</span>
                            <span class="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">חבר ועד (1894)</span>
                        </div>
                        <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <span class="font-bold">חיים קמחי</span>
                            <span class="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">חבר ועד (1895)</span>
                        </div>
                        <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <span class="font-bold">דני בלובשטיין</span>
                            <span class="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">חבר ועד</span>
                        </div>
                        <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <span class="font-bold">בר נוימן</span>
                            <span class="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-bold">חבר ועד</span>
                        </div>
                        
                        <div class="flex justify-between items-center bg-idf-dark text-white p-4 rounded-xl shadow-sm border border-idf-dark col-span-full mt-2">
                            <span class="font-bold">רו"ח גל אדווה</span>
                            <span class="text-xs bg-idf-yellow text-idf-dark px-3 py-1.5 rounded-lg font-bold">מבקרת העמותה</span>
                        </div>
                    </div>
                </div>

                <!-- הנהלה ביצועית -->
                <div class="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
                    <h3 class="text-2xl font-black text-idf-dark mb-6 border-b pb-4"><i class="fa-solid fa-briefcase ml-2 text-idf-green"></i>הנהלה ביצועית</h3>
                    <ul class="space-y-4">
                        <li class="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-gray-100 opacity-70">
                            <span class="font-bold">מנכ"ל/ית העמותה</span>
                            <span class="text-xs bg-gray-200 px-3 py-1.5 rounded-lg text-gray-700 font-bold">ללא אדם מוגדר</span>
                        </li>
                        <li class="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-gray-100 opacity-70">
                            <span class="font-bold">מנהל/ת רווחה</span>
                            <span class="text-xs bg-gray-200 px-3 py-1.5 rounded-lg text-gray-700 font-bold">ללא אדם מוגדר</span>
                        </li>
                        <li class="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-gray-100 opacity-70">
                            <span class="font-bold">מנהל/ת פיתוח משאבים</span>
                            <span class="text-xs bg-gray-200 px-3 py-1.5 rounded-lg text-gray-700 font-bold">ללא אדם מוגדר</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- מסמכי העמותה -->
    <section id="documents" class="py-20 dark-section border-t-4 border-idf-yellow">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-3xl font-black mb-8" data-i18n="docsTitle">מסמכי העמותה ושקיפות</h2>
            <div class="flex flex-wrap justify-center gap-4">
                <div class="bg-white/10 hover:bg-white/20 transition cursor-pointer p-4 rounded-xl border border-white/20 w-48">
                    <i class="fa-solid fa-file-pdf text-3xl text-red-400 mb-2"></i>
                    <p class="font-bold text-sm">תעודת רישום עמותה</p>
                </div>
                <div class="bg-white/10 hover:bg-white/20 transition cursor-pointer p-4 rounded-xl border border-white/20 w-48">
                    <i class="fa-solid fa-file-pdf text-3xl text-red-400 mb-2"></i>
                    <p class="font-bold text-sm">אישור ניהול תקין</p>
                </div>
                <div class="bg-white/10 hover:bg-white/20 transition cursor-pointer p-4 rounded-xl border border-white/20 w-48">
                    <i class="fa-solid fa-file-pdf text-3xl text-red-400 mb-2"></i>
                    <p class="font-bold text-sm">סעיף 46 (זיכוי מס)</p>
                </div>
            </div>
            <p class="text-gray-500 mt-6 text-sm">* המסמכים יעודכנו בקרוב.</p>
        </div>
    </section>

    <!-- פוטר -->
    <footer class="bg-black py-12 text-white text-center md:text-right border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-700">
                    <img src="logo.png" alt="לוגו" class="w-full h-full object-contain p-1" onerror="this.style.display='none'">
                </div>
                <div>
                    <span class="font-black text-xl block">עמותת חטיבת נגבה 189</span>
                    <span class="text-xs text-gray-500">כל הזכויות שמורות &copy; 2024</span>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <!-- כפתור תרומה לווטסאפ גם בפוטר -->
                <a href="https://wa.me/972542456102" target="_blank" class="text-red-500 font-bold hover:text-red-400 transition text-sm flex items-center gap-2" data-i18n="btnDonateNow">
                    <i class="fa-brands fa-whatsapp text-lg"></i> לתרומה לעמותה
                </a>
                <div class="flex gap-4 text-2xl text-gray-400">
                    <i class="fa-brands fa-facebook hover:text-white cursor-pointer transition"></i>
                    <i class="fa-brands fa-whatsapp hover:text-white cursor-pointer transition"></i>
                </div>
            </div>
        </div>
    </footer>

    <!-- HTML Modals (טפסים צפים) -->
    
    <!-- מודאל הצטרפות -->
    <div id="joinModal" class="modal" onclick="closeModal(event, 'joinModal')">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full m-4 shadow-2xl" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-black text-idf-dark">טופס הצטרפות</h3>
                <button onclick="document.getElementById('joinModal').classList.remove('active')" class="text-gray-400 hover:text-red-500 transition"><i class="fa-solid fa-xmark text-2xl"></i></button>
            </div>
            <form id="joinForm" class="space-y-4">
                <input type="text" id="joinName" placeholder="שם מלא" required class="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-idf-green outline-none transition">
                <input type="tel" id="joinPhone" placeholder="טלפון" required class="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-idf-green outline-none transition">
                <select id="joinBat" class="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-idf-green transition">
                    <option value="">בחר גדוד...</option>
                    <option>1891 (מגני יואב)</option>
                    <option>1892 (חורב)</option>
                    <option>1893 (הר הנגב)</option>
                    <option>1894 (הלל)</option>
                    <option>1895 (יעלה)</option>
                    <option>אחר / מפקדה</option>
                </select>
                <button type="submit" class="w-full bg-idf-dark text-idf-yellow font-black py-4 rounded-xl mt-4 hover:bg-black transition shadow-lg">שלח פרטים למערכת</button>
            </form>
        </div>
    </div>

    <!-- מודאל פרסום משרה -->
    <div id="jobModal" class="modal" onclick="closeModal(event, 'jobModal')">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full m-4 shadow-2xl" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-black text-idf-dark">פרסום משרה חדשה</h3>
                <button onclick="document.getElementById('jobModal').classList.remove('active')" class="text-gray-400 hover:text-red-500 transition"><i class="fa-solid fa-xmark text-2xl"></i></button>
            </div>
            <form id="jobForm" class="space-y-4">
                <input type="text" id="jobTitle" placeholder="כותרת המשרה (למשל: דרוש מנהל פרויקטים)" required class="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-idf-green transition">
                <input type="text" id="jobCompany" placeholder="שם החברה / מעסיק" required class="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-idf-green transition">
                <input type="text" id="jobContact" placeholder="איך יוצרים קשר? (טלפון/אימייל)" required class="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-idf-green transition">
                <button type="submit" class="w-full bg-idf-green hover:bg-idf-dark transition text-white font-black py-4 rounded-xl shadow-lg">פרסם בלוח</button>
            </form>
        </div>
    </div>

    <!-- מודאל עסק לאינדקס -->
    <div id="bizModal" class="modal" onclick="closeModal(event, 'bizModal')">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full m-4 shadow-2xl" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-black text-idf-dark">הוספת עסק לאינדקס</h3>
                <button onclick="document.getElementById('bizModal').classList.remove('active')" class="text-gray-400 hover:text-red-500 transition"><i class="fa-solid fa-xmark text-2xl"></i></button>
            </div>
            <form id="bizForm" class="space-y-4">
                <input type="text" id="bizName" placeholder="שם העסק (למשל: דני שיפוצים)" required class="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-idf-green transition">
                <input type="text" id="bizCategory" placeholder="תחום (למשל: בינוי, עריכת דין, מסעדנות)" required class="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-idf-green transition">
                <input type="text" id="bizContact" placeholder="טלפון או אתר אינטרנט" required class="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-idf-green transition">
                <button type="submit" class="w-full bg-idf-green hover:bg-idf-dark transition text-white font-black py-4 rounded-xl shadow-lg">הוסף לאינדקס</button>
            </form>
        </div>
    </div>

    <!-- Logic (UI + Firebase) -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        let db, auth, user, appId;

        try {
            const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
            const app = initializeApp(firebaseConfig);
            auth = getAuth(app);
            db = getFirestore(app);
            appId = typeof __app_id !== 'undefined' ? __app_id : '189-ngo-app';
            
            const initAuth = async () => {
                try { await signInAnonymously(auth); } catch (e) { console.warn("Auth skipped (local mode)"); }
            };
            initAuth();

            onAuthStateChanged(auth, (u) => {
                user = u;
                if (user) {
                    loadNetworkingData();
                }
            });
        } catch (error) {
            console.log("Firebase setup skipped. Running in Local prototype mode.");
        }

        window.openModal = (id) => document.getElementById(id).classList.add('active');
        window.closeModal = (e, id) => { if(e) e.stopPropagation(); document.getElementById(id).classList.remove('active'); };
        
        window.switchTab = (tab) => {
            document.getElementById('content-jobs').style.display = tab === 'jobs' ? 'block' : 'none';
            document.getElementById('content-biz').style.display = tab === 'biz' ? 'block' : 'none';
            
            document.getElementById('tab-jobs').className = tab === 'jobs' ? 'px-8 py-3 rounded-xl font-black text-lg bg-idf-yellow text-idf-dark transition' : 'px-8 py-3 rounded-xl font-black text-lg bg-white/10 text-white hover:bg-white/20 transition';
            document.getElementById('tab-biz').className = tab === 'biz' ? 'px-8 py-3 rounded-xl font-black text-lg bg-idf-yellow text-idf-dark transition' : 'px-8 py-3 rounded-xl font-black text-lg bg-white/10 text-white hover:bg-white/20 transition';
        };

        const dict = {
            navTitle: { he: 'עמותת חטיבת נגבה 189', en: '189 Negba NGO', fr: 'ONG Brigade Negba 189' },
            navSub: { he: 'משפחה אחת. דרך אחת.', en: 'One Family. One Way.', fr: 'Une Famille. Un Chemin.' },
            navMission: { he: 'מטרות העמותה', en: 'Mission', fr: 'Mission' },
            navNet: { he: 'נטוורקינג ולוח משרות', en: 'Networking & Jobs', fr: 'Emplois et Réseau' },
            navBat: { he: 'גדודי החטיבה', en: 'Battalions', fr: 'Bataillons' },
            navMgmt: { he: 'הנהלה', en: 'Management', fr: 'Direction' },
            navDocs: { he: 'מסמכים', en: 'Documents', fr: 'Documents' },
            btnDonateHeader: { he: '<i class="fa-brands fa-whatsapp text-lg"></i> לתרומה', en: '<i class="fa-brands fa-whatsapp text-lg"></i> Donate', fr: '<i class="fa-brands fa-whatsapp text-lg"></i> Faire un don' },
            heroTag: { he: 'מהנגב באנו, על הנגב נגן', en: 'From the Negev, Defending the Negev', fr: 'Du Néguev, Défendant le Néguev' },
            heroTitle: { he: 'מגינים על הבית בחזית,<br><span class="text-idf-yellow">ובונים קהילה בעורף.</span>', en: 'Defending the front,<br><span class="text-idf-yellow">Building the community.</span>', fr: 'Défendre le front,<br><span class="text-idf-yellow">Construire la communauté.</span>' },
            heroDesc: { he: 'עמותת החטיבה היא הבית של הלוחמים, המפקדים והמשפחות. אנו דואגים לרווחה, לנטוורקינג תעסוקתי, ומהווים משפחה אחת גדולה במילואים ובאזרחות.', en: 'The NGO is the home of the soldiers, commanders and families. We care for welfare, networking, and form a big family.', fr: 'L\'ONG est la maison des soldats, commandants et familles. Nous prenons soin du bien-être, du réseautage, et formons une grande famille.' },
            btnJoin: { he: 'טופס הצטרפות לעמותה', en: 'Join the NGO', fr: 'Rejoindre l\'ONG' },
            btnNet: { he: 'אינדקס ולוח משרות', en: 'Jobs & Index', fr: 'Emplois et Index' },
            donateTitle: { he: 'תמכו במשפחת החטיבה', en: 'Support the Brigade Family', fr: 'Soutenez la Famille de la Brigade' },
            donateDesc: { he: 'התרומות שלכם מאפשרות לנו לממן את הניידת, חבילות למשפחות וסיוע למילואימניקים.', en: 'Your donations allow us to fund the welfare van, care packages and assistance.', fr: 'Vos dons nous permettent de financer la camionnette, les colis et l\'assistance.' },
            btnDonateNow: { he: '<i class="fa-brands fa-whatsapp text-3xl"></i> תרמו עכשיו', en: '<i class="fa-brands fa-whatsapp text-3xl"></i> Donate Now', fr: '<i class="fa-brands fa-whatsapp text-3xl"></i> Faire un don' },
            m1Title: { he: 'ניידת ת"ש ללוחמים', en: 'Welfare Van', fr: 'Camionnette de Bien-être' },
            m1Desc: { he: 'הגעת ניידת ייעודית לשטחי הכינוס והלחימה עם אוכל, ציוד לוגיסטי ופינוקים לשמירה על מורל גבוה של הכוחות.', en: 'Dedicated van arriving at assembly areas with food, logistics, and treats to maintain high morale.', fr: 'Camionnette dédiée arrivant aux zones de rassemblement avec nourriture, logistique et friandises pour maintenir un moral élevé.' },
            m2Title: { he: 'מעטפת משפחות', en: 'Family Support', fr: 'Soutien aux Familles' },
            m2Desc: { he: 'תמיכה בנשות ואנשי המילואים, חלוקת שי בחגים, וארגון ימי הפוגה קהילתיים למשפחות החטיבה.', en: 'Support for reservists\' spouses, holiday gifts, and organizing community relief days for brigade families.', fr: 'Soutien aux conjoints de réservistes, cadeaux de fin d\'année et organisation de journées de soulagement communautaire pour les familles de la brigade.' },
            m3Title: { he: 'תעסוקה ונטוורקינג', en: 'Employment & Networking', fr: 'Emploi et Réseautage' },
            m3Desc: { he: 'קידום עסקים של חברי החטיבה, עזרה במציאת עבודה ויצירת קהילה כלכלית תומכת במרחב האזרחי.', en: 'Promoting brigade members\' businesses, helping find jobs, and creating a supportive economic community.', fr: 'Promouvoir les entreprises des membres de la brigade, aider à trouver un emploi et créer une communauté économique de soutien.' },
            m4Title: { he: 'מועדון צרכנות', en: 'Consumer Club', fr: 'Club de Consommateurs' },
            m4Desc: { he: 'מינוף כוח הקנייה של 2,500 חברי העמותה להשגת הטבות והנחות בלעדיות ברשתות שיווק ושירותים.', en: 'Leveraging the purchasing power of 2,500 members to achieve exclusive benefits and discounts.', fr: 'Tirer parti du pouvoir d\'achat de 2 500 membres pour obtenir des avantages et des réductions exclusifs.' },
            netTitle: { he: 'קהילה של 2,500 אחים', en: 'Community of 2,500 Brothers', fr: 'Communauté de 2 500 Frères' },
            netDesc: { he: 'במיוחד עבורכם בנינו מערכת חיה למציאת עבודה ולקידום העסקים של משרתי החטיבה. המידע מתעדכן בזמן אמת.', en: 'We built a live system for finding jobs and promoting businesses of brigade members. The information is updated in real-time.', fr: 'Nous avons conçu un système en direct pour trouver des emplois et promouvoir les entreprises des membres de la brigade. Les informations sont mises à jour en temps réel.' },
            tabJobs: { he: 'לוח משרות', en: 'Job Board', fr: 'Offres d\'Emploi' },
            tabBiz: { he: 'אינדקס עסקים', en: 'Business Index', fr: 'Annuaire des Entreprises' },
            batTitle: { he: 'השדרה המבצעית', en: 'Operational Forces', fr: 'Forces Opérationnelles' },
            mgmtTitle: { he: 'הנהגת העמותה', en: 'NGO Leadership', fr: 'Direction de l\'ONG' },
            docsTitle: { he: 'מסמכי העמותה ושקיפות', en: 'NGO Documents & Transparency', fr: 'Documents de l\'ONG et Transparence' }
        };

        window.changeLang = (lang) => {
            const dir = lang === 'he' ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
            document.documentElement.dir = dir;
            document.body.style.textAlign = dir === 'rtl' ? 'right' : 'left';
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key] && dict[key][lang]) el.innerHTML = dict[key][lang];
            });
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('btn-'+lang).classList.add('active');
        };

        const addFirebaseData = async (colName, dataObj, listId, renderFn) => {
            if(!user || !db) {
                alert('הנתונים נשמרו מקומית! (במערכת האמיתית הם עולים לענן)');
                const container = document.getElementById(listId);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = renderFn(dataObj);
                if(container.innerHTML.includes('טוען')) container.innerHTML = '';
                container.prepend(tempDiv.firstElementChild);
                return;
            }
            try {
                const ref = collection(db, 'artifacts', appId, 'public', 'data', colName);
                await addDoc(ref, { ...dataObj, createdAt: serverTimestamp(), userId: user.uid });
                alert('המידע נשמר בהצלחה במערכת!');
            } catch (e) {
                alert('שגיאה בשמירה, נסה שוב.');
            }
        };

        document.getElementById('joinForm').addEventListener('submit', (e) => {
            e.preventDefault();
            addFirebaseData('join_requests', {
                name: document.getElementById('joinName').value,
                phone: document.getElementById('joinPhone').value,
                battalion: document.getElementById('joinBat').value
            }, null, null);
            document.getElementById('joinForm').reset();
            window.closeModal(null, 'joinModal');
        });

        const renderJob = (job) => `
            <div class="bg-white/10 p-5 rounded-2xl border border-white/20 hover:border-idf-yellow transition text-right">
                <h4 class="font-black text-xl text-idf-yellow">${job.title}</h4>
                <p class="text-white mt-1"><i class="fa-solid fa-building ml-2 text-gray-400"></i>${job.company}</p>
                <p class="text-gray-400 text-sm mt-3 bg-black/30 p-2 rounded inline-block"><i class="fa-solid fa-envelope ml-2"></i>${job.contact}</p>
            </div>
        `;
        document.getElementById('jobForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const jobData = { title: document.getElementById('jobTitle').value, company: document.getElementById('jobCompany').value, contact: document.getElementById('jobContact').value };
            addFirebaseData('jobs', jobData, 'jobs-list', renderJob);
            document.getElementById('jobForm').reset();
            window.closeModal(null, 'jobModal');
        });

        const renderBiz = (biz) => `
            <div class="bg-white/10 p-5 rounded-2xl border border-white/20 hover:border-idf-yellow transition text-center flex flex-col items-center">
                <div class="w-12 h-12 bg-idf-green rounded-full flex items-center justify-center text-white mb-3 shadow-md"><i class="fa-solid fa-briefcase"></i></div>
                <h4 class="font-black text-lg text-white">${biz.name}</h4>
                <p class="text-idf-yellow text-sm mb-3">${biz.category}</p>
                <span class="bg-white/20 px-4 py-1.5 rounded-lg text-xs text-white font-bold tracking-widest">${biz.contact}</span>
            </div>
        `;
        document.getElementById('bizForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const bizData = { name: document.getElementById('bizName').value, category: document.getElementById('bizCategory').value, contact: document.getElementById('bizContact').value };
            addFirebaseData('businesses', bizData, 'biz-list', renderBiz);
            document.getElementById('bizForm').reset();
            window.closeModal(null, 'bizModal');
        });

        function loadNetworkingData() {
            if(!db || !user) return;
            onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', 'jobs'), (snapshot) => {
                const container = document.getElementById('jobs-list');
                if(snapshot.empty) { container.innerHTML = '<div class="text-gray-500">אין משרות עדיין. היה הראשון לפרסם!</div>'; return; }
                container.innerHTML = '';
                snapshot.forEach(doc => { container.innerHTML += renderJob(doc.data()); });
            }, (e) => console.log(e));

            onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', 'businesses'), (snapshot) => {
                const container = document.getElementById('biz-list');
                if(snapshot.empty) { container.innerHTML = '<div class="text-gray-500 col-span-3">אין עסקים עדיין. הוסף את העסק שלך!</div>'; return; }
                container.innerHTML = '';
                snapshot.forEach(doc => { container.innerHTML += renderBiz(doc.data()); });
            }, (e) => console.log(e));
        }

        setTimeout(() => {
            if(document.getElementById('jobs-list').innerHTML.includes('טוען')) {
                document.getElementById('jobs-list').innerHTML = renderJob({title:'מנהל/ת פרויקטים הנדסה', company:'דניה סיבוס', contact:'hr@denya.co.il'}) + renderJob({title:'אנליסט נתונים', company:'סטארטאפ פינטק בת"א', contact:'054-1234567'});
                document.getElementById('biz-list').innerHTML = renderBiz({name:'דוד שיפוצים', category:'קבלן ביצוע', contact:'050-9876543'}) + renderBiz({name:'כהן ושות\'', category:'משרד עו"ד', contact:'cohen-law.co.il'});
            }
        }, 2000);
    </script>
</body>
</html>
