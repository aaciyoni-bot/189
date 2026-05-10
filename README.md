<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה (189) - משפחה אחת</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700;900&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Heebo', 'sans-serif'] },
                    colors: {
                        idf: {
                            green: '#3d441e',
                            light: '#6b705c',
                            yellow: '#facc15',
                            dark: '#1a1d0b',
                            brown: '#78350f',
                            gold: '#b45309'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        html { scroll-behavior: smooth; }
        .hero-section {
            background: linear-gradient(rgba(26, 29, 11, 0.8), rgba(26, 29, 11, 0.8)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 font-sans">

    <!-- Navbar -->
    <nav class="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50 top-0 transition-all">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center">
                    <div class="ml-4">
                        <!-- Logo Fallback logic -->
                        <img src="logo.png" alt="לוגו" class="h-14 w-auto drop-shadow-sm" 
                             onerror="this.parentElement.innerHTML='<div class=\'bg-idf-green p-2 rounded-lg\'><i class=\'fa-solid fa-shield-halved text-white text-2xl\'></i></div>'">
                    </div>
                    <div>
                        <span class="font-black text-xl md:text-2xl text-idf-dark block">עמותת חטיבת נגבה (189)</span>
                        <span class="text-xs md:text-sm text-idf-light font-bold">משפחה אחת. דרך אחת.</span>
                    </div>
                </div>
                <div class="hidden lg:flex items-center space-x-8 space-x-reverse">
                    <a href="#projects" class="font-bold hover:text-idf-gold transition">פעילות</a>
                    <a href="#symbol" class="font-bold hover:text-idf-gold transition">הסמל שלנו</a>
                    <a href="#battalions" class="font-bold hover:text-idf-gold transition">גדודים</a>
                    <a href="#join" class="bg-idf-green text-white px-6 py-2.5 rounded-full font-black hover:bg-idf-dark transition shadow-md">הצטרפות</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="hero-section min-h-[85vh] flex items-center justify-center text-center text-white pt-20">
        <div class="max-w-4xl px-6">
            <h1 class="text-5xl md:text-8xl font-black mb-6 drop-shadow-2xl italic">"מהנגב באנו, על הנגב נגן"</h1>
            <p class="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-2xl mx-auto">
                הבית של לוחמי ומפקדי חטיבה 189. דואגים ללוחמים, מחבקים את המשפחות, ובונים קהילה חזקה ותומכת במילואים ובאזרחות.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#join" class="bg-idf-yellow text-idf-dark font-black text-xl px-10 py-5 rounded-xl hover:scale-105 transition shadow-2xl">הרשמה לעמותה</a>
                <a href="#recruit" class="bg-white/10 border-2 border-white/30 backdrop-blur-md text-white font-black text-xl px-10 py-5 rounded-xl hover:bg-white/20 transition">גיוס לחטיבה</a>
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-black text-idf-dark">הפעילות שלנו - העורף שלכם</h2>
                <div class="h-1.5 w-24 bg-idf-yellow mx-auto mt-4 rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Project Card -->
                <div class="p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition bg-slate-50 text-center">
                    <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-inner"><i class="fa-solid fa-gift"></i></div>
                    <h3 class="text-xl font-bold mb-3">ניידת ת"ש ופינוקים</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">ניידת ייעודית שמגיעה לשטח עם ציוד לוגיסטי ופינוקים להרמת המורל.</p>
                </div>
                <div class="p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition bg-slate-50 text-center">
                    <div class="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-inner"><i class="fa-solid fa-house-chimney-heart"></i></div>
                    <h3 class="text-xl font-bold mb-3">משפחות ונופשים</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">ימי משפחות, מתנות לחגים ונופשים יחידתיים לחיזוק התא המשפחתי.</p>
                </div>
                <div class="p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition bg-slate-50 text-center">
                    <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-inner"><i class="fa-solid fa-briefcase"></i></div>
                    <h3 class="text-xl font-bold mb-3">קהילת נטוורקינג</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">חיבור עסקי ותעסוקתי בין חברי העמותה באזרחות וסיוע הדדי.</p>
                </div>
                <div class="p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition bg-slate-50 text-center">
                    <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-inner"><i class="fa-solid fa-cart-shopping"></i></div>
                    <h3 class="text-xl font-bold mb-3">מועדון צרכנות</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">כוח קנייה מאוחד המעניק הנחות והטבות בלעדיות למשרתים.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Symbol Section -->
    <section id="symbol" class="py-24 bg-idf-dark text-white relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-black">סמל העמותה - משפחה אחת, דרך אחת</h2>
                <div class="h-1.5 w-24 bg-idf-yellow mx-auto mt-4 rounded-full"></div>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-16">
                <div class="w-full lg:w-1/2 flex justify-center">
                    <div class="bg-white p-6 rounded-3xl shadow-[0_0_50px_rgba(250,204,21,0.2)]">
                        <img src="logo.png" alt="לוגו עמותה" class="w-full max-w-sm h-auto" onerror="this.src='https://via.placeholder.com/350x350?text=189+NGO'">
                    </div>
                </div>
                <div class="w-full lg:w-1/2 space-y-8">
                    <div class="flex gap-4">
                        <div class="text-idf-yellow text-2xl mt-1"><i class="fa-solid fa-shield-halved"></i></div>
                        <div>
                            <h4 class="text-xl font-black mb-2 text-idf-yellow">מגן האדמה והחול</h4>
                            <p class="text-gray-300 leading-relaxed">המגן ההיסטורי חצוי לחום בהיר (חולות המדבר) וחום כהה (אדמת הנגב). זהו הבסיס המורשתי עליו נבנתה החטיבה.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="text-idf-yellow text-2xl mt-1"><i class="fa-solid fa-handshake"></i></div>
                        <div>
                            <h4 class="text-xl font-black mb-2 text-idf-yellow">לחיצת היד המשלבת</h4>
                            <p class="text-gray-300 leading-relaxed">בלב המגן, לחיצת יד המאחדת את הצבעים. היא מסמלת את הסולידריות, העזרה ההדדית והקשר האנושי הבלתי נתיק בין המשרתים.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="text-idf-yellow text-2xl mt-1"><i class="fa-solid fa-bolt"></i></div>
                        <div>
                            <h4 class="text-xl font-black mb-2 text-idf-yellow">החרב והוואדי</h4>
                            <p class="text-gray-300 leading-relaxed">החרב המרכזית וקווי השבר שמדמים את ערוצי הנחלים, מזכירים את השליחות המבצעית ואת תוואי השטח הייחודי עליו אנו מגינים.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Battalions -->
    <section id="battalions" class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-black text-idf-dark">גדודי החטיבה</h2>
                <p class="text-idf-light mt-4 font-bold">הכוח שלנו טמון בחיבור שבין הגזרות</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 1891 -->
                <div class="bg-white rounded-3xl overflow-hidden shadow-lg border-b-8 border-idf-yellow">
                    <div class="bg-idf-green p-6 text-center text-white">
                        <h3 class="text-2xl font-black">גדוד 1891</h3>
                        <p class="text-idf-yellow font-bold">"מגני יואב"</p>
                    </div>
                    <div class="p-8">
                        <p class="text-sm text-gray-600 mb-6 leading-relaxed"><strong>גזרה:</strong> מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המבוסס על "בני המקום" המגן על הגזרה הצפונית.</p>
                        <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-user-check text-idf-green"></i>
                            <div>
                                <span class="block text-xs font-bold text-gray-400">איש קשר בעמותה</span>
                                <span class="text-sm font-bold">אבי כהן | 050-1234567</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 1892 -->
                <div class="bg-white rounded-3xl overflow-hidden shadow-lg border-b-8 border-idf-yellow">
                    <div class="bg-idf-green p-6 text-center text-white">
                        <h3 class="text-2xl font-black">גדוד 1892</h3>
                        <p class="text-idf-yellow font-bold">"חורב"</p>
                    </div>
                    <div class="p-8">
                        <p class="text-sm text-gray-600 mb-6 leading-relaxed"><strong>גזרה:</strong> גדוד "חורב", המורכב מלוחמים בני העוטף. כוח רתום ומסור המהווה מכפיל כוח בהגנה על יישובי העוטף.</p>
                        <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-user-check text-idf-green"></i>
                            <div>
                                <span class="block text-xs font-bold text-gray-400">איש קשר בעמותה</span>
                                <span class="text-sm font-bold">דן לוי | 052-7654321</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 1893 -->
                <div class="bg-white rounded-3xl overflow-hidden shadow-lg border-b-8 border-idf-yellow">
                    <div class="bg-idf-green p-6 text-center text-white">
                        <h3 class="text-2xl font-black">גדוד 1893</h3>
                        <p class="text-idf-yellow font-bold">"הר הנגב"</p>
                    </div>
                    <div class="p-8">
                        <p class="text-sm text-gray-600 mb-6 leading-relaxed"><strong>גזרה:</strong> דימונה, ערד, ירוחם ומצפה רמון. מבוסס על מודל "בני מקום" לשמירה על מרחב הנגב המרכזי והדרומי.</p>
                        <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-user-check text-idf-green"></i>
                            <div>
                                <span class="block text-xs font-bold text-gray-400">איש קשר בעמותה</span>
                                <span class="text-sm font-bold">רון ישראלי | 054-9876543</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 1894 -->
                <div class="bg-white rounded-3xl overflow-hidden shadow-lg border-b-8 border-idf-yellow">
                    <div class="bg-idf-green p-6 text-center text-white">
                        <h3 class="text-2xl font-black">גדוד 1894</h3>
                        <p class="text-idf-yellow font-bold">"הלל"</p>
                    </div>
                    <div class="p-8">
                        <p class="text-sm text-gray-600 mb-6 leading-relaxed"><strong>אופי:</strong> מורכב מיוצאי חיל הים. עוגן משמעותי במערך הלחימה המשלב ניסיון מבצעי עשיר עם רוח התנדבות מיוחדת.</p>
                        <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-user-check text-idf-green"></i>
                            <div>
                                <span class="block text-xs font-bold text-gray-400">איש קשר בעמותה</span>
                                <span class="text-sm font-bold">יוסי שמעוני | 050-1122334</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 1895 -->
                <div class="bg-white rounded-3xl overflow-hidden shadow-lg border-b-8 border-idf-yellow">
                    <div class="bg-idf-green p-6 text-center text-white">
                        <h3 class="text-2xl font-black">גדוד 1895</h3>
                        <p class="text-idf-yellow font-bold">"יעלה"</p>
                    </div>
                    <div class="p-8">
                        <p class="text-sm text-gray-600 mb-6 leading-relaxed"><strong>גזרה:</strong> העיר אילת ויישובי חבל אילות. גדוד מילואים להגנה מרחבית המבוסס על תושבי האזור המגינים על הבית הדרומי.</p>
                        <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-3">
                            <i class="fa-solid fa-user-check text-idf-green"></i>
                            <div>
                                <span class="block text-xs font-bold text-gray-400">איש קשר בעמותה</span>
                                <span class="text-sm font-bold">אמיר גולן | 053-5566778</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Join Section -->
    <section id="join" class="py-24 bg-idf-green text-white">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-black mb-6">משרתים בחטיבה? בואו נתחבר.</h2>
            <p class="text-xl text-gray-200 mb-10">הצטרפו לעמותה כדי להשפיע, ליהנות ממועדון הצרכנות ולקבל גב חזק במילואים ובאזרחות.</p>
            <button class="bg-white text-idf-green font-black text-xl px-12 py-5 rounded-2xl shadow-2xl hover:scale-105 transition">
                מלאו טופס חבר עמותה
            </button>
        </div>
    </section>

    <!-- Recruit Form -->
    <section id="recruit" class="py-24 bg-white">
        <div class="max-w-3xl mx-auto px-6">
            <div class="bg-slate-50 p-10 rounded-[2.5rem] shadow-2xl border border-gray-200">
                <h2 class="text-3xl font-black text-center mb-8">מעוניינים להתגייס למילואים בחטיבה?</h2>
                <form class="space-y-6" onsubmit="event.preventDefault(); alert('הפנייה נשלחה בהצלחה!');">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="שם מלא" required class="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-idf-green outline-none">
                        <input type="tel" placeholder="טלפון" required class="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-idf-green outline-none">
                    </div>
                    <select class="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-idf-green outline-none">
                        <option value="" disabled selected>תפקיד מבוקש...</option>
                        <option>לוחם (רובאי 05 ומעלה)</option>
                        <option>נהג (משא כבד/מבצעי)</option>
                        <option>חובש קרבי</option>
                        <option>לוגיסטיקה וחימוש</option>
                    </select>
                    <button type="submit" class="w-full bg-idf-dark text-idf-yellow font-black text-xl py-5 rounded-xl hover:bg-black transition">שלח בקשת הצטרפות</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-idf-dark text-white py-16 border-t-8 border-idf-green">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="flex items-center">
                <img src="logo.png" alt="לוגו" class="h-10 w-auto ml-4" onerror="this.style.display='none'">
                <span class="font-black text-xl">עמותת חטיבת נגבה 189</span>
            </div>
            <div class="text-gray-400 text-sm">© 2024 כל הזכויות שמורות למשרתי החטיבה</div>
            <div class="flex gap-6 text-2xl">
                <a href="#" class="hover:text-idf-yellow transition"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="hover:text-idf-yellow transition"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </footer>

</body>
</html>
