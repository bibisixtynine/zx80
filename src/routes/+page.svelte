<script>
    import Icon from "../libs/Icon.svelte";
    import icons from "../libs/icons.js";

    let size = "48px";
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let state = {
        home: true,
    };

    function handleBack(event) {
        let program_1_container = document.getElementById(
            "program-1-container"
        );
        program_1_container.style.display = "none";
        let home_screen = document.getElementById("home-screen");
        home_screen.style.display = "flex";
        state.home = true;
    }

    let apps = [
        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.earth}'
                    `
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.rocket}'
                    `
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                    `
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                    `
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                    `
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                    `
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                    `
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                    `
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                    `
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
            script: `
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                    `
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },

        {
            name: "Boy",
            id: 0,
            svg: icons.boy,
            backgroundColor: "rgb(39, 50, 204)",
        },
        {
            name: "Rocket",
            id: 1,
            svg: icons.rocket,
            backgroundColor: "rgb(92, 173, 205)",
        },
        {
            name: "No",
            id: 2,
            svg: icons.redCross,
            backgroundColor: "rgb(66, 66, 66)",
        },
        {
            name: "Cat",
            id: 3,
            svg: icons.cat,
            backgroundColor: "rgb(125, 184, 239)",
        },
        {
            name: "Copycat",
            id: 4,
            svg: icons.copycat,
            backgroundColor: "rgb(160, 57, 152)",
        },
        {
            name: "Earth",
            id: 5,
            svg: icons.earth,
            backgroundColor: "rgb(129, 87, 225)",
        },
        {
            name: "Gorilla",
            id: 6,
            svg: icons.gorilla,
            backgroundColor: "rgb(39, 214, 124)",
        },
        {
            name: "Morning",
            id: 7,
            svg: icons.morning,
            backgroundColor: "green",
        },
        {
            name: "Saucer",
            id: 8,
            svg: icons.saucer,
            backgroundColor: "rgb(49, 36, 78)",
        },
        {
            name: "Space",
            id: 9,
            svg: icons.space,
            backgroundColor: "rgb(99, 20, 225)",
        },
        {
            name: "Tree",
            id: 10,
            svg: icons.tree,
            backgroundColor: "rgb(80, 62, 14)",
        },
        {
            name: "Phone",
            id: 10,
            svg: icons.phone,
            backgroundColor: "rgb(180, 62, 200)",
        },
    ];

    function handleClick(app) {
        if (document) {
            console.log("id: " + app.id);
            // create a new app for each click (tempo... just for test purpose)
            apps.push({
                name: "Boy",
                id: 1,
                svg: icons.boy,
                backgroundColor: "rgb(39, 50, 204)",
            });
            apps = apps; // force update home screen
            console.log("apps length: " + apps.length);
            // if current view is home-screen, launch selected app
            if (state.home) {
                // hide home-screen
                let home_screen = document.getElementById("home-screen");
                home_screen.style.display = "none";
                state.home = false;
                // show selected app
                let program_1_container = document.getElementById(
                    "program-1-container"
                );
                program_1_container.style.display = "block";
                state.home = false;
                // execute selected app
                debugger
                if (app.script) eval(app.script);
            }
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="back-button" on:click={handleBack}>home</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="program-1-container">
    <div id="ui">#### NO PROGRAM ####</div>
</div>

<div class="home-screen" id="home-screen" display="block">
    {#each apps as app}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="toto" on:click={() => handleClick(app)}>
            <Icon
                {size}
                name={app.name}
                svg={app.svg}
                backgroundColor={app.backgroundColor}
            />
        </div>
    {/each}
</div>

<div class="background" />

<style>
    .background {        
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
        background-color: rgba(0, 0, 0, 0.6);
        z-index: -1;
    }

    #ui {
        color: red;
    }

    #program-1-container {
        display: none;
        position: absolute;
        top: 40px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
    }

    .home-screen {
        position: absolute;
        top: env(safe-area-inset-top);
        display: flex;
        overflow: scroll;
        flex-wrap: wrap;
        justify-content: center;
        gap: 22px;
    }

    #back-button {
        z-index: 99;

        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        padding: 2px;
        margin: 0px;
        background-color: rgb(83, 79, 92);
        text-align: center;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
        font-size: 20px;
    }
</style>
