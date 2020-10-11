# :star: :star: ng2-common :star: :star:
 
The idea behind this open source package is that lot of tasks are repetitive :triumph: so it's a greate idea if we can automate it,
and that will safe you lot of time and energy :smiley: by transforming lot of code lines to small reusable peaces of code.


## Documentation

### ncToggle directive:
This is a very powerful directive that make bloc of code toggle(show/hide) when clicking a trigger in specific template, 
the text will hide automatically at the beggining and will change status everytime you click the button.
you can also configure the animation that will take place when changing element visibility, and the directive is fully customazible with properties,
so persons with little knowledge of Angular can use it. 

#### Example of use: 
``` 
<button [ncToggle]="description">Click</button>
<div #description>
This is a block that will show and hide when clicking the button above...
</div> 
```

### nc-confirm component:
Whenever you want to make a confirmation before an action, you may need a modal, and you create
a code everytime to deal with that, so we create for you a useful compononent, that use the Angular way, 
because it it built on top of Angular material, with a very easy syntax, so all you need is a small pieces of code, 
to deal with this commonly encountered task.

#### Example of use: 
```
<nc-confirm [data]="confimDate" [trigger]="deleteButton" (confirm)="deleteItem()"></nc-confirm>
<button #deleteButton>delete</button>/> 
```


## Notice
This library is under construction, and will be soon part of nmp online registery, so everyone can install it easly 
and take advantage of it :smile:, we also welcome any participation to the libraray.
