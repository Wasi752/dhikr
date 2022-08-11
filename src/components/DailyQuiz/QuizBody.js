import React from "react";
import QuizOptions from "./QuizOptions";
import "./QuizBody.css"

const Data = [
    ["قَالَ (qāla)", "said"],
    ["كَانَ (kāna)", "was"],
    ["ءَامَنَ (ʾāmana)", "to believe"],
    ["عَلِمَ (ʿalima)", "to know"],
    ["جَعَلَ (jaʿala)", "to make"],
    ["كَفَرَ (kafara)", "to disbelieve"],
    ["جَاءَ (jāʾa)", "to come"],
    ["عَمِلَ (ʿamila)", "to work"],
    ["آتَى (ʾātā)", "to give"],
    ["رَأَى (raʾā)", "to see"],
    ["أَتَى (ʾatā)", "to bring"],
    ["شَاءَ (šāʾa)", "to wish"],
    ["خَلَقَ (ḵalaqa)", "to create"],
    ["أَنْزَلَ (ʾanzala)", "to reveal"],
    ["كَذَّبَ (kaḏḏaba)", "to reject"],
    ["دَعَا (daʿā)", "to pray"],
    ["أَتَّقَى (ʾattaqā)", "to fear (Allah)"],
    ["هَدَى (hadā)", "to guide"],
    ["أَرَادَ (ʾarāda)", "to wish"],
    ["اتَّبَعَ (t b ʿ)", "to follow"],
    ["أَرْسَلَ (ʾarsala)", "to send"],
    ["أَخَذَ (ʾaḵaḏa)", "to seize"],
    ["اِتَّخَذَ (ittaḵaḏa)", "to take"],
    ["عَبَدَ (ʿabada)", "to worship"],
    ["ظَلَمَ (ẓalama)", "to wrong"],
    ["سَأَلَ (saʾala)", "to ask"],
    ["وَجَدَ (wajada)", "to find"],
    ["أَخْرَجَ (ʾaḵraja)", "to drive out"],
    ["أَكَلَ (ʾakala)", "to consume"],
    ["لَيْسَ (laysa)", "to not be"],
    ["فَعَلَ (faʿala)", "to do"],
    ["نَظَرَ (naẓara)", "to see"],
    ["ذَكَرَ (ḏakara)", "to mention"],
    ["خَافَ (ḵāfa)", "to be afraid"],
    ["قَتَلَ (qatala)", "to kill"],
    ["رَجَعَ (rajaʿa)", "to return"],
    ["سَمِعَ (samiʿa)", "to listen"],
    ["تَوَلَّى (tawallā)", "to turn"],
    ["أَمَرَ (ʾamara)", "to command"],
    ["دَخَلَ (daḵala)", "to enter"],
    ["جَزَى (jazā)", "to recompense"],
    ["أَطَاعَ (ʾaṭāʿa)", "to obey"],
    ["أَوْحَى (ʾawḥā)", "to inspire"],
    ["أَشْرَكَ (ʾašraka)", "to associate partners"],
    ["أَلْقَى (ʾalqā)", "to offer"],
    ["وَعَدَ (waʿada)", "to promise"],
    ["أَنفَقَ (n f q)", "to spend"],
    ["غَفَرَ (ḡafara)", "to forgive"],
    ["أَحْبَبْ (ʾaḥbab)", "to like"],
    ["أَصَابَ (ʾaṣāba)", "to bestow"],
    ["أَضَلَّ (ʾaḍalla)", "to mislead"],
    ["تَابَ (tāba)", "to turn"],
    ["كَسَبَ (kasaba)", "to earn"],
    ["نَزَّلَ (nazzala)", "to reveal"],
    ["تَلَى (talā)", "to recite"],
    ["رَزَقَ (razaqa)", "to provide"],
    ["قَضَى (qaḍā)", "to judge"],
    ["نَصَرَ (naṣara)", "to help"],
    ["صَبَرَ (ṣabara)", "to be patient"],
    ["جَرَيْ (jaray)", "to run"],
    ["مَسَّ (massa)", "to touch"],
    ["ضَرَبَ (ḍaraba)", "to set forth"],
    ["قَتَلَ (qatala)", "to fight"],
    ["أَقَامَ (ʾaqāma)", "to establish"],
    ["خَرَجَ (ḵaraja)", "to leave"],
    ["ضَلَّ (ḍalla)", "to lose"],
    ["بَعَثَ (baʿaṯa)", "to send"],
    ["أَحْيَا (ʾaḥyā)", "to give life"],
    ["تَذَكَّرَ (taḏakkara)", "to receive admonition"],
    ["أَهْلَكَ (ʾahlaka)", "to destroy"],
    ["افْتَرَى (f r y)", "to invent"],
    ["زَادَ (zāda)", "to increase"],
    ["عَقَلُ (ʿaqalu)", "to reason"],
    ["كَتَبَ (kataba)", "to ordain"],
    ["ظَنَّ (ẓanna)", "to guess"],
    ["شَكَرَ (šakara)", "to give thanks"],
    ["نَبَّأَ (nabbaʾa)", "to inform"],
    ["حَكَمَ (ḥakama)", "to judge"],
    ["يَذَرَ (yaḏara)", "to forsake"],
    ["حَسِبَ (ḥasiba)", "to think"],
    ["شَهِدَ (šahida)", "to bear witness"],
    ["مَلَكَتْ (malakat)", "to have power"],
    ["نَادَى (nādā)", "to call"],
    ["أَنذَرَ (n ḏ r)", "to warn"],
    ["أُدْخِلَ (ʾudḵila)", "to admit"],
    ["سَبَّحَ (sabbaḥa)", "to praise"],
    ["اسْتَطَاعَ (ṭ w ʿ)", "to be capable"],
    ["حَمَلَ (ḥamala)", "to bear"],
    ["عَذَّبَ (ʿaḏḏaba)", "to punish"],
    ["عَلَّمَ (ʿallama)", "to teach"],
    ["بِئْسَ (biʾsa)", "to be evil"],
    ["بَلَغَ (balaḡa)", "to reach"],
    ["تَرَكَ (taraka)", "to leave"],
    ["خَشِىَ (ḵ š y)", "to fear"],
    ["أَرَى (ʾarā)", "to show"],
    ["اِسْتَغْفَرَ (istaḡfara)", "to ask forgiveness"],
    ["اِسْتَكْبَرَ (istakbara)", "to be arrogant"],
    ["اِهْتَدَى (ihtadā)", "to be guided"],
    ["تَوَكَّلْ (tawakkal)", "to put trust"],
    ["حَرَّمَ (ḥarrama)", "to make unlawful"],
    ["مَاتَ (māta)", "to die"],
    ["بُشِّرَ (buššira)", "to give glad tidings"],
    ["رَضِىَ (r ḍ w)", "to be pleased"],
    ["يَحْزُن (yaḥzun)", "to grieve"],
    ["حَشَرَ (ḥašara)", "to raise"],
    ["صَدَّ (ṣadda)", "to hinder"],
    ["نَجَّى (najjā)", "to deliver"],
    ["ذَاقُ (ḏāqu)", "to taste"],
    ["رَدَّ (radda)", "to return"],
    ["بَيَّنُ (bayyanu)", "to make clear"],
    ["اخْتَلَفَ (ḵ l f)", "to differ"],
    ["ذَهَبَ (ḏahaba)", "to take away"],
    ["سَجَدَ (sajada)", "to prostrate"],
    ["اسْتَوَى (s w y)", "to establish"],
    ["نَسِىَ (n s y)", "to forget"],
    ["ابْتَغَى (b ḡ y)", "to seek"],
    ["قَامَ (qāma)", "to establish"],
    ["أَعْرَضَ (ʾaʿraḍa)", "to turn away"],
    ["كَفَى (kafā)", "to be sufficient"],
    ["نَهَى (nahā)", "to forbid"],
    ["نَفَعَ (nafaʿa)", "to benefit"],
    ["سَآءَ (saʾāʾa)", "to be evil"],
    ["عَسَى (ʿasā)", "to perhaps"],
    ["لَبِثَ (labiṯa)", "to delay"],
    ["وَلَّى (wallā)", "to turn"],
    ["أَبْصَرَ (ʾabṣara)", "to see"],
    ["اسْتَجَابَ (j w b)", "to respond"],
    ["رَحِمَ (raḥima)", "to have mercy"],
    ["أَصْبَحَ (ʾaṣbaḥa)", "to become"],
    ["أَصْلَحَ (ʾaṣlaḥa)", "to make peace"],
    ["أَغْنَتْ (ʾaḡnat)", "to enrich"],
    ["جَهَدَ (jahada)", "to strive"],
    ["عَصَا (ʿaṣā)", "to disobey"],
    ["عَفَا (ʿafā)", "to pardon"],
    ["أَفْلَحَ (ʾaflaḥa)", "to succeed"],
    ["قَدَّمَ (qaddama)", "to offer"],
    ["زَيَّنَ (zayyana)", "to make fair-seeming"],
    ["بَغَى (baḡā)", "to oppress"],
    ["جَدَلُ (jadalu)", "to dispute"],
    ["خَلَا (ḵalā)", "to pass away"],
    ["يَشْعُرُ (yašʿuru)", "to realize"],
    ["قَدَرَ (qadara)", "to have power"],
    ["كَادَ (kāda)", "to almost do"],
    ["تَوَفَّى (tawaffā)", "to die"],
    ["أَذِنَ (ʾaḏina)", "to permit"],
    ["بَدَّلَ (baddala)", "to change"],
    ["فَتَنُ (fatanu)", "to try"],
    ["لَعَنَ (laʿana)", "to curse"],
    ["أَنجَى (n j w)", "to save"],
    ["جَمَعَ (jamaʿa)", "to collect"],
    ["أَذَاقَ (ʾaḏāqa)", "to cause taste"],
    ["يَرْجُوا (yarjū)", "to desire"],
    ["رَفَعَ (rafaʿa)", "to raise"],
    ["سَخَّرَ (saḵḵara)", "to impose"],
    ["أَسْلَمَ (ʾaslama)", "to submit"],
    ["مَكَرَ (makara)", "to plan"],
    ["وَهَبَ (wahaba)", "to bestow"],
    ["أَحْسَنَ (ʾaḥsana)", "to do good"],
    ["اشْتَرَى (š r y)", "to exchange"],
    ["كَتَمَ (katama)", "to hide"],
    ["مَشَ (maša)", "to walk"],
    ["أَمَاتَ (ʾamāta)", "to cause death"],
    ["اسْتُهْزِئَ (h z ʾ)", "to ridicule"],
    ["وَضَعَ (waḍaʿa)", "to give birth"],
    ["أَمِنَ (ʾamina)", "to feel secure"],
    ["بَلَوْ (balaw)", "to test"],
    ["حَقَّ (ḥaqqa)", "to prove true"],
    ["أَحَلَّ (ʾaḥalla)", "to make lawful"],
    ["سَبَقَ (sabaqa)", "to precede"],
    ["سَعَى (saʿā)", "to run"],
    ["أَعَدَّ (ʾaʿadda)", "to prepare"],
    ["عَرَفَ (ʿarafa)", "to recognize"],
    ["تَعَلَى (taʿalā)", "to be high"],
    ["أَقْسَمُ (ʾaqsamu)", "to swear"],
    ["قَصَّ (qaṣṣa)", "to narrate"],
    ["كَلَّمَ (kallama)", "to speak"],
    ["أَنشَأَ (n š ʾ)", "to raise"],
    ["يَضُرَّ (yaḍurra)", "to harm"],
    ["اسْتَعْجَلَ (ʿ j l)", "to seek to hasten"],
    ["يَفْقَهُ (yafqahu)", "to understand"],
    ["نَفَخَ (nafaḵa)", "to breathe"],
    ["تَبَيَّنَ (tabayyana)", "to become clear"],
    ["أُخْفِىَ (ḵ f y)", "to hide"],
    ["ذُكِّرَ (ḏukkira)", "to remind"],
    ["أَسَرَّ (ʾasarra)", "to conceal"],
    ["عَادَ (ʿāda)", "to return"],
    ["أُعِيدُ (ʾuʿīdu)", "to return"],
    ["مَتَّعْ (mattaʿ)", "to provide"],
    ["أَمْسَكَ (ʾamsaka)", "to withhold"],
    ["نِعْمَ (niʿma)", "to be excellent"],
    ["وَفَّى (waffā)", "to fulfill"],
    ["أَوْفَى (ʾawfā)", "to fulfill"],
    ["أَحَاطَ (ʾaḥāṭa)", "to encompass"],
    ["أَدْرَى (ʾadrā)", "to make known"],
    ["أُغْرِقُ (ʾuḡriqu)", "to drown"],
    ["فَصَّلَ (faṣṣala)", "to explain in detail"],
    ["فَضَّلَ (faḍḍala)", "to favor"],
    ["يَتَفَكَّرُ (yatafakkaru)", "to reflect"],
    ["انقَلَبَ (q l b)", "to return"],
    ["كَرِهَ (kariha)", "to hate"]
];

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getQuizData = () => {
    const randSet = new Set();
    while (randSet.size < 4) {
        randSet.add(getRandomNum(0, 199));
    }
    const randNumArray = Array.from(randSet);
    const randElems = randNumArray.map(i => Data.at(i));
    const sortedElems = randNumArray.sort().map(i => Data.at(i));
    return [randElems[0], sortedElems];
};

function QuizBody() {
    const [elem, sortedElems] = getQuizData();
    const questionIndex = getRandomNum(0, 1);
    const answerIndex = +!questionIndex;

    return (
        <div className="quiz-Body">
            <div className="quiz-question">
                <h4>{elem[questionIndex]}</h4>
            </div>
            <QuizOptions
                answers={sortedElems.map(elem => elem[answerIndex])}
                correctAnswer={elem[answerIndex]}
            />
        </div>
    )
}

export default QuizBody