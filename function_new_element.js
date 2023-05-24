function new_list() {
    const new_list_n = document.createElement('ul');
    document.body.appendChild(new_list_n);
    
    let array_of_li = ["Первый пункт", "Второй пункт", "Третий пункт", "Четвертый пункт", "Пятый пункт", "Шестой пункт", "Седьмой пункт", "Восьмой пункт", "Девятый пункт", "Десятый пункт"];


    for (let n = 0; n < array_of_li.length; n++ ) {
        let new_li = document.createElement('li');
        new_li.textContent = array_of_li[n];
        new_list_n.append(new_li);
    }
   
}


    
    