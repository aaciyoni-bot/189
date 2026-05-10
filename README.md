<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | משפחה אחת</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <!-- גופנים מודרניים: Rubik לכותרות ו-Assistant לטקסט רץ -->
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&family=Rubik:ital,wght@0,300;0,400;0,700;0,900;1,900&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Assistant', 'sans-serif'],
                        heading: ['Rubik', 'sans-serif'],
                    },
                    colors: {
                        idf: {
                            green: '#3d441e',
                            light: '#6b705c',
                            yellow: '#facc15',
                            dark: '#1a1d0b',
                            brown: '#5c3a21',
                            gold: '#b45309'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Assistant', sans-serif; }
        h1, h2, h3, h4, .font-heading { font-family: 'Rubik', sans-serif; }
        html { scroll-behavior: smooth; }
        
        .hero-gradient {
            background: linear-gradient(rgba(26, 29, 11, 0.85), rgba(26, 29, 11, 0.7)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
        }

        .card-modern {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-modern:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .btn-shine {
            position: relative;
            overflow: hidden;
        }
        .btn-shine::after {
            content: "";
            background: rgba(255,255,255,0.2);
            position: absolute;
            top: 0; left: -100%;
            width: 100%; height: 100%;
            transform: skewX(-20deg);
            transition: 0.5s;
        }
        .btn-shine:hover::after {
            left: 100%;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-900 overflow-x-hidden text-right">

    <!-- Navbar מורחב עם לוגו גדול -->
    <nav class="bg-white/90 backdrop-blur-lg shadow-sm fixed w-full z-50 top-0 h-24 flex items-center border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
            <div class="flex items-center gap-6">
                <!-- לוגו מוגדל משמעותית -->
                <div class="relative group">
                    <img src="logo.png" alt="לוגו" class="h-20 w-auto object-contain transition-transform group-hover:scale-105" 
                         onerror="this.src='https://via.placeholder.com/150x150?text=189+LOGO'">
                </div>
                <div class="border-r-2 border-gray-100 pr-6">
                    <span class="font-black text-2xl md:text-3xl text-idf-dark block tracking-tighter leading-none">עמותת חטיבת נגבה</span>
                    <span class="text-sm text-idf-gold font-bold uppercase tracking-widest mt-1 block">משפחה אחת. דרך אחת.</span>
                </div>
            </div>
            
            <div class="hidden lg:flex items-center gap-10">
                <a href="#projects" class="font-bold text-idf-dark hover:text-idf-gold transition text-lg">פעילות</a>
                <a href="#symbol" class="font-bold text-idf-dark hover:text-idf-gold transition text-lg">הסמל שלנו</a>
                <a href="#battalions" class="font-bold text-idf-dark hover:text-idf-gold transition text-lg">גדודים</a>
                <a href="#join" class="bg-idf-green text-white px-8 py-3 rounded-2xl font-black hover:bg-idf-dark transition shadow-xl btn-shine">הצטרפות</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section מודרני -->
    <section class="hero-gradient min-h-[90vh] flex items-center pt-24">
        <div class="max-w-5xl mx-auto px-6 text-center text-white">
            <h1 class="text-6xl md:text-9xl font-black mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
                "מהנגב באנו,<br><span class="text-idf-yellow">על הנגב נגן"</span>
            </h1>
            <p class="text-xl md:text-3xl mb-12 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                הבית הקהילתי של לוחמי ומפקדי חטיבה 189.<br>
                <strong>בונים קהילה חזקה ותומכת במילואים ובאזרחות.</strong>
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#join" class="bg-idf-yellow text-idf-dark font-black text-2xl px-12 py-6 rounded-2xl hover:bg-white transition shadow-[0_20px_50px_rgba(250,204,21,0.3)]">הרשמה לעמותה</a>
                <a href="#recruit" class="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-black text-2xl px-12 py-6 rounded-2xl hover:bg-white/20 transition">גיוס לחטיבה</a>
            </div>
        </div>
    </section>

    <!-- הפעילות שלנו -->
    <section id="projects" class="py-32 bg-white relative">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                <div class="text-right">
                    <h2 class="text-5xl font-black text-idf-dark">העורף של הלוחמים</h2>
                    <p class="text-xl text-gray-500 mt-4">הפרויקטים שמובילה העמותה למען המשרתים ומשפחותיהם</p>
                </div>
                <div class="h-1 w-32 bg-idf-yellow rounded-full mb-4 hidden md:block"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <!-- Card -->
                <div class="card-modern p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
                    <div class="w-20 h-20 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-sm"><i class="fa-solid fa-gift"></i></div>
                    <h3 class="text-2xl font-black mb-4">ניידת ת"ש</h3>
                    <p class="text-gray-600 leading-relaxed">ניידת ייעודית שמגיעה לשטח עם ציוד לוגיסטי ופינוקים להרמת המורל בזמן אמת.</p>
                </div>

                <div class="card-modern p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
                    <div class="w-20 h-20 bg-rose-100 text-rose-600 rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-sm"><i class="fa-solid fa-people-group"></i></div>
                    <h3 class="text-2xl font-black mb-4">משפחות ונופשים</h3>
                    <p class="text-gray-600 leading-relaxed">ימי משפחות, מתנות הוקרה ונופשים יחידתיים לחיזוק התא המשפחתי המלווה.</p>
                </div>

                <div class="card-modern p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
                    <div class="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-sm"><i class="fa-solid fa-handshake-simple"></i></div>
                    <h3 class="text-2xl font-black mb-4">נטוורקינג</h3>
                    <p class="text-gray-600 leading-relaxed">חיבור עסקי ותעסוקתי בין חברי העמותה באזרחות וסיוע הדדי לקידום אישי.</p>
                </div>

                <div class="card-modern p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
                    <div class="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-sm"><i class="fa-solid fa-tag"></i></div>
                    <h3 class="text-2xl font-black mb-4">מועדון צרכנות</h3>
                    <p class="text-gray-600 leading-relaxed">כוח קנייה מאוחד המעניק הנחות והטבות בלעדיות למשרתי החטיבה ברשתות ארציות.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- סמל העמותה עם הסברים - עיצוב פרימיום -->
    <section id="symbol" class="py-32 bg-idf-dark text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center mb-24">
                <h2 class="text-5xl font-black mb-6 italic tracking-tighter">משפחה אחת, דרך אחת</h2>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto">סמל העמותה מחבר בין המורשת המבצעית לבין הערך האנושי של הסיוע והקהילה.</p>
            </div>

            <div class="flex flex-col lg:flex-row items-center gap-20">
                <!-- לוגו ענק במרכז -->
                <div class="w-full lg:w-1/2 flex justify-center">
                    <div class="relative">
                        <div class="absolute inset-0 bg-idf-yellow/20 blur-[100px] rounded-full"></div>
                        <div class="bg-white p-12 rounded-[3rem] shadow-2xl relative transform hover:rotate-3 transition duration-500">
                            <img src="logo.png" alt="סמל העמותה מוגדל" class="w-full max-w-md h-auto" onerror="this.src='https://via.placeholder.com/500x500?text=189+SYMBOL'">
                        </div>
                    </div>
                </div>

                <!-- מקרא הסבר מודרני -->
                <div class="w-full lg:w-1/2 space-y-10">
                    <div class="flex gap-6 group">
                        <div class="w-16 h-16 shrink-0 bg-idf-brown/30 rounded-2xl flex items-center justify-center text-idf-yellow border border-idf-yellow/30 group-hover:bg-idf-yellow group-hover:text-idf-dark transition duration-300">
                            <i class="fa-solid fa-shield-halved text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-black mb-2 tracking-tight">מגן האדמה והחול</h4>
                            <p class="text-gray-400 leading-relaxed text-lg font-light">המגן ההיסטורי של נגבה, חצוי לחום בהיר (חולות המדבר) וחום כהה (אדמת הנגב היציבה). זהו הבסיס המורשתי שלנו.</p>
                        </div>
                    </div>
                    <div class="flex gap-6 group">
                        <div class="w-16 h-16 shrink-0 bg-idf-brown/30 rounded-2xl flex items-center justify-center text-idf-yellow border border-idf-yellow/30 group-hover:bg-idf-yellow group-hover:text-idf-dark transition duration-300">
                            <i class="fa-solid fa-handshake text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-black mb-2 tracking-tight">לחיצת היד המשלבת</h4>
                            <p class="text-gray-400 leading-relaxed text-lg font-light">בלב המגן, לחיצת יד המאחדת את הצבעים. היא מסמלת את הסולידריות, העזרה ההדדית והקשר האנושי שבונה העמותה.</p>
                        </div>
                    </div>
                    <div class="flex gap-6 group">
                        <div class="w-16 h-16 shrink-0 bg-idf-brown/30 rounded-2xl flex items-center justify-center text-idf-yellow border border-idf-yellow/30 group-hover:bg-idf-yellow group-hover:text-idf-dark transition duration-300">
                            <i class="fa-solid fa-bolt text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-black mb-2 tracking-tight">החרב והוואדי</h4>
                            <p class="text-gray-400 leading-relaxed text-lg font-light">החרב וקווי השבר שמדמים את ערוצי הנחלים בנגב, מזכירים לנו את השליחות המבצעית ואת הגזרה עליה אנו מגינים.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- הגדודים - עיצוב חדש ויוקרתי -->
    <section id="battalions" class="py-32 bg-slate-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-5xl font-black text-idf-dark tracking-tighter italic">השדרה המרכזית</h2>
                <div class="h-1.5 w-32 bg-idf-green mx-auto mt-6 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- 1891 -->
                <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 border border-slate-100 flex flex-col group">
                    <div class="bg-idf-green p-10 text-center text-white relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-full bg-black/10 transition-transform group-hover:scale-110"></div>
                        <h3 class="text-3xl font-black relative z-10">גדוד 1891</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl relative z-10 tracking-widest">"מגני יואב"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>גזרה:</strong> מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המבוסס על "בני המקום" המהווה חומת מגן לגזרה הצפונית.</p>
                        <div class="mt-auto pt-8 border-t border-slate-50 flex items-center gap-4">
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-idf-green"><i class="fa-solid fa-user-check"></i></div>
                            <div>
                                <span class="text-xs font-black text-slate-400 uppercase tracking-tighter">רכז עמותה</span>
                                <p class="font-bold text-slate-800">אבי כהן | 050-1234567</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 1892 -->
                <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 border border-slate-100 flex flex-col group">
                    <div class="bg-idf-green p-10 text-center text-white relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-full bg-black/10 transition-transform group-hover:scale-110"></div>
                        <h3 class="text-3xl font-black relative z-10">גדוד 1892</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl relative z-10 tracking-widest">"חורב"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>גזרה:</strong> יישובי עוטף עזה. גדוד "חורב", המורכב מלוחמים בני העוטף, המהווה מכפיל כוח בהגנה על הבית והקהילה.</p>
                        <div class="mt-auto pt-8 border-t border-slate-50 flex items-center gap-4">
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-idf-green"><i class="fa-solid fa-user-check"></i></div>
                            <div>
                                <span class="text-xs font-black text-slate-400 uppercase tracking-tighter">רכז עמותה</span>
                                <p class="font-bold text-slate-800">דן לוי | 052-7654321</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 1893 -->
                <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 border border-slate-100 flex flex-col group">
                    <div class="bg-idf-green p-10 text-center text-white relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-full bg-black/10 transition-transform group-hover:scale-110"></div>
                        <h3 class="text-3xl font-black relative z-10">גדוד 1893</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl relative z-10 tracking-widest">"הר הנגב"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>גזרה:</strong> דימונה, ערד, ירוחם ומצפה רמון. מבוסס על מודל "בני מקום" לשמירה הדוקה על מרחב הנגב המרכזי והדרומי.</p>
                        <div class="mt-auto pt-8 border-t border-slate-50 flex items-center gap-4">
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-idf-green"><i class="fa-solid fa-user-check"></i></div>
                            <div>
                                <span class="text-xs font-black text-slate-400 uppercase tracking-tighter">רכז עמותה</span>
                                <p class="font-bold text-slate-800">רון ישראלי | 054-9876543</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 1894 -->
                <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 border border-slate-100 flex flex-col group">
                    <div class="bg-idf-green p-10 text-center text-white relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-full bg-black/10 transition-transform group-hover:scale-110"></div>
                        <h3 class="text-3xl font-black relative z-10">גדוד 1894</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl relative z-10 tracking-widest">"הלל"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>אופי:</strong> מורכב מיוצאי חיל הים. גדוד חי"ר המשלב ניסיון מבצעי עשיר מעולם הים והיבשה לכדי כוח מתמרן ומיומן.</p>
                        <div class="mt-auto pt-8 border-t border-slate-50 flex items-center gap-4">
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-idf-green"><i class="fa-solid fa-user-check"></i></div>
                            <div>
                                <span class="text-xs font-black text-slate-400 uppercase tracking-tighter">רכז עמותה</span>
                                <p class="font-bold text-slate-800">יוסי שמעוני | 050-1122334</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 1895 -->
                <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 border border-slate-100 flex flex-col group md:col-span-2 lg:col-span-1">
                    <div class="bg-idf-green p-10 text-center text-white relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-full bg-black/10 transition-transform group-hover:scale-110"></div>
                        <h3 class="text-3xl font-black relative z-10">גדוד 1895</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl relative z-10 tracking-widest">"יעלה"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>גזרה:</strong> העיר אילת ויישובי חבל אילות. גדוד מילואים להגנה מרחבית המבוסס על תושבי האזור המגינים על הגזרה הדרומית.</p>
                        <div class="mt-auto pt-8 border-t border-slate-50 flex items-center gap-4">
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-idf-green"><i class="fa-solid fa-user-check"></i></div>
                            <div>
                                <span class="text-xs font-black text-slate-400 uppercase tracking-tighter">רכז עמותה</span>
                                <p class="font-bold text-slate-800">אמיר גולן | 053-5566778</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- טופס גיוס מעוצב - High-Tech Look -->
    <section id="recruit" class="py-32 bg-white relative">
        <div class="max-w-4xl mx-auto px-6">
            <div class="bg-idf-dark rounded-[3.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                <div class="absolute bottom-0 right-0 w-64 h-64 bg-idf-green/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>
                
                <div class="relative z-10 text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-black text-white italic tracking-tighter">התגייסו לחטיבה</h2>
                    <p class="text-gray-400 mt-4 text-xl font-light">השאירו פרטים ונחזור אליכם בהקדם לגבי שיבוץ מילואים</p>
                </div>

                <form class="relative z-10 space-y-8" onsubmit="event.preventDefault();">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-2">
                            <label class="text-xs font-black text-idf-yellow uppercase tracking-widest mr-2">שם מלא</label>
                            <input type="text" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-black text-idf-yellow uppercase tracking-widest mr-2">טלפון</label>
                            <input type="tel" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-black text-idf-yellow uppercase tracking-widest mr-2">תפקיד מבוקש</label>
                        <select class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold appearance-none cursor-pointer">
                            <option class="text-idf-dark">לוחם / מפקד (רובאי 05+)</option>
                            <option class="text-idf-dark">נהג משא כבד / מבצעי</option>
                            <option class="text-idf-dark">חובש / רפואה</option>
                            <option class="text-idf-dark">לוגיסטיקה וחימוש</option>
                        </select>
                    </div>
                    <button type="submit" class="w-full bg-idf-yellow text-idf-dark font-black text-2xl py-6 rounded-2xl hover:scale-[1.02] transition shadow-xl mt-4 btn-shine">שליחת בקשה</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-idf-dark text-white py-24 border-t-8 border-idf-green">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-12">
                <div class="flex items-center gap-6">
                    <div class="bg-white p-3 rounded-2xl">
                        <img src="logo.png" alt="לוגו פוטר" class="h-16 w-auto" onerror="this.parentElement.style.display='none'">
                    </div>
                    <div>
                        <span class="font-black text-3xl block tracking-tighter">חטיבת נגבה 189</span>
                        <p class="text-gray-500 font-bold mt-1 uppercase tracking-widest text-sm">העמותה הרשמית למשרתים ומשפחותיהם</p>
                    </div>
                </div>
                <div class="flex gap-10 text-4xl">
                    <a href="#" class="text-gray-600 hover:text-idf-yellow transition"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="text-gray-600 hover:text-idf-yellow transition"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="mailto:info@189ngo.org.il" class="text-gray-600 hover:text-idf-yellow transition"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
            <div class="border-t border-white/5 mt-16 pt-8 text-center text-gray-600 font-bold text-sm tracking-widest uppercase">
                &copy; 2024 עמותת חטיבה 189. כל הזכויות שמורות למשרתי החטיבה.
            </div>
        </div>
    </footer>

</body>
</html>
