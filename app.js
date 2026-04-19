// 陸上特殊無線技士3級 学習アプリ モック
// 【重要】収録されている問題はすべて本アプリのための自作類題です。
// 日本無線協会等が著作権を有する公式過去問は一切複製していません。
//
// 問題スキーマ:
//   id:         一意キー（後の学習履歴・SM-2状態保存用）
//   subject:    "engineering" | "law"
//   topic:      分野タグ（統計・弱点抽出のグルーピング単位）
//   importance: 1-5 出題頻度/試験での重要度（重み付け用）
//   q / choices / answer / explain

const QUESTIONS = [
  // ===== 無線工学 =====
  { id: "eng-circ-001", subject: "engineering", topic: "電気回路", importance: 4,
    q: "抵抗 R₁ = 4Ω と R₂ = 6Ω を直列に接続した回路全体の合成抵抗はいくらか。",
    choices: ["2.4Ω", "5Ω", "10Ω", "24Ω"], answer: 2,
    explain: "直列接続の合成抵抗は R = R₁ + R₂。よって 4 + 6 = 10Ω。" },

  { id: "eng-circ-002", subject: "engineering", topic: "電気回路", importance: 4,
    q: "抵抗 R₁ = 6Ω と R₂ = 12Ω を並列接続したときの合成抵抗はいくらか。",
    choices: ["2Ω", "3Ω", "4Ω", "18Ω"], answer: 2,
    explain: "並列は 1/R = 1/6 + 1/12 = 3/12。よって R = 4Ω。" },

  { id: "eng-circ-003", subject: "engineering", topic: "電気回路", importance: 3,
    q: "10Ωの抵抗に 2A の電流が流れているとき、この抵抗で消費される電力はいくらか。",
    choices: ["5 W", "10 W", "20 W", "40 W"], answer: 3,
    explain: "電力 P = I²R = 2² × 10 = 40W。" },

  { id: "eng-semi-001", subject: "engineering", topic: "半導体・電子回路", importance: 4,
    q: "PN接合ダイオードの一般的な用途として、最も適当なものはどれか。",
    choices: ["発振回路の主素子", "整流・検波", "電力増幅", "基準周波数源"], answer: 1,
    explain: "ダイオードは一方向にしか電流を流さない性質から整流・検波に広く用いられる。" },

  { id: "eng-semi-002", subject: "engineering", topic: "半導体・電子回路", importance: 3,
    q: "エミッタ接地トランジスタ増幅回路における入力端子と出力端子の組合せとして正しいものはどれか。",
    choices: ["入力=コレクタ, 出力=ベース", "入力=ベース, 出力=コレクタ",
             "入力=エミッタ, 出力=コレクタ", "入力=ベース, 出力=エミッタ"], answer: 1,
    explain: "エミッタ接地は入力=ベース、出力=コレクタ、共通=エミッタ。最も一般的な増幅構成。" },

  { id: "eng-mod-001", subject: "engineering", topic: "変調方式", importance: 5,
    q: "FM(周波数変調)の特徴として、最も適当なものはどれか。",
    choices: ["搬送波の振幅が信号により変化する", "搬送波の周波数が信号により変化する",
             "搬送波の位相が常に一定である", "占有帯域幅がAMより狭い"], answer: 1,
    explain: "FMは搬送波の周波数を信号波で変化させる方式。雑音に強いが占有帯域幅はAMより広い。" },

  { id: "eng-mod-002", subject: "engineering", topic: "変調方式", importance: 4,
    q: "AM(振幅変調)方式の特徴として、正しいものはどれか。",
    choices: ["搬送波の振幅を信号波で変化させる", "搬送波の周波数を信号波で変化させる",
             "雑音の影響を受けにくい", "占有帯域幅はFMより広い"], answer: 0,
    explain: "AMは振幅を変化。構造は簡単だが雑音に弱く、占有帯域幅はFMより狭い。" },

  { id: "eng-tx-001", subject: "engineering", topic: "送受信機", importance: 4,
    q: "スーパーヘテロダイン受信機において、受信電波と局部発振器の出力を混合して得られる周波数を何と呼ぶか。",
    choices: ["搬送波周波数", "中間周波数 (IF)", "基本周波数", "副搬送波周波数"], answer: 1,
    explain: "混合器(ミキサ)で受信周波数と局発を混合し中間周波数(IF)を得る。IF増幅で選択度と感度を確保。" },

  { id: "eng-prop-001", subject: "engineering", topic: "電波伝搬", importance: 5,
    q: "周波数 150 MHz の電波の波長として、最も近いものはどれか。",
    choices: ["0.5 m", "2 m", "20 m", "200 m"], answer: 1,
    explain: "λ = c / f = 3×10⁸ / 150×10⁶ = 2 m。VHF帯の代表的な波長。" },

  { id: "eng-prop-002", subject: "engineering", topic: "電波伝搬", importance: 5,
    q: "VHF帯(超短波)の電波伝搬の特徴として、最も適当なものはどれか。",
    choices: ["地表波が遠方まで届きやすい", "電離層を突き抜けやすく見通し距離内の通信が主体",
             "電離層で反射し地球の裏側まで届く", "雷雲による減衰を受けやすい"], answer: 1,
    explain: "VHF以上は電離層を突き抜けやすく、直接波・大地反射波による見通し距離内通信が中心。" },

  { id: "eng-ant-001", subject: "engineering", topic: "空中線・給電線", importance: 5,
    q: "1/2 波長ダイポールアンテナの給電点インピーダンス(理論値)として、最も近いものはどれか。",
    choices: ["30 Ω", "50 Ω", "73 Ω", "300 Ω"], answer: 2,
    explain: "理論値は約73Ω。実用では短縮等で調整し50Ω同軸給電線と整合させる。" },

  { id: "eng-ant-002", subject: "engineering", topic: "空中線・給電線", importance: 4,
    q: "八木・宇田アンテナの特徴として、最も適当なものはどれか。",
    choices: ["全方向性で利得はほぼ1", "単方向性を持ち、素子を増やすと利得が上がる",
             "円偏波専用である", "給電は必要ない"], answer: 1,
    explain: "八木はダイポールに導波器・反射器を加え指向性と利得を高めたアンテナ。素子を増やすほど利得は向上。" },

  { id: "eng-pow-001", subject: "engineering", topic: "電源", importance: 3,
    q: "鉛蓄電池の公称電圧(セル1個あたり)として正しいものはどれか。",
    choices: ["1.2 V", "1.5 V", "2 V", "3.7 V"], answer: 2,
    explain: "鉛蓄電池は 2V/セル。6セル直列で12V自動車用バッテリーとなる。" },

  { id: "eng-pow-002", subject: "engineering", topic: "電源", importance: 3,
    q: "リチウムイオン電池1セルの公称電圧として最も近いものはどれか。",
    choices: ["1.2 V", "2.0 V", "3.7 V", "6.0 V"], answer: 2,
    explain: "リチウムイオン電池は約3.7V/セル。エネルギー密度が高く小型機器に多用。" },

  { id: "eng-meas-001", subject: "engineering", topic: "測定", importance: 3,
    q: "電力比を表すデシベル(dB)について、電力が10倍になったときの値として正しいものはどれか。",
    choices: ["3 dB", "6 dB", "10 dB", "20 dB"], answer: 2,
    explain: "P比10倍 = 10·log₁₀(10) = 10 dB。電力2倍で3dB、電圧2倍で6dBも併せて暗記。" },

  { id: "eng-meas-002", subject: "engineering", topic: "測定", importance: 3,
    q: "送信機とアンテナの整合状態を調べる測定器として、最も適切なものはどれか。",
    choices: ["テスタ", "SWR(定在波比)計", "周波数カウンタ", "オシロスコープ"], answer: 1,
    explain: "SWR計は反射波と進行波の比を測り、1に近いほど整合が良好。実務では必須。" },

  // ===== 法規 =====
  { id: "law-pur-001", subject: "law", topic: "電波法の目的", importance: 5,
    q: "電波法の目的として、条文に示されているものはどれか。",
    choices: ["電波の売買を公正に行うこと",
             "電波の公平かつ能率的な利用を確保することによって公共の福祉を増進すること",
             "無線機器の輸出入を管理すること",
             "無線従事者の雇用を促進すること"], answer: 1,
    explain: "電波法第1条。「公平かつ能率的な利用」と「公共の福祉の増進」は頻出キーワード。" },

  { id: "law-def-001", subject: "law", topic: "用語の定義", importance: 4,
    q: "電波法における「無線局」の定義として、最も適当なものはどれか。",
    choices: ["無線設備のみを指す", "無線設備及び無線設備の操作を行う者の総体",
             "無線従事者のみを指す", "放送事業者を指す"], answer: 1,
    explain: "電波法第2条。無線局は設備と操作者の総体。受信のみを目的とするものは含まれない。" },

  { id: "law-lic-001", subject: "law", topic: "無線局の免許", importance: 5,
    q: "無線局の免許の有効期間として、原則の値はどれか。",
    choices: ["1年", "3年", "5年", "10年"], answer: 2,
    explain: "原則5年(電波法第13条)。再免許により継続可能。" },

  { id: "law-lic-002", subject: "law", topic: "無線局の免許", importance: 4,
    q: "無線局免許状に記載されない事項は次のうちどれか。",
    choices: ["免許人の氏名又は名称", "無線設備の設置場所", "通信の相手方及び通信事項",
             "無線従事者の出身校"], answer: 3,
    explain: "免許状には氏名・名称、設置場所、相手方、通信事項、周波数、空中線電力等が記載される。従事者個人の経歴は記載されない。" },

  { id: "law-op-001", subject: "law", topic: "運用", importance: 5,
    q: "無線局を運用する場合、原則として使用しなければならない周波数はどれか。",
    choices: ["自作の周波数", "免許状に記載された周波数",
             "他局と同一の周波数", "任意に選定した周波数"], answer: 1,
    explain: "電波法第53条。免許状記載の周波数以外は使用不可(非常通信等の例外を除く)。" },

  { id: "law-op-002", subject: "law", topic: "運用", importance: 4,
    q: "特定の相手方に対して行われる無線通信の秘密について、電波法の定めとして正しいものはどれか。",
    choices: ["公にしてもよい", "窃用・漏らしてはならない",
             "要旨のみ公にできる", "無線従事者以外に知らせてはならないが公表は自由"], answer: 1,
    explain: "電波法第59条。通信の秘密保護。傍受した内容を窃用・漏洩してはならない。" },

  { id: "law-op-003", subject: "law", topic: "運用", importance: 4,
    q: "地震・台風など非常の事態が発生した場合に行う通信を何というか。",
    choices: ["遭難通信", "緊急通信", "非常通信", "安全通信"], answer: 2,
    explain: "電波法第52条。人命財産の保護・治安の維持等のため行う通信は「非常通信」。" },

  { id: "law-per-001", subject: "law", topic: "無線従事者", importance: 4,
    q: "第三級陸上特殊無線技士の操作範囲として、最も適当なものはどれか。",
    choices: ["アマチュア無線局のあらゆる操作",
             "船舶局の通信操作",
             "陸上の無線局の空中線電力50W以下の一定範囲の無線設備の外部の転換装置等の技術操作",
             "放送局の技術操作全般"], answer: 2,
    explain: "第三級陸上特殊無線技士は、陸上の一定範囲の無線設備の外部の転換装置等の技術操作を行える。" },

  { id: "law-sup-001", subject: "law", topic: "監督・検査", importance: 3,
    q: "総務大臣が電波の質が定められた技術基準に適合していないと認めるときに命ずることができる処分はどれか。",
    choices: ["免許の取消しのみ", "電波の発射の停止",
             "罰金の即時徴収", "他周波数への変更命令のみ"], answer: 1,
    explain: "電波法第72条。電波の質が基準に適合しない場合、総務大臣は電波の発射の停止を命ずることができる。" },

  { id: "law-doc-001", subject: "law", topic: "業務書類", importance: 3,
    q: "無線局に備え付けを要する書類として、原則必要なものはどれか。",
    choices: ["取扱説明書のみ", "無線局免許状",
             "無線従事者の住民票", "通信相手方の承諾書"], answer: 1,
    explain: "無線局には免許状のほか、無線業務日誌(一部の局)等の備え付けが義務付けられる。" }
];

// 画面タグ表示用: "無線工学 / 電気回路" 形式を合成
function displayTag(q) {
  const subjectLabel = q.subject === "engineering" ? "無線工学" : "法規";
  return `${subjectLabel} / ${q.topic}`;
}

function pickQuiz(subject) {
  const eng = QUESTIONS.filter((q) => q.subject === "engineering");
  const law = QUESTIONS.filter((q) => q.subject === "law");
  switch (subject) {
    case "engineering":
      return shuffle(eng);
    case "law":
      return shuffle(law);
    case "mixed":
    case "past":
      return shuffle([...eng, ...law]);
    case "mock":
      // 模擬試験は無線工学と法規から均等に
      return [...shuffle(eng).slice(0, 12), ...shuffle(law).slice(0, 12)];
    case "review":
      // 重要度が高い問題を中心に(将来は誤答履歴で重み付け)
      return weightedPick(QUESTIONS, 6);
    default:
      return shuffle([...eng, ...law]);
  }
}

// 重要度ベースの加重ランダム抽出(将来: 忘却度・誤答率を加算)
function weightedPick(pool, n) {
  const items = pool.slice();
  const picked = [];
  while (picked.length < n && items.length > 0) {
    const totalWeight = items.reduce((s, q) => s + (q.importance || 3), 0);
    let r = Math.random() * totalWeight;
    for (let i = 0; i < items.length; i++) {
      r -= items[i].importance || 3;
      if (r <= 0) {
        picked.push(items[i]);
        items.splice(i, 1);
        break;
      }
    }
  }
  return picked;
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
  // モード別に出題数を決定
  const limit = subject === "mock" ? 24 : subject === "review" ? 6 : 10;
  quizState.list = all.slice(0, limit);
  quizState.index = 0;
  quizState.correctCount = 0;
  renderQuiz();
  showScreen("quiz", { hideTab: true });
}

function renderQuiz() {
  const q = quizState.list[quizState.index];
  quizState.selected = null;
  quizState.answered = false;

  document.getElementById("quiz-tag").textContent = displayTag(q);
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
