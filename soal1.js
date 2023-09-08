    function changeWord(selectedText, changeText, text){

        const textBaru = text.replace(selectedText, changeText);
        return textBaru;

    }
    const kalimat1 = 'Andini sangat mencintai kamu selamanya';
    const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';


    const Kalimat1 = changeWord ("mencintai", "membenci" , kalimat1);
    const Kalimat2 = changeWord ("bromo", "semeru" , kalimat2);
    
    console.log(changeWord('mencintai', 'membenci', kalimat1))
    console.log(changeWord('bromo', 'semeru', kalimat2))
