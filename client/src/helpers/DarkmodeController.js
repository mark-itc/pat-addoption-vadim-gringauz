class DarkModeController {
    static async load () {
        const darkmode = localStorage.getItem('darkmode');
        return darkmode
    }
    
    static async set (darkmode) {
        localStorage.setItem('darkmode', darkmode);
        return 
    }
}