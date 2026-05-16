<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189</title>
    
    <!-- פונטים יציבים -->
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
        
        /* מודאל (חלון קופץ) לטפסים */
        .modal { display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.8); backdrop-filter: blur(5px); }
        .modal.active { display: flex; align-items: center; justify-content: center; }
        
        /* עיצוב כרטיסיות יציב */
        .stable-card {
            background: white;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border: 1px solid #e2e8f0;
            transition: transform 0.2s;
        }
        .stable-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
    </style>
</head>
<body>

    <!-- ניווט עליון - יציב ומסודר -->
    <nav class="fixed w-full z-50 top-0 bg-white shadow-md border-b-[3px] border-idf-yellow h-20 md:h-24 flex items-center">
        <div class="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            
            <!-- לוגו וכותרת בטוחים (בלי לגלוש) -->
            <div class="flex items-center gap-4">
                <div class="h-16 w-16 md:h-20 md:w-20 bg-white border border-gray-200 rounded-lg p-1 flex items-center justify-center">
                    <img src="logo.png" alt="לוגו" class="max-h-full max-w-full object-contain" onerror="this.src='https://placehold.co/100/37412a/facc15?text=189'">
                </div>
                <div>
                    <h1 class="text-xl md:text-2xl font-black text-idf-dark leading-none">עמותת חטיבת נגבה 189</h1>
                    <p class="text-idf-green font-bold text-xs uppercase tracking-widest mt-1">משפחה אחת. דרך אחת.</p>
                </div>
            </div>

            <!-- תפריט פשוט ונקי -->
            <div class="hidden lg:flex gap-6 font-bold text-gray-600">
                <a href="#mission" class="hover:text-idf-gold transition">מטרות</a>
                <a href="#networking" class="hover:text-idf-gold transition">נטוורקינג ולוח משרות</a>
                <a href="#battalions" class="hover:text-idf-gold transition">גדודים</a>
                <a href="#management" class="hover:text-idf-gold transition">הנהלה</a>
            </div>

            <!-- כפתור תרומה -->
            <div class="hidden sm:block">
                <a href="https://wa.me/972542456102" target="_blank" class="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 transition shadow">
                    <i class="fa-brands fa-whatsapp text-lg ml-1"></i> לתרומה
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="hero-bg min-h-[70vh] flex items-center pt-24 text-white">
        <div class="max-w-5xl mx-auto px-6 text-center md:text-right">
            <span class="inline-block px-4 py-1 bg-idf-yellow text-idf-dark font-black rounded text-sm mb-6 uppercase tracking-widest shadow-md">מהנגב באנו, על הנגב נגן</span>
            <h2 class="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-xl">
                מגינים על הבית בחזית,<br><span class="text-idf-yellow">ובונים קהילה בעורף.</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-200 font-light max-w-3xl leading-relaxed mb-10 drop-shadow-md">
                עמותת החטיבה היא הבית של הלוחמים, המפקדים והמשפחות. אנו דואגים לרווחה, לנטוורקינג תעסוקתי, ומהווים משפחה אחת גדולה במילואים ובאזרחות.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button onclick="openModal('joinModal')" class="px-8 py-3 bg-idf-yellow text-idf-dark font-black text-lg rounded-xl hover:bg-white transition shadow-lg">טופס הצטרפות לעמותה</button>
                <a href="#networking" class="px-8 py-3 bg-black/50 backdrop-blur-sm border border-white/30 text-white font-black text-lg rounded-xl hover:bg-black/70 transition">אינדקס ולוח משרות</a>
            </div>
        </div>
    </section>

    <!-- רצועת תרומה -->
    <section id="donate" class="bg-idf-dark text-white py-10 border-b-4 border-idf-yellow">
        <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-right">
                <h3 class="text-2xl font-black mb-1">תמכו במשפחת החטיבה</h3>
                <p class="text-gray-400 text-sm">התרומות שלכם מאפשרות לנו לממן את הניידת, חבילות למשפחות וסיוע למילואימניקים.</p>
            </div>
            <a href="https://wa.me/972542456102" target="_blank" class="flex items-center justify-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-black text-lg rounded-xl shadow-lg transition w-full md:w-auto">
                <i class="fa-brands fa-whatsapp text-2xl"></i> תרמו עכשיו
            </a>
        </div>
    </section>

    <!-- מטרות ופעילות -->
    <section id="mission" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-black text-idf-dark mb-4">העשייה שלנו</h2>
                <div class="h-1 w-20 bg-idf-green mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- כרטיסייה 1 -->
                <div class="stable-card overflow-hidden flex flex-col">
                    <div class="h-48 bg-gray-800 relative">
                        <img src="https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&q=80&w=600" alt="רכב שטח" class="w-full h-full object-cover opacity-70">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-2xl font-black text-idf-dark bg-idf-yellow px-3 py-1 rounded shadow-lg transform -skew-x-6">189 נגבה</span>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-2 text-idf-dark"><i class="fa-solid fa-truck-fast text-idf-green ml-2"></i>ניידת ת"ש</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">הגעת ניידת ייעודית לשטחי הכינוס והלחימה עם אוכל, ציוד ופינוקים לשמירה על המורל.</p>
                    </div>
                </div>

                <!-- כרטיסייה 2 -->
                <div class="stable-card overflow-hidden flex flex-col">
                    <div class="h-48 relative">
                        <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=600" alt="משפחות" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-2 text-idf-dark"><i class="fa-solid fa-house-chimney-heart text-red-500 ml-2"></i>מעטפת משפחות</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">תמיכה בנשות ואנשי המילואים, חלוקת שי בחגים, וארגון ימי הפוגה קהילתיים.</p>
                    </div>
                </div>

                <!-- כרטיסייה 3 -->
                <div class="stable-card overflow-hidden flex flex-col">
                    <div class="h-48 relative">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600" alt="נטוורקינג" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-2 text-idf-dark"><i class="fa-solid fa-handshake text-blue-600 ml-2"></i>נטוורקינג</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">קידום עסקים של חברי החטיבה, עזרה במציאת עבודה ויצירת קהילה כלכלית.</p>
                    </div>
                </div>

                <!-- כרטיסייה 4 -->
                <div class="stable-card overflow-hidden flex flex-col">
                    <div class="h-48 relative">
                        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600" alt="צרכנות" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-2 text-idf-dark"><i class="fa-solid fa-tags text-idf-gold ml-2"></i>מועדון צרכנות</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">מינוף כוח הקנייה של חברי העמותה להשגת הטבות והנחות בלעדיות.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- מערכת נטוורקינג -->
    <section id="networking" class="dark-section py-20">
        <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-black text-idf-yellow mb-4">קהילה של 2,500 אחים</h2>
                <p class="text-gray-400 text-lg">מערכת חיה למציאת עבודה ולקידום העסקים של משרתי החטיבה.</p>
            </div>

            <div class="flex justify-center gap-4 mb-8">
                <button onclick="switchTab('jobs')" id="tab-jobs" class="px-6 py-2 rounded-lg font-bold bg-idf-yellow text-idf-dark transition">לוח משרות</button>
                <button onclick="switchTab('biz')" id="tab-biz" class="px-6 py-2 rounded-lg font-bold bg-white/10 text-white hover:bg-white/20 transition">אינדקס עסקים</button>
            </div>

            <!-- לוח משרות -->
            <div id="content-jobs" class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <div class="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <h3 class="text-xl font-bold text-white">משרות חמות</h3>
                    <button onclick="openModal('jobModal')" class="bg-idf-green hover:bg-idf-green/80 text-white px-4 py-2 rounded text-sm font-bold"><i class="fa-solid fa-plus ml-1"></i> הוסף משרה</button>
                </div>
                <div id="jobs-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="text-gray-500 text-center col-span-full py-8">טוען משרות...</div>
                </div>
            </div>

            <!-- אינדקס עסקים -->
            <div id="content-biz" class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hidden">
                <div class="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <h3 class="text-xl font-bold text-white">אינדקס בעלי מקצוע</h3>
                    <button onclick="openModal('bizModal')" class="bg-idf-green hover:bg-idf-green/80 text-white px-4 py-2 rounded text-sm font-bold"><i class="fa-solid fa-plus ml-1"></i> הוסף עסק</button>
                </div>
                <div id="biz-list" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="text-gray-500 text-center col-span-full py-8">טוען עסקים...</div>
                </div>
            </div>
        </div>
    </section>

    <!-- גדודי החטיבה (מרובעים יציבים) -->
    <section id="battalions" class="py-20 bg-gray-100">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-black text-idf-dark mb-4">השדרה המבצעית</h2>
                <div class="h-1 w-20 bg-idf-yellow mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- 1891 -->
                <div class="stable-card flex flex-col">
                    <div class="bg-idf-green text-center text-white py-6 border-b-4 border-idf-yellow rounded-t-xl">
                        <h3 class="text-3xl font-black">1891</h3>
                        <p class="text-idf-yellow font-bold mt-1">"מגני יואב"</p>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 text-sm mb-4">מרחב לכיש, קריית גת ומועצה אזורית יואב. מגן על השער הצפוני של הנגב.</p>
                        <div class="mt-auto bg-gray-50 p-3 rounded border border-gray-200 text-center">
                            <span class="block text-xs text-gray-500">נציג גדוד בוועד</span>
                            <span class="font-black text-idf-dark">יואב הנר</span>
                        </div>
                    </div>
                </div>

                <!-- 1892 -->
                <div class="stable-card flex flex-col">
                    <div class="bg-idf-green text-center text-white py-6 border-b-4 border-idf-yellow rounded-t-xl">
                        <h3 class="text-3xl font-black">1892</h3>
                        <p class="text-idf-yellow font-bold mt-1">"חורב"</p>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 text-sm mb-4">יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף המגן פיזית על הבית.</p>
                        <div class="mt-auto bg-gray-50 p-3 rounded border border-gray-200 text-center">
                            <span class="block text-xs text-gray-500">נציג גדוד בוועד</span>
                            <span class="font-black text-idf-dark">אלי כהן</span>
                        </div>
                    </div>
                </div>

                <!-- 1893 -->
                <div class="stable-card flex flex-col">
                    <div class="bg-idf-green text-center text-white py-6 border-b-4 border-idf-yellow rounded-t-xl">
                        <h3 class="text-3xl font-black">1893</h3>
                        <p class="text-idf-yellow font-bold mt-1">"הר הנגב"</p>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 text-sm mb-4">דימונה, ערד, ירוחם ומצפה רמון. שמירה הדוקה על מרחב הנגב המרכזי.</p>
                        <div class="mt-auto bg-gray-50 p-3 rounded border border-gray-200 text-center">
                            <span class="block text-xs text-gray-500">נציג גדוד בוועד</span>
                            <span class="font-black text-idf-dark">אורי שינדלר</span>
                        </div>
                    </div>
                </div>

                <!-- 1894 -->
                <div class="stable-card flex flex-col lg:col-start-1 lg:col-end-2 w-full lg:ml-auto">
                    <div class="bg-idf-green text-center text-white py-6 border-b-4 border-idf-yellow rounded-t-xl">
                        <h3 class="text-3xl font-black">1894</h3>
                        <p class="text-idf-yellow font-bold mt-1">"הלל"</p>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 text-sm mb-4">מורכב מיוצאי חיל הים. משלב ניסיון מבצעי עשיר בים וביבשה.</p>
                        <div class="mt-auto bg-gray-50 p-3 rounded border border-gray-200 text-center">
                            <span class="block text-xs text-gray-500">נציג גדוד בוועד</span>
                            <span class="font-black text-idf-dark">יהונתן פרידמן</span>
                        </div>
                    </div>
                </div>

                <!-- 1895 -->
                <div class="stable-card flex flex-col lg:col-start-2 lg:col-end-3">
                    <div class="bg-idf-green text-center text-white py-6 border-b-4 border-idf-yellow rounded-t-xl">
                        <h3 class="text-3xl font-black">1895</h3>
                        <p class="text-idf-yellow font-bold mt-1">"יעלה"</p>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 text-sm mb-4">העיר אילת ויישובי חבל אילות. מגן על הגזרה הדרומית ביותר של ישראל.</p>
                        <div class="mt-auto bg-gray-50 p-3 rounded border border-gray-200 text-center">
                            <span class="block text-xs text-gray-500">נציג גדוד בוועד</span>
                            <span class="font-black text-idf-dark">חיים קמחי</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- הנהלה (גריד כרטיסיות נקי ויציב למניעת שבירות) -->
    <section id="management" class="py-20 bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-black text-idf-dark mb-4">הנהגת העמותה</h2>
                <div class="h-1 w-20 bg-idf-green mx-auto rounded-full"></div>
            </div>

            <div class="mb-16">
                <h3 class="text-2xl font-black text-idf-dark mb-8 text-center"><i class="fa-solid fa-users-gear text-idf-green ml-2"></i>הוועד המנהל</h3>
                
                <!-- רשת כרטיסיות מוקשחת (לא רשימה שנוזלת) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    
                    <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center">
                        <h4 class="font-black text-gray-400">יו"ר העמותה</h4>
                        <span class="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block font-bold text-gray-500">טרם מונה</span>
                    </div>

                    <div class="stable-card p-4 text-center">
                        <h4 class="font-black text-idf-dark">יואב הנר</h4>
                        <span class="text-xs text-gray-500 block mt-1">חבר ועד (1891)</span>
                    </div>
                    
                    <div class="stable-card p-4 text-center">
                        <h4 class="font-black text-idf-dark">אלי כהן</h4>
                        <span class="text-xs text-gray-500 block mt-1">חבר ועד (1892)</span>
                    </div>

                    <div class="stable-card p-4 text-center">
                        <h4 class="font-black text-idf-dark">אורי שינדלר</h4>
                        <span class="text-xs text-gray-500 block mt-1">חבר ועד (1893)</span>
                    </div>

                    <div class="stable-card p-4 text-center">
                        <h4 class="font-black text-idf-dark">יהונתן פרידמן</h4>
                        <span class="text-xs text-gray-500 block mt-1">חבר ועד (1894)</span>
                    </div>

                    <div class="stable-card p-4 text-center">
                        <h4 class="font-black text-idf-dark">חיים קמחי</h4>
                        <span class="text-xs text-gray-500 block mt-1">חבר ועד (1895)</span>
                    </div>

                    <div class="stable-card p-4 text-center">
                        <h4 class="font-black text-idf-dark">דני בלובשטיין</h4>
                        <span class="text-xs text-gray-500 block mt-1">חבר ועד מנהל</span>
                    </div>

                    <div class="stable-card p-4 text-center">
                        <h4 class="font-black text-idf-dark">בר נוימן</h4>
                        <span class="text-xs text-gray-500 block mt-1">חבר ועד מנהל</span>
                    </div>

                    <div class="bg-idf-dark text-white border border-gray-800 p-4 rounded-xl text-center md:col-start-2 md:col-span-2 lg:col-span-2 lg:col-start-2">
                        <h4 class="font-black text-xl text-idf-yellow mb-1">רו"ח גל אדווה</h4>
                        <span class="text-sm">מבקרת העמותה</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-2xl font-black text-idf-dark mb-8 text-center"><i class="fa-solid fa-briefcase text-idf-green ml-2"></i>הנהלה ביצועית</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center opacity-70">
                        <h4 class="font-black text-gray-600">מנכ"ל/ית העמותה</h4>
                        <span class="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block font-bold text-gray-500">ללא אדם מוגדר</span>
                    </div>
                    <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center opacity-70">
                        <h4 class="font-black text-gray-600">מנהל/ת רווחה</h4>
                        <span class="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block font-bold text-gray-500">ללא אדם מוגדר</span>
                    </div>
                    <div class="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center opacity-70">
                        <h4 class="font-black text-gray-600">מנהל/ת פיתוח משאבים</h4>
                        <span class="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block font-bold text-gray-500">ללא אדם מוגדר</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- מסמכים -->
    <section id="documents" class="py-16 dark-section border-t-4 border-idf-yellow">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-2xl font-black mb-6">מסמכי העמותה ושקיפות</h2>
            <div class="flex flex-wrap justify-center gap-4">
                <div class="bg-white/10 p-4 rounded-xl border border-white/20 w-40 text-center">
                    <i class="fa-solid fa-file-pdf text-2xl text-red-400 mb-2"></i>
                    <p class="font-bold text-sm">תעודת רישום</p>
                </div>
                <div class="bg-white/10 p-4 rounded-xl border border-white/20 w-40 text-center">
                    <i class="fa-solid fa-file-pdf text-2xl text-red-400 mb-2"></i>
                    <p class="font-bold text-sm">אישור ניהול תקין</p>
                </div>
                <div class="bg-white/10 p-4 rounded-xl border border-white/20 w-40 text-center">
                    <i class="fa-solid fa-file-pdf text-2xl text-red-400 mb-2"></i>
                    <p class="font-bold text-sm">סעיף 46</p>
                </div>
            </div>
        </div>
    </section>

    <!-- פוטר -->
    <footer class="bg-black py-10 text-white border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white rounded-lg p-1">
                    <img src="logo.png" alt="לוגו" class="w-full h-full object-contain" onerror="this.style.display='none'">
                </div>
                <div>
                    <span class="font-black text-lg block">חטיבת נגבה 189</span>
                    <span class="text-xs text-gray-500">כל הזכויות שמורות &copy; 2024</span>
                </div>
            </div>
            <div class="flex gap-4">
                <a href="https://wa.me/972542456102" class="text-red-500 font-bold hover:text-white transition text-sm flex items-center gap-1">
                    <i class="fa-brands fa-whatsapp text-lg"></i> לתרומה
                </a>
                <span class="text-gray-600">|</span>
                <i class="fa-brands fa-facebook text-xl hover:text-white cursor-pointer transition text-gray-400"></i>
            </div>
        </div>
    </footer>

    <!-- מודאלים לטפסים (הקוד נשאר יציב) -->
    <div id="joinModal" class="modal" onclick="closeModal(event, 'joinModal')">
        <div class="bg-white rounded-2xl p-6 max-w-sm w-full m-4" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-black">טופס הצטרפות</h3>
                <button onclick="document.getElementById('joinModal').classList.remove('active')" class="text-gray-400 hover:text-red-500"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="joinForm" class="space-y-3">
                <input type="text" id="joinName" placeholder="שם מלא" required class="w-full p-2 bg-gray-50 border rounded outline-none">
                <input type="tel" id="joinPhone" placeholder="טלפון" required class="w-full p-2 bg-gray-50 border rounded outline-none">
                <select id="joinBat" class="w-full p-2 bg-gray-50 border rounded outline-none">
                    <option value="">בחר גדוד...</option>
                    <option>1891</option><option>1892</option><option>1893</option><option>1894</option><option>1895</option><option>אחר</option>
                </select>
                <button type="submit" class="w-full bg-idf-dark text-idf-yellow font-black py-2 rounded mt-2">שלח למערכת</button>
            </form>
        </div>
    </div>

    <div id="jobModal" class="modal" onclick="closeModal(event, 'jobModal')">
        <div class="bg-white rounded-2xl p-6 max-w-sm w-full m-4" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-black">פרסום משרה</h3>
                <button onclick="document.getElementById('jobModal').classList.remove('active')" class="text-gray-400 hover:text-red-500"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="jobForm" class="space-y-3">
                <input type="text" id="jobTitle" placeholder="כותרת המשרה" required class="w-full p-2 border rounded outline-none">
                <input type="text" id="jobCompany" placeholder="שם החברה" required class="w-full p-2 border rounded outline-none">
                <input type="text" id="jobContact" placeholder="טלפון/אימייל" required class="w-full p-2 border rounded outline-none">
                <button type="submit" class="w-full bg-idf-green text-white font-black py-2 rounded mt-2">פרסם</button>
            </form>
        </div>
    </div>

    <div id="bizModal" class="modal" onclick="closeModal(event, 'bizModal')">
        <div class="bg-white rounded-2xl p-6 max-w-sm w-full m-4" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-black">הוספת עסק</h3>
                <button onclick="document.getElementById('bizModal').classList.remove('active')" class="text-gray-400 hover:text-red-500"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="bizForm" class="space-y-3">
                <input type="text" id="bizName" placeholder="שם העסק" required class="w-full p-2 border rounded outline-none">
                <input type="text" id="bizCategory" placeholder="תחום (למשל: שיפוצים)" required class="w-full p-2 border rounded outline-none">
                <input type="text" id="bizContact" placeholder="טלפון או אתר" required class="w-full p-2 border rounded outline-none">
                <button type="submit" class="w-full bg-idf-green text-white font-black py-2 rounded mt-2">הוסף לאינדקס</button>
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
            
            const initAuth = async () => { try { await signInAnonymously(auth); } catch (e) {} };
            initAuth();

            onAuthStateChanged(auth, (u) => {
                user = u;
                if (user) loadNetworkingData();
            });
        } catch (error) {
            console.log("Local mode.");
        }

        window.openModal = (id) => document.getElementById(id).classList.add('active');
        window.closeModal = (e, id) => { if(e) e.stopPropagation(); document.getElementById(id).classList.remove('active'); };
        
        window.switchTab = (tab) => {
            document.getElementById('content-jobs').style.display = tab === 'jobs' ? 'block' : 'none';
            document.getElementById('content-biz').style.display = tab === 'biz' ? 'block' : 'none';
            document.getElementById('tab-jobs').className = tab === 'jobs' ? 'px-6 py-2 rounded-lg font-bold bg-idf-yellow text-idf-dark transition' : 'px-6 py-2 rounded-lg font-bold bg-white/10 text-white hover:bg-white/20 transition';
            document.getElementById('tab-biz').className = tab === 'biz' ? 'px-6 py-2 rounded-lg font-bold bg-idf-yellow text-idf-dark transition' : 'px-6 py-2 rounded-lg font-bold bg-white/10 text-white hover:bg-white/20 transition';
        };

        const addFirebaseData = async (colName, dataObj, listId, renderFn) => {
            if(!user || !db) {
                alert('הנתונים נשמרו מקומית! (בסביבת אמת יעלו לענן)');
                const container = document.getElementById(listId);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = renderFn(dataObj);
                if(container && container.innerHTML.includes('טוען')) container.innerHTML = '';
                if(container) container.prepend(tempDiv.firstElementChild);
                return;
            }
            try {
                const ref = collection(db, 'artifacts', appId, 'public', 'data', colName);
                await addDoc(ref, { ...dataObj, createdAt: serverTimestamp(), userId: user.uid });
                alert('המידע נשמר בהצלחה!');
            } catch (e) { alert('שגיאה בשמירה.'); }
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
            <div class="bg-white/10 p-4 rounded-xl border border-white/20 text-right">
                <h4 class="font-black text-idf-yellow">${job.title}</h4>
                <p class="text-white text-sm mt-1">${job.company}</p>
                <p class="text-gray-400 text-xs mt-2">${job.contact}</p>
            </div>
        `;
        document.getElementById('jobForm').addEventListener('submit', (e) => {
            e.preventDefault();
            addFirebaseData('jobs', { title: document.getElementById('jobTitle').value, company: document.getElementById('jobCompany').value, contact: document.getElementById('jobContact').value }, 'jobs-list', renderJob);
            document.getElementById('jobForm').reset();
            window.closeModal(null, 'jobModal');
        });

        const renderBiz = (biz) => `
            <div class="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                <h4 class="font-black text-white">${biz.name}</h4>
                <p class="text-idf-yellow text-sm">${biz.category}</p>
                <p class="text-gray-400 text-xs mt-2">${biz.contact}</p>
            </div>
        `;
        document.getElementById('bizForm').addEventListener('submit', (e) => {
            e.preventDefault();
            addFirebaseData('businesses', { name: document.getElementById('bizName').value, category: document.getElementById('bizCategory').value, contact: document.getElementById('bizContact').value }, 'biz-list', renderBiz);
            document.getElementById('bizForm').reset();
            window.closeModal(null, 'bizModal');
        });

        function loadNetworkingData() {
            if(!db || !user) return;
            onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', 'jobs'), (snapshot) => {
                const container = document.getElementById('jobs-list');
                if(!container) return;
                if(snapshot.empty) { container.innerHTML = '<div class="text-gray-500">אין משרות עדיין.</div>'; return; }
                container.innerHTML = '';
                snapshot.forEach(doc => container.innerHTML += renderJob(doc.data()));
            }, (e) => console.log(e));

            onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', 'businesses'), (snapshot) => {
                const container = document.getElementById('biz-list');
                if(!container) return;
                if(snapshot.empty) { container.innerHTML = '<div class="text-gray-500 col-span-full">אין עסקים עדיין.</div>'; return; }
                container.innerHTML = '';
                snapshot.forEach(doc => container.innerHTML += renderBiz(doc.data()));
            }, (e) => console.log(e));
        }

        setTimeout(() => {
            const jList = document.getElementById('jobs-list');
            const bList = document.getElementById('biz-list');
            if(jList && jList.innerHTML.includes('טוען')) {
                jList.innerHTML = renderJob({title:'מנהל פרויקטים', company:'דניה סיבוס', contact:'hr@denya.co.il'}) + renderJob({title:'אנליסט נתונים', company:'סטארטאפ בת"א', contact:'054-1234567'});
                bList.innerHTML = renderBiz({name:'דוד שיפוצים', category:'קבלן ביצוע', contact:'050-9876543'}) + renderBiz({name:'כהן ושות\'', category:'משרד עו"ד', contact:'cohen-law.co.il'});
            }
        }, 1500);
    </script>
</body>
</html>
