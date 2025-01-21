const CATEGORIES=[
    {id:1,img:'./assets/images/image 25.svg', name:'breakfast', color:'default'},
    {id:2,img:'./assets/images/image 20.svg',name:'vegan', color:'green'},
    {id:3,img:'./assets/images/image 21.svg',name:'meat',color:'red'},
    {id:4, img:'./assets/images/image 22.svg' , name:'dessert',color:'yellow'},
    {id:5, img:'./assets/images/image 23.svg', name:'lunch',color:'default'},
    {id:6,img:'./assets/images/image 24.svg',name:'chocolate',color:'default'},
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
               let createTitle = this.#createElement('p',`${this.className}__item-title`)
                 createTitle.innerText = this.content[key]
                 createdElement.append(createTitle)
             }else if (key === 'img'){
                 let createImg = this.#createElement('img',`${this.className}__item-img`)
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

