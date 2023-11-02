const input = document.getElementById('todoInput')
const btn = document.getElementById('todoAddBtn')
const ul = document.getElementById('todo-list')

btn.addEventListener('click', () => {
    if(input.value === "") {
        alert("Lütfen boş bırakmyaınız bir TODO ekleyiniz")
    }else {
        let li = document.createElement('li')
        li.classList.add("list-item")

        let checkboxContainer = document.createElement('div')

        let checkbox = document.createElement('input')
        checkbox.classList.add('checkbox')
        checkbox.setAttribute('type', 'checkbox')

        let p = document.createElement('p')
        p.classList.add('todo')
        p.textContent = input.value

        let iconContainer = document.createElement('div')
        iconContainer.classList.add('icon-container')

        let icon = document.createElement('i')
        icon.classList.add('fa-solid', 'fa-trash', 'fa-xl')

        checkboxContainer.appendChild(checkbox)
        iconContainer.appendChild(icon)

        li.appendChild(checkboxContainer)
        li.appendChild(p)
        li.appendChild(iconContainer)

        ul.appendChild(li)

        iconContainer.addEventListener('click', function() {
            this.parentElement.remove()
        })

        checkbox.addEventListener('click', function() {
            if(!p.classList.contains('line-through')) {
                this.parentElement.nextSibling.classList.add('line-through')
            }else {
                this.parentElement.nextElementSibling.classList.remove('line-through')
            }
        })
    }

    input.value = ""
})