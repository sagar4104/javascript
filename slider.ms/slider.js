$(document).ready(function () {
    // get card width dynamically
    cardWidth = $(".slide-card").width();
    // next-arrow
    $('#next-arrow').click(function () {
        var firstChildAppend = $(".slide-card:first-child()");
        $(".slide-card").animate({ left: -cardWidth }, function () {
            $('.slider-wrap').append(firstChildAppend);
            $(".slide-card").css({
                left: 0,
            })
        })
    });
    // previous-arrow
    $('#previous-arrow').click(function () {
        var lastChildPrepend = $(".slide-card:last-child()");
        $(".slide-card").animate({ left: cardWidth }, function () {
            $('.slider-wrap').prepend(lastChildPrepend);
            $(".slide-card").css({
                left: 0,
            })
        })
    });
});

let s = "";

let imgcard = [
    "https://th.bing.com/th/id/OIP.jyebWp7N9ADZ6EoGWNPpRAHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.lWZPIgDEFbnnAHZgWmSTBgHaFS?w=270&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.hLm0X1Sma5dGcthAa_Gy9gHaE5?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.o2KyU-ohglSm0T9zBjdqnQHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.XMcbVdtq6Luxg2xf67GafQHaE7?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

];

imgcard.forEach((i, index) => {
    s += `<div class="slide-card position-relative bg-white overflow-hidden shadow-sm mx-2"  >
            <a href="#" class="text-decoration-none">
            <img src="${i} alt="slide" width="100%">
            <div class="p-3">
            <p class="text-dark my-2 fs-5 fw-semibold">jQuery | JS - ${index + 1}/p>
            <p class="text-dark">Lorem ipsum dolor sit amet consec isicing elit. Praesentium
                aperiam
                ullam natus. Repudiandae.</p>
            <p class="text-muted mb-0 mt-3">18 Nov, 2022</p>
            </div>
            </a>
        </div>`
});

document.getElementById("slider-1").innerHTML = s;