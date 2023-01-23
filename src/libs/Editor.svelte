<!--
//////////////////////////////////////////////////////
//                                                  //
// SCRIPT
//
-->
<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark"
	import { onMount } from 'svelte';

    export let filename = 'default'

    let visible = true;

    import const_value from './default-code.js'
    let value = const_value
    
    const default_value = '//default_value' + value

    let code = undefined
    let errorState = "no error"
    let mounted = false

    onMount( ()=> {
        code = loadFromBrowserLocalStorage()
        if (code) {
            value = code;
        }
        mounted = true
    })

    $: {
        code = loadFromBrowserLocalStorage(filename)
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
            let code = localStorage.getItem("mysupercomputer-code-" + filename )
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
            errorState = '✅'
            Function(code)(window);
        } catch (err) {
            document.getElementById('ui').style.border = 'solid red 2px'
            errorState = '❌!'
            console.error(err);
        }
    };
</script>
<!--
//
// SCRIPT
//                                                  //
//////////////////////////////////////////////////////
-->


<!--
//////////////////////////////////////////////////////
//                                                  //
// HTML
//
-->
<label><input type="checkbox" bind:checked={visible} /> </label>

<CodeMirror bind:value lang={javascript()} theme={oneDark} />

<div class="title"> {errorState}</div>

<div id='ui'>loading...</div>
<!--
//
// HTML
//                                                  //
//////////////////////////////////////////////////////
-->

<!--
//////////////////////////////////////////////////////
//                                                  //
// STYLE
//
-->
<style>
    .title {
        display:fixed;
        top: 40px;
        left: 40px;
        color: salmon;
        text-align: center;
        padding: 0;
        margin: 0;
    }
    #ui {
        font-family: monospace;
        color: green;
        background-color: #001000;
        border: solid green 2px;
        border-radius: 10px;
        padding: 5px;
    }
</style>
<!--
//
// STYLE
//                                                  //
//////////////////////////////////////////////////////
-->