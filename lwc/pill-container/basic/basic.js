import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {
    items = [
        {
            type: 'avatar',
            href: 'https://www.salesforce.com',
            label: 'Avatar Pill 1',
            src: '/assets/images/avatar2.jpg',
            fallbackIconName: 'standard:user',
            variant: 'circle',
            alternativeText: 'User avatar',
            isLink: true,
        },
        {
            type: 'avatar',
            href: '',
            label: 'Avatar Pill 2',
            src: '/assets/images/avatar2.jpg',
            fallbackIconName: 'standard:user',
            variant: 'circle',
            alternativeText: 'User avatar',
        },
        {
            type: 'avatar',
            href: 'https://www.google.com',
            label: 'Avatar Pill 3',
            src: '/assets/images/avatar2.jpg',
            fallbackIconName: 'standard:user',
            variant: 'circle',
            alternativeText: 'User avatar',
            isLink: true,
        },
    ];
}
