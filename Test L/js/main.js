let  langOption = document.querySelectorAll('select');
let fromText = document.querySelector('.fromText');
let transText = document.querySelector('.toTranslate');
let fromVoice = document.querySelector('.from');
let toVoice = document.querySelector('.to');
let copyBtn = document.querySelector('.bx-copy');
let countValue = document.querySelector('.code_length');
let exchanhLang = document.querySelector('.bx-transfer');

langOption.forEach((get, con) =>{
    for (let countryCode in language)
    {
        let selected;
        if(con == 0 && countryCode == "en-GB")
        {
            selected = "selected";
        }else if(con == 1 && countryCode == "uk-UA")
        {
            selected = "selected";
        }
        
        let option = `<option value="${countryCode}"${selected}>${language[countryCode]}</option>`;
        get.insertAdjacentHTML('beforeend', option);
    }
})

fromText.addEventListener('input', function()
{
    let content = fromText.value;
    formContent = langOption[0].value;
    transContent = langOption[1].value;

    let transLINK = `https://api.mymemory.translated.net/get?q=${content}!&langpair=${formContent}|${transContent}`;

    fetch(transLINK).then(translate => translate.json()).then(data => {
        transText.value = data.responseData.translatedText;
    })
})

fromVoice.addEventListener('click', function() 
{
    let formTalk;
    formTalk = new SpeechSynthesisUtterance(fromText.value);
    formTalk.lang = langOption[0].value;
    speechSynthesis.speak(formTalk)
})

toVoice.addEventListener('click', function()
{
    let formTalk;
    formTalk = new SpeechSynthesisUtterance(transText.value);
    formTalk.lang = langOption[1].value;
    speechSynthesis.speak(formTalk)
})

copyBtn.addEventListener('click', function()
{
    navigator.clipboard.writeText(transText.value);
})

fromText.addEventListener('keyup', function()
{
    countValue.innerHTML = `${fromText.value.length}/5,000`;
})

exchanhLang.addEventListener('click', function()
{
    let tempText = fromText.value;
    fromText.value = transText.value;
    transText.value = tempText;

    let tempOpt = langOption[0].value;
    langOption[0].value = langOption[1].value;
    langOption[1].value = tempOpt;
})