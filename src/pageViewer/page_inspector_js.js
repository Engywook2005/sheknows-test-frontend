/**
 * Created by Greg on 7/25/2017.
 */

class PageInspector {
    constructor() {
        //nothing to do here?
    }

    //http://localhost:82/pixel.php?pageTitle=toast&hostName=localhost&fromIframe=0&ipAdress=127.0.0.1&invokedOrder=0
    getPageDetails(dom, win) {
        const pageTitle = this.getPageTitle(dom);
        const hostName = this.getHostName(win);
        const fromIframe = this.fromIframe(dom);

        return {
            pageTitle,
            hostName,
            fromIframe
        }
    }

    getPageTitle(dom) {
        const head = dom.getElementsByTagName('head')[0];
        if(head && head.getElementsByTagName("title")) {
            return head.getElementsByTagName("title")[0].text;
        }
        return null;
    }

    getHostName(win) {
        return win.location.hostname;
    }

    fromIframe(win) {
        //TODO add window.locations from higher-level iframes
        try {
            return win.top !== win.self;
        } catch(err) {
            return true;
        }
    }
}


module.exports = PageInspector;
