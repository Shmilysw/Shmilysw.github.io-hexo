const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false, //自动播放
    lrcType: 3,
    audio: [
        {
            name: "Letting Go",
            artist: '刘大拿',
            // url: 'https://m804.music.126.net/20220825160757/3231f51919914abd865260d6b5a4d6e1/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096413111/5e41/9871/b73e/2c85a93334d89c29c8165bcf7884237e.m4a?authSecret=00000182d3f4468e030e0aaba5132415',
            url: '/wyy/Letting Go.m4a',
            cover: 'https://p2.music.126.net/zmC73kE-LO370J4kjCZZyA==/109951167087160304.jpg?param=130y130',
            lrc: '/lrc/Letting Go.lrc'
        },
        {
            name: "Time To Love",
            artist: 'October',
            url: '/wyy/Letting Go.m4a',
            cover: 'http://p1.music.126.net/D_XnnAmEQ_H4_6CxZkrMag==/8909342719915548.jpg?param=130y130',
            // lrc: '/lrc/'
        },
        {
            name: "在你的身边",
            artist: '盛哲',
            url: 'http://music.163.com/song/media/outer/url?id=475479888',
            cover: 'https://p1.music.126.net/AYNBdRxJ8EdZo4xFjp7b4Q==/109951163191178425.jpg?param=34y34',
            lrc: '/lrc/在你的身边.lrc'
        },
        {
            name: "I Want You to Know",
            artist: 'Zedd / Selena Gomez',
            url: '/wyy/I Want You to Know.m4a',
            cover: 'http://p1.music.126.net/ze_ggtReuHBLF2o-wUolFw==/109951163221161145.jpg?param=130y130',
            lrc: '/lrc/I Want You to Know - Zedd.lrc'
        },
        {
            name: "We Can't Stop",
            artist: 'Miley Cyrus',
            url: '/wyy/We.m4a',
            cover: 'http://p2.music.126.net/dhBUyt2SSBMH0hBgSbCMvA==/109951165968756930.jpg?param=130y130',
            lrc: '/lrc/We.lrc'
        },
    ]
});


// const colorThief = new ColorThief();
// const image = new Image();
// const xhr = new XMLHttpRequest();
// const setTheme = (index) => {
//     if (!ap.list.audios[index].theme) {
//         xhr.onload = function () {
//             let coverUrl = URL.createObjectURL(this.response);
//             image.onload = function () {
//                 let color = colorThief.getColor(image);
//                 ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
//                 URL.revokeObjectURL(coverUrl)
//             };
//             image.src = coverUrl;
//         }
//         xhr.open('GET', ap.list.audios[index].cover, true);
//         xhr.responseType = 'blob';
//         xhr.send();
//     }
// };
// setTheme(ap.list.index);
// ap.on('listswitch', (index) => {
//     setTheme(index);
// });