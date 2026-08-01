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
    home_btn_cv:      'CV yüklə',
    home_btn_contact: 'Əlaqə saxla',
    home_status:      'Fürsətlər üçün açığam',
    home_stack_label: 'Texnologiyalar',
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
    about_bio:        'Mən Mahammad Alakbarlı — Qarabağ Universitetinin Kompüter Mühəndisliyi ixtisası üzrə ikinci kurs tələbəsiyəm. Proqramlaşdırmaya akademik öhdəlik kimi deyil, real problemləri həll etməyin vasitəsi kimi baxıram; elə buna görə də vaxtımın çoxunu dərslikdən kənarda — pilotsuz uçuş aparatları üçün görmə sistemlərindən məktəblilər üçün təhsil platformalarına qədər canlı layihələr qurmağa sərf edirəm. Mühəndislik təfəkkürümün bünövrəsini Holberton School-da qoydum: tədrisin bütünlüklə layihə üzərində qurulması məni nəzəriyyəni işləyən məhsula çevirməyə və qarşıya çıxan çətinliyi kimsədən gözləmədən özüm aradan qaldırmağa alışdırdı. Yazdığım kodun oxunaqlı, quruluşun aydın olmasına önəm verir, öyrənməyi isə peşənin ayrılmaz hissəsi sayıram.',
    about_education:  'Təhsil',
    about_volunteering:'Könüllülük',
    about_skills:     'Bacarıqlar',
    ku_sub:           'Kompüter Mühəndisliyi · 2-ci kurs',
    ku_desc:          'Alqoritmlər, məlumat strukturları, əməliyyat sistemləri və proqram mühəndisliyi üzrə fundamental hazırlıq alıram. Auditoriyada öyrəndiyim nəzəriyyəni öz layihələrimdə sınaqdan keçirməyə çalışıram — praktika ilə birləşəndə bu biliklər çox daha davamlı olur.',
    hs_sub:           'Kompüter Elmi',
    hs_desc:          'İntensiv, tamamilə layihə üzərində qurulmuş kompüter elmi proqramı. C ilə aşağı səviyyəli proqramlaşdırma, Python, sistem administrasiyası və veb inkişafı əhatə etdi — hazır cavabların verilmədiyi, hər problemi özün araşdırıb həll etdiyin bir mühit idi. Həmyaşıd öyrənmə metodu isə mənə komandada işləməyi və başqasının koduna məsuliyyətlə yanaşmağı öyrətdi.',
    eco_sub:          'Texnologiya & Davamlılıq',
    eco_desc:         'ENACTUS komandasında texnologiyanın sosial və ekoloji problemlərin həllinə necə tətbiq oluna biləcəyi üzərində işləyirəm. Rolum əsasən rəqəmsal tərəfdir — davamlılıq təşəbbüslərini gündəlik həyata yaxınlaşdıran alətlər qurmaq.',
    ssg_sub:          'Könüllü · Tamaşaçı Xidmətləri',
    ssg_desc:         'III MDB Oyunlarında Tamaşaçı Xidmətləri komandasının bir hissəsi kimi könüllü oldum. Minlərlə qonağın fasiləsiz axını içində insanları qarşılamaq, istiqamətləndirmək və sakit atmosfer saxlamaq mənə təzyiq altında soyuqqanlı qalmağı və komandaya tez uyğunlaşmağı öyrətdi.',
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
    home_btn_cv:      'Download CV',
    home_btn_contact: 'Get in Touch',
    home_status:      'Available for opportunities',
    home_stack_label: 'Tech Stack',
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
    about_bio:        "I'm Mahammad Alakbarli, a second-year Computer Engineering student at Karabakh University. I treat programming less as coursework and more as a way to solve real problems, which is why most of my time goes into projects outside the syllabus — from computer-vision systems for unmanned aircraft to learning platforms for schoolchildren. I built the foundation of my engineering thinking at Holberton School, where a fully project-based approach taught me to turn theory into working software and to work through hard problems on my own rather than wait for answers. I care about code that reads clearly and structure that makes sense, and I treat continuous learning as part of the job, not something separate from it.",
    about_education:  'Education',
    about_volunteering:'Volunteering',
    about_skills:     'Skills',
    ku_sub:           'Computer Engineering · 2nd Year',
    ku_desc:          "I'm building a solid grounding in algorithms, data structures, operating systems, and software engineering. I try to test the theory from lectures against my own projects — the knowledge sticks far better once practice is involved.",
    hs_sub:           'Computer Science',
    hs_desc:          "An intensive, entirely project-based computer science program covering low-level C, Python, system administration, and web development. There were no ready answers — you researched and solved each problem yourself. Its peer-learning model also taught me to work in a team and to treat someone else's code with care.",
    eco_sub:          'Technology & Sustainability',
    eco_desc:         'With the ENACTUS team, I explore how technology can be applied to social and environmental problems. My part is mostly the digital side — building tools that bring sustainability initiatives closer to everyday life.',
    ssg_sub:          'Volunteer · Spectator Services',
    ssg_desc:         'I volunteered on the Spectator Services team at the 3rd CIS Games. Welcoming and directing guests and keeping a calm atmosphere amid a constant flow of thousands of people taught me to stay composed under pressure and adapt quickly within a team.',
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
    home_btn_cv:      'Скачать CV',
    home_btn_contact: 'Связаться',
    home_status:      'Открыт для возможностей',
    home_stack_label: 'Технологии',
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
    about_bio:        'Меня зовут Мухаммад Алакбарли, я студент второго курса компьютерной инженерии Карабахского университета. Отношусь к программированию не как к учебной обязанности, а как к способу решать реальные задачи, поэтому большую часть времени посвящаю проектам вне программы — от систем компьютерного зрения для беспилотников до образовательных платформ для школьников. Основу инженерного мышления я заложил в Holberton School, где полностью проектный подход научил меня превращать теорию в работающий продукт и самостоятельно доводить сложные задачи до решения. Ценю читаемый код и продуманную структуру, а непрерывное обучение считаю частью профессии, а не чем-то отдельным.',
    about_education:  'Образование',
    about_volunteering:'Волонтёрство',
    about_skills:     'Навыки',
    ku_sub:           'Компьютерная инженерия · 2-й курс',
    ku_desc:          'Формирую прочную базу по алгоритмам, структурам данных, операционным системам и программной инженерии. Стараюсь проверять теорию из лекций на собственных проектах — знания закрепляются гораздо лучше, когда подключается практика.',
    hs_sub:           'Компьютерные науки',
    hs_desc:          'Интенсивная, полностью проектная программа по компьютерным наукам: низкоуровневое программирование на C, Python, системное администрирование и веб-разработка. Готовых ответов не давали — каждую задачу нужно было исследовать и решать самому. Модель однорангового обучения научила меня работать в команде и внимательно относиться к чужому коду.',
    eco_sub:          'Технологии и устойчивость',
    eco_desc:         'В команде ENACTUS работаю над тем, как применять технологии к социальным и экологическим задачам. Моя часть — в основном цифровые решения: инструменты, которые приближают инициативы устойчивого развития к повседневной жизни.',
    ssg_sub:          'Волонтёр · Обслуживание зрителей',
    ssg_desc:         'Волонтёрил в команде обслуживания зрителей на III Играх СНГ. Встречать и направлять гостей, сохраняя спокойную атмосферу при постоянном потоке тысяч людей, — это научило меня держаться собранно под давлением и быстро подстраиваться в команде.',
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
    home_btn_cv:      'Lebenslauf',
    home_btn_contact: 'Kontakt aufnehmen',
    home_status:      'Offen für Möglichkeiten',
    home_stack_label: 'Tech-Stack',
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
    about_bio:        'Ich bin Mahammad Alakbarli, Student im zweiten Jahr der Informatik-Ingenieurwissenschaft an der Karabach-Universität. Programmieren sehe ich weniger als Studienpflicht denn als Weg, echte Probleme zu lösen — deshalb fließt der größte Teil meiner Zeit in Projekte außerhalb des Lehrplans, von Computer-Vision-Systemen für Drohnen bis zu Lernplattformen für Schüler. Das Fundament meines ingenieurmäßigen Denkens habe ich an der Holberton School gelegt, wo ein durchgehend projektbasierter Ansatz mich gelehrt hat, Theorie in funktionierende Software zu verwandeln und schwierige Aufgaben eigenständig zu lösen, statt auf Antworten zu warten. Mir sind lesbarer Code und eine klare Struktur wichtig, und kontinuierliches Lernen betrachte ich als Teil des Berufs, nicht als etwas Getrenntes.',
    about_education:  'Bildung',
    about_volunteering:'Ehrenamt',
    about_skills:     'Fähigkeiten',
    ku_sub:           'Informatik-Ingenieurwesen · 2. Jahr',
    ku_desc:          'Ich baue eine solide Grundlage in Algorithmen, Datenstrukturen, Betriebssystemen und Software-Engineering auf. Die Theorie aus den Vorlesungen versuche ich an eigenen Projekten zu erproben — mit Praxis verbunden bleibt das Wissen deutlich besser hängen.',
    hs_sub:           'Informatik',
    hs_desc:          'Ein intensives, vollständig projektbasiertes Informatikprogramm mit hardwarenaher C-Programmierung, Python, Systemadministration und Webentwicklung. Fertige Antworten gab es nicht — jedes Problem musste man selbst recherchieren und lösen. Das Peer-Learning-Modell hat mir zudem beigebracht, im Team zu arbeiten und sorgfältig mit fremdem Code umzugehen.',
    eco_sub:          'Technologie & Nachhaltigkeit',
    eco_desc:         'Im ENACTUS-Team beschäftige ich mich damit, wie sich Technologie auf soziale und ökologische Probleme anwenden lässt. Mein Teil ist vor allem die digitale Seite — Werkzeuge, die Nachhaltigkeitsinitiativen näher an den Alltag bringen.',
    ssg_sub:          'Ehrenamtlicher · Zuschauerdienste',
    ssg_desc:         'Bei den 3. GUS-Spielen war ich als Freiwilliger im Zuschauerservice-Team tätig. Gäste zu empfangen, zu leiten und bei einem ständigen Strom Tausender Menschen eine ruhige Atmosphäre zu wahren, hat mich gelehrt, unter Druck gelassen zu bleiben und mich schnell im Team einzufügen.',
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
