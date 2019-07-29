# **Accordion**

[Salesforce Accordion LWC Library Link](https://developer.salesforce.com/docs/component-library/bundle/lightning-accordion/example)

A collection of vertically stacked sections with multiple content areas.

**Descriptor**: lightning-accordion

**Experience**: Lightning Experience, Lightning Communities, Salesforce Mobile App, Standalone Lightning App

### **Page Navigation**
* [Basic Accordion](#Basic-Accordion)
* [Accordion with Conditional Section](#Accordion-with-Conditional-Section)
* [Accordion with Multiple Open Sections](#Accordion-with-Multiple-Open-Sections)
* [Documentation](#Documentation)
* [Specifications](#Specifications)
* [Developer Notes](#Developer-Notes)

<br />

## **Basic Accordion**

### **Description**

Accordion with a pre-selected open section, and a button that programmatically opens another section. By default, only one section can be open at a time. You can close a section by opening another section.

### **Code Examples**

<details><summary>basic.html</summary>

```html    
    <template>
    <p class="slds-text-heading_small">{activeSectionMessage}</p>

    <lightning-button onclick={handleSetActiveSectionC} label="Open Section C"></lightning-button>

    <lightning-accordion class="example-accordion"
                         onsectiontoggle={handleToggleSection}
                         active-section-name="B">
        <lightning-accordion-section name="A" label="Accordion Title A">
            <lightning-button-menu slot="actions"
                                  alternative-text="Show menu"
                                  icon-size="x-small"
                                  menu-alignment="right">
                <lightning-menu-item value="New" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="Edit" label="Menu Item Two"></lightning-menu-item>
            </lightning-button-menu>
            <p>This is the content area for section A.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>The section height expands to fit your content.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="B" label="Accordion Title B">
            <p>This is the content area for section B.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>The section height expands to fit your content.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="C" label="Accordion Title C">
            <p>This is the content area for section C.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>The section height expands to fit your content.</p>
        </lightning-accordion-section>
    </lightning-accordion>
</template>
```

</details>

<details><summary>basic.js</summary>

```javascript
import { LightningElement, track } from 'lwc';

export default class LightningExampleAccordionBasic extends LightningElement {
    @track activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }
}
```

</details>

<br />

## **Accordion with Conditional Section**

### **Description**

Accordion sections can be toggled to be visible or not.

### **Code Examples**

<details><summary>conditional.html</summary>

```html
<template>
    <p class="slds-text-heading_small">{activeSectionMessage}</p>

    <lightning-button onclick={handleToggleSectionD} label="Toggle Section D"></lightning-button>

    <lightning-accordion class="example-accordion"
                         onsectiontoggle={handleToggleSection}
                         active-section-name="B">
        <lightning-accordion-section name="A" label="Accordion Title A">
            <p>This is the content area for section A.</p>
            <p>Donec vitae tellus egestas, faucibus ipsum ac, imperdiet erat. Nam venenatis non ante at sagittis. Integer vel purus eget nunc semper placerat. Nam tristique quam leo, et posuere enim condimentum quis. Ut sagittis libero id lectus tempor maximus. Nunc ut tincidunt eros, a hendrerit leo. Suspendisse quis fermentum dolor. Nulla euismod consectetur leo, id condimentum nunc consequat quis.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="B" label="Accordion Title B">
            <p>This is the content area for section B.</p>
            <p>Nam at elit et justo scelerisque ullamcorper vel a felis. Mauris sit amet lorem sed est sagittis blandit nec ac turpis. Ut a mi id turpis pharetra ornare. Nullam rhoncus feugiat nunc, ac pulvinar felis pulvinar at. Nullam efficitur aliquet justo et ultricies. Maecenas eu felis aliquam, tincidunt elit at, suscipit leo. Duis ut urna nec nibh hendrerit lacinia. Sed non auctor libero. Sed pellentesque tempor mollis.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="C" label="Accordion Title C">
            <p>This is the content area for section C.</p>
            <p>Nulla ornare ipsum felis, vel aliquet dui blandit vel. Integer accumsan velit quis mauris pharetra, nec sollicitudin dui eleifend. Cras condimentum odio mi, nec ullamcorper arcu ullamcorper sed. Proin massa arcu, rutrum a ullamcorper nec, hendrerit in sem. Etiam tempus eros ut lorem tincidunt, id condimentum nulla molestie. Morbi hendrerit elit pretium, ultrices neque non, ullamcorper justo. Quisque vel nisi eget eros efficitur semper. Nulla pulvinar venenatis quam vitae efficitur. Nam facilisis sollicitudin quam ac imperdiet.</p>
        </lightning-accordion-section>

        <template if:true={isDVisible}>
            <lightning-accordion-section name="D" label="Accordion Title D">
                <p>This is the content area for section D.</p>
                <p>Suspendisse est eros, maximus et risus a, luctus bibendum eros. Etiam ultrices tellus vehicula neque ornare, viverra venenatis purus accumsan. Aenean viverra finibus odio, vitae bibendum nisi tincidunt sed. Ut at porta dui. Praesent varius eleifend quam eget gravida. Curabitur maximus, leo sit amet dapibus gravida, mi ligula lacinia turpis, id feugiat tellus urna quis odio. Nullam tristique orci eu magna hendrerit vestibulum. Sed id purus at metus tristique tristique et vitae arcu. Sed molestie odio felis, sit amet lacinia mauris rutrum nec. Morbi semper lacinia tellus bibendum faucibus. Vestibulum eget ornare sapien, eget ultrices orci.</p>
            </lightning-accordion-section>
        </template>
    </lightning-accordion>
</template>
```

</details>

<details><summary>conditional.js</summary>

```js
import { LightningElement, track } from 'lwc';

export default class LightningExampleAccordionConditional extends LightningElement {
    @track activeSectionMessage = '';
    @track isDVisible = false;

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleToggleSectionD() {
        this.isDVisible = !this.isDVisible;
    }

    get isMessageVisible() {
        return this.activeSectionMessage.length > 0;
    }
}
```

</details>

<br />

## **Accordion with Multiple Open Sections**

### **Description**
Accordion sections can be open or closed without restrictions, programmatically or by clicking the section headers.

### **Code Examples**

<details><summary>multiple.html</summary>

```html
    <template>
    <p>{activeSectionsMessage}</p>

    <lightning-accordion allow-multiple-sections-open
                         onsectiontoggle={handleSectionToggle}
                         active-section-name={activeSections}>
        <lightning-accordion-section name="A" label="Accordion Title A">
            <p>This is the content area for section A.</p>
            <p>Donec vitae tellus egestas, faucibus ipsum ac, imperdiet erat. Nam venenatis non ante at sagittis. Integer vel purus eget nunc semper placerat. Nam tristique quam leo, et posuere enim condimentum quis. Ut sagittis libero id lectus tempor maximus. Nunc ut tincidunt eros, a hendrerit leo. Suspendisse quis fermentum dolor. Nulla euismod consectetur leo, id condimentum nunc consequat quis.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="B" label="Accordion Title B">
            <p>This is the content area for section B.</p>
            <p>Nam at elit et justo scelerisque ullamcorper vel a felis. Mauris sit amet lorem sed est sagittis blandit nec ac turpis. Ut a mi id turpis pharetra ornare. Nullam rhoncus feugiat nunc, ac pulvinar felis pulvinar at. Nullam efficitur aliquet justo et ultricies. Maecenas eu felis aliquam, tincidunt elit at, suscipit leo. Duis ut urna nec nibh hendrerit lacinia. Sed non auctor libero. Sed pellentesque tempor mollis.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="C" label="Accordion Title C">
            <p>This is the content area for section C.</p>
            <p>Nulla ornare ipsum felis, vel aliquet dui blandit vel. Integer accumsan velit quis mauris pharetra, nec sollicitudin dui eleifend. Cras condimentum odio mi, nec ullamcorper arcu ullamcorper sed. Proin massa arcu, rutrum a ullamcorper nec, hendrerit in sem. Etiam tempus eros ut lorem tincidunt, id condimentum nulla molestie. Morbi hendrerit elit pretium, ultrices neque non, ullamcorper justo. Quisque vel nisi eget eros efficitur semper. Nulla pulvinar venenatis quam vitae efficitur. Nam facilisis sollicitudin quam ac imperdiet.</p>
        </lightning-accordion-section>
    </lightning-accordion>
</template>
```

</details>

<details><summary>multiple.js</summary>

```js
import { LightningElement, track } from 'lwc';

export default class LightningExampleAccordionMultiple extends LightningElement {
    @track activeSections = ['A', 'C'];
    @track activeSectionsMessage = '';

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;

        if (openSections.length === 0) {
            this.activeSectionsMessage = 'All sections are closed';
        } else {
            this.activeSectionsMessage =
                'Open sections: ' + openSections.join(', ');
        }
    }
}
```
</details>

<br />

## **Documentation**

<details><summary>View Documentation</summary>

A lightning-accordion component groups related content in a single container. Only one accordion section is expanded at a time. When you select a section, it's expanded or collapsed. Each section can hold one or more Lightning components.

This component inherits styling from accordion in the Lightning Design System.

To additionally style this component, use the Lightning Design System helper classes.

This example creates a basic accordion with three sections, where section B is expanded by default.

```html
<template>
   <lightning-accordion active-section-name="B">
     <lightning-accordion-section name="A" label="Accordion Title A">This is the content area for section A</lightning-accordion-section>
     <lightning-accordion-section name="B" label="Accordion Title B">This is the content area for section B</lightning-accordion-section>
     <lightning-accordion-section name="C" label="Accordion Title C">This is the content area for section C</lightning-accordion-section>
   </lightning-accordion>
</template>
```

To find out which sections are active, use the sectiontoggle event.

```html
<template>
    <lightning-accordion allow-multiple-sections-open={multiple} onsectiontoggle={handleSectionToggle}>
        <!-- Your accordion sections here -->
    </lightning-accordion>
</template>
```

Use the detail property to return the active section names.

```js
import { LightningElement } from 'lwc';

export default class DemoAccordion extends LightningElement {
    multiple = true;

    handleSectionToggle(event){
        const myOpenSections = event.detail.openSections;
    }
}
```
Usage Considerations

The first section in the lightning-accordion is expanded by default. To change the default, use the active-section-name attribute. This attribute is case-sensitive.

If two or more sections use the same name and that name is also specified as the active-section-name, the first section is expanded by default.

Set the allow-multiple-sections-open attribute to true to allow multiple sections open at a time, with all sections closed by default.

Custom Events
sectiontoggle

The event fired when an accordion section is toggled.

The sectiontoggle event returns the following parameter.

PARAMETER | TYPE | DESCRIPTION
--- | --- | ---
openSections | object | The name of the active section. Returns an array if multiple sections are opened.
The event properties are as follows.

PROPERTY | VALUE | DESCRIPTION
--- | --- | ---
bubbles | false | This event does not bubble.
cancelable | false | This event has no default behavior that can be canceled. You can't call preventDefault() on this event.
composed | false | This event does not propagate outside the template in which it was dispatched.

</details>

<br />

## **Specification**

<details><summary>View Specification</summary>

### lightning-accordion (module)

A collection of vertically stacked sections with multiple content areas.
lightning-accordion | module 
--- | ---
Support: | GA
Access: | global
Abstract: | false
Extensible: | false

### Attributes

| NAME | TYPE | ACCESS | REQUIRED | DEFAULT | DESCRIPTION |
--- | --- | --- | --- | --- | ---
title |  | global |  |  | Displays tooltip text when the mouse moves over the element.
active-section-name | | global | | | Changes the default expanded section. The first section in the accordion is expanded by default.
allow-multiple-sections-open | | global | | | If present, the accordion allows multiple open sections. Otherwise, opening a section closes another that's currently open.

### Slots

| NAME | DESCRIPTION |
--- | ---
default | Placeholder for accordion-section components.

</details>

<br />

## **Developer Notes**

Add additional code, notes or tips here.