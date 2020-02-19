/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответсвует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');

filterNameInput.addEventListener('keyup', function() {
    // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
});

let cookie = document.cookie.split('; ').reduce((prev, current) => {
    const [name, value] = current.split('=');
    prev[name] = value;
    return prev;
}, {});
console.log(cookie);

function isMatching(full, chunk) {
    return full.toLowerCase().includes(chunk.toLowerCase());
}


function createTable(name, value){
    let addNameInputValue =  name;
    let addValueInputValue = value;
    let addTr = document.createElement("tr");
    let addTd1 = document.createElement("td");
    let addTd2 = document.createElement("td");
    let addTd3 = document.createElement("td");
    let button = document.createElement("button");
    button.id = 'delete';
    button.innerHTML = 'Удалить';

    addTd1.innerHTML=addNameInputValue;
    addTd2.innerHTML=addValueInputValue;
    addTd3.appendChild(button);
    addTr.appendChild(addTd1);
    addTr.appendChild(addTd2);
    addTr.appendChild(addTd3);
    listTable.appendChild(addTr);
}



function showCookies(filter) {
    listTable.innerHTML = '';
    Object.keys(cookie).forEach(item => {
        console.log(cookie[item]);
        if (isMatching(cookie[item], filter) || isMatching(item, filter)){
            createTable(item, cookie[item])
        }
    })
}



addButton.addEventListener('click', () => {
    document.cookie = `${addNameInput.value}=${addValueInput.value}`;

    // createTable(addNameInput.value, addValueInput.value);

    showCookies(filterNameInput.value);


    // console.log(cookie.name)

});



listTable.addEventListener('click', function(e) {
    // const deleteButton = homeworkContainer.querySelector('#delete');
    // console.log(deleteButton);
    listTable.innerHTML = '';
    if(e.target.closest('#delete')){
        e.target.closest('tr').remove()
    }

    document.cookie = addNameInput.value + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = addValueInput.value + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
})


