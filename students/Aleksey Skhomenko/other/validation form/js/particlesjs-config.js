particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 11,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#989898"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 1,
                "color": "#e3e3e3"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.24837156385953366,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 128,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 50,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 4486,
                "rotateY": 6409
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 500,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 170,
                "size": 120,
                "duration": 880,
                "opacity": 0.05,
                "speed": -1000
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 2
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});