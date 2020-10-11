# ng2-common package 

The idea behind this open source library is that lot of tasks are repetitive and need to be automated,
so this package can safe you lot of time by transforming lot of code lines to small reusable peaces of code


## Documentation


### ncToggle directive:
this is a very powerful directive that make bloc of code toggle(show/hide) when clicking a trigger in specific template, 
the text will hide automatically at the beggining and will change status everytime you click the button.
you can also configure the animation that will take place when changing element visibility, and the directive is fully customazible with properties,
so persons with little knowledge of Angular can use it. 

### Example of use: 

`<button [ncToggle]="description">Click</button>
<div #description>
This is a block that will show and hide when clicking the button above...
</div>`
