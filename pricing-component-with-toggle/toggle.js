function toggle(t) {
    let basic = document.querySelector(".price-basic");
    let pro = document.querySelector(".price-pro");
    let master = document.querySelector(".price-master");

    if (basic.innerHTML === "19,99€" && pro.innerHTML === "24,99€" && master.innerHTML === "39,99€") {
        basic.innerHTML = "199,90€";
        pro.innerHTML = "249,90€";
        master.innerHTML = "399,90€";
    } else {
        basic.innerHTML = "19,99€";
        pro.innerHTML = "24,99€";
        master.innerHTML = "39,99€";
    }
}