<script>
  import Waou from './Waou.svelte';

  import BoysnGirl from './BoysnGirl.svelte';

  import Three from './Three.svelte';

    import Rocket from "./Rocket.svelte";
    import Cat from "./Cat.svelte";
    import Earth from "./Earth.svelte";
</script>

<svg class="item" viewBox="0 0 500 500">
    <rect x="0" y="0" width="500" height="500" fill="#000" rx="50" />
        <circle cx="90" cy="100" r="50" fill="#FFC0CB" />
        <circle cx="250" cy="320" r="35" fill="#DCF2FA" />
        <circle cx="450" cy="200" r="60" fill="#D8E1E8" />
        <circle cx="150" cy="400" r="20" fill="#C9E2EF" />
        <circle cx="400" cy="90" r="30" fill="#B8DDE9" />
        <circle cx="340" cy="360" r="45" fill="#A2DDE6" />
        <circle cx="190" cy="280" r="25" fill="#8BD3E3" />
        <circle cx="50" cy="170" r="40" fill="#75CCE0" />
        <circle cx="310" cy="100" r="15" fill="#5EC8DD" />
        <circle cx="220" cy="460" r="55" fill="#4BC4DA" />
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
    