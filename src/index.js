document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const ul = document.getElementById('tasks')
  const form = document.forms["create-task-form"]
  form.addEventListener('submit', (ev)=>{
    ev.preventDefault()
    const value = form.querySelector('input[type="text"]').value
    const li = document.createElement('li')
    const p = document.createElement('p')
    const deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click',(ev)=>{
      ev.target.parentElement.remove()
    })

    li.appendChild(p)
    li.appendChild(deleteBtn)
    ul.appendChild(li)

    // li.textContent = value
    p.textContent = value
    deleteBtn.textContent = 'Remove Task'
  })
});
