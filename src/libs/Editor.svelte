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

  let script;

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  $: if (mounted) evaluateCode(script);

  $: {
    if (mounted) {
      console.log(
        "== NEW APP EDIT ================================" + app.name
      );
      const code = loadFromBrowserLocalStorage(app.name);
      if (code) {
        console.log("  ==> ALREADY STORED CODE USED ================");
        script = code;
        console.log("STORAGE PRESENT : use stored content");
      } else {
        console.log("  ==> NO STORED CODE, USE NEW ================");
        script = app.script;
        saveToBrowserLocalStorage(app.script);
      }
    }
  }

  /**
   * @param {string} filename
   */
  function loadFromBrowserLocalStorage(filename) {
    if (typeof localStorage !== "undefined") {
      const code = localStorage.getItem("zx80-script-" + filename);
      return code;
    } else {
      return false;
    }
  }

  /**
   * @param {string} code
   */
  function saveToBrowserLocalStorage(code) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("zx80-script-" + app.name, code);
      console.log("   saved ? ====> YES");
    } else {
      console.log("   saved ? ====> NO");
    }
  }

  const evaluateCode = (/** @type {string} */ code) => {
    console.log(" evaluateCode... but mounted ?");
    if (!mounted) return;
    console.log(" evaluateCode... YES mounted ?");

    console.log(" evaluateCode... code SAVED ???");
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

<CodeMirror bind:value={script} lang={javascript()} theme={oneDark} />

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
