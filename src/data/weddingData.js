/**
 * Wedding content — edit this file to reuse the template for different couples.
 * UI components should import from here instead of hardcoding values.
 */
const weddingData = {
  couple: {
    bride: 'آمال',
    groom: 'أحمد',
  },
  date: {
    /** Local calendar date used by the countdown (YYYY-MM-DD). */
    iso: '2027-06-20',
    day: '٢٠',
    month: 'حزيران',
    year: '٢٠٢٧',
    /** Formatted display string for sections that need a single line. */
    display: '٢٠ حزيران ٢٠٢٧',
  },
  images: {
    openingCover: '/images/opening-cover.jpg',
    firstSectionBackground: '/images/first-section-background.jpg',
    flower: '/images/flower-decoration.png',
    waxSeal: '/images/wax-seal.png',
    waxSealVideo: '/videos/wax-seal.mp4',
    weddingSong: '/audio/wedding-song.m4a',
    timelineFlower: '/images/timeline-flower.png',
    vineBranch: '/images/decor/vine-branch.png',
    vineSymmetric: '/images/decor/vine-symmetric.png',
    studioLogo: '/images/studio-logo.png',
    envelope: {
      seal: '/images/envelope/seal.png',
      flapTop: '/images/envelope/flap-top.png',
      flapBottom: '/images/envelope/flap-bottom.png',
      flapLeft: '/images/envelope/flap-left.png',
      flapRight: '/images/envelope/flap-right.png',
      card: '/images/envelope/invitation-card.jpg',
      assembled: '/images/envelope/assembled-ref.jpg',
    },
  },
  venue: {
    eyebrow: 'المكان',
    title: 'أين نحتفل',
    intro: 'يسعدنا أن نحتفل بهذا اليوم الخاص بوجودكم معنا في صالة روفانا بدمشق.',
    name: 'صالة روفانا',
    address: 'دمشق — كفرسوسة',
    date: '٢٠ حزيران ٢٠٢٧',
    time: '٤:٠٠ مساءً',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=%D8%B5%D8%A7%D9%84%D8%A9+%D8%B1%D9%88%D9%81%D8%A7%D9%86%D8%A7+%D8%AF%D9%85%D8%B4%D9%82',
    mapsLabel: 'فتح الموقع على الخريطة',
    labels: {
      venue: 'القاعة',
      address: 'العنوان',
      date: 'التاريخ',
      time: 'الوقت',
    },
  },
  dressCode: {
    eyebrow: 'قواعد اللباس',
    title: 'أمسية أنيقة',
    description:
      'ندعوكم لارتداء ملابس سهرة أنيقة والمشاركة معنا في هذه المناسبة الخاصة.',
    attire: 'ملابس رسمية',
  },
  rsvp: {
    eyebrow: 'تأكيد الحضور',
    title: 'هل ستشاركوننا؟',
    description:
      'اختاروا الإجابة المناسبة — وشكراً لوجودكم في يومنا الخاص.',
    deadline: 'نرجو الرد قبل ١ حزيران ٢٠٢٧',
    acceptLabel: 'نعم، سأحضر',
    declineLabel: 'للأسف، لن أتمكن',
    acceptThanksTitle: 'أهلاً وسهلاً بكم',
    acceptThanksMessage:
      'فرحتنا كبيرة بحضوركم. ننتظركم بكل حب في صالة روفانا.',
    declineThanksTitle: 'شكراً لردّكم',
    declineThanksMessage:
      'نقدّر تواصلكم، ونتمنى لكم دوام الصحة والسعادة.',
  },
  closing: {
    eyebrow: 'بكل حب',
    title: 'لا نستطيع الانتظار للاحتفال معكم',
    message:
      'شكراً لكونكم جزءاً من قصتنا. حضوركم سيجعل يومنا الخاص أجمل وأكثر معنى.',
    signature: 'آمال وأحمد',
  },
  studio: {
    name: 'Thread & Vow',
    credit: 'من تصميم وتنفيذ',
    logo: '/images/studio-logo.png',
  },
  story: {
    eyebrow: 'قصتنا',
    title: 'كيف بدأ كل شيء',
    text: 'بدأ كل شيء بلحظة بسيطة لم نتوقع أن تكون بداية إلى الأبد. عبر أحاديث لا تُحصى، وذكريات لا تُنسى، ولحظات صغيرة جميلة، صارت قصتنا شيئاً لا نريد له أن ينتهي.',
  },
  timeline: {
    eyebrow: 'الاحتفال',
    title: 'يوم زفافنا',
    events: [
      {
        time: '٤:٠٠ مساءً',
        title: 'مراسم العقد',
        description:
          'انضموا إلينا بينما نتبادل العهود ونبدأ هذا الفصل الجميل معاً.',
      },
      {
        time: '٥:٣٠ مساءً',
        title: 'استقبال الضيوف',
        description:
          'استمتعوا بالمشروبات والموسيقى والمقبلات بينما نحتفل مع أحبائنا.',
      },
      {
        time: '٧:٠٠ مساءً',
        title: 'العشاء',
        description:
          'أمسية من العشاء والضحك واللحظات التي لا تُنسى.',
      },
      {
        time: '٩:٠٠ مساءً',
        title: 'الرقص',
        description: 'لنحتفل ونرقص ونصنع الذكريات معاً.',
      },
    ],
  },
  memories: {
    eyebrow: 'ذكريات',
    title: 'ذكرياتنا',
    intro: 'بعض اللحظات خُلقت لتبقى في الذاكرة إلى الأبد.',
    line: 'عمرٌ من اللحظات الصغيرة، مكتوب في إلى الأبد واحد.',
  },
  copy: {
    openingEyebrow: 'مع عائلتيهما',
    openButton: 'افتح الدعوة',
    openInvitationAria: 'افتح دعوة الزفاف',
    musicMute: 'كتم الموسيقى',
    musicPlay: 'تشغيل الموسيقى',
    heroEyebrow: 'زفاف',
    heroInvite: 'ندعوكم للاحتفال بيومنا الخاص',
    scrollHint: 'مرّر للاستكشاف',
    weddingDayHeading: 'يوم زفافنا',
    dayArrived: 'لقد حان يومنا الخاص',
    pageTitleSuffix: 'دعوة زفاف',
    countdownLabels: {
      days: 'يوم',
      hours: 'ساعة',
      minutes: 'دقيقة',
      seconds: 'ثانية',
    },
  },
  theme: {
    template: 'stationery',
    colors: {
      background: '#f7f2e9',
      surface: '#fffdfb',
      ink: '#5c2f36',
      muted: '#7a6468',
      botanical: '#6e3a42',
      botanicalSoft: '#e8ddd0',
      line: '#d5c09a',
      blush: '#e8ddd0',
    },
  },
}

export default weddingData
