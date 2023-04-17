let inputs = document.querySelectorAll(".inputs input");


for (let i = 0; i < inputs.length; i++) {
    let inp = inputs[i];
    let eff = inp.nextElementSibling;
    inp.onfocus = function () {
        if (inp.value === "") {
            eff.classList.add("labelEff");
        }
    };
    inp.onblur = function () {
        if (inp.value === "") {
            eff.classList.remove("labelEff");
        }
    };
};


let bar = document.querySelector(".bars");

let nav = document.querySelector(".nav-bar");

bar.addEventListener("click", () => {
    nav.classList.toggle("Show");
    bar.classList.toggle("X_effect")
})








let search = document.querySelector(".header input");

search.onfocus = function () {
    this.style.maxWidth = "210px";
    this.style.cursor = "auto";
}

search.onblur = function () {
    this.style.maxWidth = "115px";
    this.style.cursor = "pointer";
}


let pass = document.getElementById("pass")
let eye = document.getElementById("eye")

eye.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
        eye.name = "eye-off-outline";

    } else {
        pass.type = "password";
        eye.name = "eye-outline";
    }
})