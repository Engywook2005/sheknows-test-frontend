/**
 * Created by Greg on 7/25/2017.
 */
class PixelManager {
    constructor(className) {
        this.trackingBaseURL = "http://localhost:82/pixel.php?pageTitle=$pageTitle$&hostName=$hostName$&fromIframe=$fromIframe$&invokedOrder=$invokedOrder$";
        this.className = className;
    }

    firePixel(args, pixelTarget, doc) {
       const finalizedPixel = this.populateMacros(args);
       this.addPixelToDom(finalizedPixel, pixelTarget, doc);
    }

    populateMacros(args) {
        let prop;
        let returnedPixel = this.trackingBaseURL;
        for(prop in args) {
            const targString = "$" + prop + "$";
            returnedPixel = returnedPixel.replace(targString, encodeURIComponent(args[prop]));
        }
        //TODO strip unknown macros
        return returnedPixel;
    }

    addPixelToDom(pixelURL, pixelTarget, doc) {
        const newPixel = doc.createElement("img");
        newPixel.setAttribute("src", pixelURL);
        newPixel.setAttribute('class', this.className);
        newPixel.setAttribute('style', 'display: none');
        pixelTarget.appendChild(newPixel);
    }


}

module.exports = PixelManager;