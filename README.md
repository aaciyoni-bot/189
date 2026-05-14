<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | Negba 189 NGO</title>
    
    <!-- פונטים פרימיום -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;700&family=Rubik:wght@300;500;700;900&family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Assistant', 'Inter', 'sans-serif'],
                        heading: ['Rubik', 'Inter', 'sans-serif'],
                    },
                    colors: {
                        idf: {
                            green: '#3d441e',
                            lightGreen: '#5c633a',
                            yellow: '#facc15',
                            dark: '#0a0c05',
                            gold: '#b45309',
                            slate: '#1e293b'
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        body { background-color: #0a0c05; transition: all 0.3s ease; }
        h1, h2, h3, h4 { font-family: 'Rubik', sans-serif; font-weight: 900; }
        html { scroll-behavior: smooth; }

        /* אפקטים סינמטיים עם תמונות רקע שעובדות בוודאות */
        .hero-video-bg {
            position: relative;
            background: linear-gradient(rgba(10, 12, 5, 0.7), rgba(10, 12, 5, 0.9)), 
                        url('https://images.unsplash.com/photo-1590401416653-53530646199e?q=80&w=2000');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        
        .maneuver-bg {
            background: linear-gradient(rgba(10, 12, 5, 0.85), rgba(10, 12, 5, 0.85)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2000');
            background-size: cover; background-position: center;
        }

        .humvee-bg {
            background: linear-gradient(rgba(10, 12, 5, 0.9), rgba(10, 12, 5, 0.9)), 
                        url('https://images.unsplash.com/photo-1533069129528-79659b8be56d?q=80&w=2000');
            background-size: cover; background-position: center;
        }

        .glass {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .card-gold-hover {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border-bottom: 4px solid transparent;
        }
        .card-gold-hover:hover {
            transform: translateY(-10px);
            border-color: #facc15;
            background: rgba(250, 204, 21, 0.05);
        }

        /* בורר שפות */
        .lang-btn { opacity: 0.6; transition: 0.3s; }
        .lang-btn.active { opacity: 1; border-bottom: 2px solid #facc15; }

        /* אנימציה עדינה */
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade { animation: fadeIn 0.8s ease-out forwards; }
    </style>
</head>
<body class="text-white text-right overflow-x-hidden">

    <!-- Navbar -->
    <nav class="fixed w-full z-50 top-0 bg-idf-dark/95 backdrop-blur-xl border-b border-idf-yellow/20">
        <div class="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
            <!-- ימין: לוגו וטקסט -->
            <div class="flex items-center gap-6">
                <div class="flex items-center gap-4 group cursor-pointer" onclick="window.scrollTo(0,0)">
                    <div class="bg-white p-1 rounded-xl shadow-2xl h-16 w-16 md:h-20 md:w-20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 border border-white/20">
                        <img src="logo.png" alt="189" class="max-h-full max-w-full object-contain" onerror="this.src='https://placehold.co/100x100/3d441e/ffffff?text=189'">
                    </div>
                    <div class="hidden md:block">
                        <h1 class="text-xl md:text-2xl font-black tracking-tighter leading-none" id="nav-title">עמותת חטיבת נגבה 189</h1>
                        <p class="text-idf-yellow font-bold text-xs uppercase tracking-widest mt-1 opacity-80" id="nav-subtitle">משפחה אחת. דרך אחת.</p>
                    </div>
                </div>
            </div>

            <!-- מרכז: בורר שפות -->
            <div class="flex items-center gap-2 md:gap-4 bg-white/5 p-1 md:p-1.5 rounded-full border border-white/10">
                <button onclick="changeLanguage('he')" class="lang-btn px-3 py-1 md:px-4 rounded-full text-xs font-black active" id="btn-he">עברית</button>
                <button onclick="changeLanguage('en')" class="lang-btn px-3 py-1 md:px-4 rounded-full text-xs font-black" id="btn-en">English</button>
                <button onclick="changeLanguage('fr')" class="lang-btn px-3 py-1 md:px-4 rounded-full text-xs font-black" id="btn-fr">Français</button>
            </div>

            <!-- שמאל: כפתור פעולה (מסתתר במובייל קטן) -->
            <div class="hidden lg:block">
                <a href="#recruit" class="bg-idf-yellow text-idf-dark px-8 py-3 rounded-xl font-black text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] uppercase tracking-wider" id="btn-recruit-nav">התגייסו לחטיבה</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-video-bg min-h-screen flex items-center justify-center pt-24">
        <div class="max-w-5xl mx-auto px-6 text-center animate-fade">
            <span class="inline-block px-4 py-1 bg-idf-yellow text-idf-dark font-black rounded-lg text-sm mb-8 uppercase tracking-widest italic" id="hero-tagline">מהנגב באנו, על הנגב נגן</span>
            <h2 class="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter italic" id="hero-title">הכוח שלנו הוא <br><span class="text-idf-yellow">האנשים שלנו.</span></h2>
            <p class="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-12" id="hero-desc">עמותת חטיבת המילואים 189 בונה קהילה לוחמת ותומכת - משדה הקרב ועד החיים האזרחיים.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#join" class="px-10 py-5 bg-white text-idf-dark font-black text-xl rounded-2xl hover:bg-idf-yellow transition-all shadow-2xl hover:scale-105" id="btn-join-hero">מילוי טופס חבר</a>
                <a href="#projects" class="px-10 py-5 border-2 border-white/20 backdrop-blur-md text-white font-black text-xl rounded-2xl hover:bg-white/10 transition" id="btn-projects-hero">פעילות העמותה</a>
            </div>
        </div>
    </section>

    <!-- פרויקטים -->
    <section id="projects" class="humvee-bg py-32 border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-24 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-right">
                <div>
                    <h2 class="text-5xl md:text-7xl font-black italic tracking-tighter" id="projects-title">העורף של הלוחמים</h2>
                    <p class="text-lg md:text-xl text-idf-yellow font-bold mt-4 opacity-70 uppercase tracking-widest" id="projects-subtitle">משימות העמותה בשגרה ובחירום</p>
                </div>
                <div class="h-2 w-32 bg-idf-yellow rounded-full mx-auto md:mx-0"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="glass p-12 rounded-[3rem] card-gold-hover text-center">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-truck-fast"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic" id="p1-title">ניידת ת"ש</h3>
                    <p class="text-gray-400 text-lg leading-relaxed" id="p1-desc">ניידת מגיעה לשטח עם ציוד לוגיסטי ופינוקים להרמת המורל בזמן אמת.</p>
                </div>
                <div class="glass p-12 rounded-[3rem] card-gold-hover text-center">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-house-chimney-heart"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic" id="p2-title">רווחה ומשפחה</h3>
                    <p class="text-gray-400 text-lg leading-relaxed" id="p2-desc">ימי משפחה ונופשים יחידתיים לחיזוק התא המשפחתי המלווה את הלוחם.</p>
                </div>
                <div class="glass p-12 rounded-[3rem] card-gold-hover text-center">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-handshake"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic" id="p3-title">נטוורקינג</h3>
                    <p class="text-gray-400 text-lg leading-relaxed" id="p3-desc">חיבור עסקי ותעסוקתי בין חברי העמותה באזרחות וסיוע הדדי לקידום.</p>
                </div>
                <div class="glass p-12 rounded-[3rem] card-gold-hover text-center">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-tags"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic" id="p4-title">מועדון צרכנות</h3>
                    <p class="text-gray-400 text-lg leading-relaxed" id="p4-desc">כוח קנייה מאוחד המעניק הנחות והטבות בלעדיות למשרתי החטיבה.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- הנהלה, נציגים וצוות -->
    <section id="management" class="py-32 bg-idf-dark border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-24">
                <h2 class="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 text-white" id="mgmt-title">הנהגת העמותה והצוות</h2>
                <p class="text-xl text-gray-500 font-light italic" id="mgmt-subtitle">הוועד המנהל, נציגי הגדודים וצוות העמותה</p>
                <div class="h-2 w-24 bg-idf-yellow mx-auto mt-8 rounded-full"></div>
            </div>

            <!-- הוועד המנהל -->
            <h3 class="text-3xl font-black mb-10 text-idf-yellow italic">הוועד המנהל והביקורת</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <!-- יו"ר -->
                <div class="p-10 rounded-[3rem] border-4 border-dashed border-white/10 flex flex-col items-center justify-center text-center bg-white/5">
                    <div class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/20 text-4xl mb-6"><i class="fa-solid fa-crown"></i></div>
                    <h3 class="text-2xl font-black text-white/40 italic" id="mgmt-chair">יו"ר העמותה</h3>
                    <p class="text-xs font-bold text-idf-yellow/40 mt-4 tracking-widest uppercase" id="mgmt-process">בתהליך מינוי</p>
                </div>
                
                <!-- מבקרת -->
                <div class="glass p-10 rounded-[3rem] text-center border-b-4 border-idf-yellow/50 bg-gradient-to-t from-idf-gold/10 to-transparent">
                    <div class="w-16 h-16 bg-idf-yellow text-idf-dark rounded-full flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg"><i class="fa-solid fa-user-shield"></i></div>
                    <h3 class="text-2xl font-black mb-2 text-white">רו"ח גל אדווה</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic" id="mgmt-auditor">מבקרת העמותה</p>
                    <p class="text-gray-400 text-sm leading-relaxed">אמונה על התקינות, השקיפות והביקורת המקצועית של העמותה.</p>
                </div>

                <!-- דני בלובשטיין (חבר ועד לא נציג גדוד) -->
                <div class="glass p-10 rounded-[3rem] text-center border-b-4 border-idf-yellow/50">
                    <div class="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center text-2xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black mb-2 text-white">דני בלובשטיין</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic" id="mgmt-board-1">חבר ועד מנהל</p>
                    <p class="text-gray-400 text-sm leading-relaxed">שותף בהובלת העמותה ובקביעת המדיניות והפעילות בשגרה ובחירום.</p>
                </div>
                
                <!-- מקום פנוי בוועד -->
                <div class="p-10 rounded-[3rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center">
                    <h3 class="text-xl font-bold text-white/10 italic">חבר ועד מנהל</h3>
                    <p class="text-xs font-bold text-idf-yellow/20 mt-2 tracking-widest uppercase" id="mgmt-process2">טרם אויש</p>
                </div>
            </div>

            <!-- הנהלת העמותה (ביצועי) -->
            <h3 class="text-3xl font-black mb-10 text-idf-yellow italic">הנהלת העמותה (צוות ביצועי)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                <div class="flex flex-col justify-center items-center p-8 glass rounded-3xl text-center">
                    <span class="font-black text-xl mb-3 text-white">מנכ"ל העמותה</span>
                    <span class="text-idf-gold font-bold italic bg-white/5 px-4 py-1 rounded-full text-sm">טרם מונה / פנוי</span>
                </div>
                <div class="flex flex-col justify-center items-center p-8 glass rounded-3xl text-center">
                    <span class="font-black text-xl mb-3 text-white">מנהל/ת פיתוח משאבים</span>
                    <span class="text-idf-gold font-bold italic bg-white/5 px-4 py-1 rounded-full text-sm">טרם מונה / פנוי</span>
                </div>
                <div class="flex flex-col justify-center items-center p-8 glass rounded-3xl text-center">
                    <span class="font-black text-xl mb-3 text-white">מנהל/ת רווחה</span>
                    <span class="text-idf-gold font-bold italic bg-white/5 px-4 py-1 rounded-full text-sm">טרם מונה / פנוי</span>
                </div>
            </div>
        </div>
    </section>

    <!-- גדודים ונציגים -->
    <section id="battalions" class="maneuver-bg py-32 border-y border-white/10">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-5xl md:text-8xl font-black italic tracking-tighter mb-24 text-white drop-shadow-lg" id="force-title">השדרה המבצעית</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- 1891 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col card-gold-hover shadow-2xl">
                    <div class="mb-8">
                        <h3 class="text-5xl font-black italic mb-2 text-white">1891</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.2em] uppercase italic" id="b1-name">"מגני יואב"</p>
                    </div>
                    <p class="text-lg text-gray-300 font-light mb-10 text-right leading-relaxed" id="b1-desc">מרחב לכיש, קריית גת ויואב. גדוד חי"ר המגן על השער הצפוני של הנגב.</p>
                    
                    <div class="mt-auto bg-black/40 p-6 rounded-2xl flex items-center justify-between border border-white/10">
                        <div class="text-right">
                            <span class="text-xs text-gray-400 font-bold block mb-1">נציג עמותה וחבר ועד</span>
                            <span class="text-white font-black text-xl">יואב הנר</span>
                        </div>
                        <i class="fa-solid fa-user-ninja text-2xl text-idf-green opacity-50"></i>
                    </div>
                </div>

                <!-- 1892 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col card-gold-hover shadow-2xl">
                    <div class="mb-8">
                        <h3 class="text-5xl font-black italic mb-2 text-white">1892</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.2em] uppercase italic" id="b2-name">"חורב"</p>
                    </div>
                    <p class="text-lg text-gray-300 font-light mb-10 text-right leading-relaxed" id="b2-desc">יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף, המגן פיזית על הבית.</p>
                    
                    <div class="mt-auto bg-black/40 p-6 rounded-2xl flex items-center justify-between border border-white/10">
                        <div class="text-right">
                            <span class="text-xs text-gray-400 font-bold block mb-1">נציג עמותה וחבר ועד</span>
                            <span class="text-white font-black text-xl">אלי כהן</span>
                        </div>
                        <i class="fa-solid fa-user-ninja text-2xl text-idf-green opacity-50"></i>
                    </div>
                </div>

                <!-- 1893 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col card-gold-hover shadow-2xl">
                    <div class="mb-8">
                        <h3 class="text-5xl font-black italic mb-2 text-white">1893</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.2em] uppercase italic" id="b3-name">"הר הנגב"</p>
                    </div>
                    <p class="text-lg text-gray-300 font-light mb-10 text-right leading-relaxed" id="b3-desc">דימונה, ערד, ירוחם ומצפה רמון. מודל "בני מקום" לשמירה הדוקה על הנגב.</p>
                    
                    <div class="mt-auto bg-black/40 p-6 rounded-2xl flex items-center justify-between border border-white/10">
                        <div class="text-right">
                            <span class="text-xs text-gray-400 font-bold block mb-1">נציג עמותה וחבר ועד</span>
                            <span class="text-white font-black text-xl">אורי שינדלר</span>
                        </div>
                        <i class="fa-solid fa-user-ninja text-2xl text-idf-green opacity-50"></i>
                    </div>
                </div>

                <!-- 1894 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col card-gold-hover shadow-2xl">
                    <div class="mb-8">
                        <h3 class="text-5xl font-black italic mb-2 text-white">1894</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.2em] uppercase italic" id="b4-name">"הלל"</p>
                    </div>
                    <p class="text-lg text-gray-300 font-light mb-10 text-right leading-relaxed" id="b4-desc">מורכב מיוצאי חיל הים. גדוד המשלב ניסיון מבצעי עשיר מהים והיבשה.</p>
                    
                    <div class="mt-auto bg-black/40 p-6 rounded-2xl flex items-center justify-between border border-white/10">
                        <div class="text-right">
                            <span class="text-xs text-gray-400 font-bold block mb-1">נציג עמותה וחבר ועד</span>
                            <span class="text-white font-black text-xl">יהונתן פרידמן</span>
                        </div>
                        <i class="fa-solid fa-user-ninja text-2xl text-idf-green opacity-50"></i>
                    </div>
                </div>

                <!-- 1895 -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col card-gold-hover shadow-2xl md:col-span-2 lg:col-span-1">
                    <div class="mb-8">
                        <h3 class="text-5xl font-black italic mb-2 text-white">1895</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.2em] uppercase italic" id="b5-name">"יעלה"</p>
                    </div>
                    <p class="text-lg text-gray-300 font-light mb-10 text-right leading-relaxed" id="b5-desc">העיר אילת ויישובי חבל אילות. הגדוד המגן על הגבול הדרומי של ישראל.</p>
                    
                    <div class="mt-auto bg-black/40 p-6 rounded-2xl flex items-center justify-between border border-white/10">
                        <div class="text-right">
                            <span class="text-xs text-gray-400 font-bold block mb-1">נציג עמותה וחבר ועד</span>
                            <span class="text-white font-black text-xl">חיים קמחי</span>
                        </div>
                        <i class="fa-solid fa-user-ninja text-2xl text-idf-green opacity-50"></i>
                    </div>
                </div>
            </div>
            
            <!-- נציג חטיבתי -->
            <div class="mt-12 max-w-2xl mx-auto glass p-8 rounded-3xl border border-idf-yellow/30 flex items-center justify-between bg-idf-yellow/5">
                <div class="text-right">
                    <span class="text-sm text-idf-yellow font-bold uppercase tracking-widest block mb-1">נציג החטיבה הרשמי</span>
                    <span class="text-white font-black text-3xl">מולי פז</span>
                </div>
                <i class="fa-solid fa-star text-4xl text-idf-yellow opacity-80"></i>
            </div>
        </div>
    </section>

    <!-- גיוס לחטיבה -->
    <section id="recruit" class="py-32 bg-idf-dark">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="glass p-12 md:p-24 rounded-[4rem] shadow-2xl border-t border-idf-yellow/20">
                <h2 class="text-5xl font-black text-white mb-6 italic tracking-tighter" id="recruit-title">גיוס לחטיבה</h2>
                <p class="text-2xl text-gray-400 mb-12 font-light" id="recruit-desc">מחפשים לוחמים ומפקדים להגנה על הבית.</p>
                <form class="space-y-8" onsubmit="event.preventDefault();">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                        <div class="space-y-2"><label class="text-xs font-black text-idf-yellow uppercase mr-4" id="label-name">שם מלא</label><input type="text" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold"></div>
                        <div class="space-y-2"><label class="text-xs font-black text-idf-yellow uppercase mr-4" id="label-phone">טלפון</label><input type="tel" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold"></div>
                    </div>
                    <button type="submit" class="w-full bg-idf-yellow text-idf-dark font-black text-2xl py-6 rounded-2xl hover:scale-[1.02] transition shadow-xl" id="btn-submit">שליחת פרטים</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-idf-dark py-24 border-t-8 border-idf-yellow">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-right">
            <div class="flex items-center gap-8">
                <div class="bg-white p-3 rounded-2xl h-28 w-28 flex items-center justify-center">
                    <img src="logo.png" alt="לוגו" class="max-h-full max-w-full object-contain" onerror="this.parentElement.style.display='none'">
                </div>
                <div class="border-r border-white/10 pr-8">
                    <span class="font-black text-4xl block italic leading-none">חטיבת נגבה 189</span>
                    <p class="text-slate-500 font-bold mt-2 uppercase tracking-widest text-sm" id="footer-tag">העמותה הרשמית למשרתים ומשפחותיהם</p>
                </div>
            </div>
            <div class="flex gap-12 text-5xl opacity-40">
                <a href="#" class="hover:text-idf-yellow transition"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="hover:text-idf-yellow transition"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </footer>

    <script>
        const translations = {
            he: {
                dir: 'rtl',
                navTitle: 'עמותת חטיבת נגבה 189',
                navSub: 'משפחה אחת. דרך אחת.',
                btnRecNav: 'התגייסו לחטיבה',
                heroTitle: 'הכוח שלנו הוא <br><span class="text-idf-yellow underline decoration-idf-yellow/20">האנשים שלנו.</span>',
                heroDesc: 'עמותת חטיבת המילואים 189 בונה קהילה לוחמת ותומכת - משדה הקרב ועד הבית.',
                btnJoin: 'מילוי טופס חבר',
                projTitle: 'העורף של הלוחמים',
                mgmtTitle: 'הנהגת העמותה והצוות',
                mgmtChair: 'יו"ר העמותה',
                mgmtProc: 'בתהליך מינוי',
                forceTitle: 'השדרה המבצעית',
                repL: 'נציג עמותה',
                recTitle: 'גיוס לחטיבה',
                btnSub: 'שליחת פרטים'
            },
            en: {
                dir: 'ltr',
                navTitle: 'Negba 189 Brigade NGO',
                navSub: 'One Family. One Way.',
                btnRecNav: 'Join the Brigade',
                heroTitle: 'Our Strength is <br><span class="text-idf-yellow underline decoration-idf-yellow/20">Our People.</span>',
                heroDesc: 'The 189 Reserve Brigade Association builds a fighting and supportive community - from the battlefield to home.',
                btnJoin: 'Fill Member Form',
                projTitle: 'The Soldiers\' Backbone',
                mgmtTitle: 'Leadership & Team',
                mgmtChair: 'NGO Chairman',
                mgmtProc: 'In Appointment Process',
                forceTitle: 'Operational Backbone',
                repL: 'NGO Representative',
                recTitle: 'Recruitment',
                btnSub: 'Submit Request'
            },
            fr: {
                dir: 'ltr',
                navTitle: 'Association Brigade 189',
                navSub: 'Une Famille. Un Chemin.',
                btnRecNav: 'Rejoindre la Brigade',
                heroTitle: 'Notre Force est <br><span class="text-idf-yellow underline decoration-idf-yellow/20">Notre Peuple.</span>',
                heroDesc: 'L\'association de la Brigade 189 bâtit une communauté combattante et solidaire - du front à la maison.',
                btnJoin: 'Formulaire Membre',
                projTitle: 'Le Soutien des Combattants',
                mgmtTitle: 'Direction et Équipe',
                mgmtChair: 'Président de l\'ONG',
                mgmtProc: 'En cours de nomination',
                forceTitle: 'Épine Dorsale Opérationnelle',
                repL: 'Délégué de l\'ONG',
                recTitle: 'Recrutement',
                btnSub: 'Envoyer la demande'
            }
        };

        function changeLanguage(lang) {
            const t = translations[lang];
            document.documentElement.lang = lang;
            document.documentElement.dir = t.dir;
            document.body.style.textAlign = t.dir === 'rtl' ? 'right' : 'left';
            
            // Re-align nav logo based on direction
            const navContainer = document.querySelector('nav .max-w-7xl');
            if(t.dir === 'rtl') {
                navContainer.classList.remove('flex-row-reverse');
            } else {
                navContainer.classList.add('flex-row-reverse');
            }
            
            document.getElementById('nav-title').innerText = t.navTitle;
            document.getElementById('nav-subtitle').innerText = t.navSub;
            document.getElementById('btn-recruit-nav').innerText = t.btnRecNav;
            document.getElementById('hero-title').innerHTML = t.heroTitle;
            document.getElementById('hero-desc').innerText = t.heroDesc;
            document.getElementById('btn-join-hero').innerText = t.btnJoin;
            document.getElementById('projects-title').innerText = t.projTitle;
            document.getElementById('mgmt-title').innerText = t.mgmtTitle;
            document.getElementById('mgmt-chair').innerText = t.mgmtChair;
            document.getElementById('mgmt-process').innerText = t.mgmtProc;
            document.getElementById('force-title').innerText = t.forceTitle;
            document.getElementById('recruit-title').innerText = t.recTitle;
            document.getElementById('btn-submit').innerText = t.btnSub;

            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById('btn-' + lang).classList.add('active');
        }
    </script>
</body>
</html>
