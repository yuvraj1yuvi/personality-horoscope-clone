import React from "react";

interface LetterFullDetailsProps {
  letter: string;
  onBack: () => void;
}

const LETTER_FULL_DATA: Record<string, {
  hindiHeader: string;
  hindiParagraphs: string[];
  englishTitle: string;
  englishParagraphs: string[];
}> = {
  A: {
    hindiHeader: "A नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "शिक्षा या करियर के मामले में यह लक्ष्य तक पहुंचने से पहले हार मानने वालों में से नहीं हैं, और किसी भी काम को अंत तक पहुंचाने के लिए यह हर संभव प्रयास करते हैं। रोमांस के मामले में यह लोग जरा पीछे ही रहते हैं। अपनी भावनाओं को जताना इनके लिए संभव नहीं होता लेकिन अपने प्यार और रिश्तों को पूरा महत्व देते हैं।",
      "घुमा-फिराकर बातें करना इन्हें बिल्कुल पसंद नहीं होता, भले ही सच कड़वा हो, लेकिन यह उसे स्वीकार करते हैं। बात चाहे पर्सनल हो या प्रोफेशनल,यह खुले तौर पर अपने विचार रखने में विश्वास रखते हैं।",
      "हालांकि यह लोग हिम्मती होते हैं, लेकिन फिर भी परिस्थितियों से बचकर निकलने की कोशिश करना भी इनकी आदत में शुमार होता है। कभी-कभी A से नाम वाले लोग आलसी भी होते हैं, और इन्हें बात-बात पर गुस्सा भी आता है।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",

"Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",

"Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",

"Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",

"Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences.",
    ]
  },
  B: {
    hindiHeader: "B नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "रोमांस के मामले में ये थोड़े खुले होते हैं। प्यार का इजहार ये कर लेते हैं। प्यार को लेकर ये धोखा भी खूब खाते हैं। इन्हें खुद पर कंट्रोल रखना आता है। खूबसूरत चीजों के ये दीवाने होते हैं। यह अपने अंदर कई तरह के राज को समेट कर रखते हैं, और कई बार तो इनके करीबी भी नहीं जान पाते इनकी गुप्त बातें।",

      "वैसे तो यह ज्यादा दोस्त नहीं बनाते, लेकिन जिससे भी दोस्ती रखते हैं, बिल्कुल दिल से रखते हैं। रोमांस के मामले में यह खुले विचार रखते हैं, और इजहार-ए-मोहब्बत से भी इन्हें कोई परहेज नहीं होता।",
      
      "हां, यह बात और है, कि प्यार में यह लोग धोखा भी खूब खाते हैं। खुद पर नियंत्रण रखना इनकी विशेषता है। खूबसूरत और आकर्षक चीजें इन्हें बेहद पसंद होती हैं।",
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  C: {
    hindiHeader: "C नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "C नाम वालों के लिए प्यार के महत्व की बात करें तो ये जिन्हें पसंद करते हैं उनके बेहद करीब हो जाते हैं। यदि इन्हें अपने हिसाब के कोई न मिले तो मस्त होकर अकेले भी रह लेते हैं। वैसे स्वभाव से ये काफी भावुक होते हैं दूसरों के दुख- दर्द में साथ देना और मदद करना इनकी खासियत होती है।",
      "खुशी में न सही लेकिन गम में यह कभी किसी का साथ नहीं छोड़ते और अंत तक निभाते हैं। स्वभाव से काफी इमोशनल और कभी-कभी चंचल होते हैं। रोमांस और प्यार के मामले में यह बहुत खुले होते हैं।",
      "यदि इन्हें अपने हिसाब से कोई न मिले तो भी ये मस्त होकर अकेले भी खुशी से रह लेते हैं। लेकिन जिन्हें पसंद करते हैं, उनके बेहद करीब होते हैं, और प्यार के मामले में काफी समर्पित होते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  D: {
    hindiHeader: "D नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "D नाम के लोग प्यार को लेकर काफी जिद्दी होते हैं। जो इन्हें पसंद हो, उन्हें पाने के लिए या फिर उनसे रिश्ता निभाने में कोई कसर नहीं छोड़ते। रिश्ते निभाने के मामले में ये बहुत विश्वासी होते हैं। यह लोगों के बातों पर ध्यान देना पसंद नहीं करते बल्कि अपने मन की करना ही इन्हें भाता है।",
      "एक बार यह लोग अगर कुछ करने की ठान लेते हैं, तो उस काम को पूरा करके ही मानते हैं। यह लोग स्मार्ट होते हैं, और बगैर किसी प्रयास के भी इनके व्यक्तित्व में गजब का आकर्षण होता है। किसी की मदद करने के मामले में यह हमेशा आगे रहते हैं, फिर चाहे वह दोस्त हो या दुश्मन, हमेशा मदद के लिए तैयार होते हैं।",
      "प्यार के मामले में D नाम वाले लोग काफी जिद्दी और दृढ़ होते हैं। जिन्हें यह पसंद करते हैं, उन्हें पाने के लिए यह अपने प्रयासों में कोई कसर नहीं छोड़ते। रिश्ता निभाने के मामले में भी यह लोग बड़े दिलवाले होते हैं और पूर्ण समर्पित होने के साथ ही विश्वासपात्र भी होते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  E: {
    hindiHeader: "E नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
       "प्यार को लेकर ये लोग उतने संजीदा नहीं रहते, इसलिए इनसे रिश्ते पीछे छूटने का किस्सा लगा ही रहता है। शुरुआत में ये दिलफेंक आशिक की तरह व्यवहार करते हैं, क्योंकि इनका दिल कब किसपर आ जाए कह नहीं सकते। लेकिन एक सच यह भी है कि जिन्हें ये फाइनली दिल में बिठा लेते हैं उनके प्रति पूरी तरह से सच्चे हो जाते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  F: {
    hindiHeader: "F नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "F नाम वाले लोग काफी जिम्मेदार किस्म के होते हैं। हां, इन्हें अकेले रहना काफी भाता है। ये स्वभाव से काफी भावुक होते हैं। हर चीज को लेकर ये बेहद कॉन्फिडेंट होते हैं। सोच-समझकर ही खर्च करना चाहते हैं ये। जीवन में हर चीज इनका काफी बैलेंस्ड होता है। ये लोग प्यार की काफी अहमियत होती है। ये खुद भी आकर्षक होते हैं और ऐसे लोगों को पसंद भी करते हैं। रोमांस तो समझिए कूट-कूटकर इनमें भरा होता है।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  G: {
    hindiHeader: "G नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "इनका व्यक्तित्व आकर्षक होता है, लेकिन यह लोग हर किसी से घुलने मिलने में रूचि नहीं रखते। जिन लोगों को यह अपना मानते हैं, उनकी अहमियत हमेशा बनाए रखते हैं।",
      "इस अक्षर के नाम के लोग दूसरों की मदद के लिए हमेशा ही खड़े होते हैं। ये खुद को हर परिस्थितियों में ढाल लेते हैं। ये चीजों को गोलमोल करके पेश करना पसंद नहीं करते, क्योंकि इनका दिल बिल्कुल साफ होता है। अपने किए से जल्द सबक लेते हैं और फूंक-फूंककर कदम आगे बढ़ाते हैं।",
      "ये प्यार को लेकर ईमानदार होते हैं। प्यार के मामले में ये समझदारी और धैर्य से काम लेते हैं। कमिटमेंट से पहले किसी पर बेवजह खर्च करना इनके लिए बेकार का काम है।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  H: {
    hindiHeader: "H नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "इस अक्षर के नाम वाले लोगों के लिए पैसे काफी मायने रखते हैं। ये लोग स्वभाव से काफी हंसमुख होते हैं। इसलिये इनके आसपास का माहौल भी एकदम हल्का-फुल्का रहता है।",
      "ये लोग दिल के सच्चे होते हैं। काफी रॉयल नेचर के होते हैं और मस्त मौला होकर जीवन गुजारना पसंद करते हैं। झटपट निर्णय लेना इनकी काबिलियत है और दूसरों की मदद के लिए आधी रात को भी ये तैयार होते हैं।",
      "प्यार का इजहार करना इन्हें नहीं आता, लेकिन जब ये प्यार में पड़ते हैं तो जी जीन से करते हैं। अपने मान-सम्मान को लेकर ये काफी चिंतित होती हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  I: {
    hindiHeader: "I नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "इनके हाथ तो काफी कुछ लगता है, लेकिन उन चीजों के हाथ से फिसलने में भी देर नहीं लगती। ये लोग प्यार के भूखे होते हैं। आपको वैसे लोग अपनी ओर खींच पाते हैं जो हर काम को काफी सोच-विचार के बाद ही करते हैं। स्वभाव से संवेदनशील और दिखने में बेहद आकर्षक होते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  J: {
    hindiHeader: "J नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "ये लोग की चंचल स्वभाव के होते हैं। लोग इनसे काफी चिढ़ते हैं, क्योंकि इनमें अच्छे गुणों के साथ-साथ खूबसूरती का भी सामंजस्य होता है। जो करने की ठान लेते हैं, उसे करके ही मानते हैं ये।",
      "पढऩे-लिखने में थोड़ा पीछे ही रहते हैं, लेकिन जिम्मेदारी की बात करें तो सबसे आगे खड़े रहेंगे ये। इन लोगों के चाहने वाले कई होते हैं। हमसफर के रूप में ये जिन्हें मिल जाएं समझिए खुशनसीब हैं वह। जीवन के हर मोड़ पर ये लोग साथ निभाते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  K: {
    hindiHeader: "K नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "इन लोगों को हर चीज में परफेक्शन चाहिए। चाहे बेडशीट के बिछाने का तरीका हो या फिर ऑफिस की फाइलें, सारी चीजें इन्हें सेट चाहिए। दूसरों से हटकर चलना इन्हें भाता है। पैसे कमाने के मामले में भी ये काफी आगे चलते हैं।",
      "स्वभाव से ये रोमांटिक होते हैं। अपने प्यार का इजहार खुलकर करना इन्हें खूब आता है। इन्हें स्मार्ट और समझदार साथी चाहिए और जबतक ऐसा कोई न मिले तब तक किसी एक पर टिकते नहीं ये।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  L: {
    hindiHeader: "L नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "ये लोग काफी चार्मिंग होते हैं। इन्हें बहुत ज्यादा पाने की तमन्ना नहीं होती, बल्कि छोटी-मोटी खुशियों से ये खुश रहते हैं। पैसों को लेकर समस्या बनती है, लेकिन किसी न किसी रास्ते इन्हें हल भी मिल जाता है।",
      "लोगों के साथ प्यार से पेश आते हैं ये। कल्पनाओं में जीते हैं और अपने परिवार को अपने जीवन का अहम हिस्सा मानते हैं। स्वभाव से बेहद ही रोमांटिक होते हैं ये। वैसे सच तो यह है कि अपनी काल्पनिक दुनिया का जिक्र ये अपने हमसफर तक से करना नहीं चाहते। प्यार के मामले मेंये आदर्शवादी होते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  M: {
    hindiHeader: "M नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "इनकी एक और खास बात यह है कि यह पैसे खर्च करने में अधिक सोच-विचार नहीं करते। इनका आकर्षण हमेशा शानदार और सबसे बेहतरीन चीज़ों की ओर होता है। यह जितनी भी चीज़ों में हाथ डालते हैं, वह चाहत रखते हैं कि वह सबसे अलग और बेहतरीन हो।",
      "प्यार के मामले में ये बहुत ही संवेदनशील होते हैं। जब ये किसी रिश्ते में होते हैं, तो पूरी तरह से उसमें डूब जाते हैं। यह चाहते हैं कि उनका साथी भी उनसे उतना ही प्यार और सम्मान दे, जितना वह अपनी ओर से देने के लिए तैयार रहते हैं। हालांकि, अपनी इस चाहत को यह सामने नहीं लाते। वे अपने दिल की बातों को मन में ही रखते हैं और सिर्फ अपने साथी के व्यवहार से यह उम्मीद करते हैं कि उन्हें वही प्यार और स्नेह मिलेगा। इसीलिए, अक्सर इनकी भावनाएँ दूसरों तक ठीक से पहुँच नहीं पातीं।",
      "इनकी यह प्रवृत्ति कभी-कभी उन्हें अकेला महसूस कराती है, क्योंकि वे अपनी जरूरतों और इच्छाओं को सामने नहीं ला पाते। ऐसे लोग अगर अपनी भावनाओं को खुलकर व्यक्त करने की आदत डालें, तो रिश्तों में बेहतर सामंजस्य बना सकते हैं और उन्हें ज़िन्दगी के हर पहलू में संतुलन मिल सकता है।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  N: {
    hindiHeader: "N नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "ये लोग काफी खुले विचारों के होते हैं। ये कब क्या करेंगे इसके बारे में ये खुद भी नहीं जानते। बेहद महत्वाकांक्षी होते हैं। काम के मामले में परफेक्शन की चाहत इनमें होती है। आपके व्यक्तित्व में ऐसा आकर्षण होता है, जो सामने वालों को खींच लाता है। ये दूसरों से पंगे लेने में ज्यादा देर नहीं लगाते। इन्हें आधारभूत चीजों की कभी कोई कमी नहीं रहती और आर्थिक दृष्टि से सम्पन्न होते हैं ये।",
      "रिश्तों के मामले में यह लोग बहुत ही संवेदनशील होते हैं। जब ये किसी के साथ प्यार में होते हैं, तो पूरी तरह से उसमें डूब जाते हैं। इनकी रोमांटिक भावनाएँ बहुत गहरी होती हैं, और यह अपने साथी के साथ हर पल को खास बनाना चाहते हैं। लेकिन कभी-कभी इन्हें फ्लर्ट करने में भी कोई हर्ज नहीं लगता। वे दिल से अपने प्यार के प्रति वफादार होते हैं, लेकिन कभी-कभी मस्ती में हल्की-फुल्की बातों को लेकर भी दूसरों से घुल-मिल जाते हैं।",
      "एक खास बात यह है कि ये लोग हमेशा मुस्कुराते रहते हैं। चाहे कोई भी समस्या हो या परिस्थिति, यह हमेशा अपने चेहरे पर मुस्कान बनाए रखते हैं। यही कारण है कि यह किसी भी वातावरण को हल्का और खुशहाल बना देते हैं। यह लोग खुले विचारों वाले, महत्वाकांक्षी, आकर्षक, और रिश्तों में संवेदनशील होते हैं। उनकी यह विशेषताएँ उन्हें दूसरों से अलग और खास बनाती हैं। यह अपने जीवन को पूरी तरह से जीते हैं और हमेशा खुद को बेहतर बनाने की दिशा में प्रयासरत रहते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  O: {
    hindiHeader: "O नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "इस अक्षर के नाम के लोगों के स्वभाव की बात करें तो बता दें कि इनका दिमाग काफी तेज दौड़ता है। ये बोलते कम हैं और करते ज्यादा हैं, शायद यही वजह है कि ये जल्दी ही उन हर ऊंचाइयों को छू लेते हैं जिनका ख्वाब ये देखा करते हैं। इन सबके बावजूद समाज के साथ चलना इन्हें पसंद है। जीवन के हर क्षेत्र में सफल होते हैं।",
      "प्यार की बात करें तो ये ईमानदार किस्म के होते हैं। साथी को धोखा देना इन्हें पसंद नहीं और ऐसा ही उनसे भी अपेक्षा रखते हैं। जिससे कमिटमेंट हो गया, बस पूरी जिंदगी उसपर न्योछावर करने को तैयार रहते हैं ये।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  P: {
    hindiHeader: "P नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "P से शुरू होने वाले नाम के लोग उलझनों में फंसे रहते हैं। वैसे, ये चाहते कुछ हैं और होता कुछ अलग ही है। काम को परफेक्शन के साथ करते हैं। इनके काम में सफाई और खरापन साफ झलकती है। खुले विचार के होते हैं ये। अपने आसपास के सभी लोगों का ख्याल रखते हैं और सबको साथ लेकर चलना चाहते हैं।",
      "हां, कभी-कभार अपने विचार दूसरों पर थोपने के कारण इन्हें नुकसान भी पहुंचता है। प्यार की बात करें तो सबसे पहले ये अपनी छवि से प्यार करते हैं। इन्हें खूबसूरत साथी खूब भाता है। कभी-कभार अपने साथी से ही दुश्मनी भी पाल लेते हैं, लेकिन चाहे लड़ते-झगड़ते सही साथ उनका कभी नहीं छोड़ते।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  Q: {
    hindiHeader: "Q नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "इन लोगों को जीवन में ज्यादा कुछ पाने की इच्छा नहीं होती, लेकिन नसीब इन्हें देता सब है। ये स्वभाव से सच्चे और ईमानदार होते हैं। नेचर से काफी क्रिएटिव होते हैं। ये अपनी ही दुनिया में खोए रहते हैं। प्यार की बात करें तो ये अपने साथी के साथ नहीं चल पाते। कभी विचारों में तो कभी काम में असमानता इन्हें झेलना ही पड़ता है। वैसे, आपके प्रति आकर्षण आसानी से हो जाता है।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  R: {
    hindiHeader: "R नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "हालांकि, फैमिली इनके लिए मायने रखती है और पढऩा-लिखना इन्हें नहीं भाता। जो भीड़ करे, उसे करने में इन्हें मजा नहीं आता। ये तो वह काम करना चाहते हैं, जिसे कोई नहीं कर सकता।",
      "इस नाम के अक्षर वाले लोग काफी तेजी से आगे बढ़ते हैं और धन-दौलत की कोई कमी नहीं रहती। अपने से ऊपर सोच-समझ और बुद्धि वाले लोग इन्हें आकर्षित करते हैं। दिखने में खूबसूरत और कोई ऐसा जिसपर आपको गर्व हो उनकी ओर आप खिंचे चले जाते हैं। वैसे वैवाहिक जीवन में उठा-पटक लगा ही रहता है।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  S: {
    hindiHeader: "S नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "प्यार के मामले में ये लोग बहुत गंभीर होते हैं। जब इन्हें किसी से सच्चा प्यार होता है, तो वे उसे पूरी तरह से समझते हुए और सोच-समझ कर ही उस रिश्ते में कदम रखते हैं। प्यार को लेकर इनकी सोच बहुत परिपक्व होती है, लेकिन इनकी शर्मीलापन की वजह से ये कभी-कभी अपनी भावनाओं का इज़हार करने में झिझकते हैं।",
      "यह लोग प्यार के मामले में थोड़े शर्मीले होते हैं और अक्सर पहल करने में पीछे रहते हैं। भले ही इनकी भावनाएँ बहुत गहरी हों, लेकिन अपने प्यार का इज़हार करना इनसे मुश्किल होता है। यह पूरी तरह से चाहते हैं कि उनका साथी ही सबसे पहले कदम उठाए। इनकी यह विशेषता प्यार में गंभीरता को दर्शाती है, और जब यह किसी से जुड़ते हैं, तो पूरी तरह से उसके प्रति वफादार रहते हैं।",
      "इनका स्वभाव दिल से अच्छा होता है, हालांकि कभी-कभी उनका बातचीत करने का तरीका दूसरों को गलत लग सकता है। यही कारण है कि कुछ लोग इन्हें सही से समझ नहीं पाते। फिर भी, इनका इरादा कभी भी बुरा नहीं होता।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  T: {
    hindiHeader: "T नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "प्यार के मामले में टी नाम वाले लोग बहुत रोमांटिक होते हैं। जब ये किसी से प्यार करते हैं, तो उसे खास फील कराने में कोई कसर नहीं छोड़ते। ये अपने साथी के साथ-साथ अपने बाकी रिश्तों को भी बहुत अहमियत देते हैं। प्यार में ये थोड़े शर्मीले हो सकते हैं, लेकिन अपने छोटे-छोटे प्यारे अंदाज से अपनी भावनाएँ जता देते हैं। इनके लिए रिश्ते दिल से दिल तक का खेल होते हैं।",
      "खर्च करने में इनका हाथ बहुत खुला होता है। इन्हें अच्छी चीजें खरीदना, स्वादिष्ट खाना खाना और घूमना-फिरना बहुत पसंद होता है। ये पैसे बचाने से ज्यादा उसे एंजॉय करने में यकीन रखते हैं। इनका मानना है कि जिंदगी को मस्ती से जीना चाहिए। इनकी यह खूबी इन्हें सबसे अलग बनाती है – न ज्यादा मेहनत की चिंता, न पैसे की फिक्र, बस अपने स्टाइल में जिंदगी का मजा लेते हैं।",
      "हालाँकि, इनका आलस कभी-कभी इन्हें थोड़ा परेशान कर देता है। अगर ये थोड़ी और मेहनत कर लें, तो शायद और बड़ी कामयाबी हासिल कर सकते हैं। फिर भी, ये अपने चार्म और स्मार्टनेस से हर मुश्किल को आसान बना लेते हैं। इनकी जिंदगी का फंडा साफ है – खुश रहो, खुश रखो, और अपने तरीके से आगे बढ़ो। ये लोग सच में अपने अंदाज के मालिक होते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  U: {
    hindiHeader: "U नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "प्यार और रिश्तों के मामले में ये लोग बेहद समर्पित होते हैं। जब इन्हें किसी से सच्चा प्यार होता है, तो वे उस रिश्ते में पूरी तरह से खो जाते हैं। वे अपने साथी को सबसे अलग और खास देखना पसंद करते हैं, और उनके प्रति पूरी तरह से समर्पित रहते हैं। इनका प्यार इतना गहरा होता है कि वे हमेशा अपने साथी के ख्यालों में खोए रहते हैं। इनकी खुशियाँ भी अपने साथी की खुशियों से जुड़ी होती हैं। यह अपनी खुशी से ज्यादा, अपने साथी की खुशी को प्राथमिकता देते हैं।",
      "इनके रिश्ते में यह सबसे बड़ी विशेषता होती है कि वे हमेशा अपने साथी की देखभाल करने के लिए तत्पर रहते हैं। जब बात प्यार की होती है, तो यह कभी भी अपनी खुशी को अपने साथी की खुशी से आगे नहीं रखते। यह हमेशा यह चाहते हैं कि उनका साथी खुश रहे, और उनका साथी हमेशा भीड़ में से अलग और खास नजर आए।",
      "'U' नाम वाले लोग प्यार, रिश्तों और दूसरों के साथ अपने व्यवहार में बहुत ही समर्पित और दिल से अच्छे होते हैं। हालांकि, कभी-कभी कई कामों को एक साथ करने की वजह से उन्हें समस्याओं का सामना भी करना पड़ता है, लेकिन उनका दिल और सच्चाई हमेशा दूसरों के लिए काम आती है।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  V: {
    hindiHeader: "V नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "प्यार के मामले में भी ये लोग बहुत ही संकोची और शर्मीले होते हैं। यह अपने प्यार का इज़हार कभी नहीं करते, बल्कि अक्सर इसे अपनी आँखों और दिल में छुपाकर रखते हैं। इनकी यह शर्म और संकोच उनकी भावनाओं को बहुत गहरे तरीके से छिपाए रखता है। इसके बावजूद, जब ये हंसी-मज़ाक करते हैं, तो उनमें से कभी-कभी ऐसी गहरी बातें निकल आती हैं, जिनसे लोग इनकी असल भावनाओं को समझ सकते हैं।",
      "हालांकि, इनकी यही बातें कभी-कभी खुद इन्हें भी परेशान कर देती हैं। ये अक्सर अपनी बातों और भावनाओं को समझने में उलझ जाते हैं, जिससे उन्हें परेशानी का सामना करना पड़ता है। यह लोगों के सामने खुले रूप से अपनी भावनाएँ व्यक्त नहीं करते, बल्कि अक्सर हंसी में उन भावनाओं को छुपाने की कोशिश करते हैं।",
      "'V' नाम वाले लोग स्वभाव से स्वतंत्र, निजी और आरामदायक होते हैं। वे अपनी भावनाओं को खुलकर व्यक्त नहीं करते, लेकिन उनकी बातों में बहुत गहराई होती है। प्यार में यह थोड़े शर्मीले होते हैं, और अपनी भावनाओं को अक्सर छुपा कर रखते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  W: {
    hindiHeader: "W नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "प्यार के मामले में ये थोड़े संकोची होते हैं। वे हमेशा ना-ना करते हुए ही किसी रिश्ते में आगे बढ़ते हैं। इनकी यह शरम और संकोच इनके प्यार के प्रति गंभीरता को दर्शाती है। हालांकि, इन्हें ज्यादा दिखावा पसंद नहीं होता, और यह अपने साथी को वैसे ही स्वीकार करते हैं, जैसे वह हैं। इनकी सबसे बड़ी खूबी यही है कि ये किसी को भी बिना किसी नकली आडंबर के स्वीकार करते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  X: {
    hindiHeader: "X नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "प्यार के मामले में ये लोग फ्लर्ट करना ज्यादा पसंद करते हैं। कभी-कभी ये एक से ज्यादा रिश्तों को साथ लेकर आगे बढ़ते हैं, क्योंकि इन्हें एक ही रिश्ते में बंधकर रहना उतना आकर्षक नहीं लगता।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  Y: {
    hindiHeader: "Y नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "हालांकि, ये लोग ज्यादा बातचीत करना पसंद नहीं करते। इनका स्वभाव थोड़ा संकोची होता है, और वे ज़्यादा बातचीत करने की बजाय खुद में ही रहना पसंद करते हैं। यह अपनी निजी ज़िन्दगी और विचारों को अधिकतर खुद तक ही रखते हैं।",
      "धन और दौलत की बात करें, तो ये लोग किस्मत से सम्पन्न होते हैं। हालांकि, उन्हें इसे हासिल करने में काफी समय और मेहनत लगती है। यह लोग किसी भी चीज़ को जल्दबाजी में नहीं लेते, बल्कि धीरे-धीरे अपने लक्ष्यों की ओर बढ़ते हैं और समय के साथ अपने लिए एक मजबूत स्थिति बनाते हैं।",
      "प्यार के मामले में, ये लोग थोड़ा चूक जाते हैं। उन्हें अपने साथी की छोटी-छोटी बातें याद रखना मुश्किल होता है। कभी-कभी वे अपने साथी की जरूरतों और इच्छाओं को नजरअंदाज कर देते हैं। फिर भी, इनकी सच्ची भावनाएँ और रोमांटिक स्वभाव इनके रिश्तों में गहरी समझ और विश्वास बनाते हैं। यही वजह है कि इनकी गलतियों को साथी आसानी से माफ कर देता है। इनके प्यार में एक गहरी सच्चाई और समर्पण होता है, जो रिश्ते को और मजबूत बनाता है।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  Z: {
    hindiHeader: "Z नाम वालों की पूरी जानकारी",
    hindiParagraphs: [
      "प्यार के मामले में ये लोग बहुत रोमांटिक होते हैं। इन्हें किसी को अपनी ओर आकर्षित करने में कोई कठिनाई नहीं होती, क्योंकि इनकी नजाकत और स्वभाव ही इतना आकर्षक होता है। जब यह किसी से प्यार करते हैं, तो पूरी तरह से उस रिश्ते में समर्पित होते हैं। अपने प्यार के सामने ये किसी को भी अहमियत नहीं देते, और पूरी तरह से अपने साथी के प्रति वफादार रहते हैं।"
    ],
    englishTitle: "Astrology and Your Name",
    englishParagraphs: [
      "In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.",
      "Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.",
      "Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.",
      "Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.",
      "Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences."
    ]
  },
  // ... Add similar objects for D-Z ...
};

const DEFAULT_FULL_DATA = {
  hindiHeader: "पूरी जानकारी",
  hindiParagraphs: [
    "इस अक्षर से नाम वाले लोग विशेष गुणों के धनी होते हैं।",
    "इनकी सोच और कार्यशैली दूसरों से अलग होती है।",
    "ये लोग अपने जीवन में संतुलन और सफलता प्राप्त करते हैं।",
    "इनका भाग्य इन्हें आगे बढ़ने में मदद करता है।"
  ],
  englishTitle: "Astrology and Your Name",
  englishParagraphs: [
    "People with this letter have unique strengths and talents.",
    "They excel in their chosen fields and inspire others.",
    "Their lucky gemstone and planet vary with their personality.",
    "Their life lesson is to embrace growth and opportunity."
  ]
};

const LetterFullDetails: React.FC<LetterFullDetailsProps> = ({ letter, onBack }) => {
  const data = LETTER_FULL_DATA[letter.toUpperCase()] || DEFAULT_FULL_DATA;

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col items-center justify-start py-8 px-2">
      {/* Hindi Header */}
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 text-center mb-4" style={{fontFamily: 'Arial'}}>{data.hindiHeader}</h1>
        <div className="text-gray-100 text-base md:text-lg mb-4 space-y-2 text-center">
          {data.hindiParagraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <button
          onClick={onBack}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded mb-8 transition-colors text-lg"
        >
          {"यहा पर क्लिक करके अपने फ्रेंड को भेजे"}
        </button>
      </div>

      {/* English Section */}
      <div className="w-full max-w-5xl mx-auto mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300 text-center">{data.englishTitle}</h2>
        <div className="space-y-6 text-gray-100 text-base">
          {data.englishParagraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
};

export default LetterFullDetails; 