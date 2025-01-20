const CATEGORIES=[
    {id:1,name:'breakfast',img:'./assets/images/image 25.svg', color:'default'},
    {id:2,name:'vegan',img:'./assets/images/image 20.svg'},
    {id:3,name:'meat',img:'./assets/images/image 21.svg'},
    {id:4,name:'dessert',img:'./assets/images/image 22.svg'},
    {id:5,name:'lunch',img:'./assets/images/image 23.svg'},
    {id:6,name:'chocolate',img:'./assets/images/image 24.svg'},
]
class CreateBlock{
    constructor(wrapperElement,className,content) {
        this.wrapperElement = wrapperElement;
        this.className= className;
        this.content = content;
    }

    createElementBlock(appendBlock){
        let createdElement = this.#createElement(this.wrapperElement,`${this.className}__item`)

         Object.keys(this.content).map((key)=>{
             if(key === 'name' ){
               let createTitle = this.#createElement('p',`${this.className}__title`)
                 createTitle.innerText = this.content[key]
                 createdElement.append(createTitle)
             }else if (key === 'img'){
                 let createImg = this.#createElement('img',`${this.className}__img`)
                 createImg.src = this.content[key]
                 createdElement.append(createImg)
             }
         })

        appendBlock.append(createdElement)
    }
    #createElement(element,className){
        let createdElement =document.createElement(element);
        createdElement.classList.add(className);

        return createdElement;
    }



}
const categoriesSection = document.querySelector('.categories');
const categoriesLists = categoriesSection.querySelector('.categories__lists')


document.addEventListener('DOMContentLoaded',()=>{

    for (const category of CATEGORIES) {
        let block = new CreateBlock('div','categories',category)
            block.createElementBlock(categoriesLists)
    }

})

