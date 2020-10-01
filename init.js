(() => {
    function run(){
        let form = document.createElement('form')
        let inp_t_action = document.createElement('input')
        let text_area = document.createElement('textarea')
        let inp_start = document.createElement('input')
        let inp_reset = document.createElement('input')
        let inp_use = document.createElement('input')
        let submit = document.createElement('input')

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
})();