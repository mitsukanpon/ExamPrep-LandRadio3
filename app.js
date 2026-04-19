// 陸上特殊無線技士3級 学習アプリ モック
// ※ 学習効果確認用。実問題ではなく、試験範囲に沿ったサンプル問題を収録。

const QUESTION_BANK = {
  engineering: [
    {
      tag: "無線工学 / 電気回路",
      q: "抵抗 R₁ = 4Ω と R₂ = 6Ω を直列に接続した回路全体の合成抵抗はいくらか。",
      choices: ["2.4Ω", "5Ω", "10Ω", "24Ω"],
      answer: 2,
      explain:
        "直列接続では合成抵抗 R = R₁ + R₂ で求められる。4 + 6 = 10Ω。"
    },
    {
      tag: "無線工学 / 電波の性質",
      q: "周波数 150 MHz の電波の波長として、最も近いものはどれか。",
      choices: ["0.5 m", "2 m", "20 m", "200 m"],
      answer: 1,
      explain:
        "λ = c / f = 3×10⁸ / 150×10⁶ = 2 m。VHF帯の代表例としておさえる。"
    },
    {
      tag: "無線工学 / 空中線",
      q: "1/2 波長ダイポールアンテナの給電点インピーダンスとして、最も近い値はどれか。",
      choices: ["30 Ω", "50 Ω", "73 Ω", "300 Ω"],
      answer: 2,
      explain:
        "理論値は約73Ω。実際には短縮率等で50Ω給電線と整合させて用いる。"
    },
    {
      tag: "無線工学 / 電源",
      q: "鉛蓄電池の公称電圧(セル1個あたり)として正しいものはどれか。",
      choices: ["1.2 V", "1.5 V", "2 V", "3.7 V"],
      answer: 2,
      explain:
        "鉛蓄電池は 2V/セル。6セル直列で12V自動車用バッテリーとなる。"
    },
    {
      tag: "無線工学 / 変調",
      q: "FM(周波数変調)の特徴として、正しいものはどれか。",
      choices: [
        "振幅が信号により変化する",
        "搬送波の周波数が信号により変化する",
        "搬送波の位相が常に一定である",
        "占有帯域幅がAMより狭い"
      ],
      answer: 1,
      explain:
        "FMは搬送波の周波数を信号波で変化させる方式。雑音に強いが占有帯域幅はAMより広い。"
    }
  ],
  law: [
    {
      tag: "法規 / 電波法の目的",
      q: "電波法の目的として、条文に示されているものはどれか。",
      choices: [
        "電波の売買を公正に行うこと",
        "電波の公平かつ能率的な利用を確保することによって公共の福祉を増進すること",
        "無線機器の輸出入を管理すること",
        "無線従事者の雇用を促進すること"
      ],
      answer: 1,
      explain:
        "電波法第1条:「この法律は、電波の公平且つ能率的な利用を確保することによつて、公共の福祉を増進することを目的とする。」"
    },
    {
      tag: "法規 / 免許",
      q: "無線局の免許の有効期間として、正しいものはどれか(一般的な陸上移動業務の無線局)。",
      choices: ["1年", "3年", "5年", "10年"],
      answer: 2,
      explain:
        "無線局の免許の有効期間は原則5年(電波法第13条)。再免許を受けることができる。"
    },
    {
      tag: "法規 / 運用",
      q: "無線局を運用する場合、原則として使用しなければならないものは次のうちどれか。",
      choices: [
        "自作の周波数",
        "免許状に記載された周波数",
        "他局と同一の周波数",
        "任意に選定した周波数"
      ],
      answer: 1,
      explain:
        "電波法第53条により、免許状に記載された周波数以外の周波数を使用してはならない(非常通信等を除く)。"
    },
    {
      tag: "法規 / 従事者",
      q: "陸上特殊無線技士(第三級)の操作範囲として、正しいものはどれか。",
      choices: [
        "アマチュア無線局の操作",
        "船舶局の通信操作",
        "陸上移動業務等の無線設備で一定範囲の技術操作",
        "放送局の技術操作全般"
      ],
      answer: 2,
      explain:
        "第三級陸上特殊無線技士は、陸上の無線局の無線設備のうち一定の空中線電力以下の多重無線設備を除く無線設備の外部の転換装置等の技術操作が可能。"
    }
  ]
};

function pickQuiz(subject) {
  const eng = QUESTION_BANK.engineering;
  const law = QUESTION_BANK.law;
  switch (subject) {
    case "engineering":
      return eng;
    case "law":
      return law;
    case "mixed":
    case "past":
    case "mock":
      return shuffle([...eng, ...law]);
    case "review":
      return shuffle([...eng.slice(0, 3), ...law.slice(0, 3)]);
    default:
      return shuffle([...eng, ...law]);
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ==== 画面管理 ====
const screens = document.querySelectorAll(".screen");
const tabs = document.querySelectorAll(".tab");
const tabBar = document.querySelector(".tab-bar");

function showScreen(name, { hideTab = false } = {}) {
  screens.forEach((s) => {
    s.classList.toggle("hidden", s.dataset.screen !== name);
  });
  tabBar.style.display = hideTab ? "none" : "flex";
  // タブ上のアクティブ状態も更新
  tabs.forEach((t) =>
    t.classList.toggle("active", t.dataset.tab === name)
  );
  // スクロール位置リセット
  const current = document.querySelector(`.screen[data-screen="${name}"]`);
  const scroll = current?.querySelector(".scroll");
  if (scroll) scroll.scrollTop = 0;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showScreen(tab.dataset.tab);
  });
});

// ==== クイズ状態 ====
const quizState = {
  list: [],
  index: 0,
  selected: null,
  answered: false,
  correctCount: 0
};

function startQuiz(subject) {
  const all = pickQuiz(subject);
  // 最大5問に制限(モック)
  quizState.list = all.slice(0, 5);
  quizState.index = 0;
  quizState.correctCount = 0;
  renderQuiz();
  showScreen("quiz", { hideTab: true });
}

function renderQuiz() {
  const q = quizState.list[quizState.index];
  quizState.selected = null;
  quizState.answered = false;

  document.getElementById("quiz-tag").textContent = q.tag;
  document.getElementById("quiz-question").textContent =
    `Q${quizState.index + 1}. ${q.q}`;
  document.getElementById("quiz-index").textContent =
    `${quizState.index + 1} / ${quizState.list.length}`;
  document.getElementById("quiz-bar").style.width =
    `${((quizState.index) / quizState.list.length) * 100}%`;

  const choices = document.getElementById("quiz-choices");
  choices.innerHTML = "";
  q.choices.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.dataset.index = i;
    btn.innerHTML = `
      <span class="choice-mark">${String.fromCharCode(65 + i)}</span>
      <span>${text}</span>
    `;
    btn.addEventListener("click", () => onSelectChoice(i));
    choices.appendChild(btn);
  });

  const expl = document.getElementById("quiz-explanation");
  expl.classList.add("hidden");

  const nextBtn = document.getElementById("quiz-next");
  nextBtn.disabled = true;
  nextBtn.textContent = "回答する";
}

function onSelectChoice(i) {
  if (quizState.answered) return;
  quizState.selected = i;
  document.querySelectorAll(".choice").forEach((c, idx) => {
    c.classList.toggle("selected", idx === i);
  });
  document.getElementById("quiz-next").disabled = false;
}

function revealAnswer() {
  const q = quizState.list[quizState.index];
  const choices = document.querySelectorAll(".choice");
  choices.forEach((c, idx) => {
    c.classList.add("disabled");
    c.classList.remove("selected");
    if (idx === q.answer) c.classList.add("correct");
    if (idx === quizState.selected && quizState.selected !== q.answer) {
      c.classList.add("wrong");
    }
  });
  if (quizState.selected === q.answer) quizState.correctCount++;

  const expl = document.getElementById("quiz-explanation");
  document.getElementById("quiz-explanation-text").textContent = q.explain;
  expl.classList.remove("hidden");

  quizState.answered = true;
  const nextBtn = document.getElementById("quiz-next");
  nextBtn.textContent =
    quizState.index + 1 >= quizState.list.length ? "結果を見る" : "次の問題 →";
  nextBtn.disabled = false;
}

function advanceQuiz() {
  if (!quizState.answered) {
    revealAnswer();
    return;
  }
  if (quizState.index + 1 >= quizState.list.length) {
    showResult();
  } else {
    quizState.index++;
    renderQuiz();
  }
}

function showResult() {
  const total = quizState.list.length;
  const correct = quizState.correctCount;
  const percent = Math.round((correct / total) * 100);

  document.getElementById("result-correct").textContent = correct;
  document.getElementById("result-total").textContent = total;
  document.getElementById("result-percent").textContent = `${percent}%`;

  const emoji = percent >= 80 ? "🎉" : percent >= 60 ? "👍" : "💪";
  const title =
    percent >= 80
      ? "お見事!この調子です"
      : percent >= 60
      ? "あと一歩で合格ライン"
      : "復習で力をつけましょう";
  document.getElementById("result-emoji").textContent = emoji;
  document.getElementById("result-title").textContent = title;

  showScreen("result", { hideTab: true });
}

// ==== イベント ====
document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  switch (action) {
    case "start-quiz":
      startQuiz(target.dataset.subject);
      break;
    case "exit-quiz":
      if (confirm("学習を中断しますか?現在の回答は保存されません。")) {
        showScreen("home");
      }
      break;
    case "retry":
      quizState.index = 0;
      quizState.correctCount = 0;
      quizState.list = shuffle(quizState.list);
      renderQuiz();
      showScreen("quiz", { hideTab: true });
      break;
    case "to-home":
      showScreen("home");
      break;
  }
});

document.getElementById("quiz-next").addEventListener("click", advanceQuiz);

// 初期画面
showScreen("home");
