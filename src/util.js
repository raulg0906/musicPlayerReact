import {v4 as uuidv4} from 'uuid';

function chillHop() {
    return [
        {
            name: 'Dreams',
            cover:"https://www.bensound.com/bensound-img/dreams.jpg",
            artist: "Ben Sound",
            audio: '/songs/bensound-dreams.mp3',
            color: ['#205950', "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: 'Moose',
            cover:"https://www.bensound.com/bensound-img/moose.jpg",
            artist: "Ben Sound",
            audio: './songs/bensound-moose.mp3',
            color: ['#205950', "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Sci-Fi',
            cover:"https://www.bensound.com/bensound-img/scifi.jpg",
            artist: "Ben Sound",
            audio: './songs/bensound-scifi.mp3',
            color: ['#205950', "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Jazz Cabbage',
            cover: 'https://f4.bcbits.com/img/a1775206490_10.jpg',
            artist: 'Ian Ewingm, Strehlow',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9352" , 
            color:["#BA4A46", "#FDF0DD"],
            id: uuidv4(),
            active: false
        }
    ];
}

export default chillHop;