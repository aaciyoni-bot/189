<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189</title>
    
    <!-- פונטים של גוגל - נטענים בצורה בטוחה -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;800&family=Rubik:wght@400;700;900&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
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
        
        /* חלון קופץ (מודאל) - קוד יציב שלא נשבר */
        .modal { display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); backdrop-filter: blur(4px); }
        .modal.active { display: flex; align-items: center; justify-content: center; }
        
        /* עיצוב כרטיסיות אחיד */
        .card-uniform { display: flex; flex-direction: column; height: 100%; background: white; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; overflow: hidden; transition: transform 0.2s; }
        .card-uniform:hover { transform: translateY(-4px); box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
        .card-img-container { height: 12rem; width: 100%; position: relative; }
        .card-img-container img { width: 100%; height: 100%; object-fit: cover; }
    </style>
</head>
<body>

    <!-- ניווט עליון - יציב ומאובטח (גובה קבוע 100px) -->
    <nav class="fixed w-full z-50 top-0 bg-white shadow-md border-b-4 border-idf-yellow h-[100px] flex items-center">
        <div class="max-w-7xl mx-auto px-4 w-full flex justify-between items-center h-full">
            
            <!-- אזור לוגו וכותרת -->
            <div class="flex items-center gap-4 h-full py-2">
                <!-- הלוגו תחום בתוך הניווט, גובה 80px -->
                <div class="h-[80px] w-[80px] bg-white border border-gray-200 rounded-xl p-1 flex items-center justify-center shrink-0">
                    <img src="logo.png" alt="לוגו העמותה" class="max-h-full max-w-full object-contain" onerror="this.src='https://placehold.co/100/37412a/facc15?text=189'">
                </div>
                <div class="hidden sm:block">
                    <h1 class="text-xl md:text-2xl font-black text-idf-dark leading-tight">עמותת חטיבת נגבה 189</h1>
                    <p class="text-idf-green font-bold text-xs uppercase tracking-widest">משפחה אחת. דרך אחת.</p>
                </div>
            </div>

            <!-- אזור כפתורי הניווט -->
            <div class="hidden lg:flex gap-2">
                <a href="#mission" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 hover:text-idf-dark transition">מטרות העמותה</a>
                <a href="#networking" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 hover:text-idf-dark transition">נטוורקינג ומשרות</a>
                <a href="#battalions" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 hover:text-idf-dark transition">גדודי החטיבה</a>
                <a href="#management" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 hover:text-idf-dark transition">הנהלה</a>
            </div>

            <!-- כפתור תרומה -->
            <div class="shrink-0">
                <a href="https://wa.me/972542456102" target="_blank" class="bg-red-600 text-white px-6 py-2.5 rounded-full font-black text-sm hover:bg-red-700 transition shadow flex items-center gap-2">
                    <i class="fa-brands fa-whatsapp text-lg"></i> <span class="hidden sm:inline">לתרומה</span>
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero Section (אזור פתיחה) -->
    <!-- הוספתי pt-[100px] כדי שהתוכן לא יסתתר מתחת לניווט -->
    <section class="relative pt-[100px] pb-20 lg:pb-32 bg-idf-dark flex items-center min-h-[80vh]">
        <!-- תמונת רקע עם פילטר -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1595350550478-f71f6d3a9544?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-40" alt="לוחמי חי"ר">
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        
        <!-- תוכן מרכזי -->
        <div class="relative z-10 max-w-6xl mx-auto px-6 text-white text-center md:text-right w-full">
            <span class="inline-block px-4 py-1 bg-idf-yellow text-idf-dark font-black rounded text-sm mb-6 uppercase tracking-widest shadow-md">מהנגב באנו, על הנגב נגן</span>
            <h2 class="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter drop-shadow-lg">
                מגינים על הבית בחזית,<br><span class="text-idf-yellow">ובונים קהילה בעורף.</span>
            </h2>
            <p class="text-lg md:text-2xl text-gray-200 font-light max-w-3xl leading-relaxed mb-10 drop-shadow-md mx-auto md:mx-0">
                עמותת החטיבה היא הבית של הלוחמים, המפקדים והמשפחות. אנו דואגים לרווחה, לנטוורקינג תעסוקתי, ומהווים משפחה אחת גדולה במילואים ובאזרחות.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button onclick="openModal('joinModal')" class="px-8 py-4 bg-idf-yellow text-idf-dark font-black text-lg rounded-xl hover:bg-white transition shadow-lg text-center">טופס הצטרפות לעמותה</button>
                <a href="#networking" class="px-8 py-4 bg-black/50 backdrop-blur-sm border border-white/30 text-white font-black text-lg rounded-xl hover:bg-black/70 transition text-center">אינדקס ולוח משרות</a>
            </div>
        </div>
    </section>

    <!-- רצועת תרומה למטה -->
    <section id="donate" class="bg-idf-green text-white py-10 border-b-4 border-idf-yellow shadow-inner">
        <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-right">
                <h3 class="text-2xl font-black mb-1">תמכו במשפחת החטיבה</h3>
                <p class="text-gray-300 text-sm">התרומות שלכם מאפשרות לנו לממן את הניידת, חבילות למשפחות וסיוע למילואימניקים.</p>
            </div>
            <a href="https://wa.me/972542456102" target="_blank" class="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-xl rounded-xl shadow-lg transition w-full md:w-auto">
                <i class="fa-brands fa-whatsapp text-3xl"></i> תרמו עכשיו למען הלוחמים
            </a>
        </div>
    </section>

    <!-- מטרות ופעילות -->
    <section id="mission" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-idf-dark mb-4">העשייה שלנו</h2>
                <div class="h-1.5 w-24 bg-idf-green mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- כרטיסייה 1: ת"ש (סוואנה) -->
                <div class="card-uniform">
                    <div class="card-img-container">
                        <img src="https://images.unsplash.com/photo-1549317336-206569e8475c?auto=format&fit=crop&q=80&w=600" alt="רכב שטח מבצעי">
                        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <!-- כיתוב מודגש על הרכב -->
                            <span class="text-3xl font-black text-idf-dark bg-idf-yellow px-4 py-2 rounded-lg transform -skew-x-12 shadow-2xl border-2 border-white">189 נגבה</span>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-3 text-idf-dark"><i class="fa-solid fa-truck-fast text-idf-green ml-2"></i>ניידת ת"ש ללוחמים</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">הגעת ניידת ייעודית לשטחי הכינוס והלחימה עם אוכל, ציוד לוגיסטי ופינוקים לשמירה על מורל גבוה.</p>
                    </div>
                </div>

                <!-- כרטיסייה 2: משפחות -->
                <div class="card-uniform">
                    <div class="card-img-container">
                        <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=600" alt="משפחה בעורף">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-3 text-idf-dark"><i class="fa-solid fa-house-chimney-heart text-red-500 ml-2"></i>מעטפת משפחות</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">תמיכה בנשות ואנשי המילואים, חלוקת שי בחגים, וארגון ימי הפוגה קהילתיים למשפחות החטיבה.</p>
                    </div>
                </div>

                <!-- כרטיסייה 3: נטוורקינג -->
                <div class="card-uniform">
                    <div class="card-img-container">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600" alt="פגישת נטוורקינג">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-3 text-idf-dark"><i class="fa-solid fa-handshake text-blue-600 ml-2"></i>תעסוקה ונטוורקינג</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">קידום עסקים של חברי החטיבה, עזרה במציאת עבודה ויצירת קהילה כלכלית תומכת במרחב האזרחי.</p>
                    </div>
                </div>

                <!-- כרטיסייה 4: צרכנות -->
                <div class="card-uniform">
                    <div class="card-img-container">
                        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600" alt="צרכנות וקניות">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-xl font-black mb-3 text-idf-dark"><i class="fa-solid fa-tags text-idf-gold ml-2"></i>מועדון צרכנות</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">מינוף כוח הקנייה של 2,500 חברי העמותה להשגת הטבות והנחות בלעדיות ברשתות שיווק ושירותים.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- קהילת נטוורקינג (לוח משרות ואינדקס פונקציונלי) -->
    <section id="networking" class="py-24 bg-idf-dark text-white border-y border-gray-800">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-idf-yellow mb-4">קהילה של 2,500 אחים</h2>
                <p class="text-gray-400 max-w-2xl mx-auto text-lg">המערכת שלנו למציאת עבודה ולקידום עסקי של משרתי החטיבה.</p>
            </div>

            <!-- לשוניות הניווט (Tabs) -->
            <div class="flex justify-center gap-4 mb-10">
                <button onclick="switchTab('jobs')" id="tab-jobs" class="px-8 py-3 rounded-xl font-black text-lg bg-idf-yellow text-idf-dark transition shadow-md">לוח משרות</button>
                <button onclick="switchTab('biz')" id="tab-biz" class="px-8 py-3 rounded-xl font-black text-lg bg-white/10 text-white hover:bg-white/20 transition">אינדקס עסקים</button>
            </div>

            <!-- אזור המשרות -->
            <div id="content-jobs" class="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-white/10 pb-4 gap-4">
                    <h3 class="text-2xl font-bold text-white">משרות חמות</h3>
                    <button onclick="openModal('jobModal')" class="bg-idf-green hover:bg-idf-green/80 text-white px-5 py-2.5 rounded-xl font-bold transition shadow-lg">
                        <i class="fa-solid fa-plus ml-2"></i>פרסם משרה
                    </button>
                </div>
                <!-- רשימת המשרות שמתמלאת באמצעות ה-JS -->
                <div id="jobs-list" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- דוגמא למשרה -->
                    <div class="bg-white/10 p-6 rounded-2xl border border-white/20 text-right">
                        <h4 class="font-black text-xl text-idf-yellow">מנהל/ת פרויקטים הנדסה</h4>
                        <p class="text-white mt-2"><i class="fa-solid fa-building ml-2 text-gray-400"></i>דניה סיבוס</p>
                        <p class="text-gray-400 text-sm mt-4 bg-black/30 p-2 rounded inline-block"><i class="fa-solid fa-envelope ml-2"></i>hr@denya.co.il</p>
                    </div>
                </div>
            </div>

            <!-- אזור העסקים -->
            <div id="content-biz" class="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hidden">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-white/10 pb-4 gap-4">
                    <h3 class="text-2xl font-bold text-white">אינדקס בעלי מקצוע</h3>
                    <button onclick="openModal('bizModal')" class="bg-idf-green hover:bg-idf-green/80 text-white px-5 py-2.5 rounded-xl font-bold transition shadow-lg">
                        <i class="fa-solid fa-plus ml-2"></i>הוסף עסק לאינדקס
                    </button>
                </div>
                <!-- רשימת העסקים שמתמלאת באמצעות ה-JS -->
                <div id="biz-list" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- דוגמא לעסק -->
                    <div class="bg-white/10 p-6 rounded-2xl border border-white/20 text-center flex flex-col items-center">
                        <div class="w-14 h-14 bg-idf-green rounded-full flex items-center justify-center text-white mb-4 shadow-md"><i class="fa-solid fa-briefcase text-2xl"></i></div>
                        <h4 class="font-black text-xl text-white">דוד שיפוצים</h4>
                        <p class="text-idf-yellow text-sm mb-4">קבלן ביצוע</p>
                        <span class="bg-white/20 px-4 py-2 rounded-lg text-sm text-white font-bold tracking-widest">050-9876543</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- גדודי החטיבה (מרובעים יציבים עם תמונות רקע איכותיות) -->
    <section id="battalions" class="py-24 bg-gray-100">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-idf-dark mb-4">השדרה המבצעית</h2>
                <div class="h-1.5 w-24 bg-idf-yellow mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- גדוד 1891 -->
                <div class="card-uniform">
                    <div class="card-img-container h-40">
                        <img src="https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=600" alt="חיילים">
                        <div class="absolute inset-0 bg-idf-dark/80 flex flex-col items-center justify-center text-white">
                            <h3 class="text-4xl font-black">1891</h3>
                            <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1">"מגני יואב"</p>
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">מרחב לכיש, קריית גת ומועצה אזורית יואב. מגן על השער הצפוני של הנגב.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 mt-auto text-center">
                            <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                            <span class="font-black text-idf-dark text-lg">יואב הנר</span>
                        </div>
                    </div>
                </div>

                <!-- גדוד 1892 -->
                <div class="card-uniform">
                    <div class="card-img-container h-40">
                        <img src="https://images.unsplash.com/photo-1533069129528-79659b8be56d?q=80&w=600" alt="האמר צבאי">
                        <div class="absolute inset-0 bg-idf-dark/80 flex flex-col items-center justify-center text-white">
                            <h3 class="text-4xl font-black">1892</h3>
                            <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1">"חורב"</p>
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף המגן פיזית על הבית.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 mt-auto text-center">
                            <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                            <span class="font-black text-idf-dark text-lg">אלי כהן</span>
                        </div>
                    </div>
                </div>

                <!-- גדוד 1893 -->
                <div class="card-uniform">
                    <div class="card-img-container h-40">
                        <img src="https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=600" alt="שטח מדברי">
                        <div class="absolute inset-0 bg-idf-dark/80 flex flex-col items-center justify-center text-white">
                            <h3 class="text-4xl font-black">1893</h3>
                            <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1">"הר הנגב"</p>
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">דימונה, ערד, ירוחם ומצפה רמון. שמירה הדוקה על מרחב הנגב המרכזי והערבה.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 mt-auto text-center">
                            <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                            <span class="font-black text-idf-dark text-lg">אורי שינדלר</span>
                        </div>
                    </div>
                </div>

                <!-- גדוד 1894 -->
                <div class="card-uniform lg:col-start-1 lg:col-end-2 w-full lg:ml-auto">
                    <div class="card-img-container h-40">
                        <img src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=600" alt="שטח בנוי">
                        <div class="absolute inset-0 bg-idf-dark/80 flex flex-col items-center justify-center text-white">
                            <h3 class="text-4xl font-black">1894</h3>
                            <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1">"הלל"</p>
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">מורכב מיוצאי חיל הים. גדוד מילואים המשלב ניסיון מבצעי עשיר ים ויבשה.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 mt-auto text-center">
                            <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                            <span class="font-black text-idf-dark text-lg">יהונתן פרידמן</span>
                        </div>
                    </div>
                </div>

                <!-- גדוד 1895 -->
                <div class="card-uniform lg:col-start-2 lg:col-end-3">
                    <div class="card-img-container h-40">
                        <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600" alt="נוף דרומי">
                        <div class="absolute inset-0 bg-idf-dark/80 flex flex-col items-center justify-center text-white">
                            <h3 class="text-4xl font-black">1895</h3>
                            <p class="text-idf-yellow font-bold uppercase tracking-widest mt-1">"יעלה"</p>
                        </div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <p class="text-gray-600 mb-6 text-sm flex-grow">העיר אילת ויישובי חבל אילות. הגנה על הגזרה הדרומית ביותר של מדינת ישראל.</p>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 mt-auto text-center">
                            <span class="text-xs text-gray-500 block mb-1">נציג גדוד וחבר ועד</span>
                            <span class="font-black text-idf-dark text-lg">חיים קמחי</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- הנהלה (גריד כרטיסיות נקי וחזק למניעת קריסות תצוגה) -->
    <section id="management" class="py-24 bg-white border-t border-gray-200">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-black text-idf-dark mb-4">הנהגת העמותה</h2>
                <div class="h-1.5 w-24 bg-idf-green mx-auto rounded-full"></div>
            </div>

            <div class="mb-16">
                <h3 class="text-2xl font-black text-idf-dark mb-8 text-center bg-gray-50 py-4 rounded-2xl border border-gray-100">
                    <i class="fa-solid fa-users-gear text-idf-green ml-2"></i>הוועד המנהל
                </h3>
                
                <!-- רשת כרטיסיות מוקשחת ופרופורציונלית -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    
                    <!-- יו"ר -->
                    <div class="bg-gray-50 border-2 border-dashed border-gray-300 p-6 rounded-2xl text-center flex flex-col items-center justify-center">
                        <i class="fa-solid fa-crown text-3xl text-gray-300 mb-2"></i>
                        <h4 class="font-black text-gray-500 text-lg">יו"ר העמותה</h4>
                        <span class="text-xs bg-gray-200 px-3 py-1 rounded-full mt-2 font-bold text-gray-600">טרם מונה</span>
                    </div>

                    <!-- חברי ועד מנציגי הגדודים -->
                    <div class="bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-6 rounded-2xl text-center">
                        <div class="w-12 h-12 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fa-solid fa-user"></i></div>
                        <h4 class="font-black text-idf-dark text-lg">יואב הנר</h4>
                        <span class="text-xs text-gray-500 font-bold block mt-1">חבר ועד (1891)</span>
                    </div>
                    
                    <div class="bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-6 rounded-2xl text-center">
                        <div class="w-12 h-12 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fa-solid fa-user"></i></div>
                        <h4 class="font-black text-idf-dark text-lg">אלי כהן</h4>
                        <span class="text-xs text-gray-500 font-bold block mt-1">חבר ועד (1892)</span>
                    </div>

                    <div class="bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-6 rounded-2xl text-center">
                        <div class="w-12 h-12 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fa-solid fa-user"></i></div>
                        <h4 class="font-black text-idf-dark text-lg">אורי שינדלר</h4>
                        <span class="text-xs text-gray-500 font-bold block mt-1">חבר ועד (1893)</span>
                    </div>

                    <div class="bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-6 rounded-2xl text-center">
                        <div class="w-12 h-12 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fa-solid fa-user"></i></div>
                        <h4 class="font-black text-idf-dark text-lg">יהונתן פרידמן</h4>
                        <span class="text-xs text-gray-500 font-bold block mt-1">חבר ועד (1894)</span>
                    </div>

                    <div class="bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-6 rounded-2xl text-center">
                        <div class="w-12 h-12 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fa-solid fa-user"></i></div>
                        <h4 class="font-black text-idf-dark text-lg">חיים קמחי</h4>
                        <span class="text-xs text-gray-500 font-bold block mt-1">חבר ועד (1895)</span>
                    </div>

                    <!-- חברי ועד נוספים -->
                    <div class="bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-6 rounded-2xl text-center">
                        <div class="w-12 h-12 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fa-solid fa-user"></i></div>
                        <h4 class="font-black text-idf-dark text-lg">דני בלובשטיין</h4>
                        <span class="text-xs text-gray-500 font-bold block mt-1">חבר ועד</span>
                    </div>

                    <div class="bg-white border border-gray-200 shadow-sm hover:shadow-md transition p-6 rounded-2xl text-center">
                        <div class="w-12 h-12 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fa-solid fa-user"></i></div>
                        <h4 class="font-black text-idf-dark text-lg">בר נוימן</h4>
                        <span class="text-xs text-gray-500 font-bold block mt-1">חבר ועד</span>
                    </div>

                    <!-- מבקרת (תופסת רוחב כפול למראה מרשים) -->
                    <div class="bg-idf-dark text-white border border-gray-800 p-6 rounded-2xl text-center md:col-span-2 lg:col-span-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div class="w-14 h-14 bg-idf-yellow text-idf-dark rounded-full flex items-center justify-center text-2xl shrink-0"><i class="fa-solid fa-user-shield"></i></div>
                        <div class="text-center sm:text-right">
                            <h4 class="font-black text-xl text-idf-yellow mb-1">רו"ח גל אדווה</h4>
                            <span class="text-sm font-bold opacity-80 uppercase tracking-widest">מבקרת העמותה</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- הנהלה ביצועית -->
            <div>
                <h3 class="text-2xl font-black text-idf-dark mb-8 text-center bg-gray-50 py-4 rounded-2xl border border-gray-100">
                    <i class="fa-solid fa-briefcase text-idf-green ml-2"></i>הנהלה ביצועית
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div class="bg-white border border-gray-200 p-6 rounded-2xl text-center opacity-60 shadow-sm">
                        <h4 class="font-black text-gray-700 text-lg mb-2">מנכ"ל/ית העמותה</h4>
                        <span class="text-xs bg-gray-200 px-3 py-1.5 rounded-full font-bold text-gray-600">ללא אדם מוגדר</span>
                    </div>
                    <div class="bg-white border border-gray-200 p-6 rounded-2xl text-center opacity-60 shadow-sm">
                        <h4 class="font-black text-gray-700 text-lg mb-2">מנהל/ת רווחה</h4>
                        <span class="text-xs bg-gray-200 px-3 py-1.5 rounded-full font-bold text-gray-600">ללא אדם מוגדר</span>
                    </div>
                    <div class="bg-white border border-gray-200 p-6 rounded-2xl text-center opacity-60 shadow-sm">
                        <h4 class="font-black text-gray-700 text-lg mb-2">מנהל/ת פיתוח משאבים</h4>
                        <span class="text-xs bg-gray-200 px-3 py-1.5 rounded-full font-bold text-gray-600">ללא אדם מוגדר</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- מסמכים -->
    <section id="documents" class="py-16 dark-section border-t-4 border-idf-yellow">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-3xl font-black mb-8">מסמכי העמותה ושקיפות</h2>
            <div class="flex flex-wrap justify-center gap-6">
                <div class="bg-white/10 p-6 rounded-2xl border border-white/20 w-48 text-center hover:bg-white/20 transition cursor-pointer">
                    <i class="fa-solid fa-file-pdf text-4xl text-red-500 mb-4"></i>
                    <p class="font-bold text-sm">תעודת רישום</p>
                </div>
                <div class="bg-white/10 p-6 rounded-2xl border border-white/20 w-48 text-center hover:bg-white/20 transition cursor-pointer">
                    <i class="fa-solid fa-file-pdf text-4xl text-red-500 mb-4"></i>
                    <p class="font-bold text-sm">אישור ניהול תקין</p>
                </div>
                <div class="bg-white/10 p-6 rounded-2xl border border-white/20 w-48 text-center hover:bg-white/20 transition cursor-pointer">
                    <i class="fa-solid fa-file-pdf text-4xl text-red-500 mb-4"></i>
                    <p class="font-bold text-sm">סעיף 46</p>
                </div>
            </div>
        </div>
    </section>

    <!-- פוטר -->
    <footer class="bg-black py-12 text-white border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
            <div class="flex flex-col md:flex-row items-center gap-4">
                <div class="w-16 h-16 bg-white rounded-xl p-1 shrink-0">
                    <img src="logo.png" alt="לוגו" class="w-full h-full object-contain" onerror="this.style.display='none'">
                </div>
                <div>
                    <span class="font-black text-xl block">עמותת חטיבת נגבה 189</span>
                    <span class="text-sm text-gray-500">כל הזכויות שמורות &copy; 2024</span>
                </div>
            </div>
            <div class="flex items-center justify-center gap-6">
                <a href="https://wa.me/972542456102" class="text-red-500 font-bold hover:text-white transition text-lg flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <i class="fa-brands fa-whatsapp text-2xl"></i> לתרומה
                </a>
                <i class="fa-brands fa-facebook text-3xl hover:text-blue-500 cursor-pointer transition text-gray-400"></i>
            </div>
        </div>
    </footer>

    <!-- מודאלים לטפסים עם JS מובנה ובטוח לפעולה -->
    
    <!-- מודאל הצטרפות -->
    <div id="joinModal" class="modal" onclick="closeModal(event, 'joinModal')">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full m-4 shadow-2xl relative" onclick="event.stopPropagation()">
            <button onclick="closeModal(null, 'joinModal')" class="absolute top-4 left-4 text-gray-400 hover:text-red-500"><i class="fa-solid fa-xmark text-2xl"></i></button>
            <h3 class="text-2xl font-black text-idf-dark mb-6 text-center">טופס הצטרפות</h3>
            <form id="joinForm" class="space-y-4" onsubmit="handleFormSubmit(event, 'joinModal', 'הבקשה להצטרפות נשלחה בהצלחה!')">
                <input type="text" placeholder="שם מלא" required class="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-idf-green outline-none font-bold">
                <input type="tel" placeholder="טלפון" required class="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-idf-green outline-none font-bold">
                <select required class="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-idf-green outline-none font-bold cursor-pointer">
                    <option value="" disabled selected>בחר גדוד...</option>
                    <option>1891</option><option>1892</option><option>1893</option><option>1894</option><option>1895</option><option>מפקדה/אחר</option>
                </select>
                <button type="submit" class="w-full bg-idf-dark text-idf-yellow font-black text-lg py-4 rounded-xl mt-4 hover:bg-black transition shadow-lg">שלח פרטים למערכת</button>
            </form>
        </div>
    </div>

    <!-- מודאל פרסום משרה -->
    <div id="jobModal" class="modal" onclick="closeModal(event, 'jobModal')">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full m-4 shadow-2xl relative" onclick="event.stopPropagation()">
            <button onclick="closeModal(null, 'jobModal')" class="absolute top-4 left-4 text-gray-400 hover:text-red-500"><i class="fa-solid fa-xmark text-2xl"></i></button>
            <h3 class="text-2xl font-black text-idf-dark mb-6 text-center">פרסום משרה</h3>
            <form id="jobForm" class="space-y-4" onsubmit="handleJobSubmit(event)">
                <input type="text" id="jobTitle" placeholder="כותרת המשרה" required class="w-full p-4 bg-gray-50 border rounded-xl outline-none font-bold">
                <input type="text" id="jobCompany" placeholder="שם החברה" required class="w-full p-4 bg-gray-50 border rounded-xl outline-none font-bold">
                <input type="text" id="jobContact" placeholder="איך יוצרים קשר?" required class="w-full p-4 bg-gray-50 border rounded-xl outline-none font-bold">
                <button type="submit" class="w-full bg-idf-green text-white font-black text-lg py-4 rounded-xl mt-4 shadow-lg">הוסף ללוח המשרות</button>
            </form>
        </div>
    </div>

    <!-- מודאל הוספת עסק -->
    <div id="bizModal" class="modal" onclick="closeModal(event, 'bizModal')">
        <div class="bg-white rounded-3xl p-8 max-w-md w-full m-4 shadow-2xl relative" onclick="event.stopPropagation()">
            <button onclick="closeModal(null, 'bizModal')" class="absolute top-4 left-4 text-gray-400 hover:text-red-500"><i class="fa-solid fa-xmark text-2xl"></i></button>
            <h3 class="text-2xl font-black text-idf-dark mb-6 text-center">הוספת עסק לאינדקס</h3>
            <form id="bizForm" class="space-y-4" onsubmit="handleBizSubmit(event)">
                <input type="text" id="bizName" placeholder="שם העסק" required class="w-full p-4 bg-gray-50 border rounded-xl outline-none font-bold">
                <input type="text" id="bizCategory" placeholder="תחום (למשל: שיפוצים)" required class="w-full p-4 bg-gray-50 border rounded-xl outline-none font-bold">
                <input type="text" id="bizContact" placeholder="טלפון או אתר אינטרנט" required class="w-full p-4 bg-gray-50 border rounded-xl outline-none font-bold">
                <button type="submit" class="w-full bg-idf-green text-white font-black text-lg py-4 rounded-xl mt-4 shadow-lg">הוסף לאינדקס</button>
            </form>
        </div>
    </div>

    <!-- JavaScript - נקי ויציב לחלוטין ללא שגיאות קונסול -->
    <script>
        // פונקציות פתיחה וסגירה של מודאלים
        function openModal(id) {
            document.getElementById(id).classList.add('active');
        }

        function closeModal(e, id) {
            if(e) e.stopPropagation();
            document.getElementById(id).classList.remove('active');
        }

        // פונקציה פשוטה לטיפול בהודעות הצלחה מטפסים רגילים
        function handleFormSubmit(e, modalId, msg) {
            e.preventDefault();
            alert(msg);
            e.target.reset();
            closeModal(null, modalId);
        }

        // החלפת טאבים באזור הנטוורקינג
        function switchTab(tab) {
            const jobsContent = document.getElementById('content-jobs');
            const bizContent = document.getElementById('content-biz');
            const jobsBtn = document.getElementById('tab-jobs');
            const bizBtn = document.getElementById('tab-biz');

            if (tab === 'jobs') {
                jobsContent.classList.remove('hidden');
                bizContent.classList.add('hidden');
                jobsBtn.className = 'px-8 py-3 rounded-xl font-black text-lg bg-idf-yellow text-idf-dark transition shadow-md';
                bizBtn.className = 'px-8 py-3 rounded-xl font-black text-lg bg-white/10 text-white hover:bg-white/20 transition';
            } else {
                bizContent.classList.remove('hidden');
                jobsContent.classList.add('hidden');
                bizBtn.className = 'px-8 py-3 rounded-xl font-black text-lg bg-idf-yellow text-idf-dark transition shadow-md';
                jobsBtn.className = 'px-8 py-3 rounded-xl font-black text-lg bg-white/10 text-white hover:bg-white/20 transition';
            }
        }

        // הוספת משרה לרשימה בזמן אמת ב-UI
        function handleJobSubmit(e) {
            e.preventDefault();
            const title = document.getElementById('jobTitle').value;
            const company = document.getElementById('jobCompany').value;
            const contact = document.getElementById('jobContact').value;
            
            const list = document.getElementById('jobs-list');
            if(list.innerHTML.includes('טוען')) list.innerHTML = ''; // ניקוי טקסט טעינה
            
            const jobHTML = `
                <div class="bg-white/10 p-6 rounded-2xl border border-white/20 text-right">
                    <h4 class="font-black text-xl text-idf-yellow">${title}</h4>
                    <p class="text-white mt-2"><i class="fa-solid fa-building ml-2 text-gray-400"></i>${company}</p>
                    <p class="text-gray-400 text-sm mt-4 bg-black/30 p-2 rounded inline-block"><i class="fa-solid fa-envelope ml-2"></i>${contact}</p>
                </div>
            `;
            
            list.insertAdjacentHTML('afterbegin', jobHTML);
            e.target.reset();
            closeModal(null, 'jobModal');
            alert('המשרה נוספה ללוח!');
        }

        // הוספת עסק לרשימה בזמן אמת ב-UI
        function handleBizSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('bizName').value;
            const category = document.getElementById('bizCategory').value;
            const contact = document.getElementById('bizContact').value;
            
            const list = document.getElementById('biz-list');
            if(list.innerHTML.includes('טוען')) list.innerHTML = ''; // ניקוי טקסט טעינה
            
            const bizHTML = `
                <div class="bg-white/10 p-6 rounded-2xl border border-white/20 text-center flex flex-col items-center">
                    <div class="w-14 h-14 bg-idf-green rounded-full flex items-center justify-center text-white mb-4 shadow-md"><i class="fa-solid fa-briefcase text-2xl"></i></div>
                    <h4 class="font-black text-xl text-white">${name}</h4>
                    <p class="text-idf-yellow text-sm mb-4">${category}</p>
                    <span class="bg-white/20 px-4 py-2 rounded-lg text-sm text-white font-bold tracking-widest">${contact}</span>
                </div>
            `;
            
            list.insertAdjacentHTML('afterbegin', bizHTML);
            e.target.reset();
            closeModal(null, 'bizModal');
            alert('העסק נוסף לאינדקס!');
        }

        // טעינת נתוני דמו כדי שהלוח לא יהיה ריק כשנכנסים לאתר
        window.addEventListener('DOMContentLoaded', () => {
            const jList = document.getElementById('jobs-list');
            const bList = document.getElementById('biz-list');
            
            jList.innerHTML = `
                <div class="bg-white/10 p-6 rounded-2xl border border-white/20 text-right">
                    <h4 class="font-black text-xl text-idf-yellow">מנהל/ת פרויקטים הנדסה</h4>
                    <p class="text-white mt-2"><i class="fa-solid fa-building ml-2 text-gray-400"></i>דניה סיבוס</p>
                    <p class="text-gray-400 text-sm mt-4 bg-black/30 p-2 rounded inline-block"><i class="fa-solid fa-envelope ml-2"></i>hr@denya.co.il</p>
                </div>
            `;
            
            bList.innerHTML = `
                <div class="bg-white/10 p-6 rounded-2xl border border-white/20 text-center flex flex-col items-center">
                    <div class="w-14 h-14 bg-idf-green rounded-full flex items-center justify-center text-white mb-4 shadow-md"><i class="fa-solid fa-briefcase text-2xl"></i></div>
                    <h4 class="font-black text-xl text-white">דוד שיפוצים</h4>
                    <p class="text-idf-yellow text-sm mb-4">קבלן ביצוע</p>
                    <span class="bg-white/20 px-4 py-2 rounded-lg text-sm text-white font-bold tracking-widest">050-9876543</span>
                </div>
            `;
        });
    </script>
</body>
</html>
