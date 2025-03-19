function showFact() {
  const facts = [
    "Pagėgių miestas įsikūręs netoli Nemuno ir turi svarbią istoriją kaip pasienio miestas.",
    "Pagėgiuose veikia unikalus Martyno Jankaus muziejus, skirtas spaudos istorijai.",
    "Bitėnų Rambyno kalnas yra viena iš mistiškiausių vietų Lietuvoje.",
    "Pagėgių kraštas yra žinomas dėl savo stiprios kultūrinės ir istorinės reikšmės.",
    "Rambyno kalnas nuo seno laikomas šventa vieta, kur lietuvininkai vykdė pagoniškas apeigas.",
    "Pasakojama, kad naktimis aplink raganų eglę galima išgirsti keistus garsus – legendos sako, jog tai raganų susirinkimų vieta.",
    "Martynas Jankus buvo vadinamas Mažosios Lietuvos patriarchu, nes aktyviai kovojo už lietuvių spaudą ir kalbą.",
    "Geležinkelio stotis pastatyta XIX a. ir buvo viena svarbiausių transporto jungčių tarp Klaipėdos ir Karaliaučiaus.",
    "Kadaise čia kursavo traukiniai, gabenantys ne tik keleivius, bet ir svarbias prekes tarp Mažosios Lietuvos regionų.",
    "Pagėgių kultūros centre dažnai vyksta liaudies muzikos ir amatų šventės, kur galima pamatyti tradicinius amatus.",
    "Pagėgių kultūros centras - tai viena pagrindinių vietų, kur puoselėjamos ir perduodamos Mažosios Lietuvos kultūros tradicijos.",
    "Rambyno kalnas - XIX a. čia vyko lietuvių tautiniai susibūrimai, skatinantys lietuvybę ir kultūrinę tapatybę.",
    "​Pagėgiai pirmą kartą rašytiniuose šaltiniuose paminėti 1307 m. gegužės 19 d. Remiantis šia data, 2025 metais miestui sukanka 718 metų.​",
    "​Pagėgių mieste 2023 metais gyveno 1 537 žmonės. Pagėgių savivaldybėje 2021 metais gyveno 7 440 gyventojų.",
    "Pagėgiuose yra Šv. Kryžiaus bažnyčia. Pirmoji pastatyta 1929–1930 m., bet sunaikinta per Antrąjį pasaulinį karą. Dabartinė bažnyčia statyta 1994–1997 m. ir yra modernios architektūros.",
  ];
  const factBox = document.getElementById("random-fact");
  const randomIndex = Math.floor(Math.random() * facts.length);
  factBox.textContent = facts[randomIndex];
}
