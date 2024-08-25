const token = "ba7ec6d8e8b466aae079b25fd958ef93"
const form = document.getElementById("buscar")
const resultadoDiv = document.getElementById("resultado")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const superheroName = document.getElementById("heroName").value.trim()
    if (superheroName) {
        const URL = `https://superheroapi.com/api.php/ba7ec6d8e8b466aae079b25fd958ef93/search/${superheroName}`
        try {
            let resul = await fetch(URL)
            if (!resul.ok) {
                throw new Error("Error en la solicitud")
            }
            let data = await resul.json()
            if (data.response === "error") {
                resultadoDiv.innerHTML =
                    `<p>${data.error}</p>`
            } else if (data.results && data.results.length > 0) {
                const hero = data.results[0]
                const { image, biography, work } = hero
                const heroInfo =
                    `<h2>${hero.name}</h2>
                    <img src="${image.url}">
                    <p> Nombre completo: ${biography["full-name"]}</p>
                    <p>Cómics: ${work["comic-appearance"] && work["comic-appearance"].length > 0 ? work["comic-appearance"].join(", ") : "No disponible"}
                    <p>Profesion: ${work.occupation} </p>
                      `
                resultadoDiv.innerHTML = heroInfo
            }
        } catch (error) {
            resultadoDiv.innerHTML =
                `<p> Error con la api: ${error.message}</p>`
        }
    }
    else {
        resultadoDiv.innerHTML =
            `<p>Ingresar un nombre de tu superheroe</p>`
    }

})



