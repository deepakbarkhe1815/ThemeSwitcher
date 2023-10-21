const themeSwitcher = document.querySelector('#themeSwitcher');

navigator.geolocation.getCurrentPosition((position) =>{
    // console.log(position);

    let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    let sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);

    // console.log(sunset,sunrise);

    if(isDay(sunset,sunrise)){
        setTheme('theme-light');
    }
    else
    {
        setTheme('theme-dark');
    }


    function isDay(sunset,sunrise){
        const nowHours = new Date().getHours();
       
        return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
    }
});


const defaultTheme = localStorage.getItem('theme') ||'theme-light'


setTheme(defaultTheme);

themeSwitcher.addEventListener('change',(e) => {
    setTheme(e.target.value);
});


function setTheme(theme){
    theme = theme || 'theme-light';
    //theme-light and Theme Dark
    document.documentElement.className = theme;
    localStorage.setItem('theme',theme);
    themeSwitcher.value = theme;
}

