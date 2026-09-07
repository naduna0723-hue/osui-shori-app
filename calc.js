const CALC_LESSONS=[
{
 id:'unit',title:'単位換算',level:'最重要',icon:'⇄',summary:'mg/L × m³/d を kg/d に直す',
 look:'濃度（mg/L）と流量（m³/d）が出たら、まず「1日あたり何kgか」に変換できないかを見る。',
 formula:'負荷量 [kg/d] = 濃度 [mg/L] × 流量 [m³/d] ÷ 1000',
 why:'1 m³ = 1000 L、1 kg = 1,000,000 mg なので、まとめると ÷1000 になる。ここは丸ごと覚えてOK。',
 steps:['濃度と流量を探す','「濃度 × 流量 ÷1000」と書く','単位が kg/d になったことを確認'],
 example:{text:'BOD 140 mg/L、流量260 m³/d。BOD量は？',calc:'140 × 260 ÷ 1000 = 36.4',answer:'36.4 kg/d',key:'電卓：140 × 260 ÷ 1000 ='},
 practice:{text:'BOD 180 mg/L、流量250 m³/d。BOD量は？',choices:['4.5 kg/d','45 kg/d','450 kg/d','4500 kg/d'],correct:1,explain:'180 × 250 ÷ 1000 = 45 kg/d。mg/L × m³/d は最後に ÷1000。'}
},
{
 id:'removal',title:'除去率',level:'基礎',icon:'％',summary:'入口と出口から除去率を出す',
 look:'流入濃度と処理水濃度が並んでいたら、除去率を疑う。',
 formula:'除去率 [%] = (流入濃度 − 流出濃度) ÷ 流入濃度 × 100',
 why:'最初にあった量のうち、どれだけ減ったかの割合。分母は必ず「流入」。',
 steps:['流入 − 流出で「減った量」を出す','減った量 ÷ 流入','最後に ×100'],
 example:{text:'流入BOD 240 mg/L、処理水12 mg/L。除去率は？',calc:'(240 − 12) ÷ 240 × 100 = 95',answer:'95 %',key:'電卓：( 240 − 12 ) ÷ 240 × 100 ='},
 practice:{text:'流入200 mg/L、流出20 mg/Lのとき除去率は？',choices:['80 %','85 %','90 %','95 %'],correct:2,explain:'(200−20)÷200×100=90%。「流出÷流入」ではない点に注意。'}
},
{
 id:'hrt',title:'滞留時間（HRT）',level:'基礎',icon:'⏱',summary:'槽容量 ÷ 流量',
 look:'槽の容量（m³）と流量（m³/d）が出たらHRT。時間で聞かれたら最後に×24。',
 formula:'HRT [d] = 槽容量 V [m³] ÷ 流量 Q [m³/d]\nHRT [h] = V ÷ Q × 24',
 why:'「槽の中に、平均で何日・何時間いるか」。容量を1日流量で割れば日数になる。',
 steps:['V÷Q を計算','答えが d（日）ならそのまま','h（時間）が必要なら ×24'],
 example:{text:'槽容量600 m³、流量1800 m³/d。HRTは？',calc:'600 ÷ 1800 × 24 = 8',answer:'8 h',key:'電卓：600 ÷ 1800 × 24 ='},
 practice:{text:'槽容量900 m³、流量2700 m³/d。HRTは？',choices:['6 h','8 h','12 h','18 h'],correct:1,explain:'900÷2700=1/3日。×24=8時間。'}
},
{
 id:'volload',title:'BOD容積負荷',level:'頻出',icon:'V',summary:'BOD量 ÷ 曝気槽容量',
 look:'BOD濃度・流量・曝気槽容量が3つそろったら容積負荷。',
 formula:'BOD容積負荷 [kg/(m³・d)] = BOD量 [kg/d] ÷ 曝気槽容量 [m³]',
 why:'曝気槽1 m³あたり、1日に何kgのBODがかかっているかを見る指標。',
 steps:['濃度×流量÷1000でBOD量をkg/dへ','BOD量÷曝気槽容量','単位 kg/(m³・d) を確認'],
 example:{text:'BOD 200 mg/L、500 m³/d、曝気槽250 m³。容積負荷は？',calc:'200×500÷1000 = 100 kg/d\n100÷250 = 0.40',answer:'0.40 kg/(m³・d)',key:'電卓：200 × 500 ÷ 1000 ÷ 250 ='},
 practice:{text:'BOD 180 mg/L、600 m³/d、曝気槽300 m³。容積負荷は？',choices:['0.18','0.36','0.60','3.6'],correct:1,explain:'180×600÷1000=108 kg/d、108÷300=0.36 kg/(m³・d)。'}
},
{
 id:'fm',title:'BOD汚泥負荷（F/M）',level:'頻出',icon:'F/M',summary:'BOD量 ÷ 槽内MLSS量',
 look:'BOD量とMLSS量（またはMLSS濃度＋槽容量）が出たらF/M。',
 formula:'BOD汚泥負荷 = BOD量 [kg/d] ÷ 槽内MLSS量 [kg]',
 why:'微生物（汚泥）1 kgに、1日どれだけBODという「餌」が来るかを見る。',
 steps:['BOD量をkg/dにする','MLSS濃度[kg/m³]×槽容量[m³]で槽内MLSS量を出す','BOD量÷MLSS量'],
 example:{text:'BOD 200 mg/L、500 m³/d、MLSS 2.0 kg/m³、槽250 m³。汚泥負荷は？',calc:'BOD量=100 kg/d\nMLSS量=2.0×250=500 kg\n100÷500=0.20',answer:'0.20 kgBOD/(kgMLSS・d)',key:'電卓：(200×500÷1000) ÷ (2×250) ='},
 practice:{text:'BOD 180 mg/L、600 m³/d、MLSS 2.0 kg/m³、槽300 m³。汚泥負荷は？',choices:['0.09','0.18','0.36','1.8'],correct:1,explain:'BOD量108 kg/d、MLSS量600 kg。108÷600=0.18。'}
},
{
 id:'return',title:'返送汚泥率',level:'R6出題',icon:'↩',summary:'SS収支から r を出す',
 look:'MLSS X、返送汚泥濃度 Xr、返送率 r が出たらSS収支。流入SSを無視する条件もチェック。',
 formula:'(1+r)X = rXr\nしたがって r = X ÷ (Xr − X)',
 why:'曝気槽から沈殿槽へ行くSS量と、返送汚泥として戻るSS量のつり合い。',
 steps:['必要なら MLSS = BOD容積負荷 ÷ BOD汚泥負荷 でXを出す','r = X ÷ (Xr−X) に代入','0.40なら返送率40%と読む'],
 example:{text:'X=2000 mg/L、Xr=7000 mg/L。返送汚泥率rは？',calc:'r = 2000 ÷ (7000−2000)\n= 2000 ÷ 5000 = 0.40',answer:'r = 0.40（40 %）',key:'電卓：2000 ÷ ( 7000 − 2000 ) ='},
 practice:{text:'X=2500 mg/L、Xr=7500 mg/L。返送汚泥率は？',choices:['25 %','33 %','50 %','75 %'],correct:2,explain:'2500÷(7500−2500)=0.50。よって50%。'}
},
{
 id:'svi',title:'SVI',level:'R6出題',icon:'SVI',summary:'SV30 ÷ MLSS(g/L)',
 look:'30分沈降後の汚泥容量（SV30）とMLSSが出たらSVI。MLSSの単位はg/Lにそろえる。',
 formula:'SVI [mL/g] = SV30 [mL/L] ÷ MLSS [g/L]',
 why:'汚泥1 gが30分後に何mLの体積を占めるか。数値が大きいほど沈降性が悪い方向。',
 steps:['MLSSがmg/Lなら÷1000してg/Lへ','SV30÷MLSS(g/L)','単位mL/gを付ける'],
 example:{text:'SV30=295 mL/L、MLSS=1.82 g/L。SVIは？',calc:'295 ÷ 1.82 ≒ 162',answer:'約162 mL/g',key:'電卓：295 ÷ 1.82 ='},
 practice:{text:'SV30=300 mL/L、MLSS=2.0 g/L。SVIは？',choices:['75 mL/g','100 mL/g','150 mL/g','600 mL/g'],correct:2,explain:'300÷2.0=150 mL/g。'}
},
{
 id:'sludge',title:'汚泥生成量',level:'R6出題',icon:'ΔS',summary:'生成 − 内生呼吸分',
 look:'除去BOD量、汚泥転換率a、自己酸化係数b、槽内汚泥量Saが出たらこの式。',
 formula:'ΔS = aLr − bSa',
 why:'BODを食べて増える汚泥 aLr から、内生呼吸などで減る分 bSa を引く。',
 steps:['Lrは「流入BOD」ではなく「除去BOD量」を使う','槽内汚泥量Saをkgで出す','aLr − bSa の順に計算'],
 example:{text:'Lr=92 kg/d、a=0.50、Sa=280 kg、b=0.05 /d。汚泥生成量は？',calc:'0.50×92 − 0.05×280\n= 46 − 14 = 32',answer:'32 kg/d',key:'電卓：0.5 × 92 − 0.05 × 280 ='},
 practice:{text:'Lr=80 kg/d、a=0.50、Sa=240 kg、b=0.05 /d。ΔSは？',choices:['20 kg/d','28 kg/d','32 kg/d','40 kg/d'],correct:1,explain:'0.5×80−0.05×240=40−12=28 kg/d。'}
},
{
 id:'nitri',title:'硝化の酸素量',level:'R6出題',icon:'O₂',summary:'NH₄-N × 4.57',
 look:'アンモニア性窒素の除去量と酸素消費量が聞かれたら、4.57 gO₂/gNを使えるか確認。',
 formula:'理論酸素量 ≒ NH₄-N除去量 × 4.57',
 why:'完全硝化ではN 14 gに対してO₂ 64 gが必要。64÷14≒4.57。',
 steps:['流入NH₄-N−流出NH₄-Nで除去濃度','必要ならHRTで割って除去速度へ','×4.57で酸素量へ'],
 example:{text:'NH₄-Nが52→10 mg/L、HRT 8 h。酸素消費速度は？',calc:'(52−10)÷8 = 5.25 mgN/(L・h)\n5.25×4.57 ≒ 24.0',answer:'約24 mgO₂/(L・h)',key:'電卓：( 52 − 10 ) ÷ 8 × 4.57 ='},
 practice:{text:'NH₄-N除去量35 mg/L、HRT 7 h。酸素消費速度は？',choices:['約5','約11','約23','約160'],correct:2,explain:'35÷7=5 mgN/(L・h)。5×4.57=22.85≒23 mgO₂/(L・h)。'}
},
{
 id:'nutrient',title:'BOD:N:P',level:'暗記＋計算',icon:'100:5:1',summary:'栄養塩の必要量を比で出す',
 look:'活性汚泥の栄養塩N・Pの必要量を聞かれたら、BOD:N:P=100:5:1を使う。',
 formula:'BOD : N : P = 100 : 5 : 1',
 why:'BODを100としたとき、Nは5%、Pは1%が目安。',
 steps:['BOD量をkg/dで出す','N = BOD×5÷100','P = BOD×1÷100'],
 example:{text:'BOD負荷200 kg/d。必要N・Pの目安は？',calc:'N=200×0.05=10\nP=200×0.01=2',answer:'N 10 kg/d、P 2 kg/d',key:'電卓：200 × 0.05、200 × 0.01'},
 practice:{text:'BOD負荷120 kg/d。NとPの目安は？',choices:['N 1.2 / P 0.6','N 6 / P 1.2','N 12 / P 6','N 24 / P 12'],correct:1,explain:'120×5%=6 kg/d、120×1%=1.2 kg/d。'}
},
{
 id:'dose',title:'薬品注入量',level:'基礎',icon:'＋',summary:'注入濃度 × 流量 ÷1000',
 look:'薬注率mg/Lと処理水量m³/dが出たら、単位換算と同じ形。',
 formula:'薬品量 [kg/d] = 注入率 [mg/L] × 流量 [m³/d] ÷1000',
 why:'濃度×水量＝1日量。単位換算はBOD負荷量と同じ。',
 steps:['mg/Lとm³/dを確認','掛け算','÷1000してkg/d'],
 example:{text:'薬注率30 mg/L、処理量500 m³/d。薬品量は？',calc:'30×500÷1000 = 15',answer:'15 kg/d',key:'電卓：30 × 500 ÷ 1000 ='},
 practice:{text:'薬注率25 mg/L、処理量800 m³/d。薬品量は？',choices:['2 kg/d','10 kg/d','20 kg/d','200 kg/d'],correct:2,explain:'25×800÷1000=20 kg/d。'}
},
{
 id:'wash',title:'向流多段洗浄',level:'攻略',icon:'⇆',summary:'段数は候補代入で攻める',
 look:'n段、洗浄水V、持出し水v、公比r=V/v、不純物を何分の1にするか、が出たらこの型。',
 formula:'a₀/aₙ = (rⁿ⁺¹ − 1) ÷ (r − 1)',
 why:'試験で電卓が使えるなら、nを無理に対数で解かず「2段、3段…」と代入して最初に条件を満たす段数を選ぶと速い。',
 steps:['「1/10000以下」→ a₀/aₙ ≧10000 と読み替える','rを公式へ入れる','n=1,2,3…と順に電卓で試す','初めて目標値以上になったnが最小段数'],
 example:{text:'r=50。不純物量を洗浄前の1/10000以下にする最小段数は？',calc:'n=2：(50³−1)÷49 ≒ 2551 →不足\nn=3：(50⁴−1)÷49 ≒ 127551 →達成',answer:'3段',key:'電卓：50^3 → −1 → ÷49、次に50^4で確認'},
 practice:{text:'r=10。不純物量を洗浄前の1/500以下にする最小段数は？',choices:['1段','2段','3段','4段'],correct:2,explain:'n=2では(10³−1)÷9=111で不足。n=3では(10⁴−1)÷9=1111で500以上。よって3段。'}
}
];

function calcEnsureState(){if(!state.calcAnswers)state.calcAnswers={};}
function calcDone(){calcEnsureState();return Object.keys(state.calcAnswers).filter(id=>state.calcAnswers[id]===true).length}
function calc(){
 calcEnsureState();
 const done=calcDone(),total=CALC_LESSONS.length,pct=Math.round(done/total*100);
 app.innerHTML=`<section class="calc-hero"><span class="badge gold">電卓使用前提</span><h2>計算問題攻略編</h2><p>暗算勝負じゃない。<b>式を選ぶ → 単位をそろえる → 電卓に入れる</b>の3段階で攻略する。</p><div class="progress"><i style="width:${pct}%"></i></div><small>練習クリア ${done}/${total}テーマ（${pct}%）</small></section>
 <div class="calc-tip"><b>まずこれだけ</b><span>mg/L × m³/d ÷1000 = kg/d</span><small>ここが安定すると、BOD負荷・SVI・汚泥計算が一気に楽になる。</small></div>
 <div class="calc-tools"><button onclick="calcFormulaSheet()">公式一覧だけ見る</button><button onclick="calcChallenge()">計算12問チャレンジ</button></div>
 <h3 class="section-title">攻略テーマ</h3><div class="lesson-list">${CALC_LESSONS.map((l,i)=>{let ok=state.calcAnswers[l.id]===true;return `<button class="lesson-card ${ok?'done':''}" onclick="calcLesson(${i})"><span class="lesson-icon">${l.icon}</span><span class="lesson-body"><b>${l.title}</b><small>${l.summary}</small></span><span class="lesson-level">${ok?'✓ クリア':l.level}</span></button>`}).join('')}</div>
 <p class="notice">※計算編は学習用のオリジナル例題・類題です。令和6年度で出題された計算論点も優先して収録しています。</p>`;
}
function calcLesson(i){
 calcEnsureState();const l=CALC_LESSONS[i],saved=state.calcAnswers[l.id];
 app.innerHTML=`<div class="calc-top"><button class="back-mini" onclick="calc()">‹ 一覧</button><span>${i+1}/${CALC_LESSONS.length}</span></div>
 <section class="lesson-page"><div class="lesson-heading"><span class="lesson-icon big">${l.icon}</span><div><span class="badge gold">${l.level}</span><h2>${l.title}</h2><p>${l.summary}</p></div></div>
 <div class="guide-box eye"><b>① 問題文のここを見る</b><p>${l.look}</p></div>
 <div class="guide-box formula-box"><b>② 使う公式</b><div class="calc-formula">${l.formula.replace(/\n/g,'<br>')}</div><p>${l.why}</p></div>
 <div class="guide-box"><b>③ 解く順番</b><ol>${l.steps.map(s=>`<li>${s}</li>`).join('')}</ol></div>
 <div class="worked"><span class="worked-label">例題</span><h3>${l.example.text}</h3><div class="work-calc">${l.example.calc.replace(/\n/g,'<br>')}</div><div class="work-answer">答え：${l.example.answer}</div><div class="key-input">⌨ ${l.example.key}</div></div>
 <div class="practice"><span class="worked-label practice-label">練習</span><h3>${l.practice.text}</h3><div class="choices calc-choices">${l.practice.choices.map((c,n)=>`<button class="choice" data-i="${n}" onclick="calcPick(${i},${n})"><b>${n+1}.</b> ${c}</button>`).join('')}</div><div id="calcResult"></div></div>
 </section><div class="pager"><button class="secondary" onclick="${i>0?`calcLesson(${i-1})`:'calc()'}">${i>0?'前のテーマ':'一覧へ'}</button><button class="primary" onclick="${i<CALC_LESSONS.length-1?`calcLesson(${i+1})`:'calc()'}">${i<CALC_LESSONS.length-1?'次のテーマ':'一覧へ'}</button></div>`;
 if(saved!==undefined)calcReveal(i,saved,null);
}
function calcPick(i,n){const l=CALC_LESSONS[i],ok=n===l.practice.correct;calcEnsureState();state.calcAnswers[l.id]=ok;save();calcReveal(i,ok,n)}
function calcReveal(i,ok,chosen){const l=CALC_LESSONS[i];document.querySelectorAll('.calc-choices .choice').forEach((b,n)=>{b.disabled=true;if(n===l.practice.correct)b.classList.add('correct');if(chosen===n&&!ok)b.classList.add('wrong')});const r=$('#calcResult');if(r)r.innerHTML=`<div class="explain"><b class="${ok?'ok':'bad'}">${ok?'正解！':'ここを確認'}　答え ${l.practice.correct+1}</b><p>${l.practice.explain}</p></div>`}
function calcFormulaSheet(){app.innerHTML=`<div class="calc-top"><button class="back-mini" onclick="calc()">‹ 計算編</button><span>公式一覧</span></div><section class="hero"><span class="badge gold">直前確認用</span><h2>計算公式シート</h2><p>公式名を見て、何を入れる式か思い出せればOK。</p></section><div class="formula-list">${CALC_LESSONS.map((l,i)=>`<button class="formula-row" onclick="calcLesson(${i})"><b>${l.title}</b><span>${l.formula.replace(/\n/g,' / ')}</span></button>`).join('')}</div>`}
function calcChallenge(){calcEnsureState();const order=CALC_LESSONS.map((_,i)=>i);state.calcChallenge={order,pos:0,score:0};save();calcChallengeQ()}
function calcChallengeQ(){let ch=state.calcChallenge;if(!ch||ch.pos>=ch.order.length){return calcChallengeFinish()}const li=ch.order[ch.pos],l=CALC_LESSONS[li];app.innerHTML=`<div class="qtop"><span>計算12問チャレンジ</span><span>${ch.pos+1}/${ch.order.length}</span></div><div class="progress"><i style="width:${(ch.pos+1)/ch.order.length*100}%"></i></div><section class="qcard"><span class="badge gold">${l.title}</span><h2>${l.practice.text}</h2><div class="choices calc-choices">${l.practice.choices.map((c,n)=>`<button class="choice" onclick="calcChallengePick(${li},${n})"><b>${n+1}.</b> ${c}</button>`).join('')}</div><div id="calcResult"></div></section>`}
function calcChallengePick(li,n){const l=CALC_LESSONS[li],ok=n===l.practice.correct;document.querySelectorAll('.calc-choices .choice').forEach((b,k)=>{b.disabled=true;if(k===l.practice.correct)b.classList.add('correct');if(k===n&&!ok)b.classList.add('wrong')});if(ok)state.calcChallenge.score++;calcEnsureState();if(ok)state.calcAnswers[l.id]=true;save();$('#calcResult').innerHTML=`<div class="explain"><b class="${ok?'ok':'bad'}">${ok?'正解！':'不正解'}　答え ${l.practice.correct+1}</b><p>${l.practice.explain}</p><button class="primary full-inline" onclick="calcChallengeNext()">次へ</button></div>`}
function calcChallengeNext(){state.calcChallenge.pos++;save();calcChallengeQ()}
function calcChallengeFinish(){const ch=state.calcChallenge||{score:0,order:CALC_LESSONS};const n=ch.score,total=ch.order.length;app.innerHTML=`<section class="calc-hero"><span class="badge gold">計算チャレンジ終了</span><h2>${n}/${total}問 正解</h2><p>${n>=10?'かなり仕上がってる。あとは過去問で実戦確認。':n>=7?'あと少し。間違えたテーマだけ戻ればかなり伸びる。':'まずは公式より「どの数字を使うか」を1テーマずつ固めよう。'}</p><div class="score">${Math.round(n/total*100)}%</div><button class="primary" onclick="calc()">計算攻略へ戻る</button></section>`}
