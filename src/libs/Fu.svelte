<script>
    import Go from "./Go.svelte";

    import Space from "./Space.svelte";

    import Waou from "./Waou.svelte";

    import BoysnGirl from "../libs/BoysnGirl.svelte";

    import Three from "./Three.svelte";

    import Rocket from "./Rocket.svelte";
    import Cat from "./Cat.svelte";
    import Earth from "./Earth.svelte";
</script>

<svg class="item" viewBox="0 0 400 400">
    <circle
        cx="200"
        cy="200"
        r="150"
        fill="transparent"
        stroke="yellow"
        stroke-width="20px"
        stroke-opacity="0.3"
    />
    <circle
        cx="80"
        cy="80"
        r="60"
        fill="blue"
        stroke="white"
        stroke-width="20px"
        stroke-opacity="0.3"
    />
    <circle
        cx="320"
        cy="320"
        r="60"
        fill="pink"
        stroke="white"
        stroke-width="20px"
        stroke-opacity="0.3"
    />
    <circle
        cx="80"
        cy="320"
        r="60"
        fill="green"
        stroke="white"
        stroke-width="20px"
        stroke-opacity="0.3"
    />
    <circle
        cx="320"
        cy="80"
        r="60"
        fill="purple"
        stroke="white"
        stroke-width="20px"
        stroke-opacity="0.3"
    />
    <circle cx="95" cy="200" r="50" fill="black" />
    <circle cx="305" cy="200" r="50" fill="black" />
    <circle cx="200" cy="305" r="50" fill="black" />
    <circle cx="200" cy="95" r="50" fill="black" />
    <text
        x="50%"
        y="50%"
        font-family="Verdana"
        font-weight="bold"
        font-size="150px"
        dominant-baseline="central"
        text-anchor="middle"
        fill="#AA4499">fu</text
    >
</svg>

<style>
    .item {
        margin: 10px;
        width: 80%;
        height: auto;
        background-color: black;
        border: solid;
        border-color: grey;
        border-width: 20px;
        border-radius: 40px;
    }
</style>
