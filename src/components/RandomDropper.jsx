import gun from "../assets/gun.png"
import eyes from "../assets/eyes.png"
import {useEffect, useRef, useState} from "react";

export const RandomDropper = ({isPause, isStarted}) => {
    const [first, setFirst] = useState(true)
    const canvas = useRef();

    useEffect(() => {
        initRainImg()
    }, [isPause, isStarted]);

    // function initRain() {
    //
    //     var ctx = canvas.current.getContext('2d');
    //     var w = canvas.current.width;
    //     var h = canvas.current.height;
    //     ctx.strokeStyle = '#ffffff';
    //     ctx.lineWidth = 1;
    //     ctx.lineCap = 'round';
    //
    //
    //     var init = [];
    //     var maxParts = 1000;
    //     for (var a = 0; a < maxParts; a++) {
    //         init.push({
    //             x: Math.random() * w,
    //             y: Math.random() * h,
    //             l: Math.random() * 1,
    //             xs: -4 + Math.random() * 4 + 2,
    //             ys: Math.random() * 10 + 10
    //         })
    //     }
    //
    //     var particles = [];
    //     for (var b = 0; b < maxParts; b++) {
    //         particles[b] = init[b];
    //     }
    //
    //     function draw() {
    //         ctx.clearRect(0, 0, w, h);
    //         for (var c = 0; c < particles.length; c++) {
    //             var p = particles[c];
    //             ctx.beginPath();
    //             ctx.moveTo(p.x, p.y);
    //             ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
    //             ctx.stroke();
    //         }
    //         move();
    //     }
    //
    //     function move() {
    //         for (var b = 0; b < particles.length; b++) {
    //             var p = particles[b];
    //             p.x += p.xs;
    //             p.y += p.ys;
    //             if (p.x > w || p.y > h) {
    //                 p.x = Math.random() * w;
    //                 p.y = -20;
    //             }
    //         }
    //     }
    //
    //     setInterval(draw, 30);
    //
    // }

    function initRainImg() {
        if (isStarted) {
            var ctx = canvas.current.getContext('2d');
            var w = canvas.current.width;
            var h = canvas.current.height;

            var img = new Image()
            img.src = eyes
            var init = [];
            var maxParts = 10;
            var particles = [];

            if (first) {
                for (var a = 0; a < maxParts; a++) {
                    init.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        img: img,
                        xs: -4 + Math.random() * 4 + 2,
                        ys: Math.random() * 10 + 10
                    })
                }

                for (var b = 0; b < maxParts; b++) {
                    particles[b] = init[b];
                }
            }

            function draw() {
                ctx.clearRect(0, 0, w, h);
                for (var c = 0; c < particles.length; c++) {
                    var p = particles[c];
                    ctx.drawImage(img, p.x, p.y, 150, 300);
                }
                if (!isPause) {
                    move();
                }
            }

            function move() {
                for (var b = 0; b < particles.length; b++) {
                    var p = particles[b];
                    p.x += p.xs;
                    p.y += p.ys;
                    if (p.x > w || p.y > h) {
                        p.x = Math.random() * w;
                        p.y = -20;
                    }
                }
            }

            setInterval(draw, 10);
            setFirst(false)
        }
    }

    return (
        <canvas width="3000" height="3000" className={'w-full h-screen bg-[#5d2328]'} ref={canvas}>
        </canvas>
    )
}
