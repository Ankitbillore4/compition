
var tl = gsap.timeline()

tl.from(".navpart1 h1", {
    duration: 0.88,
    opacity: 0,
    scale: 0,

})
tl.from(".navpart2 h3", {
    y: -100,
    duration: 0.88,
    opacity: 0,
    scale: -1,
    stagger: 0.2,
})


gsap.to(".logos img ", {
    y: -50,
    duration: 3,
    delay: 1,
    repeat: -1,
    yoyo: true

})

gsap.to(".logos h1", {
    y: -50,
    duration: 3,
    delay: 1,
    repeat: -1,
    yoyo: true

})

gsap.from(".content", {
    y: 100,
    duration: 2,
    delay: 0.2,
    opacity: 0,
    stagger: 0.3,

})

gsap.from(".line", {
    x: 200,
    y: 100,
    duration: 2,
    delay: 0.2,
    opacity: 0,


})

gsap.from(".ourservice", {
    y: 100,
    duration: 2,
    delay: 0.2,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".ourservice",
        scroller: "body",
        start: "top 85%",
    }

})

gsap.from(".brandidentity", {
    y: 100,
    duration: 2,
    delay: 0,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".brandidentity",
        scroller: "body",
        start: "top 85%",
    }

})

gsap.from(".ourserviceline", {
    x: 200,
    y: 100,
    duration: 2,
    delay: 0.2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".brandidentity",
        scroller: "body",
        start: "top 85%",
    }


})


gsap.from(".contant2button", {
    y: 50,
    opacity: 0,
    duration: 3,
    delay: 0.2,
    scale: 1,


})


gsap.from(".contentabout", {
    y: 100,
    duration: 2,
    delay: 0.1,
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".contentabout",
        scroller: "body",
        start: "top 85%",
    }
})

gsap.from(".contentlatest", {
    y: 100,
    duration: 1.5,
    delay: 0.1,
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".contentlatest",
        scroller: "body",
        
        start: "top 95%",
    },
    onStart:function(){
        run()
    }
})
function run() {

    let grow = 0
    let count1 = document.querySelector(".count1")
    let increse = setInterval(function () {
        grow++
        console.log("helo");
        count1.innerHTML = grow + "+"
    }, 10)

    setTimeout(function () {
        clearInterval(increse)

    }, 1500)


    let count2 = document.querySelector(".count2")
    let inc = 0
    let time = setInterval(function () {
        inc++
        console.log("hei")
        count2.innerHTML = inc + "+"
    }, 20)

    setTimeout(function () {
        clearInterval(time)
    }, 850)


    var count3 = document.querySelector(".count3")
    var b = 0

    var c = setInterval(function () {
        console.log("ji");
        b++
        count3.innerHTML = b + `+`
    }, 30)

    setTimeout(function () {
        clearInterval(c)
    }, 600)


    var count4 = document.querySelector(".count4")
    var d = 0
    var e = setInterval(function () {
        d++
        count4.innerHTML = d + "+"
    }, 40)

    setTimeout(function () {
        clearInterval(e)
    }, 800)
}

