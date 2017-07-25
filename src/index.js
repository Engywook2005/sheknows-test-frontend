/**
 * Created by Greg on 7/25/2017.
 */

const PageViewer = require('./pageViewer');
const Pixels = require('./pixels');

(function() {
    const className = "sheKnowsTestClass";
    const win = window;
    const doc = window.document;
    const pageInspex = new PageViewer.PageInspector();
    const beaconCounter = new PageViewer.BeaconCounter(className);
    const pixelManager = new Pixels.PixelManager(className);

    const pageViewData = pageInspex.getPageDetails(doc, win);
    const beaconCount = beaconCounter.countBeaconsFound(doc);
    pageViewData.invokedOrder = beaconCount;

    pixelManager.firePixel(pageViewData, document.getElementsByTagName('body')[0], document);
})();

module.exports.PageViewer = PageViewer;
module.exports.Pixels = Pixels;
