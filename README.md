<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | האתר הרשמי</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <!-- פונטים מודרניים - Rubik ו-Assistant -->
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;700&family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet">
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
        .hero-overlay {
            background: linear-gradient(rgba(26, 29, 11, 0.85), rgba(26, 29, 11, 0.85)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074&auto=format&fit=crop');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        .card-modern { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-modern:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    </style>
</head>
<body class="bg-slate-50 text-slate-900">

    <!-- Navbar - מיושר וממורכז -->
    <nav class="bg-white shadow-xl fixed w-full z-50 top-0 border-b-4 border-idf-yellow h-28 flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
            <!-- ימין: לוגו מוגדל -->
            <div class="flex items-center gap-6 shrink-0">
                <div class="bg-white p-2 rounded-xl shadow-inner border border-slate-100 h-24 w-24 flex items-center justify-center overflow-hidden">
                    <img src="logo.png" alt="לוגו" class="max-h-full max-w-full object-contain" 
                         onerror="this.src='https://via.placeholder.com/120?text=189'">
                </div>
                <div class="hidden sm:block">
                    <h1 class="font-black text-2xl md:text-3xl text-idf-dark leading-none tracking-tight">עמותת חטיבת נגבה (189)</h1>
                    <p class="text-idf-gold font-bold text-sm mt-1 tracking-widest uppercase">משפחה אחת. דרך אחת.</p>
                </div>
            </div>

            <!-- מרכז: ניווט -->
            <div class="hidden lg:flex items-center gap-10 font-bold text-lg">
                <a href="#vision" class="text-idf-dark hover:text-idf-gold transition">חזון</a>
                <a href="#management" class="text-idf-dark hover:text-idf-gold transition">הנהלה</a>
                <a href="#battalions" class="text-idf-dark hover:text-idf-gold transition">גדודים</a>
            </div>

            <!-- שמאל: כפתור בולט -->
            <div class="shrink-0">
                <a href="#recruit" class="bg-idf-green text-white px-8 py-3 rounded-2xl font-black hover:bg-idf-dark transition shadow-lg block">התגייסו לחטיבה</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-overlay min-h-[80vh] flex items-center justify-center text-center text-white pt-28">
        <div class="max-w-5xl px-6">
            <h2 class="text-6xl md:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">"מהנגב באנו,<br><span class="text-idf-yellow italic">על הנגב נגן"</span></h2>
            <p class="text-2xl md:text-3xl mb-12 text-gray-200 font-light max-w-3xl mx-auto">
                הבית הקהילתי של לוחמי ומפקדי חטיבה 189.<br>
                <strong>בונים קהילה חזקה ותומכת במילואים ובאזרחות.</strong>
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#join" class="bg-idf-yellow text-idf-dark font-black text-2xl px-12 py-5 rounded-2xl hover:scale-105 transition shadow-2xl">הרשמה לעמותה</a>
                <a href="#vision" class="bg-white/10 border-2 border-white/30 backdrop-blur-md text-white font-black text-2xl px-12 py-5 rounded-2xl hover:bg-white/20 transition">פעילות העמותה</a>
            </div>
        </div>
    </section>

    <!-- הוועד המנהל -->
    <section id="management" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-5xl font-black text-idf-dark italic tracking-tighter">הוועד המנהל</h2>
                <p class="text-xl text-slate-500 mt-4 font-light italic">הנהגת העמותה המובילה את החזון והעשייה</p>
                <div class="h-1.5 w-24 bg-idf-yellow mx-auto mt-6 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- יו"ר -->
                <div class="p-8 rounded-[2.5rem] bg-slate-50 border-4 border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[280px]">
                    <div class="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 text-4xl mb-4"><i class="fa-solid fa-crown"></i></div>
                    <h3 class="text-2xl font-black text-slate-400 italic">יו"ר העמותה</h3>
                    <p class="text-sm text-gray-400 mt-2 font-bold uppercase tracking-widest">[בתהליך מינוי]</p>
                </div>

                <!-- חברים -->
                <div class="card-modern p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm text-center">
                    <div class="w-16 h-16 bg-idf-green/10 text-idf-green rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">יואב הנר</h3>
                    <p class="text-idf-gold font-bold mb-4 italic">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">תיאור קצר על תפקידו ופועלו של יואב בעמותה ובחטיבה.</p>
                </div>

                <div class="card-modern p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm text-center">
                    <div class="w-16 h-16 bg-idf-green/10 text-idf-green rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">יהונתן פרידמן</h3>
                    <p class="text-idf-gold font-bold mb-4 italic">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">תיאור קצר על תפקידו ופועלו של יהונתן בעמותה ובחטיבה.</p>
                </div>

                <div class="card-modern p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm text-center">
                    <div class="w-16 h-16 bg-idf-green/10 text-idf-green rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">דני בלובשטיין</h3>
                    <p class="text-idf-gold font-bold mb-4 italic">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">תיאור קצר על תפקידו ופועלו של דני בעמותה ובחטיבה.</p>
                </div>

                <div class="card-modern p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm text-center">
                    <div class="w-16 h-16 bg-idf-green/10 text-idf-green rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">בר נוימן</h3>
                    <p class="text-idf-gold font-bold mb-4 italic">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">תיאור קצר על תפקידו ופועלו של בר בעמותה ובחטיבה.</p>
                </div>

                <!-- מבקרת העמותה -->
                <div class="card-modern p-8 rounded-[2.5rem] bg-idf-dark text-white text-center shadow-2xl">
                    <div class="w-16 h-16 bg-idf-yellow text-idf-dark rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user-shield"></i></div>
                    <h3 class="text-2xl font-black">רו"ח גל אדווה</h3>
                    <p class="text-idf-yellow font-bold mb-4 italic">מבקרת העמותה</p>
                    <p class="text-gray-400 text-sm leading-relaxed font-light">אחראית על הביקורת והתנהלותה התקינה של העמותה.</p>
                </div>

                <!-- פנוי -->
                <div class="p-8 rounded-[2.5rem] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                    <h3 class="text-xl font-bold">חבר ועד</h3>
                    <p class="text-xs font-bold uppercase tracking-widest mt-2 italic">[למילוי]</p>
                </div>
                <div class="p-8 rounded-[2.5rem] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                    <h3 class="text-xl font-bold">חבר ועד</h3>
                    <p class="text-xs font-bold uppercase tracking-widest mt-2 italic">[למילוי]</p>
                </div>
            </div>
        </div>
    </section>

    <!-- אנשי קשר וצוות ביצועי -->
    <section class="py-24 bg-idf-dark text-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <!-- צוות העמותה -->
                <div>
                    <h2 class="text-4xl font-black mb-12 text-idf-yellow italic tracking-tighter">צוות מוביל</h2>
                    <div class="space-y-6">
                        <div class="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                            <span class="font-bold text-xl">מנכ"ל העמותה</span>
                            <span class="text-idf-gold font-bold italic">[פנוי]</span>
                        </div>
                        <div class="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition text-right">
                            <span class="font-bold text-xl leading-tight">מנהל/ת פיתוח משאבים</span>
                            <span class="text-idf-gold font-bold italic">[פנוי]</span>
                        </div>
                        <div class="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                            <span class="font-bold text-xl">מנהל/ת רווחה</span>
                            <span class="text-idf-gold font-bold italic">[פנוי]</span>
                        </div>
                    </div>
                </div>

                <!-- נציגי גדודים -->
                <div>
                    <h2 class="text-4xl font-black mb-12 text-idf-yellow italic tracking-tighter">נציגי גדודים</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10">
                            <span class="block font-black text-lg">נציג גדוד 1891</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10">
                            <span class="block font-black text-lg">נציג גדוד 1892</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10">
                            <span class="block font-black text-lg">נציג גדוד 1893</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10">
                            <span class="block font-black text-lg">נציג גדוד 1894</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10 md:col-span-2">
                            <span class="block font-black text-lg">נציג גדוד 1895</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- הגדודים - מראה מודרני ואחיד -->
    <section id="battalions" class="py-32 bg-slate-50">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-5xl font-black text-center text-idf-dark mb-24 tracking-tighter italic">השדרה המרכזית</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                <!-- 1891 -->
                <div class="card-modern bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1891</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase italic">"מגני יואב"</p>
                    </div>
                    <div class="p-10 flex-grow text-right">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light italic">גזרה: מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המבוסס על "בני המקום" המגן על הגזרה הצפונית.</p>
                        <div class="mt-auto bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center font-bold text-slate-400 italic text-sm">איש קשר בעמותה: [למילוי]</div>
                    </div>
                </div>

                <!-- 1892 -->
                <div class="card-modern bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1892</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase italic">"חורב"</p>
                    </div>
                    <div class="p-10 flex-grow text-right">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light italic">גזרה: יישובי עוטף עזה. גדוד המורכב מלוחמים בני העוטף, המהווה מכפיל כוח בהגנה על הבית.</p>
                        <div class="mt-auto bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center font-bold text-slate-400 italic text-sm">איש קשר בעמותה: [למילוי]</div>
                    </div>
                </div>

                <!-- 1893 -->
                <div class="card-modern bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1893</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase italic">"הר הנגב"</p>
                    </div>
                    <div class="p-10 flex-grow text-right">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light italic">גזרה: דימונה, ערד, ירוחם ומצפה רמון. מבוסס על מודל "בני מקום" לשמירה על הנגב המרכזי.</p>
                        <div class="mt-auto bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center font-bold text-slate-400 italic text-sm">איש קשר בעמותה: [למילוי]</div>
                    </div>
                </div>

                <!-- 1894 -->
                <div class="card-modern bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1894</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase italic">"הלל"</p>
                    </div>
                    <div class="p-10 flex-grow text-right">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light italic">אופי: מורכב בין היתר מיוצאי חיל הים. גדוד חי"ר המשלב ניסיון מבצעי עשיר מעולם הים והיבשה.</p>
                        <div class="mt-auto bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center font-bold text-slate-400 italic text-sm">איש קשר בעמותה: [למילוי]</div>
                    </div>
                </div>

                <!-- 1895 -->
                <div class="card-modern bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col md:col-span-2 lg:col-span-1">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1895</h3>
                        <p class="text-idf-yellow font-bold mt-2 text-xl tracking-widest uppercase italic">"יעלה"</p>
                    </div>
                    <div class="p-10 flex-grow text-right">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light italic">גזרה: העיר אילת ויישובי חבל אילות. גדוד מילואים להגנה מרחבית המבוסס על תושבי האזור.</p>
                        <div class="mt-auto bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center font-bold text-slate-400 italic text-sm">איש קשר בעמותה: [למילוי]</div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-idf-dark text-white py-24 border-t-8 border-idf-green">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-right">
                <div class="flex items-center gap-6">
                    <div class="bg-white p-3 rounded-2xl h-24 w-24 flex items-center justify-center shadow-lg">
                        <img src="logo.png" alt="לוגו" class="max-h-full max-w-full object-contain" onerror="this.parentElement.style.display='none'">
                    </div>
                    <div class="border-r border-white/10 pr-6">
                        <span class="font-black text-4xl block tracking-tighter italic">חטיבת נגבה 189</span>
                        <p class="text-slate-500 font-bold mt-1 text-sm tracking-widest uppercase">העמותה הרשמית למשרתים ומשפחותיהם</p>
                    </div>
                </div>
                <div class="flex gap-10 text-5xl">
                    <a href="#" class="text-slate-600 hover:text-idf-yellow transition"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="text-slate-600 hover:text-idf-yellow transition"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            <div class="border-t border-white/5 mt-16 pt-8 text-center text-slate-600 font-bold text-xs tracking-widest uppercase italic">
                &copy; 2024 עמותת חטיבה 189. כל הזכויות שמורות למשרתי החטיבה.
            </div>
        </div>
    </footer>

</body>
</html>
