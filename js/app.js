for (const item_tab of bth_tabs) {
    item_tab.addEvenListener('click', function ())
    for (const)
}



let uls = document.querySelectorAll('.items-pricing ul')


for (const ul of uls) {

    ul.addEventListener('click', function () {
        for (const iterator of uls) {
            iterator.classList.remove('active')
            iterator.querySelector('li:nth-child(3)').classList.remove('active')
        }
        ul.classList.add('active')
        ul.querySelector('li:nth-child(3)').classList.add('active')
    })
}
