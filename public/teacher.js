const button = document.querySelectorAll('.delete')

Array.from(button).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log(this.parentNode.childNodes[1], "check here")
    const title = this.parentNode.childNodes[1].innerText
    fetch('removeClass', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'classTitle': title,
            })
    }).then(function (response) {
      // window.location.reload()
    
    })
  });
});