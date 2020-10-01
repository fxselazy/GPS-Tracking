(() => {
    function run(){
        let form = document.createElement('form')
        let inp_t_action = document.createElement('inputl')
        let text_area = document.createElement('textarea')
        let inp_start = document.createElement('input')
        let inp_reset = document.createElement('input')
        let inp_use = document.createElement('input')
        let submit = document.createElement('input')


        form.appendChild(inp_t_action)
        form.appendChild(text_area)
        form.appendChild(inp_start)
        form.appendChild(inp_reset)
        form.appendChild(inp_use)
        form.appendChild(submit)
        document.body.appendChild(form)
    }
    run()
})