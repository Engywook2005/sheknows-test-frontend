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
        const fromIFrame = this.fromIframe(dom);

        return {
            pageTitle,
            hostName,
            fromIFrame
        }
    }

    getPageTitle(dom) {
        const head = dom.getElementsByTagName('head');
        if(head && head.getElementsByTagName("title")) {
            return head.getElementsByTagName("title[0]");
        }
        return null;
    }

    getHostName(win) {
        return win.location.hostname;
    }
}


module.exports = PageInspector;
