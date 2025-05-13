import React, { useEffect } from "react";
import { TITLE } from "../../../const";

import "./faqPage.css";

export default function (props) {
  useEffect(() => {
    document.title = `科大 CS 常見問題 | ${TITLE}`;
  }, []);
  return (
    <div className="faqPage" lang="zh-Hant">
      <div className="container">
        <h1 className="pageHeader">FAQ</h1>
        <section className="section">
          <h2 className="highlighted">CS 讀咩㗎？</h2>
          <p>
            CS，全寫係 Computer
            Science，中文叫計算機科學及工程，係一科修讀電腦軟件相關嘅
            major。科大 CS
            提供四個主要必修領域俾學生修讀去培養學生嘅基本能力，包括電腦編程、資料結構與算法、操作系統以及軟件工程。講到咁樣，好多人都會以為
            CS 就係 Programming。如果你咁樣諗就大錯特錯啦！CS 除咗學寫 code
            之外，你會學點樣寫一個好嘅程式出嚟，算法(Algorithm)
            ，團隊編程，軟件設計模式等等；仲有電腦結構同埋系統運作，淺至 CPU
            同記憶體運作，深至 OS 同埋檔案處理。當然唔少得 Linear Algebra 同埋
            Discrete Maths 呢啲重要嘅數學概念啦。
          </p>
          <p>
            讀完必修課程，了解咗自己喺 CS
            方面嘅強項同埋興趣之後，同學就要喺四個唔同領域選讀自己有興趣嘅選修課程
            (Electives) ，包括人工智能 (A.I.)
            、軟件及多媒體、系統及網絡、同埋軟件及數據庫。
          </p>
          <p>
            學系亦設有副修課程，其中就包括大數據科技嘅副修課程，而依個副修課程嘅目的就係要提升學生對大數據嘅認知同埋學習利用工具去收集、管理以及處理大數據嘅技巧。
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">讀 CS 有啲咩出路呀？</h2>
          <p>
            好多資訊科技有關嘅職業都會優先聘請 CS
            嘅畢業生！例如香港或者鄰近地區都非常之缺乏 Software Engineer 或者
            Web Developer 嘅人才，佢哋嘅主要職責都係同一班 IT
            同事一齊寫一個網頁或者程式。如果覺得寫 Code 好辛苦，你亦都可以做 IT
            Consultant 為顧客提供 IT 方面嘅支援同意見，或者做 IT Research
            寫論文。而科大嘅 CS
            亦都會有大數據或者人工智能等等嘅科目，所以亦都有唔少人會投身同人工智能有關或者係
            FinTech 嘅職業，甚至有唔少 CS 嘅畢業生會選擇出嚟創業㗎！
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">
            科大計算機科學、計算機工程同埋電子工程有啲咩分別呀？
          </h2>
          <p>
            計算機科學 CS (Computer Science)
            係一科研究電腦與資訊系統嘅理論同技術嘅 Major 。CS
            側重於學習電腦軟件運作原理，同埋學點樣運用呢啲軟件去研發程式/網頁。詳情可以睇返上面嘅介紹。
          </p>
          <p>
            電子工程 EE (Electronic Engineering) 係一科研究電子硬件嘅學科。EE
            嘅同學主要會由基本電路，同埋邏輯開始學起，繼而學習點樣利用電子器材去研發機械人，或者係利用
            Low Level Programming Languages
            控制一啲硬件設備。佢哋嘅課程與時並進，加入咗 Programming
            嘅課程，不過都係以電子硬件知識為主。
          </p>
          <p>
            計算機工程 CPEG (Computer Engineering) 算係 CS 同埋 EE 嘅合拼
            Major。佢哋會讀到 Programming Basics，電腦系統運作等等 CS
            嘅課程，同時亦都學到 EE 嘅電子硬件知識。CPEG
            同學亦可以就住自己嘅興趣揀選 CS 或者 EE
            嘅選修課程，課程自由組合，不過因為兩邊嘅 required course
            都要讀哂，會比較辛苦。
          </p>
          <p>
            其實牽涉到 Computer Science 嘅 major 唔止以上果 3 個，BSc in Data
            Science & Technology (DSCT) 就係一個近年新開嘅選擇，除咗會學
            Coding，仲會涉獵到數據處理學同埋數學知識。呢個 Major
            對於數學嘅要求會比較高！
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">
            BEng in Computer Science (COMP) 同埋 BSc in Computer Science (COSC)
            有咩分別㗎？
          </h2>
          <p>
            基本上兩者嘅 reuqired courses 同埋 elective course
            係一樣嘅。不過由於 BSc in Computer Science (COSC) 係為有意 double
            major CS 嘅同學而設，佢哋同 COMP 同學嘅分別係唔需要做 Internship
            同埋 FYP，而 COSC 同學揀 electives 亦會有比較少嘅限制，方便同學讀好
            first major 嘅課程，同埋有機會參與 Research。不過 COSC
            嘅收生要求比較高，亦都淨係俾已經有 first major
            嘅同學報讀，如果同學真係對 CS 好有興趣，我哋都會建議你報讀返 BEng in
            Computer Science (COMP)。
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">我想經 Jupas 入嚟，咁我應該點報呀？</h2>
          <p>
            由於科大 Engine 係 School Based 收生嘅，同學要等一年先可以揀讀心儀嘅
            Major。所有想經 JUPAS 讀科大 CS 嘅同學一定要先報讀 JS5200，即係
            HKUST - Engineering 。大部份嘅 Engineering Major ，包括 Computer
            Science，都係以 Best 24 Credits 決定收生，喺未有 Major 嘅 Freshmen
            Year，同學要努力考好啲 Final Exams ，確保自己嘅成績夠入 CS Major
            呀！
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">
            如果我中學冇讀 ICT 嘅話會唔會有啲咩蝕底㗎？
          </h2>
          <p>
            如果你係經 JUPAS 入嚟嘅話，School of Enginnering
            要求同學最少修讀一科理科 (Physics/Chemistry/Biology/Combined
            Science) ，冇讀理科嘅同學可以用 ICT 填補呢個要求，不過只有 Best
            Science Subject 先會有 Double Count。如果你中學冇讀理科，又冇讀 ICT
            ，咁你就無緣經 Jupas 入讀科大 CS 喇！
          </p>
          <p>
            讀過 ICT 嘅同學因為中學都會有少少編程嘅經驗，喺 Programming
            方面會較快上手，不過冇讀 ICT
            嘅同學都唔需要灰心！只要你俾多少少時時追返啲 Programming
            嘅技巧，你一樣可以讀多好開心。讀過 ICT 嘅同學千其唔好輕敵呀，因為
            Programming 只係佔 CS 嘅一少部份，你哋喺 Programming
            以外嘅領域係同其他同學平起平坐㗎！
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">
            如果我想而家讀緊 HD 或者 Asso 咁我應該點樣入嚟 HKUST CS 呀？
          </h2>
          <p>
            如果你係喺嚟緊一個學年係讀最後一年 HD 或者 Asso 嘅話，咁你就可以喺 9
            至 11 月經{" "}
            <a
              href="https://join.ust.hk/apply/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://join.ust.hk/apply/
            </a>{" "}
            申請 Direct Entry (Non-Jupas)
            入學喇。喺申請之前記住你已經取得大學嘅英文要求，即係 HKDSE
            英文至少有 3 又或者 IELTS 至少有 6.0。咁入到系統之後你就可以將「BEng
            in Computer
            Science」放到你嘅兩個志願之中，然後輸入你嘅個人資料、上載成績等等嘅相關文件，最後繳交埋
            $450 嘅申請費就完成架啦。
          </p>
          <p>
            要注意嘅係 CS Direct Entry 嘅收生程序有可能喺系統 Deadline
            前已經完成，所以如果你對 CS
            有興趣嘅話記住要盡快喺系統啟動之後就申請，唔好等到就嚟 Deadline
            先申請呀！
          </p>
          <p>
            入學嘅詳情可以參考{" "}
            <a
              href="https://join.ust.hk/admissions/post-secondary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://join.ust.hk/admissions/post-secondary/
            </a>
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">
            我依家收到科大 Direct Entry 嘅 Offer，咁我要點先畢到業呀？
          </h2>
          <p>
            科大嘅畢業要求係 120 個 credit，即係你要讀夠 120 個 credit
            先可以畢業，如果你係經 direct entry 入嚟嘅話就會有 21 個 credit 自動
            transfer 比你，而其餘嘅 credit 就要睇下你喺之前嘅院校讀過嘅 course
            有冇同科大嘅 course 相等，你可以上{" "}
            <a
              href="https://crtran.ust.hk/credit_instit"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://crtran.ust.hk/credit_instit
            </a>{" "}
            搵下有冇你喺院校讀過嘅 course，而最多只可以 transfer 60 個
            credit。咁如果你 transfer 到 60 個 credit 嘅話，你只需要係嚟緊嘅 2-3
            年讀埋剩餘嘅 60 個 credit 就可以畢業喇。
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">
            咁如果我收到嘅係第二志願 BEng in Computer Engineering 嘅 offer
            嘅話，我仲有冇可能等到第一志願 BEng in Computer Science 嘅 offer
            㗎？
          </h2>
          <p>
            喺依兩個 major 裡面只會出一個 offer，咁所以如果你收到第二志願嘅
            offer 嘅話即係代表你第一志願唔成功喇。
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">
            我嚟緊就會嚟科大讀，咁我有冇啲咩需要準備㗎？
          </h2>
          <p>
            如果想喺正式入學之前，學下 CS
            嘅知識增值下自己，可以睇返我哋之前寫嘅一篇Blog Post：
            <br />
            <a
              href="https://ustcsess.medium.com//hkust-%E6%BA%96-cs-%E5%AD%B8%E7%94%9F%E7%9A%84%E8%87%AA%E6%88%91%E4%BF%AE%E9%A4%8A-69969a146326"
              target="_blank"
              rel="noopener noreferrer"
            >
              [HKUST] (準) CS 學生的自我修養
            </a>
          </p>
          <p>
            如果想知道 Reg Day 嘅流程，就可以睇下我哋嘅 Reg Day 攻略：
            <br />
            <a
              href="https://ustcsess.medium.com//2018-hkust-reg-day-%E6%94%BB%E7%95%A5-%E7%A7%91%E5%A4%A7cs-61c1b31eac7"
              target="_blank"
              rel="noopener noreferrer"
            >
              HKUST Reg Day 攻略| 科大CS - CSESS HKUST
            </a>
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">CS Soc 有咩活動㗎？</h2>
          <p>
            我地 CS Soc
            全年都會舉行各式各樣嘅活動，小至學術分享，畢業生晚宴；大至參觀 IT
            公司，嘉賓表演，會員聚會等！
          </p>
          <p>
            CS Soc 嘅年度焦點活動有三個：歡迎新入學同學嘅 CSE Orientation
            Camp，招募新血同埋推出靚靚 Soc Tee Soc Product 嘅 CSESS Orientation
            Week，同埋有得食有得玩有得打卡嘅 CSE Festival！
          </p>
          <p>
            如果想了解我哋一年入面嘅活動回顧同埋 ExCos
            嘅心路歷程，可以睇下我哋親自寫嘅 NewsLetter 同埋 Annual
            Journal。成為我哋嘅會員又點止有活動玩，仲可以免費獲得我哋精心設計嘅福利產品，每年都唔同㗎！無論你入到科大想讀書，抑或想識新朋友仔，就算你最後入唔入到
            CS，CS Soc 都絕對係你嘅 Best Choice ！
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">CS Ocamp 有啲咩玩㗎？</h2>
          <p>
            三日兩夜嘅 CS Ocamp 包羅萬有！我哋有齊最好玩刺激嘅濕身水戰，熱血
            Campfire，全場 High 爆嘅 Party Night，仲有詭秘刺激嘅 Detective
            Game，俾各位大學新鮮人同一班組爸媽一齊玩！我哋 CS Ocamp
            亦都自己設計咗獨特嘅 City Hunt 同埋 School Hunt ，特登加入 CS
            人先會去嘅角落，務求大家可以對校園同埋科大附近嘅環境有更深嘅認識！留意返由於每年校園情況可能有所變動，OCamp
            嘅活動請以 ExCo 公佈嘅消息為準。
          </p>
          <p>
            CS OCamp 嘅另一特色，就係我哋嘅 OCamp
            係由故事線串連，各位參加者喺享受 ExCos
            盡心盡力準備嘅活動同時，不妨留意下佢哋精心設計嘅故事呀～
          </p>
        </section>
        <section className="section">
          <h2 className="highlighted">
            如果我唔係讀 CS 嘅話咁我仲可唔可以 join 你哋個 soc 㗎？
          </h2>
          <p>
            當然可以啦！只要你對 Computer Science
            有興趣，或者想認識一班志同道合嘅人同你一齊上堂，無論你係咪 CS
            Major，我哋 CS Soc 都好歡迎你加入我哋嘅大家庭！
          </p>
        </section>
      </div>
    </div>
  );
}
