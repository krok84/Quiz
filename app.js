(() => {
  'use strict';

  const STORE_KEY = 'barquiz.v1';
  const LETTERS = ['A', 'B', 'C', 'D'];

  const SUBJECTS = [
    { id: 'contracts', en: 'Contracts', uk: 'Договірне право' },
    { id: 'torts', en: 'Torts', uk: 'Деліктне право' },
    { id: 'conlaw', en: 'Constitutional Law', uk: 'Конституційне право' },
    { id: 'civpro', en: 'Civil Procedure', uk: 'Цивільний процес' },
    { id: 'crim', en: 'Criminal Law', uk: 'Кримінальне право' },
    { id: 'property', en: 'Property', uk: 'Право власності' }
  ];

  const T = {
    en: {
      appTitle: 'Bar Prep Quiz',
      tagline: 'Practice questions and flashcards for six US bar exam subjects.',
      subjects: 'Subjects',
      selectAll: 'Select all',
      selectNone: 'Clear',
      subjMeta: (a, b) => `${a}/${b}`,
      subjMetaLabel: (a, b) => `${a} of ${b} answered correctly last time`,
      shuffle: 'Shuffle questions and answers',
      startQuiz: n => `Start quiz · ${n}`,
      flashcards: 'Flashcards',
      reviewMistakes: n => `Review mistakes · ${n}`,
      pickSubject: 'Pick at least one subject to start.',
      resumeTitle: 'Quiz in progress',
      resumeSub: (i, n) => `Question ${i} of ${n}`,
      resume: 'Continue',
      discard: 'Discard',
      progress: 'Your progress',
      answered: 'Questions seen',
      accuracy: 'Accuracy',
      quizzes: 'Quizzes done',
      recent: 'Recent quizzes',
      noHistory: 'No finished quizzes yet.',
      reset: 'Reset progress',
      resetConfirm: 'Delete all saved progress on this device?',
      questionOf: (i, n) => `Question ${i} of ${n}`,
      quit: 'Exit',
      correct: 'Correct',
      incorrect: 'Incorrect',
      correctAnswer: 'Correct answer',
      next: 'Next question',
      seeResults: 'See results',
      results: 'Results',
      scoreOf: (s, n) => `${s} of ${n} correct`,
      msgGreat: 'Strong result. Keep it up.',
      msgGood: 'Good. A little more practice will lock it in.',
      msgLow: 'Worth another pass. Review the explanations below.',
      noMistakes: 'No mistakes this time.',
      toReview: n => `To review · ${n}`,
      yourAnswer: 'Your answer',
      retryMistakes: 'Retry mistakes',
      home: 'Back to start',
      cardOf: (i, n) => `Card ${i} of ${n}`,
      knownOf: (a, b) => `Known: ${a} of ${b}`,
      known: 'Known',
      tapReveal: 'Tap to reveal the answer',
      tapBack: 'Tap to see the question',
      answerLabel: 'Answer',
      know: 'I know it',
      learning: 'Still learning',
      prev: 'Previous card',
      nextCard: 'Next card',
      deckDone: 'Deck finished',
      deckSummary: (a, b) => `You marked ${a} of ${b} cards as known.`,
      restartDeck: 'Go through again',
      onlyLearning: n => `Practice the rest · ${n}`,
      loadError: 'Could not load questions.json. If you opened index.html straight from disk, start a local server instead (see README).',
      toDark: 'Switch to dark theme',
      toLight: 'Switch to light theme',
      disclaimerUk: ''
    },
    uk: {
      appTitle: 'Bar Prep Quiz',
      tagline: 'Тести й флешкартки з шести предметів адвокатського іспиту США.',
      subjects: 'Предмети',
      selectAll: 'Вибрати всі',
      selectNone: 'Очистити',
      subjMeta: (a, b) => `${a}/${b}`,
      subjMetaLabel: (a, b) => `${a} з ${b} правильно минулого разу`,
      shuffle: 'Перемішувати питання й варіанти',
      startQuiz: n => `Почати тест · ${n}`,
      flashcards: 'Флешкартки',
      reviewMistakes: n => `Повторити помилки · ${n}`,
      pickSubject: 'Виберіть принаймні один предмет.',
      resumeTitle: 'Незавершений тест',
      resumeSub: (i, n) => `Питання ${i} з ${n}`,
      resume: 'Продовжити',
      discard: 'Скасувати',
      progress: 'Ваш прогрес',
      answered: 'Питань пройдено',
      accuracy: 'Точність',
      quizzes: 'Тестів завершено',
      recent: 'Останні тести',
      noHistory: 'Ще немає завершених тестів.',
      reset: 'Скинути прогрес',
      resetConfirm: 'Видалити весь збережений прогрес на цьому пристрої?',
      questionOf: (i, n) => `Питання ${i} з ${n}`,
      quit: 'Вийти',
      correct: 'Правильно',
      incorrect: 'Неправильно',
      correctAnswer: 'Правильна відповідь',
      next: 'Наступне питання',
      seeResults: 'Переглянути результат',
      results: 'Результат',
      scoreOf: (s, n) => `${s} з ${n} правильно`,
      msgGreat: 'Сильний результат. Так тримати.',
      msgGood: 'Добре. Ще трохи практики, і матеріал закріпиться.',
      msgLow: 'Варто пройти ще раз. Перегляньте пояснення нижче.',
      noMistakes: 'Цього разу без помилок.',
      toReview: n => `Для повторення · ${n}`,
      yourAnswer: 'Ваша відповідь',
      retryMistakes: 'Повторити помилки',
      home: 'На початок',
      cardOf: (i, n) => `Картка ${i} з ${n}`,
      knownOf: (a, b) => `Вивчено: ${a} з ${b}`,
      known: 'Вивчено',
      tapReveal: 'Торкніться, щоб побачити відповідь',
      tapBack: 'Торкніться, щоб повернутися до питання',
      answerLabel: 'Відповідь',
      know: 'Знаю',
      learning: 'Ще вчу',
      prev: 'Попередня картка',
      nextCard: 'Наступна картка',
      deckDone: 'Колоду завершено',
      deckSummary: (a, b) => `Ви позначили ${a} з ${b} карток як вивчені.`,
      restartDeck: 'Пройти ще раз',
      onlyLearning: n => `Повторити невивчені · ${n}`,
      loadError: 'Не вдалося завантажити questions.json. Якщо ви відкрили index.html просто з диска, запустіть локальний сервер (див. README).',
      toDark: 'Увімкнути темну тему',
      toLight: 'Увімкнути світлу тему',
      disclaimerUk: 'Навчальний інструмент, не юридична консультація'
    }
  };

  /* ---------- State & storage ---------- */

  function defaults() {
    return {
      settings: { lang: null, theme: null, shuffle: true, subjects: SUBJECTS.map(s => s.id) },
      stats: {},    // id -> { n: attempts, c: correct, last: boolean }
      known: {},    // id -> true (flashcards)
      history: [],  // [{ d: timestamp, s: score, n: total }]
      session: null // in-progress quiz
    };
  }

  function load() {
    const d = defaults();
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return d;
      const p = JSON.parse(raw) || {};
      return {
        settings: Object.assign(d.settings, p.settings || {}),
        stats: p.stats && typeof p.stats === 'object' ? p.stats : {},
        known: p.known && typeof p.known === 'object' ? p.known : {},
        history: Array.isArray(p.history) ? p.history : [],
        session: p.session || null
      };
    } catch (e) {
      return d;
    }
  }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  let state = load();
  let questions = [];
  const byId = new Map();
  let view = 'loading';
  let result = null;   // last finished quiz, in memory
  let deck = null;     // flashcard deck, in memory

  const app = document.getElementById('app');

  /* ---------- Helpers ---------- */

  function lang() {
    const l = state.settings.lang;
    if (l === 'uk' || l === 'en') return l;
    return (navigator.language || '').toLowerCase().startsWith('uk') ? 'uk' : 'en';
  }

  function t(key, ...args) {
    const v = T[lang()][key];
    return typeof v === 'function' ? v(...args) : v;
  }

  function subjectName(id) {
    const s = SUBJECTS.find(x => x.id === id);
    return s ? s[lang()] : id;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k === 'class') el.className = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? '' : v);
      }
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.append(kid.nodeType ? kid : String(kid));
    }
    return el;
  }

  const ICONS = {
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    cross: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    flip: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4"/></svg>',
    left: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    right: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>'
  };

  function icon(name) {
    const span = document.createElement('span');
    span.style.display = 'contents';
    span.innerHTML = ICONS[name];
    return span.firstChild;
  }

  function selectedPool() {
    const sel = new Set(state.settings.subjects);
    return questions.filter(q => sel.has(q.subject)).map(q => q.id);
  }

  function mistakeIds() {
    return questions.filter(q => state.stats[q.id] && state.stats[q.id].last === false).map(q => q.id);
  }

  function formatDate(ts) {
    try {
      return new Date(ts).toLocaleDateString(lang() === 'uk' ? 'uk-UA' : 'en-US', {
        day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
      });
    } catch (e) {
      return '';
    }
  }

  /* ---------- Theme & chrome ---------- */

  const darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function effectiveTheme() {
    if (state.settings.theme === 'light' || state.settings.theme === 'dark') return state.settings.theme;
    return darkQuery && darkQuery.matches ? 'dark' : 'light';
  }

  function applyTheme() {
    const root = document.documentElement;
    if (state.settings.theme) root.setAttribute('data-theme', state.settings.theme);
    else root.removeAttribute('data-theme');
    renderChrome();
  }

  function renderChrome() {
    const L = lang();
    document.documentElement.lang = L;
    document.title = T[L].appTitle;
    document.getElementById('brandText').textContent = T[L].appTitle;
    document.querySelectorAll('[data-lang]').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === L));
    });
    const themeBtn = document.getElementById('themeBtn');
    const cur = effectiveTheme();
    themeBtn.dataset.current = cur;
    const label = cur === 'dark' ? t('toLight') : t('toDark');
    themeBtn.setAttribute('aria-label', label);
    themeBtn.title = label;
    document.getElementById('disclaimerUk').textContent = t('disclaimerUk');
  }

  document.querySelectorAll('[data-lang]').forEach(b => {
    b.addEventListener('click', () => {
      state.settings.lang = b.dataset.lang;
      save();
      render(false);
    });
  });

  document.getElementById('themeBtn').addEventListener('click', () => {
    state.settings.theme = effectiveTheme() === 'dark' ? 'light' : 'dark';
    save();
    applyTheme();
  });

  if (darkQuery) {
    const onChange = () => { if (!state.settings.theme) renderChrome(); };
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', onChange);
    else if (darkQuery.addListener) darkQuery.addListener(onChange);
  }

  document.getElementById('homeBtn').addEventListener('click', () => go('home'));

  /* ---------- Rendering ---------- */

  function go(next) {
    view = next;
    render(true);
  }

  function render(resetScroll) {
    renderChrome();
    let node;
    switch (view) {
      case 'home': node = viewHome(); break;
      case 'quiz': node = state.session ? viewQuiz() : viewHome(); break;
      case 'results': node = result ? viewResults() : viewHome(); break;
      case 'flash': node = deck ? viewFlash() : viewHome(); break;
      case 'error': node = viewError(); break;
      default: node = h('p', { class: 'loading' }, '…');
    }
    app.replaceChildren(node);
    if (resetScroll) {
      window.scrollTo(0, 0);
      app.focus({ preventScroll: true });
    }
  }

  /* ----- Home ----- */

  function viewHome() {
    const L = lang();
    const sel = new Set(state.settings.subjects);
    const pool = selectedPool();
    const mistakes = mistakeIds();
    const allSelected = sel.size === SUBJECTS.length;

    const resume = state.session ? h('section', { class: 'card resume' },
      h('div', { class: 'section-title' }, t('resumeTitle')),
      h('p', null, t('resumeSub', state.session.index + 1, state.session.items.length)),
      h('div', { class: 'row' },
        h('button', { class: 'btn btn-primary', type: 'button', onclick: () => go('quiz') }, t('resume')),
        h('button', {
          class: 'btn btn-ghost', type: 'button',
          onclick: () => { state.session = null; save(); render(false); }
        }, t('discard'))
      )
    ) : null;

    const chips = SUBJECTS.map(s => {
      const qs = questions.filter(q => q.subject === s.id);
      const good = qs.filter(q => state.stats[q.id] && state.stats[q.id].last === true).length;
      const on = sel.has(s.id);
      return h('button', {
        class: 'chip', type: 'button', 'aria-pressed': String(on),
        onclick: () => {
          const next = new Set(state.settings.subjects);
          if (next.has(s.id)) next.delete(s.id); else next.add(s.id);
          state.settings.subjects = SUBJECTS.map(x => x.id).filter(id => next.has(id));
          save();
          render(false);
        }
      },
        h('span', { class: 'box', html: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>' }),
        h('span', { class: 'name' }, s[L]),
        h('span', { class: 'meta', 'aria-label': t('subjMetaLabel', good, qs.length), title: t('subjMetaLabel', good, qs.length) },
          t('subjMeta', good, qs.length))
      );
    });

    const shuffleId = 'shuffleToggle';
    const settings = h('label', { class: 'switch-row', for: shuffleId },
      h('span', null, t('shuffle')),
      h('span', { class: 'switch' },
        h('input', {
          type: 'checkbox', id: shuffleId, role: 'switch',
          checked: state.settings.shuffle,
          onchange: e => { state.settings.shuffle = e.target.checked; save(); }
        }),
        h('span', { class: 'track', 'aria-hidden': 'true' })
      )
    );

    const actions = h('div', { class: 'btn-group split' },
      h('button', {
        class: 'btn btn-primary btn-block', type: 'button', disabled: !pool.length,
        onclick: () => startQuiz(pool)
      }, t('startQuiz', pool.length)),
      h('button', {
        class: 'btn btn-secondary btn-block', type: 'button', disabled: !pool.length,
        onclick: () => startDeck(pool)
      }, t('flashcards')),
      h('button', {
        class: 'btn btn-secondary btn-block', type: 'button', disabled: !mistakes.length,
        onclick: () => startQuiz(mistakes)
      }, t('reviewMistakes', mistakes.length))
    );

    // Progress stats
    const seen = Object.keys(state.stats).filter(id => byId.has(id));
    let attempts = 0, correct = 0;
    seen.forEach(id => { attempts += state.stats[id].n || 0; correct += state.stats[id].c || 0; });
    const acc = attempts ? Math.round((correct / attempts) * 100) + '%' : '–';

    const progress = h('section', { class: 'card' },
      h('div', { class: 'section-title' }, t('progress')),
      h('div', { class: 'stats' },
        h('div', { class: 'stat' }, h('div', { class: 'v' }, `${seen.length}/${questions.length}`), h('div', { class: 'k' }, t('answered'))),
        h('div', { class: 'stat' }, h('div', { class: 'v' }, acc), h('div', { class: 'k' }, t('accuracy'))),
        h('div', { class: 'stat' }, h('div', { class: 'v' }, String(state.history.length)), h('div', { class: 'k' }, t('quizzes')))
      ),
      state.history.length
        ? h('ul', { class: 'history', 'aria-label': t('recent') },
          state.history.slice(0, 5).map(r => h('li', null,
            h('span', { class: 'muted' }, formatDate(r.d)),
            h('span', null, `${r.s}/${r.n} · ${Math.round((r.s / r.n) * 100)}%`)
          )))
        : h('p', { class: 'muted small', style: 'margin-top:12px' }, t('noHistory')),
      (seen.length || state.history.length || Object.keys(state.known).length)
        ? h('div', { style: 'margin-top:12px' },
          h('button', {
            class: 'link-btn danger', type: 'button',
            onclick: () => {
              if (!window.confirm(t('resetConfirm'))) return;
              const keep = state.settings;
              state = defaults();
              state.settings = keep;
              save();
              render(false);
            }
          }, t('reset')))
        : null
    );

    return h('div', { class: 'stack' },
      h('div', { class: 'hero' }, h('h1', null, t('appTitle')), h('p', null, t('tagline'))),
      resume,
      h('section', { class: 'card' },
        h('div', { class: 'row between', style: 'margin-bottom:10px' },
          h('div', { class: 'section-title', style: 'margin:0' }, t('subjects')),
          h('button', {
            class: 'link-btn', type: 'button',
            onclick: () => {
              state.settings.subjects = allSelected ? [] : SUBJECTS.map(s => s.id);
              save();
              render(false);
            }
          }, allSelected ? t('selectNone') : t('selectAll'))
        ),
        h('div', { class: 'chips' }, chips),
        !pool.length ? h('p', { class: 'muted small', style: 'margin-top:10px' }, t('pickSubject')) : null
      ),
      h('section', { class: 'card' }, settings),
      actions,
      progress
    );
  }

  /* ----- Quiz ----- */

  function startQuiz(ids) {
    if (!ids.length) return;
    const doShuffle = state.settings.shuffle;
    const list = doShuffle ? shuffle(ids) : ids.slice();
    state.session = {
      items: list.map(id => ({ id, order: doShuffle ? shuffle([0, 1, 2, 3]) : [0, 1, 2, 3] })),
      index: 0,
      answers: []
    };
    save();
    go('quiz');
  }

  function viewQuiz() {
    const L = lang();
    const s = state.session;
    const item = s.items[s.index];
    const q = byId.get(item.id);
    const n = s.items.length;
    const chosen = s.answers[s.index];
    const answered = chosen != null;
    const isRight = answered && chosen === q.answer;
    const done = s.index + (answered ? 1 : 0);

    const options = h('ol', { class: 'options' },
      item.order.map((orig, pos) => {
        let cls = 'opt';
        if (answered) {
          if (orig === q.answer) cls += ' correct';
          else if (orig === chosen) cls += ' wrong';
          else cls += ' dim';
        }
        return h('li', null,
          h('button', {
            class: cls, type: 'button', disabled: answered,
            onclick: () => answer(orig)
          },
            h('span', { class: 'letter', 'aria-hidden': 'true' }, LETTERS[pos]),
            h('span', { class: 'txt' }, q.options[L][orig])
          ));
      })
    );

    let feedback = null;
    if (answered) {
      const correctPos = item.order.indexOf(q.answer);
      feedback = h('section', { class: 'feedback ' + (isRight ? 'ok' : 'bad'), role: 'status' },
        h('div', { class: 'verdict' }, icon(isRight ? 'check' : 'cross'), isRight ? t('correct') : t('incorrect')),
        !isRight ? h('p', { class: 'right' }, `${t('correctAnswer')}: ${LETTERS[correctPos]}. ${q.options[L][q.answer]}`) : null,
        h('p', { class: 'expl' }, q.explanation[L])
      );
    }

    const last = s.index === n - 1;
    return h('div', { class: 'stack' },
      h('div', { class: 'q-head' },
        h('span', { class: 'q-count' }, t('questionOf', s.index + 1, n)),
        h('button', { class: 'btn btn-ghost', type: 'button', onclick: () => go('home') }, t('quit'))
      ),
      h('div', {
        class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(n), 'aria-valuenow': String(done)
      }, h('span', { style: `width:${(done / n) * 100}%` })),
      h('div', null,
        h('span', { class: 'pill' }, subjectName(q.subject)),
        h('h2', { class: 'question' }, q.question[L])
      ),
      options,
      feedback,
      answered ? h('button', {
        class: 'btn btn-primary btn-block', type: 'button', id: 'nextBtn',
        onclick: nextQuestion
      }, last ? t('seeResults') : t('next')) : null
    );
  }

  function answer(orig) {
    const s = state.session;
    if (!s || s.answers[s.index] != null) return;
    const q = byId.get(s.items[s.index].id);
    const right = orig === q.answer;
    s.answers[s.index] = orig;
    const st = state.stats[q.id] || { n: 0, c: 0 };
    st.n = (st.n || 0) + 1;
    if (right) st.c = (st.c || 0) + 1;
    st.last = right;
    state.stats[q.id] = st;
    save();
    render(false);
    const fb = app.querySelector('.feedback');
    if (fb && fb.scrollIntoView) {
      fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    const btn = document.getElementById('nextBtn');
    if (btn) btn.focus({ preventScroll: true });
  }

  function nextQuestion() {
    const s = state.session;
    if (!s) return;
    if (s.index < s.items.length - 1) {
      s.index++;
      save();
      render(true);
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    const s = state.session;
    let score = 0;
    s.items.forEach((it, i) => { if (s.answers[i] === byId.get(it.id).answer) score++; });
    state.history.unshift({ d: Date.now(), s: score, n: s.items.length });
    state.history = state.history.slice(0, 30);
    result = { items: s.items, answers: s.answers.slice(), score };
    state.session = null;
    save();
    go('results');
  }

  /* ----- Results ----- */

  function viewResults() {
    const L = lang();
    const { items, answers, score } = result;
    const n = items.length;
    const pct = Math.round((score / n) * 100);
    const msg = pct >= 80 ? t('msgGreat') : pct >= 60 ? t('msgGood') : t('msgLow');

    const wrong = items
      .map((it, i) => ({ it, chosen: answers[i], q: byId.get(it.id) }))
      .filter(x => x.chosen !== x.q.answer);

    const list = wrong.map(({ it, chosen, q }) => {
      const yourPos = it.order.indexOf(chosen);
      const rightPos = it.order.indexOf(q.answer);
      return h('article', { class: 'card mistake' },
        h('span', { class: 'pill' }, subjectName(q.subject)),
        h('p', { class: 'q' }, q.question[L]),
        h('dl', null,
          h('dt', null, t('yourAnswer')),
          h('dd', { class: 'yours' }, chosen != null ? `${LETTERS[yourPos]}. ${q.options[L][chosen]}` : '–'),
          h('dt', null, t('correctAnswer')),
          h('dd', { class: 'right' }, `${LETTERS[rightPos]}. ${q.options[L][q.answer]}`)
        ),
        h('p', { class: 'expl' }, q.explanation[L])
      );
    });

    return h('div', { class: 'stack' },
      h('section', { class: 'card score' },
        h('div', { class: 'section-title' }, t('results')),
        h('div', { class: 'big' }, String(score), h('small', null, ` / ${n}`)),
        h('p', { class: 'pct' }, `${pct}% · ${t('scoreOf', score, n)}`),
        h('p', { class: 'msg' }, wrong.length ? msg : t('noMistakes'))
      ),
      h('div', { class: 'btn-group split' },
        wrong.length ? h('button', {
          class: 'btn btn-primary btn-block', type: 'button',
          onclick: () => startQuiz(wrong.map(x => x.it.id))
        }, t('retryMistakes')) : null,
        h('button', {
          class: 'btn ' + (wrong.length ? 'btn-secondary' : 'btn-primary') + ' btn-block', type: 'button',
          onclick: () => go('home')
        }, t('home'))
      ),
      wrong.length ? h('h2', { style: 'font-size:20px;margin-top:28px' }, t('toReview', wrong.length)) : null,
      wrong.length ? h('div', null, list) : null
    );
  }

  /* ----- Flashcards ----- */

  function startDeck(ids) {
    if (!ids.length) return;
    deck = { ids: state.settings.shuffle ? shuffle(ids) : ids.slice(), index: 0, flipped: false };
    go('flash');
  }

  function flipCard() {
    if (!deck) return;
    deck.flipped = !deck.flipped;
    const card = app.querySelector('.flashcard');
    if (!card) return;
    card.classList.toggle('flipped', deck.flipped);
    card.setAttribute('aria-pressed', String(deck.flipped));
    card.querySelector('.front').setAttribute('aria-hidden', String(deck.flipped));
    card.querySelector('.back').setAttribute('aria-hidden', String(!deck.flipped));
  }

  function moveCard(delta) {
    const next = deck.index + delta;
    if (next < 0) return;
    deck.index = Math.min(next, deck.ids.length);
    deck.flipped = false;
    render(false);
  }

  function markCard(isKnown) {
    const id = deck.ids[deck.index];
    if (isKnown) state.known[id] = true; else delete state.known[id];
    save();
    moveCard(1);
  }

  function viewFlash() {
    const L = lang();
    const n = deck.ids.length;
    const knownCount = deck.ids.filter(id => state.known[id]).length;

    if (deck.index >= n) {
      const rest = deck.ids.filter(id => !state.known[id]);
      return h('div', { class: 'stack' },
        h('section', { class: 'card score' },
          h('div', { class: 'section-title' }, t('flashcards')),
          h('h2', { style: 'font-size:26px' }, t('deckDone')),
          h('p', { class: 'msg', style: 'margin-top:8px' }, t('deckSummary', knownCount, n))
        ),
        h('div', { class: 'btn-group' },
          rest.length ? h('button', { class: 'btn btn-primary btn-block', type: 'button', onclick: () => startDeck(rest) }, t('onlyLearning', rest.length)) : null,
          h('button', { class: 'btn btn-secondary btn-block', type: 'button', onclick: () => startDeck(deck.ids) }, t('restartDeck')),
          h('button', { class: 'btn btn-ghost btn-block', type: 'button', onclick: () => go('home') }, t('home'))
        )
      );
    }

    const id = deck.ids[deck.index];
    const q = byId.get(id);
    const flipped = deck.flipped;
    const isKnown = !!state.known[id];

    const card = h('button', {
      class: 'flashcard' + (flipped ? ' flipped' : ''), type: 'button',
      'aria-pressed': String(flipped), onclick: flipCard
    },
      h('span', { class: 'inner' },
        h('span', { class: 'face front', 'aria-hidden': String(flipped) },
          h('span', { class: 'row between' },
            h('span', { class: 'pill' }, subjectName(q.subject)),
            isKnown ? h('span', { class: 'known-badge' }, '✓ ' + t('known')) : null
          ),
          h('span', { class: 'q' }, q.question[L]),
          h('span', { class: 'hint' }, icon('flip'), t('tapReveal'))
        ),
        h('span', { class: 'face back', 'aria-hidden': String(!flipped) },
          h('span', { class: 'section-title', style: 'margin:0' }, t('answerLabel')),
          h('span', { class: 'a' }, q.options[L][q.answer]),
          h('span', { style: 'flex:1' }, q.explanation[L]),
          h('span', { class: 'hint' }, icon('flip'), t('tapBack'))
        )
      )
    );

    return h('div', { class: 'stack' },
      h('div', { class: 'q-head' },
        h('span', { class: 'q-count' }, `${t('cardOf', deck.index + 1, n)} · ${t('knownOf', knownCount, n)}`),
        h('button', { class: 'btn btn-ghost', type: 'button', onclick: () => go('home') }, t('quit'))
      ),
      h('div', {
        class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(n), 'aria-valuenow': String(deck.index)
      }, h('span', { style: `width:${(deck.index / n) * 100}%` })),
      h('div', { class: 'flash-wrap' }, card),
      h('div', { class: 'btn-pair' },
        h('button', { class: 'btn btn-learn', type: 'button', onclick: () => markCard(false) }, t('learning')),
        h('button', { class: 'btn btn-know', type: 'button', onclick: () => markCard(true) }, t('know'))
      ),
      h('div', { class: 'row between' },
        h('button', {
          class: 'btn btn-ghost', type: 'button', disabled: deck.index === 0,
          'aria-label': t('prev'), title: t('prev'), onclick: () => moveCard(-1)
        }, icon('left')),
        h('button', {
          class: 'btn btn-ghost', type: 'button',
          'aria-label': t('nextCard'), title: t('nextCard'), onclick: () => moveCard(1)
        }, icon('right'))
      )
    );
  }

  /* ----- Error ----- */

  function viewError() {
    return h('section', { class: 'card' }, h('p', null, t('loadError')));
  }

  /* ---------- Keyboard shortcuts ---------- */

  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const onButton = e.target && e.target.closest && e.target.closest('button, input, a');
    const k = e.key.toLowerCase();

    if (view === 'quiz' && state.session) {
      const s = state.session;
      const answered = s.answers[s.index] != null;
      const pos = ['1', '2', '3', '4'].indexOf(k) >= 0 ? Number(k) - 1 : ['a', 'b', 'c', 'd'].indexOf(k);
      if (!answered && pos >= 0) {
        e.preventDefault();
        answer(s.items[s.index].order[pos]);
      } else if (answered && (k === 'arrowright' || (k === 'enter' && !onButton))) {
        e.preventDefault();
        nextQuestion();
      }
    } else if (view === 'flash' && deck && deck.index < deck.ids.length) {
      if ((k === ' ' || k === 'enter') && !onButton) { e.preventDefault(); flipCard(); }
      else if (k === 'arrowright') { e.preventDefault(); moveCard(1); }
      else if (k === 'arrowleft') { e.preventDefault(); moveCard(-1); }
    }
  });

  /* ---------- Boot ---------- */

  function isValid(q) {
    return q && typeof q.id === 'string' && SUBJECTS.some(s => s.id === q.subject) &&
      q.question && q.question.en && q.question.uk &&
      q.options && Array.isArray(q.options.en) && Array.isArray(q.options.uk) &&
      q.options.en.length === 4 && q.options.uk.length === 4 &&
      Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4 &&
      q.explanation && q.explanation.en && q.explanation.uk;
  }

  applyTheme();

  fetch('./questions.json', { cache: 'no-cache' })
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(data => {
      questions = (Array.isArray(data) ? data : []).filter(isValid);
      questions.forEach(q => byId.set(q.id, q));
      // Drop a saved session that refers to questions that no longer exist.
      const s = state.session;
      if (s && (!Array.isArray(s.items) || !s.items.length || !s.items.every(it => byId.has(it.id)) ||
        typeof s.index !== 'number' || s.index >= s.items.length)) {
        state.session = null;
        save();
      }
      if (!Array.isArray(state.settings.subjects)) state.settings.subjects = SUBJECTS.map(x => x.id);
      go('home');
    })
    .catch(() => go('error'));
})();
