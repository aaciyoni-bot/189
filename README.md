<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | משפחה אחת. דרך אחת.</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
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
                            dark: '#0f1108',
                            brown: '#5c3a21',
                            gold: '#b45309'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        html { scroll-behavior: smooth; }
        body { font-family: 'Assistant', sans-serif; background-color: #0f1108; }
        h1, h2, h3, h4 { font-family: 'Rubik', sans-serif; }

        .bg-infantry {
            background: linear-gradient(rgba(15, 17, 8, 0.7), rgba(15, 17, 8, 0.9)), 
                        url('https://images.unsplash.com/photo-1590401416653-53530646199e?q=80&w=2000&auto=format&fit=crop');
            background-size: cover; background-position: center;
        }
        .bg-humvee {
            background: linear-gradient(rgba(15, 17, 8, 0.8), rgba(15, 17, 8, 0.8)), 
                        url('https://images.unsplash.com/photo-1533069129528-79659b8be56d?q=80&w=2000&auto=format&fit=crop');
            background-size: cover; background-position: center;
        }
        .bg-maneuver {
            background: linear-gradient(rgba(15, 17, 8, 0.85), rgba(15, 17, 8, 0.85)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2000&auto=format&fit=crop');
            background-size: cover; background-position: center;
        }
        .bg-cqb {
            background: linear-gradient(rgba(15, 17, 8, 0.9), rgba(15, 17, 8, 0.9)), 
                        url('https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=2000&auto=format&fit=crop');
            background-size: cover; background-position: center;
        }

        .glass {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-dark {
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .section-divider {
            height: 4px;
            background: linear-gradient(to left, transparent, #facc15, transparent);
            width: 100%;
        }
    </style>
</head>
<body class="text-white">

    <!-- Header / Nav -->
    <nav class="fixed w-full z-50 top-0 h-28 flex items-center bg-idf-dark/90 border-b border-idf-yellow/30 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
            <div class="flex items-center gap-6 shrink-0">
                <div class="bg-white p-2 rounded-2xl shadow-2xl h-24 w-24 flex items-center justify-center overflow-hidden transform hover:scale-105 transition duration-300">
                    <img src="logo.png" alt="לוגו" class="max-h-full max-w-full object-contain" 
                         onerror="this.src='https://via.placeholder.com/150x150?text=189'">
                </div>
                <div class="hidden sm:block">
                    <h1 class="font-black text-2xl md:text-4xl text-white tracking-tighter leading-none">עמותת חטיבת נגבה (189)</h1>
                    <p class="text-idf-yellow font-bold text-sm md:text-base mt-2 tracking-[0.2em] uppercase">משפחה אחת. דרך אחת.</p>
                </div>
            </div>
            <div class="hidden lg:flex items-center gap-10 font-bold text-lg">
                <a href="#vision" class="hover:text-idf-yellow transition underline-offset-8 hover:underline">חזון</a>
                <a href="#management" class="hover:text-idf-yellow transition underline-offset-8 hover:underline">הנהלה</a>
                <a href="#battalions" class="hover:text-idf-yellow transition underline-offset-8 hover:underline">גדודים</a>
                <a href="#recruit" class="bg-idf-yellow text-idf-dark px-10 py-3 rounded-2xl font-black hover:bg-white transition shadow-[0_0_20px_rgba(250,204,21,0.4)]">התגייסו לחטיבה</a>
            </div>
        </div>
    </nav>

    <!-- Hero / Infantry Intro -->
    <section class="bg-infantry min-h-screen flex items-center pt-28">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-right">
                <span class="inline-block px-4 py-1 bg-idf-yellow text-idf-dark font-black rounded-lg text-sm mb-6 uppercase tracking-widest animate-pulse">מהנגב באנו, על הנגב נגן</span>
                <h2 class="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter italic">
                    הכוח שלנו הוא <br><span class="text-idf-yellow underline decoration-idf-yellow/30">האנשים שלנו.</span>
                </h2>
                <p class="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed mb-12">
                    עמותת חטיבת המילואים 189 בונה קהילה לוחמת ותומכת - משדה הקרב ועד הבית.
                </p>
                <div class="flex flex-wrap gap-6">
                    <a href="#join" class="px-12 py-5 bg-white text-idf-dark font-black text-xl rounded-2xl hover:bg-idf-yellow transition shadow-2xl">מילוי טופס חבר</a>
                    <a href="#projects" class="px-12 py-5 border-2 border-white/20 backdrop-blur-md text-white font-black text-xl rounded-2xl hover:bg-white/10 transition">פעילות העמותה</a>
                </div>
            </div>
        </div>
    </section>

    <!-- NGO Projects / Humvee Background -->
    <section id="projects" class="bg-humvee py-32 relative">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-20">
                <h2 class="text-5xl font-black italic tracking-tighter mb-4">העורף של הלוחמים</h2>
                <p class="text-xl text-idf-yellow font-bold opacity-80 uppercase tracking-widest">משימות העמותה בשגרה ובחירום</p>
                <div class="h-1 w-32 bg-idf-yellow mt-4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Activity Card -->
                <div class="glass p-10 rounded-[2.5rem] card-modern">
                    <div class="w-16 h-16 bg-idf-yellow/20 text-idf-yellow rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                        <i class="fa-solid fa-truck-pickup"></i>
                    </div>
                    <h3 class="text-2xl font-black mb-4">ניידת ת"ש</h3>
                    <p class="text-gray-400 text-lg leading-relaxed">ניידת המגיעה לקווי הלחימה ולשטחי הכינוס עם ציוד לוגיסטי ופינוקים לשמירה על המורל.</p>
                </div>

                <div class="glass p-10 rounded-[2.5rem] card-modern">
                    <div class="w-16 h-16 bg-idf-yellow/20 text-idf-yellow rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                        <i class="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h3 class="text-2xl font-black mb-4">רווחה ומשפחה</h3>
                    <p class="text-gray-600 text-lg leading-relaxed">ימי משפחה, מתנות הוקרה ונופשים יחידתיים לחיזוק התא המשפחתי המלווה את הלוחם.</p>
                </div>

                <div class="glass p-10 rounded-[2.5rem] card-modern">
                    <div class="w-16 h-16 bg-idf-yellow/20 text-idf-yellow rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                        <i class="fa-solid fa-network-wired"></i>
                    </div>
                    <h3 class="text-2xl font-black mb-4">נטוורקינג</h3>
                    <p class="text-gray-400 text-lg leading-relaxed">חיבור עסקי ותעסוקתי בין חברי העמותה באזרחות, סיוע במציאת קריירה וקידום הדדי.</p>
                </div>

                <div class="glass p-10 rounded-[2.5rem] card-modern">
                    <div class="w-16 h-16 bg-idf-yellow/20 text-idf-yellow rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <h3 class="text-2xl font-black mb-4">מועדון צרכנות</h3>
                    <p class="text-gray-400 text-lg leading-relaxed">כוח קנייה מאוחד המעניק הטבות בלעדיות וחיסכון משמעותי לחברי העמותה ומשפחותיהם.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Symbol Section -->
    <section id="symbol" class="py-32 bg-idf-dark">
        <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
            <div class="w-full lg:w-1/2 flex justify-center">
                <div class="bg-white p-12 rounded-[3.5rem] shadow-[0_0_60px_rgba(255,255,255,0.05)] transform hover:rotate-2 transition duration-500">
                    <img src="logo.png" alt="סמל העמותה" class="w-full max-w-sm h-auto" onerror="this.src='https://via.placeholder.com/400x400?text=LOGO'">
                </div>
            </div>
            <div class="w-full lg:w-1/2">
                <h2 class="text-5xl font-black mb-10 italic">הסיפור מאחורי הסמל</h2>
                <div class="space-y-10">
                    <div class="flex gap-8 items-start group">
                        <div class="w-14 h-14 bg-idf-yellow/10 border border-idf-yellow/30 rounded-2xl flex items-center justify-center text-idf-yellow shrink-0 group-hover:bg-idf-yellow group-hover:text-idf-dark transition duration-300">
                            <i class="fa-solid fa-shield-halved text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-black text-idf-yellow mb-2">מגן האדמה והחול</h4>
                            <p class="text-gray-400 text-xl leading-relaxed font-light">המגן חצוי לחום בהיר (חולות המדבר) וחום כהה (אדמת הנגב היציבה), המייצג את המורשת המבצעית של החטיבה.</p>
                        </div>
                    </div>
                    <div class="flex gap-8 items-start group">
                        <div class="w-14 h-14 bg-idf-yellow/10 border border-idf-yellow/30 rounded-2xl flex items-center justify-center text-idf-yellow shrink-0 group-hover:bg-idf-yellow group-hover:text-idf-dark transition duration-300">
                            <i class="fa-solid fa-handshake text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="text-2xl font-black text-idf-yellow mb-2">לחיצת היד המשלבת</h4>
                            <p class="text-gray-400 text-xl leading-relaxed font-light">בלב המגן, לחיצת יד המאחדת את הצבעים. היא מסמלת את הסולידריות והקהילה האזרחית התומכת של העמותה.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Management / Infantry Ground Maneuver Background -->
    <section id="management" class="bg-maneuver py-32">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-24">
                <h2 class="text-6xl font-black italic mb-6">הוועד המנהל</h2>
                <p class="text-2xl text-gray-400 font-light italic">הנהגת העמותה המובילה את החזון והעשייה בשקיפות מלאה</p>
                <div class="h-2 w-32 bg-idf-yellow mx-auto mt-8"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Chairman (Empty) -->
                <div class="glass-dark p-10 rounded-[2.5rem] border-2 border-dashed border-white/20 text-center flex flex-col items-center justify-center min-h-[320px]">
                    <div class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/20 text-4xl mb-4"><i class="fa-solid fa-crown"></i></div>
                    <h3 class="text-2xl font-black text-white/30 italic">יו"ר העמותה</h3>
                    <p class="text-xs font-bold text-idf-yellow/40 mt-4 tracking-widest uppercase">בתהליך מינוי</p>
                </div>

                <!-- Yoav -->
                <div class="glass-dark p-10 rounded-[2.5rem] text-center border-b-8 border-idf-yellow/50">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-3xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-user-ninja"></i></div>
                    <h3 class="text-2xl font-black mb-2">יואב הנר</h3>
                    <p class="text-idf-yellow font-bold mb-6 italic">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed">מוביל תהליכי ארגון ובניית קהילה בשגרה ובמצבי חירום.</p>
                </div>

                <div class="glass-dark p-10 rounded-[2.5rem] text-center border-b-8 border-idf-yellow/50 text-right">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-3xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-user-ninja"></i></div>
                    <h3 class="text-2xl font-black mb-2 text-center">יהונתן פרידמן</h3>
                    <p class="text-idf-yellow font-bold mb-6 italic text-center">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed">אמון על פיתוח קשרי החוץ והתרחבות העמותה למחוזות חדשים.</p>
                </div>

                <div class="glass-dark p-10 rounded-[2.5rem] text-center border-b-8 border-idf-yellow/50">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-3xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-user-ninja"></i></div>
                    <h3 class="text-2xl font-black mb-2">דני בלובשטיין</h3>
                    <p class="text-idf-yellow font-bold mb-6 italic">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed">מרכז את תחום הלוגיסטיקה והפריסה המבצעית של העמותה.</p>
                </div>

                <div class="glass-dark p-10 rounded-[2.5rem] text-center border-b-8 border-idf-yellow/50">
                    <div class="w-20 h-20 bg-idf-yellow/10 text-idf-yellow rounded-3xl flex items-center justify-center text-3xl mb-8 mx-auto shadow-inner"><i class="fa-solid fa-user-ninja"></i></div>
                    <h3 class="text-2xl font-black mb-2">בר נוימן</h3>
                    <p class="text-idf-yellow font-bold mb-6 italic">חבר ועד</p>
                    <p class="text-gray-400 text-sm leading-relaxed">אחראי על תחום הרווחה והקשר הישיר עם משפחות החטיבה.</p>
                </div>

                <!-- Auditor -->
                <div class="glass-dark p-10 rounded-[2.5rem] text-center border-b-8 border-idf-yellow/50 bg-gradient-to-t from-idf-gold/10 to-transparent">
                    <div class="w-20 h-20 bg-idf-gold text-white rounded-3xl flex items-center justify-center text-3xl mb-8 mx-auto shadow-lg"><i class="fa-solid fa-user-shield"></i></div>
                    <h3 class="text-2xl font-black mb-2 leading-none">רו"ח גל אדווה</h3>
                    <p class="text-idf-yellow font-bold mb-6 italic uppercase tracking-tighter">מבקרת העמותה</p>
                    <p class="text-gray-400 text-sm leading-relaxed">אחראית על התקינות הכספית, השקיפות והתנהלותה התקנית של העמותה.</p>
                </div>

                <!-- Empty Seats -->
                <div class="glass-dark p-10 rounded-[2.5rem] border-2 border-dashed border-white/10 text-center flex flex-col items-center justify-center text-white/10">
                    <h3 class="text-xl font-bold italic">חבר ועד</h3>
                    <p class="text-xs font-bold uppercase tracking-widest mt-2">[פנוי]</p>
                </div>
                <div class="glass-dark p-10 rounded-[2.5rem] border-2 border-dashed border-white/10 text-center flex flex-col items-center justify-center text-white/10">
                    <h3 class="text-xl font-bold italic">חבר ועד</h3>
                    <p class="text-xs font-bold uppercase tracking-widest mt-2">[פנוי]</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Operational Team Section -->
    <section class="py-24 bg-idf-dark border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
                <h2 class="text-4xl font-black mb-12 text-idf-yellow italic italic underline decoration-white/10 underline-offset-8 leading-tight">צוות ביצועי ואנשי קשר</h2>
                <div class="space-y-4">
                    <div class="flex justify-between items-center p-6 glass rounded-2xl">
                        <span class="font-black text-xl">מנכ"ל העמותה</span>
                        <span class="text-idf-gold font-bold italic bg-white/5 px-4 py-1 rounded-full text-sm">טרם מונה</span>
                    </div>
                    <div class="flex justify-between items-center p-6 glass rounded-2xl">
                        <span class="font-black text-xl text-right leading-tight">מנהל/ת פיתוח משאבים</span>
                        <span class="text-idf-gold font-bold italic bg-white/5 px-4 py-1 rounded-full text-sm">טרם מונה</span>
                    </div>
                    <div class="flex justify-between items-center p-6 glass rounded-2xl">
                        <span class="font-black text-xl">מנהל/ת רווחה</span>
                        <span class="text-idf-gold font-bold italic bg-white/5 px-4 py-1 rounded-full text-sm">טרם מונה</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="text-4xl font-black mb-12 text-idf-yellow italic italic underline decoration-white/10 underline-offset-8 leading-tight">נציגי גדודים</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-6 glass rounded-2xl text-center">
                        <span class="block font-black text-2xl mb-1 italic">1891</span>
                        <span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span>
                    </div>
                    <div class="p-6 glass rounded-2xl text-center">
                        <span class="block font-black text-2xl mb-1 italic">1892</span>
                        <span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span>
                    </div>
                    <div class="p-6 glass rounded-2xl text-center">
                        <span class="block font-black text-2xl mb-1 italic">1893</span>
                        <span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span>
                    </div>
                    <div class="p-6 glass rounded-2xl text-center">
                        <span class="block font-black text-2xl mb-1 italic">1894</span>
                        <span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span>
                    </div>
                    <div class="p-6 glass rounded-2xl text-center md:col-span-2">
                        <span class="block font-black text-2xl mb-1 italic">1895</span>
                        <span class="text-xs text-idf-gold font-bold uppercase tracking-widest">[למילוי]</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Battalions / Territorial Section -->
    <section id="battalions" class="bg-infantry py-32">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-24">
                <h2 class="text-6xl font-black italic tracking-tighter">השדרה המבצעית</h2>
                <p class="text-2xl text-gray-400 mt-4 font-light">פריסה גיאוגרפית וכוח לחימה</p>
                <div class="h-2 w-32 bg-white/20 mx-auto mt-8 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- Battalion Card -->
                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow shadow-2xl flex flex-col card-modern">
                    <div class="mb-10 text-center">
                        <h3 class="text-4xl font-black italic">1891</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.3em] mt-2 uppercase">"מגני יואב"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right"><strong>גזרה:</strong> מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המגן על השער הצפוני של הנגב.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-black italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow shadow-2xl flex flex-col card-modern">
                    <div class="mb-10 text-center">
                        <h3 class="text-4xl font-black italic">1892</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.3em] mt-2 uppercase">"חורב"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right"><strong>גזרה:</strong> יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף, המגן פיזית על הבית והקהילה.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-black italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow shadow-2xl flex flex-col card-modern">
                    <div class="mb-10 text-center">
                        <h3 class="text-4xl font-black italic">1893</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.3em] mt-2 uppercase">"הר הנגב"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right"><strong>גזרה:</strong> דימונה, ערד, ירוחם ומצפה רמון. מודל "בני מקום" לשמירה על מרחב הנגב המרכזי והערבה.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-black italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow shadow-2xl flex flex-col card-modern">
                    <div class="mb-10 text-center">
                        <h3 class="text-4xl font-black italic">1894</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.3em] mt-2 uppercase">"הלל"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right"><strong>אופי:</strong> מורכב מיוצאי חיל הים. גדוד המשלב מיומנויות לחימה ייחודיות וניסיון מבצעי רב שנים.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-black italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>

                <div class="glass p-10 rounded-[3rem] border-b-8 border-idf-yellow shadow-2xl flex flex-col card-modern md:col-span-2 lg:col-span-1">
                    <div class="mb-10 text-center">
                        <h3 class="text-4xl font-black italic">1895</h3>
                        <p class="text-idf-yellow font-black text-xl tracking-[0.3em] mt-2 uppercase">"יעלה"</p>
                    </div>
                    <p class="text-xl text-gray-300 leading-relaxed font-light mb-10 text-right"><strong>גזרה:</strong> העיר אילת ויישובי חבל אילות. הגנה על הגבול הדרומי ביותר של מדינת ישראל.</p>
                    <div class="mt-auto bg-white/5 p-6 rounded-2xl text-center text-idf-gold font-black italic border border-white/5">נציג עמותה: טרם מונה</div>
                </div>
            </div>
        </div>
    </section>

    <!-- CQB / Recruit Section -->
    <section id="recruit" class="bg-cqb py-32 text-right">
        <div class="max-w-4xl mx-auto px-6">
            <div class="glass-dark rounded-[4rem] p-12 md:p-20 shadow-2xl border-t border-idf-yellow/20">
                <h2 class="text-5xl font-black text-white mb-6 italic tracking-tighter leading-tight">גיוס לחטיבה</h2>
                <p class="text-2xl text-gray-400 mb-12 font-light">אנחנו תמיד מחפשים לוחמים ומפקדים טובים שיצטרפו לשורותינו.</p>
                
                <form class="space-y-8" onsubmit="event.preventDefault();">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-2">
                            <label class="text-xs font-black text-idf-yellow uppercase tracking-widest mr-4">שם מלא</label>
                            <input type="text" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-black text-idf-yellow uppercase tracking-widest mr-4">טלפון ליצירת קשר</label>
                            <input type="tel" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-black text-idf-yellow uppercase tracking-widest mr-4">תפקיד צבאי</label>
                        <select class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold appearance-none cursor-pointer">
                            <option class="text-slate-900">לוחם / מפקד (רובאי 05+)</option>
                            <option class="text-slate-900">נהג משא כבד / מבצעי</option>
                            <option class="text-slate-900">חובש / רפואה</option>
                            <option class="text-slate-900">לוגיסטיקה וחימוש</option>
                        </select>
                    </div>
                    <button type="submit" class="w-full bg-idf-yellow text-idf-dark font-black text-2xl py-6 rounded-2xl hover:scale-[1.02] transition shadow-[0_20px_50px_rgba(250,204,21,0.3)] mt-6 uppercase italic">שליחת פרטים</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-idf-dark text-white py-24 border-t-8 border-idf-yellow">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-right">
                <div class="flex items-center gap-8">
                    <div class="bg-white p-3 rounded-2xl h-28 w-28 flex items-center justify-center shadow-2xl">
                        <img src="logo.png" alt="לוגו פוטר" class="max-h-full max-w-full object-contain" onerror="this.parentElement.style.display='none'">
                    </div>
                    <div class="border-r border-white/10 pr-8">
                        <span class="font-black text-4xl block tracking-tighter italic">חטיבת נגבה 189</span>
                        <p class="text-slate-500 font-bold mt-2 text-base tracking-[0.2em] uppercase">העמותה הרשמית למשרתים ומשפחותיהם</p>
                    </div>
                </div>
                <div class="flex gap-12 text-5xl">
                    <a href="#" class="text-white/20 hover:text-idf-yellow transition"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="text-white/20 hover:text-idf-yellow transition"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="mailto:info@189ngo.org.il" class="text-white/20 hover:text-idf-yellow transition"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
            <div class="border-t border-white/5 mt-20 pt-10 text-center text-slate-600 font-bold text-sm tracking-widest uppercase italic">
                &copy; 2024 עמותת חטיבה 189. כל הזכויות שמורות למשרתי החטיבה.
            </div>
        </div>
    </footer>

</body>
</html>
