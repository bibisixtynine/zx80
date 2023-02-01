<!-------------------------------------------------------->
<script>
  import Editor from "../libs/Editor.svelte";
  import { onMount } from "svelte";
  import Icon from "../libs/Icon.svelte";
  import icons from "../libs/database-icons.js";
  import apps_database from "../libs/database-apps.js";


  let apps = apps_database;

  let iconSize = "64px";

  let windowScrollYMemo = undefined;
  onMount(() => {
    windowScrollYMemo = window.scrollY;
  });

  let state = {
    home: true,
  };

  let runningApp = undefined;

  $: if (runningApp) console.log(runningApp.name + ' has been updated !')

  function handleHomeClick(event) {
    // hide app-view
    let program_1_container = document.getElementById("app-view");
    program_1_container.style.display = "none";

    // display home-view
    let home_view = document.getElementById("home-view");
    home_view.style.display = "flex";

    // restore scrollY position
    if (windowScrollYMemo && !state.home) window.scroll(0, windowScrollYMemo);
    state.home = true;
  }

  // create a new app and add to home-view
  function newApp() {
    if (document) {
      apps.push({
        name: "Boy",
        id: 1,
        svg: icons.boy,
        backgroundColor: "rgb(39, 50, 204)",
      });
      apps = apps; // force update home-view
    }
  }

  function handleAppClick(app) {
    if (document) {
      // if current view is home-view :
      // - hide home-view,
      // - display app-view
      // - launch app
      if (state.home) {
        runningApp = app;
        runningApp.name = runningApp.name;

        // memo window scrollY
        windowScrollYMemo = window.scrollY;

        // hide home-view
        let home_view = document.getElementById("home-view");
        home_view.style.display = "none";
        state.home = false;

        // display app-view
        let app_view = document.getElementById("app-view");
        app_view.style.display = "block";

        // launch selected app
        //if (app.script) eval(app.script);
      }
    }
  }


</script>

<!-------------------------------------------------------->
<!-- page.svelte ----------------------------------------->


<!-------------------------------------------------------->
<!-------------------------------------------------------->
<!-------------------------------------------------------->

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="home-button" on:click={handleHomeClick}>home</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="app-view">
  {#if runningApp}
  <Editor bind:app={runningApp} />
  {/if}
</div>

<div id="home-view" display="block">
  {#each apps as app}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="toto" on:click={() => handleAppClick(app)}>
      <Icon
        size={iconSize}
        name={app.name}
        svg={app.svg}
        backgroundColor={app.backgroundColor}
      />
    </div>
  {/each}
</div>

<div id="background" />

<!-------------------------------------------------------->
<!-------------------------------------------------------->


<!-------------------------------------------------------->
<!-------------------------------------------------------->
<!-------------------------------------------------------->

<!-------------------------------------------------------->
<style>
  #background {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-image: url("/sunrise.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: color;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  #app-view {
    display: none;
    position: absolute;
    top: 40px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }

  #home-view {
    position: absolute;
    top: calc(env(safe-area-inset-top) + 20px);
    display: flex;
    overflow: scroll;
    flex-wrap: wrap;
    justify-content: center;
    gap: 22px;
  }

  #home-button {
    z-index: 9;

    position: fixed;
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 0px;
    width: 100%;
    padding: 12px;
    margin: 0px;
    background-color: rgba(62, 173, 237, 0.349);
    color: blanchedalmond;
    text-align: center;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 700;
    font-size: 20px;
  }
</style>
