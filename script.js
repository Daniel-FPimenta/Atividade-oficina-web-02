function calcular() {
    let r = document.getElementById("raio").value;
    r = parseFloat(r);

    if (r > 0) {
        let circunferencia = 2 * Math.PI * r;
        let area = Math.PI * Math.pow(r, 2);
        let volume = (4 / 3) * Math.PI * Math.pow(r, 3);

        document.getElementById("area").innerText = area.toFixed(2);
        document.getElementById("circunferencia").innerText = circunferencia.toFixed(2);
        document.getElementById("volume").innerText = volume.toFixed(2);
    } else {
        alert("Insira um número positivo");
    }
}