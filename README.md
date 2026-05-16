<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | Negba 189 NGO</title>
    
    <!-- פונטים יוקרתיים -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;800&family=Rubik:wght@300;500;700;900&display=swap" rel="stylesheet">
    
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
                        idf: {
                            green: '#37412a', /* ירוק זית עמוק */
                            yellow: '#facc15',
                            dark: '#141610',
                            gold: '#d97706',
                            panel: 'rgba(255, 255, 255, 0.05)'
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        body { background-color: #141610; color: #f8fafc; transition: all 0.3s ease; overflow-x: hidden; }
        h1, h2, h3, h4, .rubik { font-family: 'Rubik', sans-serif; font-weight: 800; }
        html { scroll-behavior: smooth; }

        /* רקעים עמידים לתקלות - גם אם תמונה נחסמת, הרקע ייראה צבאי ומרשים */
        .bg-hero {
            background: linear-gradient(to bottom right, rgba(20, 22, 16, 0.9), rgba(55, 65, 42, 0.8)), 
                        url('https://images.unsplash.com/photo-1595350550478-f71f6d3a9544?auto=format&fit=crop&q=80&w=2000');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        
        .bg-tactical {
            background: linear-gradient(135deg, #141610 0%, #2a311f 100%);
            border-top: 1px solid rgba(255,255,255,0.05);
        }

        .bg-pattern {
            background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        /* כרטיסיות שקופות פרימיום */
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-bottom: 4px solid transparent;
            transition: all 0.4s ease;
        }
        .glass-card:hover {
            transform: translateY(-5px);
            border-bottom-color: #facc15;
            background: rgba(255, 255, 255, 0.06);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
        }

        /* בורר שפות */
        .lang-btn { opacity: 0.5; transition: 0.3s; padding: 4px 12px; border-radius: 99px; }
        .lang-btn.active { opacity: 1; background: #facc15; color: #141610; }
        
        /* חיתוך הלוגו - מתקן את הרווחים הלבנים בתמונה שלך */
        .logo-zoom { transform: scale(1.3); margin-top: 5px; }
    </style>
</head>
<body class="text-right">

    <!-- Header / Navbar -->
    <nav class="fixed w-full z-50 top-0 bg-idf-dark/95 backdrop-blur-lg border-b-2 border-idf-yellow/50 shadow-2xl h-32 flex items-center transition-all">
        <div class="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            
            <!-- לוגו וכותרת -->
            <div class="flex items-center gap-4 lg:gap-6">
                <!-- קונטיינר ענק ללוגו שחותך את השוליים הלבנים -->
                <div class="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.2)] border-2 border-idf-yellow overflow-hidden flex items-center justify-center shrink-0 z-10">
                    <img src="logo.png" alt="לוגו" class="w-full h-full object-contain logo-zoom" onerror="this.src='https://placehold.co/200x200/ffffff/37412a?text=189'">
                </div>
                <div class="hidden sm:block">
                    <h1 class="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white" data-i18n="navTitle">עמותת חטיבת נגבה 189</h1>
                    <p class="text-idf-yellow font-bold text-sm md:text-base uppercase tracking-widest mt-1 opacity-90" data-i18n="navSub">משפחה אחת. דרך אחת.</p>
                </div>
            </div>

            <!-- בורר שפות וניווט -->
            <div class="flex flex-col items-end gap-3">
                <div class="flex items-center gap-1 bg-white/10 p-1 rounded-full border border-white/20">
                    <button onclick="changeLang('he')" class="lang-btn active text-sm font-bold" id="btn-he">עברית</button>
                    <button onclick="changeLang('en')" class="lang-btn text-sm font-bold text-white" id="btn-en">English</button>
                    <button onclick="changeLang('fr')" class="lang-btn text-sm font-bold text-white" id="btn-fr">Français</button>
                </div>
                <div class="hidden lg:flex gap-6 font-bold text-gray-300">
                    <a href="#mission" class="hover:text-idf-yellow transition" data-i18n="navMission">מטרות</a>
                    <a href="#networking" class="hover:text-idf-yellow transition" data-i18n="navNet">נטוורקינג</a>
                    <a href="#battalions" class="hover:text-idf-yellow transition" data-i18n="navBat">הגדודים</a>
                    <a href="#management" class="hover:text-idf-yellow transition" data-i18n="navMgmt">הנהלה</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-hero min-h-screen flex items-center justify-center pt-32 pb-16 relative">
        <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
            <span class="inline-block px-5 py-2 bg-idf-yellow text-idf-dark font-black rounded-lg text-lg mb-8 uppercase tracking-widest italic shadow-lg" data-i18n="heroTag">מהנגב באנו, על הנגב נגן</span>
            <h2 class="text-5xl md:text-7xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tighter drop-shadow-2xl" data-i18n="heroTitle">
                הכוח האמיתי שלנו <br><span class="text-idf-yellow">הוא האנשים.</span>
            </h2>
            <p class="text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-lg" data-i18n="heroDesc">
                עמותת חטיבת נגבה 189 הוקמה כדי להוות גב חזק, קהילה תומכת ומשפחה מלוכדת ללוחמים, למפקדים ולמשפחות – גם בשדה הקרב וגם בחיים האזרחיים.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#join" class="px-10 py-5 bg-idf-yellow text-idf-dark font-black text-xl rounded-2xl hover:bg-white transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)]" data-i18n="btnJoin">הצטרפות לעמותה</a>
                <a href="#networking" class="px-10 py-5 border-2 border-white/30 backdrop-blur-sm text-white font-black text-xl rounded-2xl hover:bg-white/10 transition" data-i18n="btnNet">לקהילת הנטוורקינג</a>
            </div>
        </div>
    </section>

    <!-- מטרות העמותה (Mission) -->
    <section id="mission" class="bg-tactical py-24 relative bg-pattern">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter" data-i18n="missionTitle">מטרות ויעדי העמותה</h2>
                <div class="h-2 w-24 bg-idf-yellow mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <!-- יעד 1 -->
                <div class="glass-card p-10 rounded-[2rem]">
                    <div class="w-20 h-20 bg-idf-green rounded-full flex items-center justify-center text-idf-yellow text-3xl mb-6 mx-auto border border-idf-yellow/30"><i class="fa-solid fa-shield-heart"></i></div>
                    <h3 class="text-2xl font-black mb-3" data-i18n="m1Title">ליווי הלוחמים</h3>
                    <p class="text-gray-400 leading-relaxed" data-i18n="m1Desc">מתן תמיכה רגשית, כלכלית ופיזית ללוחמים ולמפקדים במילואים. הפעלת ניידות ת"ש לרווחת הכוחות בשטח.</p>
                </div>
                <!-- יעד 2 -->
                <div class="glass-card p-10 rounded-[2rem]">
                    <div class="w-20 h-20 bg-idf-green rounded-full flex items-center justify-center text-idf-yellow text-3xl mb-6 mx-auto border border-idf-yellow/30"><i class="fa-solid fa-house-chimney-user"></i></div>
                    <h3 class="text-2xl font-black mb-3" data-i18n="m2Title">מעטפת למשפחות</h3>
                    <p class="text-gray-400 leading-relaxed" data-i18n="m2Desc">דאגה לעורף: תמיכה בנשות ואנשי המילואים ובילדים בבית, ארגון ימי גיבוש, חלוקת שי לחגים וסיוע במצבי חירום.</p>
                </div>
                <!-- יעד 3 -->
                <div class="glass-card p-10 rounded-[2rem]">
                    <div class="w-20 h-20 bg-idf-green rounded-full flex items-center justify-center text-idf-yellow text-3xl mb-6 mx-auto border border-idf-yellow/30"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                    <h3 class="text-2xl font-black mb-3" data-i18n="m3Title">מועדון צרכנות</h3>
                    <p class="text-gray-400 leading-relaxed" data-i18n="m3Desc">מינוף כוח הקנייה המאוחד של משרתי החטיבה להשגת הטבות, הנחות והסדרים ייחודיים ברשתות ובשירותים שונים.</p>
                </div>
                <!-- יעד 4 -->
                <div class="glass-card p-10 rounded-[2rem]">
                    <div class="w-20 h-20 bg-idf-green rounded-full flex items-center justify-center text-idf-yellow text-3xl mb-6 mx-auto border border-idf-yellow/30"><i class="fa-solid fa-monument"></i></div>
                    <h3 class="text-2xl font-black mb-3" data-i18n="m4Title">הנצחה ומורשת</h3>
                    <p class="text-gray-400 leading-relaxed" data-i18n="m4Desc">שימור המורשת המפוארת של חטיבת נגבה, הנחלת הסיפור לדורות הבאים, ודאגה להנצחת חללי החטיבה לעד.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- קהילת נטוורקינג (חדש ומפורט) -->
    <section id="networking" class="py-24 bg-[#1a1d12] border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="bg-gradient-to-r from-idf-green to-idf-dark rounded-[3rem] p-10 md:p-16 border border-idf-yellow/20 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                
                <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div class="lg:w-1/2 text-center md:text-right">
                        <span class="text-idf-yellow font-bold uppercase tracking-widest text-lg mb-2 block" data-i18n="netSub">רשת הקשרים החטיבתית</span>
                        <h2 class="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter" data-i18n="netTitle">קהילה של 2,500 אחים לנשק ולאזרחות</h2>
                        <p class="text-xl text-gray-300 leading-relaxed mb-8" data-i18n="netDesc">
                            בעמותה ישנם למעלה מ-2,500 משרתים שהם גם אזרחים, מנהלים, יזמים ובעלי מקצוע. הקמנו רשת נטוורקינג פנימית שנועדה לייצר שיתופי פעולה עסקיים, לספק עבודה אחד לשני, ולעזור לכל מילואימניק למצוא את דרכו באזרחות.
                        </p>
                    </div>
                    
                    <div class="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <!-- אינדקס בעלי מקצוע -->
                        <div class="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition cursor-pointer group">
                            <i class="fa-solid fa-briefcase text-5xl text-idf-yellow mb-4 group-hover:scale-110 transition"></i>
                            <h3 class="text-2xl font-bold text-white mb-2" data-i18n="netPro">אינדקס בעלי מקצוע</h3>
                            <p class="text-gray-400 text-sm" data-i18n="netProDesc">צריכים שיפוצניק, עורך דין או רואה חשבון? תעבדו עם האחים שלכם לחטיבה!</p>
                            <button class="mt-6 px-6 py-2 bg-white/10 rounded-full text-sm font-bold text-white" data-i18n="btnEnter">היכנסו לאינדקס</button>
                        </div>
                        
                        <!-- לוח דרושים ומשרות -->
                        <div class="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition cursor-pointer group">
                            <i class="fa-solid fa-user-tie text-5xl text-idf-yellow mb-4 group-hover:scale-110 transition"></i>
                            <h3 class="text-2xl font-bold text-white mb-2" data-i18n="netJobs">לוח משרות ודרושים</h3>
                            <p class="text-gray-400 text-sm" data-i18n="netJobsDesc">מחפשים עבודה? מגייסים עובדים לחברה שלכם? זה המקום לפרסם ולמצוא.</p>
                            <button class="mt-6 px-6 py-2 bg-white/10 rounded-full text-sm font-bold text-white" data-i18n="btnEnter">ללוח המשרות</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- גדודי החטיבה -->
    <section id="battalions" class="bg-tactical py-32 bg-pattern">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-24">
                <h2 class="text-6xl font-black text-white italic tracking-tighter mb-4" data-i18n="batTitle">השדרה המבצעית</h2>
                <div class="h-2 w-24 bg-idf-yellow mx-auto rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 1891 -->
                <div class="glass-card p-10 rounded-[3rem]">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-5xl font-black text-white">1891</h3>
                        <i class="fa-solid fa-location-crosshairs text-3xl text-idf-yellow opacity-50"></i>
                    </div>
                    <p class="text-idf-yellow font-bold text-xl uppercase tracking-widest mb-4" data-i18n="b1Name">"מגני יואב"</p>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between mb-6">
                        <div>
                            <span class="text-xs text-gray-400 block mb-1" data-i18n="repLabel">נציג גדוד בוועד המנהל</span>
                            <span class="font-black text-white text-lg">יואב הנר</span>
                        </div>
                    </div>
                </div>

                <!-- 1892 -->
                <div class="glass-card p-10 rounded-[3rem]">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-5xl font-black text-white">1892</h3>
                        <i class="fa-solid fa-bolt text-3xl text-idf-yellow opacity-50"></i>
                    </div>
                    <p class="text-idf-yellow font-bold text-xl uppercase tracking-widest mb-4" data-i18n="b2Name">"חורב"</p>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between mb-6">
                        <div>
                            <span class="text-xs text-gray-400 block mb-1" data-i18n="repLabel">נציג גדוד בוועד המנהל</span>
                            <span class="font-black text-white text-lg">אלי כהן</span>
                        </div>
                    </div>
                </div>

                <!-- 1893 -->
                <div class="glass-card p-10 rounded-[3rem]">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-5xl font-black text-white">1893</h3>
                        <i class="fa-solid fa-mountain text-3xl text-idf-yellow opacity-50"></i>
                    </div>
                    <p class="text-idf-yellow font-bold text-xl uppercase tracking-widest mb-4" data-i18n="b3Name">"הר הנגב"</p>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between mb-6">
                        <div>
                            <span class="text-xs text-gray-400 block mb-1" data-i18n="repLabel">נציג גדוד בוועד המנהל</span>
                            <span class="font-black text-white text-lg">אורי שינדלר</span>
                        </div>
                    </div>
                </div>

                <!-- 1894 -->
                <div class="glass-card p-10 rounded-[3rem]">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-5xl font-black text-white">1894</h3>
                        <i class="fa-solid fa-anchor text-3xl text-idf-yellow opacity-50"></i>
                    </div>
                    <p class="text-idf-yellow font-bold text-xl uppercase tracking-widest mb-4" data-i18n="b4Name">"הלל"</p>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between mb-6">
                        <div>
                            <span class="text-xs text-gray-400 block mb-1" data-i18n="repLabel">נציג גדוד בוועד המנהל</span>
                            <span class="font-black text-white text-lg">יהונתן פרידמן</span>
                        </div>
                    </div>
                </div>

                <!-- 1895 -->
                <div class="glass-card p-10 rounded-[3rem] lg:col-span-2">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div class="flex gap-4 items-center mb-4 md:mb-0">
                            <h3 class="text-5xl font-black text-white">1895</h3>
                            <p class="text-idf-yellow font-bold text-xl uppercase tracking-widest" data-i18n="b5Name">"יעלה"</p>
                        </div>
                        <i class="fa-solid fa-shield-cat text-4xl text-idf-yellow opacity-50"></i>
                    </div>
                    <div class="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between w-full md:w-1/2">
                        <div>
                            <span class="text-xs text-gray-400 block mb-1" data-i18n="repLabel">נציג גדוד בוועד המנהל</span>
                            <span class="font-black text-white text-lg">חיים קמחי</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- נציג החטיבה -->
            <div class="mt-8 bg-idf-yellow text-idf-dark p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-2xl">
                <div class="text-center md:text-right mb-4 md:mb-0">
                    <span class="text-sm font-bold uppercase tracking-widest block mb-1" data-i18n="brigadeRep">נציג החטיבה הרשמי</span>
                    <span class="font-black text-4xl">מולי פז</span>
                </div>
                <i class="fa-solid fa-star text-5xl opacity-40"></i>
            </div>
        </div>
    </section>

    <!-- הנהלה, ועד ומבקרים -->
    <section id="management" class="py-32 bg-[#10120d]">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-24">
                <h2 class="text-5xl font-black text-white mb-4 tracking-tighter" data-i18n="mgmtTitle">הנהגת העמותה</h2>
                <div class="h-2 w-24 bg-idf-yellow mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- הוועד המנהל והביקורת -->
                <div>
                    <h3 class="text-3xl font-black text-idf-yellow mb-8 border-b border-white/10 pb-4" data-i18n="boardTitle">הוועד המנהל והביקורת</h3>
                    <div class="space-y-4">
                        <!-- יו"ר -->
                        <div class="glass-card p-5 flex justify-between items-center rounded-xl border-dashed border-2 border-white/20">
                            <span class="font-bold text-white text-lg" data-i18n="chair">יו"ר הוועד המנהל</span>
                            <span class="text-gray-500 font-bold text-sm bg-black/50 px-3 py-1 rounded" data-i18n="vacant">פנוי / טרם מונה</span>
                        </div>
                        
                        <!-- חברי ועד מנציגי הגדודים (אוזכרו כבר, אפשר לרשום רק את החיצוניים כדי לא ליצור כפילות, אבל ביקשת שיהיו מפורטים) -->
                        <div class="glass-card p-5 flex justify-between items-center rounded-xl">
                            <span class="font-bold text-gray-300 text-lg">דני בלובשטיין</span>
                            <span class="text-idf-yellow font-bold text-sm" data-i18n="boardMember">חבר ועד מנהל</span>
                        </div>
                        <div class="glass-card p-5 flex justify-between items-center rounded-xl">
                            <span class="font-bold text-gray-300 text-lg">בר נוימן</span>
                            <span class="text-idf-yellow font-bold text-sm" data-i18n="boardMember">חבר ועד מנהל</span>
                        </div>

                        <!-- מבקרת פנים -->
                        <div class="glass-card p-5 flex justify-between items-center rounded-xl border-l-4 border-idf-yellow mt-6">
                            <span class="font-black text-white text-lg">רו"ח גל אדווה</span>
                            <span class="text-idf-yellow font-bold text-sm bg-idf-yellow/10 px-3 py-1 rounded uppercase tracking-wider" data-i18n="auditor">מבקרת העמותה</span>
                        </div>
                    </div>
                </div>

                <!-- צוות ביצועי -->
                <div>
                    <h3 class="text-3xl font-black text-idf-yellow mb-8 border-b border-white/10 pb-4" data-i18n="execTitle">הנהלת העמותה (צוות ביצועי)</h3>
                    <div class="space-y-4">
                        <div class="glass-card p-5 flex justify-between items-center rounded-xl">
                            <span class="font-bold text-white text-lg" data-i18n="ceo">מנכ"ל/ית העמותה</span>
                            <span class="text-gray-500 font-bold text-sm bg-black/50 px-3 py-1 rounded" data-i18n="unassigned">ללא אדם מוגדר</span>
                        </div>
                        <div class="glass-card p-5 flex justify-between items-center rounded-xl">
                            <span class="font-bold text-white text-lg" data-i18n="hrDir">מנהל/ת רווחה</span>
                            <span class="text-gray-500 font-bold text-sm bg-black/50 px-3 py-1 rounded" data-i18n="unassigned">ללא אדם מוגדר</span>
                        </div>
                        <div class="glass-card p-5 flex justify-between items-center rounded-xl">
                            <span class="font-bold text-white text-lg" data-i18n="devDir">מנהל/ת פיתוח משאבים</span>
                            <span class="text-gray-500 font-bold text-sm bg-black/50 px-3 py-1 rounded" data-i18n="unassigned">ללא אדם מוגדר</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#0a0c05] py-20 border-t-4 border-idf-yellow">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-right">
            <div class="flex items-center gap-6">
                <!-- לוגו בפוטר גם כן מוגדל בצורה חכמה -->
                <div class="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 shrink-0">
                    <img src="logo.png" alt="לוגו" class="w-full h-full object-contain scale-[1.3] mt-1" onerror="this.src='https://placehold.co/100/ffffff/000?text=189'">
                </div>
                <div>
                    <span class="font-black text-3xl block text-white" data-i18n="navTitle">עמותת חטיבת נגבה 189</span>
                    <p class="text-gray-500 font-bold mt-1 uppercase tracking-widest text-sm" data-i18n="footerSub">העמותה הרשמית למשרתים ומשפחותיהם</p>
                </div>
            </div>
            <div class="text-gray-600 text-sm" data-i18n="copyright">
                &copy; 2024 עמותת חטיבה 189. כל הזכויות שמורות.
            </div>
        </div>
    </footer>

    <script>
        // מילון שפות מלא כדי לא לפגוע במבנה ה-HTML של הדף
        const dict = {
            navTitle: { he: 'עמותת חטיבת נגבה 189', en: '189 Negba NGO', fr: 'ONG Brigade Negba 189' },
            navSub: { he: 'משפחה אחת. דרך אחת.', en: 'One Family. One Way.', fr: 'Une Famille. Un Chemin.' },
            navMission: { he: 'מטרות', en: 'Mission', fr: 'Mission' },
            navNet: { he: 'נטוורקינג', en: 'Networking', fr: 'Réseautage' },
            navBat: { he: 'הגדודים', en: 'Battalions', fr: 'Bataillons' },
            navMgmt: { he: 'הנהלה', en: 'Management', fr: 'Direction' },
            heroTag: { he: 'מהנגב באנו, על הנגב נגן', en: 'From the Negev, Defending the Negev', fr: 'Du Néguev, Défendant le Néguev' },
            heroTitle: { he: 'הכוח האמיתי שלנו <br><span class="text-idf-yellow">הוא האנשים.</span>', en: 'Our True Power <br><span class="text-idf-yellow">Is Our People.</span>', fr: 'Notre Vraie Force <br><span class="text-idf-yellow">Sont Nos Gens.</span>' },
            heroDesc: { 
                he: 'עמותת חטיבת נגבה 189 הוקמה כדי להוות גב חזק, קהילה תומכת ומשפחה מלוכדת ללוחמים, למפקדים ולמשפחות – גם בשדה הקרב וגם בחיים האזרחיים.',
                en: 'The 189 Negba Brigade NGO was established to be a strong backbone, a supportive community, and a united family for soldiers, commanders, and families - on the battlefield and in civilian life.',
                fr: 'L\'ONG de la Brigade 189 Negba a été créée pour être un soutien solide, une communauté et une famille unie pour les soldats et les familles - sur le champ de bataille et dans la vie civile.'
            },
            btnJoin: { he: 'הצטרפות לעמותה', en: 'Join the NGO', fr: 'Rejoindre l\'ONG' },
            btnNet: { he: 'לקהילת הנטוורקינג', en: 'To Networking Community', fr: 'Réseau de la Communauté' },
            missionTitle: { he: 'מטרות ויעדי העמותה', en: 'Goals & Vision', fr: 'Objectifs et Vision' },
            m1Title: { he: 'ליווי הלוחמים', en: 'Supporting Soldiers', fr: 'Soutien aux Soldats' },
            m1Desc: { he: 'מתן תמיכה רגשית, כלכלית ופיזית ללוחמים ולמפקדים במילואים. הפעלת ניידות ת"ש לרווחת הכוחות בשטח.', en: 'Providing emotional, financial, and physical support. Operating welfare mobile units.', fr: 'Fournir un soutien émotionnel, financier et physique. Unités mobiles de bien-être.' },
            m2Title: { he: 'מעטפת למשפחות', en: 'Family Backbone', fr: 'Soutien Familial' },
            m2Desc: { he: 'דאגה לעורף: תמיכה בנשות ואנשי המילואים ובילדים בבית, ארגון ימי גיבוש, חלוקת שי לחגים וסיוע במצבי חירום.', en: 'Caring for the home front: supporting spouses and children, organizing family days.', fr: 'Soutien des conjoints et des enfants, organisation de journées familiales.' },
            m3Title: { he: 'מועדון צרכנות', en: 'Members Club', fr: 'Club Membres' },
            m3Desc: { he: 'מינוף כוח הקנייה המאוחד של משרתי החטיבה להשגת הטבות, הנחות והסדרים ייחודיים.', en: 'Leveraging unified purchasing power for exclusive discounts and benefits.', fr: 'Tirer parti du pouvoir d\'achat unifié pour des réductions exclusives.' },
            m4Title: { he: 'הנצחה ומורשת', en: 'Heritage & Legacy', fr: 'Héritage et Mémoire' },
            m4Desc: { he: 'שימור המורשת המפוארת של חטיבת נגבה, הנחלת הסיפור לדורות הבאים, ודאגה להנצחת חללי החטיבה לעד.', en: 'Preserving the brigade legacy and eternally memorializing our fallen.', fr: 'Préserver l\'héritage de la brigade et commémorer éternellement nos morts.' },
            netSub: { he: 'רשת הקשרים החטיבתית', en: 'Brigade Network', fr: 'Réseau de la Brigade' },
            netTitle: { he: 'קהילה של 2,500 אחים לנשק ולאזרחות', en: 'A Community of 2,500 Brothers in Arms', fr: 'Une Communauté de 2 500 Frères d\'Armes' },
            netDesc: { he: 'בעמותה ישנם למעלה מ-2,500 משרתים... הקמנו רשת נטוורקינג פנימית שנועדה לייצר שיתופי פעולה עסקיים, לספק עבודה אחד לשני, ולעזור לכל מילואימניק למצוא את דרכו באזרחות.', en: 'We established an internal networking system to generate business collaborations, provide work for each other, and help reservists navigate civilian careers.', fr: 'Nous avons créé un système de réseau interne pour générer des collaborations commerciales et aider les réservistes.' },
            netPro: { he: 'אינדקס בעלי מקצוע', en: 'Professionals Index', fr: 'Index des Professionnels' },
            netProDesc: { he: 'צריכים שיפוצניק, עורך דין או רואה חשבון? תעבדו עם האחים שלכם לחטיבה!', en: 'Need a contractor, lawyer, or accountant? Work with your brigade brothers!', fr: 'Besoin d\'un avocat ou d\'un comptable ? Travaillez avec vos frères !' },
            netJobs: { he: 'לוח משרות ודרושים', en: 'Job Board', fr: 'Offres d\'Emploi' },
            netJobsDesc: { he: 'מחפשים עבודה? מגייסים עובדים לחברה שלכם? זה המקום לפרסם ולמצוא.', en: 'Looking for a job? Hiring? This is the place to post and find.', fr: 'Recherche d\'emploi ? C\'est l\'endroit pour publier et trouver.' },
            btnEnter: { he: 'היכנסו', en: 'Enter', fr: 'Entrer' },
            batTitle: { he: 'השדרה המבצעית', en: 'Operational Forces', fr: 'Forces Opérationnelles' },
            b1Name: { he: '"מגני יואב"', en: '"Mageney Yoav"', fr: '"Défenseurs de Yoav"' },
            b2Name: { he: '"חורב"', en: '"Horev"', fr: '"Horev"' },
            b3Name: { he: '"הר הנגב"', en: '"Har HaNegev"', fr: '"Mont Néguev"' },
            b4Name: { he: '"הלל"', en: '"Hallel"', fr: '"Hallel"' },
            b5Name: { he: '"יעלה"', en: '"Yaala"', fr: '"Yaala"' },
            repLabel: { he: 'נציג גדוד בוועד המנהל', en: 'Battalion Board Rep', fr: 'Représentant Bataillon' },
            brigadeRep: { he: 'נציג החטיבה הרשמי', en: 'Official Brigade Rep', fr: 'Représentant Brigade' },
            mgmtTitle: { he: 'הנהגת העמותה', en: 'NGO Leadership', fr: 'Direction de l\'ONG' },
            boardTitle: { he: 'הוועד המנהל והביקורת', en: 'Board of Directors & Audit', fr: 'Conseil d\'Administration' },
            chair: { he: 'יו"ר הוועד המנהל', en: 'Chairman of the Board', fr: 'Président du Conseil' },
            vacant: { he: 'פנוי / טרם מונה', en: 'Vacant', fr: 'Vacant' },
            boardMember: { he: 'חבר ועד מנהל', en: 'Board Member', fr: 'Membre du Conseil' },
            auditor: { he: 'מבקרת העמותה', en: 'NGO Auditor', fr: 'Auditeur de l\'ONG' },
            execTitle: { he: 'הנהלת העמותה (צוות ביצועי)', en: 'Executive Team', fr: 'Équipe Exécutive' },
            ceo: { he: 'מנכ"ל/ית העמותה', en: 'CEO', fr: 'PDG' },
            hrDir: { he: 'מנהל/ת רווחה', en: 'Welfare Director', fr: 'Directeur du Bien-être' },
            devDir: { he: 'מנהל/ת פיתוח משאבים', en: 'Resource Development Dir.', fr: 'Directeur des Ressources' },
            unassigned: { he: 'ללא אדם מוגדר', en: 'Unassigned', fr: 'Non attribué' },
            footerSub: { he: 'העמותה הרשמית למשרתים ומשפחותיהם', en: 'The Official NGO for Soldiers and Families', fr: 'L\'ONG Officielle pour les Soldats' },
            copyright: { he: '© 2024 עמותת חטיבה 189. כל הזכויות שמורות.', en: '© 2024 Brigade 189 NGO. All rights reserved.', fr: '© 2024 Brigade 189 ONG. Tous droits réservés.' }
        };

        function changeLang(lang) {
            // Update document direction
            const dir = (lang === 'he') ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
            document.documentElement.dir = dir;
            document.body.style.textAlign = dir === 'rtl' ? 'right' : 'left';
            
            // Re-align elements depending on LTR/RTL
            const navFlex = document.querySelector('nav .max-w-7xl');
            if (dir === 'ltr') {
                navFlex.style.flexDirection = 'row-reverse';
            } else {
                navFlex.style.flexDirection = 'row';
            }

            // Update translation text safely using data-attributes
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key] && dict[key][lang]) {
                    el.innerHTML = dict[key][lang];
                }
            });

            // Update buttons visually
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById('btn-' + lang).classList.add('active');
        }
    </script>
</body>
</html>
