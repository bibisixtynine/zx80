<script>
    import Saucer from "../libs/Saucer.svelte";
    import Gorilla from "../libs/Gorilla.svelte";
    import Space from "../libs/Space.svelte";
    import Morning from "../libs/Morning.svelte";
    import Boy from "../libs/Boy.svelte";
    import Tree from "../libs/Tree.svelte";
    import Rocket from "../libs/Rocket.svelte";
    import Cat from "../libs/Cat.svelte";
    import Earth from "../libs/Earth.svelte";
    import Copycat from "../libs/Copycat.svelte";

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

    function handleClick(event) {
        console.log(event);
        if (document) {
            if (state.home) {
                let home_screen = document.getElementById("home-screen");
                home_screen.style.display = "none";
                state.home = false;
                let program_1 = document.getElementsByClassName("program-1");
                program_1[0].style.display = "block";
                state.home = false;
                state.program_1 = true;
            }
        }
    }

    function handleBack(event) {
        let program_1 = document.getElementsByClassName("program-1");
        program_1[0].style.display = "none";
        state.program_1 = false;
        let home_screen = document.getElementById("home-screen");
        home_screen.style.display = "flex";
        state.home = true;
        state.program_1 = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="back-button" on:click={handleBack}>
    home
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="program-1" on:click={handleClick}>
    <h1>Home</h1>
    <p>Home page</p>
</div>

<div class="home-screen" id="home-screen" display="block">
    {#each array as item}
        <Rocket on:click={handleClick} {size} name="Rocket" />
        <Copycat {size} name="Copycat" />
        <Earth {size} name="Earth" />
        <Cat {size} name="Cat" />
        <Tree {size} name="Tree" />
        <Boy {size} name="Friend" />
        <Morning {size} name="Morning" />
        <Space {size} name="Space" />
        <Gorilla {size} name="Gorilla" />
        <Saucer {size} name="Saucer" />
    {/each}
</div>

<style>
    .program-1 {
        display: none;
        background-color: red;
        text-align: center;
    }

    .home-screen {
        position: absolute;
        top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 22px;
    }

    #back-button {
        z-index: 99;

        position: fixed;
        left:0px;
        top:0px;
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
