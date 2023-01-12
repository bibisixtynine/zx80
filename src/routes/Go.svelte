<script>
  import Space from './Space.svelte';

  import Waou from './Waou.svelte';

  import BoysnGirl from './BoysnGirl.svelte';

  import Three from './Three.svelte';

    import Rocket from "./Rocket.svelte";
    import Cat from "./Cat.svelte";
    import Earth from "./Earth.svelte";
</script>


<svg class="item" viewBox="0 0 400 400">
    <rect width="100%" height="100%" style="fill:black; stroke:none;" />
        <circle
            cx="40"
            cy="50"
            r="25"
            fill="rgba(255,166,166,0.5)"
            stroke="none"
        />
        <circle
            cx="120"
            cy="170"
            r="35"
            fill="rgba(166,255,166,0.5)"
            stroke="none"
        />
        <circle
            cx="90"
            cy="260"
            r="20"
            fill="rgba(166,166,255,0.5)"
            stroke="none"
        />
        <circle
            cx="230"
            cy="340"
            r="45"
            fill="rgba(255,166,255,0.5)"
            stroke="none"
        />
        <circle
            cx="360"
            cy="50"
            r="15"
            fill="rgba(166,255,255,0.5)"
            stroke="none"
        />
        <circle
            cx="320"
            cy="170"
            r="30"
            fill="rgba(255,255,166,0.5)"
            stroke="none"
        />
        <circle
            cx="220"
            cy="260"
            r="40"
            fill="rgba(255,255,255,0.5)"
            stroke="none"
        />
        <circle
            cx="330"
            cy="340"
            r="25"
            fill="rgba(166,166,166,0.5)"
            stroke="none"
        />
        <circle
            cx="150"
            cy="50"
            r="20"
            fill="rgba(255,255,255,0.5)"
            stroke="none"
        />
        <circle
            cx="250"
            cy="170"
            r="35"
            fill="rgba(255,166,255,0.5)"
            stroke="none"
        />
        <text
            x="30"
            y="270"
            font-weight="700"
            font-size="200"
            font-family="Verdana"
            fill="orange">GO !</text
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