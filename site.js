'use strict';

(() => {
  const zh = {
    skip: '跳到正文', navLabel: '主导航', navFeatures: '认识糯米', navExperience: '体验一刻', navStory: '关于项目', meet: '遇见糯米',
    heroEyebrow: '给平凡的每一天，加一点温暖', heroLine1: '让你的桌面，', heroLine2: '多一点陪伴。',
    heroDescription: '认识糯米，你的 AI 桌面伙伴。陪你聊聊日常、一起想想问题，也陪你度过那些安静的小片刻。',
    heroCta: '探索糯米', heroSecondary: '看看她会做什么', platform: '为 Windows 而生', projectTagline: '给日常，加一点温暖',
    heroArtLabel: '糯米角色插画', helloWorld: '你好呀，小小世界。', nomiAlt: '糯米：奶油色长发、佩戴米粒发饰的微笑女孩',
    helloNote: '一点点陪伴，刚刚好。', bubbleTime: '刚刚', heroBubble: '你回来啦，今天过得怎么样？☀', sceneLabel: '小小的伙伴，日常的陪伴。',
    featuresLabel: '主要功能', stripChat: '聊聊那些关于你的事', stripVoice: '用声音，把陪伴拉近一点', stripLocal: '本地 AI，由你选择',
    featuresEyebrow: '不只是屏幕上的一个可爱形象', featuresTitle1: '平凡的小片刻，', featuresTitle2: '也值得被在意。',
    featuresIntro: '给想法一个落脚点，给日常一个熟悉的声音，让陪伴变成你喜欢的模样。',
    chatTitle: '聊聊你的世界。', chatDescription: '分享一个点子，讨论一个问题，或者只是说说今天。支持中英文聊天；选择支持图片的模型，还能把眼前看到的事分享给她。', chatLink: '从一句你好开始',
    voiceTitle: '想说，就说出来。', voiceDescription: '让键盘休息一下。语音识别和语音回复，让交流多一种方式；本地与在线语音方案，按你的需要选择。', voiceLink: '让陪伴有声音',
    memoryTitle: '记住那些小事。', memoryDescription: '开启长期记忆，让对话里的细节有机会延续到下一次。她记住了什么，你可以在设置里查看、修改或删除。', memoryLink: '多了解你一点',
    experienceEyebrow: '欢迎来到糯米的小世界', experienceTitle1: '一个小窗口，', experienceTitle2: '装下日常的温柔。',
    experienceIntro: '糯米常驻桌面，想说话时打开快捷聊天，也可以进入聊天窗口慢慢聊。',
    tabsLabel: '探索糯米功能', tabChat: '有话，慢慢说', tabChatSub: '你的日常小事，这里都欢迎。', tabVoice: '听见熟悉的声音', tabVoiceSub: '少打几个字，多聊几句话。', tabMemory: '让对话有延续', tabMemorySub: '记住你的偏好，也由你掌握。',
    previewName: '糯米', previewTagline: '你的 AI 桌面伙伴', previewCaption: '界面示意预览 · 内容为示例',
    worldAlt: '阳光洒进暖色房间，糯米身旁摆放着可爱的糯米团子', artCaption: '在数字世界里，留一个柔软的角落。',
    yourWayEyebrow: '你的伙伴，由你选择', yourWayTitle1: '有糯米的温度，', yourWayTitle2: '也有你的风格。',
    yourWayIntro: '从外观、声音到对话背后的 AI，找到适合自己的相处方式。',
    choiceLocal: '在你的电脑上运行语言模型', choiceLocalSub: '使用 llama.cpp 运行本地模型，也可以连接你偏好的在线服务。',
    choicePersonality: '调成你喜欢的样子', choicePersonalitySub: '选择预设性格或自定义人设，再按喜好调整名字、声音、外观和界面主题。',
    choiceLanguage: '中文或 English，都自在', choiceLanguageSub: '切换应用语言，用熟悉的方式相处。',
    storyEyebrow: '把温暖的想法，做成日常的陪伴', storyTitle1: '温暖的想法，', storyTitle2: '扎实的工程实现。',
    storyIntro: '糯米将桌面交互、语言模型、语音和记忆结合在一起。让这些能力在同一个应用里协作，是这个项目的核心。',
    engineeringDesktop: '走出浏览器的桌面伙伴', engineeringDesktopSub: '基于 Electron，连接透明桌宠窗口、聊天窗口与设置界面，协调多个窗口间的状态与消息。',
    engineeringAI: '不同的模型，同一段对话', engineeringAISub: '统一的聊天流程连接本地和在线模型，加入相关记忆，并协调语音回复。',
    engineeringExperience: '把细节连成体验', engineeringExperienceSub: '首次启动资源配置、可选语音方案，以及按语言处理的回复分句，让底层能力融入日常使用。', engineeringExperienceTech: '资源管理 · 中英文适配',
    faqEyebrow: '你可能还想知道', faqTitle: '把疑问，聊明白。',
    faq1q: '可以在这里下载糯米吗？', faq1a: '这里是糯米的项目展示页，暂未提供公开安装包。你可以通过上方的功能预览了解项目，无需安装任何程序。',
    faq2q: '目前支持哪些平台？', faq2a: '桌面应用目前支持 Windows。这个展示网站可以在电脑和手机浏览器中查看。',
    faq3q: '所有功能都能离线使用吗？', faq3a: '糯米支持通过 llama.cpp 运行本地语言模型。是否能够离线使用取决于你选择的模型和语音服务，相关资源也需要提前下载。在线 AI 服务和在线语音服务需要联网。',
    faq4q: '糯米是付费产品吗？', faq4a: '糯米计划免费提供。如果你选择外部 AI API，服务提供方可能会收取使用费用。本地模型的运行表现取决于你的电脑配置。',
    closingEyebrow: '小小的陪伴，也能温暖很久', closingTitle: '给糯米，留一个小小的位置。', closingCta: '再靠近一点',
    footerCredit: '糯米，让桌面多一点温暖。', footerFaq: '常见问题'
  };
  const demo = {
    en: {
      date: 'A LITTLE MOMENT WITH NOMI', sampleLabel: 'Choose an example conversation', input: 'Your next little thought…',
      scenarios: [
        { label: 'A long day', user: 'It’s been a long day. Can we just talk?', reply: 'Of course. You don’t have to have it all figured out. Tell me one little thing about today — I’m listening. ☀' },
        { label: 'A new idea', user: 'I have an idea, but I don’t know where to start.', reply: 'Let’s start small. What’s the one thing you wish your idea could do? We can work outward from there, one step at a time.' },
        { label: 'A quiet moment', user: 'I’m taking a little break from studying.', reply: 'A well-earned pause. Stretch your shoulders, have a sip of water, and tell me what’s been on your mind.' }
      ],
      voiceTitle: 'A conversation, out loud.', voiceSub: 'Speak, listen, and keep the conversation going.', voiceNote: 'Visual preview only — no microphone or audio is active.',
      memoryTitle: 'Little things about you', memoryIntro: 'Examples of details you can review in memory settings.',
      memories: [['You prefer replies in English.', 'Language'], ['You enjoy a quiet study environment.', 'Preference'], ['You are working on a personal project.', 'Context']],
      memoryNote: 'In the app, you can review, edit, or delete saved memories.'
    },
    zh: {
      date: '和糯米一起的小片刻', sampleLabel: '选一段示例对话', input: '你的下一个小小想法……',
      scenarios: [
        { label: '忙碌的一天', user: '今天好累呀，陪我聊一会儿吧。', reply: '当然啦。不用急着把一切都处理好，先慢慢歇一会儿。今天有什么小事想讲给我听吗？☀' },
        { label: '一个新点子', user: '我有一个想法，可是不知道从哪里开始。', reply: '那我们先从最小的一步开始吧。你最希望这个想法帮你做到什么呢？把它讲给我听，我们一点点理清楚。' },
        { label: '休息一下', user: '学了好久，想休息一小会儿。', reply: '辛苦啦，休息一下也是很重要的。伸伸肩膀，喝口水吧。这会儿想聊些什么？' }
      ],
      voiceTitle: '让聊天，多一点声音。', voiceSub: '说出来，听她回应，再自然地聊下去。', voiceNote: '仅为视觉演示，不会开启麦克风或播放声音。',
      memoryTitle: '关于你的小小细节', memoryIntro: '这里展示可以在记忆设置中查看的内容示例。',
      memories: [['你更喜欢中文回复。', '语言'], ['你喜欢安静的学习环境。', '偏好'], ['你正在做一个个人项目。', '近况']],
      memoryNote: '在应用中，你可以查看、修改或删除保存的记忆。'
    }
  };

  const originals = new Map();
  document.querySelectorAll('[data-i18n]').forEach(el => originals.set(el, el.textContent));
  const originalAttrs = new Map();
  for (const [data, attribute] of [['i18nAlt', 'alt'], ['i18nAria', 'aria-label']]) {
    document.querySelectorAll(`[data-${data.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase())}]`).forEach(el => {
      originalAttrs.set(el, { data, attribute, text: el.getAttribute(attribute) });
    });
  }

  let language = 'en';
  let activeTab = 'chat';
  let scenarioIndex = 0;
  const panel = document.querySelector('#preview-panel');
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const escape = (text) => String(text).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

  function renderPreview() {
    const copy = demo[language];
    panel.setAttribute('aria-labelledby', `tab-${activeTab}`);
    if (activeTab === 'chat') {
      const scenario = copy.scenarios[scenarioIndex];
      panel.innerHTML = `<p class="demo-date">${copy.date}</p><div id="sample-conversation" aria-live="polite"><div class="message message-user">${escape(scenario.user)}</div><div class="message message-nomi">${escape(scenario.reply)}</div></div><p class="sample-label" id="sample-label">${copy.sampleLabel}</p><div class="sample-chips" role="group" aria-labelledby="sample-label">${copy.scenarios.map((item, i) => `<button type="button" class="sample-chip" data-scenario="${i}" aria-pressed="${i === scenarioIndex}">${item.label}</button>`).join('')}</div><div class="preview-input" aria-hidden="true"><span>${copy.input}</span>${icon('spark')}</div>`;
    } else if (activeTab === 'voice') {
      panel.innerHTML = `<div class="voice-demo"><img src="assets/nomi.png" width="112" height="112" alt=""><h3>${copy.voiceTitle}</h3><p>${copy.voiceSub}</p><div class="waveform" aria-hidden="true">${[10,17,27,36,21,32,43,24,36,18,28,14,8].map((height, i) => `<i style="--h:${height}px;--d:${i * .12}s"></i>`).join('')}</div><p class="voice-disclaimer">${copy.voiceNote}</p></div>`;
    } else {
      panel.innerHTML = `<div class="memory-header">${icon('heart')}<span>${copy.memoryTitle}</span></div><p class="memory-intro">${copy.memoryIntro}</p>${copy.memories.map(([text, category]) => `<div class="memory-row"><span>${text}</span><small>${category}</small></div>`).join('')}<p class="memory-footnote">${copy.memoryNote}</p>`;
    }
  }

  function selectTab(tab, focus = false) {
    if (!['chat', 'voice', 'memory'].includes(tab)) return;
    activeTab = tab;
    document.querySelectorAll('[data-tab]').forEach(button => {
      const selected = button.dataset.tab === tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && focus) button.focus();
    });
    renderPreview();
  }

  function setLanguage(next) {
    language = next === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh' ? '糯米 Nomi — 让你的桌面，多一点陪伴。' : 'Nomi — A little company for your desktop.';
    document.querySelector('meta[name="description"]').content = language === 'zh' ? '认识糯米，你的 Windows AI 桌面伙伴。探索聊天、语音、记忆，以及本地和在线 AI。' : 'Meet Nomi, an AI companion for your Windows desktop. Explore conversations, voice, memory, and local or connected AI.';
    originals.forEach((text, el) => { el.textContent = language === 'zh' ? (zh[el.dataset.i18n] ?? text) : text; });
    originalAttrs.forEach(({ data, attribute, text }, el) => { el.setAttribute(attribute, language === 'zh' ? (zh[el.dataset[data]] ?? text) : text); });
    const worldImage = document.querySelector('#nomi-world-image');
    const worldImageSrc = language === 'zh' ? 'assets/nomi-world-zh.png' : 'assets/nomi-world.png';
    if (worldImage.getAttribute('src') !== worldImageSrc) worldImage.setAttribute('src', worldImageSrc);
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    try { localStorage.setItem('nomi-site-language', language); } catch { /* Works without browser storage too. */ }
    renderPreview();
  }

  document.addEventListener('click', event => {
    const languageButton = event.target.closest('[data-lang]');
    const tabButton = event.target.closest('[data-tab]');
    const featureLink = event.target.closest('[data-select-tab]');
    const scenarioButton = event.target.closest('[data-scenario]');
    if (languageButton) setLanguage(languageButton.dataset.lang);
    if (tabButton) selectTab(tabButton.dataset.tab);
    if (featureLink) selectTab(featureLink.dataset.selectTab);
    if (scenarioButton) {
      scenarioIndex = Number(scenarioButton.dataset.scenario);
      const current = demo[language].scenarios[scenarioIndex];
      document.querySelector('.message-user').textContent = current.user;
      document.querySelector('.message-nomi').textContent = current.reply;
      document.querySelectorAll('[data-scenario]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.scenario) === scenarioIndex)));
    }
  });
  document.querySelector('[role="tablist"]').addEventListener('keydown', event => {
    const tabs = ['chat', 'voice', 'memory'];
    const index = tabs.indexOf(activeTab);
    let next;
    if (['ArrowDown', 'ArrowRight'].includes(event.key)) next = (index + 1) % tabs.length;
    if (['ArrowUp', 'ArrowLeft'].includes(event.key)) next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
  });

  try { if (localStorage.getItem('nomi-site-language') === 'zh') language = 'zh'; } catch { /* English is the default. */ }
  setLanguage(language);
})();
