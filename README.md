<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>עמותת חטיבת נגבה (189) - משפחה אחת</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Heebo', 'sans-serif'],
                    },
                    colors: {
                        idf: {
                            green: '#4b5320',
                            light: '#6b705c',
                            yellow: '#facc15',
                            dark: '#2c3314',
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
        .hero-pattern {
            background-image: linear-gradient(rgba(44, 51, 20, 0.85), rgba(44, 51, 20, 0.85)), url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
    </style>
</head>
<body class="bg-slate-50 text-gray-800 antialiased font-sans text-right">

    <!-- ניווט עליון -->
    <nav class="bg-white shadow-md fixed w-full z-50 top-0 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20">
                <div class="flex items-center">
                    <img src="logo.png" alt="לוגו עמותת חטיבת נגבה" class="h-16 w-auto ml-3 drop-shadow-sm mix-blend-multiply" onerror="this.src='https://via.placeholder.com/60?text=Logo'">
                    <div>
                        <span class="font-extrabold text-2xl text-idf-dark block leading-none">עמותת חטיבת נגבה (189)</span>
                        <span class="text-sm text-idf-light font-semibold block mt-1">משפחה אחת</span>
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-6 space-x-reverse">
                    <a href="#about" class="text-gray-600 hover:text-idf-green font-medium transition">החזון שלנו</a>
                    <a href="#join-ngo" class="text-gray-600 hover:text-idf-green font-medium transition">הצטרפות לעמותה</a>
                    <a href="#battalions" class="text-gray-600 hover:text-idf-green font-medium transition">הגדודים</a>
                    <a href="#recruit" class="bg-idf-green text-white px-5 py-2 rounded-full font-bold hover:bg-idf-dark transition shadow-lg">התגייסו לחטיבה</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- אזור ראשי (Hero) -->
    <section class="hero-pattern pt-32 pb-24 md:pt-40 md:pb-32 text-center text-white min-h-[70vh] flex items-center mt-20">
        <div class="max-w-4xl mx-auto px-4">
            <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
                "מהנגב באנו, על הנגב נגן"
            </h1>
            <p class="text-xl md:text-2xl mb-10 text-gray-200 font-light drop-shadow-md">
                עמותת חטיבת המילואים 189. דואגים ללוחמים, תומכים במשפחות, ובונים קהילה חזקה ותומכת במילואים ובאזרחות.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#join-ngo" class="bg-idf-yellow text-idf-dark font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-400 transition shadow-xl">
                    הרשמה כחבר עמותה (למשרתים)
                </a>
                <a href="#recruit" class="bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-idf-dark transition shadow-xl">
                    מתעניינים בגיוס לחטיבה
                </a>
            </div>
        </div>
    </section>

    <!-- אזור מיוחד: קריאה להצטרפות לעמותה -->
    <section id="join-ngo" class="py-16 bg-idf-green text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <div class="text-center">
                <h2 class="text-3xl md:text-4xl font-extrabold mb-4 text-idf-yellow">משרתים בחטיבה? מקומכם איתנו!</h2>
                <p class="text-lg mb-8 leading-relaxed text-gray-100 max-w-3xl mx-auto">
                    עמותת חטיבה 189 הוקמה עבורכם ועבור המשפחות שלכם. אנו קוראים לכל משרתי החטיבה להירשם כחברי עמותה רשמיים! ההצטרפות מקנה לכם זכות הצבעה, השתתפות באירועי הוקרה, גישה למועדון הצרכנות החטיבתי, ועוד. יחד אנחנו כוח אזרחי ענק שדואג לאנשים שלו.
                </p>
                <button class="bg-white text-idf-green font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg">
                    <i class="fa-solid fa-pen-to-square ml-2"></i> מלאו טופס הרשמה לעמותה
                </button>
            </div>
        </div>
    </section>

    <!-- פרויקטים וחזון -->
    <section id="about" class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-extrabold text-idf-dark relative inline-block">
                    פעילות העמותה - העורף של הלוחמים
                    <div class="absolute w-1/2 h-1 bg-idf-yellow bottom-[-10px] right-1/4 rounded"></div>
                </h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- פרויקט 1 -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-amber-500 hover:-translate-y-2 transition-transform duration-300 text-center">
                    <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md mx-auto">
                        <i class="fa-solid fa-gift"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">ניידת ת"ש ופינוקים</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        ניידת ייעודית של העמותה שמגיעה ישירות לשטחי הכינוס ולמוצבים, עמוסה בציוד לוגיסטי ופינוקים כדי להרים את המורל ללוחמים בזמן אמת.
                    </p>
                </div>

                <!-- פרויקט 2 -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-rose-500 hover:-translate-y-2 transition-transform duration-300 text-center">
                    <div class="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md mx-auto">
                        <i class="fa-solid fa-umbrella-beach"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">משפחות ונופשים</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        אנחנו יודעים שהמשפחות בעורף נלחמות לא פחות. ארגון ימי משפחות, חלוקת מתנות הוקרה בחגים ונופשים יחידתיים לחיזוק התא המשפחתי.
                    </p>
                </div>

                <!-- פרויקט 3 -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600 hover:-translate-y-2 transition-transform duration-300 text-center">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md mx-auto">
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">קהילת נטוורקינג</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        חיבור בין המילואימניקים באזרחות. סיוע במציאת עבודה, שיתופי פעולה עסקיים, עזרה משפטית וכלכלית לחברים שנקלעו למצוקה.
                    </p>
                </div>

                <!-- פרויקט 4 -->
                <div class="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-500 hover:-translate-y-2 transition-transform duration-300 text-center">
                    <div class="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md mx-auto">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">מועדון צרכנות לחטיבה</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        כוח הקנייה של משפחות החטיבה פועל לטובתכם! מועדון הטבות והנחות ייחודי לחברי עמותת 189 ברשתות מסחר, פנאי וצרכנות שוטפת.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- סמל העמותה והסבר -->
    <section id="unified-symbol" class="py-20 bg-idf-dark text-white border-t-8 border-idf-yellow overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 relative z-10">
                <h2 class="text-3xl md:text-4xl font-extrabold text-white relative inline-block">
                    סמל העמותה - משפחה אחת, דרך אחת
                    <div class="absolute w-1/3 h-1 bg-idf-yellow bottom-[-12px] right-1/3 rounded"></div>
                </h2>
                <p class="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
                    סמל העמותה שומר על מורשת היחידה, אך מוסיף לה רובד של סולידריות ועזרה הדדית.
                </p>
            </div>

            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div class="w-full lg:w-1/2 flex justify-center py-10 relative z-10 bg-white rounded-2xl p-6 shadow-2xl">
                     <img src="logo.png" alt="לוגו עמותת חטיבת נגבה מוגדל" class="w-full max-w-sm h-auto" onerror="this.src='https://via.placeholder.com/300?text=189+Logo'">
                </div>

                <div class="w-full lg:w-1/2 grid grid-cols-1 gap-6 relative z-10">
                    <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 class="font-bold text-white text-xl mb-3"><i class="fa-solid fa-shield-halved text-idf-light ml-2"></i> מגן האדמה החצוי</h4>
                        <p class="text-gray-300 leading-relaxed">שומרים על מורשת החטיבה: המגן ההיסטורי החצוי לשני גוונים. החום הבהיר מסמל את חולות המדבר, והחום הכהה מסמל את אדמת הנגב היציבה.</p>
                    </div>
                    
                    <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 class="font-bold text-white text-xl mb-3"><i class="fa-solid fa-handshake text-idf-yellow ml-2"></i> לחיצת היד המשלבת</h4>
                        <p class="text-gray-300 leading-relaxed">בתחתית הסמל, לחיצת יד המשלבת את שני גווני החטיבה. מסמלת את האחדות, העזרה ההדדית והקהילה החזקה שהעמותה בונה עבור המשרתים.</p>
                    </div>

                    <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                        <h4 class="font-bold text-white text-xl mb-3"><i class="fa-solid fa-khanda text-idf-gold ml-2"></i> החרב וקווי השבר</h4>
                        <p class="text-gray-300 leading-relaxed">החרב וקווי השבר המדמים את ערוצי הוואדיות בנגב, מזכירים לנו את השליחות המבצעית. החיבור ללחיצת היד ממחיש כי הכוח האמיתי שלנו נובע מהלכידות שלנו כמשפחה.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- הגדודים -->
    <section id="battalions" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-extrabold text-idf-dark relative inline-block">
                    גדודי החטיבה - השדרה המרכזית
                    <div class="absolute w-1/2 h-1 bg-idf-green bottom-[-10px] right-1/4 rounded"></div>
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- גדוד 1891 -->
                <div class="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition flex flex-col h-full bg-slate-50">
                    <div class="bg-idf-dark text-white p-4 text-center border-b-4 border-idf-yellow">
                        <h3 class="font-black text-2xl">גדוד 1891</h3>
                        <span class="text-idf-yellow font-bold text-sm">"מגני יואב"</span>
                    </div>
                    <div class="p-6 flex-grow">
                        <p class="text-gray-600 text-sm mb-4"><strong>גזרה:</strong> מרחב לכיש, קריית גת, מועצה אזורית יואב והסביבה. גדוד חי"ר המבוסס על "בני המקום" המגן על הגזרה הצפונית של החטיבה.</p>
                        <hr class="mb-4">
                        <p class="text-gray-800 text-sm font-semibold mb-1"><i class="fa-solid fa-user-tie text-idf-green ml-1"></i> רכז עמותה:</p>
                        <p class="text-gray-600 text-sm">אבי כהן | 050-1234567</p>
                    </div>
                </div>

                <!-- גדוד 1892 -->
                <div class="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition flex flex-col h-full bg-slate-50">
                    <div class="bg-idf-dark text-white p-4 text-center border-b-4 border-idf-yellow">
                        <h3 class="font-black text-2xl">גדוד 1892</h3>
                        <span class="text-idf-yellow font-bold text-sm">"חורב"</span>
                    </div>
                    <div class="p-6 flex-grow">
                        <p class="text-gray-600 text-sm mb-4"><strong>גזרה:</strong> גדוד "חורב", המורכב בין היתר מלוחמים בני העוטף. כוח רתום ומסור המהווה מכפיל כוח משמעותי בהגנה על הבית.</p>
                        <hr class="mb-4">
                        <p class="text-gray-800 text-sm font-semibold mb-1"><i class="fa-solid fa-user-tie text-idf-green ml-1"></i> רכז עמותה:</p>
                        <p class="text-gray-600 text-sm">דן לוי | 052-7654321</p>
                    </div>
                </div>

                <!-- גדוד 1893 -->
                <div class="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition flex flex-col h-full bg-slate-50">
                    <div class="bg-idf-dark text-white p-4 text-center border-b-4 border-idf-yellow">
                        <h3 class="font-black text-2xl">גדוד 1893</h3>
                        <span class="text-idf-yellow font-bold text-sm">"הר הנגב"</span>
                    </div>
                    <div class="p-6 flex-grow">
                        <p class="text-gray-600 text-sm mb-4"><strong>גזרה:</strong> גזרה מזרחית ודרומית - דימונה, ערד וירוחם, דרך מצפה רמון ועד הערבה. מבוסס על מודל "בני מקום" לתגובה מיידית.</p>
                        <hr class="mb-4">
                        <p class="text-gray-800 text-sm font-semibold mb-1"><i class="fa-solid fa-user-tie text-idf-green ml-1"></i> רכז עמותה:</p>
                        <p class="text-gray-600 text-sm">רון ישראלי | 054-9876543</p>
                    </div>
                </div>

                <!-- גדוד 1894 -->
                <div class="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition flex flex-col h-full bg-slate-50">
                    <div class="bg-idf-dark text-white p-4 text-center border-b-4 border-idf-yellow">
                        <h3 class="font-black text-2xl">גדוד 1894</h3>
                        <span class="text-idf-yellow font-bold text-sm">"הלל"</span>
                    </div>
                    <div class="p-6 flex-grow">
                        <p class="text-gray-600 text-sm mb-4"><strong>אופי הגדוד:</strong> מורכב בין היתר מיוצאי חיל הים. עוגן משמעותי במערך הלחימה המשלב ניסיון מבצעי עשיר עם רוח התנדבות חסרת פשרות.</p>
                        <hr class="mb-4">
                        <p class="text-gray-800 text-sm font-semibold mb-1"><i class="fa-solid fa-user-tie text-idf-green ml-1"></i> רכז עמותה:</p>
                        <p class="text-gray-600 text-sm">יוסי שמעוני | 050-1122334</p>
                    </div>
                </div>

                <!-- גדוד 1895 -->
                <div class="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition flex flex-col h-full bg-slate-50 md:col-span-2 lg:col-span-1">
                    <div class="bg-idf-dark text-white p-4 text-center border-b-4 border-idf-yellow">
                        <h3 class="font-black text-2xl">גדוד 1895</h3>
                        <span class="text-idf-yellow font-bold text-sm">"יעלה"</span>
                    </div>
                    <div class="p-6 flex-grow">
                        <p class="text-gray-600 text-sm mb-4"><strong>גזרה:</strong> אילת ויישובי חבל אילות. גדוד מילואים להגנה מרחבית המבוסס על תושבי האזור המגינים על הבית הדרומי.</p>
                        <hr class="mb-4">
                        <p class="text-gray-800 text-sm font-semibold mb-1"><i class="fa-solid fa-user-tie text-idf-green ml-1"></i> רכז עמותה:</p>
                        <p class="text-gray-600 text-sm">אמיר גולן | 053-5566778</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- מתחם גיוס לחטיבה -->
    <section id="recruit" class="py-20 bg-gray-100 border-t border-gray-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                <div class="w-full lg:w-3/5 p-8 md:p-12">
                    <h2 class="text-3xl font-extrabold text-idf-dark mb-2">רוצה להתגייס לחטיבה 189?</h2>
                    <p class="text-gray-500 mb-8 font-medium">השאר פרטים ונציג הגיוס של החטיבה יחזור אליך בהקדם.</p>
                    
                    <form class="space-y-5" onsubmit="event.preventDefault(); alert('הפנייה נשלחה בהצלחה!');">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-sm font-bold text-gray-700 mb-1">שם מלא</label>
                                <input type="text" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-idf-green outline-none bg-gray-50 text-right">
                            </div>
                            <div>
                                <label class="block text-sm font-bold text-gray-700 mb-1">מספר טלפון</label>
                                <input type="tel" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-idf-green outline-none bg-gray-50 text-right">
                            </div>
                        </div>
                        <button type="submit" class="w-full bg-idf-dark text-idf-yellow font-bold text-lg py-4 rounded-lg hover:bg-black transition shadow-md mt-4">
                            שלח בקשת התגייסות לחטיבה
                        </button>
                    </form>
                </div>
                
                <div class="w-full lg:w-2/5 bg-idf-green text-white p-8 md:p-12 flex flex-col justify-center">
                    <h3 class="text-2xl font-bold mb-6 text-idf-yellow border-b border-idf-light pb-4">למה דווקא אנחנו?</h3>
                    <ul class="space-y-6">
                        <li class="flex items-start">
                            <i class="fa-solid fa-check text-idf-yellow mt-1 ml-3 text-xl"></i>
                            <div>
                                <strong class="block text-lg">משפחה לכל החיים</strong>
                                <span class="text-gray-200 text-sm">הקשר שלנו לא מסתיים כשמורידים את המדים.</span>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fa-solid fa-check text-idf-yellow mt-1 ml-3 text-xl"></i>
                            <div>
                                <strong class="block text-lg">קהילה דרומית חזקה</strong>
                                <span class="text-gray-200 text-sm">להיות חלק ממערך שמגן על הבית ומחובר לשטח.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- פוטר -->
    <footer class="bg-gray-900 text-white py-12 border-t-4 border-idf-green">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <div class="flex items-center justify-start mb-4 bg-white p-2 rounded-lg inline-flex">
                        <img src="logo.png" alt="לוגו קטן" class="h-8 w-auto" onerror="this.src='https://via.placeholder.com/40'">
                    </div>
                    <p class="text-gray-400 text-sm mt-3">
                        עמותה למען רווחת לוחמי ומפקדי החטיבה. דואגים לעורף, שומרים על החזית.
                    </p>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-4 text-idf-yellow text-right">קישורים מהירים</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li><a href="#about" class="hover:text-white transition">פרויקטים וחזון</a></li>
                        <li><a href="#join-ngo" class="hover:text-white transition">הצטרפות לעמותה</a></li>
                        <li><a href="#battalions" class="hover:text-white transition">הגדודים שלנו</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-lg mb-4 text-idf-yellow text-right">צרו קשר</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li><i class="fa-solid fa-envelope ml-2"></i> info@189ngo.org.il</li>
                        <li><i class="fa-solid fa-phone ml-2"></i> 03-1234567</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                <p>&copy; 2024 עמותת חטיבה 189. כל הזכויות שמורות.</p>
            </div>
        </div>
    </footer>

</body>
</html>
