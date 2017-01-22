;(function () {

  //DOM Operations

  ;(function () {
    var userAgentBox = document.getElementById('userAgent')
    var ipBox = document.getElementById('ip')
    var indexBox = document.getElementById('indexBox')
    var catalog = document.getElementById('catalog')
    var liList = catalog.parentNode.children
    var toggleMenu = document.getElementsByClassName('toggleMenu')[0]
    var userAgentVal = navigator.userAgent
    var ip = window.returnCitySN.cip
    var toTop = document.getElementById('toTop')

    if (!!toggleMenu && window.innerWidth <= 960) {
      toggleMenu.innerHTML = ''
      catalog = document.getElementById('catalog')
      liList = catalog.parentNode.children
    }

    if (!!toTop) {
      toTop.onclick = function () {
        var scroll = setInterval(function () {
          document.body.scrollTop = document.body.scrollTop - 50
          if (document.body.scrollTop <= 0) {
            clearInterval(scroll)
          }
        }, 2)
      }
    }

    if (!!userAgentBox) {
      userAgentBox.innerText = userAgentVal
    }

    if (!!ipBox) {
      document.getElementById("ip").innerText = ip
    }

    if (!!indexBox) {
      indexBox.style.marginTop = '50px'
      indexBox.style.opacity = 1
    }

    if (!!catalog && window.innerWidth <= 640) {
      catalog.onclick = function () {
        if (liList[1].style.display == 'block') {
          for (var i = 1; i < liList.length; i++) {
            liList[i].style.display = 'none'
          }
        }
        else {
          for (var i = 1; i < liList.length; i++) {
            liList[i].style.display = 'block'
          }
        }
      }
    }
  })()

  //Background Canvas

  ;(function bgImage() {
    function A() {
      t.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      t.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function e() {
      o.clearRect(0, 0, t.width, t.height)
      var A = [a].concat(n)
      n.forEach(function (e) {
        e.x += e.xa
        e.y += e.ya
        e.xa *= e.x > t.width || e.x < 0 ? -1 : 1
        e.ya *= e.y > t.height || e.y < 0 ? -1 : 1
        o.fillRect(e.x - .5, e.y - .5, 1, 1)
        for (var i = 0; i < A.length; i++) {
          var n = A[i]
          if (e !== n && null !== n.x && null !== n.y) {
            var r, l = e.x - n.x, s = e.y - n.y, d = l * l + s * s;
            d < n.max && (n === a && d >= n.max / 2 && (e.x -= .03 * l, e.y -= .03 * s), r = (n.max - d) / n.max, o.beginPath(), o.lineWidth = r / 2, o.strokeStyle = "rgba(0,0,0," + (r + .2) + ")", o.moveTo(e.x, e.y), o.lineTo(n.x, n.y), o.stroke())
          }
        }
        A.splice(A.indexOf(e), 1)
      })
      i(e)
    }

    var t = document.getElementById("cas"), o = t.getContext("2d")
    A()
    window.onresize = A
    var i = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (A) {
          window.setTimeout(A, 1e3 / 60)
        }
    }(), a = {x: null, y: null, max: 2e4}
    window.onmousemove = function (A) {
      A = A || window.event, a.x = A.clientX, a.y = A.clientY
    }
    window.onmouseout = function (A) {
      a.x = null, a.y = null
    }
    for (var n = [], r = 0; 100 > r; r++) {
      var l = Math.random() * t.width, s = Math.random() * t.height, d = 2 * Math.random() - 1, c = 2 * Math.random() - 1
      n.push({x: l, y: s, xa: d, ya: c, max: 6e3})
    }
    setTimeout(function () {
      e()
    }, 100)
  })()


  //invisible style on mobiles
  ;(function () {
    var invisible = document.getElementsByClassName('invisible')

    if (!!invisible.length && window.innerWidth <= 768) {
      for (var i = 0; i < invisible.length; i++) {
        invisible[i].onclick = function () {
          if (this.style.background == 'none') {
            this.style.background = '#888888'
          }
          else {
            this.style.background = 'none'
          }
        }
      }
    }
  })()
})()
