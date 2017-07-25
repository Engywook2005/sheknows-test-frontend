/**
 * Created by Greg on 7/25/2017.
 */

class BeaconCounter {
    constructor(targClassName) {
        this.targClassName = targClassName;
        this.beaconsFound = 0;
    }

    countBeaconsFound(doc) {
        const imagesOnPage = document.getElementsByTagName('img');
        let i;
        for(i = 0; i < imagesOnPage.length; i++) {
            if(imagesOnPage[i].className === this.targClassName) {
                this.beaconsFound++;
            }
        }
        return this.beaconsFound;
    }
}

module.exports = BeaconCounter;
