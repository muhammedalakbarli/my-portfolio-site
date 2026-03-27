/* ═══════════════════════════════════════
   i18n.js — Çoxdilli dəstək
   AZ | EN | RU | DE
═══════════════════════════════════════ */

const TRANSLATIONS = {
  az: {
    nav_home:         'Ana Səhifə',
    nav_about:        'Haqqımda',
    nav_blogs:        'Bloq',
    nav_projects:     'Layihələr',
    nav_certificates: 'Sertifikatlar',
    nav_contact:      'Əlaqə',

    home_eyebrow:     'Kompüter Mühəndisliyi · Bakı, Azərbaycan',
    home_title:       'Salam, mən<br><em>Mahammad</em>',
    home_sub:         '2-ci kurs Kompüter Mühəndisliyi tələbəsi, Qarabağ Universiteti.<br>Proqram yazıram, ideyaları araşdırıram və peşəkarlığa əhəmiyyət verirəm.',
    home_btn_projects:'Layihələrə bax',
    home_btn_contact: 'Əlaqə saxla',
    home_status:      'Fürsətlər üçün açığam',
    home_footer_copy: 'Azərbaycanda hazırlanıb.',
    home_footer_made: 'Həmişə öyrənirəm, həmişə inşa edirəm.',
    feat1_tag:        'Nailiyyət',
    feat1_title:      'Qarabağ Universitetinə Qəbul',
    feat1_desc:       'Mühəndislik yolumda yeni bir fəsil...',
    feat2_tag:        'Həyat',
    feat2_title:      'Holberton Təcrübəsi',
    feat2_desc:       'Həmyaşıd öyrənmə və sıx kodlaşdırma sessiyaları.',
    feat3_tag:        'Layihə',
    feat3_title:      'İlk Qlobal Deploy',
    feat3_desc:       'Kodumun ilk istifadəçilərə çatdığı an.',
    feat_read:        'Oxu →',
    home_featured_title: 'Önə Çıxan Xatirələr',
    home_memories_label: 'Xatirələr və Nailiyyətlər',
    home_memories_sub: 'Həyatımdan önəmli anlar',

    about_eyebrow:    'Mən kimim',
    about_title:      'Haqqımda',
    about_bio:        'Mən Mahammad Alakbarlı, Qarabağ Universitetinin 2-ci kurs Kompüter Mühəndisliyi tələbəsiyəm. Mühüm proqram yazılımı yaratmağa həvəsim var. Holberton School-da Kompüter Elmini öyrəndim — layihə əsaslı tədris mənim problem həll etmə bacarığımı inkişaf etdirdi. Təmiz koda, düşünülmüş dizayna və fasiləsiz inkişafa inanıram.',
    about_education:  'Təhsil',
    about_volunteering:'Könüllülük',
    about_skills:     'Bacarıqlar',
    ku_sub:           'Kompüter Mühəndisliyi · 2-ci kurs',
    ku_desc:          'Kompüter mühəndisliyinin əsaslarını öyrənirəm — alqoritmlər, məlumat strukturları, əməliyyat sistemləri və proqram inkişafı. Texnologiya sahəsindəki karyeramı üçün güclü nəzəri və praktiki baza qururam.',
    hs_sub:           'Kompüter Elmi',
    hs_desc:          'Sürətli, layihə əsaslı kompüter elmi proqramı. Aşağı səviyyəli C proqramlaşdırması, Python, sistem administrasiyası, veb inkişaf və birgə mühəndislik təcrübələrini əhatə etdi. Həmyaşıd öyrənmə onun özəyindədir.',
    eco_sub:          'Texnologiya & Davamlılıq',
    eco_desc:         'Texnologiya vasitəsilə ətraf mühitin qorunması təşəbbüslərinə töhfə verirəm. Yerli icmalar daxilində davamlı təcrübələri təşviq edən rəqəmsal alətlər üzərində çalışıram.',
    ssg_sub:          'Könüllü · Tamaşaçı Xidmətləri',
    ssg_desc:         'III MDB Oyunlarında könüllü kimi xidmət etdim. Tamaşaçı xidmətləri komandası üzvü olaraq gələn qonaqları qarşıladım, onlara istiqamət göstərdim və tədbirə uyğun müsbət mühitin yaradılmasına töhfə verdim.',
    skill_problem:    'Problemin həlli',

    blogs_eyebrow:    'Fikirlər & Yazılar',
    blogs_empty:      'Hələlik heç bir post yoxdur.',
    blogs_read:       'Oxu →',
    blogs_back:       '← Geri',

    projects_eyebrow: 'Nə qururam',
    projects_empty:   'Hələlik heç bir layihə yoxdur.',

    certs_eyebrow:    'Nailiyyətlər',
    certs_title:      'Sertifikatlar <em>&</em> Lisenziyalar',
    certs_empty:      'Hələlik heç bir sertifikat yoxdur.',
    certs_verify:     'Yoxla →',

    contact_eyebrow:  'Əlaqə',
    contact_title:    'Əlaqə',
    contact_intro:    'Bir fikrin, layihən, əməkdaşlıq təklifi var? Mənə yaz. Mümkün qədər tez cavab verəcəm.',
    contact_lbl_name: 'Ad',
    contact_ph_name:  'Adın...',
    contact_lbl_email:'Email',
    contact_ph_email: 'email@...',
    contact_lbl_sub:  'Mövzu',
    contact_ph_sub:   'Nə barədə...',
    contact_lbl_msg:  'Mesaj',
    contact_ph_msg:   'Mesajın...',
    contact_send:     'Göndər →',
    contact_success:  '✓ Mesajın göndərildi! Tezliklə cavab verəcəm.',
  },

  en: {
    nav_home:         'Home',
    nav_about:        'About',
    nav_blogs:        'Blog',
    nav_projects:     'Projects',
    nav_certificates: 'Certificates',
    nav_contact:      'Contact',

    home_eyebrow:     'Computer Engineering · Baku, Azerbaijan',
    home_title:       "Hello, I'm<br><em>Mahammad</em>",
    home_sub:         '2nd year Computer Engineering student at Karabakh University.<br>I build software, explore ideas, and care about craft.',
    home_btn_projects:'View Projects',
    home_btn_contact: 'Get in Touch',
    home_status:      'Available for opportunities',
    home_footer_copy: 'Made in Azerbaijan.',
    home_footer_made: 'Always learning, always building.',
    feat1_tag:        'Achievement',
    feat1_title:      'Karabakh University Admission',
    feat1_desc:       'A new chapter in my engineering journey...',
    feat2_tag:        'Life',
    feat2_title:      'Holberton Experience',
    feat2_desc:       'Peer learning and intense coding sessions.',
    feat3_tag:        'Project',
    feat3_title:      'First Global Deployment',
    feat3_desc:       'When my code reached the first users.',
    feat_read:        'Read More →',
    home_featured_title: 'Featured Memories',
    home_memories_label: 'Memories & Achievements',
    home_memories_sub: 'Special moments from my life',

    about_eyebrow:    'Who I Am',
    about_title:      'About <em>Me</em>',
    about_bio:        "I'm Mahammad Alakbarli, a 2nd year Computer Engineering student at Karabakh University with a passion for building software that matters. I studied Computer Science at Holberton School, where project-based learning sharpened my problem-solving instincts. I believe in clean code, thoughtful design, and continuous growth.",
    about_education:  'Education',
    about_volunteering:'Volunteering',
    about_skills:     'Skills',
    ku_sub:           'Computer Engineering · 2nd Year',
    ku_desc:          'Studying computer engineering fundamentals — algorithms, data structures, operating systems, and software development. Building a strong theoretical and practical foundation for a career in tech.',
    hs_sub:           'Computer Science',
    hs_desc:          'Intensive, project-based computer science program. Covered low-level C programming, Python, system administration, web development, and collaborative software engineering practices. Peer learning at its core.',
    eco_sub:          'Technology & Sustainability',
    eco_desc:         'Contributing to environmental awareness initiatives through technology. Working on digital tools and campaigns that promote sustainable practices within local communities.',
    ssg_sub:          'Volunteer · Spectator Services',
    ssg_desc:         'Served as a volunteer at the 3rd CIS Games. As a member of the spectator services team, I welcomed and guided guests, assisted with directions, and contributed to creating a welcoming atmosphere throughout the event.',
    skill_problem:    'Problem Solving',

    blogs_eyebrow:    'Thoughts & Writings',
    blogs_empty:      'No posts yet.',
    blogs_read:       'Read →',
    blogs_back:       '← Back',

    projects_eyebrow: 'What I Build',
    projects_empty:   'No projects yet.',

    certs_eyebrow:    'Achievements',
    certs_title:      'Certificates <em>&</em> Licenses',
    certs_empty:      'No certificates yet.',
    certs_verify:     'Verify →',

    contact_eyebrow:  'Get In Touch',
    contact_title:    'Contact',
    contact_intro:    'Have an idea, a project, or a collaboration proposal? Write to me. I will reply as soon as possible.',
    contact_lbl_name: 'Name',
    contact_ph_name:  'Your name...',
    contact_lbl_email:'Email',
    contact_ph_email: 'email@...',
    contact_lbl_sub:  'Subject',
    contact_ph_sub:   'What is it about...',
    contact_lbl_msg:  'Message',
    contact_ph_msg:   'Your message...',
    contact_send:     'Send →',
    contact_success:  '✓ Message sent! I will reply soon.',
  },

  ru: {
    nav_home:         'Главная',
    nav_about:        'Обо мне',
    nav_blogs:        'Блог',
    nav_projects:     'Проекты',
    nav_certificates: 'Сертификаты',
    nav_contact:      'Контакт',

    home_eyebrow:     'Компьютерная инженерия · Баку, Азербайджан',
    home_title:       'Привет, я<br><em>Mahammad</em>',
    home_sub:         'Студент 2-го курса факультета компьютерной инженерии Карабахского университета.<br>Создаю ПО, исследую идеи и ценю мастерство.',
    home_btn_projects:'Смотреть проекты',
    home_btn_contact: 'Связаться',
    home_status:      'Открыт для возможностей',
    home_footer_copy: 'Сделано в Азербайджане.',
    home_footer_made: 'Всегда учусь, всегда создаю.',
    feat1_tag:        'Достижение',
    feat1_title:      'Поступление в Карабахский университет',
    feat1_desc:       'Новая глава в моём инженерном пути...',
    feat2_tag:        'Жизнь',
    feat2_title:      'Опыт в Holberton',
    feat2_desc:       'Одноранговое обучение и интенсивные сессии программирования.',
    feat3_tag:        'Проект',
    feat3_title:      'Первый глобальный деплой',
    feat3_desc:       'Когда мой код достиг первых пользователей.',
    feat_read:        'Читать →',
    home_featured_title: 'Избранные воспоминания',
    home_memories_label: 'Воспоминания и достижения',
    home_memories_sub: 'Важные моменты из моей жизни',

    about_eyebrow:    'Кто я',
    about_title:      'Обо <em>мне</em>',
    about_bio:        'Я Мухаммад Алакбарли, студент 2-го курса факультета компьютерной инженерии Карабахского университета. Увлечён созданием значимого программного обеспечения. Изучал компьютерные науки в Holberton School, где проектное обучение отточило мои навыки решения задач. Верю в чистый код, вдумчивый дизайн и непрерывный рост.',
    about_education:  'Образование',
    about_volunteering:'Волонтёрство',
    about_skills:     'Навыки',
    ku_sub:           'Компьютерная инженерия · 2-й курс',
    ku_desc:          'Изучаю основы компьютерной инженерии — алгоритмы, структуры данных, операционные системы и разработку ПО. Формирую прочную теоретическую и практическую базу для карьеры в IT.',
    hs_sub:           'Компьютерные науки',
    hs_desc:          'Интенсивная программа на основе проектов. Охватывала низкоуровневое программирование на C, Python, системное администрирование, веб-разработку и практики совместной разработки. В основе — одноранговое обучение.',
    eco_sub:          'Технологии и устойчивость',
    eco_desc:         'Участвую в инициативах по экологической осведомлённости через технологии. Работаю над цифровыми инструментами и кампаниями, продвигающими устойчивые практики в местных сообществах.',
    ssg_sub:          'Волонтёр · Обслуживание зрителей',
    ssg_desc:         'Работал волонтёром на III Играх СНГ. В составе команды по обслуживанию зрителей встречал гостей, помогал с ориентацией и способствовал созданию гостеприимной атмосферы на мероприятии.',
    skill_problem:    'Решение задач',

    blogs_eyebrow:    'Мысли и записи',
    blogs_empty:      'Постов пока нет.',
    blogs_read:       'Читать →',
    blogs_back:       '← Назад',

    projects_eyebrow: 'Что я строю',
    projects_empty:   'Проектов пока нет.',

    certs_eyebrow:    'Достижения',
    certs_title:      'Сертификаты <em>&</em> Лицензии',
    certs_empty:      'Сертификатов пока нет.',
    certs_verify:     'Проверить →',

    contact_eyebrow:  'Связаться',
    contact_title:    'Контакт',
    contact_intro:    'Есть идея, проект или предложение о сотрудничестве? Напишите мне. Отвечу как можно скорее.',
    contact_lbl_name: 'Имя',
    contact_ph_name:  'Ваше имя...',
    contact_lbl_email:'Эл. почта',
    contact_ph_email: 'email@...',
    contact_lbl_sub:  'Тема',
    contact_ph_sub:   'О чём речь...',
    contact_lbl_msg:  'Сообщение',
    contact_ph_msg:   'Ваше сообщение...',
    contact_send:     'Отправить →',
    contact_success:  '✓ Сообщение отправлено! Скоро отвечу.',
  },

  de: {
    nav_home:         'Startseite',
    nav_about:        'Über mich',
    nav_blogs:        'Blog',
    nav_projects:     'Projekte',
    nav_certificates: 'Zertifikate',
    nav_contact:      'Kontakt',

    home_eyebrow:     'Informatik-Ingenieurwesen · Baku, Aserbaidschan',
    home_title:       'Hallo, ich bin<br><em>Mahammad</em>',
    home_sub:         'Student im 2. Jahr des Studiengangs Informatik-Ingenieurwesen an der Karabach-Universität.<br>Ich entwickle Software, erforsche Ideen und lege Wert auf Qualität.',
    home_btn_projects:'Projekte ansehen',
    home_btn_contact: 'Kontakt aufnehmen',
    home_status:      'Offen für Möglichkeiten',
    home_footer_copy: 'Hergestellt in Aserbaidschan.',
    home_footer_made: 'Immer lernend, immer aufbauend.',
    feat1_tag:        'Errungenschaft',
    feat1_title:      'Aufnahme an der Karabach-Universität',
    feat1_desc:       'Ein neues Kapitel in meinem Ingenieurweg...',
    feat2_tag:        'Leben',
    feat2_title:      'Holberton-Erfahrung',
    feat2_desc:       'Peer-Learning und intensive Programmiersitzungen.',
    feat3_tag:        'Projekt',
    feat3_title:      'Erstes globales Deployment',
    feat3_desc:       'Als mein Code die ersten Nutzer erreichte.',
    feat_read:        'Mehr lesen →',
    home_featured_title: 'Ausgewählte Erinnerungen',
    home_memories_label: 'Erinnerungen & Errungenschaften',
    home_memories_sub: 'Besondere Momente aus meinem Leben',

    about_eyebrow:    'Wer ich bin',
    about_title:      'Über <em>mich</em>',
    about_bio:        'Ich bin Mahammad Alakbarli, Student im 2. Jahr des Studiengangs Informatik-Ingenieurwesen an der Karabach-Universität, mit einer Leidenschaft für bedeutungsvolle Software. Ich studierte Informatik an der Holberton School, wo projektbasiertes Lernen mein Problemlösungsdenken schärfte. Ich glaube an sauberen Code, durchdachtes Design und kontinuierliches Wachstum.',
    about_education:  'Bildung',
    about_volunteering:'Ehrenamt',
    about_skills:     'Fähigkeiten',
    ku_sub:           'Informatik-Ingenieurwesen · 2. Jahr',
    ku_desc:          'Studium der Grundlagen des Informatik-Ingenieurwesens — Algorithmen, Datenstrukturen, Betriebssysteme und Softwareentwicklung. Aufbau einer soliden theoretischen und praktischen Basis für eine Karriere in der Technologie.',
    hs_sub:           'Informatik',
    hs_desc:          'Intensives, projektbasiertes Informatikprogramm. Behandelt wurden C-Programmierung auf niedriger Ebene, Python, Systemadministration, Webentwicklung und kollaborative Softwareentwicklungspraktiken. Peer-Learning als Kernprinzip.',
    eco_sub:          'Technologie & Nachhaltigkeit',
    eco_desc:         'Beitrag zu Initiativen zur Umweltsensibilisierung durch Technologie. Arbeit an digitalen Tools und Kampagnen zur Förderung nachhaltiger Praktiken in lokalen Gemeinschaften.',
    ssg_sub:          'Ehrenamtlicher · Zuschauerdienste',
    ssg_desc:         'Ehrenamtlicher Helfer bei den III. GUS-Spielen. Als Mitglied des Zuschauerdienst-Teams empfing ich Gäste, half bei der Orientierung und trug zur Schaffung einer einladenden Atmosphäre bei der Veranstaltung bei.',
    skill_problem:    'Problemlösung',

    blogs_eyebrow:    'Gedanken & Texte',
    blogs_empty:      'Noch keine Beiträge.',
    blogs_read:       'Lesen →',
    blogs_back:       '← Zurück',

    projects_eyebrow: 'Was ich baue',
    projects_empty:   'Noch keine Projekte.',

    certs_eyebrow:    'Errungenschaften',
    certs_title:      'Zertifikate <em>&</em> Lizenzen',
    certs_empty:      'Noch keine Zertifikate.',
    certs_verify:     'Überprüfen →',

    contact_eyebrow:  'Kontakt aufnehmen',
    contact_title:    'Kontakt',
    contact_intro:    'Haben Sie eine Idee, ein Projekt oder einen Kooperationsvorschlag? Schreiben Sie mir. Ich antworte so schnell wie möglich.',
    contact_lbl_name: 'Name',
    contact_ph_name:  'Ihr Name...',
    contact_lbl_email:'E-Mail',
    contact_ph_email: 'email@...',
    contact_lbl_sub:  'Betreff',
    contact_ph_sub:   'Worum geht es...',
    contact_lbl_msg:  'Nachricht',
    contact_ph_msg:   'Ihre Nachricht...',
    contact_send:     'Senden →',
    contact_success:  '✓ Nachricht gesendet! Ich antworte bald.',
  },
};

function t(key) {
  const lang = localStorage.getItem('lang') || 'az';
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.az[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  const lang = localStorage.getItem('lang') || 'az';
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations();
  if (typeof renderPosts     === 'function') renderPosts();
  if (typeof renderCerts     === 'function') renderCerts();
  if (typeof renderProjects  === 'function') renderProjects();
}

function toggleLangMenu() {
  document.getElementById('lang-picker').classList.toggle('open');
}

function chooseLang(lang) {
  document.getElementById('lang-picker').classList.remove('open');
  document.getElementById('lang-label').textContent = lang.toUpperCase();
  setLang(lang);
}
