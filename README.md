<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה 189 | רשמי</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <!-- גופן Rubik - הסטנדרט המקצועי ביותר לעברית -->
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Rubik', 'sans-serif'] },
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
        html { scroll-behavior: smooth; }
        .hero-bg {
            background: linear-gradient(rgba(26, 29, 11, 0.8), rgba(26, 29, 11, 0.8)), 
                        url('https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074&auto=format&fit=crop');
            background-size: cover; background-position: center; background-attachment: fixed;
        }
        .nav-fixed { transition: all 0.3s ease; }
        .card-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    </style>
</head>
<body class="bg-slate-50 text-slate-900 font-sans">

    <!-- Navbar - Fixed & Professional -->
    <nav class="bg-white shadow-xl fixed w-full z-50 top-0 border-b-4 border-idf-yellow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-28">
                <!-- ימין: לוגו מוגדל -->
                <div class="flex items-center gap-6">
                    <div class="bg-white p-2 rounded-xl shadow-inner border border-slate-100 h-24 w-24 flex items-center justify-center overflow-hidden">
                        <img src="לוגו עמותה.png" alt="לוגו" class="max-h-full max-w-full object-contain" 
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
                    <a href="#recruit" class="bg-idf-green text-white px-8 py-3 rounded-2xl font-black hover:bg-idf-dark transition shadow-lg">התגייסו לחטיבה</a>
                </div>
                
                <!-- Mobile Toggle -->
                <div class="lg:hidden text-3xl text-idf-dark"><i class="fa-solid fa-bars"></i></div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-bg min-h-[80vh] flex items-center justify-center text-center text-white pt-28">
        <div class="max-w-5xl px-6">
            <h2 class="text-6xl md:text-8xl font-black mb-8 drop-shadow-2xl">"מהנגב באנו,<br><span class="text-idf-yellow italic">על הנגב נגן"</span></h2>
            <p class="text-2xl md:text-3xl mb-12 text-gray-200 font-light drop-shadow-lg">
                הבית הקהילתי של לוחמי ומפקדי חטיבה 189.<br>
                <strong>בונים קהילה חזקה ותומכת במילואים ובאזרחות.</strong>
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#recruit" class="bg-idf-yellow text-idf-dark font-black text-2xl px-12 py-5 rounded-2xl hover:scale-105 transition shadow-2xl">הצטרפות לחטיבה</a>
                <a href="#vision" class="bg-white/10 border-2 border-white/30 backdrop-blur-md text-white font-black text-2xl px-12 py-5 rounded-2xl hover:bg-white/20 transition">פעילות העמותה</a>
            </div>
        </div>
    </section>

    <!-- הוועד המנהל -->
    <section id="management" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-5xl font-black text-idf-dark tracking-tighter">הוועד המנהל</h2>
                <div class="h-2 w-24 bg-idf-yellow mx-auto mt-6 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- יו"ר -->
                <div class="p-8 rounded-[2rem] bg-slate-50 border-4 border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[300px]">
                    <div class="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 text-4xl mb-4"><i class="fa-solid fa-crown"></i></div>
                    <h3 class="text-2xl font-black text-slate-400 italic leading-tight">יו"ר העמותה</h3>
                    <p class="text-slate-400 mt-2 font-bold tracking-widest uppercase text-sm">בתהליך מינוי</p>
                </div>

                <!-- חברי ועד -->
                <div class="card-hover p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm text-center">
                    <div class="w-20 h-20 bg-idf-green/10 text-idf-green rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">יואב הנר</h3>
                    <p class="text-idf-gold font-bold mb-4">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">כאן יופיע פירוט על פועלו של יואב הנר במסגרת העמותה והחטיבה.</p>
                </div>

                <div class="card-hover p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm text-center">
                    <div class="w-20 h-20 bg-idf-green/10 text-idf-green rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">יהונתן פרידמן</h3>
                    <p class="text-idf-gold font-bold mb-4">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">כאן יופיע פירוט על פועלו של יהונתן פרידמן במסגרת העמותה והחטיבה.</p>
                </div>

                <div class="card-hover p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm text-center">
                    <div class="w-20 h-20 bg-idf-green/10 text-idf-green rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">דני בלובשטיין</h3>
                    <p class="text-idf-gold font-bold mb-4">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">כאן יופיע פירוט על פועלו של דני בלובשטיין במסגרת העמותה והחטיבה.</p>
                </div>

                <div class="card-hover p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm text-center">
                    <div class="w-20 h-20 bg-idf-green/10 text-idf-green rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"><i class="fa-solid fa-user"></i></div>
                    <h3 class="text-2xl font-black text-idf-dark">בר נוימן</h3>
                    <p class="text-idf-gold font-bold mb-4">חבר ועד</p>
                    <p class="text-slate-500 text-sm leading-relaxed">כאן יופיע פירוט על פועלו של בר נוימן במסגרת העמותה והחטיבה.</p>
                </div>

                <!-- רו"ח גל אדווה -->
                <div class="card-hover p-8 rounded-[2rem] bg-idf-dark text-white shadow-xl text-center">
                    <div class="w-20 h-20 bg-idf-yellow text-idf-dark rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg"><i class="fa-solid fa-user-shield"></i></div>
                    <h3 class="text-2xl font-black">רו"ח גל אדווה</h3>
                    <p class="text-idf-yellow font-bold mb-4 uppercase tracking-tighter">מבקרת העמותה</p>
                    <p class="text-gray-400 text-sm leading-relaxed">אחראית על הביקורת, התנהלות כספית תקינה ושקיפות העמותה.</p>
                </div>

                <!-- בתהליך מינוי -->
                <div class="p-8 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                    <h3 class="text-xl font-bold">חבר ועד</h3>
                    <p class="text-xs font-bold uppercase tracking-widest mt-2 italic">בתהליך מינוי</p>
                </div>
                <div class="p-8 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                    <h3 class="text-xl font-bold">חבר ועד</h3>
                    <p class="text-xs font-bold uppercase tracking-widest mt-2 italic">בתהליך מינוי</p>
                </div>
            </div>
        </div>
    </section>

    <!-- אנשי קשר וניהול ביצועי -->
    <section class="py-24 bg-slate-900 text-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <!-- צוות העמותה -->
                <div>
                    <h2 class="text-4xl font-black mb-12 text-idf-yellow italic">צוות מוביל</h2>
                    <div class="space-y-6">
                        <div class="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10">
                            <span class="font-bold text-xl">מנכ"ל העמותה</span>
                            <span class="text-idf-gold font-bold italic">[פנוי]</span>
                        </div>
                        <div class="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10">
                            <span class="font-bold text-xl text-right leading-tight">מנהל/ת פיתוח משאבים</span>
                            <span class="text-idf-gold font-bold italic">[פנוי]</span>
                        </div>
                        <div class="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10">
                            <span class="font-bold text-xl">מנהל/ת רווחה</span>
                            <span class="text-idf-gold font-bold italic">[פנוי]</span>
                        </div>
                    </div>
                </div>

                <!-- נציגי גדודים -->
                <div>
                    <h2 class="text-4xl font-black mb-12 text-idf-yellow italic">נציגי גדודים</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <span class="block font-black text-lg">נציג גדוד 1891</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <span class="block font-black text-lg">נציג גדוד 1892</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <span class="block font-black text-lg">נציג גדוד 1893</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <span class="block font-black text-lg">נציג גדוד 1894</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                        <div class="p-5 bg-white/5 rounded-2xl border border-white/10 text-center md:col-span-2">
                            <span class="block font-black text-lg">נציג גדוד 1895</span>
                            <span class="text-sm text-gray-500 mt-2 block italic">[למילוי]</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- הגדודים -->
    <section id="battalions" class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-5xl font-black text-center text-idf-dark mb-20 italic">השדרה המרכזית</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- 1891 -->
                <div class="card-hover bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1891</h3>
                        <p class="text-idf-yellow font-bold text-xl uppercase tracking-widest mt-2 italic">"מגני יואב"</p>
                    </div>
                    <div class="p-10 flex-grow text-right">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light">גזרה: מרחב לכיש, קריית גת ומועצה אזורית יואב. גדוד חי"ר המבוסס על "בני המקום".</p>
                        <div class="mt-auto bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center font-bold text-slate-400">איש קשר בעמותה: [למילוי]</div>
                    </div>
                </div>
                <!-- 1892 -->
                <div class="card-hover bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1892</h3>
                        <p class="text-idf-yellow font-bold text-xl uppercase tracking-widest mt-2 italic">"חורב"</p>
                    </div>
                    <div class="p-10 flex-grow text-right">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light">גזרה: יישובי עוטף עזה. כוח רתום ומסור המהווה מכפיל כוח בהגנה על הבית.</p>
                        <div class="mt-auto bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center font-bold text-slate-400">איש קשר בעמותה: [למילוי]</div>
                    </div>
                </div>
                <!-- 1893 -->
                <div class="card-hover bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                    <div class="bg-idf-green p-10 text-center text-white">
                        <h3 class="text-3xl font-black">גדוד 1893</h3>
                        <p class="text-idf-yellow font-bold text-xl uppercase tracking-widest mt-2 italic">"הר הנגב"</p>
                    </div>
                    <div class="p-10 flex-grow text-right">
                        <p class="text-lg text-slate-600 mb-8 leading-relaxed font-light">גזרה: דימונה, ערד, ירוחם ומצפה רמון. מודל "בני מקום" לשמירה על מרחב הנגב.</p>
                        <div class="mt-auto bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center font-bold text-slate-400">איש קשר בעמותה: [למילוי]</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-idf-dark text-white py-20 border-t-8 border-idf-green">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-right">
                <div class="flex items-center gap-6">
                    <div class="bg-white p-3 rounded-2xl h-24 w-24 flex items-center justify-center shadow-lg">
                        <img src="לוגו עמותה.png" alt="לוגו" class="max-h-full max-w-full object-contain" onerror="this.parentElement.style.display='none'">
                    </div>
                    <div class="border-r border-white/10 pr-6">
                        <span class="font-black text-4xl block tracking-tighter">חטיבת נגבה 189</span>
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
