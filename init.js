(() => {

    let lt = 0;
    let ls = false;
    let track = false;
    
    let form = document.createElement('form')
    let inp_t_action = document.createElement('input')
    let text_area = document.createElement('textarea')
    let inp_start = document.createElement('input')
    let inp_reset = document.createElement('input')
    let inp_use = document.createElement('input')
    let submit = document.createElement('input')

    function addHeader(){
        const ta = document.querySelector('textarea')
        ta.value += `--tracking started: ${new Date().toString()} \n ${new Date().getTime()} // start \n`
        localStorage.setItem('trip', ta.value)
    }

    function resetTrip(){
        const ta = document.querySelector('textarea')
        if(!confirm('Are you sure want to clear your trip?'))
            return false;
        localStorage.setItem('trip', '')
        ta.value = ''
        addHeader()
    }

    function startTracking(){
        track = true
        addHeader()
        navigator.geolocation.watchPosition(
            function (position) {
                let now = new Date().getTime()
                if(ls != 1 || now - lt > 10000){
                    ta.value += `${now} // ${position.coords.latitude} // ${position.coords.longtitude} \n`
                    localStorage.setItem('trip', ta.value)
                    lt = now 
                    ls = 1
                }
            },
            function () {
                let now = new Date().getTime()
                if( ls != 0 || now - lt > 10000) {
                    ta.value += now + ' // fail\n'
                    localStorage.setItem('trip', ta.value)
                    lt = now
                    ls = 0
                }
            },
            {
                enableHighAccuracy: true,
                maximumAge: 60000,
                timeout: 150000
            }
        )
    }

    function init(){
        const ta = document.querySelector('textarea')
        let tr = localStorage.getItem('trip')
        if(tr != '' && tr != null){
            ta.value = tr + '\n'
        }
    }

    function run(){


        form.setAttribute("action" ,"")
        form.setAttribute("method" ,"post")

        inp_t_action.setAttribute("name", "t_action")
        inp_t_action.setAttribute("value", "http://192.168.1.64/gps/save.php")

        text_area.readOnly
        text_area.setAttribute("name", "coords")

        inp_start.setAttribute("value", "Start Tracking")
        inp_start.setAttribute("type", "button")

        inp_reset.setAttribute("value", "Reset Trip")
        inp_reset.setAttribute("type", "button")

        inp_use.setAttribute("value", "Use Server")
        inp_use.setAttribute("type", "button")

        submit.setAttribute("type", "submit")

        form.appendChild(inp_t_action)
        form.appendChild(text_area)
        form.appendChild(inp_start)
        form.appendChild(inp_reset)
        form.appendChild(inp_use)
        form.appendChild(submit)
        console.log(form)
        document.body.appendChild(form)
    }

    run()
    init()
})();