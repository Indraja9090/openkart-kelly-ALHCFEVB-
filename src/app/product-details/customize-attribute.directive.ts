import { Directive, HostBinding, HostListener, Input } from "@angular/core";

/* Custome @Directive({ }) takes JS object.
    The selector here has the same functionality wher @Component class do has. */
@Directive({
    selector: "[appManage]"    //As we customizing Attribute Directive we place the selector in [ ]
})
export class ManageButtonDirective {

    /* when we want to bind a class property to HTML element's custome @Directive selector ' appManage ',
       that property variable name should be same name of selector ' appManage' */
    @Input() appManage = '';    
    
    /* Customized Attibute Directive class always takes an HTML element #referencename.
        Which means, To which HTML element we bind ' appManage ', 
        that element #referencename sent as input to  the constructor() */
    constructor(){   

    }

    @HostBinding('class.open') isOpen: boolean = false; // says What to do

    //@HostBinding depends on @HostListener

    @HostListener('click') manageButtonOpen(){      //says when to do
 
        this.isOpen = !this.isOpen;
        console.log('passed input from directive',this.appManage);

    }

}

