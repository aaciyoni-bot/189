<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189</title>
    
    <!-- פונטים של גוגל - יציבים ויוקרתיים -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;800&family=Rubik:wght@400;500;700;900&display=swap" rel="stylesheet">
    
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
                        tactical: {
                            900: '#0a0a0a', /* רקע ראשי שחור */
                            800: '#141511', /* רקע משני */
                            700: '#1f211a', /* כרטיסיות */
                            600: '#2e3325', /* גבולות */
                            green: '#4d5c36', /* ירוק צה"ל לייט */
                            yellow: '#facc15', /* צהוב אזהרה/מבצעי */
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        body { background-color: #0a0a0a; color: #e2e8f0; overflow-x: hidden; scroll-behavior: smooth; }
        h1, h2, h3, h4, .font-heading { font-family: 'Rubik', sans-serif; }
        
        /* רקע גיבור - שימוש בגרדיאנט רדיאלי למראה הייטק */
        .hero-section {
            background: radial-gradient(circle at center, #1f211a 0%, #0a0a0a 100%);
            position: relative;
        }
        
        /* רשת גריד דינמית לרקע (Tech Vibe) */
        .tech-grid {
            background-image: 
                linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 40px 40px;
        }

        /* כרטיסיות סופר יציבות */
        .tech-card {
            background-color: #141511;
            border: 1px solid #2e3325;
            border-radius: 1rem;
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        .tech-card:hover {
            border-color: #facc15;
            transform: translateY(-4px);
            box-shadow: 0 10px 30px -10px rgba(250, 204, 21, 0.15);
        }
        
        /* זוהר עדין בכרטיסיות הגדודים */
        .glow-number {
            position: absolute;
            top: -1rem;
            left: -1rem;
            font-size: 8rem;
            font-weight: 900;
            color: rgba(255,255,255,0.02);
            pointer-events: none;
            font-family: 'Rubik', sans-serif;
            z-index: 0;
            transition: color 0.3s ease;
        }
        .tech-card:hover .glow-number {
            color: rgba(250, 204, 21, 0.05);
        }

        /* מודאלים יציבים */
        .modal { display: none; position: fixed; z-index: 9999; inset: 0; background-color: rgba(0,0,0,0.85); backdrop-filter: blur(8px); }
        .modal.active { display: flex; align-items: center; justify-content: center; }
        .modal-content { background-color: #141511; border: 1px solid #2e3325; border-radius: 1.5rem; max-width: 28rem; width: 90%; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
        
        /* שדות קלט בסגנון הייטק */
        .input-tech {
            width: 100%; background-color: #0a0a0a; border: 1px solid #2e3325; color: white; padding: 1rem; border-radius: 0.75rem; outline: none; transition: border-color 0.2s;
        }
        .input-tech:focus { border-color: #facc15; }
    </style>
</head>
<body class="antialiased selection:bg-tactical-yellow selection:text-black">

    <!-- ניווט עליון - קשיח וברור -->
    <nav class="fixed w-full z-50 top-0 bg-tactical-900/90 backdrop-blur-md border-b border-tactical-600 h-[88px] flex items-center">
        <div class="max-w-7xl mx-auto px-6 w-full flex justify-between items-center h-full">
            
            <!-- לוגו וכותרת (מוגן משבירות) -->
            <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-white rounded-lg p-1 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <img src="logo.png" alt="לוגו עמותה" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/100/141511/facc15?text=189'">
                </div>
                <div class="hidden md:flex flex-col justify-center">
                    <h1 class="text-xl font-black text-white leading-none tracking-tight">עמותת חטיבת נגבה 189</h1>
                    <p class="text-tactical-yellow font-bold text-[10px] uppercase tracking-widest mt-1">משפחה אחת. דרך אחת.</p>
                </div>
            </div>

            <!-- תפריט - כפתורי Pill למראה אפליקטיבי -->
            <div class="hidden lg:flex gap-2">
                <a href="#mission" class="px-5 py-2 rounded-full text-sm font-bold text-gray-300 hover:text-tactical-yellow hover:bg-tactical-800 transition">העשייה שלנו</a>
                <a href="#networking" class="px-5 py-2 rounded-full text-sm font-bold text-gray-300 hover:text-tactical-yellow hover:bg-tactical-800 transition">נטוורקינג ומשרות</a>
                <a href="#battalions" class="px-5 py-2 rounded-full text-sm font-bold text-gray-300 hover:text-tactical-yellow hover:bg-tactical-800 transition">שדרה מבצעית</a>
                <a href="#management" class="px-5 py-2 rounded-full text-sm font-bold text-gray-300 hover:text-tactical-yellow hover:bg-tactical-800 transition">הנהלה וצוות</a>
            </div>

            <!-- כפתור תרומה -->
            <div class="shrink-0 flex items-center gap-4">
                <a href="https://wa.me/972542456102" target="_blank" class="bg-tactical-yellow text-black px-6 py-2.5 rounded-full font-black text-sm hover:bg-white transition flex items-center gap-2 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                    <i class="fa-brands fa-whatsapp text-lg"></i> <span class="hidden sm:inline">לתרומה</span>
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section tech-grid min-h-[90vh] flex items-center pt-[88px] pb-20 border-b border-tactical-600">
        <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
            <div class="text-center lg:text-right order-2 lg:order-1 relative z-10">
                <div class="inline-block px-4 py-1.5 border border-tactical-yellow/30 bg-tactical-yellow/10 text-tactical-yellow font-bold rounded-full text-xs mb-8 tracking-widest">
                    <i class="fa-solid fa-shield-halved mr-2"></i> מהנגב באנו, על הנגב נגן
                </div>
                <h2 class="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white">
                    מגינים על הבית בחזית,<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow to-yellow-200">ובונים קהילה בעורף.</span>
                </h2>
                <p class="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed mb-10 mx-auto lg:mx-0">
                    הבית של הלוחמים, המפקדים והמשפחות. דואגים לרווחה, מספקים גב כלכלי, ויוצרים קהילה תעסוקתית חזקה במילואים ובאזרחות.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button onclick="openModal('joinModal')" class="px-8 py-4 bg-white text-black font-black text-lg rounded-xl hover:bg-tactical-yellow transition text-center flex justify-center items-center gap-2">
                        הצטרפות לעמותה <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <a href="#networking" class="px-8 py-4 bg-tactical-800 border border-tactical-600 text-white font-black text-lg rounded-xl hover:border-white transition text-center">
                        לאינדקס ולוח המשרות
                    </a>
                </div>
            </div>
            <!-- אזור גרפי נקי במקום תמונה שעלולה להישבר -->
            <div class="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                <div class="w-64 h-64 md:w-96 md:h-96 bg-tactical-800 rounded-full border border-tactical-600 flex items-center justify-center relative shadow-[0_0_50px_rgba(250,204,21,0.05)]">
                    <div class="absolute inset-4 border border-dashed border-tactical-600 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    <img src="logo.png" alt="לוגו מוגדל" class="w-1/2 h-1/2 object-contain relative z-10 filter drop-shadow-2xl" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\'fa-solid fa-shield-cat text-7xl text-tactical-yellow\'></i>'">
                </div>
            </div>
        </div>
    </section>

    <!-- מטרות ופעילות - מינימליזם טקטי -->
    <section id="mission" class="py-24 bg-tactical-900 border-b border-tactical-600">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-16 md:flex justify-between items-end">
                <div>
                    <h2 class="text-3xl md:text-5xl font-black text-white mb-2">העשייה שלנו</h2>
                    <p class="text-gray-500 font-light">4 עמודי התווך של משפחת נגבה 189</p>
                </div>
                <div class="hidden md:block w-32 h-1 bg-tactical-yellow rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- כרטיסייה נטולת תמונות - רק אייקון ותוכן ברור -->
                <div class="tech-card group">
                    <div class="w-14 h-14 bg-tactical-yellow/10 text-tactical-yellow rounded-xl flex items-center justify-center text-2xl mb-6 border border-tactical-yellow/20 group-hover:scale-110 transition">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <h3 class="text-xl font-black mb-3 text-white">ניידת ת"ש ללוחמים</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">ניידת ייעודית המגיעה לשטחי הכינוס והלחימה עם ציוד לוגיסטי ופינוקים לשמירה על מורל גבוה של הכוחות.</p>
                </div>

                <div class="tech-card group">
                    <div class="w-14 h-14 bg-tactical-green/20 text-green-400 rounded-xl flex items-center justify-center text-2xl mb-6 border border-green-500/20 group-hover:scale-110 transition">
                        <i class="fa-solid fa-house-chimney-heart"></i>
                    </div>
                    <h3 class="text-xl font-black mb-3 text-white">מעטפת משפחות</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">תמיכה בנשות ואנשי המילואים, חלוקת שי בחגים, וארגון ימי הפוגה קהילתיים למשפחות החטיבה.</p>
                </div>

                <div class="tech-card group">
                    <div class="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center text-2xl mb-6 border border-blue-500/20 group-hover:scale-110 transition">
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <h3 class="text-xl font-black mb-3 text-white">תעסוקה ונטוורקינג</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">קידום עסקים של חברי החטיבה, עזרה במציאת עבודה ויצירת קהילה כלכלית תומכת במרחב האזרחי.</p>
                </div>

                <div class="tech-card group">
                    <div class="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center text-2xl mb-6 border border-purple-500/20 group-hover:scale-110 transition">
                        <i class="fa-solid fa-tags"></i>
                    </div>
                    <h3 class="text-xl font-black mb-3 text-white">מועדון צרכנות</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">מינוף כוח הקנייה של 2,500 חברי העמותה להשגת הטבות והנחות בלעדיות ברשתות שיווק ושירותים.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- מערכת נטוורקינג - Web App Vibe -->
    <section id="networking" class="py-24 bg-tactical-800 tech-grid border-b border-tactical-600">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <span class="text-tactical-yellow font-bold text-sm tracking-widest uppercase mb-2 block">מרכז תעסוקה וסחר</span>
                <h2 class="text-4xl md:text-5xl font-black text-white mb-4">קהילה של 2,500 אחים</h2>
                <p class="text-gray-400 max-w-2xl mx-auto">מערכת חיה (Live) למציאת עבודה, גיוס עובדים וקידום העסקים של משרתי החטיבה.</p>
            </div>

            <!-- Tab Navigation -->
            <div class="flex justify-center gap-2 mb-10 p-1 bg-tactical-900 rounded-xl w-max mx-auto border border-tactical-600">
                <button onclick="switchTab('jobs')" id="tab-jobs" class="px-8 py-2.5 rounded-lg font-bold bg-tactical-700 text-white transition shadow text-sm">לוח משרות</button>
                <button onclick="switchTab('biz')" id="tab-biz" class="px-8 py-2.5 rounded-lg font-bold text-gray-400 hover:text-white transition text-sm">אינדקס עסקים</button>
            </div>

            <!-- לוח משרות -->
            <div id="content-jobs" class="tech-card border-tactical-600">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-tactical-600 pb-6">
                    <h3 class="text-2xl font-bold text-white flex items-center gap-3"><i class="fa-solid fa-briefcase text-tactical-yellow"></i> משרות חמות</h3>
                    <button onclick="openModal('jobModal')" class="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2">
                        <i class="fa-solid fa-plus"></i> פרסם משרה
                    </button>
                </div>
                <div id="jobs-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="text-gray-500 text-center col-span-full py-12 text-sm border border-dashed border-tactical-600 rounded-xl">טוען נתונים מאובטחים...</div>
                </div>
            </div>

            <!-- אינדקס עסקים -->
            <div id="content-biz" class="tech-card border-tactical-600 hidden">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-tactical-600 pb-6">
                    <h3 class="text-2xl font-bold text-white flex items-center gap-3"><i class="fa-solid fa-store text-tactical-yellow"></i> בעלי מקצוע מהחטיבה</h3>
                    <button onclick="openModal('bizModal')" class="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-lg text-sm font-bold transition flex items-center gap-2">
                        <i class="fa-solid fa-plus"></i> הוסף עסק
                    </button>
                </div>
                <div id="biz-list" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="text-gray-500 text-center col-span-full py-12 text-sm border border-dashed border-tactical-600 rounded-xl">טוען נתונים מאובטחים...</div>
                </div>
            </div>
        </div>
    </section>

    <!-- גדודי החטיבה - Dashboard Style -->
    <section id="battalions" class="py-24 bg-tactical-900 border-b border-tactical-600">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-16">
                <h2 class="text-3xl md:text-5xl font-black text-white mb-2">השדרה המבצעית</h2>
                <p class="text-gray-500 font-light">פריסת הכוחות והגזרות של גדודי החטיבה</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- 1891 -->
                <div class="tech-card">
                    <span class="glow-number">1</span>
                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="text-3xl font-black text-white mb-1">1891</h3>
                                <p class="text-tactical-yellow font-bold text-xs uppercase tracking-widest">"מגני יואב"</p>
                            </div>
                            <div class="w-10 h-10 rounded-full border border-tactical-600 flex items-center justify-center text-gray-500"><i class="fa-solid fa-shield"></i></div>
                        </div>
                        <p class="text-gray-400 text-sm mb-6 h-10">מרחב לכיש, קריית גת ומועצה אזורית יואב. מגן על השער הצפוני.</p>
                        <div class="bg-tactical-800 p-3 rounded-lg border border-tactical-600 flex justify-between items-center">
                            <span class="text-xs text-gray-500">נציג העמותה</span>
                            <span class="font-bold text-white text-sm">יואב הנר</span>
                        </div>
                    </div>
                </div>

                <!-- 1892 -->
                <div class="tech-card">
                    <span class="glow-number">2</span>
                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="text-3xl font-black text-white mb-1">1892</h3>
                                <p class="text-tactical-yellow font-bold text-xs uppercase tracking-widest">"חורב"</p>
                            </div>
                            <div class="w-10 h-10 rounded-full border border-tactical-600 flex items-center justify-center text-gray-500"><i class="fa-solid fa-bolt"></i></div>
                        </div>
                        <p class="text-gray-400 text-sm mb-6 h-10">יישובי עוטף עזה. מורכב מלוחמי העוטף, מגן פיזית על הבית.</p>
                        <div class="bg-tactical-800 p-3 rounded-lg border border-tactical-600 flex justify-between items-center">
                            <span class="text-xs text-gray-500">נציג העמותה</span>
                            <span class="font-bold text-white text-sm">אלי כהן</span>
                        </div>
                    </div>
                </div>

                <!-- 1893 -->
                <div class="tech-card">
                    <span class="glow-number">3</span>
                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="text-3xl font-black text-white mb-1">1893</h3>
                                <p class="text-tactical-yellow font-bold text-xs uppercase tracking-widest">"הר הנגב"</p>
                            </div>
                            <div class="w-10 h-10 rounded-full border border-tactical-600 flex items-center justify-center text-gray-500"><i class="fa-solid fa-mountain"></i></div>
                        </div>
                        <p class="text-gray-400 text-sm mb-6 h-10">דימונה, ערד, ירוחם ומצפה רמון. שמירה הדוקה על המרחב המרכזי.</p>
                        <div class="bg-tactical-800 p-3 rounded-lg border border-tactical-600 flex justify-between items-center">
                            <span class="text-xs text-gray-500">נציג העמותה</span>
                            <span class="font-bold text-white text-sm">אורי שינדלר</span>
                        </div>
                    </div>
                </div>

                <!-- 1894 -->
                <div class="tech-card">
                    <span class="glow-number">4</span>
                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="text-3xl font-black text-white mb-1">1894</h3>
                                <p class="text-tactical-yellow font-bold text-xs uppercase tracking-widest">"הלל"</p>
                            </div>
                            <div class="w-10 h-10 rounded-full border border-tactical-600 flex items-center justify-center text-gray-500"><i class="fa-solid fa-anchor"></i></div>
                        </div>
                        <p class="text-gray-400 text-sm mb-6 h-10">מורכב מיוצאי חיל הים. משלב ניסיון מבצעי עשיר בים וביבשה.</p>
                        <div class="bg-tactical-800 p-3 rounded-lg border border-tactical-600 flex justify-between items-center">
                            <span class="text-xs text-gray-500">נציג העמותה</span>
                            <span class="font-bold text-white text-sm">יהונתן פרידמן</span>
                        </div>
                    </div>
                </div>

                <!-- 1895 -->
                <div class="tech-card">
                    <span class="glow-number">5</span>
                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="text-3xl font-black text-white mb-1">1895</h3>
                                <p class="text-tactical-yellow font-bold text-xs uppercase tracking-widest">"יעלה"</p>
                            </div>
                            <div class="w-10 h-10 rounded-full border border-tactical-600 flex items-center justify-center text-gray-500"><i class="fa-solid fa-map-pin"></i></div>
                        </div>
                        <p class="text-gray-400 text-sm mb-6 h-10">אילת ויישובי חבל אילות. מגן על הגזרה הדרומית ביותר של ישראל.</p>
                        <div class="bg-tactical-800 p-3 rounded-lg border border-tactical-600 flex justify-between items-center">
                            <span class="text-xs text-gray-500">נציג העמותה</span>
                            <span class="font-bold text-white text-sm">חיים קמחי</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- הנהלה וצוות - רשימות הייטק -->
    <section id="management" class="py-24 bg-tactical-800 tech-grid border-b border-tactical-600">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-16">
                <h2 class="text-3xl md:text-5xl font-black text-white mb-2">הנהגת העמותה</h2>
                <p class="text-gray-500 font-light">הצוות שמוביל את העשייה והחזון</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                <!-- הוועד המנהל -->
                <div class="lg:col-span-8 bg-tactical-900 border border-tactical-600 rounded-2xl p-8">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3"><i class="fa-solid fa-users text-tactical-yellow"></i> הוועד המנהל</h3>
                    
                    <div class="flex flex-wrap gap-3">
                        <!-- תגיות צוות יציבות שלא נשברות -->
                        <div class="flex items-center gap-3 bg-tactical-800 border border-tactical-600 rounded-lg p-3 pr-4 w-full sm:w-[calc(50%-0.5rem)]">
                            <div class="w-2 h-2 rounded-full bg-red-500"></div>
                            <div class="flex-grow">
                                <p class="text-white font-bold text-sm">יו"ר העמותה</p>
                                <p class="text-gray-500 text-xs">טרם מונה</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 bg-tactical-800 border border-tactical-600 rounded-lg p-3 pr-4 w-full sm:w-[calc(50%-0.5rem)]">
                            <div class="w-2 h-2 rounded-full bg-tactical-green"></div>
                            <div class="flex-grow">
                                <p class="text-white font-bold text-sm">יואב הנר</p>
                                <p class="text-gray-500 text-xs">חבר ועד (1891)</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 bg-tactical-800 border border-tactical-600 rounded-lg p-3 pr-4 w-full sm:w-[calc(50%-0.5rem)]">
                            <div class="w-2 h-2 rounded-full bg-tactical-green"></div>
                            <div class="flex-grow">
                                <p class="text-white font-bold text-sm">אלי כהן</p>
                                <p class="text-gray-500 text-xs">חבר ועד (1892)</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 bg-tactical-800 border border-tactical-600 rounded-lg p-3 pr-4 w-full sm:w-[calc(50%-0.5rem)]">
                            <div class="w-2 h-2 rounded-full bg-tactical-green"></div>
                            <div class="flex-grow">
                                <p class="text-white font-bold text-sm">אורי שינדלר</p>
                                <p class="text-gray-500 text-xs">חבר ועד (1893)</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 bg-tactical-800 border border-tactical-600 rounded-lg p-3 pr-4 w-full sm:w-[calc(50%-0.5rem)]">
                            <div class="w-2 h-2 rounded-full bg-tactical-green"></div>
                            <div class="flex-grow">
                                <p class="text-white font-bold text-sm">יהונתן פרידמן</p>
                                <p class="text-gray-500 text-xs">חבר ועד (1894)</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 bg-tactical-800 border border-tactical-600 rounded-lg p-3 pr-4 w-full sm:w-[calc(50%-0.5rem)]">
                            <div class="w-2 h-2 rounded-full bg-tactical-green"></div>
                            <div class="flex-grow">
                                <p class="text-white font-bold text-sm">חיים קמחי</p>
                                <p class="text-gray-500 text-xs">חבר ועד (1895)</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 bg-tactical-800 border border-tactical-600 rounded-lg p-3 pr-4 w-full sm:w-[calc(50%-0.5rem)]">
                            <div class="w-2 h-2 rounded-full bg-gray-500"></div>
                            <div class="flex-grow">
                                <p class="text-white font-bold text-sm">דני בלובשטיין</p>
                                <p class="text-gray-500 text-xs">חבר ועד מנהל</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 bg-tactical-800 border border-tactical-600 rounded-lg p-3 pr-4 w-full sm:w-[calc(50%-0.5rem)]">
                            <div class="w-2 h-2 rounded-full bg-gray-500"></div>
                            <div class="flex-grow">
                                <p class="text-white font-bold text-sm">בר נוימן</p>
                                <p class="text-gray-500 text-xs">חבר ועד מנהל</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 bg-white text-black rounded-lg p-3 pr-4 w-full mt-2">
                            <i class="fa-solid fa-user-shield text-tactical-yellow"></i>
                            <div class="flex-grow">
                                <p class="font-black text-sm">רו"ח גל אדווה</p>
                                <p class="text-gray-600 text-xs font-bold">מבקרת העמותה</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- הנהלה ביצועית -->
                <div class="lg:col-span-4 bg-tactical-900 border border-tactical-600 rounded-2xl p-8">
                    <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3"><i class="fa-solid fa-briefcase text-tactical-yellow"></i> הנהלה ביצועית</h3>
                    <div class="space-y-3">
                        <div class="bg-tactical-800 border border-tactical-600 rounded-lg p-3 flex justify-between items-center opacity-60">
                            <span class="text-sm font-bold text-white">מנכ"ל/ית</span>
                            <span class="text-[10px] bg-tactical-600 px-2 py-1 rounded">ללא אדם</span>
                        </div>
                        <div class="bg-tactical-800 border border-tactical-600 rounded-lg p-3 flex justify-between items-center opacity-60">
                            <span class="text-sm font-bold text-white">מנהל/ת רווחה</span>
                            <span class="text-[10px] bg-tactical-600 px-2 py-1 rounded">ללא אדם</span>
                        </div>
                        <div class="bg-tactical-800 border border-tactical-600 rounded-lg p-3 flex justify-between items-center opacity-60">
                            <span class="text-sm font-bold text-white">מנהל/ת משאבים</span>
                            <span class="text-[10px] bg-tactical-600 px-2 py-1 rounded">ללא אדם</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- מסמכים (מינימלי ונקי) -->
    <section id="documents" class="py-16 bg-tactical-900">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <h2 class="text-2xl font-bold text-white mb-1">מסמכי העמותה ושקיפות</h2>
                <p class="text-gray-500 text-sm">הורדת מסמכים רשמיים ואישורים (יעודכן בקרוב).</p>
            </div>
            <div class="flex gap-3">
                <div class="bg-tactical-800 border border-tactical-600 px-4 py-2 rounded-lg text-sm text-gray-300 flex items-center gap-2 cursor-not-allowed opacity-50"><i class="fa-solid fa-file-pdf"></i> תעודת רישום</div>
                <div class="bg-tactical-800 border border-tactical-600 px-4 py-2 rounded-lg text-sm text-gray-300 flex items-center gap-2 cursor-not-allowed opacity-50"><i class="fa-solid fa-file-pdf"></i> ניהול תקין</div>
                <div class="bg-tactical-800 border border-tactical-600 px-4 py-2 rounded-lg text-sm text-gray-300 flex items-center gap-2 cursor-not-allowed opacity-50"><i class="fa-solid fa-file-pdf"></i> סעיף 46</div>
            </div>
        </div>
    </section>

    <!-- פוטר -->
    <footer class="bg-black py-10 border-t-2 border-tactical-yellow">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white rounded flex items-center justify-center p-1">
                    <img src="logo.png" alt="לוגו" class="w-full h-full object-contain" onerror="this.style.display='none'">
                </div>
                <div>
                    <span class="font-black text-lg text-white block leading-none">חטיבת נגבה 189</span>
                    <span class="text-xs text-gray-600">כל הזכויות שמורות &copy; 2024</span>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <a href="https://wa.me/972542456102" class="text-tactical-yellow font-bold hover:text-white transition text-sm flex items-center gap-2 bg-tactical-800 px-4 py-2 rounded-full border border-tactical-600">
                    <i class="fa-brands fa-whatsapp text-lg"></i> לתרומה
                </a>
            </div>
        </div>
    </footer>

    <!-- מודאלים לטפסים (הייטק סטייל) -->
    
    <!-- מודאל הצטרפות -->
    <div id="joinModal" class="modal" onclick="closeModal(event, 'joinModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-6 border-b border-tactical-600 pb-4">
                <h3 class="text-xl font-bold text-white">טופס הצטרפות לחטיבה</h3>
                <button onclick="closeModal(null, 'joinModal')" class="text-gray-500 hover:text-white"><i class="fa-solid fa-xmark text-xl"></i></button>
            </div>
            <form id="joinForm" class="space-y-4" onsubmit="handleFormSubmit(event, 'joinModal', 'הבקשה להצטרפות נשלחה בהצלחה!')">
                <input type="text" placeholder="שם מלא" required class="input-tech">
                <input type="tel" placeholder="טלפון נייד" required class="input-tech">
                <select required class="input-tech cursor-pointer appearance-none">
                    <option value="" disabled selected>בחר גדוד / יחידה...</option>
                    <option class="bg-tactical-900">1891</option><option class="bg-tactical-900">1892</option><option class="bg-tactical-900">1893</option><option class="bg-tactical-900">1894</option><option class="bg-tactical-900">1895</option><option class="bg-tactical-900">מפקדה</option>
                </select>
                <button type="submit" class="w-full bg-white text-black font-black text-lg py-3 rounded-xl mt-2 hover:bg-tactical-yellow transition">שלח פרטים מאובטחים</button>
            </form>
        </div>
    </div>

    <!-- מודאל משרה -->
    <div id="jobModal" class="modal" onclick="closeModal(event, 'jobModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-6 border-b border-tactical-600 pb-4">
                <h3 class="text-xl font-bold text-white">פרסום משרה בלוח</h3>
                <button onclick="closeModal(null, 'jobModal')" class="text-gray-500 hover:text-white"><i class="fa-solid fa-xmark text-xl"></i></button>
            </div>
            <form id="jobForm" class="space-y-4" onsubmit="handleJobSubmit(event)">
                <input type="text" id="jobTitle" placeholder="כותרת (למשל: מהנדס/ת תוכנה)" required class="input-tech">
                <input type="text" id="jobCompany" placeholder="שם החברה המגייסת" required class="input-tech">
                <input type="text" id="jobContact" placeholder="מייל או טלפון לקורות חיים" required class="input-tech">
                <button type="submit" class="w-full bg-tactical-green text-white font-black py-3 rounded-xl hover:bg-green-600 transition">פרסם משרה</button>
            </form>
        </div>
    </div>

    <!-- מודאל עסק -->
    <div id="bizModal" class="modal" onclick="closeModal(event, 'bizModal')">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-6 border-b border-tactical-600 pb-4">
                <h3 class="text-xl font-bold text-white">הוספת עסק לאינדקס</h3>
                <button onclick="closeModal(null, 'bizModal')" class="text-gray-500 hover:text-white"><i class="fa-solid fa-xmark text-xl"></i></button>
            </div>
            <form id="bizForm" class="space-y-4" onsubmit="handleBizSubmit(event)">
                <input type="text" id="bizName" placeholder="שם העסק המלא" required class="input-tech">
                <input type="text" id="bizCategory" placeholder="תחום עיסוק (למשל: עריכת דין)" required class="input-tech">
                <input type="text" id="bizContact" placeholder="טלפון / אתר אינטרנט" required class="input-tech">
                <button type="submit" class="w-full bg-tactical-green text-white font-black py-3 rounded-xl hover:bg-green-600 transition">הוסף לאינדקס העסקים</button>
            </form>
        </div>
    </div>

    <!-- סקריפטים ולוגיקה (נקי וללא תלות בשרתים חיצוניים שעלולים לקרוס) -->
    <script>
        function openModal(id) { document.getElementById(id).classList.add('active'); }
        function closeModal(e, id) { if(e) e.stopPropagation(); document.getElementById(id).classList.remove('active'); }

        function handleFormSubmit(e, modalId, msg) {
            e.preventDefault(); alert(msg); e.target.reset(); closeModal(null, modalId);
        }

        function switchTab(tab) {
            const jC = document.getElementById('content-jobs'), bC = document.getElementById('content-biz');
            const jB = document.getElementById('tab-jobs'), bB = document.getElementById('tab-biz');
            if (tab === 'jobs') {
                jC.style.display = 'block'; bC.style.display = 'none';
                jB.className = 'px-8 py-2.5 rounded-lg font-bold bg-tactical-700 text-white transition shadow text-sm';
                bB.className = 'px-8 py-2.5 rounded-lg font-bold text-gray-400 hover:text-white transition text-sm';
            } else {
                bC.style.display = 'block'; jC.style.display = 'none';
                bB.className = 'px-8 py-2.5 rounded-lg font-bold bg-tactical-700 text-white transition shadow text-sm';
                jB.className = 'px-8 py-2.5 rounded-lg font-bold text-gray-400 hover:text-white transition text-sm';
            }
        }

        function handleJobSubmit(e) {
            e.preventDefault();
            const title = document.getElementById('jobTitle').value, comp = document.getElementById('jobCompany').value, cont = document.getElementById('jobContact').value;
            const list = document.getElementById('jobs-list');
            if(list.innerHTML.includes('טוען')) list.innerHTML = '';
            
            const html = `
                <div class="bg-tactical-800 p-5 rounded-xl border border-tactical-600">
                    <h4 class="font-bold text-white text-lg">${title}</h4>
                    <p class="text-gray-400 text-sm mt-1">${comp}</p>
                    <div class="mt-4 inline-block bg-tactical-900 px-3 py-1 rounded border border-tactical-600 text-xs text-tactical-yellow font-mono">${cont}</div>
                </div>`;
            list.insertAdjacentHTML('afterbegin', html);
            e.target.reset(); closeModal(null, 'jobModal'); alert('המשרה נוספה ללוח!');
        }

        function handleBizSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('bizName').value, cat = document.getElementById('bizCategory').value, cont = document.getElementById('bizContact').value;
            const list = document.getElementById('biz-list');
            if(list.innerHTML.includes('טוען')) list.innerHTML = '';
            
            const html = `
                <div class="bg-tactical-800 p-5 rounded-xl border border-tactical-600 text-center">
                    <div class="w-10 h-10 mx-auto bg-tactical-600 rounded-full flex items-center justify-center text-white mb-3"><i class="fa-solid fa-briefcase"></i></div>
                    <h4 class="font-bold text-white text-base">${name}</h4>
                    <p class="text-gray-500 text-xs mt-1 mb-3">${cat}</p>
                    <span class="bg-tactical-900 px-3 py-1 rounded-full text-xs text-tactical-yellow border border-tactical-600">${cont}</span>
                </div>`;
            list.insertAdjacentHTML('afterbegin', html);
            e.target.reset(); closeModal(null, 'bizModal'); alert('העסק נוסף לאינדקס!');
        }

        // נתוני דמו לאתחול מידי - בלי תלות ברשת חיצונית
        window.addEventListener('DOMContentLoaded', () => {
            document.getElementById('jobs-list').innerHTML = `
                <div class="bg-tactical-800 p-5 rounded-xl border border-tactical-600">
                    <h4 class="font-bold text-white text-lg">מנהל/ת פרויקטים הנדסה</h4>
                    <p class="text-gray-400 text-sm mt-1">דניה סיבוס</p>
                    <div class="mt-4 inline-block bg-tactical-900 px-3 py-1 rounded border border-tactical-600 text-xs text-tactical-yellow font-mono">hr@denya.co.il</div>
                </div>`;
            
            document.getElementById('biz-list').innerHTML = `
                <div class="bg-tactical-800 p-5 rounded-xl border border-tactical-600 text-center">
                    <div class="w-10 h-10 mx-auto bg-tactical-600 rounded-full flex items-center justify-center text-white mb-3"><i class="fa-solid fa-briefcase"></i></div>
                    <h4 class="font-bold text-white text-base">דוד שיפוצים</h4>
                    <p class="text-gray-500 text-xs mt-1 mb-3">קבלן ביצוע</p>
                    <span class="bg-tactical-900 px-3 py-1 rounded-full text-xs text-tactical-yellow border border-tactical-600">050-9876543</span>
                </div>`;
        });
    </script>
</body>
</html>
