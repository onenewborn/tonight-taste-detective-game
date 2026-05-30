const traits = {
  heat: { label: "刺激感", color: "#d4492f" },
  comfort: { label: "安慰感", color: "#f3b544" },
  fresh: { label: "清爽度", color: "#31705a" },
  rich: { label: "浓郁度", color: "#4b2f25" },
  crunch: { label: "口感声", color: "#255e7c" },
  ritual: { label: "仪式感", color: "#8f4ca6" },
};

const rounds = [
  {
    title: "先闻到哪种味道，你会立刻饿？",
    plate: "香气线索",
    choices: [
      ["热油泼辣椒的香", "一闻就想找米饭", "#d4492f", { heat: 3, rich: 1 }],
      ["刚出锅的葱花蛋饼", "热乎、踏实、能马上开吃", "#f3b544", { comfort: 3, rich: 1 }],
      ["柠檬、薄荷和冰汽水", "嘴里先凉一下", "#31705a", { fresh: 3, ritual: 1 }],
      ["炭烤肉汁滴到火上", "烟火气直接拉满", "#4b2f25", { rich: 3, heat: 1 }],
    ],
  },
  {
    title: "现在只能选一种口感，你更想咬到什么？",
    plate: "口感线索",
    choices: [
      ["外壳咔嚓的炸物", "声音越脆越快乐", "#255e7c", { crunch: 3, comfort: 1 }],
      ["吸满汤汁的面", "每一口都带着热气", "#d4492f", { comfort: 2, rich: 2 }],
      ["冰凉弹牙的粉/冻", "清爽但有存在感", "#31705a", { fresh: 2, crunch: 1 }],
      ["软糯浓稠的炖菜", "像把胃盖上被子", "#f3b544", { comfort: 3, rich: 1 }],
    ],
  },
  {
    title: "饭点地点突然出现，你会走向哪里？",
    plate: "场景线索",
    choices: [
      ["冒烟的小吃摊", "站着吃也很香", "#d4492f", { heat: 2, crunch: 1 }],
      ["亮着暖灯的家常馆", "菜单不用花哨，锅气要足", "#f3b544", { comfort: 3 }],
      ["干净明亮的轻食吧", "吃完不困，身体很轻", "#31705a", { fresh: 3 }],
      ["需要预约的小馆", "慢慢吃，认真吃", "#8f4ca6", { ritual: 3, rich: 1 }],
    ],
  },
  {
    title: "如果今天有一碗主食，你希望它是什么状态？",
    plate: "主食线索",
    choices: [
      ["红油拌面", "辣、香、亮，越拌越馋", "#d4492f", { heat: 3, rich: 1 }],
      ["番茄牛腩饭", "酸甜浓汁浇下去", "#f3b544", { comfort: 2, rich: 2 }],
      ["冷荞麦面", "蘸汁清爽，吃完舒服", "#31705a", { fresh: 3, ritual: 1 }],
      ["煲仔饭锅巴", "最后那层脆底是重点", "#255e7c", { crunch: 2, rich: 2 }],
    ],
  },
  {
    title: "给这顿饭加一个灵魂配角，你选？",
    plate: "配角线索",
    choices: [
      ["一碟酸辣泡菜", "把胃口一下叫醒", "#d4492f", { heat: 2, fresh: 1 }],
      ["一杯冰镇酸梅汤", "甜酸收尾，刚刚好", "#31705a", { fresh: 2, ritual: 1 }],
      ["半颗流心蛋", "戳开就是幸福感", "#f3b544", { comfort: 2, rich: 1 }],
      ["一小碗浓汤", "先暖胃，再认真吃", "#4b2f25", { rich: 2, comfort: 1 }],
    ],
  },
  {
    title: "今天的你更想被哪种食物照顾？",
    plate: "情绪线索",
    choices: [
      ["让人清醒的辣", "吃完像重启系统", "#d4492f", { heat: 3 }],
      ["不用思考的熟悉", "越家常越有效", "#f3b544", { comfort: 3 }],
      ["轻一点的满足", "不压胃，但要好吃", "#31705a", { fresh: 3 }],
      ["漂亮的一整套", "菜、杯子、灯光都要对", "#8f4ca6", { ritual: 3 }],
    ],
  },
  {
    title: "最后一口，你希望留下什么感觉？",
    plate: "余味线索",
    choices: [
      ["嘴唇微麻", "还想再喝一口水", "#d4492f", { heat: 2, rich: 1 }],
      ["肚子暖暖的", "人也安静下来", "#f3b544", { comfort: 3 }],
      ["清香回甘", "像饭后吹了会儿风", "#31705a", { fresh: 2, ritual: 1 }],
      ["香气停很久", "越回味越饿", "#4b2f25", { rich: 3 }],
    ],
  },
  {
    title: "现在有人说“走，吃饭”，你最想听见哪个关键词？",
    plate: "开饭口令",
    choices: [
      ["辣锅", "热闹、沸腾、有攻击性", "#d4492f", { heat: 3, ritual: 1 }],
      ["盖饭", "简单直接，一勺下去全都有", "#f3b544", { comfort: 2, rich: 1 }],
      ["海鲜/沙拉/越南粉", "鲜、轻、带一点酸", "#31705a", { fresh: 3 }],
      ["烤肉/小酒馆", "慢慢烤，慢慢聊", "#4b2f25", { rich: 2, ritual: 2 }],
    ],
  },
];

const results = [
  {
    key: "heat",
    title: "红油热辣型",
    desc: "你现在需要的是能把注意力拉回身体里的食物：香气要直给，入口要有冲击，最好每一口都让人想继续夹下一筷。",
    menu: [
      ["主菜", "红油抄手 / 麻辣香锅 / 酸辣粉"],
      ["搭配", "冰豆浆、酸梅汤或一碟拍黄瓜"],
      ["点单暗号", "要香辣，不要只辣；要有蒜香和一点酸。"],
    ],
  },
  {
    key: "comfort",
    title: "热乎安慰型",
    desc: "你真正想吃的不是复杂，而是一份有锅气、有主食、有热汤感的踏实。它应该让你坐下以后不再纠结今晚吃什么。",
    menu: [
      ["主菜", "番茄牛腩饭 / 鸡蛋葱油面 / 砂锅米线"],
      ["搭配", "煎蛋、热汤、少量小菜"],
      ["点单暗号", "要热的、软的、汁多的，最好能拌饭。"],
    ],
  },
  {
    key: "fresh",
    title: "清爽开胃型",
    desc: "你现在的胃口需要被轻轻打开：酸、鲜、凉、脆会比厚重油香更有吸引力。吃完要舒服，而不是被饭困按住。",
    menu: [
      ["主菜", "越南牛肉粉 / 冷荞麦面 / 柠檬虾沙拉"],
      ["搭配", "气泡水、青柠、薄荷、爽口小菜"],
      ["点单暗号", "要酸香、鲜味和清脆口感，酱汁分开放。"],
    ],
  },
  {
    key: "rich",
    title: "浓香满足型",
    desc: "你的食欲被烟火气和厚度点燃。烤、炖、煎、焖都会很有效，关键是香气要沉下来，入口要有一点油润和回味。",
    menu: [
      ["主菜", "炭烤肉饭 / 黄焖鸡 / 咖喱猪排饭"],
      ["搭配", "烤蔬菜、溏心蛋、热茶"],
      ["点单暗号", "要酱香、焦香和肉汁感，别太清淡。"],
    ],
  },
  {
    key: "crunch",
    title: "咔嚓快乐型",
    desc: "你今天的食欲入口在声音里。脆皮、锅巴、炸物、爽脆蔬菜都会让这顿饭更有存在感。",
    menu: [
      ["主菜", "脆皮鸡饭 / 煲仔饭 / 炸猪排咖喱"],
      ["搭配", "酸甜蘸酱、卷心菜丝、冰饮"],
      ["点单暗号", "要现炸或现烤，脆感比份量更重要。"],
    ],
  },
  {
    key: "ritual",
    title: "仪式感慢吃型",
    desc: "你不只是饿，你需要一顿能把时间慢下来的饭。摆盘、灯光、喝什么、先吃哪一口，都在影响你的胃口。",
    menu: [
      ["主菜", "小酒馆套餐 / 寿喜烧 / 烤肉双人盘"],
      ["搭配", "一杯无酒精特调或热茶"],
      ["点单暗号", "要能慢慢吃，最好有几样小份组合。"],
    ],
  },
];

const state = {
  round: 0,
  scores: Object.fromEntries(Object.keys(traits).map((key) => [key, 0])),
  timerId: null,
  seconds: 18,
  currentResult: null,
};

const roundSeconds = 18;

const els = {
  introPanel: document.querySelector("#introPanel"),
  playPanel: document.querySelector("#playPanel"),
  startGame: document.querySelector("#startGame"),
  quickResult: document.querySelector("#quickResult"),
  resetTop: document.querySelector("#resetTop"),
  roundLabel: document.querySelector("#roundLabel"),
  promptTitle: document.querySelector("#promptTitle"),
  timerRing: document.querySelector("#timerRing"),
  timerText: document.querySelector("#timerText"),
  plateHint: document.querySelector("#plateHint"),
  choices: document.querySelector("#choices"),
  signalList: document.querySelector("#signalList"),
  radarText: document.querySelector("#radarText"),
  meterFill: document.querySelector("#meterFill"),
  resultCard: document.querySelector("#resultCard"),
  resultTitle: document.querySelector("#resultTitle"),
  resultDesc: document.querySelector("#resultDesc"),
  menuBoard: document.querySelector("#menuBoard"),
  shareResult: document.querySelector("#shareResult"),
  shareNote: document.querySelector("#shareNote"),
  playAgain: document.querySelector("#playAgain"),
};

function renderSignals() {
  els.signalList.innerHTML = Object.entries(traits)
    .map(([key, trait]) => {
      const value = Math.min(100, Math.round((state.scores[key] / 12) * 100));
      return `
        <div class="signal">
          <div class="signal__head">
            <span>${trait.label}</span>
            <span>${value}%</span>
          </div>
          <div class="bar"><span style="--bar-color: ${trait.color}; width: ${value}%"></span></div>
        </div>
      `;
    })
    .join("");
}

function topTrait() {
  return Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
}

function updateRadar() {
  const trait = traits[topTrait()];
  const progress = Math.round((state.round / rounds.length) * 100);
  els.radarText.textContent = state.round ? `正在靠近：${trait.label}` : "尚未锁定";
  els.meterFill.style.width = `${progress}%`;
}

function startTimer() {
  clearInterval(state.timerId);
  state.seconds = roundSeconds;
  tickTimer();
  state.timerId = setInterval(() => {
    state.seconds -= 1;
    tickTimer();
    if (state.seconds <= 0) {
      pickChoice(rounds[state.round].choices[Math.floor(Math.random() * 4)]);
    }
  }, 1000);
}

function tickTimer() {
  els.timerText.textContent = state.seconds;
  els.timerRing.style.strokeDashoffset = String(113 - (state.seconds / roundSeconds) * 113);
}

function renderRound() {
  const round = rounds[state.round];
  els.roundLabel.textContent = `Round ${state.round + 1} / ${rounds.length}`;
  els.promptTitle.textContent = round.title;
  els.plateHint.textContent = round.plate;
  els.choices.innerHTML = "";

  round.choices.forEach((choice) => {
    const [title, desc, color] = choice;
    const button = document.createElement("button");
    button.className = "choice-card";
    button.type = "button";
    button.innerHTML = `
      <i class="food-mark" style="--mark-color: ${color}"></i>
      <strong>${title}</strong>
      <span>${desc}</span>
    `;
    button.addEventListener("click", () => pickChoice(choice));
    els.choices.appendChild(button);
  });

  renderSignals();
  updateRadar();
  startTimer();
}

function pickChoice(choice) {
  clearInterval(state.timerId);
  Object.entries(choice[3]).forEach(([key, value]) => {
    state.scores[key] += value;
  });
  state.round += 1;
  renderSignals();
  updateRadar();

  if (state.round >= rounds.length) {
    showResult();
    return;
  }

  renderRound();
}

function showResult() {
  els.playPanel.hidden = true;
  els.resultCard.hidden = false;
  const match = results.find((item) => item.key === topTrait()) || results[0];
  state.currentResult = match;
  els.shareNote.textContent = "";
  els.resultTitle.textContent = `今晚适合吃：${match.title}`;
  els.resultDesc.textContent = match.desc;
  els.menuBoard.innerHTML = match.menu
    .map(
      ([label, text]) => `
        <div class="menu-item">
          <strong>${label}</strong>
          <span>${text}</span>
        </div>
      `,
    )
    .join("");
}

function resetGame() {
  clearInterval(state.timerId);
  state.round = 0;
  state.currentResult = null;
  Object.keys(state.scores).forEach((key) => {
    state.scores[key] = 0;
  });
  els.introPanel.hidden = false;
  els.playPanel.hidden = true;
  els.resultCard.hidden = true;
  els.plateHint.textContent = "等待第一份线索";
  renderSignals();
  updateRadar();
}

function startGame() {
  state.round = 0;
  state.currentResult = null;
  Object.keys(state.scores).forEach((key) => {
    state.scores[key] = 0;
  });
  els.introPanel.hidden = true;
  els.resultCard.hidden = true;
  els.playPanel.hidden = false;
  renderRound();
}

async function shareResult() {
  const match = state.currentResult || results.find((item) => item.key === topTrait()) || results[0];
  const menuLine = match.menu.map(([label, text]) => `${label}：${text}`).join("\n");
  const text = `我在「今晚吃什么侦探局」测到：${match.title}\n${menuLine}`;
  const shareData = {
    title: "今晚吃什么侦探局",
    text,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      els.shareNote.textContent = "已打开分享面板。";
      return;
    }

    await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    els.shareNote.textContent = "结果和链接已复制。";
  } catch (error) {
    els.shareNote.textContent = "分享被取消了，链接还在这里等你。";
  }
}

function quickResult() {
  const seeds = ["heat", "comfort", "fresh", "rich", "crunch", "ritual"];
  seeds.forEach((key) => {
    state.scores[key] = Math.floor(Math.random() * 5);
  });
  state.scores[seeds[Math.floor(Math.random() * seeds.length)]] += 8;
  state.round = rounds.length;
  els.introPanel.hidden = true;
  showResult();
  renderSignals();
  updateRadar();
}

els.startGame.addEventListener("click", startGame);
els.quickResult.addEventListener("click", quickResult);
els.resetTop.addEventListener("click", resetGame);
els.playAgain.addEventListener("click", startGame);
els.shareResult.addEventListener("click", shareResult);

renderSignals();
