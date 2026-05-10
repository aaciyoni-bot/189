<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | משפחה אחת</title>
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
        .hero-section {
            background: linear-gradient(rgba(26, 29, 11, 0.85), rgba(26, 29, 11, 0.7)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074&auto=format&fit=crop');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        .card-modern { transition: all 0.3s ease; }
        .card-modern:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; right: 0; background-color: #facc15; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
    </style>
</head>
<body class="bg-slate-50 text-slate-900 overflow-x-hidden text-right">

    <!-- Navbar -->
    <nav class="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 top-0 h-24 flex items-center border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
            <div class="flex items-center gap-4 md:gap-6 shrink-0">
                <div class="h-20 w-20 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-50 p-1">
                    <img src="logo.png" alt="לוגו" class="max-h-full max-w-full object-contain" 
                         onerror="this.src='https://via.placeholder.com/150x150?text=189'">
                </div>
                <div class="flex flex-col">
                    <span class="font-black text-xl md:text-3xl text-idf-dark leading-tight tracking-tighter">עמותת חטיבת נגבה</span>
                    <span class="text-xs md:text-sm text-idf-gold font-bold uppercase tracking-widest leading-none">משפחה אחת. דרך אחת.</span>
                </div>
            </div>
            <div class="hidden lg:flex items-center gap-8">
                <a href="#projects" class="nav-link font-bold text-idf-dark transition text-lg">פעילות</a>
                <a href="#management" class="nav-link font-bold text-idf-dark transition text-lg">הנהלה</a>
                <a href="#battalions" class="nav-link font-bold text-idf-dark transition text-lg">גדודים</a>
                <a href="#recruit" class="bg-idf-green text-white px-8 py-3 rounded-2xl font-black hover:bg-idf-dark transition shadow-lg">התגייסו לחטיבה</a>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <section class="hero-section min-h-[85vh] flex items-center pt-24 text-white">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <h1 class="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight drop-shadow-2xl">
                "מהנגב באנו,<br><span class="text-idf-yellow italic">על הנגב נגן"</span>
            </h1>
            <p class="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                הבית הקהילתי של לוחמי ומפקדי חטיבת המילואים 189.<br>
                <strong>עוטפים את המשרתים, מחזקים את המשפחות.</strong>
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#join" class="bg-idf-yellow text-idf-dark font-black text-xl px-12 py-5 rounded-2xl hover:bg-white transition shadow-2xl">הרשמה לעמותה</a>
                <a href="#recruit" class="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-black text-xl px-12 py-5 rounded-2xl hover:bg-white/20 transition">גיוס למילואים</a>
            </div>
        </div>
    </section>

    <!-- הוועד המנהל -->
    <section id="management" class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-5xl font-black text-idf-dark italic tracking-tighter">הוועד המנהל</h2>
                <p class="text-xl text-slate-500 mt-4">הנהגת העמותה המובילה את החזון והעשייה</p>
                <div class="h-1.5 w-32 bg-idf-yellow mx-auto mt-6 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- יו"ר -->
                <div class="p-8 rounded-3xl bg-slate-50 border-2 border-dashed border-gray-200 text-center flex flex-col items-center justify-center min-h-[250px]">
                    <div class="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-3xl mb-4"><i class="fa-solid fa-user-tie"></i></div>
                    <h3 class="text-2xl font-black text-gray-400 italic">יו"ר העמותה</h3>
                    <p class="text-sm text-gray-400 mt-2">בתהליך מינוי</p>
                </div>

                <!-- יואב הנר -->
                <div class="card-modern p-8 rounded-3xl bg-white shadow-sm border border-slate-100 text-center">
                    <div class="w-20 h-20 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">יואב הנר</h3>
                    <p class="text-idf-gold font-bold mb-4">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">כאן יופיעו כמה מילים על פועלו ותפקידו של יואב בעמותה ובחטיבה.</p>
                </div>

                <!-- יהונתן פרידמן -->
                <div class="card-modern p-8 rounded-3xl bg-white shadow-sm border border-slate-100 text-center">
                    <div class="w-20 h-20 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">יהונתן פרידמן</h3>
                    <p class="text-idf-gold font-bold mb-4">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">כאן יופיעו כמה מילים על פועלו ותפקידו של יהונתן בעמותה ובחטיבה.</p>
                </div>

                <!-- דני בלובשטיין -->
                <div class="card-modern p-8 rounded-3xl bg-white shadow-sm border border-slate-100 text-center">
                    <div class="w-20 h-20 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">דני בלובשטיין</h3>
                    <p class="text-idf-gold font-bold mb-4">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">כאן יופיעו כמה מילים על פועלו ותפקידו של דני בעמותה ובחטיבה.</p>
                </div>

                <!-- בר נוימן -->
                <div class="card-modern p-8 rounded-3xl bg-white shadow-sm border border-slate-100 text-center">
                    <div class="w-20 h-20 bg-idf-green/10 text-idf-green rounded-full flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">בר נוימן</h3>
                    <p class="text-idf-gold font-bold mb-4">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">כאן יופיעו כמה מילים על פועלו ותפקידו של בר בעמותה ובחטיבה.</p>
                </div>

                <!-- גל אדווה -->
                <div class="card-modern p-8 rounded-3xl bg-idf-dark text-white text-center">
                    <div class="w-20 h-20 bg-idf-yellow text-idf-dark rounded-full flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg"><i class="fa-solid fa-user-shield"></i></div>
                    <h3 class="text-2xl font-black">רו"ח גל אדווה</h3>
                    <p class="text-idf-yellow font-bold mb-4">מבקרת העמותה</p>
                    <p class="text-gray-300 text-sm leading-relaxed font-light">אמונה על הביקורת והתנהלותה התקינה של העמותה בהתאם לחוק.</p>
                </div>

                <!-- מקום פנוי 1 -->
                <div class="p-8 rounded-3xl bg-slate-50 border-2 border-dashed border-gray-200 text-center flex flex-col items-center justify-center min-h-[250px]">
                    <h3 class="text-xl font-bold text-gray-400">חבר ועד</h3>
                    <p class="text-sm text-gray-400 mt-2">בתהליך מינוי</p>
                </div>

                <!-- מקום פנוי 2 -->
                <div class="p-8 rounded-3xl bg-slate-50 border-2 border-dashed border-gray-200 text-center flex flex-col items-center justify-center min-h-[250px]">
                    <h3 class="text-xl font-bold text-gray-400">חבר ועד</h3>
                    <p class="text-sm text-gray-400 mt-2">בתהליך מינוי</p>
                </div>
            </div>
        </div>
    </section>

    <!-- אנשי קשר וניהול ביצועי -->
    <section class="py-24 bg-idf-dark text-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- צוות העמותה -->
                <div>
                    <h2 class="text-3xl font-black mb-10 text-idf-yellow">צוות מוביל</h2>
                    <div class="space-y-6">
                        <div class="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/10">
                            <span class="font-bold text-lg">מנכ"ל העמותה</span>
                            <span class="text-gray-400">[למילוי שם וטלפון]</span>
                        </div>
                        <div class="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/10">
                            <span class="font-bold text-lg">מנהל/ת פיתוח משאבים</span>
                            <span class="text-gray-400">[למילוי שם וטלפון]</span>
                        </div>
                        <div class="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/10">
                            <span class="font-bold text-lg">מנהל/ת רווחה</span>
                            <span class="text-gray-400">[למילוי שם וטלפון]</span>
                        </div>
                    </div>
                </div>

                <!-- נציגי גדודים -->
                <div>
                    <h2 class="text-3xl font-black mb-10 text-idf-yellow">נציגי גדודים</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <span class="block font-bold">גדוד 1891</span>
                            <span class="text-xs text-gray-400">[למילוי איש קשר]</span>
                        </div>
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <span class="block font-bold">גדוד 1892</span>
                            <span class="text-xs text-gray-400">[למילוי איש קשר]</span>
                        </div>
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <span class="block font-bold">גדוד 1893</span>
                            <span class="text-xs text-gray-400">[למילוי איש קשר]</span>
                        </div>
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <span class="block font-bold">גדוד 1894</span>
                            <span class="text-xs text-gray-400">[למילוי איש קשר]</span>
                        </div>
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <span class="block font-bold">גדוד 1895</span>
                            <span class="text-xs text-gray-400">[למילוי איש קשר]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- גדודי החטיבה (מעודכן ללא שמות) -->
    <section id="battalions" class="py-32 bg-slate-50">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-5xl font-black text-center text-idf-dark mb-24 tracking-tighter italic">השדרה המרכזית</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- 1891 -->
                <div class="bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group overflow-hidden">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1891</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase">"מגני יואב"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>גזרה:</strong> מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המבוסס על "בני המקום".</p>
                        <div class="mt-auto bg-slate-50 p-5 rounded-2xl border border-dashed border-gray-300 text-center">
                            <span class="text-sm font-bold text-gray-400">איש קשר בעמותה: [למילוי]</span>
                        </div>
                    </div>
                </div>
                <!-- 1892 -->
                <div class="bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group overflow-hidden">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1892</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase">"חורב"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>גזרה:</strong> יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף, המהווה מכפיל כוח בהגנה על הבית.</p>
                        <div class="mt-auto bg-slate-50 p-5 rounded-2xl border border-dashed border-gray-300 text-center">
                            <span class="text-sm font-bold text-gray-400">איש קשר בעמותה: [למילוי]</span>
                        </div>
                    </div>
                </div>
                <!-- 1893 -->
                <div class="bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group overflow-hidden">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1893</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase">"הר הנגב"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>גזרה:</strong> דימונה, ערד, ירוחם ומצפה רמון. מבוסס על מודל "בני מקום" לשמירה הדוקה על הנגב.</p>
                        <div class="mt-auto bg-slate-50 p-5 rounded-2xl border border-dashed border-gray-300 text-center">
                            <span class="text-sm font-bold text-gray-400">איש קשר בעמותה: [למילוי]</span>
                        </div>
                    </div>
                </div>
                <!-- 1894 -->
                <div class="bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group overflow-hidden">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1894</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase">"הלל"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>אופי:</strong> מורכב מיוצאי חיל הים. גדוד חי"ר המשלב ניסיון מבצעי עשיר מעולם הים והיבשה.</p>
                        <div class="mt-auto bg-slate-50 p-5 rounded-2xl border border-dashed border-gray-300 text-center">
                            <span class="text-sm font-bold text-gray-400">איש קשר בעמותה: [למילוי]</span>
                        </div>
                    </div>
                </div>
                <!-- 1895 -->
                <div class="bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group overflow-hidden md:col-span-2 lg:col-span-1">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1895</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase">"יעלה"</p>
                    </div>
                    <div class="p-10 flex-grow flex flex-col">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light"><strong>גזרה:</strong> העיר אילת ויישובי חבל אילות. גדוד מילואים להגנה מרחבית המבוסס על תושבי האזור.</p>
                        <div class="mt-auto bg-slate-50 p-5 rounded-2xl border border-dashed border-gray-300 text-center">
                            <span class="text-sm font-bold text-gray-400">איש קשר בעמותה: [למילוי]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Recruit Form -->
    <section id="recruit" class="py-32 bg-white">
        <div class="max-w-4xl mx-auto px-6">
            <div class="bg-slate-900 rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                <h2 class="text-4xl md:text-5xl font-black text-white mb-12 italic tracking-tighter">התגייסו לחטיבה</h2>
                <form class="space-y-8" onsubmit="event.preventDefault();">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <input type="text" placeholder="שם מלא" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                        <input type="tel" placeholder="טלפון" required class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold">
                    </div>
                    <select class="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-idf-yellow outline-none transition text-xl font-bold appearance-none cursor-pointer">
                        <option class="text-slate-900">לוחם / מפקד (רובאי 05+)</option>
                        <option class="text-slate-900">נהג משא כבד / מבצעי</option>
                        <option class="text-slate-900">חובש / רפואה</option>
                        <option class="text-slate-900">לוגיסטיקה וחימוש</option>
                    </select>
                    <button type="submit" class="w-full bg-idf-yellow text-idf-dark font-black text-2xl py-6 rounded-2xl hover:scale-[1.02] transition shadow-xl mt-6">שליחת בקשה להצטרפות</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-idf-dark text-white py-24 border-t-8 border-idf-green">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-right">
                <div class="flex items-center gap-6">
                    <div class="bg-white p-3 rounded-2xl h-20 w-20 flex items-center justify-center">
                        <img src="logo.png" alt="לוגו" class="max-h-full max-w-full object-contain" onerror="this.parentElement.style.display='none'">
                    </div>
                    <div class="border-r border-white/10 pr-6">
                        <span class="font-black text-3xl block tracking-tighter">חטיבת נגבה 189</span>
                        <p class="text-slate-500 font-bold mt-1 text-sm">העמותה הרשמית למשרתים ומשפחותיהם</p>
                    </div>
                </div>
                <div class="flex gap-10 text-4xl">
                    <a href="#" class="text-gray-600 hover:text-idf-yellow transition"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="text-gray-600 hover:text-idf-yellow transition"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            <div class="border-t border-white/5 mt-16 pt-8 text-center text-slate-600 font-bold text-sm tracking-widest uppercase">
                &copy; 2024 עמותת חטיבה 189. כל הזכויות שמורות.
            </div>
        </div>
    </footer>

</body>
</html>
