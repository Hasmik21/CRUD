

 module.exports = function (url, clickBtn) {
   return clickBtn.addEventListener("click", () => {
            fetch(url)
            .then(function(data) {
                return data.json()
            })
            .then(data => {
                data.forEach(item => {
                    if(item.isComplete !== true) {
                        item.style.display = "none";
                        console.log(item);
                    }
                })
            }) 
        })
}


