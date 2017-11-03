//网站热力图实现
function hot(a) {
    this.t = a
}
hot.prototype = {
    sendHeat: function (a) {
        var b, d = [],
            q = document.body,
            s = document.documentElement;

        if (a.r && 1 == a.r) {
            d.push("&x=" + a.x);
            d.push("&y=" + a.y);
            a = this.t.url.join("") + d.join("");

            b = this.t.getParameter("ps", a);
            a = a.replace("ps=" + b, "" == b ? "ps=" : "ps=0");
            a = a.replace("sh=" + b, "sh=" + Math.max(q && q.scrollHeight, s && s.scrollHeight));
            this.t.sendInfo(a);
            
        }
    },
    getPos: function (a, d, b, c) {
        var b = b || 0,
            c = c || 0,
            d = d || document,
            e = a || window.event,
            t = e.srcElement || e.target,
            r = 0,
            a = {},
            a = e.pageX || e.pageY ? {
                x: e.pageX,
                y: e.pageY
            } : {
                x: e.clientX + Math.max(d.documentElement.scrollLeft, d.body.scrollLeft) - d.body.clientLeft,
                y: e.clientY + Math.max(d.documentElement.scrollTop, d.body.scrollTop) - d.body.clientTop
            };
        a.x += b;
        a.y += c;
        d = Math.max(Math.max(document.body.clientWidth, document.body.offsetWidth), Math.max(document.body.scrollWidth, document.documentElement.scrollWidth)) / 2;
        a.x = a.x - d + window.screen.width / 2 - (Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) > ("undefined" == typeof window.innerHeight ? document.documentElement.clientHeight : window.innerHeight) ? 8.5 : 0);

        a.x = a.x > d ? a.x - d : -(d - a.x);

        switch (t.tagName) {
            case "A":
            case "IMG":
            case "INPUT":
            case "EMBED":
            case "BUTTON":
            case "DIV":
            case "SPAN":
            case "SELECT":
            case "OBJECT":
            case "TEXTAREA":
                a.r = 1;
                break;
            default:
                a.r = r;
        }
        return a
    },
    clickHeat: function (a) {
        this.sendHeat(this.getPos(a))
    },
    watchClick: function (a) {
        var d = function (a, b, c) {
            var d = function (a) {
                a = window.event || a;
                target = a.srcElement || a.target;
                c(a, target)
            };
            a.attachEvent ? a.attachEvent("on" + b, d) : a.addEventListener(b, d, !1)
        },
            b = this;
        if (a) b.clickHeat(evt);
        else {
            a = document;
            d(a, "click", function (a) {
                b.sendHeat(b.getPos(a))
            });
            for (var c = a.getElementsByTagName("iframe"), e = 0, a = c.length; e < a; e++) try {
                (function () {
                    var a = c[e],
                        f = a.contentWindow.document;
                    d(f, "click",
                        function (d) {
                            var c = b.getElementPos(a);
                            b.sendHeat(b.getPos(d, f, c.x, c.y))
                        })
                })()
            } catch (f) { }
        }
    },
    getElementPos: function (a) {
    	
        if (null === a.parentNode || "none" == a.style.display) return !1;
        var d = navigator.userAgent.toLowerCase(),
            b = null,
            c = [];
        if (a.getBoundingClientRect) return d = a.getBoundingClientRect(), a = Math.max(document.documentElement.scrollTop, document.body.scrollTop), b = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), {
            x: d.left + b - document.body.clientLeft,
            y: d.top + a - document.body.clientTop
        };
        if (document.getBoxObjectFor) d = document.getBoxObjectFor(a), c = [d.x - (a.style.borderLeftWidth ? Math.floor(a.style.borderLeftWidth) : 0), d.y - (a.style.borderTopWidth ? Math.floor(a.style.borderTopWidth) : 0)];
        else {
            c = [a.offsetLeft, a.offsetTop];
            b = a.offsetParent;
            if (b != a)
                for (; b;) c[0] += b.offsetLeft, c[1] += b.offsetTop, b = b.offsetParent;
            if (-1 < d.indexOf("opera") || -1 < d.indexOf("safari") && "absolute" == a.style.position) c[0] -= document.body.offsetLeft, c[1] -= document.body.offsetTop
        }
        for (b = a.parentNode ? a.parentNode : null; b && "BODY" !=
            b.tagName && "HTML" != b.tagName;) c[0] -= b.scrollLeft, c[1] -= b.scrollTop, b = b.parentNode ? b.parentNode : null;
        return {
            x: c[0],
            y: c[1]
        }
    }
};
window.hot = hot;