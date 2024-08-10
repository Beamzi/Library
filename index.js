const myLibrary = [];

let inputsArr = [];

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.toggleReadStatus = function() {
    this.read = this.read === 'yes' ? 'no' : 'yes';
}

console.log(myLibrary)

const newBookBtn = document.querySelector('.newBookbtn')


newBookBtn.addEventListener('click', (e) => {
    e.target.style['background-color'] = 'red';

    const inputContainer = document.querySelector('.inputContainer')
    const labelContainer = document.querySelector('.labelContainer')
    const article = document.querySelector('article')


    const labelText = ['Title', 'Author', 'Pages', 'Read']

    for (let i = 0; i < 4; i++) {
        const labelsCreate = document.createElement('label')
        labelContainer.append(labelsCreate)
        const inputsCreate = document.createElement('input')
        inputContainer.append(inputsCreate)
        if (i === 3) {
            inputsCreate.remove();
        }
    }

    const inputYes = document.createElement('input')
    const yesSpan = document.createElement('span');
        yesSpan.textContent = 'yes'
        inputYes.type = 'radio'
        inputYes.value = 'yes'
        inputYes.name = 'choice'
        inputYes.checked = true;
    const inputNo = document.createElement('input')
    const noSpan = document.createElement('span');
        noSpan.textContent = 'no'
        inputNo.type ='radio'
        inputNo.value = 'no'
        inputNo.name = 'choice'
    inputContainer.append(yesSpan, inputYes, noSpan,inputNo)



    const labels = document.querySelectorAll('label')
   // const inputs = document.querySelectorAll('inputs')

    labels.forEach((element, index) => {
        for (let i = 0; i < labelText.length; i++) {
            if (index === i) {
                element.textContent = labelText[i]
            };       
        };
    });

    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'ADD BOOK'
    article.append(submitBtn)


    const inputs = document.querySelectorAll('input')
    inputs.forEach((element, index) => {
        element.classList.add(`input${index}`)
    });

    const input0 = document.querySelector('.input0')
    const input1 = document.querySelector('.input1')
    const input2 = document.querySelector('.input2')
    const input3 = document.querySelector('.input3')
    const input4 = document.querySelector('.input4')

    const bookDisplay = document.querySelector('.bookDisplay')

/*
    Book.prototype.readCheck = function () {
        this.read = 'yes'
    }
        */

    /*
    Book.prototype.readCheck = function (input3, input4) {
        return input3.checked ? input3.value : input4.checked ? input4.value : null
    }
        */
    
    submitBtn.addEventListener('click', (e) => {
        let title = input0.value
        let author = input1.value
        let pages = input2.value
        let read = input3.checked ? input3.value : input4.checked ? input4.value : null
        let newBook = new Book(`${title}`, `by ${author}`, `${pages}`, `${read}`)
        myLibrary.push(newBook)
        console.log(myLibrary)

        const bookContainer = document.createElement('div')
        bookContainer.classList.add('cards')
        bookDisplay.append(bookContainer)

        const containerContent = document.createElement('p')
        bookContainer.append(containerContent)

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X'
        bookContainer.append(deleteBtn)

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.textContent = 'Toggle Read Status';
        bookContainer.append(toggleReadBtn);

        /*

        for (let i = 0; i < myLibrary.length; i++) {
            containerContent.innerHTML = `author: ${myLibrary[i].author} 
            <br> title: ${myLibrary[i].title}
            <br> pages: ${myLibrary[i].pages}
            <br> read: ${myLibrary[i].read}`
        };

        */
        

        const updateBookDisplay = () => {
            containerContent.innerHTML = `author: ${newBook.author} 
            <br> title: ${newBook.title}
            <br> pages: ${newBook.pages}
            <br> read: ${newBook.read}`;
        };
        


        toggleReadBtn.addEventListener('click', () => {
            newBook.toggleReadStatus();
            updateBookDisplay();
        });



        deleteBtn.addEventListener('click' , () => {
            bookContainer.remove();
        });
    });
});












const addBookToLibrary = () => {



}
addBookToLibrary();