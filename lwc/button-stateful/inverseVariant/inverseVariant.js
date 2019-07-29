import { LightningElement, track } from 'lwc';

export default class Basic extends LightningElement {
    @track isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}
