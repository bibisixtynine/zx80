<script>
    import Icon from "../libs/Icon.svelte";
    import icons from "../libs/icons.js";

    let size = "48px";
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let state = {
        home: true,
        program_1: false,
        program_2: false,
        program_3: false,
        program_4: false,
        program_5: false,
        program_6: false,
        program_7: false,
        program_8: false,
        program_9: false,
        program_10: false,
    };

    function handleBack(event) {
        let program_1_container = document.getElementById(
            "program-1-container"
        );
        program_1_container.style.display = "none";
        state.program_1 = false;
        let home_screen = document.getElementById("home-screen");
        home_screen.style.display = "flex";
        state.home = true;
        state.program_1 = false;
    }

    let apps = [
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

    let current_id = 0;

    function handleClick(id) {
        if (document) {
            console.log("id: " + id);
            apps.push({
                name: "Boy",
                id: 1,
                svg: icons.boy,
                backgroundColor: "rgb(39, 50, 204)",
            });
            apps = apps; // force update home screen
            console.log("apps length: " + apps.length);
            if (state.home) {
                let home_screen = document.getElementById("home-screen");
                home_screen.style.display = "none";
                state.home = false;
                let program_1_container = document.getElementById(
                    "program-1-container"
                );
                program_1_container.style.display = "block";
                state.home = false;
                state.program_1 = true;
                current_id = id;
                eval(`
                    let UI = document.getElementById('ui')
                    UI.innerHTML = '${icons.cat}'
                `);
            }
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="back-button" on:click={handleBack}>home</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="program-1-container">
    <div id="program-1">
        {@html apps[current_id].svg}
        <span>Hello World!</span>
    </div>
    <div id="ui">Oh yeah!</div>
</div>

<div class="home-screen" id="home-screen" display="block">
    {#each apps as app}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="toto" on:click={() => handleClick(app.id)}>
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
        background-image: url("/toto.svg");
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

    #program-1 {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: Verdana, Geneva, Tahoma, sans-serif;

        font-size: 60px;
        font-weight: 700;

        border: solid 1px rgb(39, 50, 204);
        padding: 20px;
        border-radius: 20px;

        color: rgb(215, 215, 212);
        background-color: rgba(39, 50, 204, 0.3);
    }

    .home-screen {
        position: absolute;
        top: env(safe-area-inset-top);
        display: flex;
        /*height: calc(100vh - 70px);*/
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
