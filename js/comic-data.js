/**
 * Menstrupedia Comic Reader - Comic Data
 * Sample comic pages with multilingual support
 * In production, this would come from an API
 */

const COMIC_DATA = {
    // Comic metadata
    meta: {
        title: {                                                          
            en: "Menstrupedia Comic - Friendly Guide to Periods",
            hi: "मेंस्ट्रुपीडिया कॉमिक - पीरियड्स की दोस्ताना गाइड",
            mr: "मेन्स्ट्रुपीडिया कॉमिक - पाळीची मैत्रीपूर्ण मार्गदर्शिका",
            gu: "મેન્સ્ટ્રુપીડિયા કોમિક - પીરિડ્સની મૈત્રીપૂર્ણ માર્ગદર્શિકા"
        },
        author: "Menstrupedia",
        totalPages: 10,
        languages: ["en", "hi", "mr", "gu"],
        ageRating: "9+",
        category: "Health Education"
    },

    // Chapters structure
    chapters: [
        {
            id: 1,
            title: {
                en: "Growing Up",
                hi: "बड़े होना",
                mr: "मोठे होणे",
                gu: "મોટા થવું"
            },
            pageStart: 1,
            pageEnd: 3,
            icon: "🌱"
        },
        {
            id: 2,
            title: {
                en: "What is Menstruation?",
                hi: "मासिक धर्म क्या है?",
                mr: "मासिक पाळी म्हणजे काय?",
                gu: "માસિક ધર્મ શું છે?"
            },
            pageStart: 4,
            pageEnd: 6,
            icon: "🩸"
        },
        {
            id: 3,
            title: {
                en: "Hygiene & Care",
                hi: "स्वच्छता और देखभाल",
                mr: "स्वच्छता आणि काळजी",
                gu: "સ્વચ્છતા અને કાળજી"
            },
            pageStart: 7,
            pageEnd: 8,
            icon: "🧼"
        },
        {
            id: 4,
            title: {
                en: "Myths & Facts",
                hi: "भ्रांतियाँ और तथ्य",
                mr: "गैरसमज आणि तथ्य",
                gu: "અંધશ્રદ્ધા અને હકીકતો"
            },
            pageStart: 9,
            pageEnd: 10,
            icon: "💡"
        }
    ],

    // Page content with alt text for accessibility
    pages: {
        // English (default)
        en: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop",
                alt: "A young girl named Priya looking at herself in the mirror, noticing changes in her body as she grows up. Her mother stands behind her with a warm smile.",
                narration: "Meet Priya! She is 11 years old and has started noticing changes in her body. Her mother tells her this is a natural part of growing up.",
                chapterId: 1
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
                alt: "Priya and her friends sitting in a circle, talking about the changes they are experiencing. A friendly teacher guides the conversation.",
                narration: "Priya learns that all girls go through these changes. It is called puberty, and it is a sign that her body is growing into a young woman.",
                chapterId: 1
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=1000&fit=crop",
                alt: "A colorful diagram showing the female reproductive system in a friendly, cartoon-like style with labels and arrows.",
                narration: "Inside Priya's body, special organs are getting ready. Every month, her body prepares for the possibility of having a baby in the future.",
                chapterId: 1
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop",
                alt: "Priya looking worried while holding her stomach. Her mother gently explains what is happening with a caring expression.",
                narration: "One day, Priya notices some blood on her underwear. She feels scared, but her mother explains: This is your first period. It is completely normal and healthy!",
                chapterId: 2
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=1000&fit=crop",
                alt: "A calendar showing a 28-day cycle with colorful illustrations. Small icons show different days of the menstrual cycle.",
                narration: "Periods usually come every 28 days, but it can vary. Some girls get them every 21 days, others every 35 days. Both are normal!",
                chapterId: 2
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=1000&fit=crop",
                alt: "Priya feeling different emotions - happy, sad, and energetic - shown in thought bubbles around her head.",
                narration: "During periods, you might feel different emotions or have mild cramps. This is because of hormones. Rest, warm water, and light exercise can help!",
                chapterId: 2
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&h=1000&fit=crop",
                alt: "Different menstrual hygiene products displayed neatly: sanitary pads, tampons, and menstrual cups with friendly labels.",
                narration: "There are many ways to manage periods safely. Sanitary pads are the most common and easiest to use for beginners.",
                chapterId: 3
            },
            {
                id: 8,
                image: " https://via.placeholder.com/800x1000?text=Comic+Page",
                alt: "Priya washing her hands, changing her pad, and disposing of it properly in a covered bin. Step-by-step illustrations.",
                narration: "Change your pad every 4 to 6 hours. Always wash your hands before and after. Wrap used pads in paper and dispose of them in a covered dustbin.",
                chapterId: 3
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=1000&fit=crop",
                alt: "A split screen showing MYTHS on one side with red crosses and FACTS on the other side with green checkmarks.",
                narration: "Myth: You cannot go to school during periods. Fact: You absolutely can! With proper hygiene, you can do everything you normally do.",
                chapterId: 4
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop",
                alt: "Priya standing confidently with her friends, all smiling. A banner above says: Periods are natural, periods are normal, periods are powerful!",
                narration: "Remember: Periods are a natural and healthy part of life. They are nothing to be ashamed of. Be proud of your body and help others understand too!",
                chapterId: 4
            }
        ],

        // Hindi
        hi: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop",
                alt: "एक युवा लड़की प्रिया खुद को आईने में देख रही है, बड़े होने के साथ अपने शरीर में बदलाव देख रही है।",
                narration: "प्रिया से मिलिए! वह 11 साल की है और अपने शरीर में बदलाव देख रही है। उसकी माँ उसे बताती है कि यह बड़े होने का एक प्राकृतिक हिस्सा है।",
                chapterId: 1
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
                alt: "प्रिया और उसकी दोस्तें एक घेरे में बैठी हैं, अनुभव हो रहे बदलावों के बारे में बात कर रही हैं।",
                narration: "प्रिया सीखती है कि सभी लड़कियाँ इन बदलावों से गुजरती हैं। इसे यौवन कहते हैं, और यह एक संकेत है कि उसका शरीर एक युवा महिला में बढ़ रहा है।",
                chapterId: 1
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=1000&fit=crop",
                alt: "महिला प्रजनन तंत्र को दिखाता हुआ एक रंगीन चित्र।",
                narration: "प्रिया के शरीर के अंदर, विशेष अंग तैयार हो रहे हैं। हर महीने, उसका शरीर भविष्य में बच्चा होने की संभावना के लिए तैयारी करता है।",
                chapterId: 1
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop",
                alt: "प्रिया चिंतित दिख रही है जबकि वह अपना पेट पकड़े हुए है।",
                narration: "एक दिन, प्रिया अपने अंडरवियर पर कुछ खून देखती है। वह डर जाती है, लेकिन उसकी माँ समझाती है: यह तुम्हारी पहली पीरियड है। यह पूरी तरह से सामान्य और स्वस्थ है!",
                chapterId: 2
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=1000&fit=crop",
                alt: "28-दिवसीय चक्र दिखाता हुआ एक कैलेंडर।",
                narration: "पीरियड्स आमतौर पर हर 28 दिन में आते हैं, लेकिन यह भिन्न हो सकता है। कुछ लड़कियों को हर 21 दिन में, दूसरों को हर 35 दिन में आते हैं। दोनों सामान्य हैं!",
                chapterId: 2
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=1000&fit=crop",
                alt: "प्रिया विभिन्न भावनाएँ महसूस कर रही है - खुश, उदास और ऊर्जावान।",
                narration: "पीरियड्स के दौरान, आपको विभिन्न भावनाएँ या हल्के ऐंठन महसूस हो सकती है। यह हार्मोन के कारण है। आराम, गर्म पानी और हल्की व्यायाम मदद कर सकती है!",
                chapterId: 2
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&h=1000&fit=crop",
                alt: "विभिन्न मासिक स्वच्छता उत्पाद प्रदर्शित: सैनिटरी पैड, टैम्पोन, और मासिक कप।",
                narration: "पीरियड्स को सुरक्षित रूप से प्रबंधित करने के कई तरीके हैं। सैनिटरी पैड सबसे आम और शुरुआती लोगों के लिए सबसे आसान हैं।",
                chapterId: 3
            },
            {
                id: 8,
                image: "https://images.unsplash.com/https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop-0bc12dd96194?w=800&h=1000&fit=crop",
                alt: "प्रिया अपने हाथ धो रही है, अपना पैड बदल रही है, और उसे ढके हुए बिन में सही तरीके से फेंक रही है।",
                narration: "हर 4 से 6 घंटे में अपना पैड बदलें। हमेशा पहले और बाद में अपने हाथ धोएं। उपयोग किए गए पैड को कागज में लपेटें और ढके हुए कूड़ेदान में फेंक दें।",
                chapterId: 3
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=1000&fit=crop",
                alt: "एक स्प्लिट स्क्रीन जिसमें एक तरफ मिथक लाल क्रॉस के साथ और दूसरी तरफ तथ्य हरे चेकमार्क के साथ।",
                narration: "मिथक: आप पीरियड्स के दौरान स्कूल नहीं जा सकते। तथ्य: आप बिल्कुल जा सकते हैं! उचित स्वच्छता के साथ, आप वह सब कुछ कर सकते हैं जो आप सामान्य रूप से करते हैं।",
                chapterId: 4
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop",
                alt: "प्रिया आत्मविश्वास से अपनी दोस्तों के साथ खड़ी है, सभी मुस्कुरा रहे हैं।",
                narration: "याद रखें: पीरियड्स जीवन का एक प्राकृतिक और स्वस्थ हिस्सा हैं। इनमें शर्मिंदा होने की कोई बात नहीं है। अपने शरीर पर गर्व करें और दूसरों को भी समझाने में मदद करें!",
                chapterId: 4
            }
        ],

        // Marathi
        mr: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop",
                alt: "एक तरुण मुलगी प्रिया आरस्यात स्वतःकडे पाहत आहे, मोठे होण्यासोबत तिच्या शरीरातील बदल लक्षात घेत आहे.",
                narration: "प्रियाशी भेटा! ती 11 वर्षांची आहे आणि तिच्या शरीरातील बदल लक्षात घेत आहे. तिची आई तिला सांगते की हे मोठे होण्याचा एक नैसर्गिक भाग आहे.",
                chapterId: 1
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
                alt: "प्रिया आणि तिच्या मैत्रिणी एका वर्तुळात बसल्या आहेत, अनुभवात येत असलेल्या बदलांबद्दल बोलत आहेत.",
                narration: "प्रिया शिकते की सर्व मुली या बदलांमधून जातात. याला यौवन म्हणतात, आणि हे एक संकेत आहे की तिचे शरीर एका तरुण स्त्रीमध्ये वाढत आहे.",
                chapterId: 1
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=1000&fit=crop",
                alt: "स्त्री प्रजनन प्रणाली दर्शवणारा एक रंगीत आराखडा.",
                narration: "प्रियाच्या शरीरात, विशेष अवयव तयार होत आहेत. दरमहा, तिचे शरीर भविष्यात बाळ असण्याची शक्यता तयार करते.",
                chapterId: 1
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop",
                alt: "प्रिया चिंतित दिसत आहे तिचे पोट धरताना.",
                narration: "एका दिवशी, प्रियाला तिच्या अंडरवेअरवर काही रक्त दिसते. ती घाबरते, पण तिची आई समजावते: ही तुझी पहिली पाळी आहे. हे पूर्णपणे सामान्य आणि निरोगी आहे!",
                chapterId: 2
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=1000&fit=crop",
                alt: "28-दिवसीय चक्र दर्शवणारा एक कॅलेंडर.",
                narration: "पाळी साधारणपणे दर 28 दिवसांनी येते, पण हे बदलू शकते. काही मुलींना दर 21 दिवसांनी, इतरांना दर 35 दिवसांनी येते. दोन्ही सामान्य आहेत!",
                chapterId: 2
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=1000&fit=crop",
                alt: "प्रिया विविध भावना अनुभवत आहे - आनंदी, दुःखी आणि ऊर्जावान.",
                narration: "पाळी दरम्यान, तुम्हाला विविध भावना किंवा हलके ओठ येऊ शकतात. हे हार्मोन्समुळे आहे. विश्रांती, गरम पाणी आणि हलकी व्यायाम मदत करू शकते!",
                chapterId: 2
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&h=1000&fit=crop",
                alt: "विविध मासिक स्वच्छता उत्पादने प्रदर्शित: सॅनिटरी पॅड, टॅम्पॉन, आणि मासिक कप.",
                narration: "पाळी सुरक्षितपणे व्यवस्थापित करण्याचे अनेक मार्ग आहेत. सॅनिटरी पॅड सगळ्यात सामान्य आणि सुरुवातीसाठी सगळ्यात सोपे आहेत.",
                chapterId: 3
            },
            {
                id: 8,
                image: "https://images.unsplash.com/https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop-0bc12dd96194?w=800&h=1000&fit=crop",
                alt: "प्रिया हात धुत आहे, तिचा पॅड बदलत आहे, आणि त्याला योग्यरित्या झाकलेल्या कचऱ्याच्या डब्यात टाकत आहे.",
                narration: "दर 4 ते 6 तासांनी तुमचा पॅड बदला. नेहमी आधी आणि नंतर हात धुवा. वापरलेला पॅड कागदात गुंडाळा आणि झाकलेल्या कचऱ्याच्या डब्यात टाका.",
                chapterId: 3
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=1000&fit=crop",
                alt: "एक स्प्लिट स्क्रीन ज्यात एका बाजूला समज लाल क्रॉससह आणि दुसऱ्या बाजूला तथ्य हिरव्या चेकमार्कसह.",
                narration: "समज: तुम्ही पाळी दरम्यान शाळेत जाऊ शकत नाही. तथ्य: तुम्ही नक्कीच जाऊ शकता! योग्य स्वच्छतेसह, तुम्ही ते सर्व काही करू शकता जे तुम्ही सामान्यपणे करता.",
                chapterId: 4
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop",
                alt: "प्रिया आत्मविश्वासाने तिच्या मैत्रिणींसोबत उभी आहे, सर्वजण हसत आहेत.",
                narration: "लक्षात ठेवा: पाळी हे जीवनाचा एक नैसर्गिक आणि निरोगी भाग आहे. याबद्दल लाजण्याचे काही कारण नाही. तुमच्या शरीरावर अभिमान वाटू द्या आणि इतरांनाही समजून सांगण्यास मदत करा!",
                chapterId: 4
            }
        ],

        // Gujarati
        gu: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop",
                alt: "એક યુવા છોકરી પ્રિયા આરસામાં પોતાને જોઈ રહી છે, મોટા થવા સાથે તેના શરીરમાં થતા ફેરફારો નોંધી રહી છે.",
                narration: "પ્રિયા સાથે મળો! તે 11 વર્ષની છે અને તેના શરીરમાં ફેરફારો જોઈ રહી છે. તેની મમ્મી તેને કહે છે કે આ મોટા થવાનો એક સ્વાભાવિક ભાગ છે.",
                chapterId: 1
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
                alt: "પ્રિયા અને તેની મિત્રો એક વર્તુળમાં બેઠા છે, અનુભવાતા ફેરફારો વિશે વાત કરી રહ્યા છે.",
                narration: "પ્રિયા શીખે છે કે બધી છોકરીઓ આ ફેરફારોમાંથી પસાર થાય છે. તેને યૌવન કહેવાય છે, અને તે એક સંકેત છે કે તેનું શરીર એક યુવા સ્ત્રીમાં વધી રહ્યું છે.",
                chapterId: 1
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=1000&fit=crop",
                alt: "સ્ત્રી પ્રજનન તંત્ર બતાવતો એક રંગીન આરેખ.",
                narration: "પ્રિયાના શરીરની અંદર, વિશેષ અંગો તૈયાર થઈ રહ્યા છે. દર મહિને, તેનું શરીર ભવિષ્યમાં બાળક હોવાની શક્યતા માટે તૈયારી કરે છે.",
                chapterId: 1
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop",
                alt: "પ્રિયા ચિંતિત દેખાઈ રહી છે જ્યારે તે તેનો પેટ પકડી રહી છે.",
                narration: "એક દિવસ, પ્રિયા તેના અંડરવિયર પર કેટલુંક લોહી જુએ છે. તે ડરી જાય છે, પણ તેની મમ્મી સમજાવે છે: આ તમારી પહેલી પીરિડ છે. આ પૂર્ણપણે સામાન્ય અને સ્વસ્થ છે!",
                chapterId: 2
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=1000&fit=crop",
                alt: "28-દિવસીય ચક્ર બતાવતો એક કેલેન્ડર.",
                narration: "પીરિડ્સ સામાન્ય રીતે દર 28 દિવસે આવે છે, પણ તે બદલાઈ શકે છે. કેટલીક છોકરીઓને દર 21 દિવસે, બીજાને દર 35 દિવસે આવે છે. બંને સામાન્ય છે!",
                chapterId: 2
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=1000&fit=crop",
                alt: "પ્રિયા વિવિધ લાગણીઓ અનુભવી રહી છે - ખુશ, ઉદાસ અને ઊર્જાવાન.",
                narration: "પીરિડ્સ દરમિયાન, તમને વિવિધ લાગણીઓ અથવા હલકો દુઃખાવો થઈ શકે છે. આ હોર્મોન્સના કારણે છે. આરામ, ગરમ પાણી અને હલકી વ્યાયામ મદદ કરી શકે છે!",
                chapterId: 2
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&h=1000&fit=crop",
                alt: "વિવિધ માસિક સ્વચ્છતા ઉત્પાદનો પ્રદર્શિત: સેનિટરી પેડ, ટેમ્પોન, અને માસિક કપ.",
                narration: "પીરિડ્સને સુરક્ષિત રીતે મેનેજ કરવાના ઘણા માર્ગો છે. સેનિટરી પેડ સૌથી સામાન્ય અને શરૂઆત કરનારાઓ માટે સૌથી સરળ છે.",
                chapterId: 3
            },
            {
                id: 8,
                image: "https://images.unsplash.com/https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop-0bc12dd96194?w=800&h=1000&fit=crop",
                alt: "પ્રિયા હાથ ધોઈ રહી છે, તેનો પેડ બદલી રહી છે, અને તેને ઢકેલા કચરાપેટીમાં યોગ્ય રીતે ફેંકી રહી છે.",
                narration: "દર 4 થી 6 કલાકે તમારો પેડ બદલો. હમેશા પહેલાં અને પછી હાથ ધોઓ. વપરાયેલો પેડ કાગળમાં લપેટો અને ઢકેલા કચરાપેટીમાં નાખો.",
                chapterId: 3
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=1000&fit=crop",
                alt: "એક સ્પ્લિટ સ્ક્રીન જેમાં એક બાજુ અંધશ્રદ્ધા લાલ ક્રોસ સાથે અને બીજી બાજુ તથ્યો લીલા ચેકમાર્ક સાથે.",
                narration: "અંધશ્રદ્ધા: તમે પીરિડ્સ દરમિયાન શાળાએ જઈ શકતા નથી. તથ્ય: તમે ચોક્કસપણે જઈ શકો છો! યોગ્ય સ્વચ્છતા સાથે, તમે તમે સામાન્ય રીતે કરો છો તે બધું કરી શકો છો.",
                chapterId: 4
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop",
                alt: "પ્રિયા આત્મવિશ્વાસથી તેની મિત્રો સાથે ઊભી છે, બધા હસી રહ્યા છે.",
                narration: "યાદ રાખો: પીરિડ્સ જીવનનો એક સ્વાભાવિક અને સ્વસ્થ ભાગ છે. આમાં શરમાવવાનું કંઈ નથી. તમારા શરીર પર ગર્વ કરો અને બીજાને પણ સમજાવવામાં મદદ કરો!",
                chapterId: 4
            }
        ]
    }
};

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COMIC_DATA;
}
