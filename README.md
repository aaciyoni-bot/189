<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | רשמי</title>
    
    <!-- פונטים מודרניים - Rubik ו-Assistant -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;700&family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Assistant', 'Rubik', 'sans-serif'],
                        heading: ['Rubik', 'sans-serif'],
                    },
                    colors: {
                        idf: {
                            green: '#3d441e',
                            yellow: '#facc15',
                            dark: '#0f1108',
                            gold: '#b45309'
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        body { font-family: 'Assistant', 'Rubik', sans-serif; background-color: #0f1108; overflow-x: hidden; }
        h1, h2, h3, h4, .rubik { font-family: 'Rubik', sans-serif; font-weight: 700; }
        
        /* רקעים סינמטיים */
        .hero-bg {
            background: linear-gradient(rgba(15, 17, 8, 0.8), rgba(15, 17, 8, 0.8)), 
                        url('https://images.unsplash.com/photo-1590401416653-53530646199e?q=80&w=2000&auto=format&fit=crop');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        
        .maneuver-bg {
            background: linear-gradient(rgba(15, 17, 8, 0.85), rgba(15, 17, 8, 0.85)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2000&auto=format&fit=crop');
            background-size: cover; background-position: center;
        }

        .humvee-bg {
            background: linear-gradient(rgba(15, 17, 8, 0.9), rgba(15, 17, 8, 0.9)), 
                        url('https://images.unsplash.com/photo-1533069129528-79659b8be56d?q=80&w=2000&auto=format&fit=crop');
            background-size: cover; background-position: center;
        }

        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s ease;
        }
        .glass-panel:hover {
            border-color: #facc15;
            background: rgba(255, 255, 255, 0.05);
        }
        
        .container-custom {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        html { scroll-behavior: smooth; }
    </style>
</head>
<body class="text-white text-right">

    <!-- Navbar מיוצב עם לוגו מוגדל -->
    <nav class="fixed w-full z-50 top-0 h-28 flex items-center bg-idf-dark/95 border-b-2 border-idf-yellow/30 backdrop-blur-md">
        <div class="container-custom w-full flex justify-between items-center">
            <!-- ימין: לוגו מוגדל -->
            <div class="flex items-center gap-6 shrink-0">
                <div class="bg-white p-2 rounded-2xl shadow-2xl h-20 w-20 md:h-24 md:w-24 flex items-center justify-center overflow-hidden border border-white/20">
                    <img src="לוגו עמותה.png" alt="לוגו" class="max-h-full max-w-full object-contain" 
                         onerror="this.src='https://via.placeholder.com/150?text=189'">
                </div>
                <div class="hidden md:block">
                    <h1 class="text-2xl md:text-3xl font-black text-white leading-none tracking-tighter uppercase italic">עמותת חטיבת נגבה 189</h1>
                    <p class="text-idf-yellow font-bold text-sm mt-1 tracking-[0.2em] uppercase opacity-80">משפחה אחת. דרך אחת.</p>
                </div>
            </div>

            <!-- מרכז: ניווט -->
            <div class="hidden lg:flex items-center gap-10 font-bold text-lg">
                <a href="#projects" class="hover:text-idf-yellow transition">פעילות</a>
                <a href="#management" class="hover:text-idf-yellow transition">הנהלה</a>
                <a href="#battalions" class="hover:text-idf-yellow transition">גדודים</a>
            </div>

            <!-- שמאל: כפתור הצטרפות -->
            <div class="shrink-0">
                <a href="#recruit" class="bg-idf-yellow text-idf-dark px-10 py-3 rounded-2xl font-black text-lg hover:bg-white transition shadow-[0_0_20px_rgba(250,204,21,0.3)]">התגייסו לחטיבה</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-bg min-h-screen flex items-center justify-center pt-28">
        <div class="container-custom text-center">
            <span class="inline-block px-4 py-1 bg-idf-yellow text-idf-dark font-black rounded-lg text-sm mb-8 uppercase tracking-widest italic">מהנגב באנו, על הנגב נגן</span>
            <h2 class="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter italic">
                הכוח שלנו הוא <br><span class="text-idf-yellow underline decoration-idf-yellow/20">האנשים שלנו.</span>
            </h2>
            <p class="text-2xl md:text-4xl text-gray-300 font-light max-w-4xl mx-auto leading-tight mb-12">
                עמותת חטיבת המילואים 189 בונה קהילה לוחמת ותומכת - <br><strong>במילואים ובאזרחות.</strong>
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#join" class="px-14 py-6 bg-white text-idf-dark font-black text-2xl rounded-2xl hover:bg-idf-yellow transition shadow-2xl hover:scale-105">מילוי טופס חבר</a>
                <a href="#projects" class="px-14 py-6 border-2 border-white/20 backdrop-blur-md text-white font-black text-2xl rounded-2xl hover:bg-white/10 transition">פעילות העמותה</a>
            </div>
        </div>
    </section>

    <!-- הפעילות שלנו -->
    <section id="projects" class="humvee-bg py-32 border-y border-white/5">
        <div class="container-custom">
            <div class="mb-20 text-center md:text-right">
                <h2 class="text-6xl font-black italic mb-4">העורף של הלוחמים</h2>
                <div class="h-2 w-32 bg-idf-yellow rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div class="glass-panel p-10 rounded-[3rem]">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto"><i class="fa-solid fa-truck-fast"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic">ניידת ת"ש</h3>
                    <p class="text-gray-400 text-lg leading-relaxed">ניידת המגיעה לשטח עם ציוד לוגיסטי ופינוקים להרמת המורל.</p>
                </div>
                <div class="glass-panel p-10 rounded-[3rem]">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto"><i class="fa-solid fa-house-chimney-heart"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic">רווחה ומשפחה</h3>
                    <p class="text-gray-400 text-lg leading-relaxed">ימי משפחה ונופשים יחידתיים לחיזוק התא המשפחתי המלווה.</p>
                </div>
                <div class="glass-panel p-10 rounded-[3rem]">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto"><i class="fa-solid fa-handshake"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic">נטוורקינג</h3>
                    <p class="text-gray-400 text-lg leading-relaxed">חיבור עסקי ותעסוקתי בין חברי העמותה באזרחות וסיוע הדדי.</p>
                </div>
                <div class="glass-panel p-10 rounded-[3rem]">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-4xl mb-8 mx-auto"><i class="fa-solid fa-tags"></i></div>
                    <h3 class="text-2xl font-black mb-4 italic">מועדון צרכנות</h3>
                    <p class="text-gray-400 text-lg leading-relaxed">כוח קנייה מאוחד המעניק הנחות והטבות בלעדיות למשרתים.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- הוועד המנהל -->
    <section id="management" class="py-32 bg-idf-dark">
        <div class="container-custom">
            <div class="text-center mb-20">
                <h2 class="text-6xl font-black italic tracking-tighter mb-4">הוועד המנהל</h2>
                <p class="text-2xl text-gray-500 font-light italic">הנהגת העמותה המובילה את החזון והעשייה</p>
                <div class="h-2 w-24 bg-idf-yellow mx-auto mt-6"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- יו"ר -->
                <div class="p-10 rounded-[3rem] border-4 border-dashed border-white/10 flex flex-col items-center justify-center text-center bg-white/5">
                    <h3 class="text-3xl font-black text-white/20 italic">יו"ר העמותה</h3>
                    <p class="text-xs font-bold text-idf-yellow/40 mt-4 tracking-widest">[בתהליך מינוי]</p>
                </div>
                <!-- חברים -->
                <div class="glass-panel p-8 rounded-[3rem] text-center">
                    <h3 class="text-2xl font-black mb-2 text-white">יואב הנר</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed">תיאור על פועלו של יואב הנר במסגרת העמותה והחטיבה.</p>
                </div>
                <div class="glass-panel p-8 rounded-[3rem] text-center">
                    <h3 class="text-2xl font-black mb-2 text-white">יהונתן פרידמן</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed">תיאור על פועלו של יהונתן פרידמן במסגרת העמותה.</p>
                </div>
                <div class="glass-panel p-8 rounded-[3rem] text-center">
                    <h3 class="text-2xl font-black mb-2 text-white">דני בלובשטיין</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed">תיאור על פועלו של דני בלובשטיין במסגרת העמותה.</p>
                </div>
                <div class="glass-panel p-8 rounded-[3rem] text-center">
                    <h3 class="text-2xl font-black mb-2 text-white">בר נוימן</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase text-sm italic">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed">תיאור על פועלו של בר נוימן במסגרת העמותה.</p>
                </div>
                <!-- מבקרת -->
                <div class="glass-panel p-8 rounded-[3rem] text-center bg-idf-yellow/5 border-idf-yellow/30">
                    <h3 class="text-2xl font-black text-idf-yellow mb-2">רו"ח גל אדווה</h3>
                    <p class="text-white font-bold mb-4 uppercase text-sm italic">מבקרת העמותה</p>
                    <p class="text-gray-400 text-sm leading-relaxed">אמונה על התקינות, השקיפות והביקורת המקצועית.</p>
                </div>
                <div class="p-10 rounded-[3rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center">
                    <h3 class="text-xl font-bold text-white/10 italic">חבר ועד</h3>
                </div>
                <div class="p-10 rounded-[3rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center">
                    <h3 class="text-xl font-bold text-white/10 italic">חבר ועד</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- אנשי קשר וניהול ביצועי -->
    <section class="py-24 maneuver-bg border-y border-white/10">
        <div class="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h2 class="text-4xl font-black mb-12 text-idf-yellow italic tracking-tighter">צוות ביצועי</h2>
                <div class="space-y-4">
                    <div class="flex justify-between items-center p-6 glass-panel rounded-2xl">
                        <span class="font-black text-xl italic">מנכ"ל העמותה</span>
                        <span class="text-idf-gold font-bold italic">[פנוי]</span>
                    </div>
                    <div class="flex justify-between items-center p-6 glass-panel rounded-2xl text-right">
                        <span class="font-black text-xl italic leading-tight">מנהל/ת פיתוח משאבים</span>
                        <span class="text-idf-gold font-bold italic">[פנוי]</span>
                    </div>
                    <div class="flex justify-between items-center p-6 glass-panel rounded-2xl">
                        <span class="font-black text-xl italic">מנהל/ת רווחה</span>
                        <span class="text-idf-gold font-bold italic">[פנוי]</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="text-4xl font-black mb-12 text-idf-yellow italic tracking-tighter">נציגי גדודים</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="p-6 glass-panel rounded-2xl text-center"><span class="block font-black text-2xl italic">1891</span><span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span></div>
                    <div class="p-6 glass-panel rounded-2xl text-center"><span class="block font-black text-2xl italic">1892</span><span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span></div>
                    <div class="p-6 glass-panel rounded-2xl text-center"><span class="block font-black text-2xl italic">1893</span><span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span></div>
                    <div class="p-6 glass-panel rounded-2xl text-center"><span class="block font-black text-2xl italic">1894</span><span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span></div>
                    <div class="p-6 glass-panel rounded-2xl text-center col-span-2 md:col-span-1"><span class="block font-black text-2xl italic">1895</span><span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span></div>
                </div>
            </div>
        </div>
    </section>

    <!-- גדודי החטיבה - השדרה המבצעית (כל 5 הגדודים) -->
    <section id="battalions" class="bg-infantry py-32">
        <div class="container-custom">
            <h2 class="text-6xl font-black text-center italic mb-24 tracking-tighter">השדרה המבצעית</h2>
            
            <!-- Grid of 5 Battalions -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                <!-- 1891 -->
                <div class="glass-panel p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1891</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic">"מגני יואב"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right">גזרה: מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המבוסס על "בני המקום" המגן על השער הצפוני של הנגב.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-bold italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

                <!-- 1892 -->
                <div class="glass-panel p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1892</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic">"חורב"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right">גזרה: יישובי עוטף עזה. גדוד מילואים להגנה מרחבית המורכב מלוחמים בני העוטף, המגן פיזית על הבית והקהילה.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-bold italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

                <!-- 1893 -->
                <div class="glass-panel p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1893</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic">"הר הנגב"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right">גזרה: דימונה, ערד, ירוחם ומצפה רמון. גדוד מילואים מבוסס מודל "בני מקום" לשמירה הדוקה על מרחב הנגב המרכזי והערבה.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-bold italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

                <!-- 1894 (Middle Row Center if layout permits) -->
                <div class="glass-panel p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col lg:col-start-1">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1894</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic">"הלל"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right">אופי: מורכב מיוצאי חיל הים. גדוד חי"ר מילואים המשלב ניסיון מבצעי עשיר מעולם הים והיבשה לכדי כוח מתמרן ומיומן.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-bold italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

                <!-- 1895 -->
                <div class="glass-panel p-10 rounded-[3rem] border-b-8 border-idf-yellow flex flex-col">
                    <div class="text-center mb-10">
                        <h3 class="text-5xl font-black italic">1895</h3>
                        <p class="text-idf-yellow font-black text-xl mt-2 tracking-widest uppercase italic">"יעלה"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right">גזרה: העיר אילת ויישובי חבל אילות. גדוד מילואים להגנה מרחבית המבוסס על תושבי האזור המגינים על הגזרה הדרומית ביותר.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-bold italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

            </div>
        </div>
    </section>

    <!-- גיוס לחטיבה - CQB Background -->
    <section id="recruit" class="py-32 bg-idf-dark border-t border-idf-yellow/20 relative overflow-hidden">
        <div class="container-custom max-w-4xl relative z-10">
            <div class="glass-panel p-12 md:p-20 rounded-[4rem] shadow-2xl">
                <h2 class="text-5xl font-black italic mb-6 text-white tracking-tighter text-center md:text-right">גיוס לחטיבה</h2>
                <p class="text-2xl text-gray-400 mb-12 font-light text-center md:text-right">אנחנו תמיד מחפשים לוחמים ומפקדים טובים שיצטרפו להגנה על הבית.</p>
                
                <form class="space-y-8" onsubmit="event.preventDefault();">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                        <div class="space-y-2">
                            <label class="text-xs font-black text-idf-yellow uppercase tracking-widest mr-4">שם מלא</label>
                            <input type="text" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-black text-idf-yellow uppercase tracking-widest mr-4">טלפון</label>
                            <input type="tel" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-idf-yellow text-idf-dark font-black text-2xl py-6 rounded-2xl hover:scale-[1.02] transition shadow-[0_20px_50px_rgba(250,204,21,0.3)] uppercase italic">שליחת פרטים להצטרפות</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-idf-dark text-white py-24 border-t-8 border-idf-yellow">
        <div class="container-custom flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-right">
            <div class="flex items-center gap-8">
                <div class="bg-white p-3 rounded-2xl h-24 w-24 flex items-center justify-center shadow-2xl">
                    <img src="לוגו עמותה.png" alt="לוגו" class="max-h-full max-w-full object-contain" onerror="this.parentElement.style.display='none'">
                </div>
                <div class="border-r border-white/10 pr-8">
                    <span class="font-black text-4xl block italic leading-none">חטיבת נגבה 189</span>
                    <p class="text-gray-500 font-bold mt-2 uppercase tracking-widest text-sm">העמותה הרשמית למשרתים ומשפחותיהם</p>
                </div>
            </div>
            <div class="flex gap-12 text-5xl opacity-40">
                <a href="#" class="hover:text-idf-yellow transition"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="hover:text-idf-yellow transition"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="mailto:info@189ngo.org.il" class="hover:text-idf-yellow transition"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <div class="mt-20 pt-10 border-t border-white/5 text-center text-gray-700 font-bold text-xs uppercase tracking-[0.3em]">
            &copy; 2024 עמותת חטיבה 189. כל הזכויות שמורות למשרתי החטיבה.
        </div>
    </footer>

</body>
</html>
