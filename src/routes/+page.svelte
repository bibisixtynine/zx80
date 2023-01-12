<script>
    import Fu from "../libs/Fu.svelte";
    import Go from "../libs/Go.svelte";
    import Space from "../libs/Space.svelte";
    import Waou from "../libs/Waou.svelte";
    import BoysnGirl from "../libs/BoysnGirl.svelte";
    import Three from "../libs/Three.svelte";
    import Rocket from "../libs/Rocket.svelte";
    import Cat from "../libs/Cat.svelte";
    import Earth from "../libs/Earth.svelte";
</script>

<div class="items">
    <div class="title">the earth !</div>
    <Earth />
    <div class="title">the cat !</div>
    <Cat />
    <div class="title">the rocket !</div>
    <Rocket />
    <div class="title">the threes !</div>
    <Three />
    <div class="title">boy&girl</div>
    <BoysnGirl />
    <div class="title">waou !</div>
    <Waou />
    <div class="title">space !</div>
    <Space />
    <div class="title">the go one!</div>
    <Go />
    <div class="title">fu !</div>
    <Fu />
</div>

<style>
    .items {
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .title {
        font-family: Verdana;
        font-size: 40px;
        font-weight: bold;
        color: rgb(189, 192, 108);
        text-align: center;
        width: 90%;
        padding: 6px;
        border-width: 6px;
        border-color: rgb(189, 192, 108);
    }
</style>
