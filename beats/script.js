const stations = [
    "https://stream.zeno.fm/f36y0m2p998uv", // PRIME
    "https://stream.zeno.fm/0r0xa792kwzuv", // NEON
    "https://stream.zeno.fm/76088y685g0uv"  // PAGODA
];

let currentAudio = new Audio();

function changeStream(index) {
    currentAudio.pause();
    currentAudio.src = stations[index];
    currentAudio.play().catch(error => {
        console.log("Nexus Protocol: Interaction required to initiate frequency.");
    });
    console.log(`Frequency Shifted to Station [0${index + 1}]`);
}
