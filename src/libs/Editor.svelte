<!-------------------------------------------------------->
<script>
  export let app = {
    name: "first mount app",
    id: 0,
    svg: icons.tree,
    backgroundColor: "rgb(0, 0, 255)",
    script: `// no code - first mount APP //`,
  };

  import icons from "../libs/database-icons.js";

  import CodeMirror from "svelte-codemirror-editor";
  import { javascript } from "@codemirror/lang-javascript";
  import { oneDark } from "@codemirror/theme-one-dark";

  import { onMount } from "svelte";

  import execute from "./execute.js";

  let value = app.script

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  $: {
      console.log('EVALUATE ' + app.name)
      evaluateCode(app.script)
  }

  /**
   * @param {string} filename
   */
  function loadFromBrowserLocalStorage(filename) {
    if (typeof localStorage !== "undefined") {
      const code = localStorage.getItem("zx80-script-" + filename);
      return code;
    }
  }

  /**
   * @param {string} code
   */
  function saveToBrowserLocalStorage(code) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("zx80-script-" + app.name, code);
    }
  }

  const evaluateCode = (/** @type {string} */ code) => {
    if (!mounted) return;

    saveToBrowserLocalStorage(code);

    try {
      const ui = document.getElementById("ui");
      execute(ui, code);
    } catch (err) {
      console.error("##BIBIL-ERROR##");
      console.error(err);
    }
  };
</script>

<!-------------------------------------------------------->
<!-- Editor.svelte --------------------------------------->

<!-------------------------------------------------------->
<!-------------------------------------------------------->
<!-------------------------------------------------------->

<CodeMirror bind:value lang={javascript()} theme={oneDark} />

<div id="ui">...loading...</div>

<!-------------------------------------------------------->
<!-------------------------------------------------------->

<!-------------------------------------------------------->
<!-------------------------------------------------------->
<!-------------------------------------------------------->

<!-------------------------------------------------------->
<style>
  #ui {
    padding: 0px;
    margin: 0px;

    position: fixed;
    top: 0px;
    height: 30%;
    overflow: scroll;
    text-align: center;

    border: solid gray 1px;
    border-radius: 25px;
    width: calc(100% - 2px); /* 4px = border-width (2px... see above) x 2 */

    font-family: monospace;
    color: green;
    background-color: rgba(0, 0, 0, 0.2);
    transform: scale(0.7);
  }
</style>
