// Javascripts

const init = () => {
        console.log(`Javascript is working!`)

        const $Projects = document.querySelector(".projects");

        fetch("projects.json")
                .then((response) => response.json())
                .then((data) => {
                        data.forEach((project) => {
                                const $projectContainer = document.createElement("div");
                                $projectContainer.classList.add("project-container");
                                $projectContainer.innerHTML = `
                                                <h2>${project.title}</h2>
                                                <ul class=technologies></ul>
                                                <p>${project.description}</p>
                                                <figure><img src="${project.imagePath}"></figure>`
                                $Projects.appendChild($projectContainer);

                                //const $technologies = document.querySelector(".technologies");
                                //project.technologies.forEach((technology) => {
                                //        const $TechnologiesListItem = document.createElement("li");
                                //        $TechnologiesListItem.innerHTML = technology
                                //        $technologies.appendChild($TechnologiesListItem)
                                //});
                        });
                })
                .catch((error) => console.error("Error loading JSON file", error));




}

init()