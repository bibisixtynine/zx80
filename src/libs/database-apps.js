import icons from "./database-icons.js";


export default [
    {
        name: "Boy",
        id: 0,
        svg: icons.plus,
        backgroundColor: "rgb(0, 0, 255)",
        script: `
                newApp();
                console.log('handle');
                handleHomeClick();
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

   
];