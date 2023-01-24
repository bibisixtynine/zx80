<!-------------------------------------------------------->
<!-- Editor.svelte --------------------------------------->
<!-------------------------------------------------------->


<script>
    export let filename = 'default'


    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark"
	
    import { onMount } from 'svelte';

    import const_value from './database-default-code.js'
    
    let value = const_value
    const default_value = '//default_value' + value

    let mounted = false

    onMount( ()=> {
        const code = loadFromBrowserLocalStorage()
        if (code) {
            value = code;
        }
        mounted = true
    })

    $: {
        const code = loadFromBrowserLocalStorage(filename)
        if (code) {
            value = code;
        } else {
            value = default_value
        }
        console.log("loaded in Editor: ",filename)
    }

    $: evaluateCode(value)

    /**
    * @param {string} filename
    */
    function loadFromBrowserLocalStorage(filename) {
        if ( typeof localStorage !== 'undefined') {
            const code = localStorage.getItem("mysupercomputer-code-" + filename )
            return code
        }
    }

    /**
    * @param {string} code
    */
    function saveToBrowserLocalStorage(code) {
        if ( typeof localStorage !== 'undefined') {
            localStorage.setItem("mysupercomputer-code-" + filename, code);
        }
    }

    function resetUI() {
        return;
    }

    function resetTimers() {
        let maxId = setTimeout(function () {}, 0);
        // @ts-ignore
        for (var i = 0; i < maxId; i += 1) {
        clearTimeout(i);
        }
    }

    const evaluateCode = (/** @type {string} */ code) => {
        if (!mounted) return

        resetUI();
        resetTimers();
        saveToBrowserLocalStorage(code)

        try {
            document.getElementById('ui').style.border = 'solid green 2px'
            Function(code)(window);
        } catch (err) {
            document.getElementById('ui').style.border = 'solid red 2px'
            console.error(err);
        }
    };
</script>


<!-------------------------------------------------------->
<!-------------------------------------------------------->
<!-------------------------------------------------------->


<CodeMirror bind:value lang={javascript()} theme={oneDark} />

<div id='ui'>...loading...</div>


<!-------------------------------------------------------->
<!-------------------------------------------------------->
<!-------------------------------------------------------->


<style>
    #ui {
        font-family: monospace;
        color: green;
        background-color: #001000;
        border: solid green 2px;
        border-radius: 10px;
        padding: 5px;
    }
</style>


<!-------------------------------------------------------->
<!-------------------------------------------------------->
<!-------------------------------------------------------->